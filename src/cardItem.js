import React from 'react';
import {connect} from 'react-redux';
import {Card} from 'reactstrap';
import CardBody from "reactstrap/es/CardBody";
import CardTitle from "reactstrap/es/CardTitle";
import CardSubtitle from "reactstrap/es/CardSubtitle";
import CardFooter from "reactstrap/es/CardFooter";
import Button from "reactstrap/es/Button";

function CardItem(props) {
    const {card} = props;
    const {name, status, priority, _id} = card;

    const deleteButtonHandler = ()=> {
        props.deleteCard(_id);
    }

    return (
        <div>
            <button onClick={props.addCard}>add card</button>
            {/*{props.cards.map(el =>*/}
            {/*    <div key={el._id}>*/}
            {/*        {el.name}*/}
            {/*        <button onClick={()=> props.deleteCard(el._id)}>delete</button>*/}
            {/*    </div>)}*/}
            <Card>
                <CardBody>
                    <CardTitle> {name} </CardTitle>
                    <CardSubtitle> {status} </CardSubtitle>
                    {priority}
                </CardBody>
                <CardFooter>
                    <Button> left </Button>
                    {' '}
                    <Button onClick={deleteButtonHandler}> delete card </Button>
                    {' '}
                    <Button onClick={()=>props.moveRight(_id)}> right </Button>
                </CardFooter>
            </Card>
        </div>
    );
}


const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    addCard: () => dispatch({type: 'ADD_CARD'}),
    deleteCard: (cardId) => dispatch({type: 'DELETE_CARD', payload: cardId}),
    moveRight: (cardId) => dispatch({type: 'MOVE_RIGHT', payload: cardId})
})


export default connect(mapStateToProps, mapDispatchToProps)(CardItem);