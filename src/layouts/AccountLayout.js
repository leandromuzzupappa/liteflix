import useBodyClass from '../helpers/setBodyClass';

const AccountLayout = (props) => {
    useBodyClass('layout__AccountLayout');

    return (
        <div id="AccountLayout" className="layouts">
            {props.children}
        </div>
    );
};

export default AccountLayout;
