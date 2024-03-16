import './Footer.scss'
import emailpic from '../../assets/emailpic.png';
import linkedinpic from '../../assets/linkedinpic.png';
import instagrampic from '../../assets/instagrampic.png';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Footer = () => {

  const email = 'bemspampa@gmail.com';
  const linkedinURL = 'https://www.linkedin.com/company/grupo-de-estudos-avan%C3%A7ados-em-engenharia-de-energia-green/';
  const instagramURL = 'https://www.instagram.com/green.unipampa/';

  const [copied, setCopied] = useState(false);
  const copyToClipboard = (name: string) => {
    const inputElement = document.createElement('input');
    inputElement.value = name;
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
      <div className='footer-items'>
        <Link to={'/'}><Logo name='footer'/></Link>

        <div className='footer-copy'>
          {copied && <p>Email copiado!</p>}
          <p><span>C</span>Copyright 2024 BEMSPampa, Inc.</p>
        </div>

        <div className='footer-socialgallery'>
          <img onClick={() => copyToClipboard(email)} src={emailpic} className='footer-social'/>
          <Link to={instagramURL} target='_blank'><img src={instagrampic} className='footer-social'/></Link>
          <Link to={linkedinURL} target='_blank'><img src={linkedinpic} className='footer-social'/></Link>
        </div>
      </div>
    </section>
  )
}

export default Footer