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
        <h2>Contact</h2>
    <p>Thanks for viewing, leave a message!</p>
    <form action="https://formsubmit.co/your@email.com" method="POST">
      <label>Name
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full Name'
          required
        />
      </label>
      <label>Email
        <input
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
        required
        />
      </label>
      <label>Subject
        <input
          type="text" 
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder='Subject'
        />
      </label>
      <label>CC
        <input
          type="text" 
          value={cc}
          onChange={(e) => setCC(e.target.value)}
          placeholder='CC'
        />
      </label>
      <label>
        <input 
            className='honey'
          type="text" 
          value='honey'
          onChange={(e) => setHoney(e.target.value)}
          placeholder='CC'
        />
      </label>
      <label>
        <input 
            className='_autoresponse'
          type="text" 
          value="Thank you for reaching out! Due to a high outreach volume, I will respond within 1-3 business days. In the meantime, please do not hesitate to reach out to me via Linkedin or any other social media platforms. I hope you have a wonderful day and I wish you all the best. Sincerely, Will"
          placeholder='CC'
          readOnly
        />
      </label>
      <textarea 
      placeholder="Your Message" 
      className="form-control" 
      name="message" 
      onClick={(e)=>setMessage(e.target.value)} 
      required></textarea>
      <button type='Submit'>
          Send
      </button>
    </form>
    <a href={Pdf} target="_blank" rel="noreferrer">Resume <BsFilePersonFill/></a>
            <a href="https://www.linkedin.com/in/williamlincodeanddesign/" target="blank" rel="noreferrer">LinkedIn<BsFillBriefcaseFill/></a>
            <a href="mailto:willlin1996@gmail.com?subject=Let's Connect!">Contact<BsFillEnvelopeFill/></a> 
    </div>
  )
}
export default Contact;