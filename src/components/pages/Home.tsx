import '../style/Home.css'

import {BsGithub, BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
export default function Home(){
  return (
    <div id="home">
      <h1>&lt;Olá me chamo Rafael/&gt;.</h1>
      <section id="text">
        <p>Eu me chamo Rafael, dev Front e Back, <br />
        Atualmente faço sistemas de informação, na Universidade Estadual do Tocantins. <br />
        Por meio desse portifolio desejo impressionar algum dev, e assim conseguir meu primeiro emprego. <br />
        Texto temporario </p>

      </section>
      <section id="icons-social">
        <span><BsGithub size='1.3rem' color='white'/></span>
        <span><FaLinkedinIn size='1.3rem' color='white'/></span>
        <span><BsInstagram size='1.3rem' color='white'/></span>
      </section>
      </div>
  )
}