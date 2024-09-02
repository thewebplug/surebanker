"use client"
import Image from "next/image";

export default function Kyc() {
    return (
        <div className="kyc">
            <Image
            src="/assets/shield.png"
            width={40}
            height={44.04}
            />

            <div className="kyc__title">
                Register
            </div>

            <label htmlFor="">Country of residence</label>
            <select name="" id="">
                <option value="Nigeria">Nigeria</option>
            </select>
            <label htmlFor="">Phone number</label>

            <div className="kyc__country-phone">
                <select name="" id="">
                    <option value=""></option>
                </select>
                <input type="text" value="234"/>
                <input type="text" value="08022224444"/>
            </div>
            <label htmlFor="">Email address</label>
            <input type="text" placeholder="example@gmail.com" />
            <label htmlFor="">Home Address</label>
            <input type="text" />
            <label htmlFor="">First name</label>
            <input type="text" />
            <label htmlFor="">Last name</label>
            <input type="text" />
            <label htmlFor="">Birthday</label>
            <input type="date" />
            <label htmlFor="">Password</label>
            <input type="password" />

            <button>Continue</button>

            <div className="kyc__login-text">
            <div>Have an account? </div>
            <div
            className="pointer"
            onClick={() => window.location.href = "/kyc/login"}
            >Login</div>
            </div>
        </div>
    )
}