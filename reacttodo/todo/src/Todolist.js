import  React,{useState}  from 'react';

function Todolist() {
    const[activity,setActivity]=useState("");
    const[listdata,setlistdata]=useState([]);
    function addActivity(){
      // setlistdata([...listdata,activity])
      // console.log(listdata)

      setlistdata((listdata)=>{
        const updatedlist=[...listdata,activity]
        console.log(updatedlist)
        setActivity("");
        return updatedlist
      })
    }
function removeactivity(i){
const updatedlistdata=listdata.filter((ele,id)=>{
  return i!=id;
})
setlistdata(updatedlistdata)
}

function removeall(){
  setlistdata([])
}

  return (
    <>
    <div className='container'>
    <div className='header'>Todolist</div>
    <input type='text' placeholder='add here' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
      <button onClick={addActivity}>add</button>
      <p className='List-heading' ></p>
      {listdata!=[] && listdata.map((data,i)=>{
        return(
          <p key={i}>
          <div className='listdata'>{data}</div>
          <div className='btn-postion'><button onClick={()=>removeactivity(i)}>remove</button></div>
          </p>
        )
      })}
      {listdata.length>=1 && <button onClick={removeall}>remove all</button>}
    </div>
    </>
  )
}

export default Todolist;