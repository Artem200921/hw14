import React from "react";
import { Loader } from "./components/Loader";
import { Searchbar } from "./components/Searchbar";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "49018118-02a28386ad45f7796752c728e";
class App extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchRequest !== this.state.searchRequest) {
      this.setState({ page: 1 });
    }
  }
  state = {
    apiData: [],
    searchRequest: "",
    page: 1,
  };

  getInfoFromApi = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}?key=${API_KEY}&q=${this.state.searchRequest}&image_type=photo&page=${this.state.page}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  async componentDidMount() {
    const data = await this.getInfoFromApi();
    this.setState({ apiData: data && data.hits ? data.hits : [] });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      console.log("search request changed!");
      const data = await this.getInfoFromApi();
      let newApiData = [...this.state.apiData];
      data.hits.map((e) => {
        newApiData.push(e);
      });
      this.setState({ apiData: data && data.hits ? newApiData : [] });
    } else {
      null;
    }
    if (prevState.searchRequest !== this.state.searchRequest) {
      const data = await this.getInfoFromApi();
      this.setState({
        apiData: data && data.hits ? data.hits : [],
      });
    }
  }

  loadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  searchRequest = (e) => {
    e.preventDefault();
    const text = (e.currentTarget.elements[1].value || "").trim();
    if (text === "") {
      console.log("Search input is empty");
      return;
    }
    this.setState({ searchRequest: text });
    e.currentTarget.reset();
  };

  render() {
    return (
      <>
        <Searchbar submit={this.searchRequest} />
        <Loader api={this.state.apiData} loadMore={this.loadMore} />;
      </>
    );
  }
}

export default App;
