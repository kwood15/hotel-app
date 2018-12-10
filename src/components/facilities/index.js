import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@rebass/grid';
import Checkbox from '../form/Checkbox';
import { FacilityGroup, FacilityLabel } from './FacilityStyles';
import { Form } from '../shared/SharedStyles';

const Facilities = ({
  hotels,
  checkedItems,
  handleFacilityChange,
  type
}) => (
  <Flex width={[1, 1/4]} mr={4} mt={4}>
    <Form className="facilities">
      <fieldset className="facilities__fields">
        <legend className="facilities__title">Facilities</legend>
        {hotels.map(hotel => (
          <div key={hotel.name}>
            {hotel.facilities.map(facility => (
              <FacilityGroup className="facilities__group" key={facility}>
                <div className="checkbox">
                  <Checkbox
                    id={facility}
                    type={type}
                    name={facility}
                    checked={checkedItems.get(facility)}
                    onChange={handleFacilityChange}
                  />
                  <FacilityLabel
                    className="facilities__label checkbox__label u-text-transform-capitalize"
                    htmlFor={facility}
                    key={facility}
                    aria-label={facility}
                  >
                    {facility}
                  </FacilityLabel>
                </div>
              </FacilityGroup>
            ))}
          </div>
        ))}
      </fieldset>
    </Form>
  </Flex>
);

export default Facilities;

Facilities.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape({
    facilities: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired,
  checkedItems: PropTypes.instanceOf(Map),
  type: PropTypes.string,
  handleFacilityChange: PropTypes.func.isRequired
};
