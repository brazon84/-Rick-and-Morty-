import React, { useState, useEffect } from 'react';
import ResidentInfo from '../residents/ResidentInfo';
import Pagination from 'react-bootstrap/Pagination';


const ListResidents = ({ residents }) => {
  const [activePage, setActivePage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 10;

  const paginate = (pageNumber) => {
    setActivePage(pageNumber);
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = pageNumber * itemsPerPage;
    setCurrentItems(residents.slice(startIndex, endIndex));
  };


  const items = [];
  for (let number = 1; number <= Math.ceil(residents.length / itemsPerPage); number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage} onClick={() => paginate(number)}>
        {number}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    setCurrentItems(residents.slice(0, itemsPerPage));
    setActivePage(1);
  }, [residents]);

  return (
    <div>
      <section className='d-flex gap-5 justify-content-center align-items-center flex-wrap'>
        {currentItems.map((resident) => (
          <ResidentInfo key={resident} urlResident={resident} />
        ))}
      </section>

      <Pagination className='d-flex justify-content-center p-5 rounded'>{items}</Pagination>
    </div>
  );
};

export default ListResidents;