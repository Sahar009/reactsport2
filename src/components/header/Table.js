import  {React, useEffect, useState} from 'react'
import '../../components/header/Table.css'
// import axios from 'axios'


// useEffect(() => {
//     axios()
//     .then(res=>setDataTable(res.data))
//     .catch(err=> console.log(err))
// }, []);

function Table  ({ data,colNames, width='auto', height='auto'}){
  return (
      <div>
          {data.length > 0 &&(
  <table cellSpacing='0' style={{width: width, height: height,padding:"5px 10px"}}>
      <thead>
          <tr>
              
             { colNames.map((headerItem, index)=> (
                 <th key={index}>
                     {headerItem.toUpperCase()}
                 </th>
             ))}
          </tr>
      </thead>
      <tbody>
          {Object.values(data).map((obj, index)=> (
              <tr key={index}>
                  {Object.values(obj).map((value, index2)=>(
                      <td key={index2}>{value}</td>
                  ))}
              </tr>
          ))}
      </tbody>
  </table>
  )}
  </div>
  )
}

export default Table

// import { Link, useEffect, useState } from 'react';
// import './App.css';

// import axios from 'axios';
// import {MDBTable, MDBTableHead,MDBTableBody,MDBRow,MDBCol, MDBContainer,MDBBtn, MDBBtnGroup} from "mdb-react-ui-kit"

// function App() {
//   const [data, setData] = useState([]);
//   const [value, setValue] = useState("");
//   const [sortValue, setSortValue] = useState("");
  
//   const sortOptions =["name", "domains","web_pages","country" ];
  
  
  
//   useEffect(() => {
//     loadUsersData();
//   }, []);

//   const loadUsersData = async () =>{
// return await axios.get(`http://localhost:3000/items`).then((response) => setData(response.data)).catch((err)=> console.log(err));
//   };
//   console.log('data', data);
//   const handleReset =() => {
//     loadUsersData();
//   }
//   const handleSearch = async(e) => {
//     e.preventDefault();
//     return await axios.get(`http://localhost:3000/items?q=${value}`)
//     .then((response) => {
//       setData(response.data);
//       setValue("");
//     })
//       .catch((err) => console.log(err));
//   };
//   const handleSort = async(e) => {
//     let value = e.target.value;
//     setSortValue(value);
//     return await axios.get(`http://localhost:3000/items?_sort${value}&_order=asc`)
//     .then((response) => {
//       setData(response.data);
     
//     })
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div className="App">
//       <MDBContainer>
//         <form style={{
//           margin: "auto",
//           padding:"15px",
//           maxWidth:"400px",
//           alignContent:"center",
//           borderRadius:'2px'
//         }}
//         className="d-flex input-group w-auto"
//         onSubmit={handleSearch}>
//           <input 
//           type="texy"
//           className="form-control"
//           placeholder="search Name..."
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           />
          
//             <MDBBtn type='submit' className='formbutton'>Search</MDBBtn>
//             <MDBBtn className='formbutton' color='info' onClick={() => handleReset()}>Reset</MDBBtn>
          
//         </form>
//         <div>
//           <h2 className='text-center'> Data From Oputz</h2>
//        <MDBRow>
//          <MDBCol size="12">
//            <MDBTable >
//              <MDBTableHead className='tablehead'>
//              <tr>
//              <th scope='col'>S/n </th>
//                <th scope='col'>Domains </th>
//                <th scope='col'> Web Pages</th>
//                <th scope='col'> Name </th>
//                <th scope='col'>  Country</th>
//                <th scope='col'> State Province</th>
//                {/* <th scope='col'> Alpha code</th> */}
//              </tr>
//              </MDBTableHead>
//              {data.length === 0? (
//                <MDBTableBody className='align-center mb-0'>
//                  <tr>
//                    <td colSpan={8} className='text-center mb-0'> No data Found</td>
//                  </tr>
//                </MDBTableBody>
//              ):(
//                data.map((item, index)=> (
//                  <MDBTableBody key={index} className="tablebody">
//                    <tr>
//                      <th scope='row'>{index+1}</th>
//                      <td>{item.domains}</td>
//                      <td>{item.web_pages}</td>
//                      <td >{item.name}</td>
//                      <td>{item.country}</td>
//                      {/* <td>{item.state-province}</td> */}
//                      <td>{item.alpha_two_code}</td>
//                    </tr>

//                  </MDBTableBody>
//                ))
//              )}
//            </MDBTable>
//          </MDBCol>
//        </MDBRow>
       
//         </div>
//         <MDBRow>
//           <MDBCol size='8'>
//             <h2>Sort by:</h2>
//             <select style={{width:"30%", borderRadius:"2px", height:"35px"}}
//             onChange={handleSort}
//             value={sortValue}>
//               <option>
//                 Please Select value
//               </option>
//               {sortOptions.map((item, index) =>(
//                 <option value={item} key={index}>{item}</option>
//               ))}
//             </select>
//           </MDBCol>
//           <MDBCol size='4'><h2>Filter</h2></MDBCol>
//         </MDBRow>
//       </MDBContainer>
   
//     </div>
//   );
// }

// export default App;
