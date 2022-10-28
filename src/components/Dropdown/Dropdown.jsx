import React, { Component } from 'react';
import './Dropdown.css';
class Dropdown extends Component {
  state = {
    visiable: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visiable: !prevState.visiable }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visiable ? 'Скрыть' : 'Показать'}
        </button>

        {this.state.visiable && (
          <div className="Dropdown__menu">Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
