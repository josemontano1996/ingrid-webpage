import User from '@/models/User';
import { dbConnect, dbDisconnect } from './db';

export const checkOAuthUser = async (
  oAuthEmail: string,
  oAuthName: string,
  oAuthImage: string,
) => {
  await dbConnect();
  const user = await User.findOne({ email: oAuthEmail });

  //User already exists, procceed to log in
  if (user) {
    await dbDisconnect();
    const { _id, name, email, role } = user;
    return { _id, name, email, role };
  }

  //User doesnt exist, create a new one and log in
  const newUser = new User({
    email: oAuthEmail,
    name: oAuthName,
    role: 'client',
    image: oAuthImage,
  });
  try {
    await newUser.save();
    await dbDisconnect();
    const { _id, name, email, role } = newUser;
    return { _id, name, email, role };
  } catch (error) {
    console.log(error);
    await dbDisconnect();
    return;
  }
};
