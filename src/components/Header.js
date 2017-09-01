// IMPORTS
import React from 'react';
import {Text, View} from 'react-native';

// COMPONENT
const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};


const styles = {
    viewStyle:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 4,
        position: 'relative',
    },

    textStyle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
};

// MAKE COMPONENT AVAILABLE
export default Header;