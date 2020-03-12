import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppSpinner from '../spinner/spinner';
import PeopleItem from '../peopleitem/people.item';
import ReactPaginate from 'react-paginate';
import { Container, Alert, ListGroup, Row, Col } from 'reactstrap';
import { isEmpty } from '../utils/utils';
import Pagination from '../pagination/pagination';
import './people.list.scss';

const PeopleLists = () => {
    const [currentPage, setCurrentPageRequest] = useState(0);

    const { people, isloading, error, page } = useSelector(state => state.people)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch({ type: "PEOPLE_REQUEST", payload: { page: currentPage + 1 } })
    }, [currentPage, dispatch])

    if(isloading) return <AppSpinner />
    if(people.count === 0) return <Alert color="danger">No results found ...</Alert>
    if(!isEmpty(error)) return <Alert color="danger">Something went wrong ...</Alert>

    return (
      <Container className="listcontent">
        <Row>
          <Col lg="12" className="mt-3 mb-100">
            {people.results.map((item, index) => <PeopleItem key={index} item={item} />)}
          </Col>
        </Row>
        <Pagination 
          currentPage={currentPage}
          pageCount={Math.round(people.count / 10)} 
          onPageChange={pagenum => setCurrentPageRequest(pagenum.selected)} 
        />
      </Container>
    )
}


export default PeopleLists;