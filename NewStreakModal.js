import React, { Component } from 'react';
import { View, StyleSheet, Platform, Text, Modal } from 'react-native';

import { TitleBar } from './TitleBar';

export class NewStreakModal extends Component {
	render() {
		return (
			<Modal
				animationType="slide"
        transparent={false}
        visible={this.props.visible}
			>
				<View style={styles.wrapper}>
					<TitleBar title='New Streak' />
				</View>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? 18 : 0,
  },
});