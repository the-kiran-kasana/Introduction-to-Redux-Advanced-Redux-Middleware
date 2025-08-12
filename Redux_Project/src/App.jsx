import { useState ,createContext} from 'react'
import { Provider } from 'react-redux'
import './App.css'
import Counter from './features/counter/Counter'

export default function App() {
      return (
       <>
           <Counter />
        </>
      );

}











//
//
// import { useState ,createContext} from 'react'
// import './App.css'
// import CodeA from "./components/CodeA";
// import CodeC from "./components/CodeC";
//
//
//
//  const UserContext = createContext();
//
// function App() {
//       const [count, setCount] = useState({name:" hello CodeRichard"});
//
//       return (
//
//         <>
//             <UserContext.Provider value={count}>
//                <CodeA />
//                <CodeC />
//             </UserContext.Provider>
//         </>
//       );
//
// }
//
// export default App
// export {UserContext}
