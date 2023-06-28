import styled from "styled-components";
import { CardType } from "./Card-Project";
import { useReducer } from "react";

type PropType = {
    projectInfo: CardType,
    showImages: boolean | undefined,
    setShowImages: React.Dispatch<React.SetStateAction<boolean>>
}

const ExpandedImageStyle = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000000dc;
    z-index: 5;

    button {
        font-size: 40px;
        color: white;
    }

    img {
        height: 200px;
    }
`;

const initialState = {
    count: 0
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const reducer = (state:{count: number}, action:{type: string, payload: number}) => {
    let position = state.count
    switch (action.type) {
        case INCREMENT:
            position = state.count + 1;
            if (position === action.payload) {
                position = 0
            }
            break
        case DECREMENT:
            position = state.count - 1;
            if(position < 0) {
                position = action.payload - 1
            }
            break
        default:
            throw new Error(`Unsupported action type: ${action.type}`);
    }
    return {count: position}
};

export default function ExpandedImage({projectInfo, showImages, setShowImages}:PropType) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = (payload:number) => {
        dispatch({type: INCREMENT, payload: payload});
    };

    const handleDecrement = (payload:number) => {
        dispatch({type: DECREMENT, payload: payload})
    };

    if (showImages) {
        return (
            <ExpandedImageStyle>
                <button onClick={() => setShowImages(false)}>
                    X
                </button>
                <div>
                    <button onClick={() => handleDecrement(projectInfo.img.length)}>&lt;</button>
                    <img src={projectInfo.img[state.count]} alt="" />
                    <button  onClick={() => handleIncrement(projectInfo.img.length)}>&gt;</button>
                </div>
            </ExpandedImageStyle>
        )
    }
}