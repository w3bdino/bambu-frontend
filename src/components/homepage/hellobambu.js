import React from 'react';
import { useHistory } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';

const Hellobambu = (props) => {
  const history = useHistory();

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, Bambu !</h1>
        <p className="lead">Simple ReactJS Application</p>
        <hr className="my-2" />
        <p>Scope of assignment: With API from swapi.co, build a single page application where users can view the details about all the people in the Star Wars Universe.</p>
        <p className="lead">
          <Button color="primary" onClick={() => history.push('/people')}>View App Now</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Hellobambu;