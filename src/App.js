import React from 'react';
import './App.css';
import {connect} from "react-redux";
import Card from "./cardItem";
import Board from "./Board";
import {Container} from "reactstrap";




function App(props) {
  console.log(props)

  return (
    <Container>
      {/*<Card/>*/}
     {/*{props.cards.map(el=> el.name)}*/}
     <Board cards = {props.cards} columns = {props.columns}/>
    </Container>
  );
}

const mapStateToProps = (state)=> ({
  cards: state.cards,
  columns: state.columns
})

// const mapDispatchToProps = (dispatch)=> ({
//   addCard: () => dispatch({type: 'ADD_CARD'})
// })

export default connect(mapStateToProps) (App);
