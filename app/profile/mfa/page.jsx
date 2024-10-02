"use client";

import Image from "next/image";
import Navigation from "../../components/navigation";
import ProfileHeader from "../../components/profile-header";
import { useEffect, useState } from "react";

export default function Profile() {
  const [mfas, setMfas] = useState([]);
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState(1);

  const handleAddMfa = (option) => {
    if (mfas.includes(option)) {
      setMfas(mfas.filter((item) => item !== option));
    } else {
      setMfas([...mfas, option]);
      if (option === "otp") {
        setOpen(true);
      }
    }
  };

  const handleClose = (e) => {
    if (e.target.classList.contains("profile__inner__mfa__modal")) {
      setOpen(false);
    }
  };

  useEffect(() => {
    const otpInputs = document.querySelectorAll(".profile__inner__mfa__modal__inner__otp-group__otp");

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
  }, [stage === 2]);

  return (
    <div className="profile">
      <ProfileHeader />
      <div className="profile__inner">
        <div className="profile__inner__mfa">
          <div
            className="profile__inner__mfa__nav"
            onClick={() => (window.location.href = "/profile")}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#667085" />
              <path
                d="M16.8169 10.6831C17.061 10.9271 17.061 11.3229 16.8169 11.5669L12.8839 15.5L16.8169 19.4331C17.061 19.6771 17.061 20.0729 16.8169 20.3169C16.5729 20.561 16.1771 20.561 15.9331 20.3169L11.5581 15.9419C11.314 15.6979 11.314 15.3021 11.5581 15.0581L15.9331 10.6831C16.1771 10.439 16.5729 10.439 16.8169 10.6831Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="profile__inner__mfa__title">
            Two Factor Authentication
          </div>
          <div className="profile__inner__mfa__subtitle">
            Secure your account by choosing the system of authentication your
            account
          </div>

          <div className="profile__inner__mfa__group">
            <div>
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_23_849)">
                  <rect x="4" width="30" height="30" rx="3" fill="#F2FAFF" />
                  <g clip-path="url(#clip0_23_849)">
                    <path
                      d="M25.8008 14.7289C25.8008 15.4273 25.2352 15.9929 24.5367 15.9929H20.1758L18.3008 12.2007L20.3242 8.69606C20.6742 8.09137 21.4461 7.88512 22.0508 8.23356C22.6555 8.58356 22.8617 9.35544 22.5133 9.96012L20.4898 13.4648H24.5367C25.2352 13.4648 25.8008 14.0304 25.8008 14.7289Z"
                      fill="#1A73E8"
                    />
                    <path
                      d="M22.0508 21.2241C21.4461 21.5725 20.6742 21.3663 20.3242 20.7616L18.3008 17.2569L16.2774 20.7616C15.9274 21.3663 15.1555 21.5725 14.5508 21.2241C13.9461 20.8741 13.7399 20.1022 14.0883 19.4975L16.1117 15.9928L18.3008 15.91L20.4899 15.9928L22.5133 19.4975C22.8617 20.1022 22.6555 20.8741 22.0508 21.2241Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M18.3008 12.2007L17.7305 13.7507L16.1117 13.4648L14.0883 9.96012C13.7399 9.35544 13.9461 8.58356 14.5508 8.23356C15.1555 7.88512 15.9274 8.09137 16.2774 8.69606L18.3008 12.2007Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M17.9742 13.4647L16.507 15.9928H12.0648C11.3664 15.9928 10.8008 15.4272 10.8008 14.7288C10.8008 14.0303 11.3664 13.4647 12.0648 13.4647H17.9742Z"
                      fill="#34A853"
                    />
                    <path
                      d="M20.4898 15.9929H16.1117L18.3008 12.2007L20.4898 15.9929Z"
                      fill="#185DB7"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_23_849"
                    x="0"
                    y="0"
                    width="38"
                    height="38"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_23_849"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_23_849"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_23_849">
                    <rect
                      width="15"
                      height="13.86"
                      fill="white"
                      transform="translate(10.8008 7.79883)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div className="profile__inner__mfa__group__title">
                Google Authenticator
              </div>
            </div>

            <div
              className={`profile__inner__mfa__group__switch ${
                mfas.includes("googleAuth") &&
                `profile__inner__mfa__group__switch-active`
              }`}
              onClick={() => handleAddMfa("googleAuth")}
            >
              <div className="profile__inner__mfa__group__switch__ball"></div>
            </div>
          </div>
          <div className="profile__inner__mfa__group">
            <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="30" height="30" rx="3" fill="#FFFBE8" />
                <rect
                  x="5"
                  y="4"
                  width="20"
                  height="20"
                  fill="url(#pattern0_24_850)"
                />
                <defs>
                  <pattern
                    id="pattern0_24_850"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_24_850"
                      transform="scale(0.00195312)"
                    />
                  </pattern>
                  <image
                    id="image0_24_850"
                    width="512"
                    height="512"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>

              <div className="profile__inner__mfa__group__title">OTP</div>
            </div>

            <div
              className={`profile__inner__mfa__group__switch ${
                mfas.includes("otp") &&
                `profile__inner__mfa__group__switch-active`
              }`}
              onClick={() => handleAddMfa("otp")}
            >
              <div className="profile__inner__mfa__group__switch__ball"></div>
            </div>
          </div>

          {open && (
            <div className="profile__inner__mfa__modal" onClick={handleClose}>
              <div className="profile__inner__mfa__modal__inner">
                <div className="profile__inner__mfa__modal__inner__title">
                  OTP
                </div>
                <div className="profile__inner__mfa__modal__inner__subtitle">
                  SetUp OTP authentication
                </div>

                <label className="profile__inner__mfa__modal__inner__label">
                  Phone number
                </label>
                {stage === 1 && (
                  <input
                    type="text"
                    className="profile__inner__mfa__modal__inner__input"
                  />
                )}
                {stage === 2 && (
                  <div className="profile__inner__mfa__modal__inner__otp-group">
                    <input
                      className="profile__inner__mfa__modal__inner__otp-group__otp"
                      type="text"
                      maxLength={1}
                    />
                    <input
                      className="profile__inner__mfa__modal__inner__otp-group__otp"
                      type="text"
                      maxLength={1}
                    />
                    <input
                      className="profile__inner__mfa__modal__inner__otp-group__otp"
                      type="text"
                      maxLength={1}
                    />
                    <input
                      className="profile__inner__mfa__modal__inner__otp-group__otp"
                      type="text"
                      maxLength={1}
                    />
                    <input
                      className="profile__inner__mfa__modal__inner__otp-group__otp"
                      type="text"
                      maxLength={1}
                    />
                    <input
                      className="profile__inner__mfa__modal__inner__otp-group__otp"
                      type="text"
                      maxLength={1}
                    />
                  </div>
                )}
                <button
                  className="profile__inner__mfa__modal__inner__button"
                  onClick={() => {
                    if (stage === 1) {
                      setStage(2);
                    } else {
                      setOpen(false);
                      setStage(1);
                    }
                  }}
                >
                  Setup OTP
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Navigation />
    </div>
  );
}
