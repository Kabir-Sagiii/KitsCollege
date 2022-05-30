import React,{useState} from "react";
import './User.css'
import axios from 'axios'

function User() {

     const [state,setState] = useState([])
       const getData = async ()=>{
      var db=   await axios.get('http://localhost:9009/db')
      console.log(db)
      setState(db.data)
    }
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-12">
          <h2>User Details</h2>
          <p className=" lead usercompara">
            react makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
            React makes it painless to create interactive UIs.
          </p>
          <button onClick={getData} className="btn btn-primary">Get data</button>
        </div>
      </div>

        <div class="row">
             <table>
               <thead>
                 <tr>
                   <th>IMAGE</th>
                   <th>NAME</th>
                   <th>GENDER</th>
                   <th>EMAIL</th>
                 </tr>
               </thead>
               <tbody>
                  {
                    state.length > 0 ? 
                    state.map((ele,i)=>{
                      return  <tr>
                      <td>
                        <img src="" height='50' width='50' />
                      </td>
                      <td>
                        { ele.name}
                      </td>
                      <td>{ele.city}</td>
                      <td></td>
                    </tr>
                    })
                    :<h2 className="text-danger mt-5">No Data</h2>
                  }
               </tbody>
             </table>
        </div>
    </div>
  );
}

export default User;
