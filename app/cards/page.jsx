"use client";

import Image from "next/image";
import ProfileHeader from "../components/profile-header";
import Navigation from "../components/navigation";
import { useEffect, useState } from "react";
import { handleClientScriptLoad } from "next/script";

export default function Fund() {
  const [option, setOption] = useState("");
  const [open, setOpen] = useState(false);
  const [blockCard, setBlockCard] = useState(false);
  const [blockCardOpen, setBlockCardOpen] = useState(false);

  const handleModalClose = (e) => {
    console.log("hello");

    if (e.target.classList.contains("cards__modal")) {
      setOption(false);
      setBlockCardOpen(false);
    }
  };

  useEffect(() => {
    const otpInputs = document.querySelectorAll(
      ".cards__modal__inner__otp-inputs__input"
    );

    console.log('otpInputs', otpInputs);
    

    otpInputs.forEach((input, index) => {
      input.addEventListener("input", (event) => {
        const inputValue = event.target.value;

        if (inputValue?.length > 3 && index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        }
      });

      input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && index > 0 && !input.value) {
          otpInputs[index - 1].focus();
          event.preventDefault();
        }
      });
    });
  }, [blockCardOpen]);

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
                0000 4567 XXXX XXXX
              </div>
              <div className="cards__credit-cards__card__title__title">
                ATINSE EROMHONSELE
              </div>
            </div>

            <div className="cards__credit-cards__card__other-info">
              <div>Expires</div>
              <div>09 / 23</div>
            </div>
          </div>
        </div>
        <div className="cards__credit-cards__card pointer"
        onClick={() => setOpen(true)}
        >
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

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 5C9.6203 5 9.3065 5.28215 9.2568 5.64823L9.25 5.75V9.25H5.75C5.33579 9.25 5 9.5858 5 10C5 10.3797 5.28215 10.6935 5.64823 10.7432L5.75 10.75H9.25V14.25C9.25 14.6642 9.5858 15 10 15C10.3797 15 10.6935 14.7178 10.7432 14.3518L10.75 14.25V10.75H14.25C14.6642 10.75 15 10.4142 15 10C15 9.6203 14.7178 9.3065 14.3518 9.2568L14.25 9.25H10.75V5.75C10.75 5.33579 10.4142 5 10 5Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="cards__credit-cards__card pointer"
        onClick={() => setOpen(true)}
        >
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

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 5C9.6203 5 9.3065 5.28215 9.2568 5.64823L9.25 5.75V9.25H5.75C5.33579 9.25 5 9.5858 5 10C5 10.3797 5.28215 10.6935 5.64823 10.7432L5.75 10.75H9.25V14.25C9.25 14.6642 9.5858 15 10 15C10.3797 15 10.6935 14.7178 10.7432 14.3518L10.75 14.25V10.75H14.25C14.6642 10.75 15 10.4142 15 10C15 9.6203 14.7178 9.3065 14.3518 9.2568L14.25 9.25H10.75V5.75C10.75 5.33579 10.4142 5 10 5Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="cards__credit-cards__card__title"></div>
        </div>
      </div>

      <div className="cards__card-request">
        <div className="cards__card-request__title">Card Request Status</div>
        <div className="cards__card-request__card cards__card-request__card-successful">
          <div>
            <svg
              width="45"
              height="44"
              viewBox="0 0 45 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                x="0.623047"
                y="24.1973"
                width="30"
                height="32.038"
                transform="rotate(-52.2963 0.623047 24.1973)"
                fill="url(#pattern0_6942_5171)"
              />
              <defs>
                <pattern
                  id="pattern0_6942_5171"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_6942_5171"
                    transform="scale(0.00271739 0.00254453)"
                  />
                </pattern>
                <image
                  id="image0_6942_5171"
                  width="368"
                  height="393"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>

            <div>Card picked up successfully by You</div>
          </div>

          <div>23 June 2024</div>
        </div>
      </div>

      <div className="cards__actions">
        <div className="cards__actions__title">Actions</div>
        <div
          className="cards__actions__card"
          onClick={() => setBlockCard(true)}
        >
          <Image src="/assets/saved-card.png" objectFit="cover" layout="fill" />

          <div className="cards__actions__card__title">
            Block <br />
            <span>Card</span>
          </div>
        </div>

        {blockCard && (
          <div className="cards__actions__warning">
            <div className="cards__actions__warning__title">
              Are you sure about this action
            </div>

            <div className="cards__actions__warning__options">
              <div
                className="cards__actions__warning__options__option"
                onClick={() => setBlockCardOpen(true)}
              >
                Yes
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0ZM9.91477 5.22725L6.5625 8.57947L5.08525 7.10227C4.86558 6.8826 4.50942 6.8826 4.28975 7.10227C4.07009 7.32195 4.07009 7.67805 4.28975 7.89773L6.16477 9.77273C6.38445 9.9924 6.74055 9.9924 6.96023 9.77273L10.7102 6.02273C10.9299 5.80308 10.9299 5.44692 10.7102 5.22725C10.4906 5.00759 10.1344 5.00759 9.91477 5.22725Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div
                className="cards__actions__warning__options__option"
                onClick={() => setBlockCard(false)}
              >
                No
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0ZM9.91477 5.22725L6.5625 8.57947L5.08525 7.10227C4.86558 6.8826 4.50942 6.8826 4.28975 7.10227C4.07009 7.32195 4.07009 7.67805 4.28975 7.89773L6.16477 9.77273C6.38445 9.9924 6.74055 9.9924 6.96023 9.77273L10.7102 6.02273C10.9299 5.80308 10.9299 5.44692 10.7102 5.22725C10.4906 5.00759 10.1344 5.00759 9.91477 5.22725Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {open && (
        <div className="cards__modal" onClick={handleModalClose}>
          <div className="cards__modal__inner">
            <div className="cards__modal__inner__title">
              <svg
                width="54"
                height="56"
                viewBox="0 0 54 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  x="16.1885"
                  y="0.833984"
                  width="40"
                  height="42.7174"
                  transform="rotate(22.2163 16.1885 0.833984)"
                  fill="url(#pattern0_6941_4658)"
                />
                <defs>
                  <pattern
                    id="pattern0_6941_4658"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_6941_4658"
                      transform="scale(0.00271739 0.00254453)"
                    />
                  </pattern>
                  <image
                    id="image0_6941_4658"
                    width="368"
                    height="393"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAAGJCAYAAACThGjuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAgAElEQVR4nO2dB3gVZfq+0wm9916kBEhyzkkQsCAq9oIlKooCyZlzkmAQBEUUjIq6qKiLa29rV1x7W3tb7OKCHRcEQRCk10Agef7fl8Dvz7qimcn55pnDvPd1PdfZva5dzbzzfnfmTGa+NyFBEFxmSClSAhHkhCxEgxFcp/JQKIIn1X9/OGjhRpVi9d8P7lGCOuyfVRAEQVAoKQ/VklZZp/4zapAtSubPqc/hWvrsn18QBMF3BMM4Wl1l/7uG0v7dqP//j+qfMzqhFEns4xEEQdjvUeJtocT7VG3E/Tsi/yBQgD7sYxMEQdhvCUVxmBLuiljK+/9iYbP6zGMfoyAIwn4GEoMWLlCCLTci7/+fSnU1Pp59tIIgCPsFuWPRXMn7ZcPi/u0tlQj7uAVBEOKaYBgDlVB/clPeu1Ou/t2Hs49fEAQhLtFXwUqkOwjy3nNPfFVWFO3ZdRAEQYgjShrVa3ntt71O/IEj7v/O+/KsuCAIQo0IZyenXbAqISGC1LqTkDlyA1vg+n74deyqCIIgeJzoeYmJ0e1a3nvSsN2NCFoVbIlXBsM4hV0dQRAEDzKhrpL1PXuLe++0Db7AFrjO+gFhdGVXShAEwUMU9lKS/nJf8q5KYhQHHPc1W+D6VsqnshGWIAhCFZFTVTb8obx3J6XOBPQ/ew1d4iELt7KrJgiCQKREXcVGZtVE3HunfqsZCIZ30iUeiGAku4KCIAgEIp1UPrYr7z1pnfkPusD1nimy8ZUgCD4jcmJCgrXOqbyrE0X3YV/QJR608JX6rMeuqCAIgmFKU5S4r1CpqJ28q5OcNh79zlpNl7jKo+zKCoIgGCTaXol7TizEvXfqNr8KgfxytsARiqKAXWFBEAQDRIYqef8Sa3nvScuMR+kCD0ZQllOIALvSgiAIsSJRCXayyi5T8t6TLkM/oktc5T8qjdlFFwRBqCWRFiqvmhb3niSllKBv3gq2wHWeZFdeEAShFoQPUVJd7pa89yS9yTRkjyljC1ynhH0GBEEQ7JKYkGBdoGRa7ra896RZj3vY8tbZEYpiAPtkCIIg1JCSRkqgT7HEvXc6H/ovtsD18+FL1WcL9lkRBEH4EyJBdeW9iC3uPUlKHos+p/7kBYm/rIcws8+OIAjCPohElLy3M4X9e6nTaCqyR2+jS1xlMvsMCYIg/Ib8hkqUj7NF/Udp0vk2JdBK9lX4zhwLQ9hnSxAEYTcFfZQgv2YLuibpOPhN9hW4fslnpfpsyz5rgiD4nuh5Soxb2GKuaRKTitDrpIV8iVt4Jy8PyeyzJwiCLxmVnuBg724vJK3BZGSdt5kucZWr2GdREATfET1AiXA+W8S1SeOOtyBkce+HhyxUBCI4hn02BUHwDZHhKuvZAo5F2ue+wr4C11mdU4SO7LMqCMJ+TdXe3TPY0o1pqoYif8sWuP6j5gfqM5V9hgVB2C8pUleI1od04RpIat1JyBy5ni9xCzeyz7IgCPsdkeNV1rJFazIN285EMFzBlnhlMIxT2GdbEIT9gCGlSGnQ9oaHleAq2YJ1I20Cz7IFrrNBpTv73AuCEMdkFqJVMII3ehzzJfSwYLZc3UkU3Y+axxa4zvyBE1CX3QOCIMQhoSgOUxJZsUcobbKf9oBc3UlynfHoP2INW+D6j5p3svtAEIS4AolKHpOVPHb9l0zCFWjQ9ga6XN1K/VbXqmPeSZe4+kV6HrsjBEGIA5QwWihxv7IvmWSeuxGp9S6iy9WttOo3my/wCLZkR5HB7g1BEDxMjoXckIXFfyaUnid8j8TEQrpc3Uq3I+eyBa4fLfx+cD4asntEEATPgUQliAtCetxXDYXSLudFuljdSnLqOPQ94xe+xCN4nN0pgiB4iAElaKTk8KRtoViVaNRxFl2ubqVusysRyN/hBYlH2D0jCIIHyClEQElhoVOZZI3agrQGU+hydSstej/sBYGXqc8gu3cEQSCin2xQIthaW6H0Hv4jEpOK6XJ1K10O+5Au8d2/dBuze0gQBJfRL4aoq7j7YimUDgNfp4vVrSSljEXGacvYAtfbz74gQ5EFwUeohd87aOGr2AulEk263kGXq1tJbzwN2aPLvCDxCeyeEgTBBQIRjFSLfospmWSP3oo6jS6jy9WtNO1+N1/gEZSHojiI3VuCIBiiRwnqqIU+yw2hZJy+rOoWA1uubqXTwe+xBa7/qLlMfbZg95kgCDEmkI/OQQufuCkULTW2WN1KYnIx+py6hC7xkIU3ZSiyIOxH5Fg4SS3sdQyhNO95P12ubkU/Rqkfp/SAxC9j95wgCLVE792trrpnqEVdyZJJIH870puW0uXqVhp3uhX6D7lkgVeEohjG7j9BEBwyIIwOu2cq0q8I+56xsuoVdLZc3Yp+lJJdcyXxVYF8tGP3oSAINgmGcbiS90q6RPZK18M/pYvVrSQmFaLXST/Qa6564F39LYzdj4Ig1AD9xyt15XVF1VdoD0j7t9Gvn7Pl6lbS6k9G1nmb6DVXuZbdl4Ig/AnZY9AyaOF1DwhjnwkUlKNei6vpcnUrDdvdhKDFH4ociuJkdn8KgrAPAhEcqhbqcraga5J+Z61CctoFdLm6Fb3VLrvm+gmkAWF0ZfepIAj/xf/t3V0eywV/7rVmhdL96HnwzVDkxCgOOO4busT1OwAZeUhjd6wgCIrcsWiuFuXLsVzkuYXAXS8CFZXAdY+bFUqr/rP5cnUpKXUnIvOc9XSJq8xi960g+J5ABDnBCH6M5eIeNhH45Fv8Hzt3AWNmGLwiDO9CgzbX0eXqVuq3nlF1zGyJB8M4h92/guBb9BSWkI1xZzVJZCawegP+h1/WAodPMCeT/mevQ0r6hXS5upU2WU/TBR6ysFl99mb3sSD4Cj3EVi2+J2K5mHOiwC1PAxUV/yvvPfzry+r/nSmh9Dz+Ox8NRY6i+1H/5ks8gi9V6rF7WhB8QXYUGUre38RyER9xIfDB1/sW995oyZsUStvAcx6QqztJrjMe/UasZgtc/1HzXnZfC8J+T6zGne0d/ZTJ8jU1k7dGX6EX3WRQKHoocoeb6XJ1K/VbXotgwU6+xMMYze5vQdgvGTIK6WqR3RPLBatvhcycDZTvrLm897B2I3D0ReZkknnuRqTWu5guV7fSqu/jfIFHUJYbRja71wVhv0Itqp5qgc2P5WI9dBzwxuf2xb03n31f/aihKaH0PHFB1T4ibLm6la5DP6ZLPGThhwElaMTueUHYLwhEcKpaWBtiuUjPng4s+7V28t7D3S+aFUr73FfoYnUrSakl6HvGCr7EI5jN7ntBiGtMjTu7/H6gbEds5K3RL/mUzDIpk0o06XIbXa5upW6zKxDI38EWuP6jZjF7DQhCXKIWUCeVj2K5IAePBZ6fEztx783GLcAJU8zJJHvUVtRpeCldrm6lWY976QIPWdiuXxBjrwVBiCvUojkx1uPOTrscWLjcjLz38NWPwMBic0LpPXwxEpOK6XJ1K12GfMCXeAQ/6S0a2GtCEDyP3mjfxN7dU+8Dtm03K+89PPy6WaF0HPwmXaxuJSl5LPqcupQtcJ0X9SZp7PUhCJ4lK4r2aqH8K5YLb5C6Gn78LXfEvYfKSuCiO8wKpWm3O+lydSt1Gk1F9ugytsD1/fBJ7DUiCJ5ELZChaoH8EssFp+9Hf73YXXnvYdNW4OTLzMkkMGY70ptcTperW2na7W4vCHxnMIxD2GtFEDwEEtXimByMYFcsF9uE24CNWzny3sMPy6r/aGpKKBmn/4yklPPpcnUrHQ962wsS/yW3GG3Yq0YQ6KgF0ULl1VgusAGFwAOvVt/G8AJPvWdWKJ0P/RddrG4lMakIvU5eSJe4ytt6zip7/QgCDf1VNGTh51gurGMnA/MXspX9v+hnzk0KpXnPB+hydStpDfRQ5C1sgevX7UvZa0gQCJgZd1Z4U/W+JF5EP/2SV2pOJoH8ctRtfhVdrm6lcae/Qb/YRJW4hQp1EXI0ezUJgmvovSWUvP8Ry4W097gzL7NkJXDIOHNC6XvmSiSnjaPL1a20H/AqV+DV+VU/OcVeV4JgHNXsQSXvRbFcQEdOBD76hq3mmvPqp2aF0u2Iz+hidSt62IUeeuEBies3hVPZ60sQjKH37lby3hbLhaO3gF2wlK1k+1zzsFmhtMx4lC5Xt5JadxIyR25gC1zfTrmevcYEIeZkFKOBEvdjphZO9MY/HnvmRXaUA+dcbU4meiBCvRbX0OXqVhq2uxFBq4It8cpgGKew15sgxAzV1L2DEXxtevHc+QJbyfZZugoYcoG5mvQ/ew1S0ifQ5epW2gafZwtcZ31OEbqx150g1JocC+eqht7ixsLJjdZ8hqWXeG+e2aHIPY6ZDz0smC1XV5IYxQHHfs0WuL6VMm/gBNRlrz9BcMTucWcx37v7zzJ0ArDCxixLr3DjbLN1aZ35FF+uLiWlzoSqbx50iUdwG3sdCoJtstVFkL4CYS2cUX9xNtOSyc5dQP515moSDFegQZsb6HJ1K/Vb/UUdM38osv4Gyl6PglBjVNMOV1nPXjg3/4OtZPusXAcccaG5mmSO1EORJ9Hl6lZaZz5JF7i6kNkcKEAf9roUhD9E790dtDCDvmD2XPlEgbe+YCvZPp98Z3go8gnfVT03zZarO4mi+7Av6L2o1sVX6rMee40Kwu+SU4SO6krjQ/ZC+W0OGw/8vJqtZPvc9pzZurQNveABubqT5LTx6HfWr/ReVHmUvU4F4X9QjXl8MIK1Hlggv5sRVwHby9lKtofeCqD4ZoN1sSrRqMNf6XJ1K3WbXVW1Rwy7F0NRFLDXqyBUobfQNDHuzESufYStZPvozbiOudhcTbLO3YTU+hfT5epWWmY8Qu9DdaFTllOIAHvtCj4nsxCtVDO+wV4QdvLSR2wl22fuguo9zU3VpPfwRVX7arPl6la6HPYRvQ9V/qPSmL2GBZ+SY2GIasAVHlgItnJwCbBoBVvJ9rnvFbN1aX/gq3SxupWklBL0zVtB78WghedkKLLgMmbGnbmZU6cBW8vYSraHniZ04W0m61KJJl3uoMvVraQ3mYbsMfyhyCrj2Cta8Am5Y9FcifsVDzR9rXPpPWwl20fP8zzxUnM1yR69FXUaXUqXq1tp1v0eeh+qlKtvs4PZa1vYz1FNlhuysNgDDR+zPPM+W8n2+XoxMLDYXE36nLIEicnFdLm6lc6Hvk/vw6CFpeqzBXuNC/sp6qo7ohpsh8km1lIquB648Ulg9jvVGzt98i0w5yvgxQ+Bu18ELroTGDYpdv/OQWOB735iK9k+j71pViidDnqHLla3kpQ8Fn1O/ckLEn85oRRJ7LUu7EfocWequZ401bT6Lcmim4DXPgO21PCetH42+pvFwPWPV7+gU9ufYfhUYPM2o741wsV3mhVKswPuo8vVrdRpdBmyR2+jS1zlEvaaF/YT9HOqoepHnYw069i/At/XcnqOlr6+Mj+kpHY/y4Tbqv9IGE9s3Q6cdrk5mQTGbEd6k1K6XN1Kk863gT0UWT8YkGPhSPbaF+IcPe5MNdRWE02qt3nVV9yx5Je1QMms2v1cj74Z25/JDf7zM3DQ+eaEknH6ciSlnE+Xq1vpOOhNqsB3S3xlIB/t2A4Q4hC98XzQwr2mmlO/zq5lawJ9a0VPonc6EOHAImDeQjM/m0me/ZdZoXQ9/BO6WN2Kfpmp10kL+RK38I5+w5ntAyGOyClEr927pRlpysjM6q/9pnluTvVEHic/43GTgfWbzf+MseaKB8wKpUWvB+lydStp9Scj67zNXpD4dLYThDghGMY5er9iU804eoY78t7DP951/rPqP6pWxNn9cD0UecR0czIJFJSjXovpdLm6lYbtb+IPRbZQkWPhWLYbBA/TowR1QobHnemNmFZvcF9qNzzh/GfWr63HGz+tAg4dZ+489jtrFZLTLqDL1a20y32ZK/BI1f3wtVlRdGF7QvAggXx0Vl/TPjHZgPp+tH6Wm4EeTTbG4WgyfQvmY9LPXRv0H4dNns9uR35OF6tr0UORj/uWLnGVjzPykMb2heAh1Fezk9RXtHWmm2/afVyhrarFaDL9wtCv67k/vxP+8qjZc9qq3+N8ubqU1LqTkDlyPVvg+kr8JrYzBA+w17izStNNp5/qWO6BKTi1GU1mzQR2VbCPwB47dgIjrzEok/AuNGh9HV2ubqVh25lVg6DJEq9UF12nsf0hEBkQRgcl7zluNZ1+MsIr3PG88+O47Vn2T2+fFWuAwyeYO7f9z16HlPQL6XJ1K22yn2ULXF+Fb9JPirE9IhAIhnG4fkHAzYbz0jPVFRXVT5c4OQ59H//deewjsM/7850/E1+T9Djmq6r7xGy5upMouh81jy5xlfn6XQ22TwSXYI07O/oi772avnYTcKzD0WRDxwPL17CPwD5/fcrseW6T/YwH5OpOkuuMR78Rq9kC148X3sX2iuAC2WPQUp3w1xhNdqWHbp/szdwfnI8mO+9aoHwn+wjsoe/fh28wd571s9L6mWm2XN1K/VbXIhjeyZd4FOex/SIYJBDBoepEL2c1mH6Rxqv8/Z/Oj2vmbPZPb581G4GjYrgF72+Tee5GpNa7iC5Xt9Kq32y+wCPYkhtGX7ZnhJhTNe7skqCFncwG+3wBW1v7Rt/aGX+r82N7cy77COzzaS2exKlJep6wAImJhXS5upVuR85lC1zfSvkmoxgN2MYRYsTutyofpTeWyk8r2cr6Y2ozmkxvXbv4F/YR2OeuF8ye83Y5L9HF6laSUkvQ94xf6OtM5RG2d4QYoE5kqvqN/IIHGqoqjFfn7VKb0WRnXgmU7WAfgT30/i56D3Zj592qRKOOs+hydSt1m12JQP4O+lpT6z7K9o9QS/RvYnoj7ZVVcfIG4xNvOz/G6Q+xf3r71OZJnJoka9QWpDWcQperW2nR+yH6WgtGUKY+g2wHCQ5RJ28cu4l+m0Ur2KqqOVPvc36celZnvPHlouq3ZE2d+97Df0Rikn+GInc57AP6elNZmDUKTdguEmyidypTJ2+LBxrovxJPG0FtLQNOmebsOAePBRYsYx+BfR581ez57zDwDbpY3UrVUOTTltLXnL6Fqh9iYDtJsIGX7nvvnUfeYCvKHrUZTablX9OBzF5BP4kz6Q6TPVCJpl3vpMvVrdRpPBXZo8vo607lQraThBqSYyHXAw3zu5l8F1tR9nl+jvPjnXI3+6e3z6atwEkOn8SpSbLHlCG9yTS6XN1K0+5309edSrnywmC2m4QaoK6+H/ZAw/xuhlwQf28tamozmszLLy/tC337Z9BYc32QcfoyJKWMpcvVrXQ6+F362gtGsEy/hc32k/AHDM5Hw6CFbexm+aO8N5+tJ/ts2w6cfJmz4x1UDHy7hH0E9pn9jtk+6HTIe3SxupXE5GL0OWUJfe2pvJpQiiS2p4R9oE7QcA80yR+mZBZbTc6Yu8D5MZ8wBdiwhX0E9plWiydxapLmPe+ny9WtpDW4BFnnbaGvP5WpbE8J+0CdnL96oEH+MHor0/mL2GpyRm3+wKdf0/faTox/hh44fXqpuV4I5G9HetNSulzdSuNOt0L/IZe5/oIR7ApEcATbVcLvELTwDlvQNYneCS/eZKZZsLR2x/3w6+wjsM/C5c6fxKlJ+p6xEsmp4+hydSsdBr5GX396BkAgH+3YvhJ+gxL4UnZz1DSz32aryRn5Dgci6+gta7/4gX0E9vnnJ2Z7oesRn9LF6lYSkwrR66Qf6OtPSfxdPUqR7SxhL3a/PktvjppEX9Xpq7t4o7Z/3NNbuOqtXOONKx802w8t+jxMl6tbSa2nhyJvpK9Blb+wnSXshb6/5YGmqHFOu7z6jcd44pe1tT/uwpuqx7nFEzvKgbOnm+uFQEE56rW4mi5Xt9Kw3U1Vgy/Ia1APMR/O9pawG68/Qvh7uSQOX3Y5JgYbP939Ivso7LN0VfWz/KZ6od9ZvyI57QK6XN1Ku9CL9PWnLvrWBvLRme0uIaHqJZ7F7IZwkiffYavJHiW31P6Yc6PAR9+wj8Q+b3xuthd6HD0felgwW66uJDGKA477hr7+lMQ/1XMD2P7yPepkvM1uBifRL7t8E0cvu1z9cGyOe9jE+Nlid2+uf9xsP7Tu/yRfri4lpe5EZJ6znr4G1bf3W9j+8j3qRNzAbgSn0ZNw9ESceGDW07E77jEzgJ272EdkD/3zjqnF0zh/KpPwLjRocx1drm6lfqsZVcfMXoPBMM5hO8zXqJNwPLsJapMJt8XH8+G3Phvb49a/EOKNleuAIy401wv9z1mHlPQL6XJ1K62znqKvP3UVvjE3jJ5sj/mWIaOQHrKwmd0ItclDr7HV9OdcF+NbCPrt1Le/YB+VfeZ8VX0v31Qv9Dz+Ox8NRY6i+1Ff0NefyvyBE1CX7TLfogR+lweawHH0yy7//g9bTX+MfnIm1sd92Hhg+Wr2kdnnb8+Y7Ye2gec8IFd3kpw2Hv3OWk1fg8EI7mN7zLfkFKKfkngFuwlqE6+/7HLGFWaO+9xrgR1xtt2ufp696CaD/aCHIne4mS5Xt1K3+VUI5JfT12AwjNFsl/mWoIUH2Q1Q2xTfXD0x3WvorWVNzo687jH2Edpnrfple/RF5mqSde4mpNa7mC5Xt9Ky72P09aff6s4NI5vtMl+iN6pRV+Hr2E1Q29zlwZdd3ptn/rhf/ph9lPb5fAGQW2iuJj1PXFC1jwhbrm6l69CP6etPXQh+r2cMsH3mS9QJOJvdALWN/gOZ1wYh12Y6T01zSAnw4wr2kdrnnpfM1qX9gFfoYnUrSakl6HvGCvoaVBeCT7Bd5lvUb9B76Q1QyxzpoZddNm8DDi5x57j1ffayHewjtoe+5aUHdpirSyWadLmNLle3UrfZFQjk76CvQeWRYrbLfIl+rFAV/wt2A9Q2oz3yssu9L7t73Jfdyz5i+2zcApw4xVxNskdtRZ2Gl9Ll6laa9biXvv5UygMRDGL7zJcECtBDnYANHmiCWmXWU1wxrd8MDB3v/nE/P4d73E746kdgYLG5mvQ+ZTESk4rpcnUrnYfMoa8/lZ9yx6I522e+RBU/zwMNUKuwX3aZang+5L6ip8N/v5R33E555A2zdek4+C26WN1KUvJY9Dl1KX0NqryUkIBEts98id6sxgMNUKvoK2C9panbvPIx97iHT62+/x5P6C0RLrrTbF2a9biPLle3UqfRVGSP3kZfg8EILmK7zJeo4qeq4n/AboDaRg+BcHPTq68Xm50JWdNMvsu9Y44VeljHqdPM1SQwZjvSm1xOl6tbadrtLnofqgvBncEwDmH7zJfkFKGjOgmr2U1Q2+g3FvUfy0zz3U+c+977SjzOEf1hGTB4rLmaZJz+M5JSzqfL1a10HPw2vQ+VxH9Rn23ZPvMloSiOi/dX7XX0Y3bLfjUnHr1R0yHj+Me5d/QboPMXmjtmUzz9ntm6dD50Dl2sbiUxqQi9Tl5I70WVt/PykMz2mS9Rxf+LBxqg1tFXx69+GlvZ6NmPentXk28V1ibHTa5+IibeuPx+s3Vp3vMBulzdSlqDycg6bzO9F9WF4BVsl/kS/ZszGMEb9AaIUfTLIwtq+aSG/qPbW3OBUwzes41Vxt0SH/um743eQybP0CZgOlVDkZtPp8vVrTTudEvVRl/UXlTf5INhHM32mS85sACt1UlYwZZRrKIfM9SzKvWjhvoquqas2wTMfsesXEzkgVeNudYYP600e1uq35mrkJw2ji5Xt9J+wD/pfShDkYmEojhMnYBd7CaIdfRTI1rmdzxffYtl7gLg2yXV+fDr6pdjbpxdPc7Mq7dK/iz65/7kO7aS7fPap2br0u3Iz+hidSt62IUeesHuRZWPMvKQxvaZL1HFn+qBBpA4yLBJwOoNbCXb55oYDYXeV1pmPEaXq1tJrTsJmSM30HtR5Qa2y/xJKZLUVfgrHmgAiYNEb6weqhBP6KEV51xtribBgp2o1/IaulzdSsN2MxG0Kti9WBmI4FS2znzJwAI0C1lYzJaRxFn0raJ4Qz8COuQCczXpf/ZapKRPoMvVrbQNPkfvQ5X1OUXoxvaZL1HFP1BlhweaQGIzet/0D75mK9k+782v/uOzqbr0OGY+9LBgtlxdSWIUBxz7Nb0X1YXgPBmKTEIVfwK9ASSOMnQCsGINW8n2ufFJs3VpnfUUX64uJaXOBPQfsYbeiyq3s13mU5AYjOApDzSAxEFG/QUoj7OhyLsqgPzrzNUkGK5AgzY30OXqVuq3+os65p30XsyxcC7bZr5Ez8DTs/DYDSBxlpueZCvZPqvWAUdcaK4mmSM3IrXeJLpc3UrrzCfpfai+zW/OjiKD7TNfEihAppL4NnoTSGxH31N+i7hvulP0M+1GhyKf8H3Vc9NsubqTKLoNm0vvRfVt/uvMkajP9pkvUcWPsBtA4iyHjTe70Zcpbn/ObF3ahl7wgFzdSXLqOPQ9YyW9F9WF4GNsl/kWVfwH2Q0gcZazrgK229hSwAvoocjFNxusi1WJRh1m0eXqVuo2uwqB/HJ6L6qE2S7zJfrrT8jCNx5oAImDXPMIW8n2WbsJOOZiczXJOm8TUutfTJerW2nZ5xF6H6pv82XqM8j2mS/JDaOnOgGb2E0gcZaXPmIr2T5675oBBu+H9x6+qGpfbbZc3UqXwz6i96HKf1Qas33mS3IsnOWBBpA4yMElwKIVbCXb5/5XzNalw4Gv0cXqVpJSSpCRt5zei+pC8HkZikwiZOEudgNInEXPpdTzKeMJvd/5hbeZrEslmnS5gy5Xt5LeeBqyx5TRe1FlHNtlvqRHCeqo4n/ugQaQOMiUe9hKto8eXn3ipeZqkj16K+o0upQuV7fSrPs99D5UKQ9FcRDbZ75Eb9yuN3D3QBNIHOSZ99lKts83i4GBxeZqknHaMiSljKXL1a10PuR9eh8GLSxVny3YPvMlgQhOVMWvZDeBxH4GjQW++4mtZPs8/pbZunQ6+B26WN1KYnIx+py6hGrrPEoAACAASURBVN6LegtrvZU122e+RBX/JnYDSJzl5MuAzdvYSrbP1PvM1qX5AffT5epW6jS6DNmjt9F7UV2JT2G7zJcMKUWKOgH/YjeAxFkm3Bp/Q5G3bgdOu9xcTQJjtiO9SSldrm6lcedbof+QS+1FCxU5Fo5k+8yXDAijgzoJq9kykjjLo2+ylWyf//xcPe/UVE0yTl+OpJTz6XJ1Kx0GvUHvQ/VtfmUgH+3YPvMlgQiO2B+HIvshBxYB8xaylWyf5+aYrUvXwz+hi9WtJCYVotdJC+m9GLTwTl4ektk+8yWq+NPZDSBxlmMnA+s3s5VsnyseMFuXFr0fpMvVraTVn4ys8zbTe1FdCF7Ndpk/0UORLbzObgCJsxTdFIdDkcuBEdPN1SRQUI56LabT5epWGra/yRNDkUNRnMzWmS/JLEQrdQKWs2UkcZb7XmYr2T4/rQIOHWeuJv3OWoXktAvocnUr7XJepvdhyMK6rCi6sH3mS3IsDFFX4jvpTSCxHT0U+eNv2Uq2z+ufma1L96PmwVdDkY/7lt6LyiGfZOQhje0zX6JOwCXsBpA4y7CJwK/r2Uq2z4zHzNalVb8n+HJ1KSl1JyJz5Hp6L6or8ZvZLvMpSFS/QZ+jN4DEUayZ1UOG44mdu4AxM8zVJBjehQatr6PL1a00bDuzahA0uxfVN/rT2DbzJf2L0DQYwY/sBpA4y63PspVsn1/WAodPMFeT/mevQ0r6hXS5upU22c/S+1DPIMgpRC+2z3yJ+u2Zq74GbWc3gcR+9FDkd+exlWyf9+dX/+ym6tLjmK+q7hOz5epOolX3/9m9qDJ/4ATUZfvMl6jil3igASQOMnQ8sHw1W8n2mfWU2bq0yX7GA3J1J8l1xqPfiNX0XlS5m+0y36KK/4gHGkDiIOddC5TvZCvZHvr+ffgGczXRz0o3an8zXa5upX7LaxEs2EnvRZVRbJf5koxiNFDF/84DDSBxkBueYCvZPms2AkdNMleTzHM3IrXeRXS5uhX9FA67D1W25IbRl+0zX6KK319lqweaQOIg//yErWT7fPY9kGtwKHLPExYgMbGQLle30vXwj+l9GIxgwYASNGL7zJeEoihgN4DEWQ4pARb/wlayfe560Wxd9JuLbLG6laTUEvQ94xd6L4YsPMF2mW9RJ+Dv9AaQOMqZVwJlO9hKtkdFJXD+LIN1sSrRuOMtdLm6lbrNrkQgfwe9F5XEo2yX+ZIho5Cuvgb9m94AEkeZ/hBbyfZZtwk49mJzNckatQVpDafQ5epW9C6N7D7UjycHwwixfeZLsqM4IGhhI70JJI7ywgdsJdvny0VmhyL3Hv4jEpOK6XJ1K10O+4DehypLBhagGdtnvkT99jzDAw0gcZDBY4EFS9lKts+Dr5mti55swxarW0lKHos+py2l96LKi3rrDrbPfIkq/m0eaACJg5wyFdhSxlayPfT8z0l3mKxLJZp2vZMuV7dSp/FUZI8uo/eiyoVsl/kSVfjUkIUPPdAAEge55G62ku2zaStw0qXmapI9pgzpTabR5epWmna7m96Hu7evPpjtM1+iCt9JnYA17CaQOMs/3mUr2T4LllXfBjJVk4zTlyEpZSxdrm6l08Hv0PswGMGy7DFoyfaZLwmGcUJIj1LygJAk9jKoGPhmCVvJ9nnyHbN16XzI+3SxupXEpCL0PnkRvRfVt/k3ZSgyCVX86+kNIHGU4y8BNmxhK9k+0+43W5fmPf9Ol6tbSWtwCbLO20LvRZVpbJf5kiGlSFHFf98DDSBxkPG3Vv+RMJ7Yuh3IKzVXk0D+dqQ3LaXL1a007nQr9B9yqb1ooUJ9HsX2mS/JLUaboIVf2DKSOMtDr7GVbJ9Fy4GDzjdXk75nrkRy6ji6XN1KhwNfo/ehkviqrCjas33mS9QJGBqMYBe9CSS2M6AQ+OIHtpLtozfqMlmXrkd8SherW0lMKkSvk36g9+Lup9tS2T7zJUrgpfQGkDiK3sJVb+Uab1z1oNm6tOzzCF2ubiW13iRkjtxI70X1bX4G22X+pBRJ6gS8ym4AibMU3gRUxNlQ5B3lwNnTzdVED0So1+IaulzdSsN2N1YNviD3on6ybThbZ75EP9Opvgb9zJaRxFn0Nq7xxtJVwJALzNWk/9lrkFJnAl2ubqVt6AV6HyqHrBsQRle2z3xJMIyB6iTsoDeBxHZyo8BH37CVbB89yNnoUOSj50MPC2bL1ZUkRnHAcV/TezEYwac9SlCH7TNfErQwid0AEmcZNhFYtZ6tZPvoEXIm69I680m+XF1KSvpEZJ6znt6LSuJ/Y7vMpyBRnYBn2A0gcZbRM4Cdu9hKtof+ecdcZ64mwXAFGrS5ni5Xt1K/1Qx1zPyhyOob/Tlsm/mSrFFooq7EF7EbQOIss55iK9k+K9cBR1xorib9z1lXdXXKlqtbaZ31FL0PQxY2BwrQh+0zX5IdRZaS+DZ6E0hsR99TfvsLtpLtM+er6nv5purS8/jvfDQUOYruR31B70XlkK/UZz22z3yJKnwRuwEkznLYeODn1Wwl2+fWZ83WpW3wOQ/I1Z0kp41Hv7NW03tR5RG2y3xLMIKHPNAAEgcZcRWwvZytZHvo59mLbjZYF6sSjTrcTJerW6nb/CoE8svpvRiIYAzbZb4koxgNQha+YTeAxFmue4ytZPus3QgcY3Io8rmbkFr/Yrpc3UrLjMfofaguBMtyChFg+8yX5IbRV52ELewmkDjLyx+zlWyfzxcAuYXmatLrxB+q9hFhy9WtdBn6Eb0P1YXgDwNK0IjtM18SimIEvQEkjnJICfDjCraS7XPvy2br0n7AP+lidStJqSXom7eC3osqs9ku8y1BC/d6oAEkDnLGFUDZDraS7VFRCZTcYrIulWjS5Xa6XN1K3aZXIJC/g96LwQjGsl3mS4aMQro6AXPZDSBxlsvuZSvZPhu3ACdOMVeT7FFbUafhpXS5upVmPe6l96FKeSCCQWyf+ZJAAXqoE7DBA00gcZDn57CVbJ+vFwMDi83VpPcpi5GYXEyXq1vpfOgceh+q/JQ7Fs3ZPvMlORZOCslQ5LjMoLHA90vZSrbPo2+YrUvHwW/TxepWkpLHos+pP9F7UeUlvXUH22e+RBV/lgcaQOIgw6cCm7exlWwPPf/zojvN1qVZj/vocnUrdRpNRfbobfReDFm4mO0yX6KKnxq0MIfeABJHmXwXW8n22VoGnDrNXE0CY7YjvcnldLm6lSZdbgN7KLJyyM5ABIeyfeZLcorQUZ2E1WwZSZzlibfZSrbPD8uAwWPN1STj9J+RlHI+Xa5upePgt+h9GIxgpfpsy/aZLwlFcZz6GlTBbgKJ/RxYBMxfyFayfZ5+32xdOg+ZQxerW0lMKkKvkxfSe1Hl7bw8JLN95ktU8a/1QANIHOS4ycD6zWwl26f072br0rznA3S5upW0BpORdd5mei+qXMl2mT8pRZL6GvSGBxpA4iDjbql+aSae2LYdyLvCXE0CBeWo13w6Xa5upXGnW6o2+qL2ovomH4jgGLbOfMmBBWitTsIKtowkzvL3f7KVbJ+fVgKHjDNXk35nrkJy2ji6XN1K+wGv0PtQXQiuDeSjM9tnviQUxWHqBOxiN4HEfvTGUZ98x1ayfV771Gxduh35GV2srkUPRT7+W3ovqnyUkYc0ts98ifoadJkHGkDiIMMmAas3sJVsn2seMVuXln0f48vVpaTWnYTMkfyhyCoz2S7zKUhUV+HPe6ABJA4SmVk9VCGe2LETGHmNuZoEw7tQv/UMulzdSsN2MxG0Kti9WBmI4FS2zXzJwAI0U1fii9kykjjL7c+xlWyfFWuAoRPM1aT/2WuRkj6BLle3okfPsftQZX1OEbqxfeZLQlEMUCdghweaQGIzerDwB1+zlWyf9+ZXD3Q2VZcex3wJPSyYLVdXkhhFj2O/oveiuhCcN3AC6rJ95kuCEYynN4DEUfTV7PI1bCXb56YnzdalddZTfLm6lJQ6E9B/xBp6LwYt3MF2mW9REn+K3QASZxn1F6B8J1vJ9thVARRcb64mwXAFGrS5gS5Xt1K/1bXqmHfSezHHwrlsl/mSwfloqH6Dfs9uAImz6CvaeGPVOuDIieZqkjlyI1LrXUSXq1tp3f9Jeh+qbMmOIoPtM18SKECmkvg2DzSBxGb0PeW35rKVbB/9TLvJocg9T/geiYl+GYocRbdhc+m9qC8E9QUh22e+JBhBhN0AEmfRbzsuWclWsn3ueN5sXdqFXvSAXN1Jcuo49D1jJb0XlcQfY7vMt6gT8AC7ASTOctZVwPZytpLtofd3Kb7ZYF2sSjTqMIsuV7dSt9lVCOSX03tRJcx2mS/JHIn66kr8aw80gMRB9BuP8cbaTcCxF5urSdaoLUhrMIUuV7fSos/D9D5UDilTn0G2z3xJbhg91degjewmkDjLSx+xlWyf+Yuq9z43VZPewxchMck/Q5G7HPYhvQ9V/qPSmO0zXxKI4EwPNIDEQQ4uARatYCvZPnq3RZN16TDwNbpY3UpSSgky8pbTe1Fv2SFDkUmo4t/JbgCJs5wyrXo+ZTyhhyJPvN1kXSrRpOsddLm6lfTG05A9pozei+rb/AVsl/mSHiWoo07A5+wGkDjLlHvYSrbPxq3AiZeaq0n26K2o0+hSulzdSrPu99D7UKU8FMVBbJ/5Er1xu97A3QNNIHEQPZsy3vhmMTCo2FxNMk5bhqSUsXS5upVOh7xH70N1Fb5UfbZg+8yXBCI4URW/kt0EEvvRIvx2CVvJ9nnibbN16XTwu3SxupXE5GL0OXUJvRfVheArerQj22e+RP0GvZHdABJnOfkyYPM2tpLtM/U+s3VpfsD9dLm6Ff0YpX6ckt2LSuKXsl3mS4aUIkWdgH+xG0DiLBNurf4jYTyxdTtweqm5mgTGbEd601K6XN1K4863Qv8hl9qLFipCUQxj+8yXDAijgzoJv7JlJHGWR99gK9k+C5cDB51vrib6UTv9yB1brm6lw8A36H2orsJXBvLRju0zXxKI4AgZihyfGVAIzFvIVrJ9np9jti5dD/+ULla3kphUiF4n/Yfei8oh7+pv9Wyf+RJ1Aq5iN4DEWY6dDKzfzFayfa58wGxdWvR+iC5Xt5JWfzKyzttE78WQhWvYLvMnpUgKWnid3gASRym6KQ6HIpcDI6abq0mgoBz1WlxNl6tbadj+Jk8MRQ5FcTJbZ74ksxCt1G/Qn9kykjjLvS+zlWyfn1YBh44zV5N+Z61CctoFdLm6lXY5L9H7UDlkXVYUXdg+8yWBCAaF9FtW7CaQ2I4eivzxt2wl2+f1z8zWpfvR8+CnocgHHPctvRfVt/lPMvKQxvaZL1EnYDK7ASTOMmwi8Ot6tpLtc91jZuvSqt9svlxdSkrdicg8Zz29F1X+ynaZT0GiKv6zHmgAiYNYM6uHDMcTO3cBY2aYq0kwvAsN2lxHl6tbqd96RtUxs3sxFMXpbJv5kv5FaBqM4Ed6A0gc5dZn2Uq2zy9rgcMnmKtJ/7PXISX9Qrpc3Uqb7Gfofagcskl99mb7zJfkWMgNWdjObgKJ/eihyO/OYyvZPv/6svpnN1WXHsd+VXWfmC1XdxJF96P+Te9FlS9V6rF95kuUwM/3QANIHGToeGD5araS7TPrabN1aZP9rAfk6k6S64xHvxGr6b2ocjfbZb5FFX+2BxpA4iDnXgvs2MlWsj30/fvwDQbroocit7+ZLle3Ur/ltQgW7KT3YiiKEWyX+ZLB+WgYjGABvQEkjnLDE2wl22fNRuDoi8zVJPPcjUitdzFdrm6lVb/H6X2oZxDIfikkcgrRT52ErewmkDjLKx+zlWyfz74HcgvN1aTniQuQmFhIl6tb6Xr4x/Q+VHmA7TLfEohgjAcaQOIgh5QAi39hK9k+d71oti7tcl+mi9WtJKWWoO8ZK7i9aKEiO4oMtst8izoB97NlJHGWM68EynawlWyPikrg/Fkm61KJJl1uo8vVrdRtdgUC+TvYvXg722O+RRW/Xqj6sSB2E0gc5KoH2Uq2z8YtwAlTzNUke9RWpDWcQperW2nR60FqDwYtbNTD1dku8y25YfTc/YA+XUgS+3nhA7aS7fPlImCgwaHIvYcvRmJSMV2ubqXLkA+oPZhj4Vi2x3xNMIwz2CKSOMugscCCpWwl2+eh18zWpeOgN+lidStJyWPR59SltB5UV+Ez2A7zPeoq/G9sGUmc5ZSpwJYytpLtoed/XnSH2bo07XYnXa5upU7jqcgeXUbpPz17gO0v36NORGrIwodsGUmc5ZK72Uq2z6atwEmXmqtJ9pgypDeZRperW2na7W5W/y1k+0tQ6I3b9QbubBlJnOXJd9hKts+CZcDgseZqknH6MiSljKXL1a10Ougd93vPwma2u4TdqBNyfEiPUvKAkCT2cmARMH8RW8n2+ce7ZuvS+dD36WJ1K4lJReh98iJ3e8/Cdra3hL3Qf5Rgy0jiLMdfAmzYwlayfabdb7YuzXv+nS5Xt5LW4BJknbfFzb7bwnaWsBdDSpGifqu+x5aRxFnG31r9R8J4Ytt2IK/UXE0C+dtRt+kVdLm6lcad/gb9YpMb/aZnDbCdJfwGvVGNkvgqtowkzvLga2wl22fRcuDgEnM16XvmSiSnjaPL1a20P/BVt/rtLbavhN8hEMER6rfrLraMJPYzoBD44ge2ku3z6qdm69LtiM/oYnUriUmF6HXSD8Z7LWjhRrarhH2gTs7lbBlJnOWoSdVbucYb0x8yW5eWGY/Q5epWUutNQubIDUbrGQzjBLanhH1RiiR1kl5jy0jiLNEbgYo4G4q8oxw452pzNdEDEeq1uIYuV7fSsN2N6iq5wlQ9t2SORH22poQ/YGABmqkTtYQtI4mz6G1c442lq4AhF5irSf+z1yClzgS6XN1K29ALZmpp4X62n4QaEIriIHXCytkykthPbhT48Gu2ku3z3jzDQ5GPmQ89LJgtV1eSGMUBx30d6xrq90WCbDcJNUSdrIlsGUmc5ciJwKr1bCXbZ+Zss3VpnfkkX64uRX/j0N88YlY/C0+znSTYAon6pLFlJHGW0TOA8jgbirxzF5B/nbmaBMMVaNDmerpc3Ur9VjPUMcdkKPLWnCJ0YxtJsEnWKDQJWljElpHEWWY9xVayfVauA4640FxN+p+zDinpE+lydSutM5+qdc2CEUTYLhIcok5gUJ3AMraMJPaj7ym//QVbyfb54Kvqe/mm6tLzhO98NBQ5iu7DvnBeL/nDZfyjTmQRW0YSZzlsPPDzaraS7XPbs2br0jb4vAfk6k6S08aj31mrbddIfft+Tn2msv0jxAB1Ih9ly0jiLCOuAraXs5VsDz0Uuehmg3WxKtGow1/pcnUrdZtfhUB+eY3ro+T9YEYe0tjeEWJERjEaqBP7LVtGEmeZ8RhbyfZZuxE45mJzNck6dxNS619Ml6tbaZnx6J/WRIl7Z8jCxWzfCAbIKUQvGYocv3n5I7aS7TN3QfVeL6ZqovfT1vtqs+XqVroM/Wjf9bCwKsfCkWzPCAYJRTGCLSKJsxxSAixawVayfe572Wxd2g94lS5Wt5KUUoK+eSv+pwbqyvsd9dmW7RfBBdSJvoctI4mz5F0BlO1gK9keer/zC28zWZdKNOlyO12ubkXvla73TN99/JV6qEteHpLZXhFcYsgopKsTP5ctI4mzXHYvW8n22bgVOHGKuZpkj9qKOg0vpcvVrTTrcY8+7tWBCI5h+0QgEChAD9UAG9gykjjLc3PYSrbP14uBgcXmatL7lMVITC6my9WN1Gk89Zcex3zene0RgUiOhZNCMhQ5LjNoLPD9UraS7fPom2br0vGgt+lyNZsoUupOeiAhIU8eERSq7of/lS0jibMMnwps3sZWsn0uvtNsXZr1uM8DojWQxMhm9ZnHdobgIVTDp6p8xJaRxFn0HwfjbSjy1jLgtMvN1SQwZjvSm5TyhRvTWF+oT7llIvwvOUXoqBp/NVtGEmd5/C22ku3zn5+BwWPN1STj9OVISjnfA+KNSR5Sqcf2hOBhciwcG7JQwZaRxH4OLALmL2Qr2T7PvG+2Ll0P/5gt3tpedW9TyWe7QYgTghFczZaRxFmOmwys38xWsn1K/262Ls17PeABETvKdwkJhf3YThDiiVIkKYm/wZaRxFnG3VK9iVQ8oTfp0pt1mapJoKAc9VpMZ8vY7pX3wwkJI2X4sGCfAwvQWjX+craMJM5y/ytsJdvnp5XAoePM1aTfmauQnDbOA2L+U3FvV7mA7QAhzsmxMKRqVzMPCEliL7mFwCffspVsn9c+M1uXbkd+5gFB/2GWJCREB7DXvrCfEIzgUraMJM4ybBKwegNbyfa59hGzdWnZ9zG2pPeV5xMSipqy17ywX4HE3RM96EKS2E9kJlBRwVayPXbsBEZeY64mwfAu1G89gy3rvW+Z7FSfk9ViS2SvdmE/pH8RmoYsLGbLSOIstz/HVrJ9VqwBhk4wV5P+Z69FSvoED8g7skwJfDB7jQv7OcEwBqrG38GWkcR+9GBhPWA43nh/fvVAZ1N16XHMl9B7ihDl/VZCQkFr9toWfEIwgvFsGUmcRV/NLl/DVrJ9bv6H2bq0yXqaIe5d6qr7ioSE0iT2mhZ8RtDCP9gykjjLedcC5TvZSrbHrgqg4HpzNQmGK9Cg7Q1uyvtXddU/jL2OBZ8yOB8NVeN/x5aRxFlufJKtZPusWgccOdFcTTLP3YjUehe5IG/rvYSE/HbsNSz4nOwostSV+Da2jCT2o+8pvzWXrWT7fPpd9bPtpurS84TvkZhYaErelSqzVFLZa1cQqgiGYbFlJHGWQ8YBS1aylWyfO18wW5d2OS+auOpek5AQPY69XgXhf1BN/wBbRhJnOeuq6v1H4gm9v8vYvxqsi1WJRh1nxVLgnyckhLuy16kg/C4DJ6BuyMI8towkznLNw2wl22ftJuDYi83VJGvUFqQ1mBKLK++7ZNyZ4Hlyw+gZtLCRLSOJs7z4IVvJ9pm/qHrvc1M16T18ERKTHA9F3qRyJntdCkKNCURwJltEEmc5uARYtIKtZPs88KrZunQY+LqTq+5vEhKiGez1KAi2UVfhd7BlJHGWU6ZVz6eMJ/T8z4m3m6xLJZp0vcOOwGXcmRC/9ChBHdX4n7NlJHGWKfewlWyfjVuBEy81V5Ps0VtRp9GlfybuMpUwe/0JQq0J5KNzMIK1bBlJnOXp99hKts83i4FBxeZqknHaMiSljN2XvBckJBRkstedIMSMYBgnqMavZMtIYj9ahN8uYSvZPrPfNluXTge/93v3u59Wn43Z600QYo5q+plsGUmc5YQpwMYtbCXbZ9p9ZuvS/ID7q8SdmFS4S8adCfs1quFTgxbmsGUkcZYJt1b/kTCe2LodOL3UXE0CY7brTa82pKdPGsReX4JgnAFhdFCN/ytbRhJneeQNtpLts3A5cND5hmpi4QU92IS9rgTBNYJhHB6MYBdbRhL70S/KzF/IVrJ9nnovtnWoGupt4YqEUsje3YL/UIvgSraMJM5y7GRg3Sa2kmvO4l+AM66IYQ0s/Kw+D2avIUHgoa5c1CJ4jS0jibMU3RQfQ5Ff/rj6rdIYHvvbucVow14+gkAnsxCtdl/N0IUksZ97XmLred/sKAdmzo7p8VYGLczIy0Mye90IgmcIRDBILY5ytowk9qOHIn/8LVvV/8tPq4AR02N6rKuDYRzNXiuC4EnUVfjFbBlJnGXYRGDVeray/z/vzgMOGx/TY3w/K4r27DUiCB4GiWqhPMuWkcRZrBuqhwwz0f/+W56uHg0Xo+PSbw3PUpFxZ4LwZ+hnaYMR/MiWkcRZ/vYMT956uPGY62J3LFX72EdxOntNCEJckWMhN2RhO1tGEvvRV77v/Nt9eX/yHTBsUkyPZW5OEbqx14IgxCVK4OezZSRxlqHjgeWr3RG3foTxrher/5Aaq59ffQN8SI8DZK8BQYhrlMQfZstI4iznXgvs2GlW3volouKbY/hzW9gcimIEu+8FYb8goxgN1ML6li0jibNc/7g5ec9dABx9UUx/3u9yw+jL7nlB2K/IKUQ/tbi2smUkcZZXPo6tuPUuiI+/FduhxfqWSeZI1Gf3uiDsl6hFdjZbRBJnOaSkeg+SWLBhCzDulpiKuyxoQfbuFgTThCzcz5aRxFnOvBIo21E7eX+zJMbzLS38kB1FFruvBcEXDBmFdHW19AVbRhJnufJB5/J++n1gYGznWj6bNQpN2D0tCL4iUIAeVS9XeEBIEvt5/gN74t5aBlxyd+z+/VV7d0cwWb/xy+5lQfAlwTDOYItI4iyDxgILltZM3vp/N3xqTOW9VG+Yxu5fQfA9wQj+xpaRxFlOUVLeUvbH8n75o5iPPntpYAGasftWEISE3UORI/iALSOJs+jbIr/H9nJg+kOx+/dUjeuTcWeC4D1yitBRfS1ew5aRxFlmv/Pf8l6ysvpplZj9OyysyrFwJLtPBUHYB2qhHh+q3u6TLiSJvVQNRV5ULe+3vgCGXBC7f7a68n5XfbZl96cgCH+CHm/FlpHEWU6cAlz9cEz/mTLuTBDiCb1Y1dflN9kyknCjb6flWDiW3Y+CINjkwAK0Vot4BVsiEpK8I/g0K4ou7D4UBMEhaiEPrXrqwANCkbgYC3dl5CGN3X+CINQStaCn0YUicSW738jNY/ecIAixohRJ6orsn2y5SIzL+wu9rQK73QRBiDH6jTu1yJewJSMxJO8IHlKf9dh9JgiCIdQCP1BlB1s2khiK28K2UBQF7N4SBMEF1KKfyJaOJGby/l5PZmL3lCAIroHEkIWn2fKR1DqP6Nmo7G4SBMFl9Kb9SgALPSAhid1Y2C7jzgTB5wQKkFl1/5QtJImdLAlFMYDdO4IgeAAlhEIPSElSgwQjeL5/EZqye0YQBA+hrsIfZMtJ8gfilnFngiDsi8yRqB+y8A1bVJLfkXcEy0JRHMTuEUEQPExOIXopWWxiQvtEfAAAA2pJREFUC0vyX3lLb0bG7g1BEOIAdaU3wgPS8n1k3JkgCI5QArmbLTCf51eVo9h9IAhCHDJkFNKVQOZ6QGT+i4X3Avlox+4BQRDiGCWT7iob6ELzT/Ts0lkqqexzLwjCfkCOhZNCMhTZjWwIRHAq+3wLgrCfob7S3+wBwe3P+XxAGF3Z51kQhP0QJZjUoIU5HhDd/hcZdyYIgmlyitBRCWc1XXj7SfSz9oEIzmSfV0EQfIISzhEyFDkm+TY7igz2+RQEwWcogV/tAQHGbWTcmSAIPEqRFLTwOluE8RYl7rJgGBb79AmC4HP0vhxKSsvZUoyXKHkv0Huus8+bIAhCFTkWhuze3pQuSI/nGZXG7PMlCILwXyiBT/GAIL0ZGXcmCIK3QaKS1HN0WXovPwXDGMg+O4IgCH+IHu0VjOBHD0jTK3lxYAGasc+LIAhCjdDDdZW4dnhAnrRU/T1A9u4WBCEe0fd72RKlxcLP6vNg9jkQBEFwjJL4P+gydT9v5xajDbv2giAItSKjGA2U0L7zgFTdSKX6hTUjLw/J7LoLgiDEBCW2/ipbPSBYk1kdDONodq0FQRBijhJc2AOSNRJ11f1JIB+d2TUWBEEwhpLd39myjXFk3JkgCP5g4ATUDUbwbw+INxZX3RtDUZzOrqkgCIJrZEdxQJX8PCDhWmSuSnd2LQVBEFxHT53xgISdXXlH8JD+JsGuoSAIAg0lw9vZMrYVC5tDUYxg100QBIFOjxLUUVL8jC7mmuW73DD6smsmCILgGZQYOwUtrPGAoP/wlknmSNRn10oQBMFzBMM4IVT9OB5d1r8Rd5ns3S0IgvAnKGHewBb2f8XCD9lRZLHrIgiC4HmGlCJFifN9urir82zWKDRh10QQBCFu0Lv3BS38QrtlUj3Lc7KeKMSuhSAIQtwRiOAIJdFygsCXqBzIPn5BEIS4JhhBxGV5vyTjzgRBEGKEkmphyEKF0VsmEeyScWeCIAgGUJLNq3r70YzAV+RYGMI+RkEQhP2WQAH6qCvlD2IqbwtP5I5Fc/axCYIg7P+UIikYxmgl8h9rdcvEwifqn3M4+3AEQRB8R9Wz4lGcrGT8rMqWGop7tRL/fTkWBrN/fkEQBCFh90ZYURykBF2kMlNdXT+oPmeHLNyl/vN0Jex8/SalDBcWGPw/drcXctagpngAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>

              <div>
                <div>Get Surebanker Card</div>
                <div>
                  Withdraw from any ATM, POS, perform online transactions
                </div>
              </div>
            </div>

            <div className="cards__modal__inner__fee">
              <div>Card Issuing Fee</div>
              <div>NGN 1000</div>
            </div>

            <div className="cards__modal__inner__fee-info">
              Fee incurred will be deducted from <span>account balance</span>
            </div>

            <div className="cards__modal__inner__options">
              <div
                className="cards__modal__inner__options__option"
                onClick={() => setOption("Pick at our location")}
              >
                Pick at our location
                {option !== "Pick at our location" && (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#D9D9D9" />
                  </svg>
                )}
                {option === "Pick at our location" && (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0ZM9.91477 5.22725L6.5625 8.57947L5.08525 7.10227C4.86558 6.8826 4.50942 6.8826 4.28975 7.10227C4.07009 7.32195 4.07009 7.67805 4.28975 7.89773L6.16477 9.77273C6.38445 9.9924 6.74055 9.9924 6.96023 9.77273L10.7102 6.02273C10.9299 5.80308 10.9299 5.44692 10.7102 5.22725C10.4906 5.00759 10.1344 5.00759 9.91477 5.22725Z"
                      fill="#14FF9C"
                    />
                  </svg>
                )}
              </div>
              <div
                className="cards__modal__inner__options__option"
                onClick={() => setOption("Get It delivered")}
              >
                Get It delivered
                {option !== "Get It delivered" && (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#D9D9D9" />
                  </svg>
                )}
                {option === "Get It delivered" && (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0ZM9.91477 5.22725L6.5625 8.57947L5.08525 7.10227C4.86558 6.8826 4.50942 6.8826 4.28975 7.10227C4.07009 7.32195 4.07009 7.67805 4.28975 7.89773L6.16477 9.77273C6.38445 9.9924 6.74055 9.9924 6.96023 9.77273L10.7102 6.02273C10.9299 5.80308 10.9299 5.44692 10.7102 5.22725C10.4906 5.00759 10.1344 5.00759 9.91477 5.22725Z"
                      fill="#14FF9C"
                    />
                  </svg>
                )}
              </div>
              <div
                className="cards__modal__inner__options__option"
                onClick={() => setOption("Pick By Proxy")}
              >
                Pick By Proxy
                {option !== "Pick By Proxy" && (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#D9D9D9" />
                  </svg>
                )}
                {option === "Pick By Proxy" && (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0ZM9.91477 5.22725L6.5625 8.57947L5.08525 7.10227C4.86558 6.8826 4.50942 6.8826 4.28975 7.10227C4.07009 7.32195 4.07009 7.67805 4.28975 7.89773L6.16477 9.77273C6.38445 9.9924 6.74055 9.9924 6.96023 9.77273L10.7102 6.02273C10.9299 5.80308 10.9299 5.44692 10.7102 5.22725C10.4906 5.00759 10.1344 5.00759 9.91477 5.22725Z"
                      fill="#14FF9C"
                    />
                  </svg>
                )}
              </div>
            </div>

            {option?.length > 0 && (
              <select name="" id="" className="cards__modal__inner__input">
                <option value="">Sangotedo, 12, Ikosi Road, Ajah</option>
              </select>
            )}

            {option?.length > 0 && (
              <div className="cards__modal__inner__delivery-note">
                <div>NOTE</div>
                <div>Card will be ready in 2 days</div>
              </div>
            )}

<button className="cards__modal__inner__button"
onClick={() => setOpen(false)}
>Submit</button>
          </div>
        </div>
      )}
      {blockCardOpen && (
        <div className="cards__modal" onClick={handleModalClose}>
          <div className="cards__modal__inner">
            <div className="cards__modal__inner__title">
              <svg
                width="54"
                height="56"
                viewBox="0 0 54 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  x="16.1885"
                  y="0.833984"
                  width="40"
                  height="42.7174"
                  transform="rotate(22.2163 16.1885 0.833984)"
                  fill="url(#pattern0_6941_4658)"
                />
                <defs>
                  <pattern
                    id="pattern0_6941_4658"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_6941_4658"
                      transform="scale(0.00271739 0.00254453)"
                    />
                  </pattern>
                  <image
                    id="image0_6941_4658"
                    width="368"
                    height="393"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>

              <div>
                <div>
                  <span>Block Card</span>
                </div>
                <div>Please enter the OTP sent to you</div>
              </div>
            </div>
            <div className="cards__modal__inner__otp-inputs">
              <input
                type="text"
                className="cards__modal__inner__otp-inputs__input"
                maxLength={1}
                required
              />
              <input
                type="text"
                className="cards__modal__inner__otp-inputs__input"
                maxLength={1}
                required
              />
              <input
                type="text"
                className="cards__modal__inner__otp-inputs__input"
                maxLength={1}
                required
              />
              <input
                type="text"
                className="cards__modal__inner__otp-inputs__input"
                maxLength={1}
                required
              />
            </div>

            <button className="cards__modal__inner__button">Confirm OTP</button>
          </div>
        </div>
      )}

      <Navigation />
    </div>
  );
}
