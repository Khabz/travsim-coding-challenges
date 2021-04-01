// Main styles
import React, { Component } from 'react';
import './App.css';
// Components
import TodoList from './components/TodoList';
import { connect } from 'react-redux';

class App extends Component  {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h1>Drag n Drop</h1>
        <div style={styles.listsContainer}>
          { lists.map(list => <TodoList title={list.title} cards={list.cards} key={list.id}/>) }
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
