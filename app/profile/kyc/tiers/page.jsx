"use client"

import { checkKycStatus } from "@/app/apis/kyc";
import Navigation from "@/app/components/navigation"
import ProfileHeader from "@/app/components/profile-header"
import Image from "next/image"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Kyc() {
  const auth = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);

  const handleVerifyBvn = async () => {
    setLoading(true)
    const response = await checkKycStatus(auth?.userInfo?.finclusionId, auth?.token);
    console.log('response stee', response);
    setLoading(false)
  }

  useEffect(() => {
    handleVerifyBvn();
  }, [])

    return (
        <div className="kyc">
            <ProfileHeader />
            <div className="kyc__inner">
            <div
            className="kyc__inner__nav"
            onClick={() => (window.location.href = "/profile")}
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

          <div className="kyc__inner__title">
            KYC
          </div>
          <div className="kyc__inner__subtitle">
          Upgrade your Tier by providing details to the requested KYC Information
          </div>
          <div className="kyc__inner__banner"
          onClick={() => (window.location.href = "/profile/kyc/tiers/1")}
          >
            <Image 
            src="/assets/tier1-bg.png"
            objectFit="cover"
            layout="fill"
            style={{borderRadius: "4px"}}
            />
<div className="kyc__inner__banner__title">Tier 1</div>
<div className="kyc__inner__banner__subtitle">
    <div>Transact daily at a limit of <span>₦ 12,000</span></div>
    <button>Complete Verification</button>
    {/* <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0C10.866 0 14 3.134 14 7C14 10.866 10.866 14 7 14C3.134 14 0 10.866 0 7C0 3.134 3.134 0 7 0ZM9.25379 4.87877L6.125 8.00751L4.74623 6.62879C4.54121 6.42376 4.20879 6.42376 4.00377 6.62879C3.79875 6.83382 3.79875 7.16618 4.00377 7.37121L5.75379 9.12121C5.95882 9.32624 6.29118 9.32624 6.49621 9.12121L9.99621 5.62121C10.2012 5.41621 10.2012 5.08379 9.99621 4.87877C9.79118 4.67375 9.45882 4.67375 9.25379 4.87877Z" fill="#0FFF9A"/>
</svg> */}


</div>
          </div>
          <div className="kyc__inner__banner"
          onClick={() => (window.location.href = "/profile/kyc/tiers/2")}
          >
            <Image 
            src="/assets/tier2-bg.png"
            objectFit="cover"
            layout="fill"
            style={{borderRadius: "4px"}}
            />
<div className="kyc__inner__banner__title">Tier 2</div>
<div className="kyc__inner__banner__subtitle">
    <div>Transact daily at a limit of <span>₦ 42,000</span></div>
    <button>Complete Verification</button>
    {/* <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0C10.866 0 14 3.134 14 7C14 10.866 10.866 14 7 14C3.134 14 0 10.866 0 7C0 3.134 3.134 0 7 0ZM9.25379 4.87877L6.125 8.00751L4.74623 6.62879C4.54121 6.42376 4.20879 6.42376 4.00377 6.62879C3.79875 6.83382 3.79875 7.16618 4.00377 7.37121L5.75379 9.12121C5.95882 9.32624 6.29118 9.32624 6.49621 9.12121L9.99621 5.62121C10.2012 5.41621 10.2012 5.08379 9.99621 4.87877C9.79118 4.67375 9.45882 4.67375 9.25379 4.87877Z" fill="#0FFF9A"/>
</svg> */}


</div>
          </div>
          <div className="kyc__inner__banner kyc__inner__banner-3"
          onClick={() => (window.location.href = "/profile/kyc/tiers/3")}
          >
            <Image 
            src="/assets/tier3-bg.png"
            objectFit="cover"
            layout="fill"
            style={{borderRadius: "4px"}}
            />
<div className="kyc__inner__banner__title">Tier 3</div>
<div className="kyc__inner__banner__subtitle">
    <div>Transact daily at a limit of <span>₦ 82,000</span></div>
    <button>Complete Verification</button>
    {/* <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0C10.866 0 14 3.134 14 7C14 10.866 10.866 14 7 14C3.134 14 0 10.866 0 7C0 3.134 3.134 0 7 0ZM9.25379 4.87877L6.125 8.00751L4.74623 6.62879C4.54121 6.42376 4.20879 6.42376 4.00377 6.62879C3.79875 6.83382 3.79875 7.16618 4.00377 7.37121L5.75379 9.12121C5.95882 9.32624 6.29118 9.32624 6.49621 9.12121L9.99621 5.62121C10.2012 5.41621 10.2012 5.08379 9.99621 4.87877C9.79118 4.67375 9.45882 4.67375 9.25379 4.87877Z" fill="#0FFF9A"/>
</svg> */}


</div>
          </div>
          <div className="kyc__inner__banner"
          onClick={() => (window.location.href = "/profile/kyc/tiers/4")}
          >
            <Image 
            src="/assets/tier4-bg.png"
            objectFit="cover"
            layout="fill"
            style={{borderRadius: "4px"}}
            />
<div className="kyc__inner__banner__title">Tier 4</div>
<div className="kyc__inner__banner__subtitle">
    <div>Transact daily at a limit of <span>₦ 102,000</span></div>
    <button>Complete Verification</button>
    {/* <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0C10.866 0 14 3.134 14 7C14 10.866 10.866 14 7 14C3.134 14 0 10.866 0 7C0 3.134 3.134 0 7 0ZM9.25379 4.87877L6.125 8.00751L4.74623 6.62879C4.54121 6.42376 4.20879 6.42376 4.00377 6.62879C3.79875 6.83382 3.79875 7.16618 4.00377 7.37121L5.75379 9.12121C5.95882 9.32624 6.29118 9.32624 6.49621 9.12121L9.99621 5.62121C10.2012 5.41621 10.2012 5.08379 9.99621 4.87877C9.79118 4.67375 9.45882 4.67375 9.25379 4.87877Z" fill="#0FFF9A"/>
</svg> */}


</div>
          </div>
            </div>
            <Navigation />
        </div>
    )
}