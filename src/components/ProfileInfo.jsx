import './ProfileInfo.css';
import PropTypes from 'prop-types';
function dataProfile({name , age, country}) {
    return(
      <>
      <div className='principal_conteiner'>
        <div className='firstblock'>
          <h2 className='Fullname'>{name}</h2>
          <p className='age'>{age}</p>
        </div>
          <p className='country'>{country}</p>
      </div>
      </>
    );
}
dataProfile.PropTypes={
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
}
export default dataProfile;
