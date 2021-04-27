const HeaderMenuItem = (props) => {
    return (
        <li className="header__menu--li">
            <a href={props.link} id={props.id ? props.id : ''}>
                {props.text}
            </a>
        </li>
    );
};

export default HeaderMenuItem;
