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
      `https://api.dev.surebanker.ai/auth/profile`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};
