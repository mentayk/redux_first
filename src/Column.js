import React from 'react';
import {connect} from 'react-redux';
import CardItem from "./cardItem";
import {Col} from 'reactstrap'

function Column(props) {

    const {cards, columns} = props;


    return (
        <Col>
            {columns.status}
            {cards.filter(el=>el.status===columns.status).map(el=><CardItem card={el}/>)}
        </Col>
    );
}

// const mapStateToProps = (state) => ({
//     bye: state.cards,
//     hello: state.columns
// })

export default Column;