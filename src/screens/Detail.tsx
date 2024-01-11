import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import {useMovie} from '../hooks/useMovie';
import MovieDetail from '../components/MovieDetail';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}
const {width, height} = Dimensions.get('screen');

const Detail = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {isLoading, cast, movieFull} = useMovie(movie.id);
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}>
        <Icon name="chevron-back-outline" size={25} color="black" />
      </TouchableOpacity>
      <View style={styles.imgContainer}>
        <Image source={{uri}} style={styles.img} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size={30} color="grey" />
      ) : (
        <MovieDetail cast={cast} movieFull={movieFull!} />
      )}
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  imgContainer: {
    width,
    overflow: 'hidden',
    height: height * 0.65,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  img: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  subTitle: {
    fontSize: 14,
    color: '#000000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  backBtn: {
    position: 'absolute',
    padding: 15,
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 999,
  },
});
