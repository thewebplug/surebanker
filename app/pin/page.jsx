"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Pin() {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const [pin, setPin] = useState([]);
  console.log('second repeat');


  const handleAddPin = (number) => {
    if(pin?.length < 6 ) {  
      setPin([number, ...pin]);
    }
  }
  const handleRemovePin = (number) => {
    console.log('first repeat');
    
    if(pin?.length > 0 ) {
      console.log('here', pin?.length);
      const temp = [...pin];
      temp?.pop();
      setPin(temp);
    }
  }

  useEffect(() => {
    if(pin?.length > 5) {
      setTimeout(() => {
        window.location.href ="/"
      }, 2000);
    }
  }, [pin])
  return (
    <div className="pin">
      <div className="pin__image">
        <Image src="/assets/shield.png" width={40} height={44.04} />
      </div>

      <div className="pin__title">
        <span>Carchy,</span> Glad You Are Back !
      </div>
      <div className="pin__view-code">
        {pin?.length > 0 ? (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="7.25"
              fill="black"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>
        ) : (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="7.25"
              fill="white"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>
        )}
        {pin?.length > 1 ? (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="7.25"
              fill="black"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>
        ) : (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="7.25"
              fill="white"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>
        )}
        {pin?.length > 2 ? (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="7.25"
              fill="black"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>
        ) : (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="7.25"
              fill="white"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>
        )}

        {pin?.length > 3 ? (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="7.25"
              fill="black"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>
        ) : (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="7.25"
              fill="white"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>
        )}
        {pin?.length > 4 ? (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="7.25"
              fill="black"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>
        ) : (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="7.25"
              fill="white"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>
        )}
        {pin?.length > 5 ? (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="7.25"
              fill="black"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>
        ) : (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="7.25"
              fill="white"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>
        )}
      </div>

      <div className="pin__subtitle">
        <span>Welcome Back,</span> Enter your pin to unlock
      </div>

      <div className="pin__numbers">
        {numbers?.map((number, index) => <div onClick={() => handleAddPin(number)} key={index}>{number}</div>)}
      </div>

      <div className="pin__forgot">
        <div>Forgot?</div>

        <svg
        className="pointer"
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleRemovePin}
        >
          <path
            d="M16.7498 0C18.4828 0 19.899 1.35645 19.9947 3.06558L19.9998 3.25V12.75C19.9998 14.483 18.6433 15.8992 16.9342 15.9949L16.7498 16H8.24862C7.48449 16 6.74714 15.7308 6.16423 15.2436L6.00918 15.1053L1.01349 10.3553C-0.287303 9.1185 -0.339163 7.0613 0.897657 5.76055L1.01349 5.64472L6.00918 0.89472C6.56295 0.36818 7.28278 0.0551499 8.04102 0.00662994L8.24862 0H16.7498ZM9.44602 4.39705C9.15242 4.1792 8.73572 4.2034 8.46952 4.46967C8.20322 4.73594 8.17902 5.1526 8.39682 5.44621L8.46952 5.53033L10.9389 8L8.46952 10.4697L8.39682 10.5538C8.17902 10.8474 8.20322 11.2641 8.46952 11.5303C8.73572 11.7966 9.15242 11.8208 9.44602 11.6029L9.53012 11.5303L11.9999 9.061L14.4695 11.5303L14.5536 11.6029C14.8472 11.8208 15.2639 11.7966 15.5301 11.5303C15.7964 11.2641 15.8206 10.8474 15.6027 10.5538L15.5301 10.4697L13.0609 8L15.5301 5.53033L15.6027 5.44621C15.8206 5.1526 15.7964 4.73594 15.5301 4.46967C15.2639 4.2034 14.8472 4.1792 14.5536 4.39705L14.4695 4.46967L11.9999 6.939L9.53012 4.46967L9.44602 4.39705Z"
            fill="#212121"
          />
        </svg>
      </div>
    </div>
  );
}
