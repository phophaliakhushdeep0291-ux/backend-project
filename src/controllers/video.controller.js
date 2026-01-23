import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Video } from "../models/video.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const uploadVideo=asyncHandler(async(req,res)=>{
    const {title,description,isPublished}=req.body;
    if(!title||!description){
        throw new ApiError(400,"Title and description are required");
    }
    const videoFilepath=req.files?.video[0]?.path;
    const thumbnailFilePath=req.files?.thumbnail[0]?.path;
    if(!videoFilepath){
        throw new ApiError(400,"Video file is required")
    }
    const videoUpload=await uploadOnCloudinary(videoFilepath,"video");
    if(!videoUpload?.secure_url){
        throw new ApiError(500,"Failed to upload video")
    }
    let thumbnailUpload;
    if(thumbnailFilePath){
        thumbnailUpload=await uploadOnCloudinary(thumbnailFilePath,"image");
        if(!thumbnailUpload?.secure_url){
            throw new ApiError(500,"Failed to Upload thumbnail");
        }
    }

    const newVideo= await Video.create({
        videoFile: videoUpload.secure_url,
        thumbnail:thumbnailUpload?.secure_url||"",
        title,
        description,
        isPublished:isPublished!==undefined? isPublished:true,
        owner:req.user._id,
    })
    return res
    .status(201)
    .json(new ApiResponse(201,newVideo,"Video uploaded successfully"))
})
const updateUploadedVideo=asyncHandler(async(req,res)=>{
    
})


export {
    uploadVideo,
}