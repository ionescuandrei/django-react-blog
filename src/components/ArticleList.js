import React from "react";
import Article from "./Article";
import axios from "axios";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";
class ArticleList extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then((res) => {
        console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch((err) => err);
  }

  render() {
    const articleList = this.state.data.map((art) => (
      <Article key={art.id} data={art} />
    ));
    return <Container>{articleList}</Container>;
  }
}
export default ArticleList;
