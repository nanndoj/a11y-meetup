import React from 'react';
import { connect } from 'react-redux';
import { openMenu, closeMenu } from './../store/actions';
import './Main.scss';

// Accessible components
import AccessibleMenu, { MenuItem as AccessibleMenuItem } from './../components/with_accessibility/Menu';

// Non accessible components
import NonAccessibleMenu, { MenuItem as NonAccessibleMenuItem } from './../components/without_accessibility/Menu';

const Main = ({ children, openMenu, closeMenu, isMenuOpen, isAccessibilityEnabled }) => {

    const Menu = isAccessibilityEnabled ? AccessibleMenu : NonAccessibleMenu;
    const MenuItem = isAccessibilityEnabled ? AccessibleMenuItem : NonAccessibleMenuItem;

    return (
        <div className="view">
            <div className="view-menu">
                <Menu
                    open={ isMenuOpen }
                    onMouseOver={ openMenu }
                    onMouseLeave={ closeMenu }
                >
                    <MenuItem icon="link-icon" href="/examples/link">Link without href</MenuItem>
                    <MenuItem icon="image-icon" href="/examples/image">Image without alt</MenuItem>
                    <MenuItem icon="span-icon" href="/examples/span">Styled span</MenuItem>
                    <MenuItem icon="table-icon" href="/examples/table">Dynamic table</MenuItem>
                </Menu>
            </div>
            <div className="view-content"> { children } </div>
        </div>
    );
};


const mapStateToProps = state => ({
    isMenuOpen: state.isMenuOpen,
    isAccessibilityEnabled: state.isAccessibilityEnabled
});

const mapDispatchToProps = {
    openMenu,
    closeMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
export { Main };
