import User from '@/models/User';
import { db } from '.';
import getServerLocale from '@/lib/getServerLocale';

export const checkOAuthUser = async (
  oAuthEmail: string,
  oAuthName: string,
  oAuthImage: string,
) => {
  await db.connect();
  const user = await User.findOne({ email: oAuthEmail });

  //User already exists, procceed to log in
  if (user) {
    await db.disconnect();
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
    await db.disconnect();
    const { _id, name, email, role } = newUser;
    return { _id, name, email, role };
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return;
  }
};
