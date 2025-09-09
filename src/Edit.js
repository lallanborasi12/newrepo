import logo from './logo.svg';
import './App.css';

function Edit() {
  return (
    <div className="App">
      <header className="container p-3.5 bg-white text-slate-900">
      <section className='max-w-md mt-4 mx-auto'>
            <h2 className='text-white mb-4 bg-slate-500 font-bold text-center p-2 text-xl'>Edit Registration form</h2>
            <form>
              <div className='mb-3 flex flex-col flex-wrap'>
                <label>Name</label>
                <input className="border p-2 rounded-sm" type='text' placeholder='Arun' />
              </div>
              <div className='mb-3 flex flex-col flex-wrap'>
                <label>Email</label>
                <input className="border p-2 rounded-sm" type='email' placeholder='arun@gmail.com' />
              </div>
              <div className='mb-3 flex flex-col flex-wrap'>
                <label>Course</label>
                <select className="border p-2 rounded-sm">
                  <optgroup>
                      <option>Hindi</option>
                      <option>Math</option>
                      <option>English</option>
                  </optgroup>
                </select>
              </div>
              <button className='bg-lime-600 text-white p-2 rounded-sm'>Submit</button>
            </form>
          </section>
          
       </header>
    </div>
  );
}

export default Edit;
