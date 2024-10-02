import Image from "next/image";

export default function ProfileHeader() {
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
            Emmanuel <span>Oghene</span>
          </div>
        </div>
        </div>
      </div>
  );
}
