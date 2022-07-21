import './DisplayTable.css';
import './Modal.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';



function DisplayTable  ()  {
  return (
  
   <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Branch</th>
              <th>USN</th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>

          <tr>
          <td>Nidhi</td>
           <td>nidhi@abc.com</td>
            <td>21098733543</td>
             <td>Mechanical</td>
              <td>12345T5</td>
              <td><FaIcons.FaEdit/> <AiIcons.AiFillDelete/> </td>
            </tr>
             <tr>
          <td>user</td>
           <td>user@abc.com</td>
            <td>21098733543</td>
             <td>EEE</td>
              <td>122645T5</td>
              <td><FaIcons.FaEdit/> <AiIcons.AiFillDelete/> </td>
            </tr>
            <tr>
          <td>user</td>
           <td>user@abc.com</td>
            <td>21098733543</td>
             <td>EEE</td>
              <td>122645T5</td>
              <td><FaIcons.FaEdit/> <AiIcons.AiFillDelete/> </td>
            </tr>
            <tr>
          <td>user</td>
           <td>user@abc.com</td>
            <td>21098733543</td>
             <td>EEE</td>
              <td>122645T5</td>
              <td><FaIcons.FaEdit/> <AiIcons.AiFillDelete/> </td>
            </tr>
            <tr>
          <td>user</td>
           <td>user@abc.com</td>
            <td>21098733543</td>
             <td>EEE</td>
              <td>122645T5</td>
              <td><FaIcons.FaEdit/> <AiIcons.AiFillDelete/> </td>
            </tr>
            
         
            </tbody>
          </table>
 

   
  );
}

export default DisplayTable;


