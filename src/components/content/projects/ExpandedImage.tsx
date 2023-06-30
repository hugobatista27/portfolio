import styled, { createGlobalStyle } from "styled-components";
import { PropType } from "./Card-Project";
import { useReducer } from "react";
import { ReducerCount } from "../../../genericFunction/ReducerIncrement";
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io'

const LockScroll = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

const ExpandedImageStyle = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000000dc;
    z-index: 5;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .mobile {
        display: none;
    }

    .desktop {
        display: flex;
    }

    button {
        font-size: 40px;
        color: white;
    }

    & > button {
        position: absolute;
        top: 0;
        margin: 20px;
        align-self: flex-end;
    }
    & > div {
        display: flex;
        align-items: center;
        width: 100%;
        max-height: 500px;
        justify-content: space-between;

        button {
            margin: 20px;
        }
        img {
            max-width: 600px;
            height: 100%;
        }
    }

    @media (max-width: 650px) {
        .desktop {
            display: none;
        }

        .mobile {
            display: flex;
            overflow-y: hidden;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;

            & > div {
                width: 100vw;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 20%;
            }
            
            button {
                display: none;
            }
            
            img {
                scroll-snap-align: center;
                max-width: 100vw;
                max-height: 400px;
                height: fit-content;
            }
        }
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
                <LockScroll/>
                <button onClick={() => setShowImages('')}>
                    <IoMdClose/>
                </button>
                <div className="desktop">
                    <button 
                        onClick={() => handleDecrement(projectInfo.img.length)}>
                        <BiSolidLeftArrow/>
                    </button>
                    <img src={projectInfo.img[state.count]} alt="" />
                    <button 
                        onClick={() => handleIncrement(projectInfo.img.length)}>
                        <BiSolidRightArrow/>
                    </button>
                </div>
                <div className="mobile">
                    {projectInfo.img.map((img) => <div>
                        <img src={img} alt="" />
                    </div>)
                    }
                </div>
            </ExpandedImageStyle>
        )
    }
}