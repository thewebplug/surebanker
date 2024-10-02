"use client"

import Image from "next/image";
import Navigation from "../components/navigation";
import ProfileHeader from "../components/profile-header";

export default function Profile() {
  return (
    <div className="profile">
      <ProfileHeader />
      <div className="profile__inner">
        <div className="profile__inner__title">General</div>

        <div className="profile__inner__group">
          <div>
            <Image src="/assets/statement.png" width={25} height={23.71} />

            <div>
              <div className="profile__inner__group__title">
                Statements and Reports
              </div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>
        </div>
        <div className="profile__inner__group"
        onClick={() => window.location.href = "/profile/kyc"}
        >
          <div>
            <Image src="/assets/kyc.png" width={30} height={27.72} />

            <div>
              <div className="profile__inner__group__title">KYC</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__title">Security</div>
        <div className="profile__inner__group"
        onClick={() => window.location.href = "/profile/mfa"}
        >
          <div>
            <Image src="/assets/2fa.png" width={20} height={26.58} />

            <div>
              <div className="profile__inner__group__title">
                Two Factor Authentication
              </div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/password.png" width={25} height={34.04} />

            <div>
              <div className="profile__inner__group__title">
                Password and Pin
              </div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/transaction.png" width={25} height={18.14} />

            <div>
              <div className="profile__inner__group__title">Transaction</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__title">Help</div>

        <div className="profile__inner__group">
          <div>
            <Image src="/assets/feedback.png" width={15} height={23.68} />

            <div>
              <div className="profile__inner__group__title">FAQ</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/email.png" width={15} height={23.68} />

            <div>
              <div className="profile__inner__group__title">Email</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>

        <div className="profile__inner__title">Feedback</div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/feedback.png" width={25} height={28.6} />

            <div>
              <div className="profile__inner__group__title">Feedback</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/rateus.png" width={23} height={28.19} />

            <div>
              <div className="profile__inner__group__title">Rate Us</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/delete.png" width={25} height={26.77} />

            <div>
              <div className="profile__inner__group__title">Delete Account</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
      </div>

      <Navigation />
    </div>
  );
}
