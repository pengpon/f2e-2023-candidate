import PropTypes from 'prop-types';

function TextLink({theme, href, children}) {
  return (
    <>
      <a
        href={href}
        className={`text-link is-${theme}`}
      >{children}</a>
    </>
  )
}

TextLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  theme: PropTypes.string,
};

export default TextLink;