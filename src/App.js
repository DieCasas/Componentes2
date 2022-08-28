import './App.css';
import Card from './componentes/Card'

//IMAGENES
import img from './assets/img/hambur.jpg'


function App() {

  return (
    <div className="App">
      <div className='containerCards'>
        <Card 
          name='Hambur Completa'
          description='Hamburguesa Completa con todo lo que esperas'
          img={img}
          />
      </div>
      
    </div>
  );
}

export default App;
