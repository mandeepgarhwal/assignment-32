import React from "react";
import  ReactDOM  from "react-dom/client";
// import  render  from "react-dom";
import NewRow from "./mycomponents/NewRow";
export let teachers = ["mandeep", "sandeep", "pankaj", "brijesh", "anuj", "amol", "wahid", "abhishek", "nitin"]

function reverse(){
  
  teachers = teachers.reverse()
  console.log(teachers)
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
}
function promote(k){
  console.log("i am called")
  console.log(teachers[k])
  teachers = [teachers[k], ...teachers.filter(item => item !== teachers[k])]
  console.log(teachers)
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
}
// function promte({}) {

//   teachers = [{teachers}]
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
  
// }

function App() {
  
  return (
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Sr. No. </th>
      <th scope="col">Name</th>
      <th scope="col">Characters</th>
      <th scope="col" colSpan= "2">Actions</th>
    </tr>
  </thead>
  <tbody>

    {
    teachers.map((teacher,i)=> (

      <NewRow  name = {teacher} index = {i + 1}  k = {i} callbackreverse= {reverse} callbackpromote = {promote} />
    ))
    }
  </tbody>
</table>
  );
}

export default App;
