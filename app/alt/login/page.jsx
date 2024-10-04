"use client";
import { login } from "@/app/apis/auth";
import { countries } from "@/app/utils/countries";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Login() {
  const [countryCode, setCountryCode] = useState("NG");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await login(phone, password);
    console.log("response form login", response);

    if (response?.status === 200) {
      localStorage.setItem("token", response?.data?.token);
      document.cookie = `auth_token=${response?.data?.token}; path=/; max-age=${
        60 * 60 * 24 * 7
      };`;
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: {
          token: response?.data?.token,
        },
      });
      window.location.href = "/";
    } else {
      alert("Something went wrong");
    }
    setLoading(false);
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
        >
          <option value=""></option>
          {countries?.map((item, index) => (
            <option value={item?.code} key={index}>{item?.phone}</option>
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

      <label htmlFor="">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button>{loading ? "Loading..." : "Login"}</button>

      <div className="auth__forgot-password-text">
        <div>
          Dont have an account?{" "}
          <span
            className="pointer"
            onClick={() => (window.location.href = "/alt")}
          >
            Register
          </span>
        </div>
        <div
          className="pointer"
          onClick={() => (window.location.href = "/alt/forgot-password")}
        >
          Forgot Password
        </div>
      </div>
    </form>
  );
}
