import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddTodo from '../tasks/AddTodo';

function Header(props){ //We need to mention "props" as a parameter as we intend to use props passed by the parent component in this functional class.
    return(
        <header>
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">New Task</a>
                    <AddTodo addTodo={props.addTodo} />
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><Link onClick={setActive} className="active" to="/">Tasks</Link></li>
                        <li className="tab"><Link onClick={setActive} to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
        </header>    
    );
}

function setActive(e) {
    const links = document.getElementsByTagName('a');
    for(let link of links)
        link.classList.remove("active");
    e.target.classList.add("active");
}

Header.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default Header;