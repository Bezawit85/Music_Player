import './about.css';
import Untitled from './musicnote.mp4';

const About = () => {
 const handleClick = () => {
    window.location.href = '/home'; 
  };

  return (
    <div className="main" id='about'>
      <div className='background'>
      <div className='overlay'></div>
    <video src={Untitled} autoPlay loop muted />
    </div>
    <div className='content'>
      <h1>Welcome to Music Arena</h1>
      <br />
      <button className="button" onClick={handleClick}>Get started</button>
    </div>
    </div>
  )
}

export default About