import React, { Component } from 'react';
import { StyleSheet, Image, StatusBar, View, TouchableHighlight } from 'react-native';

// Thirdparty
import { Container, Header, Title, Content, List, Thumbnail, ListItem, Text, Button, Spinner, Card, CardItem, H3 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import VideoPlayer from 'react-native-video-controls';
import { Actions, ActionConst, NavBar } from 'react-native-router-flux';


export default class MediaScreen extends Component {
	constructor(props) {
		super(props);
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
			<Container>
				<Header backgroundColor={'rgb(13, 85, 100)'}>
						<Button transparent onPress={Actions.pop}>
							<Image source={require('../assets/arrow.png')} />
						</Button>
						<Title style={{ marginTop: 8 }}><Image source={require('../assets/FTF-A-logo-bar.png')} /></Title>
				</Header>
				<Content>
					<View style={{paddingLeft: 15, paddingRight: 15}}>

					</View>
					<View style={styles.shad}>
						<View style={styles.fullScreen}>
							 <TouchableHighlight  onPress={() => {
																			 this.state.selectedItem.type == 'video' ?
																			 Actions.VideoScreen({ item: this.state.selectedItem }) :
																			 Actions.AudioScreen({ item: this.state.selectedItem });
																		 }} >
								<Image
									style={styles.thumbnail}
									source={{ uri: this.state.selectedItem.thumbnail }}
								/>
							</TouchableHighlight>
						</View>
						<View style={styles.descrTitle}>
							<Grid>
								<Col>
									<Text style={styles.txt}>{this.state.selectedItem.title}</Text>
								</Col>
								<Col style={{width: 50}}>
									<Image
										style={styles.img}
										source={(this.state.selectedItem.type == 'video') ? require('../assets/video@3x.png') : (this.state.selectedItem.type == 'audio') ? require('../assets/audio.png') : require('../assets/FTF-A-logo-bar.png')}
									/>
								</Col>
							</Grid>
							<Text  style={{marginTop: 8, marginLeft: 6, fontSize: 12 }}>{this.state.selectedItem.description}</Text>
						</View>
					</View>
				</Content>
			</Container>
    );
  }
}


var styles = StyleSheet.create({
	img: {
		alignSelf: "flex-end",
		width: 35,
		height: 30,
		marginTop: 2
	},
	txt: {
		fontWeight: 'normal',
		marginLeft: 6,
		marginTop: 3
	},
	descrTitle: {
		backgroundColor: '#fff',
		padding: 10,
		paddingBottom: 30
	},
	shad: {
		margin: 0
	},
	thumbnail: {
		height: 250,
		width: 800
	}
})
