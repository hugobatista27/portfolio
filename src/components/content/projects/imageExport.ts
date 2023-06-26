import NODE from './images/node-logo-black.png';
import SASS from './images/sass-logo-black.png';
import REACT from './images/react-logo-black.png';
import MONGO from './images/mongo-logo-black.png';

type imgType = {img: string, description: string}

function imageExport(technologyName: string) : imgType {
    let imgInfo: imgType = {img: '', description: ''};

    switch (technologyName) {
        case 'node':
            imgInfo.img = NODE
            imgInfo.description = "Node"
            break;
        case 'sass':
            imgInfo.img = SASS
            imgInfo.description = "Sass"
            break;
        case 'react':
            imgInfo.img = REACT
            imgInfo.description = "React"
            break;
        case 'mongo':
            imgInfo.img = MONGO
            imgInfo.description = "Mongo"
            break;
    
        default:
            break;
    }
    return imgInfo
}

export { imageExport };