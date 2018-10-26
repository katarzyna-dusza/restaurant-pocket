import React from 'react';

const DEFAULT_SORT_TYPE = 'DESC';
const ASC_SORT = 'ASC';

const displaySorting = (sortType, onClick) => {
  return DEFAULT_SORT_TYPE === sortType ? (
    <i className="material-icons" data-type={ASC_SORT} onClick={onClick}>
      arrow_drop_up
    </i>
  ) : (
    <i
      className="material-icons"
      data-type={DEFAULT_SORT_TYPE}
      onClick={onClick}>
      arrow_drop_down
    </i>
  );
};

const SortingComponent = (props) =>
  props.sortingAvailable ? displaySorting(props.sortType, props.onClick) : '';

export default SortingComponent;
