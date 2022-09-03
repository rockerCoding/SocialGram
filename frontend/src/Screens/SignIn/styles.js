import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  topContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center"
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    
    paddingHorizontal: 30,
  },


  //butons
  buttonLogin: {
    width: '80%',
    height: "40%",
    backgroundColor: 'lightgreen',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: 40,
    borderRadius: 5,
  },
  signupButton: {
    width: '80%',
    backgroundColor: 'blue',
    height: "40%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white'
  },

  erroContainer: {
    height: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  erroText: {
    color: 'red',
    fontWeight: '600'
  },
  buttonsContainer: {
    flex: 1/2,
    justifyContent: 'space-between',
    alignItems: 'center',
    
  }


  



})