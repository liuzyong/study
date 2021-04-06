const h = React.createElement;

const { render } = ReactDOM;

const app = document.getElementById("app");

class FirstComponent extends Component {
  render() {
    return h("div", {}, [
      h("div", {}, "div 1"),
      h("div", {}, "div 2"),
      h("div", {}, "div 3"),
    ]);
  }
}

render(h(FirstComponent, {}, null), app);
