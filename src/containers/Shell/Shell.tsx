import React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {RootState} from '../../store';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {NavLink} from 'react-router-dom';
import {Theme} from '@material-ui/core/styles/createMuiTheme';
import {withStyles} from '@material-ui/core/styles';

const HomeLink = (props: any) => <NavLink to="/home" exact={false} {...props} />;


const drawerWidth = 240;


const styles = (theme: Theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    hide: {
        display: 'none'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
});

export interface IShellComponentProps {
    classes: {
        root: string;
        appBar: string;
        appBarShift: string;
        grow: string;
        menuButton: string;
        sectionDesktop: string;
        sectionMobile: string;
        hide: string;
        drawer: string;
        drawerPaper: string;
        drawerHeader: string;
        content: string;
        contentShift: string;
    };
    children: React.ReactNode;
    enableHeaderAndDrawer?: boolean;
}

class ShellComponent extends React.Component<IShellComponentProps> {
    static defaultProps = {
        enableHeaderAndDrawer: false
    };

    state = {
        open: false,
        anchorEl: null,
        mobileMoreAnchorEl: null
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    handleMenuClose = () => {
        this.setState({anchorEl: null});
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({mobileMoreAnchorEl: event.currentTarget});
    };

    handleMobileMenuClose = () => {
        this.setState({mobileMoreAnchorEl: null});
    };

    renderUserMenu() {
        const {anchorEl} = this.state;
        const isMenuOpen = Boolean(anchorEl);

        return (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
            </Menu>
        );
    }

    render() {
        const {enableHeaderAndDrawer, children} = this.props;

        if (enableHeaderAndDrawer) {
            const {classes} = this.props;
            const {open} = this.state;

            return (
                <div className={classes.root}>
                    <CssBaseline />

                    <AppBar position="fixed">
                        <Toolbar disableGutters={!open}>
                        </Toolbar>
                    </AppBar>

                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={this.handleDrawerClose}>{<ChevronLeftIcon />}</IconButton>
                        </div>
                        <Divider />
                        <List>
                            <ListItem button key={'Home'} component={HomeLink}>
                                <ListItemText secondary={'Home'} />
                            </ListItem>
                        </List>
                    </Drawer>

                    {/* Render child component(s) */}
                    <main
                        className={classNames(classes.content, {
                            [classes.contentShift]: open
                        })}
                    >
                        <div className={classes.drawerHeader} />
                        {children}
                    </main>
                </div>
            );
        }

        return <main>{children}</main>;
    }
}


const mapStateToProps = ({}: RootState) => ({
    // auth
});

const mapDispatchToProps = (_dispatch: Dispatch) => ({
    // logout: () => dispatch(logoutAction())
});

export const StyledShellComponent = withStyles(styles, {withTheme: true})(ShellComponent);
const Shell = connect(mapStateToProps, mapDispatchToProps)(StyledShellComponent);
export {Shell};
