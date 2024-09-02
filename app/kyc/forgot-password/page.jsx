"use client"
import Image from "next/image";
import { useState } from "react";

export default function Kyc() {
    const [stage, setStage] = useState(2)
  return (
    <div className="kyc">
      <Image src="/assets/shield.png" width={40} height={44.04} />

      <div className="kyc__title">Forgot Password</div>
      <div className="kyc__subtitle">
        An OTP wll be sent to the Registered number below{" "}
      </div>
{stage === 1 && <>
      <label htmlFor="">Phone number</label>

      <div className="kyc__country-phone">
        <select name="" id="">
          <option value=""></option>
        </select>
        <input type="text" value="234" />
        <input type="text" value="08022224444" />
      </div>
      </>}
{stage === 2 && <>
      <label htmlFor="">New Password</label>
      <input type="password" />
      <label htmlFor="">Confirm Password</label>
      <input type="password" />
      </>}
      <button>Continue</button>

      <div className="kyc__forgot-password-text"
                  onClick={() => window.location.href = "/kyc/login"}

      >
        <div>
          <span>Login</span>
        </div>
      </div>
    </div>
  );
}
