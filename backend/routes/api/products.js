const express = require('express');
const router = express.Router();
const { Product } = require("../../db/models");
const { requireAuth } = require('../../utils/auth');
const asyncHandler = require("express-async-handler");

router.get(
    "/homepage", 
    asyncHandler( async(req,res)=> {
        const coffeeProducts = await Product.findAll();
        return res.json(coffeeProducts);
    })
);

router.get(
    "/:id",
    asyncHandler( async(req,res) => {
        const productId = req.params.id;
        const individualProduct = Product.findByPk(productId);
        return res.json(individualProduct);
    })
);

module.exports = router;