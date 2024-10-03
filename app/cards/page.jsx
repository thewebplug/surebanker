"use client"

import Image from "next/image"
import ProfileHeader from "../components/profile-header"
import Navigation from "../components/navigation"

export default function Fund() {
  
    return (
      <div className="cards">
        <ProfileHeader />
        <div className="cards__nav">
          <svg
            className="pointer"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => (window.location.href = "/")}
          >
            <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
            <path
              d="M16.7722 9.2278C17.0759 9.53155 17.0759 10.024 16.7722 10.3278L11.8777 15.2222L16.7722 20.1167C17.0759 20.4205 17.0759 20.9129 16.7722 21.2167C16.4685 21.5204 15.976 21.5204 15.6723 21.2167L10.2278 15.7722C9.92407 15.4685 9.92407 14.976 10.2278 14.6723L15.6723 9.2278C15.976 8.92407 16.4685 8.92407 16.7722 9.2278Z"
              fill="#212121"
            />
          </svg>
  
          <div>Manage Cards</div>
        </div>

        <div className="cards__credit-cards">
          <div className="cards__credit-cards__card">
            <Image
              src="/assets/blue-card.png"
              // width={250}
              // height={120}

              objectFit="fill"
              layout="fill"
            />

            <div className="cards__credit-cards__card__title">
              <div>
                <div className="cards__credit-cards__card__title__subtitle">
                  Transact without bounderies
                </div>
                <div className="cards__credit-cards__card__title__title">
                  Get Card
                </div>
              </div>

              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 5C9.6203 5 9.3065 5.28215 9.2568 5.64823L9.25 5.75V9.25H5.75C5.33579 9.25 5 9.5858 5 10C5 10.3797 5.28215 10.6935 5.64823 10.7432L5.75 10.75H9.25V14.25C9.25 14.6642 9.5858 15 10 15C10.3797 15 10.6935 14.7178 10.7432 14.3518L10.75 14.25V10.75H14.25C14.6642 10.75 15 10.4142 15 10C15 9.6203 14.7178 9.3065 14.3518 9.2568L14.25 9.25H10.75V5.75C10.75 5.33579 10.4142 5 10 5Z" fill="white"/>
</svg>

            </div>
          </div>
          <div className="cards__credit-cards__card">
            <Image
              src="/assets/mastercard.png"
              // width={250}
              // height={120}
              objectFit="fill"
              layout="fill"
            />

<div className="cards__credit-cards__card__title">
              <div>
                <div className="cards__credit-cards__card__title__subtitle">
                  Transact without bounderies
                </div>
                <div className="cards__credit-cards__card__title__title">
                  Get Card
                </div>
              </div>

              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 5C9.6203 5 9.3065 5.28215 9.2568 5.64823L9.25 5.75V9.25H5.75C5.33579 9.25 5 9.5858 5 10C5 10.3797 5.28215 10.6935 5.64823 10.7432L5.75 10.75H9.25V14.25C9.25 14.6642 9.5858 15 10 15C10.3797 15 10.6935 14.7178 10.7432 14.3518L10.75 14.25V10.75H14.25C14.6642 10.75 15 10.4142 15 10C15 9.6203 14.7178 9.3065 14.3518 9.2568L14.25 9.25H10.75V5.75C10.75 5.33579 10.4142 5 10 5Z" fill="white"/>
</svg>

            </div>

            <div className="cards__credit-cards__card__title"></div>
          </div>
        </div>

        <Navigation />
        </div>
    )
}