import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Cast} from '../interfaces/credits';

interface Props {
  actor: Cast;
}
const Casting = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.actorContainer}>
      {actor.profile_path && <Image source={{uri}} style={styles.img} />}
      <View>
        <Text style={styles.title}>{actor.name}</Text>
        <Text style={styles.subTitle}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default Casting;

const styles = StyleSheet.create({
  actorContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    height: 80,
    marginVertical: 20,
    marginHorizontal: 10,
    gap: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    overflow: 'hidden',
  },
  img: {
    width: 70,
    height: '100%',
  },
  subTitle: {
    fontSize: 14,
    color: '#000000',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
});
