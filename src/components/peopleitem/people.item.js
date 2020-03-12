import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Card, CardText, CardTitle, Button } from 'reactstrap';
import './people.item.scss';

const getPersonID = (val) => {
  let value;
  for(value of val);
  return value;
}

const PeopleItem = ({ item }) => {
  const history = useHistory();
  var pathArray = new Set(item.url.split( '/' ));

  return (
    <Col className="col-lg-3 listitem">
      <Card className="listcard">
        <CardTitle><h4>{item.name}</h4></CardTitle>
        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </CardText>
        <Button className="listbutton" onClick={() => history.push(`/people/${getPersonID(pathArray)}`)}>View Detail</Button>
      </Card>
    </Col> 
  )
}

export default PeopleItem;