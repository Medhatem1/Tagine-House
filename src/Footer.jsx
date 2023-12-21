import { SocialIcon } from 'react-social-icons';
import { BsSend } from "react-icons/bs";
//import emailjs from 'emailjs-com';
import { useState } from 'react';
import axios from 'axios';
export default function Footer() {
  const handleEmailChange = (e) => {
    setEmail({
      ...Email,
      email: e.target.value,
    });
  };
const [Email,setEmail]=useState({email:""})
const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:3009/footer",Email)
  .then(response=>{
    setEmail(response.data);
    console.log(response.data)
  })
  .catch((err)=>{
    console.error(err)
  })
  
}


  return (
    <div className="footer" data-aos="fade-down" data-aos-duration="1000">
      <div className='upper'>
<div className="left">
  <h1 className="title awl">RRRR</h1>
  <div className="para">If you would like to stay connected and be the first to know about our news, events, and exclusive offers, please sign up for our newsletter. You can opt out at any time by clicking unsubscribe on the newsletter.</div>
  <div className="socialmedia" >
  <SocialIcon network="facebook" href='facebook.com' className='sm' />
  <SocialIcon network="x"  href='x.com' className='sm'/>
  <SocialIcon network="instagram" href='ig.com' className='sm' />
  <SocialIcon network="youtube" href='youtube.com' className='sm' />


  </div>
</div>
<div className="middle">
  <h2 className="title hour">Working Hours</h2>
  <div className="para">
    <h3>Moday-Friday 09:00 - 22:00</h3>
    <h3>Saturday        11:00 - 23:30</h3>
    <h3>Sunday          11:00 - 23:00</h3>
  </div>
</div>
<div className="right"><h2 className="title">NEWSLETTER</h2>
<h3 className="para">Receive the latest news from us.</h3>

<div className='blbl'>
      <input type="text" onChange={handleEmailChange} value={Email.email} className='wwq'  />
      <div ><BsSend className='q' onClick={handleSubmit}/></div>
    </div>
 

<label htmlFor=""> I agree to the Privacy Policy</label>

</div>
</div>
<hr/>
<div className="lower">Mohammed V St, Barbican, Rabat EC2Y 8DS, Morocco  +212 5 123 4567  booking@TagineHouse.com
</div>
    </div>
  )
}
