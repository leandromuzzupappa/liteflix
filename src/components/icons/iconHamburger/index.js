import './styles.scss';

const IconHamburger = (props) => {
    return (
        <svg id={props.id} className={`iconHamburger ${props.classes}`} viewBox="0 0 47.9 47.9">
            <g id="icon_feather-menu" data-name="Icon feather-menu">
                <path className="cls-1" d="M0,15h50" />
                <path className="cls-close1" d="M0,24h50" />
                <path className="cls-close2" d="M0,24h50" />
                <path className="cls-1" d="M0,33h50" />
            </g>
        </svg>
    );
};

export default IconHamburger;
