import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <Row>
      <Col lg={4}>
        <Image src='/images/cjmia.JPG' style={{width: 'auto', height:'auto'}} rounded>

        </Image>
      </Col>
      <Col xs={8}>
        <h3 style={{color: 'lightgrey', fontFamily: 'monospace'}}>As a new parent, my daughter has recently entered daycare and I have learned a lot about
          the process of taking my child to daycare every day. One of the requirements is filling out a form about my daughter's 
          morning that the daycare fills out about her day at daycare.
          <br /><br />
          One day I realized I just looked at these forms and recycled it at the end of the day which felt like a waste of paper.
          When I looked up the number of kids at my child's daycare, I realied that 70 half sheets of paper were being used in this 
          manner each day which equates to about a ream of paper every 7 days. This made me think about a way to eliminate that waste
          and make the information about my daughter's day more readily available, which led to InfantGram.
          <br /><br />
          InfantGram allows the parents to have constant access to their kids forms each day as well as ensures that the 
          incorrect form isn't sent home with their child at the end of the day. Additionally, it could save about 34 reams
          of paper in a year, or 17,220 pieces of paper.
        </h3>
      </Col>
    </Row>
  );
}

export default AboutPage;
