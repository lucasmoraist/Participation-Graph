const bd = require("../models")

class UserController {
    
    static async findAll(req, res){

        try {
            const users = await bd.Users.findAll();
            return res.status(200).json(users)
        }catch(error){
            return res.status(500).json(error.message);
        }

    }

    static async create(req, res){
        try{
            const newUser = await bd.Users.create(req.body);
            return res.status(200).json(newUser);
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
}

module.exports = UserController;