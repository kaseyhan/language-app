import mongoose from 'mongoose';
import { Router, Response, Request } from 'express';
import User from '../models/user'
import { IUser } from '../types/user';

const routeUsers = function (router: Router) {
    router.post('/users', async function (req: Request, res: Response) {
        try {
            const body = req.body as Pick<IUser, 'email' | 'password' >
            const user: IUser = new User({
                email: body.email,
                password: body.password,
            })
            const newUser: IUser = await user.save();
            res.status(201).json({ message: 'User added', user: newUser });
        } catch (error) {
            res.status(500).json({ message: 'Error adding user', error })
        }
    });

    router.get('/users', async function (req: Request, res: Response) {
        try {
            const users: IUser[] = await User.find();
            res.status(200).json({ users })
        } catch (error) {
            throw error;
        }
    });

    router.put('/users/:id', async function (req: Request, res: Response) {
        try {
            const {
                params: { id },
                body,
            } = req;
            const updateUser: IUser | null = await User.findOneAndUpdate(
                { _id: id },
                body
            )

            res.status(200).json({ message: 'User updated', user: updateUser })
        } catch (error) {
            throw error;
        }
    });

    router.delete('/users/:id', async function (req: Request, res: Response) {
        try {
            const deletedUser: IUser | null = await User.findByIdAndDelete({ _id: req.params.id});
            res.status(200).json({ message: 'User deleted', user: deletedUser })
        } catch (error) {
            throw error;
        }
    });

    return router;
}

export default routeUsers;