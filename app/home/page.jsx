import Image from "next/image";

export default function TransactionPinFail() {
  return (
    <div className="surebanker-home">
      <header className="surebanker-home__header">
        <Image src="/assets/surebanker-logo.png" width={132} height={50.6} />
      </header>

      <main className="surebanker-home__main">
        <h1 className="surebanker-home__main__title">SUREBANKER COMING SOON</h1>
        <h2 className="surebanker-home__main__subtitle">
          Collect payments, access loans and manage operations with a business
          banking solution that meets all your needs.
        </h2>

        <div className="surebanker-home__main__cards">
          <div className="surebanker-home__main__cards__card">
            <div className="surebanker-home__main__cards__card__title">
              FUND YOUR aCCOUNT
            </div>

            <div className="surebanker-home__main__cards__card__image">
                <Image
                objectFit="cover"
                layout="fill"
                src="/assets/fund-your-account.png"
                style={{borderRadius: "0 0 23px 23px"}}
                />
            </div>
          </div>
          <div className="surebanker-home__main__cards__card">
            <div className="surebanker-home__main__cards__card__title">
            Instant <br /> dOLLAR <br /> cards

            </div>

            <div className="surebanker-home__main__cards__card__image">
                <Image
                objectFit="cover"
                layout="fill"
                src="/assets/instant-dollar-cards.png"
                style={{borderRadius: "0 0 23px 23px"}}
                />
            </div>
          </div>
          <div className="surebanker-home__main__cards__card">
            <div className="surebanker-home__main__cards__card__title">
            Seamless transactions

            </div>

            <div className="surebanker-home__main__cards__card__image">
                <Image
                objectFit="cover"
                layout="fill"
                src="/assets/seamless-transactions.png"
                style={{borderRadius: "0 0 23px 23px"}}
                />
            </div>
          </div>
        </div>

<div className="surebanker-home__main__waitlist">
<div className="surebanker-home__main__waitlist__title">
Elevate Your <br /> Banking <br /> Experience Now!
</div>
<div className="surebanker-home__main__waitlist__box">
<div className="surebanker-home__main__waitlist__box__title">
join Waitlist

    </div>
<div className="surebanker-home__main__waitlist__box__subtitle">
Join our waiting list 5000+
    </div>
    
    <input type="text" placeholder="Your email" />

    <button>Submit</button>
    </div>

    </div>        
      </main>

      <footer className="surebanker-home__footer">
        <div className="surebanker-home__footer__divider"></div>
        <Image src="/assets/surebanker-logo.png" width={132} height={50.6} />
      </footer>
    </div>
  );
}
