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
				<Header backgroundColor={'#2A2A2A'}>
						<Button transparent onPress={Actions.pop}>
							<Icon name="caret-left" size={35} color="#fff" />
						</Button>
						<Title style={{ marginTop: 8 }}><Image source={require('../assets/Chimney-logo-white-top.png')} /></Title>
				</Header>
				<Content>
						<Card style={{ flex: 0, padding: 0 }}>
							<CardItem style={{ padding: 0 }} cardBody>
									<TouchableOpacity
										style={{ minHeight: 150 }}
										onPress={() => Actions.PlaybackScreen({ item: this.state.selectedItem })}>
										<Image style={{ resizeMode: 'cover', backgroundColor: 'transparent',flex: 1, alignItems: 'center', justifyContent: 'center'}} source={{ uri: 'https://chimney-api-hanslandgreen.c9users.io' + this.state.selectedItem.thumbnail.thumbnail.url }} >
											<Icon name="play" size={80} color="#66BEA2" />

										</Image>
									</TouchableOpacity>
									<CardItem header>
											<Thumbnail
												style={{ width: 35, height: 30, alignSelf: 'center' }}
												source={(this.state.selectedItem.media_type == 'video') ?
																require('../assets/video.png') : (this.state.selectedItem.media_type == 'audio') ?
																require('../assets/audio.png') : require('../assets/Chimney-logo-white-top.png')}
												/>
											<Text>{this.state.selectedItem.title}</Text>
									</CardItem>
									<Text style={{ padding: 10 }}>
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
													style={{ width: 150, height: 80 }}
													source={{uri: 'https://chimney-api-hanslandgreen.c9users.io' + item.thumbnail.thumbnail.url}}
												/>
												<Text style={{ paddingTop: 5, paddingBottom: 5 }}>{item.title}</Text>
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
				// padding: 5,
				alignItems: 'center',
				borderWidth: 1,
				borderColor: '#ddd',
				borderRadius: 3,
				maxWidth: 180,
		}
});
