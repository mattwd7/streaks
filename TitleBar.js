import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class TitleBar extends Component {
	render() {
		return (
			<View style={styles.titleBar}>
				<View style={styles.leftOption}>
		      {this.props.leftOption}
        </View>

        <Text style={styles.titleText}>
          {this.props.title}
        </Text>

        <View style={styles.rightOption}>
		      {this.props.rightOption}
        </View>

        {this.props.children}
      </View>
		);
	}
}

const styles = StyleSheet.create({
  titleBar: {
    alignItems: 'center',
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
    titleText: {
      fontSize: 30,
      flexGrow: 9,
      paddingLeft: 20,
    },
    rightOption: {
      flexGrow: 1,
    },
});