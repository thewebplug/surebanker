"use client";

import Image from "next/image";
import ProfileHeader from "../components/profile-header";
import Navigation from "../components/navigation";
import { useEffect, useState } from "react";
import { handleClientScriptLoad } from "next/script";
import Chart from "chart.js/auto";

export default function Fund() {
  const [option, setOption] = useState("");
  const [open, setOpen] = useState(true);
  const [stage, setStage] = useState(1);
  const [filterItem, setFilterItem] = useState("");
  const [transactionFilter, setTransactionFilter] = useState("");
  const [amount, setAmount] = useState("");

  const handleModalClose = (e) => {
    if (e.target.classList.contains("savings__modal")) {
      setOpen(false);
      setStage(1);
      setAmount("");
      setFilterItem("");
    }
  };

  const handleNextStage = () => {
    if (stage === 1) {
      if (filterItem === "") {
        alert("Please select a budget name");
      } else if (filterItem === "Other") {
        setStage(3);
        setFilterItem("");
      } else {
        setStage(2);
      }
    } else if (stage === 2) {
      if (amount === "") {
        alert("Please enter budget amount");
      } else {
        setOpen(false);
      }
    } else if (stage === 3) {
      if (filterItem === "") {
        alert("Please enter a budget name");
      } else {
        setStage(2);
      }
    }
  };
  const handlePrevStage = () => {
    if (stage === 3) {
      setStage(1);
    } else {
      setStage(stage - 1);
    }
  };

  useEffect(() => {
    const doughnut = document.getElementById("doughnutChart");

    const doughnutChart = new Chart(doughnut, {
      type: "doughnut",
      data: {
        labels: [
          "Government Official",
          "Videos",
          "Photos",
          "Music",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: [90, 56, 100],
            borderWidth: 1,
            backgroundColor: ["#0FFF9A", "#4440FF", "#FF40A7"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || "";
                const value = context.formattedValue;
                return `${label}: ${value}`;
              },
            },
          },
        },
      },
    });

    return () => doughnutChart.destroy();
  }, []);

  return (
    <div className="savings">
      <ProfileHeader />
      <div className="savings__nav">
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

        <div>Savings</div>
      </div>

      <div className="savings__button-group">
        <button className="savings__button-group__withdraw">
          Withdraw
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.59722 22.1962H3.17813C1.54438 22.1962 0.219727 20.8715 0.219727 19.2378V7.29043C0.219727 5.65668 1.54438 4.33203 3.17813 4.33203H36.777C38.4107 4.33203 39.7354 5.65668 39.7354 7.29043V19.2378C39.7354 20.8715 38.4107 22.1962 36.777 22.1962H30.3579"
              fill="#344054"
            />
            <path
              d="M9.59714 16.1548H5.5828C4.96591 16.1548 4.46582 15.6547 4.46582 15.0378V11.492C4.46582 10.8751 4.96591 10.375 5.5828 10.375H34.3717C34.9886 10.375 35.4887 10.8751 35.4887 11.492V15.0378C35.4887 15.6547 34.9886 16.1548 34.3717 16.1548H30.3573"
              fill="#C9DAE7"
            />
            <path
              d="M30.3578 30.707V34.4553C30.3578 35.0977 29.8371 35.6184 29.1948 35.6184H10.7607C10.1184 35.6184 9.59766 35.0977 9.59766 34.4553V30.707"
              fill="#2ECCA2"
            />
            <path
              d="M30.3578 26.9609V30.7092C30.3578 31.3516 29.8371 31.8723 29.1948 31.8723H10.7607C10.1184 31.8723 9.59766 31.3516 9.59766 30.7092V26.9609"
              fill="#30D6AF"
            />
            <path
              d="M29.1943 28.1237H10.7607C10.1184 28.1237 9.59766 27.6029 9.59766 26.9606V10.375H30.3583V26.9606C30.3578 27.6029 29.8371 28.1237 29.1943 28.1237Z"
              fill="#30E6B9"
            />
            <path
              d="M25.2265 10.375C25.2265 13.2741 22.8762 15.624 19.9775 15.624C17.0788 15.624 14.7285 13.2737 14.7285 10.375"
              fill="#FFF1A2"
            />
            <path
              d="M13.6518 24.9812C13.1556 24.9812 12.7539 24.579 12.7539 24.0833V20.8979C12.7539 20.4017 13.1561 20 13.6518 20C14.1479 20 14.5497 20.4022 14.5497 20.8979V24.0828C14.5497 24.579 14.1479 24.9812 13.6518 24.9812Z"
              fill="#FFF1A2"
            />
            <path
              d="M26.3032 24.9812C25.807 24.9812 25.4053 24.579 25.4053 24.0833V20.8979C25.4053 20.4017 25.8075 20 26.3032 20C26.7993 20 27.201 20.4022 27.201 20.8979V24.0828C27.2015 24.579 26.7993 24.9812 26.3032 24.9812Z"
              fill="#FFF1A2"
            />
          </svg>
        </button>
        <button className="savings__button-group__savings"
        onClick={() => setOpen(true)}
        >
          Savings
          <svg
            width="42"
            height="28"
            viewBox="0 0 42 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2512_3348)">
              <path
                d="M27.9848 27.8133C35.6231 27.8133 41.8152 21.6212 41.8152 13.9828C41.8152 6.34446 35.6231 0.152344 27.9848 0.152344C20.3464 0.152344 14.1543 6.34446 14.1543 13.9828C14.1543 21.6212 20.3464 27.8133 27.9848 27.8133Z"
                fill="#FFC843"
              />
              <path
                d="M27.9846 24.7406C33.9255 24.7406 38.7416 19.9245 38.7416 13.9836C38.7416 8.04265 33.9255 3.22656 27.9846 3.22656C22.0436 3.22656 17.2275 8.04265 17.2275 13.9836C17.2275 19.9245 22.0436 24.7406 27.9846 24.7406Z"
                fill="#D38700"
              />
              <path
                d="M35.3076 11.8568C35.0556 11.8245 34.8241 12.0024 34.7913 12.2548C34.7507 12.5677 34.6268 12.9229 34.1087 13.1123C33.7736 11.4474 32.3036 10.1934 30.5401 10.1934H26.0344C25.9425 10.1934 25.8519 10.198 25.7618 10.2045C25.6226 9.30151 24.8441 8.60938 23.9021 8.60938V10.8837C23.3117 11.3112 22.8546 11.9112 22.6051 12.6104H21.3474C21.002 12.6104 20.7217 12.8907 20.7217 13.2361V14.3739C20.7217 14.7194 21.002 14.9997 21.3474 14.9997H22.5273C22.7747 15.89 23.3528 16.6415 24.1197 17.1176V18.9902C24.1197 19.1906 24.2823 19.3532 24.4826 19.3532H26.3771C26.5778 19.3532 26.7401 19.1906 26.7401 18.9902V17.6643H29.7902V18.9902C29.7902 19.1906 29.9527 19.3532 30.1531 19.3532H32.0476C32.2483 19.3532 32.4106 19.1906 32.4106 18.9902V17.1471C33.4623 16.5158 34.167 15.3688 34.1784 14.0555C35.2818 13.7715 35.6229 13.0075 35.7053 12.3728C35.7385 12.1208 35.5599 11.8893 35.3076 11.8568Z"
                fill="#FFC843"
              />
            </g>
            <g clip-path="url(#clip1_2512_3348)">
              <path
                d="M13.9848 27.8133C21.6231 27.8133 27.8152 21.6212 27.8152 13.9828C27.8152 6.34446 21.6231 0.152344 13.9848 0.152344C6.34641 0.152344 0.154297 6.34446 0.154297 13.9828C0.154297 21.6212 6.34641 27.8133 13.9848 27.8133Z"
                fill="#FFC843"
              />
              <path
                d="M13.9846 24.7406C19.9255 24.7406 24.7416 19.9245 24.7416 13.9836C24.7416 8.04265 19.9255 3.22656 13.9846 3.22656C8.04363 3.22656 3.22754 8.04265 3.22754 13.9836C3.22754 19.9245 8.04363 24.7406 13.9846 24.7406Z"
                fill="#D38700"
              />
              <path
                d="M21.3076 11.8568C21.0556 11.8245 20.8241 12.0024 20.7913 12.2548C20.7507 12.5677 20.6268 12.9229 20.1087 13.1123C19.7736 11.4474 18.3036 10.1934 16.5401 10.1934H12.0344C11.9425 10.1934 11.8519 10.198 11.7618 10.2045C11.6226 9.30151 10.8441 8.60938 9.90207 8.60938V10.8837C9.31167 11.3112 8.85465 11.9112 8.60508 12.6104H7.34743C7.00198 12.6104 6.72168 12.8907 6.72168 13.2361V14.3739C6.72168 14.7194 7.00198 14.9997 7.34743 14.9997H8.52732C8.77474 15.89 9.35285 16.6415 10.1197 17.1176V18.9902C10.1197 19.1906 10.2823 19.3532 10.4826 19.3532H12.3771C12.5778 19.3532 12.7401 19.1906 12.7401 18.9902V17.6643H15.7902V18.9902C15.7902 19.1906 15.9527 19.3532 16.1531 19.3532H18.0476C18.2483 19.3532 18.4106 19.1906 18.4106 18.9902V17.1471C19.4623 16.5158 20.167 15.3688 20.1784 14.0555C21.2818 13.7715 21.6229 13.0075 21.7053 12.3728C21.7385 12.1208 21.5599 11.8893 21.3076 11.8568Z"
                fill="#FFC843"
              />
            </g>
            <defs>
              <clipPath id="clip0_2512_3348">
                <rect
                  width="28"
                  height="28"
                  fill="white"
                  transform="translate(14)"
                />
              </clipPath>
              <clipPath id="clip1_2512_3348">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <div className="savings__transactions">
        <div className="savings__transactions__title">Transactions</div>

        <div className="savings__transactions__card">
          <div className="savings__transactions__card__group">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#EDE9FF" />
              <path
                d="M24.26 17.932H21.536V25H19.892V17.932H17.168V16.48H24.26V17.932Z"
                fill="#4053FF"
              />
            </svg>

            <div>
              <div className="savings__transactions__card__title">
                Indriver Bill
              </div>
              <div className="savings__transactions__card__subtitle">
                Dec 20, 2023 - 11:00am
              </div>
            </div>
          </div>

          <div className="savings__transactions__card__amount-out">
            <span>₦</span>-30,233
          </div>
        </div>
      </div>

      {open &&   <div className="savings__modal" onClick={handleModalClose}>
        <div className="savings__modal__inner">
        {stage === 1 && <>
          <div className="savings__modal__inner__title">Fund Savings</div>
          <div className="savings__modal__inner__subtitle">
          You can fund your savings via the following channel
          </div>
          </>}
        {stage === 2 && <>
          <div className="savings__modal__inner__title">Fund  by debit card</div>
          <div className="savings__modal__inner__subtitle">
          You can fund your savings by transfer from a debit card
          </div>
          </>}
        {stage === 3 && <>
          <div className="savings__modal__inner__title">Fund  by Sure Banker</div>
          <div className="savings__modal__inner__subtitle">
          You can fund your savings from your surebanker account
          </div>
          </>}
        {stage === 4 && <>
          <div className="savings__modal__inner__title">Fund by Direct Transfer</div>
          <div className="savings__modal__inner__subtitle">
          You can fund your savings by direct transfer from other banks
          </div>
          </>}
          {stage === 1 && 
          <div className="savings__modal__inner__images">

            <div className="savings__modal__inner__images__image"
            onClick={() => setStage(2)}
            >
            <Image
            src="/assets/surebanker-card.png"
            objectFit="cover"
            layout="fill"
            />
            </div>
            <div className="savings__modal__inner__images__image"
                        onClick={() => setStage(3)}

            >
            <Image
            src="/assets/surebanker-banker.png"
            objectFit="cover"
            layout="fill"
            />
            </div>
            <div className="savings__modal__inner__images__image"
                        onClick={() => setStage(4)}
            >
            <Image
            src="/assets/surebanker-transfer.png"
            objectFit="cover"
            layout="fill"
            />
            </div>
          </div>
          }

          {stage === 2 && 
          <>

          <label htmlFor="">Choose amount</label>

          <div className="savings__modal__inner__cards">
            <div className="savings__modal__inner__cards__active"><span>NGN</span> 20,000</div>
            <div><span>NGN</span> 10,000</div>
            <div><span>NGN</span> 5,000</div>
            <div><span>NGN</span> 500</div>
          </div>
            </>
            }
         {stage === 2 || stage === 3 ? <div className="savings__modal__inner__amount">
            <div>NGN</div>
            <input type="text" placeholder="20,000" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div> : ""}

            {stage === 3 &&
<>
<div className="savings__modal__inner__note-title">Note</div>
<div className="savings__modal__inner__note-subtitle">Money will be deducted from your surebanker account</div>
</>

            }

{stage === 4 && 
<>
<div className="savings__modal__inner__amount-copy-title">
Bank - Surebanker
</div>
<div className="savings__modal__inner__amount-copy">
            <div>208123459</div>


            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.1271 3.47028L4.125 5.0625V12.9406C4.125 14.2868 5.2163 15.3781 6.5625 15.3781L13.0247 15.3784C12.793 16.0336 12.168 16.5031 11.4333 16.5031H6.5625C4.59499 16.5031 3 14.9082 3 12.9406V5.0625C3 4.32697 3.47059 3.70134 4.1271 3.47028ZM13.3125 1.5C14.2444 1.5 15 2.25552 15 3.1875V12.9375C15 13.8694 14.2444 14.625 13.3125 14.625H6.5625C5.63052 14.625 4.875 13.8694 4.875 12.9375V3.1875C4.875 2.25552 5.63052 1.5 6.5625 1.5H13.3125Z" fill="#4440FF"/>
</svg>

            </div>

            <div className="savings__modal__inner__amount-copy-subtitle">
            Copy the account details above to fund your account
</div>
            </>
            }
          <div className="savings__modal__inner__button-group">
            <button className="savings__modal__inner__button-group__next"
            onClick={handleNextStage}
            >Next</button>
          </div>
        </div>
      </div>}

      <Navigation />
    </div>
  );
}
