import React from 'react';
import {connect} from 'react-redux';
import Column from "./Column";
import {Row} from 'reactstrap'

function Board(props) {
    const {cards, columns} = props;


return (
    <Row>
        {columns.map(el=> <Column columns={el} cards={cards}/>)}
    </Row>
);
}

// const mapStateToProps = (state) => ({
//     bye: state.cards,
//     hello: state.columns
// })

export default Board;