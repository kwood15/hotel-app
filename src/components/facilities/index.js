import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@rebass/grid';
import { formatFacilityName } from '../../helpers';
import Checkbox from '../form/Checkbox';
import { FacilityGroup, FacilityLabel } from './FacilityStyles';
import { Form } from '../shared/SharedStyles';

const Facilities = ({
  checkedItems,
  handleFacilityChange,
  uniqueFacilities,
  type
}) => (
  <Flex as="section" className="facilities" width={[1, 1/4]} mr={4} mt={4}>
    <Form className="facilities__form">
      <fieldset className="facilities-form__fields">
        <legend className="facilities-form__title">Facilities</legend>
        <div className="facilities-form__fieldset">
          {uniqueFacilities.map(facility => (
            <FacilityGroup className="facilities-form__group" key={facility}>
              <div className="facilities-form__checkbox checkbox">
                <Checkbox
                  id={formatFacilityName(facility)}
                  type={type}
                  name={facility}
                  checked={checkedItems.get(facility)}
                  onChange={handleFacilityChange}
                />
                <FacilityLabel
                  className="facilities-form__label checkbox__label u-text-transform-capitalize"
                  htmlFor={formatFacilityName(facility)}
                  key={formatFacilityName(facility)}
                  aria-label={facility}
                >
                  {facility}
                </FacilityLabel>
              </div>
            </FacilityGroup>
          ))}
        </div>
      </fieldset>
    </Form>
  </Flex>
);

export default Facilities;

Facilities.propTypes = {
  checkedItems: PropTypes.instanceOf(Map),
  type: PropTypes.string,
  handleFacilityChange: PropTypes.func.isRequired,
  uniqueFacilities: PropTypes.arrayOf(PropTypes.string)
};
