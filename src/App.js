import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Cardb from './components/Cardb';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <section className='header'>
        <Header htitle="Galeria de Imagenes con React" />
      </section>
      <section className='body my-5'>
        <Cardb title="Imagen #1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet quam id eum deleniti dicta sunt quas dolore voluptatibus enim quisquam totam facere perspiciatis hic libero, suscipit, harum ullam laborum." img="https://cdn.pixabay.com/photo/2023/01/19/19/31/winter-7730078__340.jpg" />
        <Cardb title="Imagen #2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet quam id eum deleniti dicta sunt quas dolore voluptatibus enim quisquam totam facere perspiciatis hic libero, suscipit, harum ullam laborum." img="https://cdn.pixabay.com/photo/2023/01/04/19/31/sea-7697492__340.jpg" />
        <Cardb title="Imagen #3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet quam id eum deleniti dicta sunt quas dolore voluptatibus enim quisquam totam facere perspiciatis hic libero, suscipit, harum ullam laborum." img="https://cdn.pixabay.com/photo/2023/01/08/18/18/paintbrush-7705881__340.jpg"/>
        <Cardb title="Imagen #4" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet quam id eum deleniti dicta sunt quas dolore voluptatibus enim quisquam totam facere perspiciatis hic libero, suscipit, harum ullam laborum." img="https://cdn.pixabay.com/photo/2022/11/02/08/41/hawkweed-7564327__340.jpg"/>
        <Cardb title="Imagen #5" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet quam id eum deleniti dicta sunt quas dolore voluptatibus enim quisquam totam facere perspiciatis hic libero, suscipit, harum ullam laborum." img="https://cdn.pixabay.com/photo/2021/12/11/15/01/nature-6862942__340.jpg"/>
        <Cardb title="Imagen #6" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet quam id eum deleniti dicta sunt quas dolore voluptatibus enim quisquam totam facere perspiciatis hic libero, suscipit, harum ullam laborum." img="https://cdn.pixabay.com/photo/2023/01/06/14/52/old-man-7701426__340.jpg"/>
      </section>
      <section className='footer'>
        <Footer />
      </section>
    </div>
  );
}

export default App;
