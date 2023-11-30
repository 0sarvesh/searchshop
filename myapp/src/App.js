import React, { useState,useEffect } from 'react';
import Search from '../src/components/search-box/Search'; // Import your Search component
import Cardlist from './components/card-list/cardlist.component'; // Import your Cardlist component
import './App.css'

const App = () => {
  const [searchfield, setSearchfield] = useState('');// search(component) - onsearchchange 
  const [loading, setLoading] = useState(true); // Assuming loading is a state variable
  const [array, setArray] = useState([]); // Assuming array is a state variable

  const onSearchChange = (e) => {
    const lowercase = e.target.value.toLowerCase();
    setSearchfield(lowercase);
  };

  const filtered = array.filter((ele) => {
    return ele.title.toLowerCase().includes(searchfield);
  });
//
  useEffect(() => {
    

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
     
        setArray(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); 

 
  return (
    <div className="App">
      <Search change={onSearchChange} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Cardlist products={filtered} />
        // filtered.map((e) => <div key={e.id}>{e.title}</div>)
      )}
    </div>
  );
};

export default App;



// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       array: [],
//       loading: true,
//       lowercase: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.products);
//         this.setState({ array: data.products, loading: false });
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         this.setState({ loading: false });
//       });
//   }
//   onsearchchange = (e) => {
//     console.log(e.target.value);
//     const lowercase = e.target.value.toLowerCase();

//     this.setState(() => {
//       return { lowercase };
//     });
//   };

//   render() {
//     const filtered = this.state.array.filter((ele) => {
//       return ele.title.toLocaleLowerCase().includes(this.state.lowercase);
//     });
//     const { onsearchchange: searche } = this;

//     return (
      
//       <div className="App">
//        <Search change ={searche}/>
//         {this.state.loading ? (
//           <p>Loading...</p>
//         ) :<Cardlist products={filtered} /> 
//         //(filtered.map((e) => <div key={e.id}>{e.title}</div>))
//         }
//       </div>
//     );
//   }
// }


