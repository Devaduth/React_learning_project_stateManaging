import {useSelector,useDispatch} from 'react-redux'
import { change_count } from '../redux/count/counterSlice'
function Counter() {
  const count = useSelector(state => state.count.value)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(change_count({
      count:count+1
    }))
  }
  const decrement = () => {
    dispatch(change_count({
      count:count-1
    }))
  }
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is - {count} </h3>
      <button onClick={increment} className="button" >Increase</button>
      <button  onClick={decrement} className="button" >Decrease</button>
    </div>
  );
}

export default Counter;
