import axios from "axios";

export const getProfile = async (
token
) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  try {
    const res = await axios.get(
      `http://44.243.70.60:4000/auth/profile`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};
