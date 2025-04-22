import './App.css'
import Card from './components/Card'
import mock from './services/mock.json'

function App() {
  const flavors = mock.flavors


  return (
    <div className="flex align-center justify-center flex-wrap gap-10">
      {flavors.map((flavor, id) => (
        <Card
          key={id}
          title={flavor.flavor}
          description={flavor.description}
          imageUrl={flavor.image}
          price={flavor.price}
        />
      ))}
    </div>
  )
}

export default App
