import { IconType } from 'react-icons/lib/esm/iconBase';
import { DiNodejs } from 'react-icons/di';
import { SiMongodb, SiSass, SiReact, SiStyledcomponents, SiNextdotjs } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';


type imgType = {img: IconType, description: string}

function imageExport(technologyName: string) : imgType {
    let imgInfo: imgType = {img: DiNodejs, description: ''}; 
    switch (technologyName) {
        case 'node':
            imgInfo.img = DiNodejs
            imgInfo.description = "Node"
            break;
        case 'sass':
            imgInfo.img = SiSass
            imgInfo.description = "Sass"
            break;
        case 'react':
            imgInfo.img = SiReact
            imgInfo.description = "React"
            break;
        case 'mongo':
            imgInfo.img = SiMongodb
            imgInfo.description = "Mongo"
            break;
    
        default:
            break;
    }
    return imgInfo
}

export { imageExport };