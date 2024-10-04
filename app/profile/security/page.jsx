"use client"

import Image from "next/image"
import ProfileHeader from "../../components/profile-header"
import Navigation from "../../components/navigation"
import { useEffect, useState } from "react";

export default function Fund() {
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [pinOpen, setPinOpen] = useState(false);
  const [stage, setStage] = useState(1);

  const handleToggleClose = (e) => {
    
    if (e.target.classList.contains("personal-settings__modal")) {
      setPasswordOpen(false);
      setPinOpen(false);
    }
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    if(stage === 1 || stage === 4) setPasswordOpen(false)
    if(stage === 2) setStage(3)
    if(stage === 3) setStage(4)
  }
  const handleSubmitPin = (e) => {
    e.preventDefault();
    if(stage === 1) setStage(2)
    if(stage === 2 || stage === 5) setPinOpen(false)
    if(stage === 3) setStage(4)
    if(stage === 4) setStage(5)
  }

  useEffect(() => {
    const otpInputs = document.querySelectorAll(".personal-settings__modal__inner__otp-inputs__input");

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
  },[pinOpen, stage]);
  
    return (
      <div className="personal-settings">
        <ProfileHeader />
        <div className="personal-settings__nav">
          <svg
            className="pointer"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => (window.location.href = "/profile")}
          >
            <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
            <path
              d="M16.7722 9.2278C17.0759 9.53155 17.0759 10.024 16.7722 10.3278L11.8777 15.2222L16.7722 20.1167C17.0759 20.4205 17.0759 20.9129 16.7722 21.2167C16.4685 21.5204 15.976 21.5204 15.6723 21.2167L10.2278 15.7722C9.92407 15.4685 9.92407 14.976 10.2278 14.6723L15.6723 9.2278C15.976 8.92407 16.4685 8.92407 16.7722 9.2278Z"
              fill="#212121"
            />
          </svg>
  
          <div>Security</div>
        </div>

        <div className="personal-settings__group"
        onClick={() => setPasswordOpen(true)}
        >
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#F5F5F5"/>
<path d="M17.333 11.4993V12.0827H17.7705C18.8175 12.0827 19.6663 12.9315 19.6663 13.9785V15.3022C19.3382 15.1061 19.0719 14.8698 18.9022 14.7002C18.523 14.3213 17.8872 14.3213 17.508 14.7002C17.1988 15.0092 16.5688 15.5397 15.828 15.6447C15.7917 15.6499 15.7551 15.6575 15.7187 15.6673C15.5607 15.4399 15.2976 15.291 14.9997 15.291C14.5164 15.291 14.1247 15.6828 14.1247 16.166C14.1247 16.6492 14.5164 17.041 14.9997 17.041V18.2215C14.9997 18.967 15.2053 19.6538 15.602 20.2493H12.2288C11.1818 20.2493 10.333 19.4005 10.333 18.3535V13.9785C10.333 12.9315 11.1818 12.0827 12.2288 12.0827H12.6663V11.4993C12.6663 10.2107 13.711 9.16602 14.9997 9.16602C16.2883 9.16602 17.333 10.2107 17.333 11.4993ZM13.5413 11.4993V12.0827H16.458V11.4993C16.458 10.6939 15.8051 10.041 14.9997 10.041C14.1943 10.041 13.5413 10.6939 13.5413 11.4993ZM18.4936 15.1128C18.8743 15.4925 19.606 16.0963 20.5058 16.2201C20.6852 16.2449 20.833 16.3865 20.833 16.5637V18.2195C20.833 20.4455 18.745 21.2534 18.2936 21.4021C18.2371 21.4207 18.1794 21.4207 18.1228 21.4021C17.6714 21.2534 15.5832 20.4455 15.5832 18.2195L15.583 16.5637C15.583 16.3865 15.7308 16.2449 15.9103 16.2201C16.8099 16.0962 17.5415 15.4925 17.9223 15.1128C18.0741 14.9615 18.3419 14.9615 18.4936 15.1128Z" fill="#212121"/>
</svg>


<div>
    <div className="personal-settings__group__title">Password</div>
    <div className="personal-settings__group__subtitle">Update your password</div>
</div>
    </div>
    <div className="personal-settings__group"
        onClick={() => setPinOpen(true)}
        >
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#F5F5F5"/>
<g clip-path="url(#clip0_2512_3348)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.85494 15.8666H20.1451C20.6152 15.8666 21 16.2527 21 16.7215V20.1203C21 20.5891 20.6139 20.9752 20.1451 20.9752H9.85494C9.38608 20.9752 9 20.5904 9 20.1203V16.7215C9 16.2514 9.38481 15.8666 9.85494 15.8666ZM12.4803 10.7033H12.7587V10.3233C12.7587 9.68785 13.0091 9.10835 13.4127 8.68785C13.8195 8.26354 14.3813 8 15 8C15.6187 8 16.181 8.26329 16.5876 8.68785C16.9914 9.10835 17.2418 9.68734 17.2418 10.3233V10.7033H17.52C17.7213 10.7033 17.8858 10.8681 17.8858 11.0694V14.6858C17.8858 14.8868 17.7213 15.0514 17.52 15.0514H12.4803C12.2787 15.0514 12.1147 14.8868 12.1147 14.6858V11.0694C12.1142 10.8681 12.2787 10.7033 12.4803 10.7033ZM14.7101 13.042L14.3294 14.0392H15.6704L15.3177 13.0278C15.5415 12.9129 15.6947 12.6797 15.6947 12.4104C15.6947 12.0266 15.3838 11.7159 14.9997 11.7159C14.6162 11.7159 14.3053 12.0266 14.3053 12.4104C14.3053 12.6906 14.4711 12.9319 14.7101 13.042ZM13.4509 10.7033H16.5491V10.3233C16.5491 9.87139 16.3729 9.46203 16.0896 9.16633C15.8094 8.87418 15.4238 8.69241 15 8.69241C14.5765 8.69241 14.1904 8.87418 13.9104 9.16633C13.6268 9.46203 13.4509 9.87139 13.4509 10.3233V10.7033ZM17.9929 17.5299C17.9929 17.3742 18.119 17.2478 18.2749 17.2478C18.4306 17.2478 18.5567 17.3742 18.5567 17.5299V17.8944L18.8592 17.6922C18.9881 17.6061 19.1628 17.6403 19.2491 17.7694C19.3357 17.8982 19.301 18.0729 19.1722 18.1592L18.7818 18.42L19.1724 18.6797C19.3018 18.7653 19.3375 18.9403 19.2516 19.0696C19.1661 19.1992 18.9911 19.2344 18.8618 19.1489L18.5567 18.9463V19.3122C18.5567 19.4678 18.4306 19.5942 18.2749 19.5942C18.119 19.5942 17.9929 19.4678 17.9929 19.3122V18.9476L17.6906 19.1499C17.5615 19.2359 17.3871 19.2015 17.3005 19.0727C17.2142 18.9438 17.2486 18.7691 17.3777 18.6825L17.7678 18.4218L17.3775 18.1623C17.2478 18.0767 17.2124 17.9018 17.2982 17.7724C17.3838 17.6428 17.5585 17.6073 17.6878 17.6929L17.9929 17.8957V17.5299ZM11.4433 17.5299C11.4433 17.3742 11.5694 17.2478 11.7251 17.2478C11.8808 17.2478 12.0071 17.3742 12.0071 17.5299V17.8944L12.3094 17.6922C12.4385 17.6061 12.6129 17.6403 12.6995 17.7694C12.7858 17.8982 12.7514 18.0729 12.6223 18.1592L12.2322 18.42L12.6228 18.6797C12.7522 18.7653 12.7876 18.9403 12.7018 19.0696C12.6162 19.1992 12.4415 19.2344 12.3119 19.1489L12.0071 18.9463V19.3122C12.0071 19.4678 11.8808 19.5942 11.7251 19.5942C11.5694 19.5942 11.4433 19.4678 11.4433 19.3122V18.9476L11.1408 19.1499C11.0119 19.2359 10.8372 19.2015 10.7509 19.0727C10.6643 18.9438 10.699 18.7691 10.8281 18.6825L11.2182 18.4218L10.8276 18.1623C10.6982 18.0767 10.6628 17.9018 10.7486 17.7724C10.8342 17.6428 11.0089 17.6073 11.1382 17.6929L11.4433 17.8957V17.5299ZM14.718 17.5299C14.718 17.3742 14.8443 17.2478 15 17.2478C15.1557 17.2478 15.282 17.3742 15.282 17.5299V17.8944L15.5843 17.6922C15.7132 17.6061 15.8878 17.6403 15.9744 17.7694C16.0608 17.8982 16.0261 18.0729 15.8972 18.1592L15.5071 18.42L15.8975 18.6797C16.0271 18.7653 16.0625 18.9403 15.9767 19.0696C15.8911 19.1992 15.7162 19.2344 15.5868 19.1489L15.282 18.9463V19.3122C15.282 19.4678 15.1557 19.5942 15 19.5942C14.8443 19.5942 14.718 19.4678 14.718 19.3122V18.9476L14.4157 19.1499C14.2868 19.2359 14.1122 19.2015 14.0258 19.0727C13.9392 18.9438 13.9739 18.7691 14.1028 18.6825L14.4932 18.4218L14.1025 18.1623C13.9732 18.0767 13.9375 17.9018 14.0233 17.7724C14.1089 17.6428 14.2838 17.6073 14.4132 17.6929L14.718 17.8957V17.5299Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2512_3348">
<rect width="12" height="12.9752" fill="white" transform="translate(9 8)"/>
</clipPath>
</defs>
</svg>


<div>
    <div className="personal-settings__group__title">Pin</div>
    <div className="personal-settings__group__subtitle">Update your transaction pin</div>
</div>
    </div>
   
   
    {passwordOpen && (
        <div className="personal-settings__modal" onClick={handleToggleClose}>
          {stage === 1 && <form className="personal-settings__modal__inner"
          onSubmit={handleSubmitPassword}
          >
            <div className="personal-settings__modal__inner__title">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="22.5" cy="22.5" r="22.5" fill="#E4DEFB"/>
<path d="M25.6667 17.5556V18.4444H26.3333C27.9288 18.4444 29.2222 19.7378 29.2222 21.3333V23.3503C28.7221 23.0516 28.3164 22.6915 28.0578 22.4331C27.48 21.8556 26.5111 21.8556 25.9333 22.4331C25.4622 22.9039 24.5022 23.7124 23.3733 23.8723C23.318 23.8803 23.2622 23.8918 23.2068 23.9067C22.966 23.5602 22.5651 23.3333 22.1111 23.3333C21.3748 23.3333 20.7778 23.9303 20.7778 24.6667C20.7778 25.403 21.3748 26 22.1111 26V27.7988C22.1111 28.9348 22.4244 29.9813 23.029 30.8889H17.8889C16.2934 30.8889 15 29.5955 15 28V21.3333C15 19.7378 16.2934 18.4444 17.8889 18.4444H18.5556V17.5556C18.5556 15.5919 20.1474 14 22.1111 14C24.0748 14 25.6667 15.5919 25.6667 17.5556ZM19.8889 17.5556V18.4444H24.3333V17.5556C24.3333 16.3283 23.3384 15.3333 22.1111 15.3333C20.8838 15.3333 19.8889 16.3283 19.8889 17.5556ZM27.4352 23.0618C28.0154 23.6404 29.1302 24.5604 30.5013 24.7492C30.7748 24.7868 31 25.0026 31 25.2726V27.7958C31 31.1878 27.8183 32.4188 27.1304 32.6454C27.0443 32.6738 26.9564 32.6738 26.8702 32.6454C26.1823 32.4189 23.0003 31.1878 23.0003 27.7958L23 25.2727C23 25.0027 23.2252 24.7868 23.4987 24.7492C24.8695 24.5604 25.9844 23.6404 26.5647 23.0618C26.7959 22.8312 27.204 22.8313 27.4352 23.0618Z" fill="#4440FF"/>
</svg>

              <div>
                <div><span>Password</span></div>
                <div>Update your password by providing the old password, or using the forgot password option</div>
              </div>
            </div>

            <input type="password" className="personal-settings__modal__inner__input" placeholder="Enter old Password" required />
            <input type="password" className="personal-settings__modal__inner__input" placeholder="Enter new Password" required />
            <input type="password" className="personal-settings__modal__inner__input" placeholder="Confirm new Password" required />
            <div className="personal-settings__modal__inner__forgot"
            onClick={() => setStage(2)}
            >
Forgot Old Pin?
</div>
            <button className="personal-settings__modal__inner__button">
              Save Theme
            </button>
          </form>}
          {stage === 2 && <form className="personal-settings__modal__inner"
          onSubmit={handleSubmitPassword}
          >
            <div className="personal-settings__modal__inner__title">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="22.5" cy="22.5" r="22.5" fill="#E4DEFB"/>
<path d="M25.6667 17.5556V18.4444H26.3333C27.9288 18.4444 29.2222 19.7378 29.2222 21.3333V23.3503C28.7221 23.0516 28.3164 22.6915 28.0578 22.4331C27.48 21.8556 26.5111 21.8556 25.9333 22.4331C25.4622 22.9039 24.5022 23.7124 23.3733 23.8723C23.318 23.8803 23.2622 23.8918 23.2068 23.9067C22.966 23.5602 22.5651 23.3333 22.1111 23.3333C21.3748 23.3333 20.7778 23.9303 20.7778 24.6667C20.7778 25.403 21.3748 26 22.1111 26V27.7988C22.1111 28.9348 22.4244 29.9813 23.029 30.8889H17.8889C16.2934 30.8889 15 29.5955 15 28V21.3333C15 19.7378 16.2934 18.4444 17.8889 18.4444H18.5556V17.5556C18.5556 15.5919 20.1474 14 22.1111 14C24.0748 14 25.6667 15.5919 25.6667 17.5556ZM19.8889 17.5556V18.4444H24.3333V17.5556C24.3333 16.3283 23.3384 15.3333 22.1111 15.3333C20.8838 15.3333 19.8889 16.3283 19.8889 17.5556ZM27.4352 23.0618C28.0154 23.6404 29.1302 24.5604 30.5013 24.7492C30.7748 24.7868 31 25.0026 31 25.2726V27.7958C31 31.1878 27.8183 32.4188 27.1304 32.6454C27.0443 32.6738 26.9564 32.6738 26.8702 32.6454C26.1823 32.4189 23.0003 31.1878 23.0003 27.7958L23 25.2727C23 25.0027 23.2252 24.7868 23.4987 24.7492C24.8695 24.5604 25.9844 23.6404 26.5647 23.0618C26.7959 22.8312 27.204 22.8313 27.4352 23.0618Z" fill="#4440FF"/>
</svg>

              <div>
                <div>Forgot <span>Password</span></div>
                <div>Please provide your email below, you will be sent an OTP to proceed with the update</div>
              </div>
            </div>

            <input type="text" className="personal-settings__modal__inner__input" placeholder="Email" required />
            <button className="personal-settings__modal__inner__button">
            Send OTP
            </button>
          </form>}
          {stage === 3 && <form className="personal-settings__modal__inner"
          onSubmit={handleSubmitPassword}
          >
            <div className="personal-settings__modal__inner__title">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="22.5" cy="22.5" r="22.5" fill="#E4DEFB"/>
<path d="M25.6667 17.5556V18.4444H26.3333C27.9288 18.4444 29.2222 19.7378 29.2222 21.3333V23.3503C28.7221 23.0516 28.3164 22.6915 28.0578 22.4331C27.48 21.8556 26.5111 21.8556 25.9333 22.4331C25.4622 22.9039 24.5022 23.7124 23.3733 23.8723C23.318 23.8803 23.2622 23.8918 23.2068 23.9067C22.966 23.5602 22.5651 23.3333 22.1111 23.3333C21.3748 23.3333 20.7778 23.9303 20.7778 24.6667C20.7778 25.403 21.3748 26 22.1111 26V27.7988C22.1111 28.9348 22.4244 29.9813 23.029 30.8889H17.8889C16.2934 30.8889 15 29.5955 15 28V21.3333C15 19.7378 16.2934 18.4444 17.8889 18.4444H18.5556V17.5556C18.5556 15.5919 20.1474 14 22.1111 14C24.0748 14 25.6667 15.5919 25.6667 17.5556ZM19.8889 17.5556V18.4444H24.3333V17.5556C24.3333 16.3283 23.3384 15.3333 22.1111 15.3333C20.8838 15.3333 19.8889 16.3283 19.8889 17.5556ZM27.4352 23.0618C28.0154 23.6404 29.1302 24.5604 30.5013 24.7492C30.7748 24.7868 31 25.0026 31 25.2726V27.7958C31 31.1878 27.8183 32.4188 27.1304 32.6454C27.0443 32.6738 26.9564 32.6738 26.8702 32.6454C26.1823 32.4189 23.0003 31.1878 23.0003 27.7958L23 25.2727C23 25.0027 23.2252 24.7868 23.4987 24.7492C24.8695 24.5604 25.9844 23.6404 26.5647 23.0618C26.7959 22.8312 27.204 22.8313 27.4352 23.0618Z" fill="#4440FF"/>
</svg>

              <div>
                <div>Enter <span>OTP</span></div>
                <div>Provide the OTP sent to your email mu****ak@gmail.com</div>
              </div>
            </div>
            <div className="personal-settings__modal__inner__otp-inputs">
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
            </div>



            <button className="personal-settings__modal__inner__button">
            Confirm OTP
            </button>
          </form>}

          {stage === 4 && <form className="personal-settings__modal__inner"
          onSubmit={handleSubmitPassword}
          >
            <div className="personal-settings__modal__inner__title">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="22.5" cy="22.5" r="22.5" fill="#E4DEFB"/>
<path d="M25.6667 17.5556V18.4444H26.3333C27.9288 18.4444 29.2222 19.7378 29.2222 21.3333V23.3503C28.7221 23.0516 28.3164 22.6915 28.0578 22.4331C27.48 21.8556 26.5111 21.8556 25.9333 22.4331C25.4622 22.9039 24.5022 23.7124 23.3733 23.8723C23.318 23.8803 23.2622 23.8918 23.2068 23.9067C22.966 23.5602 22.5651 23.3333 22.1111 23.3333C21.3748 23.3333 20.7778 23.9303 20.7778 24.6667C20.7778 25.403 21.3748 26 22.1111 26V27.7988C22.1111 28.9348 22.4244 29.9813 23.029 30.8889H17.8889C16.2934 30.8889 15 29.5955 15 28V21.3333C15 19.7378 16.2934 18.4444 17.8889 18.4444H18.5556V17.5556C18.5556 15.5919 20.1474 14 22.1111 14C24.0748 14 25.6667 15.5919 25.6667 17.5556ZM19.8889 17.5556V18.4444H24.3333V17.5556C24.3333 16.3283 23.3384 15.3333 22.1111 15.3333C20.8838 15.3333 19.8889 16.3283 19.8889 17.5556ZM27.4352 23.0618C28.0154 23.6404 29.1302 24.5604 30.5013 24.7492C30.7748 24.7868 31 25.0026 31 25.2726V27.7958C31 31.1878 27.8183 32.4188 27.1304 32.6454C27.0443 32.6738 26.9564 32.6738 26.8702 32.6454C26.1823 32.4189 23.0003 31.1878 23.0003 27.7958L23 25.2727C23 25.0027 23.2252 24.7868 23.4987 24.7492C24.8695 24.5604 25.9844 23.6404 26.5647 23.0618C26.7959 22.8312 27.204 22.8313 27.4352 23.0618Z" fill="#4440FF"/>
</svg>

              <div>
                <div><span>Enter New Password</span></div>
                <div>Proceed to updating your password</div>
              </div>
            </div>

            <input type="password" className="personal-settings__modal__inner__input" placeholder="Enter new Password" required />
            <input type="password" className="personal-settings__modal__inner__input" placeholder="Confirm new Password" required />
            <button className="personal-settings__modal__inner__button">
            Update Password
            </button>
          </form>}
        </div>
      )}
    {pinOpen && (
        <div className="personal-settings__modal" onClick={handleToggleClose}>
          {stage === 1 && <form className="personal-settings__modal__inner"
          onSubmit={handleSubmitPin}
          >
            <div className="personal-settings__modal__inner__title">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="22.5" cy="22.5" r="22.5" fill="#E4DEFB"/>
<path d="M25.6667 17.5556V18.4444H26.3333C27.9288 18.4444 29.2222 19.7378 29.2222 21.3333V23.3503C28.7221 23.0516 28.3164 22.6915 28.0578 22.4331C27.48 21.8556 26.5111 21.8556 25.9333 22.4331C25.4622 22.9039 24.5022 23.7124 23.3733 23.8723C23.318 23.8803 23.2622 23.8918 23.2068 23.9067C22.966 23.5602 22.5651 23.3333 22.1111 23.3333C21.3748 23.3333 20.7778 23.9303 20.7778 24.6667C20.7778 25.403 21.3748 26 22.1111 26V27.7988C22.1111 28.9348 22.4244 29.9813 23.029 30.8889H17.8889C16.2934 30.8889 15 29.5955 15 28V21.3333C15 19.7378 16.2934 18.4444 17.8889 18.4444H18.5556V17.5556C18.5556 15.5919 20.1474 14 22.1111 14C24.0748 14 25.6667 15.5919 25.6667 17.5556ZM19.8889 17.5556V18.4444H24.3333V17.5556C24.3333 16.3283 23.3384 15.3333 22.1111 15.3333C20.8838 15.3333 19.8889 16.3283 19.8889 17.5556ZM27.4352 23.0618C28.0154 23.6404 29.1302 24.5604 30.5013 24.7492C30.7748 24.7868 31 25.0026 31 25.2726V27.7958C31 31.1878 27.8183 32.4188 27.1304 32.6454C27.0443 32.6738 26.9564 32.6738 26.8702 32.6454C26.1823 32.4189 23.0003 31.1878 23.0003 27.7958L23 25.2727C23 25.0027 23.2252 24.7868 23.4987 24.7492C24.8695 24.5604 25.9844 23.6404 26.5647 23.0618C26.7959 22.8312 27.204 22.8313 27.4352 23.0618Z" fill="#4440FF"/>
</svg>

              <div>
                <div><span>Enter Old Pin</span></div>
                <div>Update your Pin by providing the old Pin, or using the forgot Pin option</div>
              </div>
            </div>
            <label className="personal-settings__modal__inner__label" htmlFor="">Old Pin</label>
            <div className="personal-settings__modal__inner__otp-inputs">
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
            </div>

<div className="personal-settings__modal__inner__forgot"
onClick={() => setStage(3)}
>
Forgot Old Pin?
</div>

            <button className="personal-settings__modal__inner__button">
            Send OTP
            </button>
          </form>}
          {stage === 2 && <form className="personal-settings__modal__inner"
          onSubmit={handleSubmitPin}
          >
            <div className="personal-settings__modal__inner__title">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="22.5" cy="22.5" r="22.5" fill="#E4DEFB"/>
<path d="M25.6667 17.5556V18.4444H26.3333C27.9288 18.4444 29.2222 19.7378 29.2222 21.3333V23.3503C28.7221 23.0516 28.3164 22.6915 28.0578 22.4331C27.48 21.8556 26.5111 21.8556 25.9333 22.4331C25.4622 22.9039 24.5022 23.7124 23.3733 23.8723C23.318 23.8803 23.2622 23.8918 23.2068 23.9067C22.966 23.5602 22.5651 23.3333 22.1111 23.3333C21.3748 23.3333 20.7778 23.9303 20.7778 24.6667C20.7778 25.403 21.3748 26 22.1111 26V27.7988C22.1111 28.9348 22.4244 29.9813 23.029 30.8889H17.8889C16.2934 30.8889 15 29.5955 15 28V21.3333C15 19.7378 16.2934 18.4444 17.8889 18.4444H18.5556V17.5556C18.5556 15.5919 20.1474 14 22.1111 14C24.0748 14 25.6667 15.5919 25.6667 17.5556ZM19.8889 17.5556V18.4444H24.3333V17.5556C24.3333 16.3283 23.3384 15.3333 22.1111 15.3333C20.8838 15.3333 19.8889 16.3283 19.8889 17.5556ZM27.4352 23.0618C28.0154 23.6404 29.1302 24.5604 30.5013 24.7492C30.7748 24.7868 31 25.0026 31 25.2726V27.7958C31 31.1878 27.8183 32.4188 27.1304 32.6454C27.0443 32.6738 26.9564 32.6738 26.8702 32.6454C26.1823 32.4189 23.0003 31.1878 23.0003 27.7958L23 25.2727C23 25.0027 23.2252 24.7868 23.4987 24.7492C24.8695 24.5604 25.9844 23.6404 26.5647 23.0618C26.7959 22.8312 27.204 22.8313 27.4352 23.0618Z" fill="#4440FF"/>
</svg>

              <div>
                <div><span>Enter Old Pin</span></div>
                <div>Update your Pin by providing the old Pin, or using the forgot Pin option</div>
              </div>
            </div>
            <label className="personal-settings__modal__inner__label" htmlFor="">New Pin</label>
            <div className="personal-settings__modal__inner__otp-inputs personal-settings__modal__inner__otp-inputs-mb-low">
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
            </div>
            <label className="personal-settings__modal__inner__label" htmlFor="">Confirm Pin</label>
            <div className="personal-settings__modal__inner__otp-inputs">
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
            </div>

<div className="personal-settings__modal__inner__forgot"
onClick={() => setStage(3)}
>
Forgot Old Pin?
</div>

            <button className="personal-settings__modal__inner__button">
            Send OTP
            </button>
          </form>}
          {stage === 3 && <form className="personal-settings__modal__inner"
          onSubmit={handleSubmitPin}
          >
            <div className="personal-settings__modal__inner__title">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="22.5" cy="22.5" r="22.5" fill="#E4DEFB"/>
<path d="M25.6667 17.5556V18.4444H26.3333C27.9288 18.4444 29.2222 19.7378 29.2222 21.3333V23.3503C28.7221 23.0516 28.3164 22.6915 28.0578 22.4331C27.48 21.8556 26.5111 21.8556 25.9333 22.4331C25.4622 22.9039 24.5022 23.7124 23.3733 23.8723C23.318 23.8803 23.2622 23.8918 23.2068 23.9067C22.966 23.5602 22.5651 23.3333 22.1111 23.3333C21.3748 23.3333 20.7778 23.9303 20.7778 24.6667C20.7778 25.403 21.3748 26 22.1111 26V27.7988C22.1111 28.9348 22.4244 29.9813 23.029 30.8889H17.8889C16.2934 30.8889 15 29.5955 15 28V21.3333C15 19.7378 16.2934 18.4444 17.8889 18.4444H18.5556V17.5556C18.5556 15.5919 20.1474 14 22.1111 14C24.0748 14 25.6667 15.5919 25.6667 17.5556ZM19.8889 17.5556V18.4444H24.3333V17.5556C24.3333 16.3283 23.3384 15.3333 22.1111 15.3333C20.8838 15.3333 19.8889 16.3283 19.8889 17.5556ZM27.4352 23.0618C28.0154 23.6404 29.1302 24.5604 30.5013 24.7492C30.7748 24.7868 31 25.0026 31 25.2726V27.7958C31 31.1878 27.8183 32.4188 27.1304 32.6454C27.0443 32.6738 26.9564 32.6738 26.8702 32.6454C26.1823 32.4189 23.0003 31.1878 23.0003 27.7958L23 25.2727C23 25.0027 23.2252 24.7868 23.4987 24.7492C24.8695 24.5604 25.9844 23.6404 26.5647 23.0618C26.7959 22.8312 27.204 22.8313 27.4352 23.0618Z" fill="#4440FF"/>
</svg>

              <div>
                <div>Forgot <span>Pin</span></div>
                <div>Please provide your email below, you will be sent an OTP to proceed with the update</div>
              </div>
            </div>
          
           
         <input type="text" className="personal-settings__modal__inner__input" 
         placeholder="Email" required/>

            <button className="personal-settings__modal__inner__button">
            Send OTP
            </button>
          </form>}

          {stage === 4 && <form className="personal-settings__modal__inner"
          onSubmit={handleSubmitPin}
          >
            <div className="personal-settings__modal__inner__title">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="22.5" cy="22.5" r="22.5" fill="#E4DEFB"/>
<path d="M25.6667 17.5556V18.4444H26.3333C27.9288 18.4444 29.2222 19.7378 29.2222 21.3333V23.3503C28.7221 23.0516 28.3164 22.6915 28.0578 22.4331C27.48 21.8556 26.5111 21.8556 25.9333 22.4331C25.4622 22.9039 24.5022 23.7124 23.3733 23.8723C23.318 23.8803 23.2622 23.8918 23.2068 23.9067C22.966 23.5602 22.5651 23.3333 22.1111 23.3333C21.3748 23.3333 20.7778 23.9303 20.7778 24.6667C20.7778 25.403 21.3748 26 22.1111 26V27.7988C22.1111 28.9348 22.4244 29.9813 23.029 30.8889H17.8889C16.2934 30.8889 15 29.5955 15 28V21.3333C15 19.7378 16.2934 18.4444 17.8889 18.4444H18.5556V17.5556C18.5556 15.5919 20.1474 14 22.1111 14C24.0748 14 25.6667 15.5919 25.6667 17.5556ZM19.8889 17.5556V18.4444H24.3333V17.5556C24.3333 16.3283 23.3384 15.3333 22.1111 15.3333C20.8838 15.3333 19.8889 16.3283 19.8889 17.5556ZM27.4352 23.0618C28.0154 23.6404 29.1302 24.5604 30.5013 24.7492C30.7748 24.7868 31 25.0026 31 25.2726V27.7958C31 31.1878 27.8183 32.4188 27.1304 32.6454C27.0443 32.6738 26.9564 32.6738 26.8702 32.6454C26.1823 32.4189 23.0003 31.1878 23.0003 27.7958L23 25.2727C23 25.0027 23.2252 24.7868 23.4987 24.7492C24.8695 24.5604 25.9844 23.6404 26.5647 23.0618C26.7959 22.8312 27.204 22.8313 27.4352 23.0618Z" fill="#4440FF"/>
</svg>

              <div>
                <div>Enter <span>OTP</span></div>
                <div>Provide the OTP sent to your email mu****ak@gmail.com</div>
              </div>
            </div>
          
            <div className="personal-settings__modal__inner__otp-inputs personal-settings__modal__inner__otp-inputs-mb-low">
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
            </div>
           



            <button className="personal-settings__modal__inner__button">
            Confirm OTP
            </button>
          </form>}

          {stage === 5 && <form className="personal-settings__modal__inner"
          onSubmit={handleSubmitPin}
          >
            <div className="personal-settings__modal__inner__title">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="22.5" cy="22.5" r="22.5" fill="#E4DEFB"/>
<path d="M25.6667 17.5556V18.4444H26.3333C27.9288 18.4444 29.2222 19.7378 29.2222 21.3333V23.3503C28.7221 23.0516 28.3164 22.6915 28.0578 22.4331C27.48 21.8556 26.5111 21.8556 25.9333 22.4331C25.4622 22.9039 24.5022 23.7124 23.3733 23.8723C23.318 23.8803 23.2622 23.8918 23.2068 23.9067C22.966 23.5602 22.5651 23.3333 22.1111 23.3333C21.3748 23.3333 20.7778 23.9303 20.7778 24.6667C20.7778 25.403 21.3748 26 22.1111 26V27.7988C22.1111 28.9348 22.4244 29.9813 23.029 30.8889H17.8889C16.2934 30.8889 15 29.5955 15 28V21.3333C15 19.7378 16.2934 18.4444 17.8889 18.4444H18.5556V17.5556C18.5556 15.5919 20.1474 14 22.1111 14C24.0748 14 25.6667 15.5919 25.6667 17.5556ZM19.8889 17.5556V18.4444H24.3333V17.5556C24.3333 16.3283 23.3384 15.3333 22.1111 15.3333C20.8838 15.3333 19.8889 16.3283 19.8889 17.5556ZM27.4352 23.0618C28.0154 23.6404 29.1302 24.5604 30.5013 24.7492C30.7748 24.7868 31 25.0026 31 25.2726V27.7958C31 31.1878 27.8183 32.4188 27.1304 32.6454C27.0443 32.6738 26.9564 32.6738 26.8702 32.6454C26.1823 32.4189 23.0003 31.1878 23.0003 27.7958L23 25.2727C23 25.0027 23.2252 24.7868 23.4987 24.7492C24.8695 24.5604 25.9844 23.6404 26.5647 23.0618C26.7959 22.8312 27.204 22.8313 27.4352 23.0618Z" fill="#4440FF"/>
</svg>

              <div>
                <div><span>Enter New Pin</span></div>
                <div>Proceed to updating your pin</div>
              </div>
            </div>
            <label className="personal-settings__modal__inner__label" htmlFor="">New Pin</label>
            <div className="personal-settings__modal__inner__otp-inputs personal-settings__modal__inner__otp-inputs-mb-low">
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
            </div>
            <label className="personal-settings__modal__inner__label" htmlFor="">Confirm Pin</label>
            <div className="personal-settings__modal__inner__otp-inputs">
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
              <input type="text" className="personal-settings__modal__inner__otp-inputs__input" maxLength={1} required />
            </div>

            <button className="personal-settings__modal__inner__button">
            Update Pin
            </button>
          </form>}
      
        </div>
      )}
        <Navigation />
        </div>
    )
}