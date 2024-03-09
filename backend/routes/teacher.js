const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const {Teacher} = require("../db");
const {JWT_SECRET} = require("../config");
const { authMiddleware } = require("../middleware");

const teacherRouter = express.Router();

const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
    fullName: zod.string().min(1),
})

teacherRouter.post("/signup", async (req, res) => {
    const body = req.body;
    const {success} = signupSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const user = await Teacher.findOne({
        username: body.username
    });

    if(user){
        return res.status(411).json({
            message: "Email already taken"
        })
    }

    const dbTeacher = await Teacher.create(body);

    const token = jwt.sign({
        userId: dbTeacher._id
    }, JWT_SECRET);

    res.json({
        message: "Teacher Created Successfully",
        token: token
    })
});


const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

teacherRouter.post("/signin", async (req, res) => {
    const body = req.body;
    const {success} = signinSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "Error while logging in"
        });
    }

    const user = await Teacher.findOne({
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
        message: "Teacher Not Found!!"
    });
});

const updateSchema = zod.object({
    image: zod.string().optional(),
    dob: zod.date()
});

teacherRouter.put("/", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const updatedInfo = req.body;

    const {success} = updateSchema.safeParse(updatedInfo);
    if(!success){
        return res.status(411).json({
            message: "Error while updating information"
        });
    }

    await Teacher.updateOne({
        _id: userId
    }, updatedInfo);
    
    res.json({
        message: "Updated successfully" 
    })
});

// teacherRouter.get("/bulk", async (req, res) =>{
//     const filter = req.query.filter || "";

//     const users = await Teacher.find({
//         $or: [{
//             fullName: {
//                 '$regex': filter,
//                 '$options': 'i'
//             }
//         }, {
//             : {
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
//                 : item.,
//                 _id: item._id
//             }
//         })
//     })
// })

module.exports = {
    teacherRouter
};