import './styles.scss';

const IconLike = (props) => {
    return (
        <svg id={props.id} className={`iconLike ${props.classes}`} viewBox="0 0 40 40">
            <defs>
                <clipPath id="clip-IconLike">
                    <rect width="40" height="40" />
                </clipPath>
            </defs>
            <g id="IconLike" clipPath="url(#clip-IconLike)">
                <path
                    id="Fill_1"
                    className="cls-1"
                    data-name="Fill 1"
                    d="M17,21H8a2.053,2.053,0,0,1-2-2.1V8.4a1.8,1.8,0,0,1,.6-1.465L13.2,0l1.1,1.051a2.283,2.283,0,0,1,.4,1.154v.317l-1,4.83H20a2.053,2.053,0,0,1,2,2.1c0,.107-.105,2.63-.2,2.835l-3,7.455A1.982,1.982,0,0,1,17,21ZM4,21H0V8.4H4V21Z"
                    transform="translate(8.5 9.5)"
                />
            </g>
        </svg>
    );
};

export default IconLike;
