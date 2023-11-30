import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, addFilter }) => (
  <div className={css.filter}>
    <input
      type="text"
      name="filter"
      className={css.filterInput}
      value={filter}
      onChange={e => addFilter(e.currentTarget.value)}
      placeholder="Enter name"
    />
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  addFilter: PropTypes.func,
};

export default Filter;
