import styled from "styled-components";

export const Header = styled.header`
    padding: 1rem;
    height: 150px;
    display: grid;
    grid-template-columns: auto 1fr;
    direction: rtl;
    img {
    width: 130px;
    margin-right: 1rem;
    } 
    nav ul {
    margin-right: 20px;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    height: 100%;
    align-items: center;
    text-align: center;
    h2 {
    color: #9b57b3;
    font-size: 18px;
    
    cursor: pointer;
    &:hover {
        color: #350745;
    }
    }
  }
`;