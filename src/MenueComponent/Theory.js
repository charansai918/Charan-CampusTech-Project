import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Theory() {
  return (
    <div>
        <div>
        <p className='aim-component'>House wiring is an essential aspect of electrical systems in buildings, ensuring the safe and efficient distribution of electricity to various components such as lights, switches, and plugs. The wiring process involves connecting the electrical supply to different circuits and devices while adhering to safety standards and regulations.</p>
        </div>
        <div>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header id='header-theory'><strong id='strong1-theory'>Key Components</strong></Accordion.Header>
        <Accordion.Body>
           <div id='theory-wireprocess'> 
        <p id='para'><strong id='strong1-theory'>Meter:</strong> Measures the total electrical consumption.</p>
<p id='para'><strong id='strong2-theory'>Double Pole Iron Clad (DPIC) Switch:</strong> Controls the entire power supply to the house.</p>
<p id='para'><strong id='strong3-theory'>Neutral Link of Fuse:</strong > Provides protection and safety by disconnecting the circuit in case of overload or short circuit.</p>
<p id='para'><strong id='strong4-theory'>Switchboards:</strong> Distribute power to various devices in different rooms.</p>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <div className='header-theory'>
        <Accordion.Header><strong id='strong1-theory'>Wiring Process</strong></Accordion.Header>
        </div>
        <Accordion.Body >
            <div id='theory-wireprocess'>

            <p id='para' ><strong id='strong1-theory'>Supply Connection:</strong> The live (phase) and neutral wires from the main supply are connected to the meter.</p>
          <p id='para'><strong id='strong2-theory'>DPIC Switch Connection: </strong>Terminals from the meter are connected to the DPIC switch for overall control.</p>
          <p id='para'><strong id='strong3-theory'>Fuse Connection:</strong> One end of the supply is connected to the neutral link of the fuse.</p>
          <p id='para'><strong id='strong4-theory'>Switchboard Connection:</strong> Wires from the fuse are connected to switchboards in various rooms, distributing power as needed.</p>
          <p id='para'><strong id='strong5-theory'>Component Connection:</strong> Switches, plugs, holders, and other devices are connected to the switchboards to complete the circuits.</p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    </div>
  )
}

export default Theory