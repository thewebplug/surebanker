"use client";
import Image from "next/image";
import Navigation from "../components/navigation";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  getAccountDetails,
  getBanks,
  verifyBank,
  walletToWallet,
} from "../apis/transactions";

export default function Transaction() {
  const auth = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState(false);
  const [inputWidth, setInputWidth] = useState(70);
  const [banks, setBanks] = useState([]);
  const [filteredBanks, setFilteredBanks] = useState([]);
  const [bankCode, setBankCode] = useState("");
  const [accountNo, setAccountNo] = useState([]);
  const [bankListOpen, setBankListOpen] = useState(false);
  const [bankName, setBankName] = useState("");
  const [toWalletId, setToWalletId] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  let maxWidth = 300;
  const inputRef = useRef(null);

  const handleGetAccountInfo = async () => {
    const response = await getAccountDetails(
      auth?.userInfo?.finclusionId,
      auth?.token
    );

    setAccount(response?.data?.data);
    console.log("getAccountDetails", response);
  };
  const handleGetBanks = async () => {
    const response = await getBanks(auth?.token);

    setBanks(response?.data?.data);
    setFilteredBanks(response?.data?.data);
    console.log("handleGetBanks", response);
  };
  const handleVerifyAccountNumber = async () => {
    setLoading(true);
    const response = await verifyBank(accountNo, bankCode, auth?.token);

    // setBanks(response?.data?.data);
    console.log("verifyBank", response);
    setLoading(false);
  };

  useEffect(() => {
    handleGetAccountInfo();
    handleGetBanks();
  }, []);

  useEffect(() => {
    const otpInputs = document.querySelectorAll(
      ".transaction__otp-modal__otp-group__otp-input"
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

  useEffect(() => {
    if (!!Number(accountNo) && accountNo?.length === 10) {
      handleVerifyAccountNumber();
    }
  }, [accountNo]);
  const handleBankSelect = ({ name, code }) => {
    setBankCode(code);
    setBankName(name);
    setBankListOpen(false);
  };

  const getTextWidth = (text, font) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font;
    return context.measureText(text).width;
  };

  useEffect(() => {
    const updateWidth = () => {
      const input = inputRef.current;
      if (input) {
        const textWidth = getTextWidth(
          input.value,
          getComputedStyle(input).font
        );
        const newWidth = Math.min(Math.max(70, textWidth + 10), maxWidth);
        setInputWidth(newWidth);
      }
    };

    const input = inputRef.current;
    console.log("input blaq", input);

    input.addEventListener("input", updateWidth);
    return () => input.removeEventListener("input", updateWidth);
  }, [maxWidth]);

  useEffect(() => {
    if (bankName?.trim()?.length > 0) {
      const temp = [...banks];
      const filtered = temp.filter((bank) =>
        bank?.name?.toLowerCase()?.includes(bankName?.toLowerCase())
      );
      setFilteredBanks(filtered);
    } else {
      setFilteredBanks([...banks]);
    }
  }, [bankName]);

  const handleWalletToWallet = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await walletToWallet(
      account?.walletId,
      toWalletId,
      Number(amount),
      0,
      "P2P",
      description,
      auth?.token
    );

    // setBanks(response?.data?.data);
    console.log("verifyBank", response);
    setLoading(false);
  };

  return (
    <div className="transaction">
      <div className="transaction__nav">
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

        <div>Transaction</div>
      </div>

      <div className="transaction__banner">
        <Image
          src="/assets/banner.png"
          objectFit="cover"
          layout="fill"
          style={{ borderRadius: "4px" }}
        />
        <div className="transaction__banner__title">Make Transfers</div>
        <div className="transaction__banner__nav">
          <div className="transaction__banner__nav__active"></div>
          <div></div>
        </div>
      </div>

      <form className="transaction__form" onSubmit={handleWalletToWallet}>
        <h1 className="transaction__title">
          <div>Enter Amount To Transfer</div>
          <div>See transaction History</div>
        </h1>
        <h2 className="transaction__subtitle">
          ₦{" "}
          <input
            type="number"
            placeholder="0.00"
            ref={inputRef}
            style={{ width: `${inputWidth}px`, transition: "width 0.2s" }}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </h2>

        <div className="transaction__limit">
          <div>
            Daily Transaction Limit <span>₦2,000,000.00</span>
          </div>
          <div>
            Remaining <span>₦2,000,000.00</span>
          </div>
        </div>

        <div className="transaction__recipient">
          <div className="transaction__recipient__title">
            Select Recepient’s Bank
          </div>

          <div className="transaction__recipient__recipients">
            <div>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#F2FAFF" />
                <path
                  d="M45.0627 54.3352L33.8902 39.7968C33.2874 39.0125 33.3486 37.9052 34.0342 37.1921L36.0164 35.1302C36.5757 34.5485 37.4298 34.3599 38.182 34.6519L55.4155 41.3424C56.4397 41.74 56.9544 42.889 56.4963 43.8875C54.6879 47.8287 51.2009 53.4696 46.952 54.9832C46.2565 55.2309 45.5126 54.9206 45.0627 54.3352Z"
                  fill="#D1EDFF"
                />
                <g clip-path="url(#clip0_12_462)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 14H45V44.3614H15V14Z"
                    fill="#D94F00"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.0685 19.8874H39.7591V27.5934H32.0685V19.8874ZM22.7711 31.4914V32.2453H24.0966V36.2335H25.0105V32.2148H26.2446V31.4609L22.7711 31.4919V31.4914ZM22.0885 32.426V31.6721C21.3553 31.3406 20.5121 31.2404 19.6487 31.6721C18.2329 32.3051 18.1823 35.4399 19.5986 36.0528C20.4119 36.4649 22.1081 36.2738 22.279 35.9119V33.4303H20.5926V34.0835H21.3351V35.3898C18.8954 36.5754 18.4436 30.8785 22.0885 32.426ZM27.7312 34.0432H28.6043C29.3272 34.0737 29.5183 35.4399 28.5744 35.4296H27.7312V34.0432ZM27.7312 32.1244H28.6043C29.3272 32.2551 29.0665 33.3301 28.5744 33.3601H27.7312V32.1244ZM26.8276 31.3912V36.1933H29.227C30.4518 35.7513 30.5024 33.8527 29.227 33.6513C30.4017 33.5212 30.4622 31.3607 28.4339 31.3607L26.8276 31.3912ZM31.0642 32.7373V33.4504C31.7066 33.2697 33.1023 32.7673 32.9716 33.8325C31.7468 33.752 30.9134 33.973 30.773 34.7361C30.5422 36.3843 32.3091 36.5449 33.0522 35.7311V36.123H33.8954V33.2294C33.6847 32.2948 32.2895 32.1745 31.0642 32.7373ZM31.7768 34.5962C31.9678 34.3447 32.5802 34.3545 32.9918 34.4754V35.1084C32.3195 35.8313 31.2351 35.5003 31.7773 34.5957L31.7768 34.5962ZM35.6427 33.5914C35.8637 33.3502 37.0384 32.8979 37.2191 33.5914V36.1432H38.1625V33.4406C37.9616 32.315 36.8871 32.1141 35.5823 32.8778V32.4559H34.689V36.1633H35.6324L35.6427 33.5914ZM41.1243 32.4156L39.8897 34.0731L41.195 36.1127L42.3295 36.0828L40.894 34.1237L42.189 32.4456L41.1248 32.4156H41.1243ZM38.8658 31.1996H39.7993V36.1127H38.8652V31.2002L38.8658 31.1996Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.0685 19.8874H39.7591V27.5934H32.0685V19.8874Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_462">
                    <rect
                      width="30"
                      height="30.3614"
                      fill="white"
                      transform="translate(15 14)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div>GTB</div>
            </div>
            <div>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#F2F5FF" />
                <path
                  d="M45.0627 54.3352L33.8902 39.7968C33.2874 39.0125 33.3486 37.9052 34.0342 37.1921L36.0164 35.1302C36.5757 34.5485 37.4298 34.3599 38.182 34.6519L55.4155 41.3424C56.4397 41.74 56.9544 42.889 56.4963 43.8875C54.6879 47.8287 51.2009 53.4696 46.952 54.9832C46.2565 55.2309 45.5126 54.9206 45.0627 54.3352Z"
                  fill="#14FF9C"
                />
                <g clip-path="url(#clip0_12_463)">
                  <mask
                    id="mask0_12_463"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="17"
                    y="16"
                    width="28"
                    height="30"
                  >
                    <path d="M17 16H45V45.6643H17V16Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_12_463)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.8392 24.1748L19.8881 23.979L19.9371 23.7343L22.0909 16L45 16.049L19.6923 36.6573L31.2448 22.7063H22.5804L22.0909 22.7552C21.063 22.8042 20.1329 23.4406 19.8392 24.1748Z"
                      fill="#808285"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M43.7762 30.1468C43.7762 30.0489 43.0419 34.5035 41.8182 39.1049L17.8811 39.2517L43.7273 18.3496L32.1259 32.3986H40.8391L41.3287 32.3496C42.3566 32.3007 43.4336 30.8811 43.7762 30.1468Z"
                      fill="#ED1C24"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.0629 45.6643H17L19.7902 41.8461H17.9301L18.0769 40.7692H21.9441L19.1538 44.5874H21.2098L21.0629 45.6643ZM21.8462 45.6643L22.4825 40.7692H25.2727L25.1259 41.8461H23.5594L23.4615 42.6783H24.9301L24.8322 43.7552H23.3147L23.2168 44.5874H24.7832L24.6364 45.6643H21.8462ZM25.4685 45.6643L26.1049 40.7692H27.3287L28.7483 43.3147L28.8462 43.6084L29.042 44.1468C29.0449 43.8363 29.0612 43.526 29.0909 43.2168L29.3846 40.7692H30.6084L29.972 45.6643H28.7972L27.3776 43.1678L27.2308 42.8252L27.035 42.2867C27.0324 42.6136 27.0161 42.9402 26.986 43.2657L26.6923 45.6643H25.4685ZM31 45.6643L31.6364 40.7692H32.9091L32.2727 45.6643H31ZM33.9371 45.6643L34.4266 41.9441H33.3986L33.5455 40.7692H36.8741L36.7273 41.9441H35.6993L35.2098 45.6643H33.9371ZM36.8252 45.6643L37.4615 40.7692H38.7343L38.4895 42.6783H40.1538L40.3986 40.7692H41.6713L41.035 45.6643H39.7622L40.007 43.6573H38.3427L38.0979 45.6643H36.8252Z"
                      fill="#808285"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_12_463">
                    <rect
                      width="28"
                      height="29.6643"
                      fill="white"
                      transform="translate(17 16)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div>Zenith</div>
            </div>
            <div>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#F2FAFF" />
                <path
                  d="M45.0627 53.3352L33.8902 38.7968C33.2874 38.0125 33.3486 36.9052 34.0342 36.1921L36.0164 34.1302C36.5757 33.5485 37.4298 33.3599 38.182 33.6519L55.4155 40.3424C56.4397 40.74 56.9544 41.889 56.4963 42.8875C54.6879 46.8287 51.2009 52.4696 46.952 53.9832C46.2565 54.2309 45.5126 53.9206 45.0627 53.3352Z"
                  fill="#D1EDFF"
                />
                <path
                  d="M34.7005 29.7661V35.831H32.9417V34.9453C32.7621 35.253 32.5015 35.5055 32.1882 35.6753C31.864 35.8459 31.5022 35.9323 31.1359 35.9266C30.3782 35.9266 29.812 35.7152 29.4372 35.2922C29.0623 34.8693 28.8753 34.2313 28.8761 33.3782V29.7661H30.6801V33.4143C30.6801 34.1479 30.995 34.5147 31.6248 34.5147C31.9992 34.5147 32.3023 34.3873 32.534 34.1323C32.7657 33.8773 32.8813 33.5424 32.8809 33.1275V29.7661H34.7005ZM41.5977 27V35.831H39.8154V34.9339C39.6307 35.2457 39.3613 35.4986 39.0385 35.6633C38.6869 35.8428 38.2967 35.9332 37.902 35.9266C37.4093 35.9348 36.9255 35.7951 36.5129 35.5256C36.0968 35.2474 35.7673 34.8577 35.5622 34.4011C35.3349 33.92 35.2213 33.3678 35.2213 32.7444C35.2213 32.1211 35.3349 31.5729 35.5622 31.0998C35.767 30.6512 36.0945 30.2697 36.5069 29.9994C36.9238 29.7365 37.4086 29.6016 37.9014 29.6115C38.2875 29.6068 38.6691 29.6951 39.0138 29.8689C39.335 30.0278 39.6046 30.2745 39.7913 30.5803V27H41.5977ZM39.4594 34.0902C39.6999 33.7835 39.8202 33.3426 39.8202 32.7673C39.8202 32.2008 39.6985 31.7643 39.4552 31.4576C39.2119 31.1509 38.8711 30.9974 38.433 30.997C37.986 30.997 37.639 31.1485 37.3921 31.4516C37.1451 31.7547 37.0217 32.1852 37.0217 32.7432C37.0217 33.3173 37.1451 33.7619 37.3921 34.077C37.639 34.3921 37.986 34.5496 38.433 34.5496C38.8767 34.5504 39.2189 34.3973 39.4594 34.0902ZM48.4949 29.7661V35.831H46.712V34.9339C46.5273 35.2459 46.2576 35.4989 45.9345 35.6633C45.583 35.8423 45.1929 35.9323 44.7986 35.9254C44.3062 35.9388 43.821 35.8054 43.4046 35.5423C42.9882 35.2793 42.6594 34.8983 42.46 34.448C42.2327 33.9737 42.1191 33.4255 42.1191 32.8034C42.1191 32.1812 42.2327 31.6268 42.46 31.1401C42.6639 30.6813 42.9935 30.2896 43.4107 30.0102C43.8232 29.7418 44.3065 29.6029 44.7986 29.6115C45.1945 29.6052 45.5854 29.7 45.9345 29.887C46.2567 30.0582 46.5256 30.3147 46.712 30.6284V29.7661H48.4949ZM46.3536 34.0956C46.5941 33.7925 46.7144 33.354 46.7144 32.7799C46.7144 32.2059 46.5941 31.7649 46.3536 31.457C46.1131 31.1495 45.7701 30.996 45.3247 30.9964C44.8793 30.9968 44.5324 31.1565 44.2838 31.4756C44.0369 31.7964 43.9132 32.2391 43.9128 32.804C43.9124 33.3688 44.0341 33.8014 44.2778 34.1016C44.5212 34.4003 44.8701 34.5498 45.3247 34.5502C45.7709 34.5506 46.1139 34.3993 46.3536 34.0962V34.0956ZM28.5087 35.9164H26.2676L23.8563 33.1666V35.9164H22.0271V27H23.8563V32.4149L26.1581 29.7865H28.3512L25.7462 32.733L28.5087 35.9164ZM17.0156 35.9194L13.5051 31.8785L15.4221 35.9194H14.0932L12.1377 31.7998L12.9507 35.9194H12.1341L11.3205 31.7937V35.9194H11V27H11.3205V31.4498L12.1455 27H12.9597L12.1311 31.469L14.1245 27H15.439L13.4534 31.4528L17.0589 27H19.1191L15.3897 31.6067L19.1365 35.9194H17.0156Z"
                  fill="#41276D"
                />
                <path
                  d="M50.0095 35.8214C50.5565 35.8214 50.9999 35.378 50.9999 34.831C50.9999 34.284 50.5565 33.8406 50.0095 33.8406C49.4625 33.8406 49.0191 34.284 49.0191 34.831C49.0191 35.378 49.4625 35.8214 50.0095 35.8214Z"
                  fill="#41276D"
                />
              </svg>

              <div>Kuda</div>
            </div>
            <div>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#F2FAFF" />
                <path
                  d="M45.0627 53.3352L33.8902 38.7968C33.2874 38.0125 33.3486 36.9052 34.0342 36.1921L36.0164 34.1302C36.5757 33.5485 37.4298 33.3599 38.182 33.6519L55.4155 40.3424C56.4397 40.74 56.9544 41.889 56.4963 42.8875C54.6879 46.8287 51.2009 52.4696 46.952 53.9832C46.2565 54.2309 45.5126 53.9206 45.0627 53.3352Z"
                  fill="#D1EDFF"
                />
                <path
                  d="M34.7005 29.7661V35.831H32.9417V34.9453C32.7621 35.253 32.5015 35.5055 32.1882 35.6753C31.864 35.8459 31.5022 35.9323 31.1359 35.9266C30.3782 35.9266 29.812 35.7152 29.4372 35.2922C29.0623 34.8693 28.8753 34.2313 28.8761 33.3782V29.7661H30.6801V33.4143C30.6801 34.1479 30.995 34.5147 31.6248 34.5147C31.9992 34.5147 32.3023 34.3873 32.534 34.1323C32.7657 33.8773 32.8813 33.5424 32.8809 33.1275V29.7661H34.7005ZM41.5977 27V35.831H39.8154V34.9339C39.6307 35.2457 39.3613 35.4986 39.0385 35.6633C38.6869 35.8428 38.2967 35.9332 37.902 35.9266C37.4093 35.9348 36.9255 35.7951 36.5129 35.5256C36.0968 35.2474 35.7673 34.8577 35.5622 34.4011C35.3349 33.92 35.2213 33.3678 35.2213 32.7444C35.2213 32.1211 35.3349 31.5729 35.5622 31.0998C35.767 30.6512 36.0945 30.2697 36.5069 29.9994C36.9238 29.7365 37.4086 29.6016 37.9014 29.6115C38.2875 29.6068 38.6691 29.6951 39.0138 29.8689C39.335 30.0278 39.6046 30.2745 39.7913 30.5803V27H41.5977ZM39.4594 34.0902C39.6999 33.7835 39.8202 33.3426 39.8202 32.7673C39.8202 32.2008 39.6985 31.7643 39.4552 31.4576C39.2119 31.1509 38.8711 30.9974 38.433 30.997C37.986 30.997 37.639 31.1485 37.3921 31.4516C37.1451 31.7547 37.0217 32.1852 37.0217 32.7432C37.0217 33.3173 37.1451 33.7619 37.3921 34.077C37.639 34.3921 37.986 34.5496 38.433 34.5496C38.8767 34.5504 39.2189 34.3973 39.4594 34.0902ZM48.4949 29.7661V35.831H46.712V34.9339C46.5273 35.2459 46.2576 35.4989 45.9345 35.6633C45.583 35.8423 45.1929 35.9323 44.7986 35.9254C44.3062 35.9388 43.821 35.8054 43.4046 35.5423C42.9882 35.2793 42.6594 34.8983 42.46 34.448C42.2327 33.9737 42.1191 33.4255 42.1191 32.8034C42.1191 32.1812 42.2327 31.6268 42.46 31.1401C42.6639 30.6813 42.9935 30.2896 43.4107 30.0102C43.8232 29.7418 44.3065 29.6029 44.7986 29.6115C45.1945 29.6052 45.5854 29.7 45.9345 29.887C46.2567 30.0582 46.5256 30.3147 46.712 30.6284V29.7661H48.4949ZM46.3536 34.0956C46.5941 33.7925 46.7144 33.354 46.7144 32.7799C46.7144 32.2059 46.5941 31.7649 46.3536 31.457C46.1131 31.1495 45.7701 30.996 45.3247 30.9964C44.8793 30.9968 44.5324 31.1565 44.2838 31.4756C44.0369 31.7964 43.9132 32.2391 43.9128 32.804C43.9124 33.3688 44.0341 33.8014 44.2778 34.1016C44.5212 34.4003 44.8701 34.5498 45.3247 34.5502C45.7709 34.5506 46.1139 34.3993 46.3536 34.0962V34.0956ZM28.5087 35.9164H26.2676L23.8563 33.1666V35.9164H22.0271V27H23.8563V32.4149L26.1581 29.7865H28.3512L25.7462 32.733L28.5087 35.9164ZM17.0156 35.9194L13.5051 31.8785L15.4221 35.9194H14.0932L12.1377 31.7998L12.9507 35.9194H12.1341L11.3205 31.7937V35.9194H11V27H11.3205V31.4498L12.1455 27H12.9597L12.1311 31.469L14.1245 27H15.439L13.4534 31.4528L17.0589 27H19.1191L15.3897 31.6067L19.1365 35.9194H17.0156Z"
                  fill="#41276D"
                />
                <path
                  d="M50.0095 35.8214C50.5565 35.8214 50.9999 35.378 50.9999 34.831C50.9999 34.284 50.5565 33.8406 50.0095 33.8406C49.4625 33.8406 49.0191 34.284 49.0191 34.831C49.0191 35.378 49.4625 35.8214 50.0095 35.8214Z"
                  fill="#41276D"
                />
              </svg>

              <div>Other</div>
            </div>
          </div>
        </div>

        <label htmlFor="">Enter Bank Name</label>
        <div className="transaction__input">
          <div></div>
          <input
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            onClick={() => setBankListOpen(true)}
          />

          {bankListOpen && (
            <div className="transaction__input__dropdown">
              {filteredBanks?.map((bank, index) => (
                <div key={index} onClick={() => handleBankSelect(bank)}>
                  {bank?.name}
                </div>
              ))}
            </div>
          )}

          {bankListOpen && (
            <div
              className="transaction__input__dropdown-cover"
              onClick={() => setBankListOpen(false)}
            ></div>
          )}
        </div>
        <div className="transaction__input-result"></div>

        <label htmlFor="">Beneficiary Account Number</label>
        <div className="transaction__input">
          <div>#</div>
          <input
            type="text"
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
          />
        </div>
        <div className="transaction__input-result">
          {loading ? "Loading..." : "ATINSE EROMHONSELE"}
        </div>

        <label htmlFor="">Wallet ID</label>
        <div className="transaction__input">
          <div>#</div>
          <input
            type="text"
            value={toWalletId}
            onChange={(e) => setToWalletId(e.target.value)}
            required
          />
        </div>
        <div className="transaction__input-result">
          Temporarily put here for wallet to wallet transfer
        </div>

        <label htmlFor="">Transaction Description</label>
        <div className="transaction__input">
          <div></div>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button className="transaction__button" type="submit">
          {loading ? "Loading..." : "Continue"}
        </button>
      </form>
      <Navigation />

      {open && (
        <div className="transaction__otp-modal">
          <div className="transaction__otp-modal__summary">
            <div className="transaction__otp-modal__summary__title">
              You are transferring
            </div>
            <div className="transaction__otp-modal__summary__inner">
              <div>₦12,000</div>
              <svg
                width="23"
                height="4"
                viewBox="0 0 23 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="23" height="4" rx="2" fill="#408CFF" />
              </svg>
              <div className="transaction__otp-modal__summary__inner__details">
                Zenith Bank
              </div>
              <div className="transaction__otp-modal__summary__inner__details">
                Emmanuel Iren
              </div>
            </div>
          </div>

          <label htmlFor=""></label>
          <div className="transaction__otp-modal__otp-group">
            <input
              className="transaction__otp-modal__otp-group__otp-input"
              type="text"
              maxLength={1}
            />
            <input
              className="transaction__otp-modal__otp-group__otp-input"
              type="text"
              maxLength={1}
            />
            <input
              className="transaction__otp-modal__otp-group__otp-input"
              type="text"
              maxLength={1}
            />
            <input
              className="transaction__otp-modal__otp-group__otp-input"
              type="text"
              maxLength={1}
            />
            <input
              className="transaction__otp-modal__otp-group__otp-input"
              type="text"
              maxLength={1}
            />
            <input
              className="transaction__otp-modal__otp-group__otp-input"
              type="text"
              maxLength={1}
            />
          </div>

          <button type="button">Transfer</button>
        </div>
      )}
    </div>
  );
}
