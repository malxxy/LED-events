// The following code is from the React JS https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605
// This project is a test for the owner of the repo to self-teach React JS and explore.

'use strict';

const e = React.createElement;

class ReactButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#react-play');
const root = ReactDOM.createRooot(domContainer);
root.render(e(ReactButton));