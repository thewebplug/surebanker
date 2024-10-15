"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Navigation from "./components/navigation";
import TransactionPinSuccess from "./components/transaction-pin-success";
import TransactionPinFail from "./components/transaction-pin-fail";
import { useSelector } from "react-redux";

export default function Landing() {
  const auth = useSelector((state) => state.auth);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <header className="dashboard-header">
        <div>
          <Image
            src="/assets/register.png"
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />

          <div>
            Welcome, <span>{isClient && auth?.userInfo?.firstName}</span>
          </div>
        </div>

        <div>
          <svg
            className="pointer"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => (window.location.href = "/notifications")}
          >
            <path
              d="M7.54445 15.8368L12.4749 15.8338C12.2767 17.0157 11.2492 17.9167 10.0109 17.9174C8.77257 17.9181 7.74401 17.0184 7.54445 15.8368ZM10.0013 1.6694C13.4531 1.66736 16.253 4.46392 16.255 7.9157L16.257 11.2478L17.4404 13.8805C17.4862 13.9824 17.51 14.0929 17.51 14.2046C17.5103 14.6419 17.1561 14.9965 16.7188 14.9968L3.30267 15.0047C3.19118 15.0047 3.08094 14.9813 2.97916 14.9358C2.57999 14.7574 2.40103 14.2891 2.57945 13.8899L3.75697 11.2555L3.75508 7.91232L3.75864 7.70405C3.87255 4.34505 6.6312 1.67139 10.0013 1.6694Z"
              fill="#667085"
            />
          </svg>
          <div>
            <div>NGN</div>
            <div className="header__icon">
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5131_6299)">
                  <path
                    d="M0.666992 0H13.667V7.34783H0.666992V0Z"
                    fill="#008751"
                  />
                  <path d="M5 0H9.33333V7.34783H5V0Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_5131_6299">
                    <rect
                      width="13"
                      height="7.34783"
                      fill="white"
                      transform="translate(0.666992)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </header>
      <main className="dashboard-main">
        <h1 className="dashboard-main__title">Total Balance</h1>
        <h2 className="dashboard-main__subtitle">
          <div>
            ₦ 0 <span>.00</span>
          </div>
          <div className="dashboard-main__subtitle__icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.46992 15.2799C9.27992 15.2799 9.08992 15.2099 8.93992 15.0599C8.11992 14.2399 7.66992 13.1499 7.66992 11.9999C7.66992 9.60992 9.60992 7.66992 11.9999 7.66992C13.1499 7.66992 14.2399 8.11992 15.0599 8.93992C15.1999 9.07992 15.2799 9.26992 15.2799 9.46992C15.2799 9.66992 15.1999 9.85992 15.0599 9.99992L9.99992 15.0599C9.84992 15.2099 9.65992 15.2799 9.46992 15.2799ZM11.9999 9.16992C10.4399 9.16992 9.16992 10.4399 9.16992 11.9999C9.16992 12.4999 9.29992 12.9799 9.53992 13.3999L13.3999 9.53992C12.9799 9.29992 12.4999 9.16992 11.9999 9.16992Z"
                fill="#8D8D8D"
              />
              <path
                d="M5.59984 18.5105C5.42984 18.5105 5.24984 18.4505 5.10984 18.3305C4.03984 17.4205 3.07984 16.3005 2.25984 15.0005C1.19984 13.3505 1.19984 10.6605 2.25984 9.00047C4.69984 5.18047 8.24984 2.98047 11.9998 2.98047C14.1998 2.98047 16.3698 3.74047 18.2698 5.17047C18.5998 5.42047 18.6698 5.89047 18.4198 6.22047C18.1698 6.55047 17.6998 6.62047 17.3698 6.37047C15.7298 5.13047 13.8698 4.48047 11.9998 4.48047C8.76984 4.48047 5.67984 6.42047 3.51984 9.81047C2.76984 10.9805 2.76984 13.0205 3.51984 14.1905C4.26984 15.3605 5.12984 16.3705 6.07984 17.1905C6.38984 17.4605 6.42984 17.9305 6.15984 18.2505C6.01984 18.4205 5.80984 18.5105 5.59984 18.5105Z"
                fill="#8D8D8D"
              />
              <path
                d="M11.9996 21.0205C10.6696 21.0205 9.36957 20.7505 8.11957 20.2205C7.73957 20.0605 7.55957 19.6205 7.71957 19.2405C7.87957 18.8605 8.31957 18.6805 8.69957 18.8405C9.75957 19.2905 10.8696 19.5205 11.9896 19.5205C15.2196 19.5205 18.3096 17.5805 20.4696 14.1905C21.2196 13.0205 21.2196 10.9805 20.4696 9.81049C20.1596 9.32049 19.8196 8.85049 19.4596 8.41049C19.1996 8.09049 19.2496 7.62049 19.5696 7.35049C19.8896 7.09049 20.3596 7.13049 20.6296 7.46049C21.0196 7.94049 21.3996 8.46049 21.7396 9.00049C22.7996 10.6505 22.7996 13.3405 21.7396 15.0005C19.2996 18.8205 15.7496 21.0205 11.9996 21.0205Z"
                fill="#8D8D8D"
              />
              <path
                d="M12.6896 16.2703C12.3396 16.2703 12.0196 16.0203 11.9496 15.6603C11.8696 15.2503 12.1396 14.8603 12.5496 14.7903C13.6496 14.5903 14.5696 13.6703 14.7696 12.5703C14.8496 12.1603 15.2396 11.9003 15.6496 11.9703C16.0596 12.0503 16.3296 12.4403 16.2496 12.8503C15.9296 14.5803 14.5496 15.9503 12.8296 16.2703C12.7796 16.2603 12.7396 16.2703 12.6896 16.2703Z"
                fill="#8D8D8D"
              />
              <path
                d="M2.00043 22.7497C1.81043 22.7497 1.62043 22.6797 1.47043 22.5297C1.18043 22.2397 1.18043 21.7597 1.47043 21.4697L8.94043 13.9997C9.23043 13.7097 9.71043 13.7097 10.0004 13.9997C10.2904 14.2897 10.2904 14.7697 10.0004 15.0597L2.53043 22.5297C2.38043 22.6797 2.19043 22.7497 2.00043 22.7497Z"
                fill="#8D8D8D"
              />
              <path
                d="M14.5297 10.2204C14.3397 10.2204 14.1497 10.1504 13.9997 10.0004C13.7097 9.71043 13.7097 9.23043 13.9997 8.94043L21.4697 1.47043C21.7597 1.18043 22.2397 1.18043 22.5297 1.47043C22.8197 1.76043 22.8197 2.24043 22.5297 2.53043L15.0597 10.0004C14.9097 10.1504 14.7197 10.2204 14.5297 10.2204Z"
                fill="#8D8D8D"
              />
            </svg>
          </div>
        </h2>

        <div className="dashboard-main__cards">
          <div
            className="dashboard-main__cards__card"
            onClick={() => (window.location.href = "/transactions")}
          >
            <Image src="/assets/transfer.png" objectFit="cover" layout="fill" />
            <div>Transfer</div>
          </div>
          <div className="dashboard-main__cards__card">
            <Image
              src="/assets/add money.png"
              objectFit="cover"
              layout="fill"
            />
            <div>Add Money</div>
          </div>
          <div
            className="dashboard-main__cards__card"
            onClick={() => (window.location.href = "/bills")}
          >
            <Image
              src="/assets/pay bills.png"
              objectFit="cover"
              layout="fill"
            />
            <div>Pay Bills</div>
          </div>
          <div
            className="dashboard-main__cards__card"
            onClick={() => (window.location.href = "/airtime")}
          >
            <Image src="/assets/airtime.png" objectFit="cover" layout="fill" />
            <div>Airtime</div>
          </div>
          {/* <div
            className="dashboard-main__cards__card"
            onClick={() => (window.location.href = "/data")}
          >
            <Image src="/assets/airtime.png" objectFit="cover" layout="fill" />
            <div>Data</div>
          </div> */}
        </div>

        <div className="dashboard-main__credit-cards">
          <div className="dashboard-main__credit-cards__card">
            <Image
              src="/assets/blue-card.png"
              // width={250}
              // height={120}

              objectFit="fill"
              layout="fill"
            />

            <div className="dashboard-main__credit-cards__card__title">
              <div>
                <div className="dashboard-main__credit-cards__card__title__subtitle">
                  Transact without bounderies
                </div>
                <div className="dashboard-main__credit-cards__card__title__title">
                  Get A Physical Card
                </div>
              </div>

              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="12.1268"
                  cy="12.0023"
                  rx="12.1268"
                  ry="12.0023"
                  transform="matrix(0.707107 0.707107 -0.709082 0.705126 17.5586 0.44043)"
                  fill="#FEDF00"
                />
                <g clip-path="url(#clip0_5183_2894)">
                  <path
                    d="M19.216 15.3596C19.068 15.2116 18.829 15.21 18.6821 15.3561C18.5352 15.5021 18.5361 15.7405 18.6841 15.8885L20.4488 17.6532L12.8176 17.6033C12.6091 17.6019 12.4407 17.7694 12.4415 17.9773C12.4423 18.1852 12.6119 18.3549 12.8204 18.3563L20.4517 18.4062L18.7002 20.148C18.5533 20.2941 18.5542 20.5325 18.7022 20.6804C18.8502 20.8284 19.0892 20.83 19.2361 20.6839L21.6297 18.3037C21.7766 18.1576 21.7757 17.9193 21.6277 17.7713L19.216 15.3596Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5183_2894">
                    <rect
                      width="9.0951"
                      height="9.00169"
                      fill="white"
                      transform="matrix(0.707107 0.707107 -0.709082 0.705126 17.0664 11.6182)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="dashboard-main__credit-cards__card">
            <Image
              src="/assets/pos-card.png"
              // width={250}
              // height={120}
              objectFit="fill"
              layout="fill"
            />

            <div className="dashboard-main__credit-cards__card__title">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="12.1268"
                  cy="12.0023"
                  rx="12.1268"
                  ry="12.0023"
                  transform="matrix(0.707107 0.707107 -0.709082 0.705126 17.5586 0.44043)"
                  fill="#FEDF00"
                />
                <g clip-path="url(#clip0_5183_2894)">
                  <path
                    d="M19.216 15.3596C19.068 15.2116 18.829 15.21 18.6821 15.3561C18.5352 15.5021 18.5361 15.7405 18.6841 15.8885L20.4488 17.6532L12.8176 17.6033C12.6091 17.6019 12.4407 17.7694 12.4415 17.9773C12.4423 18.1852 12.6119 18.3549 12.8204 18.3563L20.4517 18.4062L18.7002 20.148C18.5533 20.2941 18.5542 20.5325 18.7022 20.6804C18.8502 20.8284 19.0892 20.83 19.2361 20.6839L21.6297 18.3037C21.7766 18.1576 21.7757 17.9193 21.6277 17.7713L19.216 15.3596Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5183_2894">
                    <rect
                      width="9.0951"
                      height="9.00169"
                      fill="white"
                      transform="matrix(0.707107 0.707107 -0.709082 0.705126 17.0664 11.6182)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div>
                <div className="dashboard-main__credit-cards__card__title__subtitle">
                  Give your business the edge{" "}
                </div>
                <div className="dashboard-main__credit-cards__card__title__title">
                  Request For POS
                </div>
              </div>
            </div>

            <div className="dashboard-main__credit-cards__card__title"></div>
          </div>
        </div>

        <div className="dashboard-main__beneficiaries">
          <div className="dashboard-main__beneficiaries__title">
            Beneficiaries
          </div>

          <div className="dashboard-main__beneficiaries__cards">
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
                  d="M35.7543 31.9999C36.9624 31.9999 37.948 32.9525 38.0009 34.1475L38.0001 34.25L30.0037 34.2499V35.249L37.9789 35.2502C37.9181 35.7818 37.7443 36.2935 37.4702 36.7512L30.0037 36.749V37.7499L36.6422 37.751C35.0813 39.2569 32.8525 40.0011 30.0001 40.0011C26.8543 40.0011 24.4683 39.0959 22.9019 37.2617C22.3222 36.5827 22.0037 35.7193 22.0037 34.8265V34.2488C22.0037 33.0068 23.0105 31.9999 24.2525 31.9999H35.7543ZM30.0001 20C31.6359 20 33.0881 20.7855 34.0003 21.9998L30.0031 22L30.0027 22.999L34.5843 23.0005C34.7883 23.4675 34.923 23.9718 34.9755 24.5003L30.0027 24.499V25.499L34.9755 25.5007C34.9228 26.0292 34.788 26.5335 34.5838 27.0005L30.0027 26.999L30.0031 28L33.9996 28.0012C33.0873 29.215 31.6354 30 30.0001 30C27.2387 30 25.0001 27.7614 25.0001 25C25.0001 22.2386 27.2387 20 30.0001 20Z"
                  fill="#1C4486"
                />
              </svg>
              <div>Tosin</div>
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
                  d="M35.7543 31.9999C36.9624 31.9999 37.948 32.9525 38.0009 34.1475L38.0001 34.25L30.0037 34.2499V35.249L37.9789 35.2502C37.9181 35.7818 37.7443 36.2935 37.4702 36.7512L30.0037 36.749V37.7499L36.6422 37.751C35.0813 39.2569 32.8525 40.0011 30.0001 40.0011C26.8543 40.0011 24.4683 39.0959 22.9019 37.2617C22.3222 36.5827 22.0037 35.7193 22.0037 34.8265V34.2488C22.0037 33.0068 23.0105 31.9999 24.2525 31.9999H35.7543ZM30.0001 20C31.6359 20 33.0881 20.7855 34.0003 21.9998L30.0031 22L30.0027 22.999L34.5843 23.0005C34.7883 23.4675 34.923 23.9718 34.9755 24.5003L30.0027 24.499V25.499L34.9755 25.5007C34.9228 26.0292 34.788 26.5335 34.5838 27.0005L30.0027 26.999L30.0031 28L33.9996 28.0012C33.0873 29.215 31.6354 30 30.0001 30C27.2387 30 25.0001 27.7614 25.0001 25C25.0001 22.2386 27.2387 20 30.0001 20Z"
                  fill="#1C4486"
                />
              </svg>
              <div>Tosin</div>
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
                  d="M35.7543 31.9999C36.9624 31.9999 37.948 32.9525 38.0009 34.1475L38.0001 34.25L30.0037 34.2499V35.249L37.9789 35.2502C37.9181 35.7818 37.7443 36.2935 37.4702 36.7512L30.0037 36.749V37.7499L36.6422 37.751C35.0813 39.2569 32.8525 40.0011 30.0001 40.0011C26.8543 40.0011 24.4683 39.0959 22.9019 37.2617C22.3222 36.5827 22.0037 35.7193 22.0037 34.8265V34.2488C22.0037 33.0068 23.0105 31.9999 24.2525 31.9999H35.7543ZM30.0001 20C31.6359 20 33.0881 20.7855 34.0003 21.9998L30.0031 22L30.0027 22.999L34.5843 23.0005C34.7883 23.4675 34.923 23.9718 34.9755 24.5003L30.0027 24.499V25.499L34.9755 25.5007C34.9228 26.0292 34.788 26.5335 34.5838 27.0005L30.0027 26.999L30.0031 28L33.9996 28.0012C33.0873 29.215 31.6354 30 30.0001 30C27.2387 30 25.0001 27.7614 25.0001 25C25.0001 22.2386 27.2387 20 30.0001 20Z"
                  fill="#1C4486"
                />
              </svg>
              <div>Tosin</div>
            </div>
          </div>
        </div>
        <div className="dashboard-main__transactions">
          <div className="dashboard-main__transactions__title">
            Transactions
          </div>
          <div className="dashboard-main__transactions__cards">
            <div className="dashboard-main__transactions__cards__card">
              <div className="dashboard-main__transactions__cards__card__title">
                <div>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.12828 15.0318C5.05439 15.0337 4.47816 13.7698 5.18393 12.9602L10.6946 6.63988C11.3905 5.84183 12.63 5.83964 13.3287 6.63524L18.8616 12.9361C19.5702 13.7432 18.9985 15.0091 17.9245 15.011L6.12828 15.0318Z"
                      fill="#0FFF9A"
                    />
                  </svg>

                  <div>18.4%</div>
                </div>

                <div>
                  <span>Avg</span>
                  +2,000 / Daily
                </div>
              </div>

              <div className="dashboard-main__transactions__cards__card__subtitle">
                ₦ 0 <span>.00</span>
              </div>
              <div className="dashboard-main__transactions__cards__card__subsubtitle">
                INFLOW
              </div>
            </div>
            <div className="dashboard-main__transactions__cards__card">
              <div className="dashboard-main__transactions__cards__card__title">
                <div>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.12828 15.0318C5.05439 15.0337 4.47816 13.7698 5.18393 12.9602L10.6946 6.63988C11.3905 5.84183 12.63 5.83964 13.3287 6.63524L18.8616 12.9361C19.5702 13.7432 18.9985 15.0091 17.9245 15.011L6.12828 15.0318Z"
                      fill="#0FFF9A"
                    />
                  </svg>

                  <div>18.4%</div>
                </div>

                <div>
                  <span>Avg</span>
                  +2,000 / Daily
                </div>
              </div>

              <div className="dashboard-main__transactions__cards__card__subtitle">
                ₦ 0 <span>.00</span>
              </div>
              <div className="dashboard-main__transactions__cards__card__subsubtitle">
                INFLOW
              </div>
            </div>
          </div>
        </div>

        <div
          className="dashboard-main__history"
          onClick={() => (window.location.href = "/transactions/history")}
        >
          <div>View Transactions</div>
          <div>History</div>
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="12.1268"
              cy="12.0023"
              rx="12.1268"
              ry="12.0023"
              transform="matrix(0.707107 0.707107 -0.709082 0.705126 17.0215 0)"
              fill="#FEDF00"
            />
            <g clip-path="url(#clip0_5199_3325)">
              <path
                d="M18.6789 14.9191C18.5309 14.7711 18.2919 14.7696 18.145 14.9156C17.9981 15.0617 17.999 15.3001 18.147 15.4481L19.9117 17.2128L12.2805 17.1629C12.072 17.1615 11.9036 17.3289 11.9044 17.5369C11.9052 17.7448 12.0748 17.9145 12.2833 17.9158L19.9146 17.9658L18.1631 19.7076C18.0162 19.8536 18.0171 20.092 18.1651 20.24C18.3131 20.388 18.5521 20.3896 18.699 20.2435L21.0926 17.8633C21.2395 17.7172 21.2386 17.4788 21.0906 17.3308L18.6789 14.9191Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_5199_3325">
                <rect
                  width="9.0951"
                  height="9.00169"
                  fill="white"
                  transform="matrix(0.707107 0.707107 -0.709082 0.705126 16.5293 11.1777)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <Navigation />
      </main>
    </>
  );
}
