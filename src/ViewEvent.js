import React from 'react'
import {Card,Button, CardGroup,Row,Col} from'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
function ViewEvent() {
  return (
    <>

    <div style={{marginBottom:"100px"}}>
    <center>
   <Row xs={1} md={4} className="g-2">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
<Card style={{ width: '23rem' }}>
  <Card.Img variant="top" src="https://gumlet.assettype.com/freepressjournal/2021-02/d03dfb9a-ed05-4519-9202-c3a9b0f9c476/21Mumbia.JPG?format=webp&w=300&dpr=2.6" />
  <Card.Body>
  <h5 class="card-text"> EventName: Cricket Match  </h5>
  <h5 class="card-title"> Organizer : Maharashtra Cricket Club </h5>
	<h5 class="card-title"> Location: Wankadhe Stadium , Mumbai -420004 </h5>
	<h5 class="card-title"> Event date : 24-04-2022  </h5>
	<h5 class="card-title"> Event Time : 4:00 PM</h5>
 
    <button type="button" class="btn btn-primary" style={{marginRight:"20px"}}><FontAwesomeIcon icon={faEdit} />Edit</button>
	<button type="button" class="btn btn-primary"><FontAwesomeIcon icon={faTrash} />Delete</button>
  </Card.Body>
</Card>
</Col>
  ))}
</Row>
</center>
</div>

</>
  )
}

export default ViewEvent