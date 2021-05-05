import useBodyClass from '../helpers/setBodyClass';

const NotFoundLayout = (props) => {
    useBodyClass('layout__NotFoundLayout');

    return (
        <div id="NotFoundLayout" className="layouts">
            {props.children}
        </div>
    );
};

export default NotFoundLayout;
