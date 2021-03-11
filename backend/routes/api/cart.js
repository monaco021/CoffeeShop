const express = require('express');
const router = express.Router();
const { ShoppingCart, Product, User } = require("../../db/models");
const { requireAuth } = require('../../utils/auth');
const asyncHandler = require("express-async-handler");


router.get(
    "/",
    requireAuth,
    asyncHandler(async(req,res) => {
        const user = req.user;
        const cart = ShoppingCart.findOne({
            where: { userId: user.id },
            include: { model: Product }
        });

        if (cart) {
            return res.json(cart);
        } else {
            return res.json({});
        };
    })
);

router.post(
    "/:productId",
    requireAuth,
    asyncHandler( async(req,res) => {
        const user = await User.findByPk( req.body.userId);
        const product = await Product.findByPk(req.params.productId);
        const cart = await ShoppingCart.create({
            userId: user.dataValues.id,
            productId: product
        });
        
        return res.json(cart);
    })
);