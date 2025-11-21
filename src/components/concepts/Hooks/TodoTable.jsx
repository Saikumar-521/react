// import React, { useEffect, useState } from "react";

// export default function TodoTable(){
//     const [value,usestateMethod]=useState([])
    
//     const fetchAPI='https://dummyjson.com/todos';
//     async function getApi(){
//         let res= await fetch(fetchAPI)
//         let data= await res.json();
//         console.log(data);
//         usestateMethod(data.todos)
//     }
//     useEffect(()=>{
//         getApi()
//     },[])
//     return(
//         <div>
//           <h1>{value.stringfy()}</h1>
//         </div>
//     )
// }

import React, { useEffect, useState } from "react";

export default function TodoTable() {
  const [value, setValue] = useState([]);

  const fetchAPI = 'https://dummyjson.com/todos';

  async function getApi() {
    let res = await fetch(fetchAPI);
    let data = await res.json();
    console.log(data);
    setValue(data.todos);
  }

  useEffect(() => {
     getApi()
  }, []);

  return (
    <div>
      <h1>Todos List</h1>

      {value.length > 0 ? (
        value.map((todo) => (
          <p key={todo.id}>{todo.todo}</p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
