import './App.css';
import img_back from './components/img/bg-pattern-card.svg';
import img_circle1 from './components/img/bg-pattern-top.svg';
import img_circle2 from './components/img/bg-pattern-bottom.svg';
import PhotoProfile from './components/photoProfile';
import ProfileInfo from './components/ProfileInfo';
import FollowersInfo from './components/FollowersInfo';

const App = () => {
  return (
    <>
      <div className='circle1'>
        <img src={img_circle1} alt="circle1-background"/>
      </div>
      <div className='card_container'>
        <div className='header_container'>
          <img className='card-img-background' src={img_back} alt="image1-background" />
        </div>
        <div className='info_perfil'>
          <PhotoProfile />
          <ProfileInfo
            name="Victor Crest"
            age={26}
            country="London"
          />
          <FollowersInfo
            followers="80K"
            likes="803K"
            photos="1.4K"
          />
        </div>
      </div>
      <div className='circle2'>
        <img src={img_circle2} alt="circle2-background"/>
      </div>
    </>
  );
}

export default App;
