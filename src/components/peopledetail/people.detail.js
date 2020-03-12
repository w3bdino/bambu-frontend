import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Button } from 'reactstrap';
import AppSpinner from '../spinner/spinner';
import './people.detail.scss';

const PeopleDetail = () => {
  const { personId } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const { info, isloading, error } = useSelector(state => state.person)

  useEffect(() => {
    dispatch({ type: "GET_PERSON_DETAIL", payload: { personID: personId } })
  }, [])

  if(isloading) return <AppSpinner />

  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = info;
  return (
    <Container className="person-detail text-left">
      <div className="profile card mt-4">
        <div className="profile-body">
          <div className="profile-bio">
            <div className="row">
              <div className="col-md-5 text-center">
                <img className="img-thumbnail md-margin-bottom-10" src="https://bootdey.com/img/Content/user-453533-fdadfd.png" alt="" />
              </div>
                <div className="col-md-7 text-left">
                  <div className="col-md-12"><h2>{name}</h2></div>
                  <div className="col-md-12"><strong>Height:</strong> {height} </div>
                  <div className="col-md-12"><strong>Mass:</strong> {mass} </div>
                  <div className="col-md-12"><strong>Hair Color:</strong> {hair_color} </div>            
                  <div className="col-md-12"><strong>Skin Color:</strong> {skin_color} </div>
                  <div className="col-md-12"><strong>Eye Color:</strong> {eye_color} </div>                                          
                  <div className="col-md-12"><strong>Birth Year:</strong> {birth_year} </div>
                  <div className="col-md-12"><strong>Gender:</strong> {gender} </div>                                    
                  
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget massa nec turpis congue bibendum. Integer nulla felis, porta suscipit nulla et, dignissim commodo nunc. Morbi a semper nulla.</p>
              </div>
            </div>    
          </div>
        </div>
      </div>
      <Button color="danger" size="md" className="mt-2" onClick={() => history.goBack()}>&#171; Go Back</Button>
    </Container>
  )
}

export default PeopleDetail;