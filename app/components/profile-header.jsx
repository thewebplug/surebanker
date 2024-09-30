import Image from "next/image";
import { useSelector } from "react-redux";

export default function ProfileHeader() {
  const auth = useSelector((state) => state.auth);
  return (
      <div className="profile-header">
      <div className="profile-header__inner">
      <Image
          src="/assets/register.png"
          width={40}
          height={40}
          style={{ borderRadius: "50%" }}
        />
        <div>
          <div className="profile-header__inner__title">Profile</div>
          <div className="profile-header__inner__subtitle">
            {auth?.firstName} <span>{auth?.lastName}</span>
          </div>
        </div>
        </div>
      </div>
  );
}
