import {Request, Response} from 'express';



export const newUser = (req: Request, res: Response) => {

    const {body} = req

    res.json({
        msg: 'New User',
        body: body
    })

}

export const loginUser = (req: Request, res: Response) => {

    const {body} = req
    
    res.json({
        msg: 'login user',
        body: body
    })

}