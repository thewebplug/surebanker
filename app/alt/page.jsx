"use client"
import Image from "next/image";
import { countries } from "../utils/countries";

export default function Auth() {

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href="/alt/login"
    }
    return (
        <form className="auth"
        onSubmit={handleSubmit}
        >
            <Image
            src="/assets/shield.png"
            width={40}
            height={44.04}
            />

            <div className="auth__title">
                Register
            </div>

            <label htmlFor="">Country of residence</label>
            <select name="" id="" required>
                {countries.map((country, index) => <option key={index} value={country?.label}>{country?.label}</option>)}
            </select>
            <label htmlFor="">Phone number</label>

            <div className="auth__country-phone">
                <select name="" id="">
                    <option value=""></option>
                </select>
                <input type="text" value="234" required/>
                <input type="text" value="08022224444" required/>
            </div>
            <label htmlFor="">Email address</label>
            <input type="text" placeholder="example@gmail.com" required />
            <label htmlFor="">Home Address</label>
            <input type="text" required />
            <label htmlFor="">First name</label>
            <input type="text" required />
            <label htmlFor="">Last name</label>
            <input type="text" required />
            <label htmlFor="">Birthday</label>
            <input type="date" required />
            <label htmlFor="">Password</label>
            <input type="password" required />

            <button>Continue</button>

            <div className="auth__login-text">
            <div>Have an account? </div>
            <div
            className="pointer"
            onClick={() => window.location.href = "/auth/login"}
            >Login</div>
            </div>
        </form>
    )
}