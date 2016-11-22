import React, { Component } from 'react';
import { StyleSheet, Image, StatusBar, View } from 'react-native';

// Thirdparty
import { Container, Header, Title, Content, List, Thumbnail, ListItem, Text, Button, Spinner, Card, CardItem, H3 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import VideoPlayer from 'react-native-video-controls';
import { Actions, ActionConst, NavBar } from 'react-native-router-flux';

export default class VideoScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: undefined,
    }
  }

  componentWillMount() {
    var that = this;
    that.setState({
      selectedItem: this.props.item
    })
  }

  render() {
		return (
      <View style={styles.container}>
						<View style={styles.fullScreen}>
							<VideoPlayer
										style={styles.fullScreen}
										thumbnail={{uri: this.state.selectedItem.thumbnail}}
										source={{uri: this.state.selectedItem.uri.la}}

										// react-native-video options
										playWhenInactive={ false }   // [iOS] continuing playing when notification centre active
										playInBackground={ false }   // play audio when entering background
										resizeMode={ 'contain' }     // 'contain' or 'cover' should be used.
										paused={ true }             // stop playback entirely
										repeat={ false }             // Repeats at end of duration
										muted={ false }              // Mutes the audio entirely.
										volume={ 1 }                 // 0 is muted, 1 is normal.
										rate={ 1 }                   // 0 is paused, 1 is normal.
										title={ this.state.selectedItem.title }

										// events callbacks
										// onLoadStart={}   // Fired when loading of the source starts
										// onProgress={}    // Fired every ~250ms when the video progresses
										// onError={}       // Fired when an error is encountered on load
										// onLoad={}        // Fired when loading is complete
										// onEnd={}         // Fired when the video is complete.

										// actions
										goBack={ Actions.pop }   // Function fired when back button is pressed.
								/>
					</View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
})
