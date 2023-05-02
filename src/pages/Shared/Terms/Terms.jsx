import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms & Condiions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos assumenda, eaque officia omnis necessitatibus sint ad quas nisi recusandae incidunt autem tempora mollitia aut nobis iure rem consequuntur? Vitae cupiditate repellat tempore voluptate illum sapiente recusandae praesentium quos illo, fugit magnam reprehenderit ut, facilis sed ea sequi inventore obcaecati?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;