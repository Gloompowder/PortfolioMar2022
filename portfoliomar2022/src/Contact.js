import * as React from "react";
import { BsFillEnvelopeFill, BsFillBriefcaseFill, BsFilePersonFill } from 'react-icons/bs'
import Pdf from "./William Lin Resume.pdf";
import { useState } from "react";


function Contact(props) {
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [cc, setCC] = useState("");
  const [honey, setHoney] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="Contact">
        <div className = 'content3'>
        <h2>Contact</h2>
    <p>Thanks for viewing, let's stay in touch!</p>
    <form action="https://formsubmit.co/willlin1996@gmail.com" method="POST">
      <label>Name
        <input
        name = 'text'
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full Name'
          required
        />
      </label>
      <label>Email
        <input
        name = 'email'
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
        required
        />
      </label>
      <label>Subject
        <input
        name = 'text'
          type="text" 
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder='Subject'
        />
      </label>
      <label>CC
        <input
        name='text'
          type="text" 
          value={cc}
          onChange={(e) => setCC(e.target.value)}
          placeholder='CC'
        />
      </label>
      <label            className='honey'>
        <input 
        className = 'honey'
        name = 'honey'
          type="text" 
          value=''
          onChange={(e) => setHoney(e.target.value)}
          placeholder='CC'
        />
      </label>
      <label className='_autoresponse'>
        <input 
        name = '_autoresponse'
            className='_autoresponse'
          type="text" 
          value="Thank you for reaching out! Due to a high outreach volume, I will respond within 1-3 business days. In the meantime, please do not hesitate to reach out to me via Linkedin or any other social media platforms. I hope you have a wonderful day and I wish you all the best. Sincerely, Will"
          placeholder='CC'
          readOnly
        />
      </label>
      <textarea 
      rows= '10'
      cols='45'
      placeholder="Your Message" 
      className="form-control" 
      name="message" 
      onClick={(e)=>setMessage(e.target.value)} 
      resize='none'
      required></textarea>
       <a href={Pdf} target="_blank" rel="noreferrer">Resume <BsFilePersonFill/></a>
            <a href="https://www.linkedin.com/in/williamlincodeanddesign/" target="blank" rel="noreferrer">LinkedIn<BsFillBriefcaseFill/></a>
            <a href="mailto:willlin1996@gmail.com?subject=Let's Connect!">Contact<BsFillEnvelopeFill/></a> 
      <button type='Submit'>
          Send
      </button>
    </form>
    </div>
    </div>
  )
}
export default Contact;