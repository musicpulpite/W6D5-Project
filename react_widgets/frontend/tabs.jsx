import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentTab: 0 };
    this.updateCurrentTab = this.updateCurrentTab.bind(this);
  }

  //Mattias' solution the inner function is returned with a closure over the index
  //without ever having to store the idx as a prop or HTML attr
  updateCurrentTab(idx) {
    return (e) => {
      this.setState({currentTab: idx});
    };
  }

  render() {
    const tabLis = this.props.el.map((obj, idx) => {
      let title = obj.title;
      let selected = (this.state.currentTab === idx ? "selected" : "");
      return (<li key={idx} className={selected} onClick={this.updateCurrentTab(idx)} >{title}</li>);
    });



    // const contentArr = this.props.el.map((obj, idx) => {
    //   let content = obj.content;
    //   return (<article key={idx}>{content}</article>);
    // });

    return (
      <div className="tabs">
        <h1>Tabs</h1>
        <div className="tabs-content">
          <ul>
            {tabLis}
          </ul>

          <article>{this.props.el[this.state.currentTab].content}</article>
        </div>
      </div>
    );
  }
}

export default Tabs;
