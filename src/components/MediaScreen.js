import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, ListView, Image } from 'react-native';

// Thirdparty
import { Container, Header, Title, Content, Thumbnail, Text, Button, Spinner, Card, CardItem} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class MediaScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: undefined,
			items: undefined
		}
	}

	componentWillMount() {
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.setState({
			selectedItem: this.props.item,
			items: this.props.items,
			dataSource: ds.cloneWithRows(this.props.items)
		});
		console.log(this.state.items);
	}
	//121958
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
							<CardItem header>
									<Thumbnail
										source={(this.state.selectedItem.media_type == 'video') ?
														require('../assets/video@3x.png') : (this.state.selectedItem.media_type == 'audio') ?
														require('../assets/audio.png') : require('../assets/FTF-A-logo-bar.png')}
										/>
									<Text>{this.state.selectedItem.title}</Text>
									<Text note>April 15, 2016</Text>
							</CardItem>
							<CardItem cardBody>
									<TouchableOpacity
										style={{ minHeight: 150 }}
										onPress={() => {
											this.state.selectedItem.media_type == 'video' ?
											Actions.VideoScreen({ item: this.state.selectedItem }) :
											Actions.AudioScreen({ item: this.state.selectedItem });
										}}>
										<Image style={{ resizeMode: 'cover', backgroundColor: 'transparent',flex: 1, alignItems: 'center', justifyContent: 'center'}} source={{ uri: 'https://chimney-api-hanslandgreen.c9users.io' + this.state.selectedItem.thumbnail.thumbnail.url }} >
											<Icon name="play-circle-o" size={80} color="rgb(13, 85, 100)" />
										</Image>
									</TouchableOpacity>
									<Text>
										{this.state.selectedItem.description}
									</Text>
							</CardItem>
							<CardItem header>
								<ScrollView
									automaticallyAdjustContentInsets={true}
									horizontal={true}
								>
									<ListView
														horizontal={true}
														dataSource={this.state.dataSource}
														renderRow={(item) =>
										<TouchableOpacity
															style={styles.column}
															onPress={() =>
															{ Actions.MediaScreen({ item: item,
																											items: this.state.items }); }}>
												<Thumbnail
													square
													size={80}
													source={{uri: 'https://chimney-api-hanslandgreen.c9users.io' + item.thumbnail.thumbnail.url}}
												/>
												<Text>{item.title}</Text>
										</TouchableOpacity>
									}/>
								</ScrollView>
							</CardItem>
						</Card>
				</Content>
			</Container>
    );
  }
}

const styles = StyleSheet.create({
		column: {
				marginLeft: 10,
				marginRight: 10,
				padding: 5,
				alignItems: 'center',
				borderWidth: 1,
				borderColor: '#ddd',
				borderRadius: 3,
				maxWidth: 180,
		}
});
