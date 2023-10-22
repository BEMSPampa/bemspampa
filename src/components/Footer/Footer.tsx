import './Footer.scss'
import pic from '../../assets/emailpic.png';
import { useState } from 'react';

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
    <section className='footer'>
      <h2>Contatos</h2>
      <img onClick={copyToClipboard} src={pic} />
      {copied && <p>Email copiado!</p>}
    </section>
  )
}

export default Footer