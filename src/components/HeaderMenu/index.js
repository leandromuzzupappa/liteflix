import './styles.scss';

// Components
import AddMovie from '../AddMovie';
import HeaderMenuItem from '../HeaderMenuItem';

const HeaderMenu = (props) => {
    return (
        <nav className="header__menu">
            <ul>
                <HeaderMenuItem text="Inicio" link="#inicio" />
                <HeaderMenuItem text="Series" link="#series" />
                <HeaderMenuItem text="Películas" link="#peliculas" />
                <HeaderMenuItem text="Agregados recientemente" link="#agregados_recientemente" />
                <HeaderMenuItem text="Mi lista" link="#mi_lista" />
                <li>
                    <AddMovie />
                </li>
            </ul>
        </nav>
    );
};

export default HeaderMenu;
