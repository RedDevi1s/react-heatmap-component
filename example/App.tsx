import './App.css'
import Heatmap from '../lib/src/main'
// import Heatmap  from 'react-heatmap-component'
function App() {
  const height = 630
  const width = 1200

  const data = [...Array(100)].map((_) => {
    return {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      value: Math.floor(Math.random() * 100),
    }
  })

  const dataPoints = {
    max: 100,
    min: 0,
    data
  }
  const imgUrl = 'https://reactjs.org/logo-og.png'
  return (
    <div className="App">
      <Heatmap
        imgUrl={imgUrl}
        dataPoints={dataPoints}
        height={height}
        width={width}
      />
    </div>
  )
}

export default App
