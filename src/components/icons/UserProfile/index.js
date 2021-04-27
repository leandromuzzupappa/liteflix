const UserProfile = (props) => {
    return (
        <svg id={props.userProfileId} data-name="Layer 2" viewBox="0 0 23 23">
            <circle id="bg" className="cls-1" cx="11.5" cy="11.5" r="11.24" />
            <path
                id="el"
                className="cls-2"
                d="M11.79,18.25V14.61l2.31-1.33a.45.45,0,0,0,.22-.38V10.19L17.46,8.4v6.15a.73.73,0,0,1-.36.63l-5.31,3.07Zm-.58,0h0L5.9,15.19a.73.73,0,0,1-.36-.63V8.41l3.14,1.78V12.9a.45.45,0,0,0,.22.38l2.3,1.33v3.64ZM9,9.69H9L5.88,7.89l5.25-3a.73.73,0,0,1,.73,0l5.25,3-3.17,1.8L11.72,8.4a.43.43,0,0,0-.44,0Z"
            />
        </svg>
    );
};

export default UserProfile;
