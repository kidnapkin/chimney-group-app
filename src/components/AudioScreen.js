import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Title, Thumbnail, Text, Button } from 'native-base';

// Thirdparty
import { Player } from 'react-native-audio-streaming';
import { Actions } from 'react-native-router-flux';

export default class AudioScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: undefined
    }
  }

  componentWillMount() {
    this.setState({
      selectedItem: this.props.item
    })
  }

  render() {
		return (
      <Container backgroundColor={'rgb(255, 255, 255)'}>
        <Header backgroundColor={'rgb(13, 85, 100)'}>
						<Button transparent onPress={Actions.pop}>
							<Image source={require('../assets/arrow.png')} />
						</Button>
						<Title style={{ marginTop: 8 }}><Image source={require('../assets/FTF-A-logo-bar.png')} /></Title>
				</Header>
        <View style={styles.container}>

          <Thumbnail square size={160} source={{uri: 'https://chimney-api-hanslandgreen.c9users.io' + this.state.selectedItem.thumbnail.thumbnail.url}} />
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 8, color: '#fff' }}>{this.state.selectedItem.title}</Text>

          <Player
            url={'https://chimney-api-hanslandgreen.c9users.io' + this.state.selectedItem.media.media.url}
          />
        </View>
    </Container>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(13, 85, 100, 0.7)',
  }
})
