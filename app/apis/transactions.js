import axios from "axios";

export const getAccountDetails = async (id, token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

  console.log("request", {
    id, token
  });

  try {
    const res = await axios.get(
      `https://api.dev.surebanker.ai/transactions/virtual-account/${id}`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const walletToWallet = async (
    fromWalletId,
    toWalletId,
    amount,
    fees,
    remarks,
    token
) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

  console.log("request", {
    fromWalletId,
    toWalletId,
    amount,
    fees,
    remarks,
    token
  });

  try {
    const res = await axios.post(
      `https://api.dev.surebanker.ai/transactions/wallet2wallet/${fromWalletId}`,
      {
        toWalletId,
    amount,
    fees,
    remarks
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};


export const getBanks = async (token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };


  try {
    const res = await axios.get(
      `https://api.dev.surebanker.ai/transactions/bank-list`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const verifyBank = async (
    accountNo,
  bankCode,
    token
) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      console.log({
        accountNo,
        bankCode,
          token
      });
      

  try {
    const res = await axios.post(
      `https://api.dev.surebanker.ai/transactions/verify-bank-account`,
      {
        accountNo,
        bankCode,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
export const walletToBank = async (
    amount,
  accountNo,
  bankCode,
  remarks,
  id,
  token
) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      console.log({
        amount,
  accountNo,
  bankCode,
  remarks,
  id,
  token
      });
      

  try {
    const res = await axios.post(
      `https://api.dev.surebanker.ai/transactions/withdraw/${id}`,
      {
        amount,
        accountNo,
        bankCode,
        remarks
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};