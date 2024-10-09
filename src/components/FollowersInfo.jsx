import './FollowersInfo.css';
import PropTypes from 'prop-types';
function followersInfo({followers , likes, photos}) {
    return(
      <>
      <div className='infoProfile_conteiner'>
        <div className='firstContainer'>
          <h2 className='followers_number'>{followers}</h2>
          <p className='firsblock-word'>Followers</p>
        </div>
        <div className='secondBlock'>
          <h2 className='likes_number'>{likes}</h2>
          <p className='firsblock-word'>Likes</p>
        </div>
        <div className='thirdBlock'>
          <h2 className='photos_number'>{photos}</h2>
          <p className='firsblock-word'>Photos</p>
        </div>
      </div>
      </>
    );
}
followersInfo.PropTypes={
  followers: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  photos: PropTypes.string.isRequired,
}
export default followersInfo;
