"use client";

import { useState } from "react";

export default function TransactionHistoryStatement() {
    const [tab, setTab] = useState("All");

  return (
    <div className="transaction">
      <div className="transaction__nav">
        <svg
          className="pointer"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => (window.location.href = "/transactions/history")}
        >
          <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
          <path
            d="M16.7722 9.2278C17.0759 9.53155 17.0759 10.024 16.7722 10.3278L11.8777 15.2222L16.7722 20.1167C17.0759 20.4205 17.0759 20.9129 16.7722 21.2167C16.4685 21.5204 15.976 21.5204 15.6723 21.2167L10.2278 15.7722C9.92407 15.4685 9.92407 14.976 10.2278 14.6723L15.6723 9.2278C15.976 8.92407 16.4685 8.92407 16.7722 9.2278Z"
            fill="#212121"
          />
        </svg>
        <div>Get account statement</div>
      </div>

      <div className="transaction__statement-icon">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#FFE8FD" />
          <path
            d="M25.9998 12.333V19.333C25.9998 20.6217 27.0445 21.6663 28.3332 21.6663H35.3332V33.333C35.3332 34.6217 34.2885 35.6663 32.9998 35.6663H18.9998C17.7112 35.6663 16.6665 34.6217 16.6665 33.333V14.6663C16.6665 13.3777 17.7112 12.333 18.9998 12.333H25.9998ZM27.7498 12.9163V19.333C27.7498 19.6552 28.0111 19.9163 28.3332 19.9163H34.7498L27.7498 12.9163Z"
            fill="#C10898"
          />
        </svg>
      </div>

      <div className="transaction__statement-date-title">Date Range</div>

      <div className="transaction__statement-date-range">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75ZM7.75 13.5C7.05964 13.5 6.5 14.0596 6.5 14.75C6.5 15.4404 7.05964 16 7.75 16C8.44036 16 9 15.4404 9 14.75C9 14.0596 8.44036 13.5 7.75 13.5ZM12 13.5C11.3096 13.5 10.75 14.0596 10.75 14.75C10.75 15.4404 11.3096 16 12 16C12.6904 16 13.25 15.4404 13.25 14.75C13.25 14.0596 12.6904 13.5 12 13.5ZM7.75 8.5C7.05964 8.5 6.5 9.05964 6.5 9.75C6.5 10.4404 7.05964 11 7.75 11C8.44036 11 9 10.4404 9 9.75C9 9.05964 8.44036 8.5 7.75 8.5ZM12 8.5C11.3096 8.5 10.75 9.05964 10.75 9.75C10.75 10.4404 11.3096 11 12 11C12.6904 11 13.25 10.4404 13.25 9.75C13.25 9.05964 12.6904 8.5 12 8.5ZM16.25 8.5C15.5596 8.5 15 9.05964 15 9.75C15 10.4404 15.5596 11 16.25 11C16.9404 11 17.5 10.4404 17.5 9.75C17.5 9.05964 16.9404 8.5 16.25 8.5Z"
              fill="#667085"
            />
          </svg>
          Start Date Of Transaction
        </div>
        <div>
          End Date Of Transaction
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75ZM7.75 13.5C7.05964 13.5 6.5 14.0596 6.5 14.75C6.5 15.4404 7.05964 16 7.75 16C8.44036 16 9 15.4404 9 14.75C9 14.0596 8.44036 13.5 7.75 13.5ZM12 13.5C11.3096 13.5 10.75 14.0596 10.75 14.75C10.75 15.4404 11.3096 16 12 16C12.6904 16 13.25 15.4404 13.25 14.75C13.25 14.0596 12.6904 13.5 12 13.5ZM7.75 8.5C7.05964 8.5 6.5 9.05964 6.5 9.75C6.5 10.4404 7.05964 11 7.75 11C8.44036 11 9 10.4404 9 9.75C9 9.05964 8.44036 8.5 7.75 8.5ZM12 8.5C11.3096 8.5 10.75 9.05964 10.75 9.75C10.75 10.4404 11.3096 11 12 11C12.6904 11 13.25 10.4404 13.25 9.75C13.25 9.05964 12.6904 8.5 12 8.5ZM16.25 8.5C15.5596 8.5 15 9.05964 15 9.75C15 10.4404 15.5596 11 16.25 11C16.9404 11 17.5 10.4404 17.5 9.75C17.5 9.05964 16.9404 8.5 16.25 8.5Z"
              fill="#667085"
            />
          </svg>
        </div>
      </div>

      <div className="transaction__statement-date-subtitle">
        Transaction Type
      </div>

      <div className="transaction__statement-tabs">
        <div
        className={tab === "All" && "transaction__statement-tabs__active"}
        onClick={() => setTab("All")}
        >All</div>
        <div
        className={tab === "Debit" && "transaction__statement-tabs__active"}
        onClick={() => setTab("Debit")}
        >Debit</div>
        <div
          className={tab === "Credit" && "transaction__statement-tabs__active"}
          onClick={() => setTab("Credit")}
        >Credit</div>
      </div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
      <button className="transaction__button">
      Generate Report
      </button>
    </div>
  );
}
