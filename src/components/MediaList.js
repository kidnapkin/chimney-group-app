import React, { Component } from "react";
import { Platform, StyleSheet, Image, StatusBar, RefreshControl } from 'react-native';

// Thirdparty
import { Container, Header, Title, Content, List, Thumbnail, ListItem, Text, Button, Spinner, Card, CardItem, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class MediaList extends Component {
	constructor(props) {
			super(props);
			this.state = {
			selectedItem: undefined,
      resultApi: {
        items: []
      },
			results: {
				items: []
			}
		}
	}

	componentWillMount() {
		var that = this;
    that.getApiVidz();
	}

	showItem(x) {
		this.setState({
			selectedItem: x
		});
	}

  getApiVidz() {
    // Set loading to true when the search starts to display a Spinner
    this.setState({
      loading: true
    });
    var that = this;
    fetch('https://chimney-api-hanslandgreen.c9users.io/posts',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'accept-encoding': 'gzip, deflate',
          'accept-language': 'en-US,en;q=0.8',
          'Authorization': 'Token token=b3dd9c834e7235433a15b8ee6af31b2c',
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {

          that.setState({
            resultApi: responseJson,
            sendItemsApi: responseJson,
            loading: false
          });
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
  }

  _onRefresh() {
    var that = this;
    that.getApiVidz();
  }




	render() {
		var that = this;
		return (
      <Container>
				<Header backgroundColor={'rgb(13, 85, 100)'}>
						<Title style={{ marginTop: 8 }}><Image source={require('../assets/FTF-A-logo-bar.png')} /></Title>
				</Header>
				<Content refreshControl={
                    <RefreshControl
                      refreshing={false}
                      onRefresh={that._onRefresh.bind(this)}
                    />}
          backgroundColor={'#f6f6f6'}>
					{this.state.loading ? <Spinner color={'rgb(13, 85, 100)'} /> :
  					<Card dataArray={that.state.resultApi}
                  renderRow={(item) =>
  						<CardItem button
                        onPress={() =>
                        { console.log(that.state);
                          Actions.MediaScreen({ item: item,
                                                items: that.state.sendItemsApi }); }}>
                <Grid>
                   <Col style={{width: 80,height: 90, marginTop: 5}}>
                     <Thumbnail
                       style= {{marginTop: 5}}
                       size={80}
                       source={{ uri: 'https://chimney-api-hanslandgreen.c9users.io' + item.thumbnail.thumbnail.url }}
                     />
                   </Col>
                   <Col style={{height: 90, margin: 5, marginLeft: 12 }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 12, lineHeight: 14,marginTop: 3 }}>{item.title}</Text>
                      <Text
                        note
                        style={{ color: '#0D5564', fontSize: 11, lineHeight: 12, marginTop: 7}}
                      >
                        {item.description.substring(0, 70) + '...'}
                      </Text>
                   </Col>
                   <Col style={{width: 25 ,height: 90, margin: 5 }}>
                     <Image
                       style={{marginTop: 54, width: 35, height: 30 }}
                       source={(item.media_type == 'video') ? require('../assets/video-greyish.png') : (item.media_type == 'audio') ? require('../assets/audio-greyish.png') : require('../assets/FTF-A-logo-bar.png')}
                     />
                   </Col>
               </Grid>
             </CardItem>
  					}>
            </Card>
          }
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
		bold: {
				fontWeight: '600'
		},
});
