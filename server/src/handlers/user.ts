import { createJWT } from './../../src/modules/auth';
import { hashPassword, comparePasswords } from './../modules/auth';
import { request } from "http"
import prisma from "../db"

export const createNewUser = async(req, res) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            username: req.body.username,
            password: await hashPassword(req.body.password)
        }
    })

    const token = createJWT(user)
    res.json({token})
}


export const signIn = async(req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email,
        }
    })

    const isValid = await comparePasswords(req.body.password, user.password)

    if (!isValid) {
        res.status(401)
        res.json({message: "User not valid"})
    }

    const token = createJWT(user)
    res.json({token})
}