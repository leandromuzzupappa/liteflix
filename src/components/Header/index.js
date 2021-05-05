import './styles.scss';
import IconHamburger from '../icons/iconHamburger';

import { useState } from 'react';

// HOC
import { esDesktop } from '../../helpers/windowSizes';

// Components
import LiteflixLogo from '../LiteflixLogo';
import HeaderMenu from '../HeaderMenu';
import HeaderUserLinks from '../HeaderUserLinks';
import HeaderMenuMobile from '../HeaderMenuMobile';

const Header = (props) => {
    const isDesktop = esDesktop();
    const [menuMobileOpened, setMenuMobileOpened] = useState(false);

    const handleHamburgerBtn = () => {
        setMenuMobileOpened(!menuMobileOpened);
    };

    return (
        <>
            <header className={`header ${menuMobileOpened ? 'header__menuMobile--opened' : ''}`}>
                {!isDesktop && (
                    <button className="header__menuMobile--btn" onClick={handleHamburgerBtn}>
                        <IconHamburger classes={menuMobileOpened ? 'iconHamburger--opened' : ''} />
                    </button>
                )}

                <div className="header__logo">
                    <LiteflixLogo />
                </div>

                {isDesktop ? (
                    <>
                        <HeaderMenu />
                        <HeaderUserLinks />
                    </>
                ) : (
                    <HeaderMenuMobile />
                )}
            </header>
        </>
    );
};

export default Header;
