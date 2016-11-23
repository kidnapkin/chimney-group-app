import React, { Component } from 'react';
import { Image } from 'react-native';

// Thirdparty
import { Container, Header, Title, Content, Thumbnail, Text, Button, Spinner, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class MediaScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: undefined,
		}
	}

	componentWillMount() {
		this.setState({
			selectedItem: this.props.item
		})
	}

  render() {
		return (
			<Container>
				<Header backgroundColor={'rgb(13, 85, 100)'}>
						<Button transparent onPress={Actions.pop}>
							<Image source={require('../assets/arrow.png')} />
						</Button>
						<Title style={{ marginTop: 8 }}><Image source={require('../assets/FTF-A-logo-bar.png')} /></Title>
				</Header>
				<Content>
						<Card style={{ flex: 0 }}>
							<CardItem>
									<Thumbnail
										source={(this.state.selectedItem.type == 'video') ?
														require('../assets/video@3x.png') : (this.state.selectedItem.type == 'audio') ?
														require('../assets/audio.png') : require('../assets/FTF-A-logo-bar.png')}
										/>
									<Text>{this.state.selectedItem.title}</Text>
									<Text note>April 15, 2016</Text>
							</CardItem>
							<CardItem cardBody button onPress={() => {
																			this.state.selectedItem.type == 'video' ?
																			Actions.VideoScreen({ item: this.state.selectedItem }) :
																			Actions.AudioScreen({ item: this.state.selectedItem });
																		}}>
									<Image style={{ resizeMode: 'cover'}} source={{ uri: this.state.selectedItem.thumbnail }} />
									<Text>
											{this.state.selectedItem.description}
									</Text>
							</CardItem>
						</Card>
				</Content>
			</Container>
    );
  }
}
