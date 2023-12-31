import PropTypes from 'prop-types';
import Input from '../Input'
import Textarea from '../Texrarea';
import Button from '../Button';

function Forms({className}) {
  return (
    <>
    <form className={`form ${className}`}>
      <Input name="姓名" type="text" placeholder="" className="mb-3" />
      <Input name="Email" type="email" placeholder="" className="mb-3" />
      <Input name="電話/手機" type="tel" placeholder="" className="mb-3" />
      <Textarea name="對我們的建議" rows={5} className="mb-5"/>
      <Button type="large">確認送出</Button>
    </form>
    </>
  )
}

Forms.propTypes = {
  className: PropTypes.string,
};
export default Forms;