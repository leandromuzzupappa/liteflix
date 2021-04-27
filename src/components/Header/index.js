import './styles.scss';

import LiteflixLogo from '../LiteflixLogo';
import HeaderMenu from '../HeaderMenu';
import HeaderUserLinks from '../HeaderUserLinks';

const Header = (props) => {
    return (
        <header className="header">
            <div id="header__logo">
                <LiteflixLogo />
            </div>

            <HeaderMenu />

            <HeaderUserLinks />
        </header>
    );
};

export default Header;
