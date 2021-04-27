import './styles.scss';

const ModalHover = (props) => {
    return <div className={`${props.classes} modalHover `}>{props.children}</div>;
};

export default ModalHover;
