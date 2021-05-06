import useBodyClass from '../helpers/setBodyClass';

const FilteredLayout = (props) => {
    useBodyClass('layout__FilteredLayout');

    return (
        <div id="FilteredLayout" className="layouts">
            {props.children}
        </div>
    );
};

export default FilteredLayout;
