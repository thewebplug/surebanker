import axios from "axios";

export const verifyBvn = async (id, bvn, gender, token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

  console.log("request", {
    id, bvn, gender
  });

  try {
    const res = await axios.post(
      `https://api.dev.surebanker.ai/user-kyc/bvn-verification/${id}`,
      {
        bvn,
        gender,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
export const verifyNin = async (id, nin, gender, token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

  console.log("request", {
    id, nin, gender
  });

  try {
    const res = await axios.post(
      `https://api.dev.surebanker.ai/user-kyc/nin-verification/${id}`,
      {
        nin,
        gender,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const checkKycStatus = async (id, token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

  try {
    const res = await axios.get(
      `https://api.dev.surebanker.ai/user-kyc/tier/${id}`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
