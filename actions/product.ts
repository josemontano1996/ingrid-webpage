'use server';

import { cloudinaryFolders } from '@/consts/cloudinaryConsts';
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config(process.env.CLOUDINARY_URL ?? '');

export const createNewProduct = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  const image = await uploadImages(formData.get('image') as File);
  if (!image) {
    throw new Error('Could not upload image.');
  }
  console.log();

  /*   // Todo: RevalidatePaths
      revalidatePath('/admin/products');
      revalidatePath(`/admin/product/${product.slug}`);
      revalidatePath(`/products/${product.slug}`); */
};

const uploadImages = async (image: File) => {
  try {
    const buffer = await image.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString('base64');

    return cloudinary.uploader
      .upload(`data:image/png;base64,${base64Image}`, {
        folder: cloudinaryFolders.main,
      })
      .then((r) => r.secure_url);
  } catch (error) {
    console.log(error);
    return null;
  }
};
