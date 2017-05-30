import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import actions from '../redux/actions'
class Db extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('/bye')
      .then(res => {
      /*  const posts = res.data;
        this.setState({ posts:posts });*/
        this.props.dispatch(actions.addTodoo(res.data))
      });
  }

  render() {
    return (
      <html>
      <body>
      <h1>Hi..</h1>
        <ul>
          {this.props.data.map((post,i) =>
            <li key={i} >{post.name}</li>
          )}
        </ul>
        </body>
      </html>
    );
  }
}
export default Db;
