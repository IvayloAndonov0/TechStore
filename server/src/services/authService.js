import User from "../models/User.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import "dotenv/config";

const secret = process.env.JWT_SECRET;


export default {
    register(userData){
        return User.create(userData);
    },
    async login(email, password) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error({status:404,message:error.message});

        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error({status:404,message:error.message});
        }

        const payload = {
            id: user.id,
            email: user.email,
        };
        
        const token = jwt.sign(payload, secret, { expiresIn: '5s' });
        

        return token
    },
    async getUser(email){
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Invalid email or password!');
        }
        return user;
    }
}