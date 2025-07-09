//     'div',{id:'parent'},[
  //         React.createElement(
    //     'div',{id:'child1'},
    //     [
      //     React.createElement(
        //     'h1',{},"Namaste everyone!!"),React.createElement(
          //     'h2',{},"Namaste everyone!!")
          //     ],
          //     'div',{id:'parent'},
          //      React.createElement(
            //     'div',{id:'child2'},[React.createElement(
              //     'h1',{},"Namaste everyone!!"),React.createElement(
                //     'h2',{},"Namaste everyone!!")])
                //     ]
                
                // );
const parent = React.createElement('div', 
{ id: 'parent' }, 
[
 React.createElement(
'div', 
{ id: 'child1' },[
 React.createElement('h1', {}, 'Namaste everyone!!1'),
 React.createElement('h2', {}, 'Namaste everyone!!2')
] ),React.createElement(
      'div', 
      { id: 'child2' }, 
      [
React.createElement('h3', {}, 'Namaste everyone!!3'),
React.createElement('h4', {}, 'Namaste everyone!!4')
      ]
    )
  ]
);

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('container'))

root.render(parent)
// const heading = React.createElement(
//     'h1',
//     {id:"heading",xyz:"abc"},"Namaste everyone!!"
// );
// console.log(heading)
// const container = ReactDOM.createRoot(document.getElementById("container"))
// container.render(heading);

 