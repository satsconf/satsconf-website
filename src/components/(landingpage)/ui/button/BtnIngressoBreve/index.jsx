import PropTypes from 'prop-types';
import Link  from 'next/link';
import "@/app/globals.css";

const BtnIngressoBreve = ({ url, children }) => {
  return (
    <Link href={url} className='btnIngressoBreve sora-medium' target="_self" rel="button">
      {children}
    </Link>
  );
};

BtnIngressoBreve.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BtnIngressoBreve;
