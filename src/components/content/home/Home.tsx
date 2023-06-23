import GITHUB_LOGO from './images/github-icon.png';
import LINKEDIN_LOGO from './images/linkedin-icon.png';
import HOME_IMG from './images/home-image.png';

import { STACK_IMGS } from './images/arraryAllImages';

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
            <div>
                <img src={HOME_IMG} alt="home image" />
            </div>
        </>
    )
}