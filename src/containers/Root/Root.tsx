import React, {Component} from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {initializeApplication as initializeApplicationAction} from '../../store/application/application.actions';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    // primary: 64dd17
    // secondary: 3d5aff
    // light: 9cff57
    // dark: 1faa00
    // light: 8187ff
    // dark: 0031cb
    // text on P: 000000
    // text on S: ffffff
    palette: {
        primary: {
            main: '#64dd17',
            light: '#9cff57',
            dark: '#1faa00',
            contrastText: '#2D2D2D',
        },
        secondary: {
            main: '#3d5aff',
            light: '#8187ff',
            dark: '#0031cb',
        },
        text: {
            primary: '#000000',
            secondary: '#ffffff',
        }
    }
});

export interface IShellComponentProps {
    children: React.ReactNode;
}

interface IAuthCallbackDispatchProps {
    initializeApplication(): void;
}

export class RootComponent extends Component<IShellComponentProps & IAuthCallbackDispatchProps> {
    componentDidMount() {
        const {initializeApplication} = this.props;
        this.setState({
            account: ''
        });

        initializeApplication();
    }

    render() {
        const {children} = this.props;
        return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    initializeApplication: () => dispatch(initializeApplicationAction())
});

const Root = connect(null, mapDispatchToProps)(RootComponent);
export {Root};
