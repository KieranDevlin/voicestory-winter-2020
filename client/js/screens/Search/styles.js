import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  searchContainer: {
    height: Dimensions.get('window').height,
  },
  headerContainer: {
    backgroundColor: '#DB4F48',
    paddingBottom: 20,
  },
  heading: {
    color: '#FBF7EF',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  contentContainer: {
    backgroundColor: '#9F3833',
    paddingRight: 30,
    paddingLeft: 30,
  },
  border: {
    borderBottomColor: '#DB4F48',
    borderBottomWidth: 3,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
  },
  resultheader: {
    color: '#DB4F48',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  resultsContainer: {
    backgroundColor: '#FBF7EF',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
  },
  imageContainer: {
    width: 75,
    height: 75,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  image: {
    flex: 1,
    width: 75,
  },
  title: {
    alignSelf: 'center',
    marginLeft: 10,
    fontFamily: 'Lato-Bold',
  },
});

export default styles;
