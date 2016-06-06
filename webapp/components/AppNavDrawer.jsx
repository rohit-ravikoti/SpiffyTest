/* @flow weak */
/* eslint react/prop-types: 0 */

import React from 'react';
import Relay from 'react-relay';

import Drawer from 'material-ui/Drawer';
import {spacing, typography, zIndex} from 'material-ui/styles';

import { NavMenuTitle } from '../../configuration/webapp/components/ChromeSettings';
import NavMenu from '../../configuration/webapp/components/NavMenu.jsx';

class AppNavDrawer extends React.Component
{
  _handle_onTouchTap_Drawer = ( ) =>
  {
    this.context.router.push('/');
    this.props.onRequestChangeNavDrawer(false);
  }

  showLock = () => {
    // We receive lock from the parent component in this case
    // If you instantiate it in this component, just do this.lock.show()
    this.props.lock.show();
  }

  render( )
  {
    const {
      location,
      docked,
      onRequestChangeNavDrawer,
      onChangeList,
      open,
      style,
    } = this.props;

    return (
      <Drawer
        style={style}
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeNavDrawer}
        containerStyle={{zIndex: zIndex.navDrawer - 100}}
      >
        <div
          style={ {
            cursor: 'pointer',
            fontSize: 24,
            color: typography.textFullWhite,
            lineHeight: `${spacing.desktopKeylineIncrement}px`,
            fontWeight: typography.fontWeightLight,
            backgroundColor: this.context.muiTheme.palette.primary1Color,
            paddingLeft: spacing.desktopGutter,
            marginBottom: 8,
          } }
          onTouchTap={ this._handle_onTouchTap_Drawer }
        >
          { NavMenuTitle }
        </div>
        <NavMenu
          value={ location.pathname }
          onChange={ onChangeList }
        />
        <div className="login-box">
          <a onClick={this.showLock}>Sign In</a>
        </div>
      </Drawer>
    );
  }
}

AppNavDrawer.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired
};

export default Relay.createContainer( AppNavDrawer, {
  fragments: {
    
  },
} )
