import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Streak extends React.Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<Text style={styles.text}>
					{this.props.name}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    borderBottomWidth: 1, //StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  text: {
  	fontSize: 18,
  }
})