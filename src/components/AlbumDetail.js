import React from 'react';
import {Text, View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image} = album;
    const {thumbnailStyle, headerTextStyle, thumbnailContainerStyle, albumNameStyle, imageStyle} = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle} 
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={headerTextStyle}>
                    <Text style={albumNameStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{uri: image}}
                />
            </CardSection>
            <CardSection>
                <Button/>
            </CardSection>
        </Card>

    );

};

const styles = {
    headerTextStyle:  {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },

    albumNameStyle: {
        fontSize: 18,
    },

    thumbnailStyle: {
        height: 50,
        width: 50,
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null,

    },
};

export default AlbumDetail;