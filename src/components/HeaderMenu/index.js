import './styles.scss';

// Components
import AddMovie from '../AddMovie';
import HeaderMenuItem from '../HeaderMenuItem';

const HeaderMenu = (props) => {
    return (
        <nav className="header__menu">
            <ul>
                <HeaderMenuItem text="Inicio" link="/" />
                <HeaderMenuItem text="Series" link="/browse/series" />
                <HeaderMenuItem text="Películas" link="/browse/peliculas" />
                {/* <HeaderMenuItem text="Agregados recientemente" link="#agregados_recientemente" /> */}
                <HeaderMenuItem text="Mi lista" link="/user/my-list" />
                <li>
                    <AddMovie />
                </li>
            </ul>
        </nav>
    );
};

export default HeaderMenu;
