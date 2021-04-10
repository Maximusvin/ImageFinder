import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import fetchAPI from './services/api';
import './App.css';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== this.state.query) {
      fetchAPI(query, page)
        .then(img =>
          this.setState(({ images, page }) => ({
            images: [...images, ...img],
            page: page + 1,
          })),
        )
        .catch(err => this.setState({ err }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleSubmit = query => {
    this.setState({ query, page: 1, error: null, images: [] });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}

export default App;
