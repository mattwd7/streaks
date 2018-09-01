import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';

import StreaksStore from './StreaksStore';
import Streak from './Streak';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appWrapper}>
        {this._renderTitle()}
        {this._renderStreaks()}
      </View>
    );
  }

  _renderTitle() {
    return (
      <View style={styles.title}>
        <Text style={styles.titleText}>
          My Streaks
        </Text>
      </View>
    );
  }

  _renderStreaks() {
    return (
      <View style={styles.streaks}>
        <FlatList
          data={StreaksStore.state.streaks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderStreak}
        />
      </View>
    )
  }

  _renderStreak(listItem) {
    return (
      <Streak
        {...listItem.item}
      />
    )
  }
}

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? 18 : 0,
  },
  title: {
    alignItems: 'center',
    backgroundColor: '#eee',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  titleText: {
    fontSize: 30,
  },
  streaks: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
  }
});
