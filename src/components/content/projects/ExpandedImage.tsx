import styled from "styled-components";

type PropType = {
    showImages: boolean,
    setShowImages: React.Dispatch<React.SetStateAction<boolean>>
}

const ExpandedImageStyle = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: #000000dc;

    button {
        font-size: 40px;
        color: white;
    }
`;

export default function ExpandedImage({showImages, setShowImages}:PropType) {

    if (showImages) {
        return (
            <ExpandedImageStyle>
                <button onClick={() => setShowImages(false)}>
                    X
                </button>
                <div>
                    <button>&lt;</button>
                    <img src="" alt="" />
                    <button>&gt;</button>
                </div>
            </ExpandedImageStyle>
        )
    }
}