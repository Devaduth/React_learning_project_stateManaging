import { useSelector, useDispatch } from 'react-redux'
import randomColor from 'randomcolor';
import { change_color } from '../redux/color/colorSlice'
function Aside({ }) {
  const color = useSelector(state => state.color.value)
  const dispatch = useDispatch()
  const changeColor = () => {
    dispatch(change_color({
      color:randomColor()
    }))
  }
  return (
    <div className="aside">
      <h2 style={{ color }} > Aside</h2>
      <button className="button" onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Aside;
