import PropTypes from 'prop-types';
import Link  from 'next/link';
import "@/app/globals.css";

const BtnCronogramaSecundary = ({ url, children }) => {
  return (
    <Link href={url}>
    <div className='btnCronogramaSecundary sora-medium' target="_blank" rel="button">
      {children}
    </div>
  </Link>
  );
};

BtnCronogramaSecundary.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BtnCronogramaSecundary;
