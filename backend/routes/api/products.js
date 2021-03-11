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