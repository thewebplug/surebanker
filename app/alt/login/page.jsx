"use client";
import Image from "next/image";

export default function Kyc() {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/set-pin";
  };
  
  return (
    <form className="auth" onSubmit={handleSubmit}>
      <Image src="/assets/shield.png" width={40} height={44.04} />

      <div className="auth__title">Login</div>
      <div className="auth__subtitle">
        Please enter your account PIN to proceed
      </div>

      <label htmlFor="">Phone number</label>

      <div className="auth__country-phone">
        <select name="" id="">
          <option value=""></option>
        </select>
        <input type="text" placeholder="234" required />
        <input type="text" placeholder="08022224444" required />
      </div>

      <label htmlFor="">Password</label>
      <input type="password" required />

      <button>Login</button>

      <div className="auth__forgot-password-text">
        <div>
          Dont have an account?{" "}
          <span
            className="pointer"
            onClick={() => (window.location.href = "/auth/register")}
          >
            Register
          </span>
        </div>
        <div
          className="pointer"
          onClick={() => (window.location.href = "/auth/forgot-password")}
        >
          Forgot Password
        </div>
      </div>
    </form>
  );
}
