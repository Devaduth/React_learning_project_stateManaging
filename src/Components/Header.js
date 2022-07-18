import {useSelector} from 'react-redux'
function Header() {
  const count = useSelector(state => state.count.value)
  const color = useSelector(state => state.color.value)
  return (
    <div className="header">
      <h1 style={{color}}>REDUX Project</h1>
      <h3> count :  {count} </h3>
    </div>
  );
}

export default Header;
