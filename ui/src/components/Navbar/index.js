import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import { Container, MenuItem } from './style';

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = (e, path) => {
        e.preventDefault();
        navigate(path);
    }

    return (
        <Container>
            <ul>
                <MenuItem>
                    <Link to="/" >Home</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/about" onClick={(e) => handleClick(e, "/about")}>About</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/topics">Topics</Link>
                </MenuItem>
            </ul>
        </Container>
    );
}

export default Navbar;