"use client"
import { useEffect } from "react";
import ProfileHeader from "../../components/profile-header";


export default function Kyc() {
  useEffect(() => {
  window.location.href = "/profile/kyc/tiers"
  }, [])
    return (
        <div className="kyc">
           
        </div>
    )
}