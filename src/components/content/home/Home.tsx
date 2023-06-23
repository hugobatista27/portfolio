import GITHUB_LOGO from './images/github-icon.png';
import LINKEDIN_LOGO from './images/linkedin-icon.png';

import HTML_LOGO from './images/html-logo.png';
import CSS_LOGO from './images/css-logo.png';
import JAVASCRIPT_LOGO from './images/javascript-logo.png';
import REACT_LOGO from './images/react-logo.png';
import SASS_LOGO from './images/sass-logo.png';
import NODE_LOGO from './images/node-logo.png';

const STACK_IMGS = [
    {img: HTML_LOGO, description: "HTML"},
    {img: CSS_LOGO, description: "CSS"},
    {img: JAVASCRIPT_LOGO, description: "JavaScript"},
    {img: REACT_LOGO, description: "ReactJs"},
    {img: SASS_LOGO, description: "Sass"},
    {img: NODE_LOGO, description: "NodeJs"}
]
export default function Home() {
    return (
        <>
            <h1>Desenvolvedor Front-End React</h1>
            <div>
                <p>Olá, me chamo Hugo! </p>
                <p>
                    Sou apaixonado por tecnologia e desenvolvimento web.
                    Moro em Santa Catarina, Brasil.
                </p>
            </div>
            <div>
                <a href="">
                    <img src={LINKEDIN_LOGO} alt="my linkedin link" />
                    </a>
                <a href="">
                    <img src={GITHUB_LOGO} alt="my github link" />
                </a>
            </div>
            <div>
                <p>Stack</p>
                <div>
                    {STACK_IMGS.map(image => <img src={image.img} alt={image.description} />)}
                </div>
            </div>
        </>
    )
}