import React from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import PeopleLists from '../components/peoplelist/people.list';

const PeoplePage = () => {
    return (
      <>
        <Header />
        <PeopleLists />
        <Footer />
      </>
    )
}


export default PeoplePage;