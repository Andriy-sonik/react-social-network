import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <img
        className="imgResponsive"
        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sisters-horses-panorama-twenty-two-north-photography.jpg"
      />
      <div className={s.descriptionBlock}>
        <img src="https://i.pinimg.com/originals/29/6e/b2/296eb2e1c79994d7e631fc9ecc3d506b.jpg" />
      </div>
    </div>
  );
};
export default ProfileInfo;
