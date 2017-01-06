import React, { Component } from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';

// Thirdparty
import Container from 'native-base';
import { Router, Scene, Actions } from 'react-native-router-flux';
import SplashScreen from 'rn-splash-screen';
import AudioPlayer from 'react-native-audioplayer';

// Custom Components
import MediaList from './src/components/MediaList';
import MediaScreen from './src/components/MediaScreen';
import PlaybackScreen from './src/components/PlaybackScreen';

const scenes = Actions.create(
  <Scene key="root" navigationBarStyle={{backgroundColor: '#2A2A2A'}} titleStyle={{color : "#FFF"}}>
    <Scene key="MediaList" component={MediaList} title="Chimney" initial={true} />
    <Scene key="MediaScreen" component={MediaScreen} title="Chimney Group" />
    <Scene key="PlaybackScreen" component={PlaybackScreen} />
  </Scene>
);

class ChimneyGroup extends Component {

  state = {
    isLoading: true,
  };

  componentDidMount() {
    AudioPlayer.play('splash-sound.wav');
    global.setTimeout(() => {
      this.setState({isLoading: false});
    }, 1000);
  }

  componentDidUpdate() {
    if (!this.state.isLoading) {
      // Hide splash screen
      SplashScreen.hide();
    }
  }

  componentWillMount() {
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    return (
      <Router hideNavBar={true} scenes={scenes} />
    );
  }
}

AppRegistry.registerComponent('ChimneyGroup', () => ChimneyGroup);
