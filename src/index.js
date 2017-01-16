import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCJzsRO1uAD-miCC61F2dPRix5BMKl4H7M';



// create a new component. this component should produce some html.
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'lord of the rings'}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} /> 
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
				videos={this.state.videos} />
			</div>
		);
	}
}


// take components generated html and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));