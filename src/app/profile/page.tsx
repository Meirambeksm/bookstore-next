import s from "./styles.module.css";
import Image from "next/image";
import profileImg from "../../../public/assets/profile_image.svg";
import Head from "next/head";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile | Bookstore</title>
        <meta name="description" content="View and edit your profile details" />
      </Head>
      <main className={s.profile}>
        <div className={s.info}>
          <h1 className={s.heading}>Profile</h1>
          <div className={s.infoBody}>
            <Image src={profileImg} alt="Profile image" priority />

            <div className={s.detail}>
              <div>
                <span>Your name</span>
                <h1>John Smith</h1>
              </div>

              <div>
                <span>Your email</span>
                <h1>example@gmail.com</h1>
              </div>

              <button className={s.editBtn}>Edit Profile</button>
            </div>
          </div>
        </div>

        <div className={s.about}>
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante
            consequat, ornare nisi et, ultrices libero. Nunc nibh dolor, maximus
            quis auctor nec, tempor quis ipsum. Proin mollis pellentesque nulla
            ac varius.
          </p>
        </div>
      </main>
    </>
  );
}
