const stripe = require("stripe")("sk_test_51Of1A1Divl974WsPkcKvlVNwL6H4Bpe4CXy57se5B7YMcQevZTN2tfWOYsmQjT79tzpqvPn54m3b1JcUvAR6ACKu00h7EdIKJH");

const users = require("../model/model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    try {
        const user = await users.findOne({ email });
        if (user) {
            res.status(400).send({ errors: [{ msg: "user exist" }] });
        } else {
            const NewUser = new users(req.body);
            const salt = 10;
            const hashpassword = bcrypt.hashSync(password, salt);
            NewUser.password = hashpassword;
            const secretkey = "azerty";
            const token = jwt.sign({ id: NewUser._id }, secretkey);
            await NewUser.save();
            res.status(200).send({ msg: "registration has done successfuly", NewUser, token });
        }

    } catch (error) {
        res.status(500).send({ msg: "registration failed", error });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await users.findOne({ email });
        if (!user) {
            res.status(400).send({ errors: [{ msg: "email not found you need to register" }] });
        } else {
            const compare = bcrypt.compareSync(password, user.password);
            if (!compare) {
                res.status(400).send({ errors: [{ msg: "wrong password" }] });
            } else {
                const secretkey = "azerty";
                const token = jwt.sign({ id: user._id }, secretkey);
                res.status(200).send({ msg: "login successfully", user, token });
            }
        }
    } catch (error) {
        res.status(500).send({ msg: "login faild", error });
    }
};

exports.getcurrent =async (req, res) => {
    res.status(200).send({ user: req.user });
};

exports.payment = async (req, res) => {
    console.log(req.body);
    const line_items = req.body.cart.map(item => {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.product.title,
                    images: [item.product.image],

                    description: item.product.description,
                    metadata: {
                        id: item.product._id
                    }
                },
                unit_amount: item.product.price * 100,
            },
            quantity: item.quantity,
        }
    });

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: 'http://localhost:3000/success', // Mettez l'URL de succès correct
            cancel_url: 'http://localhost:3000/cart', // Mettez l'URL d'annulation correcte
        });
        res.send({ URL: session.url });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Payment failed", error });
    }
}
    
    exports.deleteuser=async(req,res)=>{
        try{
            const user=await users.findByIdAndDelete(req.params.id)
            res.status(200).send({message:'user succesfuly delete',user})
        }catch{
            res.status(500).send({message:'failed to delete',error})
    
        }
    }
    exports.updateteuser=async(req,res)=>{
        console.log(req.body, req.params.id)
        try{
            const user=await users.findByIdAndUpdate(req.params.id,{$set:req.body})
            res.status(200).send({message:'user succesfuly update',user})
        }catch{
            res.status(500).send({message:'failed to update',error})
        }
    
};
