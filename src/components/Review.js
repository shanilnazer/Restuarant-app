
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Review({reviewData}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button className='mt-3 btn btn-success'
    onClick={() => setOpen(!open)}
    aria-controls="example-collapse-text"
    aria-expanded={open}>
   Reviews
  </Button>
  <div style={{ minHeight: '150px' }}>
    <Collapse in={open} dimension="width">
      <div className='mt-3' id="example-collapse-text">
        {reviewData.map(data=>(
          <Card className='mt-1'  body style={{ width: '400px' }}>
           <h4> {data.name}</h4>
           <h5>Date: {data.date}</h5>
           <h6>Rating: {data.rating}</h6>
           <p>{data.comments}</p>

        </Card>
        ))}
      
        

      </div>
    </Collapse>
  </div>
  </>
  )
}

export default Review