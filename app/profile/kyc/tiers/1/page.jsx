"use client";

import Navigation from "@/app/components/navigation";
import ProfileHeader from "@/app/components/profile-header";
import Image from "next/image";
import { verifyBvn } from '@/app/apis/kyc'
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Kyc() {
  const auth = useSelector((state) => state.auth);
  console.log('auth', auth);
  
  const [bvn, setBvn] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerifyBvn = async (e) => {
    e.preventDefault();
    setLoading(true)
    const response = await verifyBvn(auth?.userInfo?.finclusionId
      , bvn, gender, auth?.token);
    console.log('response', response);

    if(response?.status === 201) {
      window.open(response?.data?.result?.data?.url);
      // setTimeout(() => {
        window.location.href = "/profile/kyc/tiers";
      // }, 2000);
    }else {
      alert(response?.data?.message)
    }
    setLoading(false)
  }
  return (
    <div className="kyc">
      <ProfileHeader />
      <form className="kyc__inner" onSubmit={handleVerifyBvn}>
        <div
          className="kyc__inner__nav"
          onClick={() => (window.location.href = "/profile/kyc/tiers")}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#667085" />
            <path
              d="M16.8169 10.6831C17.061 10.9271 17.061 11.3229 16.8169 11.5669L12.8839 15.5L16.8169 19.4331C17.061 19.6771 17.061 20.0729 16.8169 20.3169C16.5729 20.561 16.1771 20.561 15.9331 20.3169L11.5581 15.9419C11.314 15.6979 11.314 15.3021 11.5581 15.0581L15.9331 10.6831C16.1771 10.439 16.5729 10.439 16.8169 10.6831Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="kyc__inner__tier-banner">
          <Image
            src="/assets/tier1-banner.png"
            objectFit="cover"
            layout="fill"
            style={{ borderRadius: "6px" }}
          />

          <div className="kyc__inner__tier-banner__title">Tier 1</div>
          <div className="kyc__inner__tier-banner__subtitle">
            <div>
              Transact daily at a limit of <span>₦ 12,000</span>
            </div>
            <button>Basic</button>
          </div>
        </div>

        <label htmlFor="">BVN</label>

        <div className="kyc__inner__input-with-icon">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_5878_1540)">
              <path
                d="M20.0958 37.8528L9.17242 18.5968C8.671 17.7126 8.98199 16.5868 9.86721 16.0816L21.0973 9.71301C21.9815 9.21158 23.1073 9.52257 23.6125 10.4078L34.5348 29.6676C35.0362 30.5518 34.7252 31.6776 33.84 32.1828L22.6109 38.5476C21.722 39.0518 20.5999 38.7418 20.0958 37.8528Z"
                fill="#536DFE"
              />
              <path
                d="M16.454 31.4367L9.17242 18.5968C8.671 17.7126 8.98199 16.5868 9.86721 16.0816L21.0973 9.71301C21.9815 9.21158 23.1073 9.52257 23.6125 10.4078L34.5348 29.6676L16.454 31.4367Z"
                fill="#FFBE16"
              />
            </g>
            <defs>
              <clipPath id="clip0_5878_1540">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(11.0469 0.396484) rotate(15.4423)"
                />
              </clipPath>
            </defs>
          </svg>
          <input
            type="text"
            placeholder="Enter BVN"
            required
            value={bvn}
            onChange={(e) => setBvn(e.target.value)}
          />
        </div>
        <label htmlFor="">Gender</label>

        <div className="kyc__inner__input-with-icon">
          <select
            name=""
            id=""
            value={gender}
            required
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <label htmlFor="">Facebook</label>

        <div className="kyc__inner__input-with-icon">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2619 0H2.7381C1.22667 0 0 1.22667 0 2.7381V20.2619C0 21.7733 1.22667 23 2.7381 23H20.2619C21.7733 23 23 21.7733 23 20.2619V2.7381C23 1.22667 21.7733 0 20.2619 0ZM18.0714 8.21429H16.9762C15.8043 8.21429 15.3333 8.4881 15.3333 9.30952V10.9524H18.0714L17.5238 13.6905H15.3333V21.9048H12.5952V13.6905H10.4048V10.9524H12.5952V9.30952C12.5952 7.11905 13.6905 5.47619 15.881 5.47619C17.469 5.47619 18.0714 6.02381 18.0714 6.02381V8.21429Z"
              fill="#344054"
            />
          </svg>

          <input type="text" placeholder="Enter Facebook username" />
        </div>
        <label htmlFor="">Instagram</label>

        <div className="kyc__inner__input-with-icon">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.79545 0C3.0475 0 0 3.0475 0 6.79545V16.2045C0 19.9525 3.0475 23 6.79545 23H16.2045C19.9525 23 23 19.9525 23 16.2045V6.79545C23 3.0475 19.9525 0 16.2045 0H6.79545ZM17.7727 4.18182C18.3477 4.18182 18.8182 4.65227 18.8182 5.22727C18.8182 5.80227 18.3477 6.27273 17.7727 6.27273C17.1977 6.27273 16.7273 5.80227 16.7273 5.22727C16.7273 4.65227 17.1977 4.18182 17.7727 4.18182ZM11.5 5.75C14.673 5.75 17.25 8.32705 17.25 11.5C17.25 14.673 14.673 17.25 11.5 17.25C8.32705 17.25 5.75 14.673 5.75 11.5C5.75 8.32705 8.32705 5.75 11.5 5.75ZM11.5 6.79545C8.90727 6.79545 6.79545 8.90727 6.79545 11.5C6.79545 14.0927 8.90727 16.2045 11.5 16.2045C14.0927 16.2045 16.2045 14.0927 16.2045 11.5C16.2045 8.90727 14.0927 6.79545 11.5 6.79545Z"
              fill="black"
            />
          </svg>

          <input type="text" placeholder="Enter Instagram username" />
        </div>
        <label htmlFor="">Twitter</label>

        <div className="kyc__inner__input-with-icon">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.83333 0C1.71624 0 0 1.71624 0 3.83333V19.1667C0 21.2838 1.71624 23 3.83333 23H19.1667C21.2838 23 23 21.2838 23 19.1667V3.83333C23 1.71624 21.2838 0 19.1667 0H3.83333ZM4.97563 4.92857H9.32236L12.4091 9.31487L16.1548 4.92857H17.5238L13.0273 10.193L18.572 18.0714H14.2263L10.6443 12.9824L6.29762 18.0714H4.92857L10.0261 12.1043L4.97563 4.92857ZM7.07199 6.02381L14.7975 16.9762H16.4756L8.75014 6.02381H7.07199Z"
              fill="#212121"
            />
          </svg>

          <input type="text" placeholder="Enter Twitter username" />
        </div>

        <button disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
      </form>

      <Navigation />
    </div>
  );
}
