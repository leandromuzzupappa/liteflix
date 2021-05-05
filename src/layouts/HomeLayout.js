import useBodyClass from '../helpers/setBodyClass';

const HomeLayout = (props) => {
    useBodyClass('layout__HomeLayout');

    return (
        <div id="HomeLayout" className="layouts">
            {props.children}
        </div>
    );
};

export default HomeLayout;
