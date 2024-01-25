import { v2 as cloudinary } from 'cloudinary';

cloudinary.config(process.env.CLOUDINARY_URL ?? '');

export const uploadToCloudinary = async (image: string) => {
  //image must be base64 string
  try {
    return cloudinary.uploader
      .upload(`data:image/png:base64,${image}`)
      .then((resp) => resp.secure_url);
  } catch (error) {
    console.log(error);
    return null;
  }
};
