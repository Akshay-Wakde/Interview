import { User } from "../models/userModel.js";

export const insertData = async(req,res) => {
    const { email, name } = req.body;

   try {
        const user = await User.create(req.body);   
        res.status(201).json(user);
   } catch (error) {
        res.status(400).json({
            error:error.message
        })
   }
}

export const updateData = async(req,res) =>{
    try {
            const { userId } = req.params.id;
            const { body } = req.body;

        const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
        if (!user) return res.status(404).json({ error: "Not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

// Delete a user
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ error: "Not found" });
        res.status(200).json({ message: "User deleted" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};