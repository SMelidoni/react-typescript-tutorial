import './App.css';
import { Greet } from './components/Typing Props/Greet';
import { Person } from './components/Basic Props/Person';
import { PersonList } from './components/Basic Props/PersonList';
import { Status } from './components/Advanced Props/Status';
import { Heading } from './components/Advanced Props/Heading';
import { Oscar } from './components/Advanced Props/Oscar';
import { Button } from './components/Event Props/Button';
import { Input } from './components/Event Props/Input';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ];

  return (
    <div className='App'>
      {/* <Greet name='Sim' messageCount={10} isLoggedIn={true} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      {/* <Status status='loading' /> */}
      {/* <Heading>Placeholder Text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo!</Heading>
        <Greet name='Sim' isLoggedIn={true} />
      </Oscar> */}
      <Button
        handleClick={(event, id) => {
          console.log('Button Clicked', event, id);
        }}
      />
      <Input value='' handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
