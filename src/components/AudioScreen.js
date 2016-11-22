import React, { Component } from 'react';
import { StyleSheet, Image, StatusBar, View } from 'react-native';

// Thirdparty
import { Player } from 'react-native-audio-streaming';
import { Actions, ActionConst, NavBar } from 'react-native-router-flux';

export default class AudioScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: this.props.item,
    }
    console.log(this.state.selectedItem);
  }

  // componentWillMount() {
  //   var that = this;
  //   that.setState({
  //     selectedItem: this.props.item
  //   })
  // }

  render() {
		return (
      <View style={styles.container}>
        <Player
          url={this.state.selectedItem.uri.la}
        />
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(13, 85, 100)',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
})
