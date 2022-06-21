import React from 'react';
import PropTypes from 'prop-types';
import imageList from "./images";
import colorList from "./colors";
import * as themeColors from '@mui/material/colors';
import {createTheme, ThemeProvider} from "@mui/material";

export const themeContext = React.createContext({});

class SettingsProvider extends React.Component {

    state = {
        image: Object.keys(imageList)[1],
        color: Object.keys(colorList)[1],
    };

    handleSetImage = newImage => {
        if (imageList.hasOwnProperty(newImage)) {
            this.setState({image: newImage});
        } else {
            throw new TypeError("Wrong image type");
        }
    };

    handleSerColor = newColor => {
        if (colorList.hasOwnProperty(newColor)) {
            this.setState({color: newColor});
        } else {
            throw new TypeError("Wrong color type");
        }
    };

    render() {
        const
            {children} = this.props,
            {image, color} = this.state;

        return (
            <themeContext.Provider value={{
                image: {
                    current: image,
                    list: imageList,
                    setImage: this.handleSetImage,
                },
                color: {
                    current: color,
                    list: colorList,
                    setColor: this.handleSerColor,
                },
            }}>
                <ThemeProvider theme={createTheme({
                    palette: {
                        primary: {
                            main: themeColors[color][500],
                        },
                        secondary: {
                            main: themeColors.red[500],
                        },
                    },
                })}>
                    {children}
                </ThemeProvider>
            </themeContext.Provider>
        );
    }
}

SettingsProvider.propTypes = {};

export default SettingsProvider;
