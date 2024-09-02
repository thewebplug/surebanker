"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Register() {
    const [active, setActive] = useState(false)
    const [stage, setStage] = useState(1)

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
{stage === 1 &&<>
      <div className="register__card2__card__title">
      Choose a Currency
        </div>
      <div className="register__card2__card__subtitle">
      Select your preferred mode of transaction
        </div>
        
       
      <div className={`register__card2__card__choose ${active === "NGN" && "register__card2__card__choose-active"}`}
      onClick={() => setActive("NGN")}
      >
      <div className="register__card2__card__choose__inner">
      <div>
      <Image 
      src="/assets/ng.png"
      width={32}
      height={32}
      />
Nigeria Naira (NGN)
      </div>
      <input type="radio" name="" id="" />
        </div>

        {active === "NGN" && <>

        <div className="register__card2__card__choose-active__title">
        Requirement 
        </div>
      <div className="register__card2__card__choose-active__group">
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2L7 13L2 8" stroke="#42BE65" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Proof of address
      </div>
      <div className="register__card2__card__choose-active__group">
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2L7 13L2 8" stroke="#42BE65" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
A Video selfie
      </div>
      <div className="register__card2__card__choose-active__group">
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2L7 13L2 8" stroke="#42BE65" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
A BVN (Bank Verification Number)
      </div>
      <div className="register__card2__card__choose-active__group">
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2L7 13L2 8" stroke="#42BE65" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
A valid ID
      </div>
      </>}
        </div>
      <div className={`register__card2__card__choose ${active === "USD" && "register__card2__card__choose-active"}`}
      onClick={() => setActive("USD")}
      >
      <div className="register__card2__card__choose__inner">
      <div>
      <Image 
      src="/assets/us.png"
      width={32}
      height={32}
      />
US Dollar (USD)
      </div>
      <input type="radio" name="" id="" />
        </div>

        {active === "USD" && <>

<div className="register__card2__card__choose-active__title">
Requirement 
</div>
<div className="register__card2__card__choose-active__group">
<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2L7 13L2 8" stroke="#42BE65" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Proof of address
</div>
<div className="register__card2__card__choose-active__group">
<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2L7 13L2 8" stroke="#42BE65" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
A Video selfie
</div>
<div className="register__card2__card__choose-active__group">
<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2L7 13L2 8" stroke="#42BE65" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
A BVN (Bank Verification Number)
</div>
<div className="register__card2__card__choose-active__group">
<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2L7 13L2 8" stroke="#42BE65" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
A valid ID
</div>
</>}
        </div>
        </>}
        {stage === 2 &&

        <>
        <div className="register__card2__card__title">
        Create an Account
        </div>
      <div className="register__card2__card__subtitle">
      Set up your account
        </div>
        

        <label htmlFor="">Email</label>
        <input type="email" placeholder="name@youremail.com" />
    
        </>}
{stage === 3 && <>
        <div className="register__card2__card__title">
        Verify Phone Number
        </div>
      <div className="register__card2__card__subtitle">
      Enter the OTP sent to name@youremail.com
        </div>
        <div className="register__card2__card__otp-group">
          <input className="register__card2__card__otp-group__otp" type="text" maxLength={1} />
          <input className="register__card2__card__otp-group__otp" type="text" maxLength={1} />
          <input className="register__card2__card__otp-group__otp" type="text" maxLength={1} />
          <input className="register__card2__card__otp-group__otp" type="text" maxLength={1} />
        </div>

        <div className="register__card2__card__request-code">
          <div>Request a new code</div>
          <div>in 60s</div>
        </div>
        </>}
        {stage === 5 && <>
        <svg className="register__card2__card__done-icon" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="64" rx="32" fill="#42BE65"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M43.7071 24.2929C44.0976 24.6834 44.0976 25.3166 43.7071 25.7071L29.7071 39.7071C29.3166 40.0976 28.6834 40.0976 28.2929 39.7071L21.2929 32.7071C20.9024 32.3166 20.9024 31.6834 21.2929 31.2929C21.6834 30.9024 22.3166 30.9024 22.7071 31.2929L29 37.5858L42.2929 24.2929C42.6834 23.9024 43.3166 23.9024 43.7071 24.2929Z" fill="white"/>
</svg>

        <div className="register__card2__card__title center">
        Account Creation Successful
        </div>
      <div className="register__card2__card__subtitle center">
      Congrats your account was successfully created
        </div>
        </>
}
        <button
        onClick={handleSubmit}
        >{stage === 5 ? "Next" : "Proceed"}

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.91083 4.4107C7.23626 4.08527 7.7639 4.08527 8.08934 4.4107L13.0893 9.4107C13.4148 9.73614 13.4148 10.2638 13.0893 10.5892L8.08934 15.5892C7.7639 15.9147 7.23626 15.9147 6.91083 15.5892C6.58539 15.2638 6.58539 14.7361 6.91083 14.4107L11.3216 9.99996L6.91083 5.58921C6.58539 5.26378 6.58539 4.73614 6.91083 4.4107Z" fill="white"/>
</svg>

        </button>

        </div>

      </div>

      {stage === 4 && <div className="register__onboarding-modal">
      <div className="register__onboarding-modal__inner">
      <div className="register__onboarding-modal__inner__back"
      onClick={handleBack}
      >
      <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2L2 8L8 14" stroke="#393939" stroke-width="2" stroke-linecap="square"/>
</svg>

        </div>

        <div className="register__onboarding-modal__inner__title">
        Let’s get to know you better
        </div>
        <div className="register__onboarding-modal__inner__subtitle">
        Your information is safe with us
        </div>
<form className="register__onboarding-modal__inner__form" onSubmit={handleSubmit}>
        <div className="register__onboarding-modal__inner__form__inner">
          <div className="register__onboarding-modal__inner__form__inner__input-group">
<label htmlFor="">First Name</label>
<input type="text" placeholder="E.g. John"/>
<div className="register__onboarding-modal__inner__form__inner__input-group__info">
Please ensure your first name is correspond with the name on registered to phone name 
</div>
          </div>
          <div className="register__onboarding-modal__inner__form__inner__input-group">
<label htmlFor="">Password</label>
<input type="text" placeholder="confirm new password"/>
<div className="register__onboarding-modal__inner__form__inner__input-group__info">
At least 8 characters. A minimum of  1 upper case, 1 numeric character [0-9] and a minimum of 1 special character: ~`!@#$%^&*()-_+={}[]
</div>
          </div>
          <div className="register__onboarding-modal__inner__form__inner__input-group">
<label htmlFor="">Surname/Last Name</label>
<input type="text" placeholder="E.g. Doe"/>
<div className="register__onboarding-modal__inner__form__inner__input-group__info">
Please ensure your Last name is correspond with the name on registered to phone name 
</div>
          </div>
          <div className="register__onboarding-modal__inner__form__inner__input-group">
<label htmlFor="">Confirm Password</label>
<input type="text" placeholder="confirm new password"/>
<div className="register__onboarding-modal__inner__form__inner__input-group__terms">
  <input type="checkbox" name="" id="" />
<div>
By clicking, you agree to <span>Terms of service</span> and <span>Privacy Policy</span>
</div>
</div>
          </div>
        </div>


        <button type="submit">Proceed

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.91083 4.4107C7.23626 4.08527 7.7639 4.08527 8.08934 4.4107L13.0893 9.4107C13.4148 9.73614 13.4148 10.2638 13.0893 10.5892L8.08934 15.5892C7.7639 15.9147 7.23626 15.9147 6.91083 15.5892C6.58539 15.2638 6.58539 14.7361 6.91083 14.4107L11.3216 9.99996L6.91083 5.58921C6.58539 5.26378 6.58539 4.73614 6.91083 4.4107Z" fill="white"/>
</svg>

        </button>

</form>
        
        </div>

      </div>}
    </div>
  );
}
