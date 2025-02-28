const Image = require("../models/image")
const {uploadToCloudinary} = require("../helpers/cloudinaryHelpers")

const uploadImage = async(req,res) =>{
    try {
        // file checking 
        if(!req.file){
            res.status(404).jsoon({
                success: false,
                message: "file location not found"
            })
        }

        // upload to cloudinary 
        const {url,publicId} = await uploadToCloudinary(req.file.path)

        // store the data in the cloudinary
        const newImage = new Image({
            url,
            publicId,
            uploadedBy: req.userId //authencation not done yet
        })

        await newImage.save()

        return res.status(201).json({
            success: true,
            message: "Image uploaded successfully",
            image: newImage
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            sucess: false,
            message: "Error uploading image"
        })
    }
}

module.exports = uploadImage;