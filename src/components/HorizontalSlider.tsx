import { View, Text, FlatList } from 'react-native';
import React from 'react'
import { Movie } from '../interfaces/movie';
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[]
    title?: string
}
const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{ height: title ? 265 : 220, gap: 10 }}>
            {title && <Text style={{ fontSize: 30, fontWeight: 'bold', paddingLeft: 10, color: 'black' }}>{title}</Text>}
            <FlatList
                data={movies}
                renderItem={({ item }: any) => <MoviePoster movie={item} height={200} width={140} />}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default HorizontalSlider
