import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  property_id: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  resourceLink: PropTypes.string.isRequired,
  previewLink: PropTypes.string.isRequired,
  fromSystemLink: PropTypes.string.isRequired,
});