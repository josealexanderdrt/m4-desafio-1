
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';
import MyCard from './componentes/MyCard';
import Footer from './componentes/Footer';

function App() {

  return (
    <>
<main className='contenido'>
    
     <Header titulo='Adopta un perrito'/>
     <section className='container'>
     
     <div className='tarjeta'>
     
     <MyCard nombre='Bella'
     colorTag='primary'
     descripcion='Bella es una perra muy  bonita'
     imagen='https://i.pinimg.com/236x/13/8b/8e/138b8ecf3fcc4627d127ea2ea584a30f--golden-retriever-puppies-golden-retrievers.jpg'
     raza='Mestizo'
     />

    </div>

    <div className='tarjeta'>
      <MyCard nombre='Juan'
     colorTag='success'
     descripcion='Juan es un perro Inteligente'
     imagen='https://i.pinimg.com/1200x/93/a6/01/93a6012a59e7fb35088be0ca2a658245.jpg'
     raza='Mestizo'
     />

</div>

<div className='tarjeta'>
      <MyCard nombre='Pedro'
     colorTag='danger'
     descripcion='Pedro es un perro muy cariñoso'
     imagen='https://video-images.vice.com/articles/594be92d75c3a267688512ca/lede/1498147145504-1497978900399-CuteDog.jpeg?crop=0.5604166666666667xw:1xh;center,center'
     raza='Mestizo'
     />

</div>

<div className='tarjeta'>
      <MyCard nombre='Bamby'
     colorTag='warning'
     descripcion='Es la mejor conpañia para ti'
     imagen='https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
     raza='Mestizo'
     />

</div>
     </section>
     <Footer descripcion='Adopta perritos y te cambiara la vida' />
     </main>
    </>
  )
}

export default App
