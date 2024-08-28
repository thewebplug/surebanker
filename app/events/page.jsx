import Image from "next/image";
import Link from "next/link";

export default function Events() {
  return (
    <main className="events">
      <div className="events__hero">
        <div className="events__hero__hero-inner">
          <div className="events__hero__hero-inner__link">
            Home <span>/ Events</span>
          </div>
          <div className="events__hero__hero-inner__title">
          Find Event
          </div>
          <div className="events__hero__hero-inner__book">
            <div className="events__hero__hero-inner__book__book-inner">
              <div className="events__hero__hero-inner__book__book-inner__search">
                <input
                  type="text"
                  className="events__hero__hero-inner__book__book-inner__search__input"
                  placeholder="Search by name or type..."
                />
                <h2 className="events__hero__hero-inner__book__book-inner__search__div">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07715 7.83691H17.9304"
                      stroke="#242323"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.2017 11.0916H14.2098"
                      stroke="#242323"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5039 11.0916H10.512"
                      stroke="#242323"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.79834 11.0916H6.80645"
                      stroke="#242323"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.2017 14.3303H14.2098"
                      stroke="#242323"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5039 14.3303H10.512"
                      stroke="#242323"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.79834 14.3303H6.80645"
                      stroke="#242323"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.8696 1.66675V4.40906"
                      stroke="#242323"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.13818 1.66675V4.40906"
                      stroke="#242323"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.0319 2.98267H6.9758C4.52856 2.98267 3 4.34594 3 6.85185V14.3932C3 16.9385 4.52856 18.3333 6.9758 18.3333H14.0242C16.4791 18.3333 18 16.9622 18 14.4563V6.85185C18.0077 4.34594 16.4868 2.98267 14.0319 2.98267Z"
                      stroke="#242323"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Date
                </h2>
                <h2 className="events__hero__hero-inner__book__book-inner__search__div">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.208 1.66675C13.9988 1.66675 17.083 4.77425 17.083 8.59425C17.083 13.2901 11.703 17.9167 10.208 17.9167C8.71301 17.9167 3.33301 13.2901 3.33301 8.59425C3.33301 4.77425 6.41717 1.66675 10.208 1.66675ZM10.208 2.91675C7.10634 2.91675 4.58301 5.46425 4.58301 8.59425C4.58301 12.5767 9.26967 16.4567 10.208 16.6634C11.1463 16.4559 15.833 12.5759 15.833 8.59425C15.833 5.46425 13.3097 2.91675 10.208 2.91675ZM10.2088 5.83341C11.7022 5.83341 12.9172 7.04841 12.9172 8.54258C12.9172 10.0359 11.7022 11.2501 10.2088 11.2501C8.71551 11.2501 7.50051 10.0359 7.50051 8.54258C7.50051 7.04841 8.71551 5.83341 10.2088 5.83341ZM10.2088 7.08341C9.40467 7.08341 8.75051 7.73758 8.75051 8.54258C8.75051 9.34675 9.40467 10.0001 10.2088 10.0001C11.013 10.0001 11.6672 9.34675 11.6672 8.54258C11.6672 7.73758 11.013 7.08341 10.2088 7.08341Z"
                      fill="#242323"
                    />
                  </svg>
                  Location
                </h2>
                <h2 className="events__hero__hero-inner__book__book-inner__search__div">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.70817 10.8334C9.099 10.8334 9.24984 11.9834 9.24984 14.3751C9.24984 15.5734 9.24984 16.4259 8.7465 17.0501C8.16734 17.7692 7.11317 17.9167 5.70817 17.9167C4.30317 17.9167 3.249 17.7692 2.66984 17.0501C2.1665 16.4259 2.1665 15.5742 2.1665 14.3959L2.7915 14.3751H2.1665C2.1665 11.9834 2.31734 10.8334 5.70817 10.8334ZM14.8748 10.8334C18.2657 10.8334 18.4165 11.9834 18.4165 14.3751C18.4165 15.5734 18.4165 16.4259 17.9132 17.0501C17.334 17.7692 16.2798 17.9167 14.8748 17.9167C13.4698 17.9167 12.4157 17.7692 11.8365 17.0501C11.3332 16.4259 11.3332 15.5742 11.3332 14.3959L11.9582 14.3751H11.3332C11.3332 11.9834 11.484 10.8334 14.8748 10.8334ZM5.87997 12.0838L5.70817 12.0834C3.53403 12.0834 3.42253 12.2394 3.41681 14.0643L3.41716 14.7752C3.42111 15.501 3.44877 16.0253 3.64234 16.2667C3.86317 16.5401 4.519 16.6667 5.70817 16.6667C6.89734 16.6667 7.55317 16.5392 7.774 16.2659C7.99984 15.9851 7.99984 15.3184 7.99984 14.3951C7.99984 12.3116 7.99984 12.0936 5.87997 12.0838ZM15.0466 12.0838L14.8748 12.0834C12.7007 12.0834 12.5892 12.2394 12.5835 14.0643L12.5838 14.7752C12.5878 15.501 12.6154 16.0253 12.809 16.2667C13.0298 16.5401 13.6857 16.6667 14.8748 16.6667C16.064 16.6667 16.7198 16.5392 16.9407 16.2659C17.1665 15.9851 17.1665 15.3184 17.1665 14.3951C17.1665 12.3116 17.1665 12.0936 15.0466 12.0838ZM5.70817 1.66675C9.099 1.66675 9.24984 2.81675 9.24984 5.20841C9.24984 6.40675 9.24984 7.25925 8.7465 7.88341C8.16734 8.60258 7.11317 8.75008 5.70817 8.75008C4.30317 8.75008 3.249 8.60258 2.66984 7.88341C2.1665 7.25925 2.1665 6.40758 2.1665 5.22925L2.7915 5.20841H2.1665C2.1665 2.81675 2.31734 1.66675 5.70817 1.66675ZM14.8748 1.66675C18.2657 1.66675 18.4165 2.81675 18.4165 5.20841C18.4165 6.40675 18.4165 7.25925 17.9132 7.88341C17.334 8.60258 16.2798 8.75008 14.8748 8.75008C13.4698 8.75008 12.4157 8.60258 11.8365 7.88341C11.3332 7.25925 11.3332 6.40758 11.3332 5.22925L11.9582 5.20841H11.3332C11.3332 2.81675 11.484 1.66675 14.8748 1.66675ZM5.87997 2.91712L5.70817 2.91675C3.53403 2.91675 3.42253 3.07276 3.41681 4.89762L3.41716 5.60857C3.42111 6.33437 3.44877 6.85865 3.64234 7.10008C3.86317 7.37341 4.519 7.50008 5.70817 7.50008C6.89734 7.50008 7.55317 7.37258 7.774 7.09925C7.99984 6.81841 7.99984 6.15175 7.99984 5.22841C7.99984 3.14491 7.99984 2.92693 5.87997 2.91712ZM15.0466 2.91712L14.8748 2.91675C12.7007 2.91675 12.5892 3.07276 12.5835 4.89762L12.5838 5.60857C12.5878 6.33437 12.6154 6.85865 12.809 7.10008C13.0298 7.37341 13.6857 7.50008 14.8748 7.50008C16.064 7.50008 16.7198 7.37258 16.9407 7.09925C17.1665 6.81841 17.1665 6.15175 17.1665 5.22841C17.1665 3.14491 17.1665 2.92693 15.0466 2.91712Z"
                      fill="#242323"
                    />
                  </svg>
                  Categories
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3332 7.08325L10.4998 12.9166L4.6665 7.08325"
                      stroke="#242323"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </h2>
                <button className="events__hero__hero-inner__book__book-inner__search__button">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div className="events__events">
        <div className="events__events__featured">
          <h2 className="events__events__featured__title">Featured Events</h2>
          <div className="events__events__featured__grid">
            <div className="events__events__featured__grid__card">
              <div className="events__events__featured__grid__card__img">
                <Image alt=""
                  src="/assets/card img.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="events__events__featured__grid__card__card-inner">
                <h3 className="events__events__featured__grid__card__card-inner__title">
                  Dev Fest 2024
                </h3>
                <h4 className="events__events__featured__grid__card__card-inner__subtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.31934 7.0531H15.6873"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 9.98218H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 9.98218H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 9.98218H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 12.8971H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 12.8971H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 12.8971H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0327 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.97314 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1782 2.68433H5.82773C3.62522 2.68433 2.24951 3.91128 2.24951 6.1666V12.9538C2.24951 15.2446 3.62522 16.4999 5.82773 16.4999H12.1713C14.3807 16.4999 15.7495 15.2659 15.7495 13.0106V6.1666C15.7564 3.91128 14.3877 2.68433 12.1782 2.68433Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  10 March, 2024
                  <svg
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.24951" cy="3" r="2.25" fill="#808080" />
                  </svg>
                  7:00 PM
                </h4>
                <h5 className="events__events__featured__grid__card__card-inner__subsubtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.8745 7.87526C10.8745 6.83931 10.0351 5.99988 8.99989 5.99988C7.96394 5.99988 7.12451 6.83931 7.12451 7.87526C7.12451 8.91045 7.96394 9.74988 8.99989 9.74988C10.0351 9.74988 10.8745 8.91045 10.8745 7.87526Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.99915 15.7499C8.10029 15.7499 3.37451 11.9237 3.37451 7.92235C3.37451 4.78986 5.89234 2.24988 8.99915 2.24988C12.106 2.24988 14.6245 4.78986 14.6245 7.92235C14.6245 11.9237 9.898 15.7499 8.99915 15.7499Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Harrow Park, wuse
                </h5>
              </div>
            </div>
            <div className="events__events__featured__grid__card">
              <div className="events__events__featured__grid__card__img">
                <Image alt=""
                  src="/assets/card img.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="events__events__featured__grid__card__card-inner">
                <h3 className="events__events__featured__grid__card__card-inner__title">
                  Dev Fest 2024
                </h3>
                <h4 className="events__events__featured__grid__card__card-inner__subtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.31934 7.0531H15.6873"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 9.98218H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 9.98218H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 9.98218H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 12.8971H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 12.8971H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 12.8971H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0327 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.97314 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1782 2.68433H5.82773C3.62522 2.68433 2.24951 3.91128 2.24951 6.1666V12.9538C2.24951 15.2446 3.62522 16.4999 5.82773 16.4999H12.1713C14.3807 16.4999 15.7495 15.2659 15.7495 13.0106V6.1666C15.7564 3.91128 14.3877 2.68433 12.1782 2.68433Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  10 March, 2024
                  <svg
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.24951" cy="3" r="2.25" fill="#808080" />
                  </svg>
                  7:00 PM
                </h4>
                <h5 className="events__events__featured__grid__card__card-inner__subsubtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.8745 7.87526C10.8745 6.83931 10.0351 5.99988 8.99989 5.99988C7.96394 5.99988 7.12451 6.83931 7.12451 7.87526C7.12451 8.91045 7.96394 9.74988 8.99989 9.74988C10.0351 9.74988 10.8745 8.91045 10.8745 7.87526Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.99915 15.7499C8.10029 15.7499 3.37451 11.9237 3.37451 7.92235C3.37451 4.78986 5.89234 2.24988 8.99915 2.24988C12.106 2.24988 14.6245 4.78986 14.6245 7.92235C14.6245 11.9237 9.898 15.7499 8.99915 15.7499Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Harrow Park, wuse
                </h5>
              </div>
            </div>
            <div className="events__events__featured__grid__card">
              <div className="events__events__featured__grid__card__img">
                <Image alt=""
                  src="/assets/card img.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="events__events__featured__grid__card__card-inner">
                <h3 className="events__events__featured__grid__card__card-inner__title">
                  Dev Fest 2024
                </h3>
                <h4 className="events__events__featured__grid__card__card-inner__subtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.31934 7.0531H15.6873"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 9.98218H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 9.98218H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 9.98218H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 12.8971H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 12.8971H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 12.8971H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0327 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.97314 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1782 2.68433H5.82773C3.62522 2.68433 2.24951 3.91128 2.24951 6.1666V12.9538C2.24951 15.2446 3.62522 16.4999 5.82773 16.4999H12.1713C14.3807 16.4999 15.7495 15.2659 15.7495 13.0106V6.1666C15.7564 3.91128 14.3877 2.68433 12.1782 2.68433Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  10 March, 2024
                  <svg
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.24951" cy="3" r="2.25" fill="#808080" />
                  </svg>
                  7:00 PM
                </h4>
                <h5 className="events__events__featured__grid__card__card-inner__subsubtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.8745 7.87526C10.8745 6.83931 10.0351 5.99988 8.99989 5.99988C7.96394 5.99988 7.12451 6.83931 7.12451 7.87526C7.12451 8.91045 7.96394 9.74988 8.99989 9.74988C10.0351 9.74988 10.8745 8.91045 10.8745 7.87526Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.99915 15.7499C8.10029 15.7499 3.37451 11.9237 3.37451 7.92235C3.37451 4.78986 5.89234 2.24988 8.99915 2.24988C12.106 2.24988 14.6245 4.78986 14.6245 7.92235C14.6245 11.9237 9.898 15.7499 8.99915 15.7499Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Harrow Park, wuse
                </h5>
              </div>
            </div>
            <div className="events__events__featured__grid__card">
              <div className="events__events__featured__grid__card__img">
                <Image alt=""
                  src="/assets/card img.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="events__events__featured__grid__card__card-inner">
                <h3 className="events__events__featured__grid__card__card-inner__title">
                  Dev Fest 2024
                </h3>
                <h4 className="events__events__featured__grid__card__card-inner__subtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.31934 7.0531H15.6873"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 9.98218H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 9.98218H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 9.98218H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 12.8971H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 12.8971H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 12.8971H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0327 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.97314 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1782 2.68433H5.82773C3.62522 2.68433 2.24951 3.91128 2.24951 6.1666V12.9538C2.24951 15.2446 3.62522 16.4999 5.82773 16.4999H12.1713C14.3807 16.4999 15.7495 15.2659 15.7495 13.0106V6.1666C15.7564 3.91128 14.3877 2.68433 12.1782 2.68433Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  10 March, 2024
                  <svg
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.24951" cy="3" r="2.25" fill="#808080" />
                  </svg>
                  7:00 PM
                </h4>
                <h5 className="events__events__featured__grid__card__card-inner__subsubtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.8745 7.87526C10.8745 6.83931 10.0351 5.99988 8.99989 5.99988C7.96394 5.99988 7.12451 6.83931 7.12451 7.87526C7.12451 8.91045 7.96394 9.74988 8.99989 9.74988C10.0351 9.74988 10.8745 8.91045 10.8745 7.87526Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.99915 15.7499C8.10029 15.7499 3.37451 11.9237 3.37451 7.92235C3.37451 4.78986 5.89234 2.24988 8.99915 2.24988C12.106 2.24988 14.6245 4.78986 14.6245 7.92235C14.6245 11.9237 9.898 15.7499 8.99915 15.7499Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Harrow Park, wuse
                </h5>
              </div>
            </div>
            <div className="events__events__featured__grid__card">
              <div className="events__events__featured__grid__card__img">
                <Image alt=""
                  src="/assets/card img.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="events__events__featured__grid__card__card-inner">
                <h3 className="events__events__featured__grid__card__card-inner__title">
                  Dev Fest 2024
                </h3>
                <h4 className="events__events__featured__grid__card__card-inner__subtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.31934 7.0531H15.6873"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 9.98218H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 9.98218H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 9.98218H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 12.8971H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 12.8971H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 12.8971H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0327 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.97314 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1782 2.68433H5.82773C3.62522 2.68433 2.24951 3.91128 2.24951 6.1666V12.9538C2.24951 15.2446 3.62522 16.4999 5.82773 16.4999H12.1713C14.3807 16.4999 15.7495 15.2659 15.7495 13.0106V6.1666C15.7564 3.91128 14.3877 2.68433 12.1782 2.68433Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  10 March, 2024
                  <svg
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.24951" cy="3" r="2.25" fill="#808080" />
                  </svg>
                  7:00 PM
                </h4>
                <h5 className="events__events__featured__grid__card__card-inner__subsubtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.8745 7.87526C10.8745 6.83931 10.0351 5.99988 8.99989 5.99988C7.96394 5.99988 7.12451 6.83931 7.12451 7.87526C7.12451 8.91045 7.96394 9.74988 8.99989 9.74988C10.0351 9.74988 10.8745 8.91045 10.8745 7.87526Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.99915 15.7499C8.10029 15.7499 3.37451 11.9237 3.37451 7.92235C3.37451 4.78986 5.89234 2.24988 8.99915 2.24988C12.106 2.24988 14.6245 4.78986 14.6245 7.92235C14.6245 11.9237 9.898 15.7499 8.99915 15.7499Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Harrow Park, wuse
                </h5>
              </div>
            </div>
            <div className="events__events__featured__grid__card">
              <div className="events__events__featured__grid__card__img">
                <Image alt=""
                  src="/assets/card img.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="events__events__featured__grid__card__card-inner">
                <h3 className="events__events__featured__grid__card__card-inner__title">
                  Dev Fest 2024
                </h3>
                <h4 className="events__events__featured__grid__card__card-inner__subtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.31934 7.0531H15.6873"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 9.98218H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 9.98218H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 9.98218H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 12.8971H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 12.8971H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 12.8971H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0327 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.97314 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1782 2.68433H5.82773C3.62522 2.68433 2.24951 3.91128 2.24951 6.1666V12.9538C2.24951 15.2446 3.62522 16.4999 5.82773 16.4999H12.1713C14.3807 16.4999 15.7495 15.2659 15.7495 13.0106V6.1666C15.7564 3.91128 14.3877 2.68433 12.1782 2.68433Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  10 March, 2024
                  <svg
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.24951" cy="3" r="2.25" fill="#808080" />
                  </svg>
                  7:00 PM
                </h4>
                <h5 className="events__events__featured__grid__card__card-inner__subsubtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.8745 7.87526C10.8745 6.83931 10.0351 5.99988 8.99989 5.99988C7.96394 5.99988 7.12451 6.83931 7.12451 7.87526C7.12451 8.91045 7.96394 9.74988 8.99989 9.74988C10.0351 9.74988 10.8745 8.91045 10.8745 7.87526Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.99915 15.7499C8.10029 15.7499 3.37451 11.9237 3.37451 7.92235C3.37451 4.78986 5.89234 2.24988 8.99915 2.24988C12.106 2.24988 14.6245 4.78986 14.6245 7.92235C14.6245 11.9237 9.898 15.7499 8.99915 15.7499Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Harrow Park, wuse
                </h5>
              </div>
            </div>
            <div className="events__events__featured__grid__card">
              <div className="events__events__featured__grid__card__img">
                <Image alt=""
                  src="/assets/card img.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="events__events__featured__grid__card__card-inner">
                <h3 className="events__events__featured__grid__card__card-inner__title">
                  Dev Fest 2024
                </h3>
                <h4 className="events__events__featured__grid__card__card-inner__subtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.31934 7.0531H15.6873"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 9.98218H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 9.98218H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 9.98218H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 12.8971H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 12.8971H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 12.8971H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0327 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.97314 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1782 2.68433H5.82773C3.62522 2.68433 2.24951 3.91128 2.24951 6.1666V12.9538C2.24951 15.2446 3.62522 16.4999 5.82773 16.4999H12.1713C14.3807 16.4999 15.7495 15.2659 15.7495 13.0106V6.1666C15.7564 3.91128 14.3877 2.68433 12.1782 2.68433Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  10 March, 2024
                  <svg
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.24951" cy="3" r="2.25" fill="#808080" />
                  </svg>
                  7:00 PM
                </h4>
                <h5 className="events__events__featured__grid__card__card-inner__subsubtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.8745 7.87526C10.8745 6.83931 10.0351 5.99988 8.99989 5.99988C7.96394 5.99988 7.12451 6.83931 7.12451 7.87526C7.12451 8.91045 7.96394 9.74988 8.99989 9.74988C10.0351 9.74988 10.8745 8.91045 10.8745 7.87526Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.99915 15.7499C8.10029 15.7499 3.37451 11.9237 3.37451 7.92235C3.37451 4.78986 5.89234 2.24988 8.99915 2.24988C12.106 2.24988 14.6245 4.78986 14.6245 7.92235C14.6245 11.9237 9.898 15.7499 8.99915 15.7499Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Harrow Park, wuse
                </h5>
              </div>
            </div>
            <div className="events__events__featured__grid__card">
              <div className="events__events__featured__grid__card__img">
                <Image alt=""
                  src="/assets/card img.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="events__events__featured__grid__card__card-inner">
                <h3 className="events__events__featured__grid__card__card-inner__title">
                  Dev Fest 2024
                </h3>
                <h4 className="events__events__featured__grid__card__card-inner__subtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.31934 7.0531H15.6873"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 9.98218H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 9.98218H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 9.98218H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 12.8971H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 12.8971H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 12.8971H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0327 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.97314 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1782 2.68433H5.82773C3.62522 2.68433 2.24951 3.91128 2.24951 6.1666V12.9538C2.24951 15.2446 3.62522 16.4999 5.82773 16.4999H12.1713C14.3807 16.4999 15.7495 15.2659 15.7495 13.0106V6.1666C15.7564 3.91128 14.3877 2.68433 12.1782 2.68433Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  10 March, 2024
                  <svg
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.24951" cy="3" r="2.25" fill="#808080" />
                  </svg>
                  7:00 PM
                </h4>
                <h5 className="events__events__featured__grid__card__card-inner__subsubtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.8745 7.87526C10.8745 6.83931 10.0351 5.99988 8.99989 5.99988C7.96394 5.99988 7.12451 6.83931 7.12451 7.87526C7.12451 8.91045 7.96394 9.74988 8.99989 9.74988C10.0351 9.74988 10.8745 8.91045 10.8745 7.87526Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.99915 15.7499C8.10029 15.7499 3.37451 11.9237 3.37451 7.92235C3.37451 4.78986 5.89234 2.24988 8.99915 2.24988C12.106 2.24988 14.6245 4.78986 14.6245 7.92235C14.6245 11.9237 9.898 15.7499 8.99915 15.7499Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Harrow Park, wuse
                </h5>
              </div>
            </div>
            <div className="events__events__featured__grid__card">
              <div className="events__events__featured__grid__card__img">
                <Image alt=""
                  src="/assets/card img.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="events__events__featured__grid__card__card-inner">
                <h3 className="events__events__featured__grid__card__card-inner__title">
                  Dev Fest 2024
                </h3>
                <h4 className="events__events__featured__grid__card__card-inner__subtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.31934 7.0531H15.6873"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 9.98218H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 9.98218H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 9.98218H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3311 12.8971H12.3391"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00293 12.8971H9.01096"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.66797 12.8971H5.676"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0327 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.97314 1.5V3.96809"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1782 2.68433H5.82773C3.62522 2.68433 2.24951 3.91128 2.24951 6.1666V12.9538C2.24951 15.2446 3.62522 16.4999 5.82773 16.4999H12.1713C14.3807 16.4999 15.7495 15.2659 15.7495 13.0106V6.1666C15.7564 3.91128 14.3877 2.68433 12.1782 2.68433Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  10 March, 2024
                  <svg
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.24951" cy="3" r="2.25" fill="#808080" />
                  </svg>
                  7:00 PM
                </h4>
                <h5 className="events__events__featured__grid__card__card-inner__subsubtitle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.8745 7.87526C10.8745 6.83931 10.0351 5.99988 8.99989 5.99988C7.96394 5.99988 7.12451 6.83931 7.12451 7.87526C7.12451 8.91045 7.96394 9.74988 8.99989 9.74988C10.0351 9.74988 10.8745 8.91045 10.8745 7.87526Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.99915 15.7499C8.10029 15.7499 3.37451 11.9237 3.37451 7.92235C3.37451 4.78986 5.89234 2.24988 8.99915 2.24988C12.106 2.24988 14.6245 4.78986 14.6245 7.92235C14.6245 11.9237 9.898 15.7499 8.99915 15.7499Z"
                      stroke="#808080"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Harrow Park, wuse
                </h5>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    
    </main>
  );
}
