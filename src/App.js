import {React, useState, useEffect, useMemo, memo, useCallback, useRef, useReducer, useContext} from "react"
import './App.css';
import Theme from "./component/Theme";
import Counter from "./component/Counter";
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchEventsRequest, // Import the action creator
} from './events/action';
import {
  selectEvents,
  selectEventsLoading,
  selectEventsError,
} from './events/selector';
import Component from "./test/test1";
import Accordion from "./test/test3";
// import UserTable from "./test/test2";
// import Checkboxes from "./test/test4"
import DebounceSearch from "./test/debounce-search.js"
import FilterTable from "./test/filter-table.js";
import FormSection from "./test/js-form.js"
import UserTable from "./user-table/index.js";
import Accordian from "./accordian/index.js";

function App() {

  return (
    <div className="App">
      {/* <UserTable/> */}
      <Accordian/>
    </div>
  );
}

// function App() {
//   // const dispatch = useDispatch();
//   // const events = useSelector(selectEvents);
//   // const loading = useSelector(selectEventsLoading);
//   // const error = useSelector(selectEventsError);


//   // useEffect(()=> {
//   //   dispatch(fetchEventsRequest());
//   // }, [dispatch]);

//   // if (loading) {
//   //   return <div>Loading events...</div>;
//   // }

//   // if (error) {
//   //   return <div>Error: {error}</div>;
//   // }

//   // const [title, setTitle] = useState();

//   //  useDocumentTitle(title);

//   return (
//     <div className="App">
//       {/* <Theme/>
//       <Counter/>
//       <ul>
//         {events.map((event) => (
//           <li key={event.id}>
//             <strong>{event.name}</strong> - {event.date}
//           </li>
//         ))}
//       </ul>
//       <Component/>
//       <Accordion/>
//       <UserTable/> */}
//       {/* <Checkboxes/> */}
//       {/* <DebounceSearch/>
//       <FilterTable/> */}
//       {/* <FormSection/> */}
//       {/* <h1>count</h1>
//       <button onClick={() => setTitle("Skashi")}>click</button> */}
//     </div>
//   );
// }

export default App;
