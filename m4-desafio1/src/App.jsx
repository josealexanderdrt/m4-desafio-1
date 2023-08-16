
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';
import MyCard from './componentes/MyCard';
import Footer from './componentes/Footer';

function App() {

  return (
    <>
     <Header titulo='Adopta un perrito'/>
     <MyCard nombre='Bella'
     colorTag='primary'
     descripcion='Bella es una perra bonita'
     imagen='https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
     raza='Mestizo'
     />
      <MyCard nombre='Bella'
     colorTag='primary'
     descripcion='Bella es una perra bonita'
     imagen='https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
     raza='Mestizo'
     />
      <MyCard nombre='Bella'
     colorTag='primary'
     descripcion='Bella es una perra bonita'
     imagen='https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
     raza='Mestizo'
     />
      <MyCard nombre='Bella'
     colorTag='primary'
     descripcion='Bella es una perra bonita'
     imagen='https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
     raza='Mestizo'
     />
     <Footer descripcion='Adopta perritos y te cambiara la vida' />
    </>
  )
}

export default App
