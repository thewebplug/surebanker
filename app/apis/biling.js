import axios from "axios";

export const getBillerListByCategory = async (category, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log("request", {
    category,
    token,
  });

  try {
    const res = await axios.get(
      `https://api.dev.surebanker.ai/transactions/billerList/${category}`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const fetchBillerItem = async (
  divisionId,
  productId,
  billerId,
  token
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log("request", {
    divisionId,
    productId,
    billerId,
    token,
  });

  try {
    const res = await axios.post(
      `https://api.dev.surebanker.ai/transactions/fetchBillerItem/${divisionId}/${productId}/${billerId}`,
      {
        divisionId,
        productId,
        billerId,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const validateCustomer = async (
  divisionId,
  paymentItem,
  customerId,
  billerId,
  token
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log("request", {
    divisionId,
  paymentItem,
  customerId,
  billerId,
  token
  });

  try {
    const res = await axios.post(
      `https://api.dev.surebanker.ai/transactions/billerList/validateCustomer`,
      {
        divisionId,
        paymentItem,
        customerId,
        billerId,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const purchaseBill = async (
 customerId,
  division,
  paymentItem,
  productId,
  billerId,
  finclusionId,
  amount,
  phoneNumber,
  token
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log("request", {
    customerId,
  division,
  paymentItem,
  productId,
  billerId,
  finclusionId,
  amount,
  phoneNumber,
  token
  });

  try {
    const res = await axios.post(
      `https://api.dev.surebanker.ai/transactions/billerList/purchaseBill`,
      {
        customerId,
        division,
        paymentItem,
        productId,
        billerId,
        finclusionId,
        amount,
        phoneNumber,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
