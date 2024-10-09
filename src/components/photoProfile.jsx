import photoP from './img/image-profile.jpg';
import './photoProfile.css';

function PhotoProfile() {
  return (
    <>
      <div className="icon-container">
        <img className="icon_img" src={photoP} alt="Profile" />

      </div>
    </>
  );
}

export default PhotoProfile;
