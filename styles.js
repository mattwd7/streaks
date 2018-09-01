import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  appWrapper: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: (Platform.OS === 'ios') ? 18 : 0,
  },
  streaks: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
  },
  streak: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
