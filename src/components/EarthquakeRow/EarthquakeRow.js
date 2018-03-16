import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import EarthquakeDetailsButton from 'components/EarthquakeDetailsButton/EarthquakeDetailsButton';

import 'components/EarthquakeRow/EarthquakeRow.css';

/**
 * This component should render all of the columns needed
 * as well as the details button.
 *
 * PLEASE GIVE ANYTHING THAT HAS A VALUE IN IT THE CLASSNAME
 * EarthquakeRow__value
 */
export default class EarthquakeRow extends PureComponent {
  constructor() {
    super();

    this.state = { expanded: false };
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  render() {
    /** Don't forget to format the time here! */

    return (
      <div>
        {/* This should return the details, all the values, and the details button */}
      </div>
    );
  }
}

EarthquakeRow.propTypes = {
  id: PropTypes.string,
  time: PropTypes.string,
  place: PropTypes.string,
  mag: PropTypes.number,
  longitude: PropTypes.number,
  latitude: PropTypes.number,
};

EarthquakeRow.defaultProps = {
  id: '',
  time: '',
  place: '',
  mag: 0,
  longitude: 0,
  latitude: 0,
};
