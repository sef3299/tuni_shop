const products =require("../model/ProductModel")

exports.deleteproduct=async(req,res)=>{
    try{
        const product=await products.findByIdAndDelete(req.params.id)
        res.status(200).send({message:'product succesfuly delete',product})
    }catch(error){
        res.status(500).send({message:'failed to delete',error})

    }
}
exports.updateteproduct=async(req,res)=>{
    try{
        const product=await products.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).send({message:'product succesfuly update',product})
    }catch(error){
        res.status(500).send({message:'failed to update',error})
    }

} 
    exports.addproduct=async (req,res)=>{
        console.log(req.body)
        try{
            const product=new products({...req.body,userID: req.user.id})
            await product.save()
            res.status(200).send({massage:'product succesfully added',product})
    
    
        }catch(error){
            res.status(500).send({massage:'errorcr',error})
    
        }

}
exports.getproduct=async(req,res)=>{
    try{
        const product= await products.find().populate("userID")
        console.log(product)
        res.status(200).send({massage:'product succesfully geted',product})


    }catch(error){
        res.status(500).send({massage:'errorcr',error})

    }
}
exports.myproducts = async (req, res) => {
    try {
      const myproduct = await products.find({ userID: req.user.id });
      res.status(200).send({ msg: "your offers", myproduct });
    } catch (error) {
      res.status(500).send({ msg: "couldn't get your offers" });
    }
  };