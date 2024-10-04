"use client";

import Image from "next/image";
import Navigation from "../components/navigation";
import { useEffect, useState } from "react";

export default function Fund() {
  const [openPaymentLink, setOpenPaymentLink] = useState(false);
  const [openBarcode, setOpenBarcode] = useState(false);
  const [openCard, setOpenCard] = useState(false);
  const [stage, setStage] = useState(3);

  const handleModalClose = (e) => {
    console.log("hello");

    if (e.target.classList.contains("fund__modal")) {
      setOpenBarcode(false);
      setOpenPaymentLink(false);
      setOpenCard(false);
    }
  };

  useEffect(() => {
    const otpInputs = document.querySelectorAll(
      ".fund__modal__inner__card-input__input"
    );

    otpInputs.forEach((input, index) => {
      input.addEventListener("input", (event) => {
        const inputValue = event.target.value;

        if (inputValue?.length > 3 && index < otpInputs.length - 1) {
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
  }, [stage === 2]);

  const handleCardClick = (e) => {
    e.preventDefault();

    if(stage === 3) setStage(1)
   else if(stage === 2) setStage(3)    
   else setStage(2)    
  }

  return (
    <div className="fund">
      <div className="fund__nav">
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

        <div>Data</div>
      </div>

      <div className="fund__image"></div>

      <label htmlFor="">Fund By</label>

      <div className="fund__card" onClick={() => setOpenPaymentLink(true)}>
        <Image
          src="/assets/payment link.png"
          objectFit="cover"
          layout="fill"
          style={{ borderRadius: "6px" }}
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.08553 18.6112L14.0817 4.60666C14.299 4.09895 14.8868 3.8636 15.3946 4.08097C15.866 4.28283 16.1026 4.80407 15.96 5.284L15.9202 5.39385L9.92409 19.3984C9.70671 19.9061 9.11892 20.1414 8.61121 19.9241C8.13977 19.7222 7.90316 19.201 8.04581 18.721L8.08553 18.6112ZM2.29289 11.2931L6.29289 7.29315C6.68342 6.90263 7.31658 6.90263 7.70711 7.29315C8.06759 7.65363 8.09532 8.22087 7.7903 8.61316L7.70711 8.70736L4.41421 12.0003L7.70711 15.2931C8.09763 15.6837 8.09763 16.3168 7.70711 16.7074C7.34662 17.0678 6.77939 17.0956 6.3871 16.7906L6.29289 16.7074L2.29289 12.7074C1.93241 12.3469 1.90468 11.7796 2.2097 11.3874L2.29289 11.2931ZM16.2921 7.29191C16.6526 6.93144 17.2198 6.90374 17.6121 7.20878L17.7063 7.29198L21.7071 11.2932C22.0678 11.6538 22.0953 12.2214 21.7899 12.6136L21.7066 12.7078L17.7058 16.7034C17.315 17.0936 16.6818 17.0932 16.2916 16.7024C15.9313 16.3417 15.904 15.7744 16.2093 15.3824L16.2925 15.2882L19.5854 11.9998L16.292 8.70613C15.9015 8.31558 15.9015 7.68242 16.2921 7.29191Z"
            fill="#212121"
          />
        </svg>
        Generate Payment Link
      </div>
      <div className="fund__card">
        <Image
          src="/assets/payment link.png"
          objectFit="cover"
          layout="fill"
          style={{ borderRadius: "6px" }}
        />
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6791 11.1979L13.8979 13.8021H10.3208L11.102 11.1979H14.6791Z"
            fill="#1C274C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.60886 3.60883C2.08337 5.13431 2.08337 7.58954 2.08337 12.5C2.08337 17.4104 2.08337 19.8657 3.60886 21.3912C5.13434 22.9167 7.58957 22.9167 12.5 22.9167C17.4105 22.9167 19.8658 22.9167 21.3912 21.3912C22.9167 19.8657 22.9167 17.4104 22.9167 12.5C22.9167 7.58954 22.9167 5.13431 21.3912 3.60883C19.8658 2.08334 17.4105 2.08334 12.5 2.08334C7.58957 2.08334 5.13434 2.08334 3.60886 3.60883ZM11.6829 6.54339C12.0962 6.66737 12.3307 7.10291 12.2067 7.51619L11.5709 9.63544H15.148L15.9184 7.0672C16.0424 6.65393 16.478 6.41941 16.8912 6.54339C17.3045 6.66737 17.539 7.10291 17.415 7.51619L16.7792 9.63544H18.75C19.1815 9.63544 19.5313 9.98522 19.5313 10.4167C19.5313 10.8481 19.1815 11.1979 18.75 11.1979H16.3105L15.5292 13.8021H17.7084C18.1398 13.8021 18.4896 14.1519 18.4896 14.5833C18.4896 15.0148 18.1398 15.3646 17.7084 15.3646H15.0605L14.29 17.9328C14.166 18.3462 13.7305 18.5806 13.3172 18.4567C12.9039 18.3327 12.6694 17.8971 12.7934 17.4839L13.4292 15.3646H9.85214L9.08168 17.9328C8.9577 18.3462 8.52216 18.5806 8.10888 18.4567C7.6956 18.3327 7.46109 17.8971 7.58507 17.4839L8.22085 15.3646H6.25004C5.81857 15.3646 5.46879 15.0148 5.46879 14.5833C5.46879 14.1519 5.81857 13.8021 6.25004 13.8021H8.6896L9.47085 11.1979H7.29171C6.86024 11.1979 6.51046 10.8481 6.51046 10.4167C6.51046 9.98522 6.86024 9.63544 7.29171 9.63544H9.9396L10.71 7.0672C10.8341 6.65393 11.2696 6.41941 11.6829 6.54339Z"
            fill="#1C274C"
          />
        </svg>
        USSD
      </div>
      <div className="fund__card">
        <Image
          src="/assets/another bank.png"
          objectFit="cover"
          layout="fill"
          style={{ borderRadius: "6px" }}
        />
        <svg
          width="29"
          height="25"
          viewBox="0 0 29 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            d="M9.37832 12.4746H3.77832V22.2746H9.37832V12.4746Z"
            fill="#292D32"
          />
          <path
            opacity="0.4"
            d="M14.9789 12.4746H9.37891V22.2746H14.9789V12.4746Z"
            fill="#292D32"
          />
          <path
            opacity="0.6"
            d="M20.5785 12.4746H14.9785V22.2746H20.5785V12.4746Z"
            fill="#292D32"
          />
          <path
            opacity="0.4"
            d="M26.1791 12.4746H20.5791V22.2746H26.1791V12.4746Z"
            fill="#292D32"
          />
          <path
            d="M28.0686 24.6745H1.88859C1.40069 24.6745 0.996094 24.1152 0.996094 23.4408C0.996094 22.7663 1.40069 22.207 1.88859 22.207H28.0686C28.5565 22.207 28.9611 22.7663 28.9611 23.4408C28.9611 24.1152 28.5565 24.6745 28.0686 24.6745Z"
            fill="#292D32"
          />
          <path
            d="M28.0965 5.12397L15.4965 0.084C15.2165 -0.028 14.7405 -0.028 14.4605 0.084L1.86052 5.12397C1.37052 5.31997 0.978516 5.89396 0.978516 6.42596V11.074C0.978516 11.8439 1.60852 12.4739 2.37852 12.4739H27.5785C28.3485 12.4739 28.9785 11.8439 28.9785 11.074V6.42596C28.9785 5.89396 28.5865 5.31997 28.0965 5.12397ZM14.9785 8.97397C13.8165 8.97397 12.8785 8.03597 12.8785 6.87397C12.8785 5.71197 13.8165 4.77397 14.9785 4.77397C16.1405 4.77397 17.0785 5.71197 17.0785 6.87397C17.0785 8.03597 16.1405 8.97397 14.9785 8.97397Z"
            fill="#292D32"
          />
        </svg>
        Another Bank
      </div>
      <div className="fund__card"
      onClick={() => setOpenCard(true)}
      >
        <Image
          src="/assets/debit or credit card.png"
          objectFit="cover"
          layout="fill"
          style={{ borderRadius: "6px" }}
        />
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_3_84)">
            <path
              d="M0 11.4553V18.75C0 20.4759 1.39911 21.875 3.125 21.875H21.875C23.6009 21.875 25 20.4759 25 18.75V11.4553C24.9714 11.4573 24.9424 11.4583 24.9132 11.4583H0.0868056C0.0575979 11.4583 0.0286495 11.4573 0 11.4553Z"
              fill="black"
            />
            <path
              d="M25 9.37803V6.25C25 4.52411 23.6009 3.125 21.875 3.125H3.125C1.39911 3.125 0 4.52411 0 6.25V9.37803C0.0286495 9.37602 0.0575979 9.375 0.0868056 9.375H24.9132C24.9424 9.375 24.9714 9.37602 25 9.37803Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_84">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Debit Or Credit Card
      </div>

      <div className="fund__card" onClick={() => setOpenBarcode(true)}>
        <Image
          src="/assets/another bank.png"
          objectFit="cover"
          layout="fill"
          style={{ borderRadius: "6px" }}
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6C2 4.34315 3.34315 3 5 3H6.5C7.05228 3 7.5 3.44772 7.5 4C7.5 4.55228 7.05228 5 6.5 5H5C4.44772 5 4 5.44772 4 6V7.5C4 8.05228 3.55228 8.5 3 8.5C2.44772 8.5 2 8.05228 2 7.5V6ZM16.5 4C16.5 3.44772 16.9477 3 17.5 3H19C20.6569 3 22 4.34315 22 6V7.5C22 8.05228 21.5523 8.5 21 8.5C20.4477 8.5 20 8.05228 20 7.5V6C20 5.44772 19.5523 5 19 5H17.5C16.9477 5 16.5 4.55228 16.5 4ZM3 15.5C3.55228 15.5 4 15.9477 4 16.5V18C4 18.5523 4.44772 19 5 19H6.5C7.05228 19 7.5 19.4477 7.5 20C7.5 20.5523 7.05228 21 6.5 21H5C3.34315 21 2 19.6569 2 18V16.5C2 15.9477 2.44772 15.5 3 15.5ZM21 15.5C21.5523 15.5 22 15.9477 22 16.5V18C22 19.6569 20.6569 21 19 21H17.5C16.9477 21 16.5 20.5523 16.5 20C16.5 19.4477 16.9477 19 17.5 19H19C19.5523 19 20 18.5523 20 18V16.5C20 15.9477 20.4477 15.5 21 15.5ZM6 6.75C6.55228 6.75 7 7.19772 7 7.75V16.25C7 16.8023 6.55228 17.25 6 17.25C5.44772 17.25 5 16.8023 5 16.25V7.75C5 7.19772 5.44772 6.75 6 6.75ZM11 7.75C11 7.19772 10.5523 6.75 10 6.75C9.44772 6.75 9 7.19772 9 7.75V16.25C9 16.8023 9.44772 17.25 10 17.25C10.5523 17.25 11 16.8023 11 16.25V7.75ZM14 6.75C14.5523 6.75 15 7.19772 15 7.75V16.25C15 16.8023 14.5523 17.25 14 17.25C13.4477 17.25 13 16.8023 13 16.25V7.75C13 7.19772 13.4477 6.75 14 6.75ZM19 7.75C19 7.19772 18.5523 6.75 18 6.75C17.4477 6.75 17 7.19772 17 7.75V16.25C17 16.8023 17.4477 17.25 18 17.25C18.5523 17.25 19 16.8023 19 16.25V7.75Z"
            fill="#212121"
          />
        </svg>
        Barcode
      </div>

      {openPaymentLink && (
        <div className="fund__modal" onClick={handleModalClose}>
          <div className="fund__modal__inner">
            <div className="fund__modal__inner__title">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="22.5" cy="22.5" r="22.5" fill="#F5DEFB" />
                <path
                  d="M19.0855 29.6112L25.0817 15.6067C25.299 15.099 25.8868 14.8636 26.3946 15.081C26.866 15.2828 27.1026 15.8041 26.96 16.284L26.9202 16.3939L20.9241 30.3984C20.7067 30.9061 20.1189 31.1414 19.6112 30.9241C19.1398 30.7222 18.9032 30.201 19.0458 29.721L19.0855 29.6112ZM13.2929 22.2931L17.2929 18.2932C17.6834 17.9026 18.3166 17.9026 18.7071 18.2932C19.0676 18.6536 19.0953 19.2209 18.7903 19.6132L18.7071 19.7074L15.4142 23.0003L18.7071 26.2931C19.0976 26.6837 19.0976 27.3168 18.7071 27.7074C18.3466 28.0678 17.7794 28.0956 17.3871 27.7906L17.2929 27.7074L13.2929 23.7074C12.9324 23.3469 12.9047 22.7796 13.2097 22.3874L13.2929 22.2931ZM27.2921 18.2919C27.6526 17.9314 28.2198 17.9037 28.6121 18.2088L28.7063 18.292L32.7071 22.2932C33.0678 22.6538 33.0953 23.2214 32.7899 23.6136L32.7066 23.7078L28.7058 27.7034C28.315 28.0936 27.6818 28.0932 27.2916 27.7024C26.9313 27.3417 26.904 26.7744 27.2093 26.3824L27.2925 26.2882L30.5854 22.9998L27.292 19.7061C26.9015 19.3156 26.9015 18.6824 27.2921 18.2919Z"
                  fill="#212121"
                />
              </svg>

              <div>
                <div>Payment Link</div>
                <div>
                  You can now receive payment easily by sharing this link
                </div>
              </div>
            </div>
            <div className="fund__modal__inner__input">
              <svg
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6667 3.55556V4.44444H11.3333C12.9288 4.44444 14.2222 5.73784 14.2222 7.33333V9.35031C13.7221 9.05156 13.3164 8.69147 13.0578 8.43307C12.48 7.85564 11.5111 7.85564 10.9333 8.43307C10.4622 8.90391 9.50222 9.71236 8.37333 9.87227C8.31796 9.88027 8.26222 9.89182 8.20676 9.90667C7.96596 9.56018 7.56507 9.33333 7.11111 9.33333C6.37476 9.33333 5.77778 9.93031 5.77778 10.6667C5.77778 11.403 6.37476 12 7.11111 12V13.7988C7.11111 14.9348 7.42444 15.9813 8.02898 16.8889H2.88889C1.2934 16.8889 0 15.5955 0 14V7.33333C0 5.73784 1.2934 4.44444 2.88889 4.44444H3.55556V3.55556C3.55556 1.59188 5.14743 0 7.11111 0C9.07476 0 10.6667 1.59188 10.6667 3.55556ZM4.88889 3.55556V4.44444H9.33333V3.55556C9.33333 2.32826 8.3384 1.33333 7.11111 1.33333C5.88382 1.33333 4.88889 2.32826 4.88889 3.55556ZM12.4352 9.06178C13.0154 9.64036 14.1302 10.5604 15.5013 10.7492C15.7748 10.7868 16 11.0026 16 11.2726V13.7958C16 17.1878 12.8183 18.4188 12.1304 18.6454C12.0443 18.6738 11.9564 18.6738 11.8702 18.6454C11.1823 18.4189 8.00027 17.1878 8.00027 13.7958L8 11.2727C8 11.0027 8.22524 10.7868 8.49867 10.7492C9.86951 10.5604 10.9844 9.64036 11.5647 9.06178C11.7959 8.8312 12.204 8.83129 12.4352 9.06178Z"
                  fill="#4440FF"
                />
              </svg>
              www.surebanker.com
            </div>

            <div className="fund__modal__inner__links">
              <div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12.5" cy="12.5" r="12.5" fill="#D9D9D9" />
                  <path
                    d="M8.20964 8.69846L8.20801 9.93685V16.0643C8.20801 17.1113 9.0568 17.9601 10.1038 17.9601L15.13 17.9603C14.9498 18.47 14.4637 18.8351 13.8922 18.8351H10.1038C8.57355 18.8351 7.33301 17.5946 7.33301 16.0643V9.93685C7.33301 9.36477 7.69902 8.87817 8.20964 8.69846ZM15.3538 7.16602C16.0787 7.16602 16.6663 7.75364 16.6663 8.47852V16.0618C16.6663 16.7867 16.0787 17.3743 15.3538 17.3743H10.1038C9.37897 17.3743 8.79134 16.7867 8.79134 16.0618V8.47852C8.79134 7.75364 9.37897 7.16602 10.1038 7.16602H15.3538Z"
                    fill="#667085"
                  />
                </svg>
                Copy payment Link
              </div>
              <div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12.5" cy="12.5" r="12.5" fill="#D9D9D9" />
                  <path
                    d="M14.9168 7.75195C15.8827 7.75195 16.6657 8.53496 16.6657 9.50083C16.6657 10.4667 15.8827 11.2497 14.9168 11.2497C14.4255 11.2497 13.9815 11.0471 13.6638 10.721L10.4805 12.5407C10.5204 12.6873 10.5417 12.8416 10.5417 13.0008C10.5417 13.1601 10.5204 13.3143 10.4805 13.4609L13.6643 15.2802C13.9819 14.9543 14.4257 14.752 14.9168 14.752C15.8827 14.752 16.6657 15.5349 16.6657 16.5008C16.6657 17.4667 15.8827 18.2497 14.9168 18.2497C13.9509 18.2497 13.1679 17.4667 13.1679 16.5008C13.1679 16.3416 13.1892 16.1873 13.2291 16.0407L10.0457 14.221C9.72806 14.5471 9.2841 14.7497 8.79282 14.7497C7.82694 14.7497 7.04395 13.9667 7.04395 13.0008C7.04395 12.0349 7.82694 11.252 8.79282 11.252C9.28387 11.252 9.72766 11.4543 10.0453 11.7802L13.2291 9.96091C13.1892 9.81432 13.1679 9.66006 13.1679 9.50083C13.1679 8.53496 13.9509 7.75195 14.9168 7.75195Z"
                    fill="#667085"
                  />
                </svg>
                Share Payment Link
              </div>
            </div>
          </div>
        </div>
      )}
      {openBarcode && (
        <div className="fund__modal" onClick={handleModalClose}>
          <div className="fund__modal__inner">
            <div className="fund__modal__inner__title">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="22.5" cy="22.5" r="22.5" fill="#FBF6DE" />
                <path
                  d="M14 16C14 14.3432 15.3432 13 17 13H18.5C19.0523 13 19.5 13.4477 19.5 14C19.5 14.5523 19.0523 15 18.5 15H17C16.4477 15 16 15.4477 16 16V17.5C16 18.0523 15.5523 18.5 15 18.5C14.4477 18.5 14 18.0523 14 17.5V16ZM28.5 14C28.5 13.4477 28.9477 13 29.5 13H31C32.6569 13 34 14.3432 34 16V17.5C34 18.0523 33.5523 18.5 33 18.5C32.4477 18.5 32 18.0523 32 17.5V16C32 15.4477 31.5523 15 31 15H29.5C28.9477 15 28.5 14.5523 28.5 14ZM15 25.5C15.5523 25.5 16 25.9477 16 26.5V28C16 28.5523 16.4477 29 17 29H18.5C19.0523 29 19.5 29.4477 19.5 30C19.5 30.5523 19.0523 31 18.5 31H17C15.3432 31 14 29.6569 14 28V26.5C14 25.9477 14.4477 25.5 15 25.5ZM33 25.5C33.5523 25.5 34 25.9477 34 26.5V28C34 29.6569 32.6569 31 31 31H29.5C28.9477 31 28.5 30.5523 28.5 30C28.5 29.4477 28.9477 29 29.5 29H31C31.5523 29 32 28.5523 32 28V26.5C32 25.9477 32.4477 25.5 33 25.5ZM18 16.75C18.5523 16.75 19 17.1977 19 17.75V26.25C19 26.8023 18.5523 27.25 18 27.25C17.4477 27.25 17 26.8023 17 26.25V17.75C17 17.1977 17.4477 16.75 18 16.75ZM23 17.75C23 17.1977 22.5523 16.75 22 16.75C21.4477 16.75 21 17.1977 21 17.75V26.25C21 26.8023 21.4477 27.25 22 27.25C22.5523 27.25 23 26.8023 23 26.25V17.75ZM26 16.75C26.5523 16.75 27 17.1977 27 17.75V26.25C27 26.8023 26.5523 27.25 26 27.25C25.4477 27.25 25 26.8023 25 26.25V17.75C25 17.1977 25.4477 16.75 26 16.75ZM31 17.75C31 17.1977 30.5523 16.75 30 16.75C29.4477 16.75 29 17.1977 29 17.75V26.25C29 26.8023 29.4477 27.25 30 27.25C30.5523 27.25 31 26.8023 31 26.25V17.75Z"
                  fill="#212121"
                />
              </svg>

              <div>
                <div>Barcode</div>
                <div>
                  Scan, download and share the barcode to receive payments
                </div>
              </div>
            </div>
            <div className="fund__modal__inner__image">
              <Image src="/assets/barcode.png" width={142} height={142} />
            </div>

            <div className="fund__modal__inner__links">
              <div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12.5" cy="12.5" r="12.5" fill="#D9D9D9" />
                  <path
                    d="M6 12.5C6 16.0898 8.91015 19 12.5 19C16.0899 19 19 16.0898 19 12.5C19 8.91015 16.0899 6 12.5 6C8.91016 6 6 8.91015 6 12.5ZM15.445 12.3179C15.618 12.491 15.6338 12.7618 15.4921 12.9527L15.445 13.0073L12.8444 15.6079C12.6713 15.781 12.4005 15.7967 12.2096 15.655L12.1549 15.6079L9.55493 13.0068C9.36459 12.8164 9.36464 12.5077 9.55506 12.3174C9.72817 12.1444 9.999 12.1287 10.1898 12.2703L10.2445 12.3176L12.0129 14.0868L12.0128 9.73719C12.0128 9.49039 12.1961 9.28642 12.4341 9.25414L12.5003 9.24968C12.7471 9.24968 12.951 9.43309 12.9833 9.67103L12.9878 9.73719L12.9879 14.0855L14.7556 12.3179C14.9286 12.1448 15.1994 12.1291 15.3903 12.2708L15.445 12.3179Z"
                    fill="#667085"
                  />
                </svg>
                Download Barcode
              </div>
              <div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12.5" cy="12.5" r="12.5" fill="#D9D9D9" />
                  <path
                    d="M14.9168 7.75195C15.8827 7.75195 16.6657 8.53496 16.6657 9.50083C16.6657 10.4667 15.8827 11.2497 14.9168 11.2497C14.4255 11.2497 13.9815 11.0471 13.6638 10.721L10.4805 12.5407C10.5204 12.6873 10.5417 12.8416 10.5417 13.0008C10.5417 13.1601 10.5204 13.3143 10.4805 13.4609L13.6643 15.2802C13.9819 14.9543 14.4257 14.752 14.9168 14.752C15.8827 14.752 16.6657 15.5349 16.6657 16.5008C16.6657 17.4667 15.8827 18.2497 14.9168 18.2497C13.9509 18.2497 13.1679 17.4667 13.1679 16.5008C13.1679 16.3416 13.1892 16.1873 13.2291 16.0407L10.0457 14.221C9.72806 14.5471 9.2841 14.7497 8.79282 14.7497C7.82694 14.7497 7.04395 13.9667 7.04395 13.0008C7.04395 12.0349 7.82694 11.252 8.79282 11.252C9.28387 11.252 9.72766 11.4543 10.0453 11.7802L13.2291 9.96091C13.1892 9.81432 13.1679 9.66006 13.1679 9.50083C13.1679 8.53496 13.9509 7.75195 14.9168 7.75195Z"
                    fill="#667085"
                  />
                </svg>
                Share Barcode
              </div>
            </div>
          </div>
        </div>
      )}
      {openCard && (
        <div className="fund__modal" onClick={handleModalClose}>
          {stage === 1 && (
            <form className="fund__modal__inner" onSubmit={handleCardClick}>
              <div className="fund__modal__inner__title">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="22.5" cy="22.5" r="22.5" fill="#FBF6DE" />
                  <g clip-path="url(#clip0_2512_3348)">
                    <path
                      d="M13 21.1641V26.9998C13 28.3806 14.1193 29.4998 15.5 29.4998H30.5C31.8807 29.4998 33 28.3806 33 26.9998V21.1641C32.9771 21.1656 32.9539 21.1665 32.9306 21.1665H13.0694C13.0461 21.1665 13.0229 21.1656 13 21.1641Z"
                      fill="black"
                    />
                    <path
                      d="M33 19.5024V17C33 15.6193 31.8807 14.5 30.5 14.5H15.5C14.1193 14.5 13 15.6193 13 17V19.5024C13.0229 19.5008 13.0461 19.5 13.0694 19.5H32.9306C32.9539 19.5 32.9771 19.5008 33 19.5024Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2512_3348">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(13 12)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <div>Fund by Debit Card</div>
                  <div></div>
                </div>
              </div>

              <label htmlFor="">Choose amount</label>

              <div className="fund__modal__inner__cards">
                <div className="fund__modal__inner__cards__card">
                  <span>NGN</span> 20,000
                </div>
                <div className="fund__modal__inner__cards__card">
                  <span>NGN</span> 10,000
                </div>
                <div className="fund__modal__inner__cards__card">
                  <span>NGN</span> 5,000
                </div>
                <div className="fund__modal__inner__cards__card">
                  <span>NGN</span> 300
                </div>
              </div>

              <label htmlFor="">Enter amount</label>

              <input
                className="fund__modal__inner__input"
                type="text"
                placeholder="1,000,000"
                required
              />

              <button className="fund__modal__inner__button">Next</button>
            </form>
          )}
          {stage === 2 && (
            <form className="fund__modal__inner" onSubmit={handleCardClick}>
              <div className="fund__modal__inner__title">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="22.5" cy="22.5" r="22.5" fill="#FBF6DE" />
                  <g clip-path="url(#clip0_2512_3348)">
                    <path
                      d="M13 21.1641V26.9998C13 28.3806 14.1193 29.4998 15.5 29.4998H30.5C31.8807 29.4998 33 28.3806 33 26.9998V21.1641C32.9771 21.1656 32.9539 21.1665 32.9306 21.1665H13.0694C13.0461 21.1665 13.0229 21.1656 13 21.1641Z"
                      fill="black"
                    />
                    <path
                      d="M33 19.5024V17C33 15.6193 31.8807 14.5 30.5 14.5H15.5C14.1193 14.5 13 15.6193 13 17V19.5024C13.0229 19.5008 13.0461 19.5 13.0694 19.5H32.9306C32.9539 19.5 32.9771 19.5008 33 19.5024Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2512_3348">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(13 12)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <div>Fund by Debit Card</div>
                  <div></div>
                </div>
              </div>

              <label htmlFor="">Select bank</label>

              <select name="" id="" className="fund__modal__inner__input" required>
                <option value="">Select bank</option>
                <option value="Zenith bank">Zenith bank</option>
              </select>

              <label htmlFor="">Card Number</label>

              <div className="fund__modal__inner__card-input">
                <svg
                  width="24"
                  height="8"
                  viewBox="0 0 24 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4122 2.4775C12.3985 3.55712 13.3744 4.15956 14.1095 4.51778C14.8647 4.88528 15.1184 5.12097 15.1154 5.44966C15.1098 5.95262 14.513 6.17462 13.9545 6.18325C12.9802 6.19834 12.4136 5.92019 11.9633 5.70981L11.6122 7.35222C12.0641 7.56044 12.9008 7.74203 13.7685 7.75C15.8052 7.75 17.1377 6.74462 17.1449 5.18584C17.1529 3.20753 14.4085 3.09803 14.4273 2.21378C14.4338 1.94566 14.6896 1.65953 15.2502 1.58678C15.5277 1.55003 16.2937 1.52191 17.1623 1.92184L17.5031 0.332781C17.0361 0.162718 16.4358 -0.000125408 15.6884 -0.000125408C13.7714 -0.000125408 12.4231 1.01894 12.4122 2.4775ZM20.7786 0.136749C20.4067 0.136749 20.0933 0.353687 19.9534 0.686593L17.044 7.63328H19.0793L19.4842 6.514H21.9713L22.2062 7.63328H24L22.4347 0.136749H20.7786ZM21.0633 2.16184L21.6506 4.97687H20.0421L21.0633 2.16184ZM9.94462 0.136843L8.34037 7.63319H10.2798L11.8833 0.136656L9.94462 0.136843ZM7.07559 0.136843L5.05697 5.23919L4.24041 0.900718C4.14459 0.416406 3.76622 0.136749 3.34603 0.136749H0.0462187L0 0.354437C0.677437 0.501437 1.44712 0.738531 1.91344 0.992218C2.19881 1.14719 2.28019 1.28266 2.37394 1.65091L3.92053 7.63328H5.97L9.11213 0.136749L7.07559 0.136843Z"
                    fill="url(#paint0_linear_6737_5663)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_6737_5663"
                      x1="1103.38"
                      y1="23.2968"
                      x2="1125.81"
                      y2="-772.652"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#222357" />
                      <stop offset="1" stop-color="#254AA5" />
                    </linearGradient>
                  </defs>
                </svg>

                <input
                  className="fund__modal__inner__card-input__input"
                  type="text"
                  placeholder="0000"
                  maxLength={4}
                  required
                />
                <input
                  className="fund__modal__inner__card-input__input"
                  type="text"
                  placeholder="0000"
                  maxLength={4}
                  required
                />
                <input
                  className="fund__modal__inner__card-input__input"
                  type="text"
                  placeholder="0000"
                  maxLength={4}
                  required
                />
                <input
                  className="fund__modal__inner__card-input__input"
                  type="text"
                  placeholder="0000"
                  maxLength={4}
                  required
                />
              </div>

              <div className="fund__modal__inner__input-group">
                <div>
                  <label htmlFor="">Exp Date</label>
                  <input type="date" className="fund__modal__inner__input" required />
                </div>
                <div>
                  <label htmlFor="">CVV</label>
                  <input type="text" className="fund__modal__inner__input" required />
                </div>
              </div>

              <button className="fund__modal__inner__button"
              >Next</button>
            </form>
          )}
          {stage === 3 && (
            <div className="fund__modal__inner">
              <div className="fund__modal__inner__title">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="22.5" cy="22.5" r="22.5" fill="#FBF6DE" />
                  <g clip-path="url(#clip0_2512_3348)">
                    <path
                      d="M13 21.1641V26.9998C13 28.3806 14.1193 29.4998 15.5 29.4998H30.5C31.8807 29.4998 33 28.3806 33 26.9998V21.1641C32.9771 21.1656 32.9539 21.1665 32.9306 21.1665H13.0694C13.0461 21.1665 13.0229 21.1656 13 21.1641Z"
                      fill="black"
                    />
                    <path
                      d="M33 19.5024V17C33 15.6193 31.8807 14.5 30.5 14.5H15.5C14.1193 14.5 13 15.6193 13 17V19.5024C13.0229 19.5008 13.0461 19.5 13.0694 19.5H32.9306C32.9539 19.5 32.9771 19.5008 33 19.5024Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2512_3348">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(13 12)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <div>Fund by Debit Card</div>
                  <div></div>
                </div>
              </div>

              <label htmlFor="">Fund by</label>

              <div className="fund__modal__inner__added-cards">
                <div className="fund__modal__inner__added-cards__card">
                  <Image
                  src="/assets/saved-card.png"
                  objectFit="cover"
                  layout="fill"
                  />
                  <div className="fund__modal__inner__added-cards__card__title">
                    Debit Card
                  </div>
                  <div className="fund__modal__inner__added-cards__card__number">
                    xxxx 2345
                  </div>
                  <div className="fund__modal__inner__added-cards__card__number">
                    subtitle
                  </div>
                </div>
                <div className="fund__modal__inner__added-cards__new-card"
                onClick={handleCardClick}
                >
                  <div>New Card </div>
                </div>
              </div>

              <button className="fund__modal__inner__button"
              onClick={handleCardClick}
              >Next</button>
            </div>
          )}
        </div>
      )}

      <Navigation />
    </div>
  );
}
