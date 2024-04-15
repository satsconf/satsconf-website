import PropTypes from 'prop-types';

const BtnNovidades = ({ url, children }) => {
    return (
      <a href={url} className="btnNovidades sora-medium" target="_blank" rel="button">
        {children}
      </a>
    );
  };

  BtnNovidades.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };

  export default BtnNovidades; 