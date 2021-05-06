import './styles.scss';
import iconBell from '../../assets/images/iconBell.svg';
import iconArrow from '../../assets/images/iconArrow.svg';

import { useState, useEffect } from 'react';
import { esDesktop } from '../../helpers/windowSizes';

// Components
import HeaderMenuItem from '../HeaderMenuItem';
import ModalHover from '../modals/ModalHover';
import UserProfile from '../icons/IconUserProfile';

const HeaderUserLinks = (props) => {
    const [userAccountModal, setUserAccountModal] = useState('');

    const renderUserAccountModal = () => {
        return (
            <ModalHover classes="header__links--users-modal">
                <div className="modal__accounts">
                    <ul>
                        <li>
                            <a href="#pepitos">
                                <UserProfile userProfileId="user-pepitos" />
                                Pepitos
                            </a>
                        </li>
                        <li>
                            <a href="#pepitos">
                                <UserProfile userProfileId="user-oreos" />
                                Oreos
                            </a>
                        </li>
                        <li>
                            <a href="#pepitos">
                                <UserProfile userProfileId="user-surtidas" />
                                Surtidas
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="modal__links">
                    <ul>
                        <li>
                            <a href="#configuracion">Configuración</a>
                        </li>
                        <li>
                            <a href="#ayuda">Ayuda</a>
                        </li>
                        <li>
                            <a href="#logout">Cerrar sesión</a>
                        </li>
                    </ul>
                </div>
            </ModalHover>
        );
    };

    const handleUserAccountModalOver = () => {
        setUserAccountModal(renderUserAccountModal());
    };

    const handleUserAccountModalLeave = () => {
        setUserAccountModal('');
    };

    return (
        <div className="header__links">
            <ul>
                <HeaderMenuItem text="Niños" link="#ninos" />
                <li className="header__links--notifications header__links--notifications-active">
                    <span>
                        <img src={iconBell} alt="Notificaciones" title="Notificaciones" />
                        <i className="notifications__badge"></i>
                    </span>
                </li>
                <li
                    className={`header__links--users ${
                        userAccountModal !== '' ? 'header__links--users-hovered' : ''
                    }`}
                >
                    <span
                        onMouseOver={handleUserAccountModalOver}
                        onMouseLeave={handleUserAccountModalLeave}
                    >
                        <UserProfile userProfileId="user-current" />
                        <img src={iconArrow} alt="Arrow" title="Arrow" />

                        {userAccountModal}
                    </span>
                </li>
            </ul>
            {!esDesktop() && renderUserAccountModal()}
        </div>
    );
};

export default HeaderUserLinks;
