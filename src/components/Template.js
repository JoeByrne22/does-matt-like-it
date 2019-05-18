import React from 'react';
import { Link } from 'react-router-dom';

function Template({ thing }) {
  return (
    <section>
      <Link to={`/things/${thing._id}`}>
        <h1 >Does Matt like { thing.item }?</h1>
        <img  src={ thing.image } />
      </Link>
    </section>
  );
}

export default Template;
