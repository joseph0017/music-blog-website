import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';


const AboutForm = () => {
  const [yourName, setYourName] = useState('')
  const [yourEmail, setYourEmail] = useState('')
  const [yourMessage, setYourMessage] = useState('')

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_adsirew', 'template_1fj9i08', form.current, '4hQJ-fZnCTIxhkZU1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Thank you so much for reaching out, I will be in touch shortly')
      setYourName('');
      setYourEmail('');
      setYourMessage('');
  };

    return (
        <div className="ml-20">
        <div  className = "grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 md:ml-96 mb-28">
          <h1 className = "ml-36 text-2xl font-bold mb-4" > Contact Us</h1>
          
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
  <form ref={form} onSubmit={sendEmail} >
    <div className="form-group mb-6">
      <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Name" 
        name = "user_name"
        value = {yourName}
        onChange = {e => setYourName(e.target.value)}
        />
    </div>
    <div className="form-group mb-6">
      <input type="email" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="Email address" 
        name="user_email"
        value = {yourEmail}
        onChange = {e => setYourEmail(e.target.value)}
        />
    </div>
    <div className="form-group mb-6">
      <textarea
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Message"
      name="message"
      value = {yourMessage}
      onChange = {e => setYourMessage(e.target.value)}
    ></textarea>
    </div>
    <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
      value="Send"
      >Send</button>
  </form>
</div>
        </div>
        </div>
    )
}

export default AboutForm
