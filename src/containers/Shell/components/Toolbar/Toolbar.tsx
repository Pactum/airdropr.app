import React from 'react';
import {AppBar, Hidden, MuiThemeProvider, Toolbar, withStyles, WithStyles, createStyles} from '@material-ui/core';
import {Theme} from '@material-ui/core/styles/createMuiTheme';
// import {FuseSearch, FuseShortcuts} from '@fuse';
import connect from 'react-redux/es/connect/connect';
import {withRouter} from 'react-router-dom';
import NavbarMobileToggleButton from '../shared-components/NavbarMobileToggleButton';
import QuickPanelToggleButton from '../shared-components/quickPanel/QuickPanelToggleButton';
import ChatPanelToggleButton from '../shared-components/chatPanel/ChatPanelToggleButton';
import UserMenu from '../shared-components/UserMenu';

const styles = (theme: Theme) => createStyles({
    separator: {
        width          : 1,
        height         : 64,
        backgroundColor: theme.palette.divider
    }
});

interface IToolbar extends WithStyles<typeof styles> {
    settings: any;
    toolbarTheme: any;
} 

const ToolbarComponent: React.FunctionComponent<IToolbar> = ({classes, settings, toolbarTheme}) => {

    const layoutConfig = settings.layout.config;

    return (
        <MuiThemeProvider theme={toolbarTheme}>
            <AppBar id="fuse-toolbar" className="flex relative z-10" color="default">
                <Toolbar className="p-0">

                    {layoutConfig.navbar.display && layoutConfig.navbar.position === 'left' && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton className="w-64 h-64 p-0"/>
                            <div className={classes.separator}/>
                        </Hidden>
                    )}

                    <div className="flex flex-1">
                        <Hidden mdDown>
                            {/* <FuseShortcuts className="px-16"/> */}
                        </Hidden>
                    </div>

                    <div className="flex">

                        <UserMenu/>

                        <div className={classes.separator}/>

                        {/* <FuseSearch/> */}

                        <Hidden lgUp>

                            <div className={classes.separator}/>

                            <ChatPanelToggleButton/>
                        </Hidden>

                        <div className={classes.separator}/>

                        <QuickPanelToggleButton/>
                    </div>

                    {layoutConfig.navbar.display && layoutConfig.navbar.position === 'right' && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton/>
                        </Hidden>
                    )}
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
};

function mapStateToProps({fuse})
{
    return {
        settings    : fuse.settings.current,
        toolbarTheme: fuse.settings.toolbarTheme
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps)(ToolbarComponent)));
