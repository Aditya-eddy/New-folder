const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const {Student} = require("../db");
const {JWT_SECRET} = require("../config");
const { authMiddleware } = require("../middleware");

const studentRouter = express.Router();

const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
    fullName: zod.string().min(1),
})

studentRouter.post("/signup", async (req, res) => {
    const body = req.body;
    const {success} = signupSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const user = await Student.findOne({
        username: body.username
    });

    if(user){
        return res.status(411).json({
            message: "Email already taken"
        })
    }

    const dbStudent = await Student.create(body);

    const token = jwt.sign({
        userId: dbStudent._id
    }, JWT_SECRET);

    res.json({
        message: "Student Created Successfully",
        token: token
    })
});


const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

studentRouter.post("/signin", async (req, res) => {
    const body = req.body;
    const {success} = signinSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "Error while logging in"
        });
    }

    const user = await Student.findOne({
        username: body.username,
        password: body.password
    });
    if(user){
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
    
        res.json({
            token: token
        })
        return;
    }
    
    res.status(411).json({
        message: "Student Not Found!!"
    });
});

const updateSchema = zod.object({
    image: zod.string().optional(),
    dob: zod.date()
});

studentRouter.put("/", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const updatedInfo = req.body;

    const {success} = updateSchema.safeParse(updatedInfo);
    if(!success){
        return res.status(411).json({
            message: "Error while updating information"
        });
    }

    await Student.updateOne({
        _id: userId
    }, updatedInfo);
    
    res.json({
        message: "Updated successfully" 
    })
});

// studentRouter.get("/bulk", async (req, res) =>{
//     const filter = req.query.filter || "";

//     const users = await Student.find({
//         $or: [{
//             fullName: {
//                 '$regex': filter,
//                 '$options': 'i'
//             }
//         }, {
//             lastName: {
//                 '$regex': filter,
//                 '$options': 'i'
//             }
//         }]
//     });

//     res.json({
//         users: users.map((item) => {
//             return {
//                 username: item.username,
//                 fullName: item.fullName,
//                 lastName: item.lastName,
//                 _id: item._id
//             }
//         })
//     })
// })

module.exports = {
    studentRouter
};