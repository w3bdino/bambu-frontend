import React from 'react';
import ReactPaginate from 'react-paginate';
import { Row, Col } from 'reactstrap';
import './pagination.scss';

const Pagination = ({ pageCount, onPageChange, currentPage }) => {
    return (
      <Row>
        <Col lg="12" className="mt-3 mb-100">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'page-link'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={onPageChange}
            containerClassName={'pagination justify-content-center'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousLinkClassName={'page-link'}
            nextLinkClassName={'page-link'}
            forcePage={currentPage}
            disabledClassName={'page-item disabled'}
          />
        </Col>
      </Row>
    )
}


export default Pagination;