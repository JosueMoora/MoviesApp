import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import {MovieFull} from '../interfaces/movie';
import {Cast} from '../interfaces/credits';
import Casting from './Casting';
interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}
const MovieDetail = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Detail */}
      <View>
        <View style={styles.detailContainer}>
          <Icon name="star-outline" size={16} color="#000000"/>
          <Text style={styles.subTitle}>{movieFull.vote_average}</Text>
          <Text style={styles.subTitle}>- {movieFull.genres.map(g => g.name).join(', ')}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Overview</Text>
          <Text style={styles.subTitle}>{movieFull.overview}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Budget</Text>
          <Text style={styles.subTitle}>
            {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
          </Text>
        </View>
      </View>
      <View style={styles.castingContainer}>
        <Text style={{...styles.title, paddingLeft: 20}}>Casting</Text>
        <FlatList
          data={cast}
          renderItem={({item}: any) => <Casting actor={item} />}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default MovieDetail;
const styles = StyleSheet.create({
  detailContainer: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
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
  castingContainer: {
    marginTop: 10,
    marginBottom: 40,
    gap: 5,
  },
});
