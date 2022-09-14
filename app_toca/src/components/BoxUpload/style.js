import styled from "styled-components";
import { css } from "styled-components";



export const UploadDiv = styled.div`
    width: 5rem;
    height: 5rem;
    position: relative;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
    border-radius: 50%;

    }
`

const dragActive = css`
    border-color: green;
`
const dragRejected = css`
    border-color: red;
`

export const Profile = styled.div`
font-size: 5rem;
color: #012b40;

`


export const UploadContainer = styled.div.attrs({
    className: 'dropzone'
})`

    //border: 1px dashed black;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    z-index: 9;
    bottom: 0;
    right: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(1, 38, 57, 0.5);
    color: black;


    transition: height 0.2s ease;

    ${(props) => props.isDragActive && dragActive};
    ${(props) => props.isDragReject && dragRejected};


    >div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const BoxButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    button {
        border: none;
        cursor: pointer;
    }

    .save {
        background-color: green;
    }

    .cancel {
        background-color: red;
    }
`
