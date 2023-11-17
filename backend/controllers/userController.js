import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc    fetch all users
// @route GET /api/users

const getUsers = asyncHandler(async(req,res) => {
    const pageSize = 20;
    const page = Number(req.query.pageNumber) || 1;

    const keyword = req.query.keyword ? { name : { $regex: req.query.keyword , $options : 'i'}}
    : {};

    const count = await User.countDocuments({...keyword});

    const users = await User.find({...keyword}).limit(pageSize).skip(pageSize * (page - 1));
    res.json({users , page , pages: Math.ceil(count/ pageSize)});
});

export {getUsers};
