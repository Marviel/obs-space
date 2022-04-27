import React from 'react';
import logo from './logo.svg';
import './App.css';


type Layer = {
  neurons: Neuron[],
}

type Neuron = {
  currentInput: number;
  currentOutput: number;
}

/**
 * An intentionally slow forward propagation algorithm, to clarify how it works.
 * @param layer 
 */
function forwardPropagateSlow(layer: Layer) {
  // For each neuron in layer
    // Take its input
  // 
}

/**
 * An intentionally slow backward propagation algorithm, to clarify how it works.
 * @param layer 
 */
function backwardPropagateSlow(layer: Layer) {

}


function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
