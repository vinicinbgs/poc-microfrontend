import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 3em;
    background-color: #4287f5;
    display: flex;
`;

const MenuItem = styled.li`
    float: left;
    
    a { 
        display: block;
        color: white;
        text-align: center;
        padding: 16px;
        text-decoration: none;
    }
`;

export { Container, MenuItem }