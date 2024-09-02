"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Register() {
    const [active, setActive] = useState(false)
    const [stage, setStage] = useState(1)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault();
      setStage(stage + 1)
    }
    const handleBack = (e) => {
      e.preventDefault();
      if(stage !== 1){
        setStage(stage - 1)
      }
    }

    useEffect(() => {
      const otpInputs = document.querySelectorAll(".register__card2__card__otp-group__otp");
  
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
  return (
    <div className="register">
      <div className="register__card1">
        <div className="register__card1__slide">
          <div className="register__card1__slide__title">
            "Secure Banking, Anytime, Anywhere"
          </div>
          <div className="register__card1__slide__subtitle">
            Bank with Confidence, Wherever You Are
          </div>

          <div className="register__card1__slide__dots">
            <div className="register__card1__slide__dots__dot-active">

            </div>
            <div></div>
            <div></div>
          </div>

          <div className="register__card1__slide__navigation">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="19.5" fill="black" fill-opacity="0.19" stroke="#FFF5F5"/>
<path d="M22.5 14L16.5 20L22.5 26" stroke="white" stroke-width="1.5" stroke-linecap="square"/>
</svg>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="19.5" transform="rotate(-180 20 20)" fill="black" fill-opacity="0.19" stroke="#FFF5F5"/>
<path d="M17.5 26L23.5 20L17.5 14" stroke="white" stroke-width="1.5" stroke-linecap="square"/>
</svg>

          </div>
        </div>
      </div>
      <div className="register__card2">
      <div className="register__card2__card">
      <div className="register__card2__card__back"
      onClick={handleBack}
      >
      <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2L2 8L8 14" stroke="#393939" stroke-width="2" stroke-linecap="square"/>
</svg>

        </div>

        {stage === 1 &&

        <>
        <div className="register__card2__card__title">
        Sign in today
        </div>
      <div className="register__card2__card__subtitle">
      Let’s log you in today
        </div>
        

        <label htmlFor="">Email or phone</label>
        <input type="email" placeholder="Enter your email or phone" />
        <div className="space"></div>
        <label htmlFor="">Password</label>
        <input type="password" placeholder="enter your password" />
    
        </>}

        <button
        onClick={handleSubmit}
        >{loading ? "Loading..." : "Proceed"}

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.91083 4.4107C7.23626 4.08527 7.7639 4.08527 8.08934 4.4107L13.0893 9.4107C13.4148 9.73614 13.4148 10.2638 13.0893 10.5892L8.08934 15.5892C7.7639 15.9147 7.23626 15.9147 6.91083 15.5892C6.58539 15.2638 6.58539 14.7361 6.91083 14.4107L11.3216 9.99996L6.91083 5.58921C6.58539 5.26378 6.58539 4.73614 6.91083 4.4107Z" fill="white"/>
</svg>

        </button>

        <div className="register__card2__card__forgot"
        onClick={() => window.location.href = "/forgot-password"}
        >
          Forgot Password?
        </div>
        <div className="register__card2__card__info">
        If you don't have a Sure Banker account, download the app <a href="#">here</a> and open an account in a few minutes.
        </div>
        <div className="register__card2__card__copy">
        Copyright © 2024 SureBanker. All rights reserved
        </div>

        </div>

      </div>

    
    </div>
  );
}
