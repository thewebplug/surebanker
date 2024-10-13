"use client";

import Image from "next/image";
import ProfileHeader from "../components/profile-header";
import Navigation from "../components/navigation";
import { useEffect, useState } from "react";
import { handleClientScriptLoad } from "next/script";
import Chart from "chart.js/auto";

export default function Fund() {
  const [option, setOption] = useState("");
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState(1);
  const [filterItem, setFilterItem] = useState("");
  const [transactionFilter, setTransactionFilter] = useState("");
  const [amount, setAmount] = useState("");

  const handleModalClose = (e) => {
    if (e.target.classList.contains("budget__modal")) {
      setOpen(false);
      setStage(1);
      setAmount("")
      setFilterItem("")
    }
  };



  const handleNextStage = () => {
    if(stage === 1) {
        if(filterItem === "") {
            alert("Please select a budget name");
        }else if(filterItem === "Other") {
            setStage(3);
            setFilterItem("");
        }else {
            setStage(2)
        }
    }
    else if(stage === 2) {
        if(amount === "") {
            alert("Please enter budget amount");
        }else {
            setOpen(false)
        }
    }else if(stage === 3) {
        if(filterItem === "") {
            alert("Please enter a budget name");
        }else {
            setStage(2)
        }
    }

  }
  const handlePrevStage = () => {
    if(stage === 3) {
        setStage(1);
    }else {     
        setStage(stage - 1);
    }
  }

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
            backgroundColor: [
              "#0FFF9A",
              "#4440FF",
              "#FF40A7",
            ],
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
    <div className="budget">
      <ProfileHeader />
      <div className="budget__nav">
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

        <div>Budget</div>
      </div>

      <div className="budget__overview">
        <div className="budget__overview__title">
          <div>
            Current <span>Budget</span>
          </div>
          <div>July 2024</div>
        </div>

        <div className="budget__overview__trend">
          <svg
            width="15"
            height="10"
            viewBox="0 0 15 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.26793 9.03176C0.194035 9.03366 -0.382193 7.76977 0.323582 6.96022L5.83426 0.639876C6.53015 -0.158171 7.76965 -0.160355 8.46835 0.635235L14.0012 6.93613C14.7099 7.74318 14.1381 9.00909 13.0642 9.01098L1.26793 9.03176Z"
              fill="white"
            />
          </svg>
          18.4%
        </div>

        <div className="budget__overview__amount">
          <span className="budget__overview__amount__currency">NGN</span>
          120,000
          <span className="budget__overview__amount__end">.00</span>
        </div>
      </div>

      <div className="budget__title">Budgets</div>

      <div className="budget__cards">
        <div className="budget__cards__add"
        onClick={() => setOpen(true)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.90283 2.50561L10 2.5C10.4273 2.5 10.7796 2.8217 10.8278 3.23615L10.8333 3.33333V9.16667H16.6667C17.094 9.16667 17.4462 9.48833 17.4944 9.90283L17.5 10C17.5 10.4273 17.1783 10.7796 16.7638 10.8278L16.6667 10.8333H10.8333V16.6667C10.8333 17.094 10.5117 17.4462 10.0972 17.4944L10 17.5C9.57267 17.5 9.22042 17.1783 9.17225 16.7638L9.16667 16.6667V10.8333H3.33333C2.90597 10.8333 2.55374 10.5117 2.50561 10.0972L2.5 10C2.5 9.57267 2.8217 9.22042 3.23615 9.17225L3.33333 9.16667H9.16667V3.33333C9.16667 2.90597 9.48833 2.55374 9.90283 2.50561Z"
              fill="#212121"
            />
          </svg>
        </div>
        <div className="budget__cards__card">
          <div className="budget__cards__card__title">Groceries</div>
          <div className="budget__cards__card__amount">
            <span>₦</span> 30,233
          </div>
          <div className="budget__cards__card__spent">20% Spent</div>
          <div className="budget__cards__card__percentage">
            <span>20</span>%
          </div>

          <svg
            className="budget__cards__card__corner"
            width="35"
            height="29"
            viewBox="0 0 35 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                d="M31.0947 35.5559L37.5018 46.6535C44.9732 42.3306 50.0003 34.2526 50.0003 25H37.1877C37.1875 29.5106 34.7371 33.4486 31.0947 35.5559Z"
                fill="#009638"
              />
              <path
                d="M24.9997 12.8127C27.2202 12.8127 29.3012 13.4068 31.0942 14.444L37.5013 3.34638C33.8238 1.21862 29.5541 0 24.9995 0C20.4452 0 16.1756 1.21846 12.498 3.34622L18.9053 14.4438C20.6982 13.4068 22.7796 12.8127 24.9997 12.8127Z"
                fill="#FF6D68"
              />
              <path
                d="M37.5018 3.34766L31.0947 14.4453C34.7369 16.5528 37.1875 20.4906 37.1875 25.0014H50.0001C50.0003 15.7486 44.973 7.67061 37.5018 3.34766Z"
                fill="#FFC843"
              />
              <path
                d="M18.9055 14.4453L12.4983 3.34766C5.02689 7.67061 0 15.7486 0 25.0012H12.8126C12.8126 20.4906 15.2633 16.5526 18.9055 14.4453Z"
                fill="#BF534F"
              />
              <path
                d="M12.8126 25H0C0 34.2526 5.02689 42.3306 12.4981 46.6534L18.9054 35.5558C15.2632 33.4484 12.8126 29.5106 12.8126 25Z"
                fill="#0071CE"
              />
            </g>
          </svg>
        </div>
        <div className="budget__cards__card">
          <div className="budget__cards__card__title">Groceries</div>
          <div className="budget__cards__card__amount">
            <span>₦</span> 30,233
          </div>
          <div className="budget__cards__card__spent">20% Spent</div>
          <div className="budget__cards__card__percentage">
            <span>20</span>%
          </div>

          <svg
            className="budget__cards__card__corner"
            width="35"
            height="29"
            viewBox="0 0 35 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                d="M31.0947 35.5559L37.5018 46.6535C44.9732 42.3306 50.0003 34.2526 50.0003 25H37.1877C37.1875 29.5106 34.7371 33.4486 31.0947 35.5559Z"
                fill="#009638"
              />
              <path
                d="M24.9997 12.8127C27.2202 12.8127 29.3012 13.4068 31.0942 14.444L37.5013 3.34638C33.8238 1.21862 29.5541 0 24.9995 0C20.4452 0 16.1756 1.21846 12.498 3.34622L18.9053 14.4438C20.6982 13.4068 22.7796 12.8127 24.9997 12.8127Z"
                fill="#FF6D68"
              />
              <path
                d="M37.5018 3.34766L31.0947 14.4453C34.7369 16.5528 37.1875 20.4906 37.1875 25.0014H50.0001C50.0003 15.7486 44.973 7.67061 37.5018 3.34766Z"
                fill="#FFC843"
              />
              <path
                d="M18.9055 14.4453L12.4983 3.34766C5.02689 7.67061 0 15.7486 0 25.0012H12.8126C12.8126 20.4906 15.2633 16.5526 18.9055 14.4453Z"
                fill="#BF534F"
              />
              <path
                d="M12.8126 25H0C0 34.2526 5.02689 42.3306 12.4981 46.6534L18.9054 35.5558C15.2632 33.4484 12.8126 29.5106 12.8126 25Z"
                fill="#0071CE"
              />
            </g>
          </svg>
        </div>
        <div className="budget__cards__card">
          <div className="budget__cards__card__title">Groceries</div>
          <div className="budget__cards__card__amount">
            <span>₦</span> 30,233
          </div>
          <div className="budget__cards__card__spent">20% Spent</div>
          <div className="budget__cards__card__percentage">
            <span>20</span>%
          </div>

          <svg
            className="budget__cards__card__corner"
            width="35"
            height="29"
            viewBox="0 0 35 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                d="M31.0947 35.5559L37.5018 46.6535C44.9732 42.3306 50.0003 34.2526 50.0003 25H37.1877C37.1875 29.5106 34.7371 33.4486 31.0947 35.5559Z"
                fill="#009638"
              />
              <path
                d="M24.9997 12.8127C27.2202 12.8127 29.3012 13.4068 31.0942 14.444L37.5013 3.34638C33.8238 1.21862 29.5541 0 24.9995 0C20.4452 0 16.1756 1.21846 12.498 3.34622L18.9053 14.4438C20.6982 13.4068 22.7796 12.8127 24.9997 12.8127Z"
                fill="#FF6D68"
              />
              <path
                d="M37.5018 3.34766L31.0947 14.4453C34.7369 16.5528 37.1875 20.4906 37.1875 25.0014H50.0001C50.0003 15.7486 44.973 7.67061 37.5018 3.34766Z"
                fill="#FFC843"
              />
              <path
                d="M18.9055 14.4453L12.4983 3.34766C5.02689 7.67061 0 15.7486 0 25.0012H12.8126C12.8126 20.4906 15.2633 16.5526 18.9055 14.4453Z"
                fill="#BF534F"
              />
              <path
                d="M12.8126 25H0C0 34.2526 5.02689 42.3306 12.4981 46.6534L18.9054 35.5558C15.2632 33.4484 12.8126 29.5106 12.8126 25Z"
                fill="#0071CE"
              />
            </g>
          </svg>
        </div>
        <div className="budget__cards__card">
          <div className="budget__cards__card__title">Groceries</div>
          <div className="budget__cards__card__amount">
            <span>₦</span> 30,233
          </div>
          <div className="budget__cards__card__spent">20% Spent</div>
          <div className="budget__cards__card__percentage">
            <span>20</span>%
          </div>

          <svg
            className="budget__cards__card__corner"
            width="35"
            height="29"
            viewBox="0 0 35 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                d="M31.0947 35.5559L37.5018 46.6535C44.9732 42.3306 50.0003 34.2526 50.0003 25H37.1877C37.1875 29.5106 34.7371 33.4486 31.0947 35.5559Z"
                fill="#009638"
              />
              <path
                d="M24.9997 12.8127C27.2202 12.8127 29.3012 13.4068 31.0942 14.444L37.5013 3.34638C33.8238 1.21862 29.5541 0 24.9995 0C20.4452 0 16.1756 1.21846 12.498 3.34622L18.9053 14.4438C20.6982 13.4068 22.7796 12.8127 24.9997 12.8127Z"
                fill="#FF6D68"
              />
              <path
                d="M37.5018 3.34766L31.0947 14.4453C34.7369 16.5528 37.1875 20.4906 37.1875 25.0014H50.0001C50.0003 15.7486 44.973 7.67061 37.5018 3.34766Z"
                fill="#FFC843"
              />
              <path
                d="M18.9055 14.4453L12.4983 3.34766C5.02689 7.67061 0 15.7486 0 25.0012H12.8126C12.8126 20.4906 15.2633 16.5526 18.9055 14.4453Z"
                fill="#BF534F"
              />
              <path
                d="M12.8126 25H0C0 34.2526 5.02689 42.3306 12.4981 46.6534L18.9054 35.5558C15.2632 33.4484 12.8126 29.5106 12.8126 25Z"
                fill="#0071CE"
              />
            </g>
          </svg>
        </div>
      </div>

      <div className="budget__flow">
        <div className="budget__flow__title">Flow Tracker</div>

        <div className="budget__flow__group">
          <div className="budget__flow__group__chart">
          <canvas id="doughnutChart"></canvas>
          </div>
          <div className="budget__flow__group__cards">
            <div className="budget__flow__group__cards__card budget__flow__group__cards__card-up">
              <div className="budget__flow__group__cards__card__percentage-up">
                <div className="budget__flow__group__cards__card__percentage-up__bar"></div>

                <div>+2.08%</div>
              </div>

              <div className="budget__flow__group__cards__card__group">
                <div className="budget__flow__group__cards__card__group__card1">
                  <div className="budget__flow__group__cards__card__group__card1__title">
                    Income
                  </div>
                  <div className="budget__flow__group__cards__card__group__card1__subtitle">
                    <span>NGN</span> 2000
                  </div>
                </div>

                <svg
                  width="30"
                  height="26"
                  viewBox="0 0 30 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M10.4993 25.5H19.4994C22.3278 25.5 23.742 25.5 24.6207 24.6213C25.3279 23.914 25.4659 22.8597 25.4928 21H4.50586C4.53275 22.8597 4.67069 23.914 5.37802 24.6213C6.25669 25.5 7.67091 25.5 10.4993 25.5Z"
                    fill="#1C274C"
                  />
                  <path
                    d="M13.875 4.5H10.5C7.67157 4.5 6.25736 4.5 5.37869 5.37869C4.5 6.25736 4.5 7.67157 4.5 10.5V19.5C4.5 20.0515 4.5 20.5494 4.50653 21H25.4936C25.5 20.5494 25.5 20.0515 25.5 19.5V10.5C25.5 7.67157 25.5 6.25736 24.6213 5.37869C23.7426 4.5 22.3284 4.5 19.5 4.5H16.125V11.9589L17.1459 10.7679C17.5502 10.2961 18.2604 10.2415 18.7322 10.6458C19.2039 11.0502 19.2585 11.7605 18.8541 12.2322L15.8541 15.7322C15.6405 15.9815 15.3284 16.125 15 16.125C14.6717 16.125 14.3595 15.9815 14.1459 15.7322L11.1458 12.2322C10.7415 11.7605 10.7961 11.0502 11.2679 10.6458C11.7396 10.2415 12.4499 10.2961 12.8541 10.7679L13.875 11.9589V4.5Z"
                    fill="#1C274C"
                  />
                  <path
                    opacity="0.5"
                    d="M24.1666 0H5.83333C2.61168 0 0 2.69997 0 6.03054C0 8.88686 1.92087 11.2794 4.5 11.9028V10.5C4.5 7.67157 4.5 6.25736 5.37868 5.37868C6.25736 4.5 7.67157 4.5 10.5 4.5H13.875H16.125H19.5C22.3284 4.5 23.7426 4.5 24.6213 5.37868C25.5 6.25736 25.5 7.67157 25.5 10.5V11.9028C28.0791 11.2794 30 8.88686 30 6.03054C30 2.69997 27.3883 0 24.1666 0Z"
                    fill="#1C274C"
                  />
                </svg>
              </div>
            </div>
            <div className="budget__flow__group__cards__card budget__flow__group__cards__card-down">
              <div className="budget__flow__group__cards__card__percentage-down">
                <div className="budget__flow__group__cards__card__percentage-down__bar"></div>

                <div>+2.08%</div>
              </div>

              <div className="budget__flow__group__cards__card__group">
                <div className="budget__flow__group__cards__card__group__card1">
                  <div className="budget__flow__group__cards__card__group__card1__title">
                    Income
                  </div>
                  <div className="budget__flow__group__cards__card__group__card1__subtitle">
                    <span>NGN</span> 2000
                  </div>
                </div>

                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9375 26.2485C20.444 26.2478 22.7288 26.2158 24.1605 24.784C25.625 23.3197 25.625 20.9627 25.625 16.2485V8.74609C25.4435 8.74863 25.1886 8.74859 25 8.74856H5C4.81131 8.74859 4.5565 8.74863 4.375 8.74609V16.2485C4.375 20.9627 4.375 23.3197 5.83946 24.784C7.27121 26.2158 9.55606 26.2478 14.0625 26.2485V17.4417L11.9468 19.7924C11.6005 20.1772 11.0077 20.2084 10.6228 19.862C10.238 19.5157 10.2068 18.9229 10.5532 18.538L14.3031 14.3714C14.481 14.1738 14.7343 14.061 15 14.061C15.2657 14.061 15.519 14.1738 15.6969 14.3714L19.4469 18.538C19.7933 18.9229 19.762 19.5157 19.3771 19.862C18.9923 20.2084 18.3995 20.1772 18.0531 19.7924L15.9375 17.4417V26.2485Z"
                    fill="#1C274C"
                  />
                  <g opacity="0.5">
                    <path
                      d="M2.5 6.25C2.5 5.07149 2.5 4.48224 2.86611 4.11611C3.23224 3.75 3.82149 3.75 5 3.75H25C26.1785 3.75 26.7677 3.75 27.1339 4.11611C27.5 4.48224 27.5 5.07149 27.5 6.25C27.5 7.42851 27.5 8.01776 27.1339 8.38389C26.7677 8.75 26.1785 8.75 25 8.75H5C3.82149 8.75 3.23224 8.75 2.86611 8.38389C2.5 8.01776 2.5 7.42851 2.5 6.25Z"
                      fill="#1C274C"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="budget__transactions">
        <div className="budget__transactions__title">Transactions</div>

        <div className="budget__transactions__filters">
          <button className={transactionFilter == "All" &&"budget__transactions__filters__active"} onClick={() => setTransactionFilter("All")}>All</button>
          <button className={transactionFilter == "Groceries" &&"budget__transactions__filters__active"} onClick={() => setTransactionFilter("Groceries")}>Groceries</button>
          <button className={transactionFilter == "Transportation" &&"budget__transactions__filters__active"} onClick={() => setTransactionFilter("Transportation")}>Transportation</button>
          <button className={transactionFilter == "Rent" &&"budget__transactions__filters__active"} onClick={() => setTransactionFilter("Rent")}>Rent</button>
          <button className={transactionFilter == "Inflow" &&"budget__transactions__filters__active"} onClick={() => setTransactionFilter("Inflow")}>Inflow</button>
        </div>

        <div className="budget__transactions__card">
          <div className="budget__transactions__card__group">
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
              <div className="budget__transactions__card__title">
                Indriver Bill
              </div>
              <div className="budget__transactions__card__subtitle">
                Dec 20, 2023 - 11:00am
              </div>
            </div>
          </div>

          <div className="budget__transactions__card__amount-out">
            <span>₦</span>-30,233
          </div>
        </div>
        <div className="budget__transactions__card">
          <div className="budget__transactions__card__group">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#F2FFF9" />
              <path d="M19.888 25V16.48H21.544V25H19.888Z" fill="#0FFF9A" />
            </svg>

            <div>
              <div className="budget__transactions__card__title">
                Indriver Bill
              </div>
              <div className="budget__transactions__card__subtitle">
                Dec 20, 2023 - 11:00am
              </div>
            </div>
          </div>

          <div className="budget__transactions__card__amount-in">
            <span>₦</span>-30,233
          </div>
        </div>
      </div>

    {open &&   <div className="budget__modal" onClick={handleModalClose}>
        <div className="budget__modal__inner">
          {stage === 2 && <button className="budget__modal__inner__filter-item">{filterItem}</button>}
          <div className="budget__modal__inner__title">Create a budget</div>
          <div className="budget__modal__inner__subtitle">
            You can select from the options below
          </div>
          {stage === 1 && <div className="budget__modal__inner__filter">
            <button className={filterItem === "Clothings" && "budget__modal__inner__filter__active"} onClick={() => setFilterItem("Clothings")}>Clothings</button>
            <button className={filterItem === "Giving" && "budget__modal__inner__filter__active"} onClick={() => setFilterItem("Giving")}>Giving</button>
            <button className={filterItem === "Investment" && "budget__modal__inner__filter__active"} onClick={() => setFilterItem("Investment")}>Investment</button>
            <button className={filterItem === "Miscellaneous" && "budget__modal__inner__filter__active"} onClick={() => setFilterItem("Miscellaneous")}>Miscellaneous</button>
            <button className={filterItem === "Other" && "budget__modal__inner__filter__active"} onClick={() => setFilterItem("Other")}>Other</button>
          </div>}

          {stage === 2 && <div className="budget__modal__inner__amount">
            <div>NGN</div>
            <input type="text" placeholder="20,000" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>}

            {stage === 3 && <input type="text" className="budget__modal__inner__input"
            value={filterItem}
            onChange={(e) => setFilterItem(e.target.value)}
            />}
          <div className="budget__modal__inner__button-group">
            {stage > 1 && <button className="budget__modal__inner__button-group__back"
            onClick={handlePrevStage}
            >Back</button>}
            <button className="budget__modal__inner__button-group__next"
            onClick={handleNextStage}
            >Next</button>
          </div>
        </div>
      </div>}

      <Navigation />
    </div>
  );
}
