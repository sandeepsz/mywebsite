import React, { useState } from "react";

const List = ({ list, filterItems }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="projects__list">
      {list.map((category, index) => {
        return (
          <button
            className={`${
              active === index ? 'active-work' : ''
            } projects__list-item`}
            key={index}
            onClick={() => {
              setActive(index);
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default List;
