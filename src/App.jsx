import './App.css';


function App(props) {
  const imageDataArr =  props.data;
  return(
    <>
    <div>
      {imageDataArr.map((item)=>{
        return <img key={item.id} src={item.img} alt={item.id}/>
      })}
      </div>
    </>
  )
}

export default App;
