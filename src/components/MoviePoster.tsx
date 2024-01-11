import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import { Movie } from '../interfaces/movie'
import { useNavigation } from '@react-navigation/core';

interface Props {
    movie: Movie
    height?: number
    width?: number
}
const MoviePoster = ({ movie, width = 300, height = 420 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Detail', movie)}
            activeOpacity={0.8}
            style={{ width, height, marginHorizontal: 5 }}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

export default MoviePoster

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 25,
        aspectRatio: 2 / 3,
        objectFit: 'contain',
    },
    imageContainer: {
        flex: 1,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
});
