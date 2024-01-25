import { uploadToCloudinary } from '@/lib/cloudinary';

export async function POST(req: Request, res: Response) {
  const data = await req.json();

  //image upload
  const cloudinaryResp = await uploadToCloudinary(data.image);
  console.log(cloudinaryResp);

  return Response.json(data);
}
