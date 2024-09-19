"use client";
import Image from "next/image";

export default function Auth() {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/alt/login";
  };
  return (
    <div className="legal">
      <Image src="/assets/shield.png" width={40} height={44.04} />

      <div className="legal__title">Terms and Conditions</div>
      <div className="legal__subsubtitle">
        Please read through and check to box to proceed with registration
      </div>
      <div className="legal__subtitle">
        A Terms and Conditions agreement acts as a legal contract between you
        (the company) and the user. It's where you maintain your rights to
        exclude users from your app in the event that they abuse your
        website/app, set out the rules for using your service and note other
        important details and disclaimers. Having a Terms and Conditions
        agreement is completely optional. No laws require you to have one. Not
        even the super-strict and wide-reaching General Data Protection
        Regulation (GDPR). Your Terms and Conditions agreement will be uniquely
        yours. While some clauses are standard and commonly seen in pretty much
        every Terms and Conditions agreement, it's up to you to set the rules
        and guidelines that the user must agree to.
        <br />
        <br />A Terms and Conditions agreement acts as a legal contract between
        you (the company) and the user. It's where you maintain your rights to
        exclude users from your app in the event that they abuse your
        website/app, set out the rules for using your service and note other
        important details and disclaimers. Having a Terms and Conditions
        agreement is completely optional. No laws require you to have one. Not
        even the super-strict and wide-reaching General Data Protection
        Regulation (GDPR).
      </div>

      <div className="legal__agree">
        <input type="checkbox" name="" id="" />
        <div>
          I accept the <span>terms and conditions</span>
        </div>
      </div>

      <button className="legal__button">Continue</button>
    </div>
  );
}
