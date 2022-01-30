import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import './App.css';
import List from './Components/List'
import Data from './Components/Data'



function App ()
{
  const [people, setPeople] = useState(Data)
  return (
    <main>
      <section className='container'>
        <Card className='card-item'>
          <h3><span>{people.length}</span> Birthday Reminder</h3>
          <List people={people} />
          <Button
            className='card-button'
            onClick={() => setPeople([])
          }>Clear all</Button>
        </Card>
      </section>
    </main>
  );
}   

export default App;
