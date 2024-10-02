"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import TransactionPinFail from "../components/transaction-pin-fail";
import TransactionPinSuccess from "../components/transaction-pin-success";

export default function Kyc() {
const [open, setOpen] = useState(false);
  useEffect(() => {
    const otpInputs = document.querySelectorAll(".auth__otp-group__otp-input1");

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
  },[]);

  useEffect(() => {
    const otpInputs = document.querySelectorAll(".auth__otp-group__otp-input2");

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
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true)
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  };

  return (
    <form className="auth" onSubmit={handleSubmit}>
      <Image src="/assets/shield.png" width={40} height={44.04} />

      <div className="auth__title">Clara Rayo</div>
      <div className="auth__subtitle">
        Welcome, please set up your welcome back pin
      </div>

      <label htmlFor="">New Pin</label>
      <div className="auth__otp-group">
        <input className="auth__otp-group__otp-input1" type="text" maxLength={1} required />
        <input className="auth__otp-group__otp-input1" type="text" maxLength={1} required />
        <input className="auth__otp-group__otp-input1" type="text" maxLength={1} required />
        <input className="auth__otp-group__otp-input1" type="text" maxLength={1} required />
        <input className="auth__otp-group__otp-input1" type="text" maxLength={1} required />
        <input className="auth__otp-group__otp-input1" type="text" maxLength={1} required />
      </div>

      <label htmlFor="">Confirm Pin</label>
      <div className="auth__otp-group">
        <input className="auth__otp-group__otp-input2" type="text" maxLength={1} required />
        <input className="auth__otp-group__otp-input2" type="text" maxLength={1} required />
        <input className="auth__otp-group__otp-input2" type="text" maxLength={1} required />
        <input className="auth__otp-group__otp-input2" type="text" maxLength={1} required />
        <input className="auth__otp-group__otp-input2" type="text" maxLength={1} required />
        <input className="auth__otp-group__otp-input2" type="text" maxLength={1} required />
      </div>
      <button type="submit">Create Pin</button>

        <TransactionPinSuccess open={open} />
        {/* <TransactionPinFail /> */}
    </form>
  );
}
