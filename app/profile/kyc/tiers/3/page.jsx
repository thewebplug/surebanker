"use client";

import Navigation from "@/app/components/navigation";
import ProfileHeader from "@/app/components/profile-header";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Kyc() {
  const [image, setImage] = useState("");
  const mediaRef = useRef(null);

  return (
    <div className="kyc">
      <ProfileHeader />
      <div className="kyc__inner">
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

          <div className="kyc__inner__tier-banner__title">Tier 3</div>
          <div className="kyc__inner__tier-banner__subtitle">
            <div>
              Transact daily at a limit of <span>₦ 82,000</span>
            </div>
            <button>Gold</button>
          </div>
        </div>

        <label htmlFor="">Government Issued ID</label>

        <select name="" id="">
          <option value="">International Passport</option>
        </select>
        <div className="kyc__inner__upload-title">
        Upload a clear image of the ID you have selected above
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
        <button>Submit</button>
      </div>

      <Navigation />
    </div>
  );
}
