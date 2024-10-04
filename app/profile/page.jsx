"use client";

import Image from "next/image";
import Navigation from "../components/navigation";
import ProfileHeader from "../components/profile-header";
import { getProfile } from "../apis/profile";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const auth = useSelector((state) => state.auth);
  const [toggleOpen, setToggleOpen] = useState(false);
  const [freezeOpen, setFreezeOpen] = useState(false);
  const [unfreezeOpen, setUnfreezeOpen] = useState(true);
  const [activeQuestion, setActiveQuestion] = useState("");
  const [stage, setStage] = useState(1);

  const questions = [
    "My password got compromised?",
    "My ATM was stolen",
    "My ATM was misplaced",
    "Other",
  ];
  const handleGetProfile = async () => {
    const response = await getProfile(auth?.token);
    console.log("getProfile", response);
  };

  useEffect(() => {
    handleGetProfile();
  }, []);

  useEffect(() => {
    const otpInputs = document.querySelectorAll(
      ".profile__modal__inner__otp-inputs__input"
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
  }, [stage === 3]);

  // const handleLogout = () => {
  //   document.cookie =
  //     "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
  //   dispatch({
  //     type: "LOGOUT_SUCCESS",
  //   });
  //   localStorage.removeItem("token");
  //   window.location.href = "/alt/login";
  //   window.scrollTo(0, 0);
  // };

  const handleToggleClose = (e) => {
    if (e.target.classList.contains("profile__modal")) {
      setToggleOpen(false);
      setFreezeOpen(false);
      setUnfreezeOpen(false);
    }
  };

  const handleFreezeAccount = (e) => {
    e.preventDefault();
    if (stage === 1) setStage(2);
    else if (stage === 2) {
      if (!activeQuestion) {
        alert("Please select a reason for freezing account");
        return;
      } else {
        setStage(3);
      }
    } else setFreezeOpen(false);
  };

  return (
    <div className="profile">
      <ProfileHeader />
      <div className="profile__inner">
        <div className="profile__inner__title">Personal</div>

        <div
          className="profile__inner__group"
          onClick={() => (window.location.href = "/profile/personal")}
        >
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="30" height="30" fill="url(#pattern0_6678_3950)" />
              <defs>
                <pattern
                  id="pattern0_6678_3950"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_6678_3950"
                    transform="scale(0.00271739)"
                  />
                </pattern>
                <image
                  id="image0_6678_3950"
                  width="368"
                  height="368"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>

            <div>
              <div className="profile__inner__group__title">Update Profile</div>
              <div className="profile__inner__group__subtitle">
                Update your personal information
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__title">General</div>

        <div className="profile__inner__group">
          <div>
            <Image src="/assets/statement.png" width={25} height={23.71} />

            <div>
              <div className="profile__inner__group__title">
                Statements and Reports
              </div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div
          className="profile__inner__group"
          onClick={() => (window.location.href = "/profile/kyc")}
        >
          <div>
            <Image src="/assets/kyc.png" width={30} height={27.72} />

            <div>
              <div className="profile__inner__group__title">KYC</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__title">Security</div>
        <div
          className="profile__inner__group"
          onClick={() => (window.location.href = "/profile/mfa")}
        >
          <div>
            <Image src="/assets/2fa.png" width={20} height={26.58} />

            <div>
              <div className="profile__inner__group__title">
                Two Factor Authentication
              </div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/password.png" width={25} height={34.04} />

            <div>
              <div className="profile__inner__group__title">
                Password and Pin
              </div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/transaction.png" width={25} height={18.14} />

            <div>
              <div className="profile__inner__group__title">Transaction</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__title">Help</div>

        <div className="profile__inner__group">
          <div>
            <Image src="/assets/feedback.png" width={15} height={23.68} />

            <div>
              <div className="profile__inner__group__title">FAQ</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/email.png" width={15} height={23.68} />

            <div>
              <div className="profile__inner__group__title">Email</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>

        <div className="profile__inner__title">Feedback</div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/feedback.png" width={25} height={28.6} />

            <div>
              <div className="profile__inner__group__title">Feedback</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/rateus.png" width={23} height={28.19} />

            <div>
              <div className="profile__inner__group__title">Rate Us</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/delete.png" width={25} height={26.77} />

            <div>
              <div className="profile__inner__group__title">Delete Account</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div
          className="profile__inner__group"
          onClick={() => setToggleOpen(true)}
        >
          <div>
            <svg
              width="30"
              height="11"
              viewBox="0 0 30 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                width="30"
                height="11.0054"
                fill="url(#pattern0_6630_1471)"
              />
              <defs>
                <pattern
                  id="pattern0_6630_1471"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_6630_1471"
                    transform="scale(0.00271739 0.00740741)"
                  />
                </pattern>
                <image
                  id="image0_6630_1471"
                  width="368"
                  height="135"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>

            <div>
              <div className="profile__inner__group__title">Toggle Mode</div>
              <div className="profile__inner__group__subtitle">
                Change between a dark and white theme
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>

        <div className="profile__inner__title">Account</div>
        <div
          className="profile__inner__group"
          onClick={() => setFreezeOpen(true)}
        >
          <div>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6688_5100)">
                <path
                  d="M9.78846 15.2695L6.81644 15.1029C6.74137 15.0988 6.6691 15.0731 6.60835 15.0288C6.54761 14.9845 6.50099 14.9235 6.47414 14.8533C6.44728 14.7831 6.44133 14.7066 6.45701 14.633C6.47269 14.5595 6.50932 14.4921 6.56249 14.4389L6.5619 14.4383L8.52625 12.4739L6.54227 10.2544C6.49228 10.1985 6.45953 10.1293 6.44799 10.0551C6.43645 9.98102 6.4466 9.90514 6.47722 9.83665C6.50784 9.76816 6.55762 9.71 6.62056 9.66917C6.68349 9.62835 6.7569 9.6066 6.83192 9.60656V9.60495H9.60936L9.77586 6.63293C9.77998 6.55786 9.80575 6.48558 9.85005 6.42484C9.89435 6.3641 9.9553 6.31748 10.0255 6.29062C10.0957 6.26377 10.1722 6.25782 10.2458 6.2735C10.3193 6.28917 10.3867 6.32581 10.4399 6.37897L10.4405 6.37834L12.4049 8.34274L14.6244 6.35876C14.7012 6.29004 14.8022 6.25465 14.9051 6.26036C15.008 6.26608 15.1045 6.31243 15.1732 6.38923C15.2371 6.46042 15.2724 6.55275 15.2722 6.64841H15.2739V9.42585L18.2459 9.59235C18.321 9.59646 18.3932 9.62221 18.454 9.66651C18.5147 9.71081 18.5613 9.77175 18.5882 9.84197C18.6151 9.91219 18.621 9.98869 18.6053 10.0622C18.5896 10.1357 18.553 10.2032 18.4998 10.2563L18.5004 10.257L16.5361 12.2214L18.5201 14.4409C18.5888 14.5177 18.6242 14.6187 18.6184 14.7216C18.6127 14.8245 18.5664 14.921 18.4896 14.9897C18.4184 15.0536 18.3261 15.0888 18.2304 15.0887V15.0904H15.453L15.2865 18.0623C15.2823 18.1374 15.2565 18.2096 15.2122 18.2704C15.1679 18.3311 15.107 18.3777 15.0368 18.4046C14.9666 18.4314 14.8901 18.4374 14.8166 18.4217C14.743 18.406 14.6756 18.3694 14.6224 18.3163L14.6218 18.3169L12.6574 16.3525L10.4379 18.3365C10.3611 18.4053 10.2601 18.4406 10.1572 18.4349C10.0543 18.4292 9.95785 18.3829 9.8891 18.3061C9.8252 18.2349 9.78994 18.1425 9.79012 18.0469H9.78846V15.2695ZM7.72957 14.3742L10.1787 14.5111C10.2823 14.5111 10.3815 14.5522 10.4547 14.6254C10.5279 14.6986 10.569 14.7979 10.569 14.9014V17.1767L12.389 15.5498L12.3976 15.5409C12.4708 15.4677 12.57 15.4266 12.6735 15.4266C12.777 15.4266 12.8763 15.4677 12.9494 15.5409L14.5577 17.1492L14.6946 14.7001C14.6946 14.5966 14.7358 14.4973 14.8089 14.4241C14.8821 14.3509 14.9814 14.3098 15.0849 14.3098H17.3602L15.7333 12.4898L15.7244 12.4812C15.6512 12.408 15.6101 12.3088 15.6101 12.2053C15.6101 12.1018 15.6512 12.0026 15.7244 11.9294L17.3327 10.321L14.8836 10.1842C14.7801 10.1842 14.6808 10.1431 14.6076 10.0699C14.5344 9.99668 14.4933 9.89742 14.4933 9.79391V7.51862L12.6733 9.14548L12.6647 9.15436C12.5915 9.22753 12.4923 9.26863 12.3888 9.26863C12.2853 9.26863 12.1861 9.22753 12.1129 9.15436L10.5046 7.54606L10.3677 9.99523C10.3677 10.0987 10.3266 10.198 10.2534 10.2712C10.1802 10.3444 10.0809 10.3855 9.97743 10.3855H7.70213L9.32899 12.2055L9.33792 12.2141C9.41109 12.2873 9.45219 12.3865 9.45219 12.49C9.45219 12.5935 9.41109 12.6927 9.33792 12.7659L7.72957 14.3742Z"
                  fill="#71D4ED"
                />
                <path
                  d="M5.53867 18.7393L3.92749 18.7136C3.65146 18.7093 3.43125 18.482 3.43555 18.206C3.43984 17.93 3.66714 17.7098 3.94316 17.7141L6.52275 17.7552L11.4418 12.8361H4.52949L2.73457 14.7711C2.54624 14.9735 2.22944 14.9849 2.02705 14.7966C1.82466 14.6083 1.81323 14.2915 2.00156 14.0891L3.16377 12.8361H0.501758C0.224658 12.8361 0 12.6115 0 12.3344C0 12.0573 0.224658 11.8326 0.501758 11.8326H3.12949L2.00933 10.6762C1.8167 10.4781 1.82109 10.1613 2.01919 9.96865C2.21724 9.77603 2.53403 9.78042 2.72671 9.97847L4.52271 11.8326H11.3071L6.54004 7.06562L3.90278 7.16465C3.62681 7.17437 3.39507 6.9585 3.38535 6.68252C3.37559 6.40654 3.59146 6.17485 3.86748 6.16509L5.57539 6.10098L3.69253 4.21812C3.49663 4.02217 3.49663 3.70449 3.69253 3.50859C3.88843 3.31265 4.2061 3.31265 4.40205 3.50859L6.26064 5.36719L6.28638 3.75596C6.29067 3.47998 6.51802 3.25972 6.79399 3.26401C7.06997 3.26831 7.29023 3.49565 7.28594 3.77163L7.24482 6.35132L12.0042 11.1107V4.17964L10.15 2.38369C9.9519 2.19106 9.94756 1.87422 10.1402 1.67617C10.3328 1.47808 10.6497 1.47368 10.8477 1.66631L12.0042 2.78647V0.501758C12.0042 0.224658 12.2288 0 12.5059 0C12.783 0 13.0077 0.224658 13.0077 0.501758V2.82075L14.2605 1.6585C14.4629 1.47017 14.7797 1.48159 14.9681 1.68398C15.1564 1.88643 15.145 2.20317 14.9426 2.3915L13.0077 4.18647V11.2703L18.0479 6.23003L18.0068 3.65039C18.0025 3.37437 18.2228 3.14707 18.4987 3.14277C18.7747 3.13848 19.0021 3.35874 19.0063 3.63472L19.032 5.24595L20.6481 3.62983C20.844 3.43394 21.1617 3.43394 21.3577 3.62983C21.5536 3.82578 21.5536 4.14346 21.3577 4.3394L19.7173 5.97974L21.4253 6.04385C21.7013 6.05356 21.9172 6.2853 21.9075 6.56128C21.8977 6.8373 21.666 7.05312 21.39 7.04341L18.7526 6.94438L13.8644 11.8326H20.8204L22.6163 9.97847C22.8089 9.78042 23.1258 9.77603 23.3238 9.96865C23.5219 10.1613 23.5263 10.4781 23.3336 10.6762L22.2135 11.8326H24.4982C24.7753 11.8326 25 12.0573 25 12.3344C25 12.6115 24.7753 12.8361 24.4982 12.8361H22.1792L23.3415 14.0891C23.5298 14.2915 23.5184 14.6083 23.316 14.7966C23.1136 14.9849 22.7968 14.9735 22.6084 14.7711L20.8135 12.8361H13.7296L18.77 17.8765L21.3497 17.8353C21.6256 17.831 21.853 18.0513 21.8573 18.3272C21.8616 18.6033 21.6413 18.8306 21.3653 18.8349L19.754 18.8605L21.3701 20.4766C21.5661 20.6726 21.5661 20.9902 21.3701 21.1861C21.1742 21.3821 20.8565 21.3821 20.6606 21.1861L19.0203 19.5458L18.9562 21.2538C18.9464 21.5298 18.7147 21.7457 18.4387 21.7359C18.1627 21.7262 17.9469 21.4945 17.9566 21.2185L18.0557 18.5812L13.0077 13.5332V20.4705L14.9426 22.2654C15.145 22.4538 15.1564 22.7706 14.9681 22.9729C14.7797 23.1753 14.4629 23.1868 14.2605 22.9984L13.0077 21.8362V24.4983C13.0077 24.7754 12.783 25 12.5059 25C12.2288 25 12.0042 24.7754 12.0042 24.4983V21.8705L10.8477 22.9906C10.6497 23.1833 10.3328 23.1789 10.1402 22.9808C9.94756 22.7827 9.9519 22.4659 10.15 22.2732L12.0042 20.4773V13.6929L7.23711 18.4599L7.33618 21.0973C7.3459 21.3732 7.13003 21.605 6.85405 21.6147C6.57803 21.6244 6.34634 21.4085 6.33662 21.1326L6.27246 19.4246L4.38955 21.3075C4.19365 21.5034 3.87598 21.5034 3.68003 21.3075C3.48413 21.1115 3.48413 20.7939 3.68003 20.5979L5.53867 18.7393Z"
                  fill="#38C0F2"
                />
              </g>
              <defs>
                <clipPath id="clip0_6688_5100">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div>
              <div className="profile__inner__group__title">Freeze Account</div>
              <div className="profile__inner__group__subtitle">
                In the case of your account being compromised, please use
              </div>
            </div>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
      </div>

      {toggleOpen && (
        <div className="profile__modal" onClick={handleToggleClose}>
          <div className="profile__modal__inner">
            <div className="profile__modal__inner__title">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <circle cx="22.5" cy="22.5" r="22.5" fill="#E8F8FF" />
                <rect
                  x="8"
                  y="18"
                  width="30"
                  height="11.0054"
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
                      transform="scale(0.00271739 0.00740741)"
                    />
                  </pattern>
                  <image
                    id="image0_2512_3348"
                    width="368"
                    height="135"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
              <div>
                <div>Toggle Mode</div>
                <div>Choose the desirable theme below</div>
              </div>
            </div>

            <div className="profile__modal__inner__modes">
              <div>
                <div className="profile__modal__inner__modes__box-light profile__modal__inner__modes__box-active"></div>

                <div className="profile__modal__inner__modes__title profile__modal__inner__modes__box-active__title">
                  Light Mode
                </div>
              </div>
              <div>
                <div className="profile__modal__inner__modes__box-dark profile__modal__inner__modes__box-active"></div>

                <div className="profile__modal__inner__modes__title profile__modal__inner__modes__box-active__title">
                  Dark Mode
                </div>
              </div>
            </div>

            <button className="profile__modal__inner__button">
              Save Theme
            </button>
          </div>
        </div>
      )}
      {freezeOpen && (
        <div className="profile__modal" onClick={handleToggleClose}>
          {stage === 1 && (
            <div className="profile__modal__inner">
              <div className="profile__modal__inner__title">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="22.5" cy="22.5" r="22.5" fill="#F2FAFF" />
                  <g clip-path="url(#clip0_2512_3348)">
                    <path
                      d="M20.7885 26.2695L17.8164 26.1029C17.7414 26.0988 17.6691 26.0731 17.6084 26.0288C17.5476 25.9845 17.501 25.9235 17.4741 25.8533C17.4473 25.7831 17.4413 25.7066 17.457 25.633C17.4727 25.5595 17.5093 25.4921 17.5625 25.4389L17.5619 25.4383L19.5263 23.4739L17.5423 21.2544C17.4923 21.1985 17.4595 21.1293 17.448 21.0551C17.4364 20.981 17.4466 20.9051 17.4772 20.8367C17.5078 20.7682 17.5576 20.71 17.6206 20.6692C17.6835 20.6283 17.7569 20.6066 17.8319 20.6066V20.6049H20.6094L20.7759 17.6329C20.78 17.5579 20.8057 17.4856 20.85 17.4248C20.8944 17.3641 20.9553 17.3175 21.0255 17.2906C21.0957 17.2638 21.1722 17.2578 21.2458 17.2735C21.3193 17.2892 21.3867 17.3258 21.4399 17.379L21.4405 17.3783L23.4049 19.3427L25.6244 17.3588C25.7012 17.29 25.8022 17.2547 25.9051 17.2604C26.008 17.2661 26.1045 17.3124 26.1732 17.3892C26.2371 17.4604 26.2724 17.5527 26.2722 17.6484H26.2739V20.4258L29.2459 20.5924C29.321 20.5965 29.3932 20.6222 29.454 20.6665C29.5147 20.7108 29.5613 20.7717 29.5882 20.842C29.6151 20.9122 29.621 20.9887 29.6053 21.0622C29.5896 21.1357 29.553 21.2032 29.4998 21.2563L29.5004 21.257L27.5361 23.2214L29.5201 25.4409C29.5888 25.5177 29.6242 25.6187 29.6184 25.7216C29.6127 25.8245 29.5664 25.921 29.4896 25.9897C29.4184 26.0536 29.3261 26.0888 29.2304 26.0887V26.0904H26.453L26.2865 29.0623C26.2823 29.1374 26.2565 29.2096 26.2122 29.2704C26.1679 29.3311 26.107 29.3777 26.0368 29.4046C25.9666 29.4314 25.8901 29.4374 25.8166 29.4217C25.743 29.406 25.6756 29.3694 25.6224 29.3163L25.6218 29.3169L23.6574 27.3525L21.4379 29.3365C21.3611 29.4053 21.2601 29.4406 21.1572 29.4349C21.0543 29.4292 20.9578 29.3829 20.8891 29.3061C20.8252 29.2349 20.7899 29.1425 20.7901 29.0469H20.7885V26.2695ZM18.7296 25.3742L21.1787 25.5111C21.2823 25.5111 21.3815 25.5522 21.4547 25.6254C21.5279 25.6986 21.569 25.7979 21.569 25.9014V28.1767L23.389 26.5498L23.3976 26.5409C23.4708 26.4677 23.57 26.4266 23.6735 26.4266C23.777 26.4266 23.8763 26.4677 23.9494 26.5409L25.5577 28.1492L25.6946 25.7001C25.6946 25.5966 25.7358 25.4973 25.8089 25.4241C25.8821 25.3509 25.9814 25.3098 26.0849 25.3098H28.3602L26.7333 23.4898L26.7244 23.4812C26.6512 23.408 26.6101 23.3088 26.6101 23.2053C26.6101 23.1018 26.6512 23.0026 26.7244 22.9294L28.3327 21.321L25.8836 21.1842C25.7801 21.1842 25.6808 21.1431 25.6076 21.0699C25.5344 20.9967 25.4933 20.8974 25.4933 20.7939V18.5186L23.6733 20.1455L23.6647 20.1544C23.5915 20.2275 23.4923 20.2686 23.3888 20.2686C23.2853 20.2686 23.1861 20.2275 23.1129 20.1544L21.5046 18.5461L21.3677 20.9952C21.3677 21.0987 21.3266 21.198 21.2534 21.2712C21.1802 21.3444 21.0809 21.3855 20.9774 21.3855H18.7021L20.329 23.2055L20.3379 23.2141C20.4111 23.2873 20.4522 23.3865 20.4522 23.49C20.4522 23.5935 20.4111 23.6927 20.3379 23.7659L18.7296 25.3742Z"
                      fill="#71D4ED"
                    />
                    <path
                      d="M16.5387 29.7393L14.9275 29.7136C14.6515 29.7093 14.4313 29.482 14.4355 29.206C14.4398 28.93 14.6671 28.7098 14.9432 28.7141L17.5228 28.7552L22.4418 23.8361H15.5295L13.7346 25.7711C13.5462 25.9735 13.2294 25.9849 13.0271 25.7966C12.8247 25.6083 12.8132 25.2915 13.0016 25.0891L14.1638 23.8361H11.5018C11.2247 23.8361 11 23.6115 11 23.3344C11 23.0573 11.2247 22.8326 11.5018 22.8326H14.1295L13.0093 21.6762C12.8167 21.4781 12.8211 21.1613 13.0192 20.9687C13.2172 20.776 13.534 20.7804 13.7267 20.9785L15.5227 22.8326H22.3071L17.54 18.0656L14.9028 18.1646C14.6268 18.1744 14.3951 17.9585 14.3854 17.6825C14.3756 17.4065 14.5915 17.1749 14.8675 17.1651L16.5754 17.101L14.6925 15.2181C14.4966 15.0222 14.4966 14.7045 14.6925 14.5086C14.8884 14.3126 15.2061 14.3126 15.4021 14.5086L17.2606 16.3672L17.2864 14.756C17.2907 14.48 17.518 14.2597 17.794 14.264C18.07 14.2683 18.2902 14.4957 18.2859 14.7716L18.2448 17.3513L23.0042 22.1107V15.1796L21.15 13.3837C20.9519 13.1911 20.9476 12.8742 21.1402 12.6762C21.3328 12.4781 21.6497 12.4737 21.8477 12.6663L23.0042 13.7865V11.5018C23.0042 11.2247 23.2288 11 23.5059 11C23.783 11 24.0077 11.2247 24.0077 11.5018V13.8208L25.2605 12.6585C25.4629 12.4702 25.7797 12.4816 25.9681 12.684C26.1564 12.8864 26.145 13.2032 25.9426 13.3915L24.0077 15.1865V22.2703L29.0479 17.23L29.0068 14.6504C29.0025 14.3744 29.2228 14.1471 29.4987 14.1428C29.7747 14.1385 30.0021 14.3587 30.0063 14.6347L30.032 16.2459L31.6481 14.6298C31.844 14.4339 32.1617 14.4339 32.3577 14.6298C32.5536 14.8258 32.5536 15.1435 32.3577 15.3394L30.7173 16.9797L32.4253 17.0438C32.7013 17.0536 32.9172 17.2853 32.9075 17.5613C32.8977 17.8373 32.666 18.0531 32.39 18.0434L29.7526 17.9444L24.8644 22.8326H31.8204L33.6163 20.9785C33.8089 20.7804 34.1258 20.776 34.3238 20.9687C34.5219 21.1613 34.5263 21.4781 34.3336 21.6762L33.2135 22.8326H35.4982C35.7753 22.8326 36 23.0573 36 23.3344C36 23.6115 35.7753 23.8361 35.4982 23.8361H33.1792L34.3415 25.0891C34.5298 25.2915 34.5184 25.6083 34.316 25.7966C34.1136 25.9849 33.7968 25.9735 33.6084 25.7711L31.8135 23.8361H24.7296L29.77 28.8765L32.3497 28.8353C32.6256 28.831 32.853 29.0513 32.8573 29.3272C32.8616 29.6033 32.6413 29.8306 32.3653 29.8349L30.754 29.8605L32.3701 31.4766C32.5661 31.6726 32.5661 31.9902 32.3701 32.1861C32.1742 32.3821 31.8565 32.3821 31.6606 32.1861L30.0203 30.5458L29.9562 32.2538C29.9464 32.5298 29.7147 32.7457 29.4387 32.7359C29.1627 32.7262 28.9469 32.4945 28.9566 32.2185L29.0557 29.5812L24.0077 24.5332V31.4705L25.9426 33.2654C26.145 33.4538 26.1564 33.7706 25.9681 33.9729C25.7797 34.1753 25.4629 34.1868 25.2605 33.9984L24.0077 32.8362V35.4983C24.0077 35.7754 23.783 36 23.5059 36C23.2288 36 23.0042 35.7754 23.0042 35.4983V32.8705L21.8477 33.9906C21.6497 34.1833 21.3328 34.1789 21.1402 33.9808C20.9476 33.7827 20.9519 33.4659 21.15 33.2732L23.0042 31.4773V24.6929L18.2371 29.4599L18.3362 32.0973C18.3459 32.3732 18.13 32.605 17.8541 32.6147C17.578 32.6244 17.3463 32.4085 17.3366 32.1326L17.2725 30.4246L15.3896 32.3075C15.1937 32.5034 14.876 32.5034 14.68 32.3075C14.4841 32.1115 14.4841 31.7939 14.68 31.5979L16.5387 29.7393Z"
                      fill="#38C0F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2512_3348">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(11 11)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <div>Freeze Account</div>
                  <div>Protect your account in the case of a compromise</div>
                </div>
              </div>

              <div className="profile__modal__inner__subtitle underline">
                Are you sure you want to freeze your account?
              </div>

              <button className="error-button" onClick={handleFreezeAccount}>
                Yes, i want to freeze my account
              </button>
              <br />
              <button
                className="trans-button"
                onClick={() => setFreezeOpen(false)}
              >
                No, i am not freezing my account
              </button>
            </div>
          )}
          {stage === 2 && (
            <div className="profile__modal__inner">
              <div className="profile__modal__inner__title">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="22.5" cy="22.5" r="22.5" fill="#F2FAFF" />
                  <g clip-path="url(#clip0_2512_3348)">
                    <path
                      d="M20.7885 26.2695L17.8164 26.1029C17.7414 26.0988 17.6691 26.0731 17.6084 26.0288C17.5476 25.9845 17.501 25.9235 17.4741 25.8533C17.4473 25.7831 17.4413 25.7066 17.457 25.633C17.4727 25.5595 17.5093 25.4921 17.5625 25.4389L17.5619 25.4383L19.5263 23.4739L17.5423 21.2544C17.4923 21.1985 17.4595 21.1293 17.448 21.0551C17.4364 20.981 17.4466 20.9051 17.4772 20.8367C17.5078 20.7682 17.5576 20.71 17.6206 20.6692C17.6835 20.6283 17.7569 20.6066 17.8319 20.6066V20.6049H20.6094L20.7759 17.6329C20.78 17.5579 20.8057 17.4856 20.85 17.4248C20.8944 17.3641 20.9553 17.3175 21.0255 17.2906C21.0957 17.2638 21.1722 17.2578 21.2458 17.2735C21.3193 17.2892 21.3867 17.3258 21.4399 17.379L21.4405 17.3783L23.4049 19.3427L25.6244 17.3588C25.7012 17.29 25.8022 17.2547 25.9051 17.2604C26.008 17.2661 26.1045 17.3124 26.1732 17.3892C26.2371 17.4604 26.2724 17.5527 26.2722 17.6484H26.2739V20.4258L29.2459 20.5924C29.321 20.5965 29.3932 20.6222 29.454 20.6665C29.5147 20.7108 29.5613 20.7717 29.5882 20.842C29.6151 20.9122 29.621 20.9887 29.6053 21.0622C29.5896 21.1357 29.553 21.2032 29.4998 21.2563L29.5004 21.257L27.5361 23.2214L29.5201 25.4409C29.5888 25.5177 29.6242 25.6187 29.6184 25.7216C29.6127 25.8245 29.5664 25.921 29.4896 25.9897C29.4184 26.0536 29.3261 26.0888 29.2304 26.0887V26.0904H26.453L26.2865 29.0623C26.2823 29.1374 26.2565 29.2096 26.2122 29.2704C26.1679 29.3311 26.107 29.3777 26.0368 29.4046C25.9666 29.4314 25.8901 29.4374 25.8166 29.4217C25.743 29.406 25.6756 29.3694 25.6224 29.3163L25.6218 29.3169L23.6574 27.3525L21.4379 29.3365C21.3611 29.4053 21.2601 29.4406 21.1572 29.4349C21.0543 29.4292 20.9578 29.3829 20.8891 29.3061C20.8252 29.2349 20.7899 29.1425 20.7901 29.0469H20.7885V26.2695ZM18.7296 25.3742L21.1787 25.5111C21.2823 25.5111 21.3815 25.5522 21.4547 25.6254C21.5279 25.6986 21.569 25.7979 21.569 25.9014V28.1767L23.389 26.5498L23.3976 26.5409C23.4708 26.4677 23.57 26.4266 23.6735 26.4266C23.777 26.4266 23.8763 26.4677 23.9494 26.5409L25.5577 28.1492L25.6946 25.7001C25.6946 25.5966 25.7358 25.4973 25.8089 25.4241C25.8821 25.3509 25.9814 25.3098 26.0849 25.3098H28.3602L26.7333 23.4898L26.7244 23.4812C26.6512 23.408 26.6101 23.3088 26.6101 23.2053C26.6101 23.1018 26.6512 23.0026 26.7244 22.9294L28.3327 21.321L25.8836 21.1842C25.7801 21.1842 25.6808 21.1431 25.6076 21.0699C25.5344 20.9967 25.4933 20.8974 25.4933 20.7939V18.5186L23.6733 20.1455L23.6647 20.1544C23.5915 20.2275 23.4923 20.2686 23.3888 20.2686C23.2853 20.2686 23.1861 20.2275 23.1129 20.1544L21.5046 18.5461L21.3677 20.9952C21.3677 21.0987 21.3266 21.198 21.2534 21.2712C21.1802 21.3444 21.0809 21.3855 20.9774 21.3855H18.7021L20.329 23.2055L20.3379 23.2141C20.4111 23.2873 20.4522 23.3865 20.4522 23.49C20.4522 23.5935 20.4111 23.6927 20.3379 23.7659L18.7296 25.3742Z"
                      fill="#71D4ED"
                    />
                    <path
                      d="M16.5387 29.7393L14.9275 29.7136C14.6515 29.7093 14.4313 29.482 14.4355 29.206C14.4398 28.93 14.6671 28.7098 14.9432 28.7141L17.5228 28.7552L22.4418 23.8361H15.5295L13.7346 25.7711C13.5462 25.9735 13.2294 25.9849 13.0271 25.7966C12.8247 25.6083 12.8132 25.2915 13.0016 25.0891L14.1638 23.8361H11.5018C11.2247 23.8361 11 23.6115 11 23.3344C11 23.0573 11.2247 22.8326 11.5018 22.8326H14.1295L13.0093 21.6762C12.8167 21.4781 12.8211 21.1613 13.0192 20.9687C13.2172 20.776 13.534 20.7804 13.7267 20.9785L15.5227 22.8326H22.3071L17.54 18.0656L14.9028 18.1646C14.6268 18.1744 14.3951 17.9585 14.3854 17.6825C14.3756 17.4065 14.5915 17.1749 14.8675 17.1651L16.5754 17.101L14.6925 15.2181C14.4966 15.0222 14.4966 14.7045 14.6925 14.5086C14.8884 14.3126 15.2061 14.3126 15.4021 14.5086L17.2606 16.3672L17.2864 14.756C17.2907 14.48 17.518 14.2597 17.794 14.264C18.07 14.2683 18.2902 14.4957 18.2859 14.7716L18.2448 17.3513L23.0042 22.1107V15.1796L21.15 13.3837C20.9519 13.1911 20.9476 12.8742 21.1402 12.6762C21.3328 12.4781 21.6497 12.4737 21.8477 12.6663L23.0042 13.7865V11.5018C23.0042 11.2247 23.2288 11 23.5059 11C23.783 11 24.0077 11.2247 24.0077 11.5018V13.8208L25.2605 12.6585C25.4629 12.4702 25.7797 12.4816 25.9681 12.684C26.1564 12.8864 26.145 13.2032 25.9426 13.3915L24.0077 15.1865V22.2703L29.0479 17.23L29.0068 14.6504C29.0025 14.3744 29.2228 14.1471 29.4987 14.1428C29.7747 14.1385 30.0021 14.3587 30.0063 14.6347L30.032 16.2459L31.6481 14.6298C31.844 14.4339 32.1617 14.4339 32.3577 14.6298C32.5536 14.8258 32.5536 15.1435 32.3577 15.3394L30.7173 16.9797L32.4253 17.0438C32.7013 17.0536 32.9172 17.2853 32.9075 17.5613C32.8977 17.8373 32.666 18.0531 32.39 18.0434L29.7526 17.9444L24.8644 22.8326H31.8204L33.6163 20.9785C33.8089 20.7804 34.1258 20.776 34.3238 20.9687C34.5219 21.1613 34.5263 21.4781 34.3336 21.6762L33.2135 22.8326H35.4982C35.7753 22.8326 36 23.0573 36 23.3344C36 23.6115 35.7753 23.8361 35.4982 23.8361H33.1792L34.3415 25.0891C34.5298 25.2915 34.5184 25.6083 34.316 25.7966C34.1136 25.9849 33.7968 25.9735 33.6084 25.7711L31.8135 23.8361H24.7296L29.77 28.8765L32.3497 28.8353C32.6256 28.831 32.853 29.0513 32.8573 29.3272C32.8616 29.6033 32.6413 29.8306 32.3653 29.8349L30.754 29.8605L32.3701 31.4766C32.5661 31.6726 32.5661 31.9902 32.3701 32.1861C32.1742 32.3821 31.8565 32.3821 31.6606 32.1861L30.0203 30.5458L29.9562 32.2538C29.9464 32.5298 29.7147 32.7457 29.4387 32.7359C29.1627 32.7262 28.9469 32.4945 28.9566 32.2185L29.0557 29.5812L24.0077 24.5332V31.4705L25.9426 33.2654C26.145 33.4538 26.1564 33.7706 25.9681 33.9729C25.7797 34.1753 25.4629 34.1868 25.2605 33.9984L24.0077 32.8362V35.4983C24.0077 35.7754 23.783 36 23.5059 36C23.2288 36 23.0042 35.7754 23.0042 35.4983V32.8705L21.8477 33.9906C21.6497 34.1833 21.3328 34.1789 21.1402 33.9808C20.9476 33.7827 20.9519 33.4659 21.15 33.2732L23.0042 31.4773V24.6929L18.2371 29.4599L18.3362 32.0973C18.3459 32.3732 18.13 32.605 17.8541 32.6147C17.578 32.6244 17.3463 32.4085 17.3366 32.1326L17.2725 30.4246L15.3896 32.3075C15.1937 32.5034 14.876 32.5034 14.68 32.3075C14.4841 32.1115 14.4841 31.7939 14.68 31.5979L16.5387 29.7393Z"
                      fill="#38C0F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2512_3348">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(11 11)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <div>Freeze Account</div>
                  <div>Protect your account in the case of a compromise</div>
                </div>
              </div>

              <div className="profile__modal__inner__subtitle underline">
                Please can you select the reason why you are freezing your
                account?
              </div>

              {questions?.map((question, index) => (
                <div
                  className={`profile__modal__inner__freeze-card ${
                    activeQuestion === question &&
                    "profile__modal__inner__freeze-card-active"
                  }`}
                  onClick={() => setActiveQuestion(question)}
key={index}
                >
                  {question}
                  {activeQuestion === question && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.2197 6.96967L8.75 11.4393L6.78033 9.4697C6.48744 9.1768 6.01256 9.1768 5.71967 9.4697C5.42678 9.7626 5.42678 10.2374 5.71967 10.5303L8.2197 13.0303C8.5126 13.3232 8.9874 13.3232 9.2803 13.0303L14.2803 8.0303C14.5732 7.73744 14.5732 7.26256 14.2803 6.96967C13.9874 6.67678 13.5126 6.67678 13.2197 6.96967Z"
                        fill="#14FF9C"
                      />
                    </svg>
                  )}
                </div>
              ))}

              <button
                className="profile__modal__inner__button"
                onClick={handleFreezeAccount}
              >
                Proceed
              </button>
            </div>
          )}
          {stage === 3 && (
            <form
              className="profile__modal__inner"
              onSubmit={handleFreezeAccount}
            >
              <div className="profile__modal__inner__title">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="22.5" cy="22.5" r="22.5" fill="#F2FAFF" />
                  <g clip-path="url(#clip0_2512_3348)">
                    <path
                      d="M20.7885 26.2695L17.8164 26.1029C17.7414 26.0988 17.6691 26.0731 17.6084 26.0288C17.5476 25.9845 17.501 25.9235 17.4741 25.8533C17.4473 25.7831 17.4413 25.7066 17.457 25.633C17.4727 25.5595 17.5093 25.4921 17.5625 25.4389L17.5619 25.4383L19.5263 23.4739L17.5423 21.2544C17.4923 21.1985 17.4595 21.1293 17.448 21.0551C17.4364 20.981 17.4466 20.9051 17.4772 20.8367C17.5078 20.7682 17.5576 20.71 17.6206 20.6692C17.6835 20.6283 17.7569 20.6066 17.8319 20.6066V20.6049H20.6094L20.7759 17.6329C20.78 17.5579 20.8057 17.4856 20.85 17.4248C20.8944 17.3641 20.9553 17.3175 21.0255 17.2906C21.0957 17.2638 21.1722 17.2578 21.2458 17.2735C21.3193 17.2892 21.3867 17.3258 21.4399 17.379L21.4405 17.3783L23.4049 19.3427L25.6244 17.3588C25.7012 17.29 25.8022 17.2547 25.9051 17.2604C26.008 17.2661 26.1045 17.3124 26.1732 17.3892C26.2371 17.4604 26.2724 17.5527 26.2722 17.6484H26.2739V20.4258L29.2459 20.5924C29.321 20.5965 29.3932 20.6222 29.454 20.6665C29.5147 20.7108 29.5613 20.7717 29.5882 20.842C29.6151 20.9122 29.621 20.9887 29.6053 21.0622C29.5896 21.1357 29.553 21.2032 29.4998 21.2563L29.5004 21.257L27.5361 23.2214L29.5201 25.4409C29.5888 25.5177 29.6242 25.6187 29.6184 25.7216C29.6127 25.8245 29.5664 25.921 29.4896 25.9897C29.4184 26.0536 29.3261 26.0888 29.2304 26.0887V26.0904H26.453L26.2865 29.0623C26.2823 29.1374 26.2565 29.2096 26.2122 29.2704C26.1679 29.3311 26.107 29.3777 26.0368 29.4046C25.9666 29.4314 25.8901 29.4374 25.8166 29.4217C25.743 29.406 25.6756 29.3694 25.6224 29.3163L25.6218 29.3169L23.6574 27.3525L21.4379 29.3365C21.3611 29.4053 21.2601 29.4406 21.1572 29.4349C21.0543 29.4292 20.9578 29.3829 20.8891 29.3061C20.8252 29.2349 20.7899 29.1425 20.7901 29.0469H20.7885V26.2695ZM18.7296 25.3742L21.1787 25.5111C21.2823 25.5111 21.3815 25.5522 21.4547 25.6254C21.5279 25.6986 21.569 25.7979 21.569 25.9014V28.1767L23.389 26.5498L23.3976 26.5409C23.4708 26.4677 23.57 26.4266 23.6735 26.4266C23.777 26.4266 23.8763 26.4677 23.9494 26.5409L25.5577 28.1492L25.6946 25.7001C25.6946 25.5966 25.7358 25.4973 25.8089 25.4241C25.8821 25.3509 25.9814 25.3098 26.0849 25.3098H28.3602L26.7333 23.4898L26.7244 23.4812C26.6512 23.408 26.6101 23.3088 26.6101 23.2053C26.6101 23.1018 26.6512 23.0026 26.7244 22.9294L28.3327 21.321L25.8836 21.1842C25.7801 21.1842 25.6808 21.1431 25.6076 21.0699C25.5344 20.9967 25.4933 20.8974 25.4933 20.7939V18.5186L23.6733 20.1455L23.6647 20.1544C23.5915 20.2275 23.4923 20.2686 23.3888 20.2686C23.2853 20.2686 23.1861 20.2275 23.1129 20.1544L21.5046 18.5461L21.3677 20.9952C21.3677 21.0987 21.3266 21.198 21.2534 21.2712C21.1802 21.3444 21.0809 21.3855 20.9774 21.3855H18.7021L20.329 23.2055L20.3379 23.2141C20.4111 23.2873 20.4522 23.3865 20.4522 23.49C20.4522 23.5935 20.4111 23.6927 20.3379 23.7659L18.7296 25.3742Z"
                      fill="#71D4ED"
                    />
                    <path
                      d="M16.5387 29.7393L14.9275 29.7136C14.6515 29.7093 14.4313 29.482 14.4355 29.206C14.4398 28.93 14.6671 28.7098 14.9432 28.7141L17.5228 28.7552L22.4418 23.8361H15.5295L13.7346 25.7711C13.5462 25.9735 13.2294 25.9849 13.0271 25.7966C12.8247 25.6083 12.8132 25.2915 13.0016 25.0891L14.1638 23.8361H11.5018C11.2247 23.8361 11 23.6115 11 23.3344C11 23.0573 11.2247 22.8326 11.5018 22.8326H14.1295L13.0093 21.6762C12.8167 21.4781 12.8211 21.1613 13.0192 20.9687C13.2172 20.776 13.534 20.7804 13.7267 20.9785L15.5227 22.8326H22.3071L17.54 18.0656L14.9028 18.1646C14.6268 18.1744 14.3951 17.9585 14.3854 17.6825C14.3756 17.4065 14.5915 17.1749 14.8675 17.1651L16.5754 17.101L14.6925 15.2181C14.4966 15.0222 14.4966 14.7045 14.6925 14.5086C14.8884 14.3126 15.2061 14.3126 15.4021 14.5086L17.2606 16.3672L17.2864 14.756C17.2907 14.48 17.518 14.2597 17.794 14.264C18.07 14.2683 18.2902 14.4957 18.2859 14.7716L18.2448 17.3513L23.0042 22.1107V15.1796L21.15 13.3837C20.9519 13.1911 20.9476 12.8742 21.1402 12.6762C21.3328 12.4781 21.6497 12.4737 21.8477 12.6663L23.0042 13.7865V11.5018C23.0042 11.2247 23.2288 11 23.5059 11C23.783 11 24.0077 11.2247 24.0077 11.5018V13.8208L25.2605 12.6585C25.4629 12.4702 25.7797 12.4816 25.9681 12.684C26.1564 12.8864 26.145 13.2032 25.9426 13.3915L24.0077 15.1865V22.2703L29.0479 17.23L29.0068 14.6504C29.0025 14.3744 29.2228 14.1471 29.4987 14.1428C29.7747 14.1385 30.0021 14.3587 30.0063 14.6347L30.032 16.2459L31.6481 14.6298C31.844 14.4339 32.1617 14.4339 32.3577 14.6298C32.5536 14.8258 32.5536 15.1435 32.3577 15.3394L30.7173 16.9797L32.4253 17.0438C32.7013 17.0536 32.9172 17.2853 32.9075 17.5613C32.8977 17.8373 32.666 18.0531 32.39 18.0434L29.7526 17.9444L24.8644 22.8326H31.8204L33.6163 20.9785C33.8089 20.7804 34.1258 20.776 34.3238 20.9687C34.5219 21.1613 34.5263 21.4781 34.3336 21.6762L33.2135 22.8326H35.4982C35.7753 22.8326 36 23.0573 36 23.3344C36 23.6115 35.7753 23.8361 35.4982 23.8361H33.1792L34.3415 25.0891C34.5298 25.2915 34.5184 25.6083 34.316 25.7966C34.1136 25.9849 33.7968 25.9735 33.6084 25.7711L31.8135 23.8361H24.7296L29.77 28.8765L32.3497 28.8353C32.6256 28.831 32.853 29.0513 32.8573 29.3272C32.8616 29.6033 32.6413 29.8306 32.3653 29.8349L30.754 29.8605L32.3701 31.4766C32.5661 31.6726 32.5661 31.9902 32.3701 32.1861C32.1742 32.3821 31.8565 32.3821 31.6606 32.1861L30.0203 30.5458L29.9562 32.2538C29.9464 32.5298 29.7147 32.7457 29.4387 32.7359C29.1627 32.7262 28.9469 32.4945 28.9566 32.2185L29.0557 29.5812L24.0077 24.5332V31.4705L25.9426 33.2654C26.145 33.4538 26.1564 33.7706 25.9681 33.9729C25.7797 34.1753 25.4629 34.1868 25.2605 33.9984L24.0077 32.8362V35.4983C24.0077 35.7754 23.783 36 23.5059 36C23.2288 36 23.0042 35.7754 23.0042 35.4983V32.8705L21.8477 33.9906C21.6497 34.1833 21.3328 34.1789 21.1402 33.9808C20.9476 33.7827 20.9519 33.4659 21.15 33.2732L23.0042 31.4773V24.6929L18.2371 29.4599L18.3362 32.0973C18.3459 32.3732 18.13 32.605 17.8541 32.6147C17.578 32.6244 17.3463 32.4085 17.3366 32.1326L17.2725 30.4246L15.3896 32.3075C15.1937 32.5034 14.876 32.5034 14.68 32.3075C14.4841 32.1115 14.4841 31.7939 14.68 31.5979L16.5387 29.7393Z"
                      fill="#38C0F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2512_3348">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(11 11)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <div>
                    Freeze Account - <span>OTP</span>
                  </div>
                  <div>
                    We just want to be sure this is you ,provide the OTP to your
                    email to complete this step
                  </div>
                </div>
              </div>

              <div className="profile__modal__inner__otp-inputs">
                <input
                  type="text"
                  className="profile__modal__inner__otp-inputs__input"
                  maxLength={1}
                />
                <input
                  type="text"
                  className="profile__modal__inner__otp-inputs__input"
                  maxLength={1}
                />
                <input
                  type="text"
                  className="profile__modal__inner__otp-inputs__input"
                  maxLength={1}
                />
                <input
                  type="text"
                  className="profile__modal__inner__otp-inputs__input"
                  maxLength={1}
                />
              </div>

              <button className="profile__modal__inner__button">Confirm</button>
            </form>
          )}
        </div>
      )}
      {unfreezeOpen && (
        <div className="profile__modal" onClick={handleToggleClose}>
          <div className="profile__modal__inner">
            <div className="profile__modal__inner__title">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="22.5" cy="22.5" r="22.5" fill="#F2FAFF" />
                <g clip-path="url(#clip0_2512_3348)">
                  <path
                    d="M20.7885 26.2695L17.8164 26.1029C17.7414 26.0988 17.6691 26.0731 17.6084 26.0288C17.5476 25.9845 17.501 25.9235 17.4741 25.8533C17.4473 25.7831 17.4413 25.7066 17.457 25.633C17.4727 25.5595 17.5093 25.4921 17.5625 25.4389L17.5619 25.4383L19.5263 23.4739L17.5423 21.2544C17.4923 21.1985 17.4595 21.1293 17.448 21.0551C17.4364 20.981 17.4466 20.9051 17.4772 20.8367C17.5078 20.7682 17.5576 20.71 17.6206 20.6692C17.6835 20.6283 17.7569 20.6066 17.8319 20.6066V20.6049H20.6094L20.7759 17.6329C20.78 17.5579 20.8057 17.4856 20.85 17.4248C20.8944 17.3641 20.9553 17.3175 21.0255 17.2906C21.0957 17.2638 21.1722 17.2578 21.2458 17.2735C21.3193 17.2892 21.3867 17.3258 21.4399 17.379L21.4405 17.3783L23.4049 19.3427L25.6244 17.3588C25.7012 17.29 25.8022 17.2547 25.9051 17.2604C26.008 17.2661 26.1045 17.3124 26.1732 17.3892C26.2371 17.4604 26.2724 17.5527 26.2722 17.6484H26.2739V20.4258L29.2459 20.5924C29.321 20.5965 29.3932 20.6222 29.454 20.6665C29.5147 20.7108 29.5613 20.7717 29.5882 20.842C29.6151 20.9122 29.621 20.9887 29.6053 21.0622C29.5896 21.1357 29.553 21.2032 29.4998 21.2563L29.5004 21.257L27.5361 23.2214L29.5201 25.4409C29.5888 25.5177 29.6242 25.6187 29.6184 25.7216C29.6127 25.8245 29.5664 25.921 29.4896 25.9897C29.4184 26.0536 29.3261 26.0888 29.2304 26.0887V26.0904H26.453L26.2865 29.0623C26.2823 29.1374 26.2565 29.2096 26.2122 29.2704C26.1679 29.3311 26.107 29.3777 26.0368 29.4046C25.9666 29.4314 25.8901 29.4374 25.8166 29.4217C25.743 29.406 25.6756 29.3694 25.6224 29.3163L25.6218 29.3169L23.6574 27.3525L21.4379 29.3365C21.3611 29.4053 21.2601 29.4406 21.1572 29.4349C21.0543 29.4292 20.9578 29.3829 20.8891 29.3061C20.8252 29.2349 20.7899 29.1425 20.7901 29.0469H20.7885V26.2695ZM18.7296 25.3742L21.1787 25.5111C21.2823 25.5111 21.3815 25.5522 21.4547 25.6254C21.5279 25.6986 21.569 25.7979 21.569 25.9014V28.1767L23.389 26.5498L23.3976 26.5409C23.4708 26.4677 23.57 26.4266 23.6735 26.4266C23.777 26.4266 23.8763 26.4677 23.9494 26.5409L25.5577 28.1492L25.6946 25.7001C25.6946 25.5966 25.7358 25.4973 25.8089 25.4241C25.8821 25.3509 25.9814 25.3098 26.0849 25.3098H28.3602L26.7333 23.4898L26.7244 23.4812C26.6512 23.408 26.6101 23.3088 26.6101 23.2053C26.6101 23.1018 26.6512 23.0026 26.7244 22.9294L28.3327 21.321L25.8836 21.1842C25.7801 21.1842 25.6808 21.1431 25.6076 21.0699C25.5344 20.9967 25.4933 20.8974 25.4933 20.7939V18.5186L23.6733 20.1455L23.6647 20.1544C23.5915 20.2275 23.4923 20.2686 23.3888 20.2686C23.2853 20.2686 23.1861 20.2275 23.1129 20.1544L21.5046 18.5461L21.3677 20.9952C21.3677 21.0987 21.3266 21.198 21.2534 21.2712C21.1802 21.3444 21.0809 21.3855 20.9774 21.3855H18.7021L20.329 23.2055L20.3379 23.2141C20.4111 23.2873 20.4522 23.3865 20.4522 23.49C20.4522 23.5935 20.4111 23.6927 20.3379 23.7659L18.7296 25.3742Z"
                    fill="#71D4ED"
                  />
                  <path
                    d="M16.5387 29.7393L14.9275 29.7136C14.6515 29.7093 14.4313 29.482 14.4355 29.206C14.4398 28.93 14.6671 28.7098 14.9432 28.7141L17.5228 28.7552L22.4418 23.8361H15.5295L13.7346 25.7711C13.5462 25.9735 13.2294 25.9849 13.0271 25.7966C12.8247 25.6083 12.8132 25.2915 13.0016 25.0891L14.1638 23.8361H11.5018C11.2247 23.8361 11 23.6115 11 23.3344C11 23.0573 11.2247 22.8326 11.5018 22.8326H14.1295L13.0093 21.6762C12.8167 21.4781 12.8211 21.1613 13.0192 20.9687C13.2172 20.776 13.534 20.7804 13.7267 20.9785L15.5227 22.8326H22.3071L17.54 18.0656L14.9028 18.1646C14.6268 18.1744 14.3951 17.9585 14.3854 17.6825C14.3756 17.4065 14.5915 17.1749 14.8675 17.1651L16.5754 17.101L14.6925 15.2181C14.4966 15.0222 14.4966 14.7045 14.6925 14.5086C14.8884 14.3126 15.2061 14.3126 15.4021 14.5086L17.2606 16.3672L17.2864 14.756C17.2907 14.48 17.518 14.2597 17.794 14.264C18.07 14.2683 18.2902 14.4957 18.2859 14.7716L18.2448 17.3513L23.0042 22.1107V15.1796L21.15 13.3837C20.9519 13.1911 20.9476 12.8742 21.1402 12.6762C21.3328 12.4781 21.6497 12.4737 21.8477 12.6663L23.0042 13.7865V11.5018C23.0042 11.2247 23.2288 11 23.5059 11C23.783 11 24.0077 11.2247 24.0077 11.5018V13.8208L25.2605 12.6585C25.4629 12.4702 25.7797 12.4816 25.9681 12.684C26.1564 12.8864 26.145 13.2032 25.9426 13.3915L24.0077 15.1865V22.2703L29.0479 17.23L29.0068 14.6504C29.0025 14.3744 29.2228 14.1471 29.4987 14.1428C29.7747 14.1385 30.0021 14.3587 30.0063 14.6347L30.032 16.2459L31.6481 14.6298C31.844 14.4339 32.1617 14.4339 32.3577 14.6298C32.5536 14.8258 32.5536 15.1435 32.3577 15.3394L30.7173 16.9797L32.4253 17.0438C32.7013 17.0536 32.9172 17.2853 32.9075 17.5613C32.8977 17.8373 32.666 18.0531 32.39 18.0434L29.7526 17.9444L24.8644 22.8326H31.8204L33.6163 20.9785C33.8089 20.7804 34.1258 20.776 34.3238 20.9687C34.5219 21.1613 34.5263 21.4781 34.3336 21.6762L33.2135 22.8326H35.4982C35.7753 22.8326 36 23.0573 36 23.3344C36 23.6115 35.7753 23.8361 35.4982 23.8361H33.1792L34.3415 25.0891C34.5298 25.2915 34.5184 25.6083 34.316 25.7966C34.1136 25.9849 33.7968 25.9735 33.6084 25.7711L31.8135 23.8361H24.7296L29.77 28.8765L32.3497 28.8353C32.6256 28.831 32.853 29.0513 32.8573 29.3272C32.8616 29.6033 32.6413 29.8306 32.3653 29.8349L30.754 29.8605L32.3701 31.4766C32.5661 31.6726 32.5661 31.9902 32.3701 32.1861C32.1742 32.3821 31.8565 32.3821 31.6606 32.1861L30.0203 30.5458L29.9562 32.2538C29.9464 32.5298 29.7147 32.7457 29.4387 32.7359C29.1627 32.7262 28.9469 32.4945 28.9566 32.2185L29.0557 29.5812L24.0077 24.5332V31.4705L25.9426 33.2654C26.145 33.4538 26.1564 33.7706 25.9681 33.9729C25.7797 34.1753 25.4629 34.1868 25.2605 33.9984L24.0077 32.8362V35.4983C24.0077 35.7754 23.783 36 23.5059 36C23.2288 36 23.0042 35.7754 23.0042 35.4983V32.8705L21.8477 33.9906C21.6497 34.1833 21.3328 34.1789 21.1402 33.9808C20.9476 33.7827 20.9519 33.4659 21.15 33.2732L23.0042 31.4773V24.6929L18.2371 29.4599L18.3362 32.0973C18.3459 32.3732 18.13 32.605 17.8541 32.6147C17.578 32.6244 17.3463 32.4085 17.3366 32.1326L17.2725 30.4246L15.3896 32.3075C15.1937 32.5034 14.876 32.5034 14.68 32.3075C14.4841 32.1115 14.4841 31.7939 14.68 31.5979L16.5387 29.7393Z"
                    fill="#38C0F2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2512_3348">
                    <rect
                      width="25"
                      height="25"
                      fill="white"
                      transform="translate(11 11)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div>
                <div>Unfreeze Account</div>
                <div>Protect your account in the case of a compromise</div>
              </div>
            </div>

            <div className="profile__modal__inner__subtitle">
              A Customer Care Representative will reach out to you
            </div>
            <div className="profile__modal__inner__unfreeze-time">
              <div>Select Time To Call</div>
              <div>
                <span>12</span>
                <span>:</span>
                <span>12 / 01 / 12</span>
                <span>WAT</span>
              </div>
            </div>

            <button
              className="profile__modal__inner__button"
              onClick={() => setUnfreezeOpen(false)}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      <Navigation />
    </div>
  );
}
