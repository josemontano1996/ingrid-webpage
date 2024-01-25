export const bufferImgToBase64 = async (image: File) => {
  const buffer = await image.arrayBuffer();
  const base64Image = Buffer.from(buffer).toString('base64');
  return base64Image;
};
