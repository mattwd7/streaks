import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import StreaksStore from './StreaksStore';
import { Streak } from './Streak';
import { TitleBar } from './TitleBar';
import { NewStreakModal } from './NewStreakModal';

export default class App extends React.Component {
  state = {
    isAdding: false,
  };

  render() {
    return (
      <View style={styles.wrapper}>
        {this._renderTitleBar()}
        {this._renderStreaks()}
      </View>
    );
  }

  _renderTitleBar() {
    return (
      <TitleBar
        title='My Streaks'
        rightOption={<Icon style={styles.titleAdd} name="add" size={26} color="#3CABDA" onPress={this._onAddStreak.bind(this)} />}
      >
        <NewStreakModal visible={this.state.isAdding} />
      </TitleBar>
    );
  }

  _onAddStreak() {
    this.setState({
      isAdding: true,
    });
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
  wrapper: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? 18 : 0,
  },
    streaks: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      width: '100%',
    }
});
