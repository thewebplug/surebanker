import axios from "axios";

export const signUp = async (
  email,
  password,
  firstName,
  middleName,
  homeAddress,
  lastName,
  phone,
  dob,
  countryCode,
  userType,
) => {
  console.log('request', {
    email,
  password,
  firstName,
  middleName,
  homeAddress,
  lastName,
  phone,
  dob,
  countryCode,
  userType,
  });
  
  try {
    const res = await axios.post(
      `https://api.dev.surebanker.ai/auth/signup`,
      {
        email,
        password,
        firstName,
        middleName,
        homeAddress,
        lastName,
        phone,
        dob,
        countryCode,
        userType,
      }
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const login = async (
  username,
  password,
) => {
  console.log('request', {
    username,
  password,
  });
  
  try {
    const res = await axios.post(
      `https://api.dev.surebanker.ai/auth/login`,
      {
        username,
        password,
      }
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};
export const sendOtp = async (
  phone
) => {
  console.log('request', {
   phone
  });
  
  try {
    const res = await axios.post(
      `https://api.dev.surebanker.ai/auth/send-otp`,
      {
        phone
      }
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};
