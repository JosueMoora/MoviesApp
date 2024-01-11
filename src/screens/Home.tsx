/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useMovies} from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import HorizontalSlider from '../components/HorizontalSlider';
import Gradient from '../components/Gradient';
import {getColor} from '../helper/getColors';
import { GradientContext } from '../context/Gradient';
import { useEffect } from 'react';

const {width} = Dimensions.get('window');

const Home = () => {
  const {nowPlaying, topRated, popular, upcoming, isLoading} = useMovies();
  const {setMainColors} = useContext(GradientContext)
  const getImageColor = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'white', secundary = 'white', third = 'white'] = await getColor(uri);
    setMainColors({primary, secundary, third});
  };

  useEffect(()=>{
    if (nowPlaying.length > 0) {
      getImageColor(0)
    }
  }, [nowPlaying])

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <Gradient>
      <ScrollView>
        <View style={{flex: 1, gap: 10, marginTop: 40}}>
          {/* Carousel */}
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={width}
              itemWidth={300}
              keyExtractor={item => item.id.toString()}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getImageColor(index)}
            />
          </View>
          {/* Popular movies */}
          <HorizontalSlider movies={popular} title="Popular" />
          <HorizontalSlider movies={topRated} title="Top Rated" />
          <HorizontalSlider movies={upcoming} title="Upcoming" />
        </View>
      </ScrollView>
    </Gradient>
  );
};

export default Home;
