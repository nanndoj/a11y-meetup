import React from 'react';
import { connect } from 'react-redux';
import { toggleAccessibility } from './store/actions';
import logo from './logo.svg';
import './App.scss';

// Accessible components
import AccessibleLink from './components/with_accessibility/Link';
import AccessibleHeader from './components/with_accessibility/Header';
import AccessibleCheckbox from './components/with_accessibility/Checkbox';

// Non-Accessible components
import NonAccessibleLink from './components/without_accessibility/Link';
import NonAccessibleHeader from './components/without_accessibility/Header';
import NonAccessibleCheckbox from './components/without_accessibility/Checkbox';

const App = ({ isAccessibilityEnabled, toggleAccessibility, children }) => {
    
    const Link = isAccessibilityEnabled ? AccessibleLink : NonAccessibleLink;
    const Header = isAccessibilityEnabled ? AccessibleHeader : NonAccessibleHeader;
    const Checkbox = isAccessibilityEnabled ? AccessibleCheckbox : NonAccessibleCheckbox;

    return (
        <div className="App">
            <div className="app-top">
                <div className="app-header">
                    <Link href="/examples"><img src={ logo } className="App-logo" alt="Meetup logo. Go to the home page"/></Link>
                    <Header>Accessible React Components</Header>
                </div>
                <div className="app-main-bar">
                    <Checkbox
                        id="enable-accessibility"
                        onClick={ toggleAccessibility }
                        checked={ isAccessibilityEnabled }
                    >
                        Enable accessibility
                    </Checkbox>
                </div>
            </div>
            <div className="app-content"> { children } </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAccessibilityEnabled: state.isAccessibilityEnabled
});

const mapDispatchToProps = {
    toggleAccessibility
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
export { App };