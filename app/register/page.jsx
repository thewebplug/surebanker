"use client";
import Image from "next/image";
import { countries } from "../utils/countries";
import { useState } from "react";
import { signUp } from "../apis/auth";
import { useDispatch } from "react-redux";

export default function Auth() {
  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = useState("NG");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      const response = await signUp(
        email,
        password,
        firstName,
        middleName,
        homeAddress,
        lastName,
        phone,
        dob,
        "NG",
        "individual"
      );
      console.log("response form sign up", response);

      if (response?.status === 201) {
        // localStorage.setItem("token", response?.data?.token);
        // document.cookie = `auth_token=${
        //   response?.data?.token
        // }; path=/; max-age=${60 * 60 * 24 * 7};`;
        // dispatch({
        //   type: "USER_LOGIN_SUCCESS",
        //   payload: {
        //     token: response?.data?.token,
        //   },
        // });
        window.location.href = "/login";
      }else {
        alert(response?.data?.message)
      }
    }
    setLoading(false);
  };
  return (
    <form className="auth" onSubmit={handleSubmit}>
      <Image src="/assets/shield.png" width={40} height={44.04} />

      <div className="auth__title">Register</div>

      <label htmlFor="">Country of residence</label>
      <select
        name=""
        id=""
        required
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country?.label}>
            {country?.label}
          </option>
        ))}
      </select>
      <label htmlFor="">Phone number</label>

      <div className="auth__country-phone">
        <Image
        src={`https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`}
        width={22}
        height={12.43}
        style={{minWidth: "22px"}}
        />
        <select name="" id="" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
          <option value=""></option>
          {countries?.map((item, index) => 
        <option value={item?.code} key={index}>{item?.phone}</option>  
        )}
        </select>
        <input type="text" placeholder="08022224444" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>

      <label htmlFor="">Email address</label>
      <input
        type="text"
        placeholder="example@gmail.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="">Home Address</label>
      <input
        type="text"
        required
        value={homeAddress}
        onChange={(e) => setHomeAddress(e.target.value)}
      />
      <label htmlFor="">First name</label>
      <input
        type="text"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="">Middle name</label>
      <input
        type="text"
        required
        value={middleName}
        onChange={(e) => setMiddleName(e.target.value)}
      />
      <label htmlFor="">Last name</label>
      <input
        type="text"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="">Birthday</label>
      <input
        type="date"
        required
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="">Confirm Password</label>
      <input
        type="password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button>{loading ? "Loading..." : "Continue"}</button>

      <div className="auth__login-text">
        <div>Have an account? </div>
        <div
          className="pointer"
          onClick={() => (window.location.href = "/auth/login")}
          disabled={loading}
        >
          Login
        </div>
      </div>
    </form>
  );
}
