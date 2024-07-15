import PropTypes from 'prop-types';
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
export default function ToggleButton({open,setOpen}) {
  return (
        <button onClick={()=>setOpen(prev=>!prev)} className="w-[50px] h-[50px] rounded-full fixed top-[25px] left-[25px] text-2xl bg-transparent border-none z-20">{open ? <RxCross2  className="ml-3"/>: <FaBars  className="ml-3" />}</button>
  )
}
ToggleButton.propTypes = {
  open: PropTypes.bool,
  setOpen:PropTypes.func
};