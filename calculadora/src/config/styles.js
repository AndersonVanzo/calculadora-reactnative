import { StyleSheet } from "react-native";

export default StyleSheet.create({
  fontLarge: {
    fontSize: 24
  }, 
  fontMedium: {
    fontSize: 18
  },
  fontSmall: {
    fontSize: 14
  },
  fontCenter: {
    textAlign: 'center',
    width: '100%'
  },
  fontLeft: {
    textAlign: 'left',
    width: '100%'
  },
  fontRight: {
    textAlign: 'right',
    width: '100%'
  },
  fontWhite: {
    color: '#fff'
  },
  fontBold: {
    fontWeight: 'bold'
  },
  mainView: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 12
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    marginTop: 10,
    width: 80
  },
  keyboard: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%'
  },
  screen: {
    borderColor: '#ddd',
    borderWidth: 5,
    borderRadius: 8,
    height: '25%',
    width: '100%',
  }
});