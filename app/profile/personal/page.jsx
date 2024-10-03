"use client"

import Image from "next/image"
import ProfileHeader from "../../components/profile-header"
import Navigation from "../../components/navigation"

export default function Fund() {
  
    return (
      <div className="personal-settings">
        <ProfileHeader />
        <div className="personal-settings__nav">
          <svg
            className="pointer"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => (window.location.href = "/profile")}
          >
            <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
            <path
              d="M16.7722 9.2278C17.0759 9.53155 17.0759 10.024 16.7722 10.3278L11.8777 15.2222L16.7722 20.1167C17.0759 20.4205 17.0759 20.9129 16.7722 21.2167C16.4685 21.5204 15.976 21.5204 15.6723 21.2167L10.2278 15.7722C9.92407 15.4685 9.92407 14.976 10.2278 14.6723L15.6723 9.2278C15.976 8.92407 16.4685 8.92407 16.7722 9.2278Z"
              fill="#212121"
            />
          </svg>
  
          <div>Personal Info</div>
        </div>

    <div className="personal-settings__group">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#F5F5F5"/>
<path d="M18.4525 16.2011C19.1978 16.2011 19.8018 16.8052 19.8018 17.5504V18.1015C19.8018 18.4455 19.6943 18.7809 19.4943 19.0608C18.5667 20.3587 17.0522 21.0018 15 21.0018C12.9474 21.0018 11.4337 20.3585 10.5084 19.0599C10.3092 18.7803 10.2021 18.4456 10.2021 18.1024V17.5504C10.2021 16.8052 10.8063 16.2011 11.5515 16.2011H18.4525ZM15 9.00391C16.6569 9.00391 18 10.3471 18 12.0039C18 13.6608 16.6569 15.0039 15 15.0039C13.3432 15.0039 12 13.6608 12 12.0039C12 10.3471 13.3432 9.00391 15 9.00391Z" fill="black"/>
</svg>

<div>
    <div className="personal-settings__group__title">First name</div>
    <div className="personal-settings__group__subtitle">Eromhonsele</div>
</div>
    </div>
    <div className="personal-settings__group">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#F5F5F5"/>
<path d="M18.4525 16.2011C19.1978 16.2011 19.8018 16.8052 19.8018 17.5504V18.1015C19.8018 18.4455 19.6943 18.7809 19.4943 19.0608C18.5667 20.3587 17.0522 21.0018 15 21.0018C12.9474 21.0018 11.4337 20.3585 10.5084 19.0599C10.3092 18.7803 10.2021 18.4456 10.2021 18.1024V17.5504C10.2021 16.8052 10.8063 16.2011 11.5515 16.2011H18.4525ZM15 9.00391C16.6569 9.00391 18 10.3471 18 12.0039C18 13.6608 16.6569 15.0039 15 15.0039C13.3432 15.0039 12 13.6608 12 12.0039C12 10.3471 13.3432 9.00391 15 9.00391Z" fill="black"/>
</svg>

<div>
    <div className="personal-settings__group__title">Middle name</div>
    <div className="personal-settings__group__subtitle">Eromhonsele</div>
</div>
    </div>
    <div className="personal-settings__group">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#F5F5F5"/>
<path d="M18.4525 16.2011C19.1978 16.2011 19.8018 16.8052 19.8018 17.5504V18.1015C19.8018 18.4455 19.6943 18.7809 19.4943 19.0608C18.5667 20.3587 17.0522 21.0018 15 21.0018C12.9474 21.0018 11.4337 20.3585 10.5084 19.0599C10.3092 18.7803 10.2021 18.4456 10.2021 18.1024V17.5504C10.2021 16.8052 10.8063 16.2011 11.5515 16.2011H18.4525ZM15 9.00391C16.6569 9.00391 18 10.3471 18 12.0039C18 13.6608 16.6569 15.0039 15 15.0039C13.3432 15.0039 12 13.6608 12 12.0039C12 10.3471 13.3432 9.00391 15 9.00391Z" fill="black"/>
</svg>

<div>
    <div className="personal-settings__group__title">Last name</div>
    <div className="personal-settings__group__subtitle">Eromhonsele</div>
</div>
    </div>
    <div className="personal-settings__group">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#F5F5F5"/>
<path d="M18.4525 16.2011C19.1978 16.2011 19.8018 16.8052 19.8018 17.5504V18.1015C19.8018 18.4455 19.6943 18.7809 19.4943 19.0608C18.5667 20.3587 17.0522 21.0018 15 21.0018C12.9474 21.0018 11.4337 20.3585 10.5084 19.0599C10.3092 18.7803 10.2021 18.4456 10.2021 18.1024V17.5504C10.2021 16.8052 10.8063 16.2011 11.5515 16.2011H18.4525ZM15 9.00391C16.6569 9.00391 18 10.3471 18 12.0039C18 13.6608 16.6569 15.0039 15 15.0039C13.3432 15.0039 12 13.6608 12 12.0039C12 10.3471 13.3432 9.00391 15 9.00391Z" fill="black"/>
</svg>

<div>
    <div className="personal-settings__group__title">Phone number</div>
    <div className="personal-settings__group__subtitle">+234590949494</div>
</div>
    </div>
    <div className="personal-settings__group">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#F5F5F5"/>
<path d="M18.4525 16.2011C19.1978 16.2011 19.8018 16.8052 19.8018 17.5504V18.1015C19.8018 18.4455 19.6943 18.7809 19.4943 19.0608C18.5667 20.3587 17.0522 21.0018 15 21.0018C12.9474 21.0018 11.4337 20.3585 10.5084 19.0599C10.3092 18.7803 10.2021 18.4456 10.2021 18.1024V17.5504C10.2021 16.8052 10.8063 16.2011 11.5515 16.2011H18.4525ZM15 9.00391C16.6569 9.00391 18 10.3471 18 12.0039C18 13.6608 16.6569 15.0039 15 15.0039C13.3432 15.0039 12 13.6608 12 12.0039C12 10.3471 13.3432 9.00391 15 9.00391Z" fill="black"/>
</svg>

<div>
    <div className="personal-settings__group__title">Address</div>
    <div className="personal-settings__group__subtitle">No 13 Calvary Street</div>
</div>
    </div>

    <div className="personal-settings__title">
    Next Of Kin
</div>

<div className="personal-settings__group">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#F5F5F5"/>
<path d="M18.4525 16.2011C19.1978 16.2011 19.8018 16.8052 19.8018 17.5504V18.1015C19.8018 18.4455 19.6943 18.7809 19.4943 19.0608C18.5667 20.3587 17.0522 21.0018 15 21.0018C12.9474 21.0018 11.4337 20.3585 10.5084 19.0599C10.3092 18.7803 10.2021 18.4456 10.2021 18.1024V17.5504C10.2021 16.8052 10.8063 16.2011 11.5515 16.2011H18.4525ZM15 9.00391C16.6569 9.00391 18 10.3471 18 12.0039C18 13.6608 16.6569 15.0039 15 15.0039C13.3432 15.0039 12 13.6608 12 12.0039C12 10.3471 13.3432 9.00391 15 9.00391Z" fill="black"/>
</svg>

<div>
    <div className="personal-settings__group__title">First name</div>
    <div className="personal-settings__group__subtitle">Eromhonsele</div>
</div>
    </div>
    <div className="personal-settings__group">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#F5F5F5"/>
<path d="M18.4525 16.2011C19.1978 16.2011 19.8018 16.8052 19.8018 17.5504V18.1015C19.8018 18.4455 19.6943 18.7809 19.4943 19.0608C18.5667 20.3587 17.0522 21.0018 15 21.0018C12.9474 21.0018 11.4337 20.3585 10.5084 19.0599C10.3092 18.7803 10.2021 18.4456 10.2021 18.1024V17.5504C10.2021 16.8052 10.8063 16.2011 11.5515 16.2011H18.4525ZM15 9.00391C16.6569 9.00391 18 10.3471 18 12.0039C18 13.6608 16.6569 15.0039 15 15.0039C13.3432 15.0039 12 13.6608 12 12.0039C12 10.3471 13.3432 9.00391 15 9.00391Z" fill="black"/>
</svg>

<div>
    <div className="personal-settings__group__title">Middle name</div>
    <div className="personal-settings__group__subtitle">Eromhonsele</div>
</div>
    </div>
    <div className="personal-settings__group">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#F5F5F5"/>
<path d="M18.4525 16.2011C19.1978 16.2011 19.8018 16.8052 19.8018 17.5504V18.1015C19.8018 18.4455 19.6943 18.7809 19.4943 19.0608C18.5667 20.3587 17.0522 21.0018 15 21.0018C12.9474 21.0018 11.4337 20.3585 10.5084 19.0599C10.3092 18.7803 10.2021 18.4456 10.2021 18.1024V17.5504C10.2021 16.8052 10.8063 16.2011 11.5515 16.2011H18.4525ZM15 9.00391C16.6569 9.00391 18 10.3471 18 12.0039C18 13.6608 16.6569 15.0039 15 15.0039C13.3432 15.0039 12 13.6608 12 12.0039C12 10.3471 13.3432 9.00391 15 9.00391Z" fill="black"/>
</svg>

<div>
    <div className="personal-settings__group__title">Last name</div>
    <div className="personal-settings__group__subtitle">Eromhonsele</div>
</div>
    </div>
    <div className="personal-settings__group">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#F5F5F5"/>
<path d="M18.4525 16.2011C19.1978 16.2011 19.8018 16.8052 19.8018 17.5504V18.1015C19.8018 18.4455 19.6943 18.7809 19.4943 19.0608C18.5667 20.3587 17.0522 21.0018 15 21.0018C12.9474 21.0018 11.4337 20.3585 10.5084 19.0599C10.3092 18.7803 10.2021 18.4456 10.2021 18.1024V17.5504C10.2021 16.8052 10.8063 16.2011 11.5515 16.2011H18.4525ZM15 9.00391C16.6569 9.00391 18 10.3471 18 12.0039C18 13.6608 16.6569 15.0039 15 15.0039C13.3432 15.0039 12 13.6608 12 12.0039C12 10.3471 13.3432 9.00391 15 9.00391Z" fill="black"/>
</svg>

<div>
    <div className="personal-settings__group__title">Phone number</div>
    <div className="personal-settings__group__subtitle">+234590949494</div>
</div>
    </div>
    <div className="personal-settings__group">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#F5F5F5"/>
<path d="M18.4525 16.2011C19.1978 16.2011 19.8018 16.8052 19.8018 17.5504V18.1015C19.8018 18.4455 19.6943 18.7809 19.4943 19.0608C18.5667 20.3587 17.0522 21.0018 15 21.0018C12.9474 21.0018 11.4337 20.3585 10.5084 19.0599C10.3092 18.7803 10.2021 18.4456 10.2021 18.1024V17.5504C10.2021 16.8052 10.8063 16.2011 11.5515 16.2011H18.4525ZM15 9.00391C16.6569 9.00391 18 10.3471 18 12.0039C18 13.6608 16.6569 15.0039 15 15.0039C13.3432 15.0039 12 13.6608 12 12.0039C12 10.3471 13.3432 9.00391 15 9.00391Z" fill="black"/>
</svg>

<div>
    <div className="personal-settings__group__title">Address</div>
    <div className="personal-settings__group__subtitle">No 13 Calvary Street</div>
</div>
    </div>

        <Navigation />
        </div>
    )
}