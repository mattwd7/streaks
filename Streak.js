import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.streak}>
				<Text>
					{this.props.name}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  streak: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    borderBottomWidth: 1, //StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  }
})