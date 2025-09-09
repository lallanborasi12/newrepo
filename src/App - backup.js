import './App.css';
import { EmployeeData } from './EmployeeData';
import { useEffect, useState } from 'react';

function App() {
const[data, setData]=useState([]);
const[name, setName]=useState('');
const[email, setEmail]=useState('');
const[course, setCourse]=useState('');
const[id, setId]=useState(0);
const[isUpdate, setisUpdate]=useState(false);
useEffect(()=>{
  setData(EmployeeData)

},[]);
const handleEdit=(id)=>{
const dt = data.filter(item => item.id === id);
if(dt!==undefined){
  setisUpdate(true);
  setId(id);
  setName(dt[0].name);
  setEmail(dt[0].email);
  setCourse(dt[0].course);
}
}
const handleDelete=(id)=>{
  if(id > 0){
    if(window.confirm("Are you sure want to delete?")){
      const dt = data.filter(item => item.id!==id);
    setData(dt);
    }
    
  }
}
const handleSave=(e)=>{
  let error = '';
  if(name === '')
  error += 'Name is required, ';
  if(email === '')
  error += 'Email is required, ';
  if(course === '')
  error += 'Course is required.';
  
  if(error === ''){
  e.preventDefault();
  const dt = [...data];
  const newObject ={
  id:EmployeeData.length+1,
  name:name,
  email:email,
  course:course
  }
  dt.push(newObject);
  setData(dt);
}
else{
  alert(error)
}
}
const handleUpdate=()=>{
  const index = data.map((item)=>{
    return item.id
  }).indexOf(id);
  const dt = [...data];
  dt[index].name=name;
  dt[index].email=email;
  dt[index].course=course;
  setData(dt);
  handleClear();
  }
  
const handleClear=()=>{
  setId(0);
  setName('');
  setEmail('');
  setCourse(''); 
  setisUpdate(false)
    }
  return (
    <div className="App">
     <section className='max-w-xl mx-auto mb-4'>
     <div>
              <div className='mb-3 flex flex-col flex-wrap'>
                <label>Name</label>
                <input className="border p-2 rounded-sm" type='text' placeholder='Please Enter Name' onChange={(e)=>setName(e.target.value)} value={name} />
              </div>
              <div className='mb-3 flex flex-col flex-wrap'>
                <label>Email</label>
                <input className="border p-2 rounded-sm" type='email' placeholder='Please Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email} />
              </div>
              <div className='mb-3 flex flex-col flex-wrap'>
                <label>Course</label>
                <select className="border p-2 rounded-sm" onChange={(e)=>setCourse(e.target.value)} value={course}>
                  <optgroup>
                    <option>Select Subject</option>
                      <option>Hindi</option>
                      <option>Math</option>
                      <option>English</option>
                  </optgroup>
                </select>
              </div>
              {!isUpdate ?<button className='bg-lime-600 text-white p-1 rounded-sm mr-2' onClick={(e)=>handleSave(e)}>Save</button>  :<button className='bg-lime-600 text-white p-1 rounded-sm mr-2' onClick={()=>handleUpdate()}>Update</button>}
              <button className='bg-red-600 text-white p-1 rounded-sm' onClick={()=>handleClear()}>Clear</button>
            </div>
            <br/>
  <h2 className='text-white mb-4 bg-slate-500 font-bold text-center p-2 text-xl'>Registration Detail</h2>
  <table className="border-collapse border border-slate-400 w-full">
  <thead>
    <tr>
      <th className="border border-slate-300 p-2">#</th>
      <th className="border border-slate-300 p-2">Id</th>
      <th className="border border-slate-300 p-2">Name</th>
      <th className="border border-slate-300 p-2">Email</th>
      <th className="border border-slate-300 p-2">Course</th>
      <th className="border border-slate-300 p-2">Action</th>
    </tr>
  </thead>
  <tbody>
   { data.map((item, index) => { return(
        <tr key={index}>
        <td className="border border-slate-300 p-2">{index+ 1}</td>
      <td className="border border-slate-300 p-2">{item.id}</td>
      <td className="border border-slate-300 p-2">{item.name}</td>
      <td className="border border-slate-300 p-2">{item.email}</td>
      <td className="border border-slate-300 p-2">{item.course}</td>
      <td className="border border-slate-300 p-2">
      <button className='bg-lime-600 text-white p-1 rounded-sm mr-2' onClick={()=>handleEdit(item.id)}>Edit</button>
      <button className='bg-red-600 text-white p-1 rounded-sm' onClick={()=>handleDelete(item.id)}>Delete</button>
      </td>
      </tr>
      )})
    }
    
   
  </tbody>
</table>
            
              
          </section>

    </div>
  );
}

export default App;
