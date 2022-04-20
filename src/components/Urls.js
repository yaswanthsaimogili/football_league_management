import React from 'react'
import Teams from '../Teams';
import AddTeam from '../AddTeam';
function Urls() {
    const links ={add : "http://localhost:8080/add", delete: "http://localhost:8080/delete/" ,edit : "http://localhost:8080/edit/", get :"http://localhost:8080/getall" }

    return (
      <>
      <Teams teams="links"/>
      <AddTeam  teams={links} />
      
      </>

  )
}

export default Urls