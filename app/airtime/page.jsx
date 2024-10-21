"use client";

import Image from "next/image";
import Navigation from "../components/navigation";
import ProfileHeader from "../components/profile-header";
import { useEffect, useState } from "react";
import { getAccountDetails } from "../apis/transactions";
import {
  getBillerListByCategory,
  fetchBillerItem,
  validateCustomer,
  purchaseBill,
} from "../apis/biling";
import { useSelector } from "react-redux";

export default function Data() {
  const auth = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState(false);
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [providerName, setProviderName] = useState(null);
  const [customerId, setCustomerId] = useState(null);
  const [paymentItem, setPaymentItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const responseThree = await purchaseBill(
      customerId,
      selectedProvider?.division,
      paymentItem,
      selectedProvider?.product,
      selectedProvider?.id,
      auth?.userInfo?.finclusionId,
      Number(amount),
      phone,
      auth?.token
    );
    console.log("validateCustomer", responseThree);

    if (responseThree?.status === 201) {
      alert("Airtime purchase successful")
    } else {
      alert(responseThree?.data?.message);
    }
  };
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    setPhone("");
    setAmount("");
  };

  useEffect(() => {
    const otpInputs = document.querySelectorAll(
      ".surebanker-data__otp-modal__otp-group__otp-input"
    );

    otpInputs.forEach((input, index) => {
      input.addEventListener("input", (event) => {
        const inputValue = event.target.value;

        if (inputValue && index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        }
      });

      input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && index > 0 && !input.value) {
          otpInputs[index - 1].focus();
          event.preventDefault();
        }
      });
    });
  }, [open]);

  const handleGetAccountInfo = async () => {
    const response = await getAccountDetails(
      auth?.userInfo?.finclusionId,
      auth?.token
    );

    // if (response?.status === 200) {
    //   setProviders(response?.data?.data);
    // } else {
    //   alert(response?.data?.message);
    // }
    console.log("getAccountDetails", response);
    setAccount(response?.data?.data);
  };

  const handleGetBillerListByCategory = async () => {
    const response = await getBillerListByCategory("Airtime", auth?.token);

    if (response?.status === 200) {
      setProviders(response?.data?.data);
    } else {
      alert(response?.data?.message);
    }
    console.log("getBillerListByCategory", response);
    // setAccount(response?.data?.data)
  };

  const handleFetchBillerItem = async (data) => {
    if (!!data) {
      setLoading(true);
      const response = await fetchBillerItem(
        data?.division,
        data?.product,
        data?.id,
        auth?.token
      );

      if (response?.status === 201) {
        // setProviders(response?.data?.data);
        setCustomerId(response?.data?.data[0]?.id);
        setPaymentItem(response?.data?.data[0]?.paymentitemid);
        const responseTwo = await validateCustomer(
          data?.division,
          response?.data?.data[0]?.paymentitemid,
          response?.data?.data[0]?.id,
          data?.id,
          auth?.token
        );
        console.log("validateCustomer", responseTwo);

        if (responseTwo?.status === 201) {
        } else {
          alert(responseTwo?.data?.message);
        }
      } else {
        alert(response?.data?.message);
      }
      console.log("fetchBillerItem", response);
      // setAccount(response?.data?.data)
      setLoading(false);
    }
  };

  useEffect(() => {
    // setIsClient(true);
    handleGetAccountInfo();
    handleGetBillerListByCategory();
  }, []);

  useEffect(() => {
    console.log("providerName", providerName);

    const temp = providers?.filter((item) => item?.id === providerName);

    handleFetchBillerItem(temp[0]);
    setSelectedProvider(temp[0]);
  }, [providerName]);

  return (
    <div className="surebanker-data">
      <ProfileHeader />
      <div
        className="surebanker-data__nav"
        onClick={() => (window.location.href = "/")}
      >
        <svg
          className="pointer"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => (window.location.href = "/")}
        >
          <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
          <path
            d="M16.7722 9.2278C17.0759 9.53155 17.0759 10.024 16.7722 10.3278L11.8777 15.2222L16.7722 20.1167C17.0759 20.4205 17.0759 20.9129 16.7722 21.2167C16.4685 21.5204 15.976 21.5204 15.6723 21.2167L10.2278 15.7722C9.92407 15.4685 9.92407 14.976 10.2278 14.6723L15.6723 9.2278C15.976 8.92407 16.4685 8.92407 16.7722 9.2278Z"
            fill="#212121"
          />
        </svg>

        <div>Airtime</div>
      </div>
      <div className="surebanker-data__tab">
        <div onClick={() => (window.location.href = "/data")}>Data</div>
        <div className="surebanker-data__tab__active">Airtime</div>
      </div>
      <div className="surebanker-data__slide">
        <Image
          src="/assets/data.png"
          objectFit="cover"
          layout="fill"
          style={{ zIndex: "-1", borderRadius: "6px" }}
        />
        <div>
          <div className="surebanker-data__slide__title">
            ₦
            {account?.walletBalance?.split(".")[0]
              ? account?.walletBalance?.split(".")[0]
              : "0"}{" "}
            <span>
              .
              {account?.walletBalance?.split(".")[1]
                ? account?.walletBalance?.split(".")[1]
                : "00"}
            </span>
          </div>
          <div className="surebanker-data__slide__subtitle">
            Savings Account
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.47246 7.42555C5.39527 7.42555 5.31809 7.39711 5.25715 7.33617C4.92402 7.00305 4.74121 6.56023 4.74121 6.09305C4.74121 5.12211 5.52934 4.33398 6.50027 4.33398C6.96746 4.33398 7.41027 4.5168 7.7434 4.84992C7.80027 4.9068 7.83277 4.98398 7.83277 5.06523C7.83277 5.14648 7.80027 5.22367 7.7434 5.28055L5.68777 7.33617C5.62684 7.39711 5.54965 7.42555 5.47246 7.42555ZM6.50027 4.94336C5.86652 4.94336 5.35059 5.4593 5.35059 6.09305C5.35059 6.29617 5.4034 6.49117 5.5009 6.6618L7.06902 5.09367C6.8984 4.99617 6.7034 4.94336 6.50027 4.94336Z"
                fill="white"
              />
              <path
                d="M3.89957 8.73875C3.83051 8.73875 3.75738 8.71437 3.70051 8.66562C3.26582 8.29594 2.87582 7.84094 2.5427 7.31281C2.11207 6.6425 2.11207 5.54969 2.5427 4.87531C3.53395 3.32344 4.97613 2.42969 6.49957 2.42969C7.39332 2.42969 8.27488 2.73844 9.04676 3.31937C9.18082 3.42094 9.20926 3.61187 9.1077 3.74594C9.00613 3.88 8.8152 3.90844 8.68113 3.80687C8.01488 3.30312 7.25926 3.03906 6.49957 3.03906C5.18738 3.03906 3.93207 3.82719 3.05457 5.20438C2.74988 5.67969 2.74988 6.50844 3.05457 6.98375C3.35926 7.45906 3.70863 7.86938 4.09457 8.2025C4.22051 8.31219 4.23676 8.50312 4.12707 8.63312C4.0702 8.70219 3.98488 8.73875 3.89957 8.73875Z"
                fill="white"
              />
              <path
                d="M6.4998 9.75719C5.95948 9.75719 5.43136 9.64751 4.92355 9.43219C4.76917 9.36719 4.69605 9.18844 4.76105 9.03407C4.82605 8.87969 5.0048 8.80657 5.15917 8.87157C5.5898 9.05438 6.04073 9.14782 6.49573 9.14782C7.80792 9.14782 9.06323 8.35969 9.94073 6.98251C10.2454 6.50719 10.2454 5.67844 9.94073 5.20313C9.8148 5.00407 9.67667 4.81313 9.53042 4.63438C9.4248 4.50438 9.44511 4.31344 9.57511 4.20376C9.70511 4.09813 9.89605 4.11438 10.0057 4.24844C10.1642 4.44344 10.3185 4.65469 10.4567 4.87407C10.8873 5.54438 10.8873 6.63719 10.4567 7.31157C9.46542 8.86344 8.02323 9.75719 6.4998 9.75719Z"
                fill="white"
              />
              <path
                d="M6.77996 7.82766C6.63778 7.82766 6.50778 7.7261 6.47934 7.57985C6.44684 7.41329 6.55653 7.25485 6.72309 7.22641C7.16996 7.14516 7.54371 6.77141 7.62496 6.32454C7.65746 6.15797 7.8159 6.05235 7.98246 6.08079C8.14903 6.11329 8.25871 6.27172 8.22621 6.43829C8.09621 7.1411 7.53559 7.69766 6.83684 7.82766C6.81653 7.8236 6.80028 7.82766 6.77996 7.82766Z"
                fill="white"
              />
              <path
                d="M2.43746 10.4614C2.36027 10.4614 2.28309 10.433 2.22215 10.372C2.10434 10.2542 2.10434 10.0592 2.22215 9.94141L5.25684 6.90672C5.37465 6.78891 5.56965 6.78891 5.68746 6.90672C5.80527 7.02453 5.80527 7.21953 5.68746 7.33734L2.65277 10.372C2.59184 10.433 2.51465 10.4614 2.43746 10.4614Z"
                fill="white"
              />
              <path
                d="M7.52828 5.37156C7.45109 5.37156 7.37391 5.34313 7.31297 5.28219C7.19516 5.16438 7.19516 4.96938 7.31297 4.85156L10.3477 1.81688C10.4655 1.69906 10.6605 1.69906 10.7783 1.81688C10.8961 1.93469 10.8961 2.12969 10.7783 2.2475L7.74359 5.28219C7.68266 5.34313 7.60547 5.37156 7.52828 5.37156Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="surebanker-data__slide__carousel">
          <div className="surebanker-data__slide__carousel__active"></div>
          <div></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="surebanker-data__label">Phone number</label>
        <div className="surebanker-data__input">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <select
            name=""
            id=""
            value={providerName}
            onChange={(e) => {
              setProviderName(e.target.value);
            }}
          >
            <option value="">Select provider</option>
            {providers?.map((provider, index) => (
              <option key={index} value={provider.id}>{provider?.name}</option>
            ))}
          </select>
        </div>

        <label className="surebanker-data__category__title">Enter Amount</label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <button
          className="surebanker-data__button"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      {open && (
        <form className="surebanker-data__otp-modal" onSubmit={handleOtpSubmit}>
          <div className="surebanker-data__otp-modal__title">
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <circle cx="22.5" cy="22.5" r="22.5" fill="#FFF1D1" />
              <rect
                width="30"
                height="19.1576"
                transform="matrix(-0.568424 0.822736 0.822736 0.568424 24.0527 5)"
                fill="url(#pattern0_2512_3348)"
              />
              <defs>
                <pattern
                  id="pattern0_2512_3348"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_2512_3348"
                    transform="scale(0.00271739 0.00425532)"
                  />
                </pattern>
                <image
                  id="image0_2512_3348"
                  width="368"
                  height="235"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>

            <div>
              <div>Airtime Purchase</div>
              <div>
                <span>NGN</span> {amount} to {phone}
              </div>
            </div>
          </div>

          <label htmlFor=""></label>
          <div className="surebanker-data__otp-modal__otp-group">
            <input
              className="surebanker-data__otp-modal__otp-group__otp-input"
              type="text"
              maxLength={1}
              required
            />
            <input
              className="surebanker-data__otp-modal__otp-group__otp-input"
              type="text"
              maxLength={1}
              required
            />
            <input
              className="surebanker-data__otp-modal__otp-group__otp-input"
              type="text"
              maxLength={1}
              required
            />
            <input
              className="surebanker-data__otp-modal__otp-group__otp-input"
              type="text"
              maxLength={1}
              required
            />
          </div>

          <div className="surebanker-data__otp-modal__subtitle">
            Enter Transaction PIN to continue
          </div>

          <button className="surebanker-data__otp-modal__button" type="submit">
            Continue Transaction
          </button>
        </form>
      )}

      <Navigation />
    </div>
  );
}
