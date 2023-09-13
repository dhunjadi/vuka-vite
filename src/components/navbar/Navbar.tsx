import {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import {navbarList} from './navbarList';
import Modal from '../Modal';
import {RootState, useAppSelector} from '../../store/store';
import {userLogout} from '../../store/features/userSlice';

const Navbar = (): JSX.Element => {
    const {loggedInUser} = useAppSelector((state: RootState) => state.user);

    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [showNavbar, setShowNavbar] = useState<boolean>(true);
    const [clickedBurgerMenu, setClickedBurgerMenu] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavbarOpacity = useCallback((): void => {
        if (window.scrollY > lastScrollY) setShowNavbar(false);
        if (window.scrollY < lastScrollY) setShowNavbar(true);

        setLastScrollY(window.scrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleNavbarOpacity);
        return () => {
            window.removeEventListener('scroll', handleNavbarOpacity);
        };
    }, [lastScrollY, handleNavbarOpacity]);

    const handleBurgerMenuClick = (): void => {
        setClickedBurgerMenu(!clickedBurgerMenu);
    };

    const handleLogout = (): void => {
        dispatch(userLogout());
        localStorage.removeItem('access_token');
        navigate('/');
    };

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
                    <a className="c-navbar__icons_logout" onClick={() => setIsModalOpen(true)} />
                </div>
            </nav>

            <Modal
                isOpen={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onConfirm={handleLogout}
                header="Log out?"
                showConfirm
                showCancel
                confirmText="Confirm"
                cancelText="Cancel"
            >
                Are u sure you want to log out?
            </Modal>

            <Outlet />
        </>
    );
};

export default Navbar;
