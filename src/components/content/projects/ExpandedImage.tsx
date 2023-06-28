import styled from "styled-components";
import { PropType } from "./Card-Project";
import { useReducer } from "react";
import { ReducerCount } from "../../../genericFunction/ReducerIncrement";


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


export default function ExpandedImage({projectInfo, showImages, setShowImages}:PropType) {
    const [state, dispatch] = useReducer(ReducerCount.reducer, ReducerCount.initialState);

    const handleIncrement = (payload:number) => {
        dispatch({type: ReducerCount.actionsOptions.INCREMENT, payload: payload});
    };

    const handleDecrement = (payload:number) => {
        dispatch({type:  ReducerCount.actionsOptions.DECREMENT, payload: payload})
    };

    if (showImages === projectInfo.name) {
        return (
            <ExpandedImageStyle>
                <button onClick={() => setShowImages('')}>
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