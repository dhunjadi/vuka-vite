import {useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {NavLink, Outlet} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import {StoreState} from '../../store/reducers/rootReducer';
import {navbarList} from './navbarList';

const Navbar = (): JSX.Element => {
    const {loggedInUser} = useSelector((state: StoreState) => state.userReducer);

    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [showNavbar, setShowNavbar] = useState<boolean>(true);
    const [clickedBurgerMenu, setClickedBurgerMenu] = useState<boolean>(true);

    const handleNavbarOpacity = useCallback((): void => {
        if (window.scrollY > lastScrollY) setShowNavbar(false);
        if (window.scrollY < lastScrollY) setShowNavbar(true);

        setLastScrollY(window.scrollY);
    }, [lastScrollY]);

    const handleBurgerMenuClick = (): void => {
        setClickedBurgerMenu(!clickedBurgerMenu);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleNavbarOpacity);
        return () => {
            window.removeEventListener('scroll', handleNavbarOpacity);
        };
    }, [lastScrollY, handleNavbarOpacity]);

    return (
        <>
            <nav className={`c-navbar ${showNavbar && 'is-visible'}`}>
                <div className="c-navbar__logo">
                    <img src={logo} alt="logo icon" />
                    {loggedInUser.fName}
                </div>
                <div className="c-navbar__burgerMenu" onClick={handleBurgerMenuClick}>
                    {clickedBurgerMenu ? (
                        <FontAwesomeIcon icon={faTimes} color="white" size="lg" />
                    ) : (
                        <FontAwesomeIcon icon={faBars} color="white" size="lg" />
                    )}
                </div>
                <div className={`c-navbar__icons ${clickedBurgerMenu && 'is-open'}`}>
                    {navbarList.map((item) => {
                        return <NavLink key={item.id} to={item.url} className={`c-navbar__icons_${item.title}`} />;
                    })}
                    <a className="c-navbar__icons_logout" />
                </div>
            </nav>

            <Outlet />
        </>
    );
};

export default Navbar;
