import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image, 
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Dashboard: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const IndexScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/backgroud9.jpg')} 
          style={styles.backgroundImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to Job Hiring App</Text>
          <Text style={styles.description}>
            Explore job opportunities and start your career with us. Whether you're looking for your first job or a new career,
          </Text>
          <Text style={styles.description}>
            we have job listings for you. Find the perfect job and apply directly through the app. Create a profile, browse jobs,
          </Text>
          <Text style={styles.description}>
            and apply with just a few taps.
          </Text>
        </View>

        {/* Apply now button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>APPLY NOW</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    paddingHorizontal: 24,
    position: 'relative', 
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute', 
    top: 0,
    left: 0,
    resizeMode: 'cover', 
  },
  textContainer: {
    marginTop: 180, 
    alignItems: 'flex-start',
    zIndex: 1,
    marginBottom: 40, 
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'left',
    color: '#fff', 
  },
  description: {
    fontSize: 18,
    color: '#fff', 
    textAlign: 'justify', 
    marginBottom: 10, 
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginTop: 20,
    alignSelf: 'flex-start', 
    zIndex: 1, 
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IndexScreen;
