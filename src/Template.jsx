import React, {useState, useEffect}from 'react';
import logo from './logo.svg';

const Template = () => {

  const [data, setData] = useState([])

  useEffect(()=> {
    getList();
  }, []);

  const getList= async () => {
    const data = await fetch("https://tenshi-proxy.herokuapp.com/https://reto-retail.herokuapp.com/listclientes"); 
    const users = await data.json()
    console.log(users)
    setData(users)
  }
  return(
    <div className="App">
      <h1>List of Clients</h1>
        <header>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Birthday</th>
                <th>Age</th>
              </tr>
            </thead>
        <tbody>
              {
                data.map( item => {
                  return <tr key={ item.id }>
                    <td>{ item.idClient }</td>
                    <td>{ item.userName }</td>
                    <td>{ item.lastName }</td>
                    <td>{(item.dateOfBirth.split('T')[0])}</td>
                    <td>{ item.age }</td>
                  </tr>
                } )
              }
        </tbody>
        <tfoot>
          <tr>
            <td>Average</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </header>
  </div>
  )
}

export default Template;
