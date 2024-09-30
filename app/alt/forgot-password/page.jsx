"use client"
import Image from "next/image";
import { useState } from "react";
import { countries } from "@/app/utils/countries";
import { sendOtp } from "@/app/apis/auth";

export default function Kyc() {
    const [stage, setStage] = useState(1)
    const [countryCode, setCountryCode] = useState("NG");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState("");

    const handleSendOtp = async (e) => {
      e.preventDefault()
      setLoading(true);
      const response = await sendOtp(phone);
      console.log('response', response);
      setLoading(false);
    }

  return (
    <form className="auth" onSubmit={handleSendOtp}>
      <Image src="/assets/shield.png" width={40} height={44.04} />

      <div className="auth__title">Forgot Password</div>
      <div className="auth__subtitle">
        An OTP wll be sent to the Registered number below{" "}
      </div>
{stage === 1 && <>
      <label htmlFor="">Phone number</label>

      <div className="auth__country-phone">
        <Image
          src={`https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`}
          width={22}
          height={12.43}
          style={{ minWidth: "22px" }}
        />
        <select
          name=""
          id=""
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          required
        >
          <option value=""></option>
          {countries?.map((item) => (
            <option value={item?.code}>{item?.phone}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="08022224444"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      </>}
{stage === 2 && <>
      <label htmlFor="">New Password</label>
      <input type="password" />
      <label htmlFor="">Confirm Password</label>
      <input type="password" />
      </>}
      <button type="submit">{loading ? "Loading..." : "Continue"}</button>

      <div className="auth__forgot-password-text"
                  onClick={() => window.location.href = "/auth/login"}

      >
        <div>
          <span>Login</span>
        </div>
      </div>
    </form>
  );
}
