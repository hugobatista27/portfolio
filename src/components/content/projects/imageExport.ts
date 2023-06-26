import NODE from './images/node-logo-black.png';
import SASS from './images/sass-logo-black.png';
import REACT from './images/react-logo-black.png';
import MONGO from './images/mongo-logo-black.png';

function imageExport(technologyName: string) {
    let img

    switch (technologyName) {
        case 'node':
            img = NODE
            break;
        case 'sass':
            img = SASS
            break;
        case 'react':
            img = REACT
            break;
        case 'mongo':
            img = MONGO
            break;
    
        default:
            break;
    }

    return img
}

export { imageExport };