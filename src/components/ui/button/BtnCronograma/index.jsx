import PropTypes from 'prop-types';
import Link  from 'next/link';
import "@/app/globals.css";

const BtnCronograma = ({ url, children }) => {
  return (
    <Link href={url}>
    <div className='btnCronograma sora-medium' target="_blank" rel="button">
      {children}
    </div>
  </Link>
  );
};

BtnCronograma.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BtnCronograma;
