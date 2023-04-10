import React, { useState } from 'react'
import './todo.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


const Todo = () => {
  const [data, setdata] = useState("")
  const [arraydata, setarraydata] = useState([])
  const [text, settext] = useState("")
  const [toggle,settoggle] = useState(true);
  const [isedititem,setedititem] = useState(null);

  const addfunc = () => {
    if(text && data && !toggle){
      setarraydata(
        arraydata.map((elem)=>{
          if(elem.id === isedititem ){
            return{...elem,name: { data: data, text: text } }
          }
          return elem;
        })
      )
      settext('')
      setdata('')
      settoggle(true)
    }
    else{

      const resultdata = { data, text };
      const updata = {id: new Date().getTime().toString(),name:resultdata}
      setarraydata([...arraydata, updata])
      setdata('')
      settext('')
      console.log(arraydata);
    }
  }

  const deletefunc = (index) => {
    const newdata = arraydata.filter((ele) => {
      return index !== ele.id;
    })
    setarraydata(newdata)
  }

  const updatefunc = (id) => {
     let edititem = arraydata.find((elem)=>{
      return elem.id === id;
     })
     settoggle(false)
     setdata(edititem.name.data)
     settext(edititem.name.text)
     setedititem(id)
     console.log(edititem);
  }


  return (
    <>
      <div className='maincontainer'>
        <h1 style={{textAlign:'center'}}>Task Management Application</h1>
        <input onChange={(e) => setdata(e.target.value)} value={data} placeholder='Add Title'></input>
        <textarea onChange={(e) => settext(e.target.value)} value={text} placeholder='Add Description'></textarea>
        {toggle ? <button onClick={addfunc}>Add Task</button> : <button onClick={addfunc}>Update Task</button> }
        
      </div>
      <div className='middlepart'>
        <h3>Total Task:{arraydata.length}</h3>
      </div>
      <div className='results'>
        {arraydata.map((ele) => {
          return <div className='answala' key={ele.id}>
            <div className='firstpart' style={{display:"flex",flexDirection:"column"}}><h3>{ele.name.data}</h3>
            <p>{ele.name.text}</p>
            </div>
            <div className='secondpart'>
            
            <i class="fa fa-trash" onClick={()=>deletefunc(ele.id)}></i>
            <i class="fa-regular fa-pen-to-square" onClick={() => updatefunc(ele.id)}></i></div>
            <input type='checkbox'></input>
          </div>
        })}

      </div>
    </>
  )
}

export default Todo