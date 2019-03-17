import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import EarthquakesHeader from 'components/EarthquakesHeader/EarthquakesHeader';
import EarthquakeRow from 'components/EarthquakeRow/EarthquakeRow';
import EarthquakeFilter from 'components/EarthquakeFilter/EarthquakeFilter';

import 'components/Earthquakes/Earthquakes.css';

export default class Earthquakes extends PureComponent {
  render() {
    const { updateFilter, earthquakes } = this.props;

    const earthquakeRows = earthquakes.map(el => (
      <EarthquakeRow
        key={el.id}
        id={el.id}
        time={el.time}
        place={el.place}
        mag={el.mag}
        longitude={el.longitude}
        latitude={el.latitude}
      />
    ));
    return (
      <div className="Earthquakes">
        <EarthquakeFilter onInput={updateFilter} />
        {/* render all your earthquake rows here! */}
        <table className="Earthquakes__table-scroller Earthquakes__table">
          <EarthquakesHeader />
          <tbody>{earthquakeRows}</tbody>
        </table>
      </div>
    );
  }
}

Earthquakes.propTypes = {
  earthquakes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      place: PropTypes.string,
      mag: PropTypes.num,
      time: PropTypes.string,
      long: PropTypes.num,
      lat: PropTypes.num,
    })
  ),

  updateFilter: PropTypes.func.isRequired,
};

Earthquakes.defaultProps = {
  earthquakes: [],
};
