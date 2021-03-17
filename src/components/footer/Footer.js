import './Footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import content from '../../content';
function Footer(){

    return (
        <div class="text-white text-2xl p-8 flex justify-center" style={{
            background: '#091c29',
          }}>
              <div className="w-2/5 flex justify-between align-middle">
                {content.footer.title}
                <a href="https://github.com/elviajero971" target="_blank"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/lucas-illiano/" target="_blank"><FaLinkedinIn/></a>
              </div>
        </div>
    ) 
}

export default Footer;