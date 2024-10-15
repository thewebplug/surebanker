"use client";

import { verifyNin } from "@/app/apis/kyc";
import Navigation from "@/app/components/navigation";
import ProfileHeader from "@/app/components/profile-header";
import Image from "next/image";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function Kyc() {
  const auth = useSelector((state) => state.auth);
  const [image, setImage] = useState("");
  const [nin, setNin] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const mediaRef = useRef(null);

  const handleVerifyNin = async (e) => {
    e.preventDefault();
    setLoading(true)
    const response = await verifyNin(auth?.userInfo?.finclusionId
      , nin, gender, auth?.token);
    console.log('response', response);

    if(response?.status === 200) {
      alert("BVN verification successful!");
      setTimeout(() => {
        window.location.href = "/profile/tiers";
      }, 2000);
    }else {
      alert(response?.data?.message)
    }
    setLoading(false)
  }

  return (
    <div className="kyc">
      <ProfileHeader />
      <form className="kyc__inner" onSubmit={handleVerifyNin}>
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

          <div className="kyc__inner__tier-banner__title">Tier 2</div>
          <div className="kyc__inner__tier-banner__subtitle">
            <div>
              Transact daily at a limit of <span>₦ 42,000</span>
            </div>
            <button>Silver</button>
          </div>
        </div>

        <label htmlFor="">NIN</label>

        <div className="kyc__inner__input-with-icon">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.68945 3.90985V21.094C4.68945 21.9556 5.39 22.6562 6.25165 22.6562H18.7492C19.6109 22.6562 20.3114 21.9556 20.3114 21.094V3.90985C20.3114 3.0482 19.6109 2.34766 18.7492 2.34766H6.25165C5.39 2.34766 4.68945 3.0482 4.68945 3.90985ZM16.4059 5.47205H8.59494C8.1629 5.47205 7.81384 5.12299 7.81384 4.69095C7.81384 4.2589 8.1629 3.90985 8.59494 3.90985H16.4059C16.838 3.90985 17.187 4.2589 17.187 4.69095C17.187 5.12299 16.838 5.47205 16.4059 5.47205Z" fill="#3D5AFE"/>
<path d="M17.187 12.5019C17.187 9.82422 16.2253 7.37353 14.6289 5.47205H8.59494C8.1629 5.47205 7.81384 5.12299 7.81384 4.69095C7.81384 4.2589 8.1629 3.90985 8.59494 3.90985H13.0179C12.2026 3.26789 11.297 2.7382 10.3182 2.34766H6.25165C5.39 2.34766 4.68945 3.0482 4.68945 3.90985V21.094C4.68945 21.9556 5.39 22.6562 6.25165 22.6562H10.3182C14.3433 21.0427 17.187 17.1055 17.187 12.5019Z" fill="#536DFE"/>
<path d="M15.0599 16.3982C17.8719 16.3982 18.2746 15.0971 15.9338 13.5398C14.9452 12.8832 13.7565 12.5 12.4799 12.5C11.2033 12.5 10.017 12.8832 9.02596 13.5398C6.68267 15.0971 7.08786 16.3982 9.89981 16.3982H15.0599Z" fill="#FFBE16"/>
</svg>

          <input type="text" placeholder="" value={nin}
            onChange={(e) => setNin(e.target.value)} required />
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

    <label className="kyc__inner__upload">
<div>
<div className="kyc__inner__upload__title">Upload your passport photograph</div>
      <div className="kyc__inner__upload__subtitle">File Limit - 2.2mb</div>

</div>

{image ? 
  <Image 
src={URL?.createObjectURL(image)}
width={40}
height={44.99}
style={{borderRadius: "6px"}}
/>
:
<Image 
src="/assets/tier-upload.png"
width={40}
height={40}
/>
}

<input
                type="file"
                name=""
                id=""
                hidden
                ref={mediaRef}
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />

    </label>
    <button disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
      </form>

      <Navigation />
    </div>
  );
}
