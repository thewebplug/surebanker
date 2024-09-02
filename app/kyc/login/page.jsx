"use client";
import Image from "next/image";

export default function Kyc() {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/set-pin";
  };
  
  return (
    <form className="kyc" onSubmit={handleSubmit}>
      <Image src="/assets/shield.png" width={40} height={44.04} />

      <div className="kyc__title">Login</div>
      <div className="kyc__subtitle">
        Please enter your account PIN to proceed
      </div>

      <label htmlFor="">Phone number</label>

      <div className="kyc__country-phone">
        <select name="" id="">
          <option value=""></option>
        </select>
        <input type="text" placeholder="234" required />
        <input type="text" placeholder="08022224444" required />
      </div>

      <label htmlFor="">Password</label>
      <input type="password" required />

      <button>Login</button>

      <div className="kyc__forgot-password-text">
        <div>
          Dont have an account?{" "}
          <span
            className="pointer"
            onClick={() => (window.location.href = "/kyc/register")}
          >
            Register
          </span>
        </div>
        <div
          className="pointer"
          onClick={() => (window.location.href = "/kyc/forgot-password")}
        >
          Forgot Password
        </div>
      </div>
    </form>
  );
}
