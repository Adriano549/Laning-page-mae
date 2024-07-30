import styled from "styled-components";


export const Container = styled.section`
    border-top: solid rgba(173, 127, 247, 0.2);
    padding: 20px;
    div {
    text-align: center;
    width: 100%;
    }
    p{
    color: #413b3b;
    font-size: 16px;
    font-weight: 400;
    }
`;
export const SearchInput = styled.input`
    margin: 20px 0;
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    button {
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    background-color: #bdbeee;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    }
    }
    span {
    margin: 0 10px;
    }
`;