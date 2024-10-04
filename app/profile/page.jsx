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
  const [unfreezeOpen, setUnfreezeOpen] = useState(false);
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
        <div className="profile__inner__title">Earn</div>
        <div
          className="profile__inner__group"
          onClick={() => (window.location.href = "/profile/referral")}
        >
          <div>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="25" height="23.7092" fill="url(#pattern0_6886_4500)"/>
<defs>
<pattern id="pattern0_6886_4500" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_6886_4500" transform="scale(0.00271739 0.00286533)"/>
</pattern>
<image id="image0_6886_4500" width="368" height="349" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>


            <div>
              <div className="profile__inner__group__title">
              Referral
              </div>
              <div className="profile__inner__group__subtitle">
              Share a link, get paid
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
        <div className="profile__inner__group"
                 onClick={() => (window.location.href = "/profile/feedback")}
 
        >
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
    
    
        <div className="profile__inner__title">Account</div>
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

        <div className="profile__inner__group"
                  onClick={() => (window.location.href = "/profile/delete-account")}

        >
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
