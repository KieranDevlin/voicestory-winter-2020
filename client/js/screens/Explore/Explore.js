import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import ThemesButton from '../../components/ThemesButton';
import {ScrollView} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';
import VideoList from '../../components/VideoList';
import SpeakerCard from '../../components/SpeakerCard';

const Explore = ({navigation, route}) => {
  return (
    <View style={styles.exploreContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Videos</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Videos', {screen: 'Newest'})}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <VideoList
        horizontal={true}
        route={route}
        navigation={navigation}
        offset={30}
      />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Themes</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Videos', {screen: 'Themes'})}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.themeContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ThemesButton
            theme="Vulnerability"
            style={styles.themeButton}
            source={require('../../assets/icons/vulnerability.png')}
            iconDimension={40}
          />
          <ThemesButton
            theme="Love & Relationships"
            style={styles.themeButton}
            source={require('../../assets/icons/heart.png')}
            iconDimension={40}
          />
          <ThemesButton
            theme="Trauma"
            style={styles.themeButton}
            source={require('../../assets/icons/trauma.png')}
            iconDimension={40}
          />
          <ThemesButton
            theme="Mental Health"
            style={styles.themeButton}
            source={require('../../assets/icons/mentalhealth.png')}
            iconDimension={40}
          />
          <ThemesButton
            theme="Abuse"
            style={styles.themeButton}
            source={require('../../assets/icons/abuse.png')}
            iconDimension={40}
          />
          <ThemesButton
            theme="Miscellaneous"
            style={styles.themeButton}
            source={require('../../assets/icons/misc.png')}
            iconDimension={40}
          />
          <ThemesButton
            theme="Pain"
            style={styles.themeButton}
            source={require('../../assets/icons/pain.png')}
            iconDimension={40}
          />
          <ThemesButton
            theme="Growth"
            style={styles.themeButton}
            source={require('../../assets/icons/growth.png')}
            iconDimension={40}
          />
        </ScrollView>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Speakers</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Speakers')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.speakerContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <SpeakerCard
            style={styles.speakerCard}
            name="Ivan Dai"
            source={require('../../assets/images/winstonatstage.jpg')}
          />
          <SpeakerCard
            style={styles.speakerCard}
            name="Ivan Dai"
            source={require('../../assets/images/winstonatstage.jpg')}
          />
          <SpeakerCard
            style={styles.speakerCard}
            name="Ivan Dai"
            source={require('../../assets/images/winstonatstage.jpg')}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Explore;
