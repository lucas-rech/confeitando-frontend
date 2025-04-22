import './App.css'
import Card from './components/Card'

function App() {


  return (
    <div className="flex align-center justify-center flex-wrap gap-10">
      <Card
        title='Morango'
        description='Bolo de morango com cobertura de chocolate'
        price={5.99}
        imageUrl='https://cdn.pixabay.com/photo/2016/03/05/19/02/strawberry-1238250_1280.jpg' 
      />
      <Card
        title='Chocolate'
        description='Bolo de chocolate com cobertura de morango'
        price={5.99}
        imageUrl='https://cdn.pixabay.com/photo/2016/03/05/19/02/strawberry-1238250_1280.jpg' 
      />
      <Card
        title='Abacaxi'
        description='Bolo de abacaxi com cobertura de chocolate'
        price={5.99}
        imageUrl='https://cdn.pixabay.com/photo/2016/03/05/19/02/strawberry-1238250_1280.jpg' 
      />
      
    </div>
  )
}

export default App
