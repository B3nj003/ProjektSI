import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from "react-router-dom";
import AccountDropdown from './account_dropdown';

export const NavBar = ({currentUser, logout}) => {
    const display = currentUser ? (
            <div className="navbar-account-dropdown">
                Account
                <AccountDropdown currentUser={currentUser} logout={logout} />
            </div>
        ) : (
        <div className="navbar-no-account-dropdown">
                <Link to="/signup">Prijavi se</Link>
                <Link to="/login">Pristupi racunu</Link>
        </div>
    );
    $(window).scroll(function(){
        $('.homepage-nav-bar').toggleClass('scrolled', $(this).scrollTop() > 100);
    });

    return (
        <div className="navbar-element">
            <div>
                <a href="https://www.linkedin.com/in/dzoniocm">LinkedIn</a>
            </div>
            <div>
                <a href="https://github.com/dzoniocm">GitHub</a>
            </div>
            <div>
                <a href="https://angel.co/u/dzoniocm">AngelList</a>
            </div>
            <div>
                {display}
            </div>
            <div>
                <Link to="/search">
                    <i className="fas fa-search"></i>
                </Link>
            </div>

        </div>
    )
}