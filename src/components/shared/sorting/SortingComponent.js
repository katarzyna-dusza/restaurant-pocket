import React from 'react';

const displaySorting = (sortType, onClick) => {
  return 'DESC' === sortType ? (
    <i
      className="material-icons"
      data-type="ASC"
      onClick={onClick}>
      arrow_drop_up
    </i>
  ) : (
    <i
      className="material-icons"
      data-type="DESC"
      onClick={onClick}>
      arrow_drop_down
    </i>
  );
}

const SortingComponent = (props) => props.sortingAvailable ? displaySorting(props.sortType, props.onClick) : '' ;

export default SortingComponent;
