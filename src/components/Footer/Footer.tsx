import './Footer.scss'
import pic from '../../assets/emailpic.png';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Footer = () => {

  const email = 'bemspampa@gmail.com';

  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    const inputElement = document.createElement('input');
    inputElement.value = email;
    document.body.appendChild(inputElement);
    inputElement.select();
    inputElement.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };


  return (
    <section className='footer-container'>
      <div>
        <Link to={'/'}><Logo/></Link>

        <div className='footer-copy'>
          {copied && <p>Email copiado!</p>}
          <p><span>C</span>Copyright 2024 BEMSPampa, Inc.</p>
        </div>

        <div className='footer-socialgallery'>
          <img onClick={copyToClipboard} src={pic} className='footer-social'/>
          <img onClick={copyToClipboard} src={pic} className='footer-social'/>
          <img onClick={copyToClipboard} src={pic} className='footer-social'/>
        </div>
      </div>
    </section>
  )
}

export default Footer