import './styles.scss';

// Components
import HeaderMenu from '../HeaderMenu';
import HeaderUserLinks from '../HeaderUserLinks';

const HeaderMenuMobile = (props) => {
    return (
        <>
            <div className={`header__menuMobile`}>
                <HeaderMenu />
                <HeaderUserLinks />
            </div>
        </>
    );
};

export default HeaderMenuMobile;
