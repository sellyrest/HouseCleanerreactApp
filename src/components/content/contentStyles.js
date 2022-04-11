import styled from 'styled-components';
export const Grid= styled.div`
display:center;
`;
const media = {
    desktop: '@media(min-width: 1000px)'
}

export const ContentWrap = styled.div`
width: 100%;
margin:center;
border: 1px white;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-item: center;
h3 {
    font-size: 17px;
    font-weight: bold;
    color: gray;
    margin-left: 14px;
    align-self: flex-start;
}
.boxwrap {
    width: 100%;
    border: 1px blue;
    ${media.desktop} {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }
    .img {
        width: 50%;
        height: 130px;
        background-color: gray;

        ${media.desktop} {
            width: 47%;
        }
    }

    .cont {
        margin-top: 1px;
        width: 100%;
        height: 130px;
        background-color: gray;

        ${media.desktop} {
            margin: 0;
            width: 48%;
    }       

}
`;