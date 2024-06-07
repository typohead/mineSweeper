/*
    when the user clicks on any of the
    tiles ( buttons), it should change its color 
    to red
*/
console.log("working");

let tiles = document.getElementsByClassName('grid-cell-button');
    tiles=[...tiles];
    //or tiles = Array.from(tiles)
    //forEach doesn't work for node lists 
    //returned by getElementByClassName


//using for loop doesn't require array conve
// for(let i=0;i<tiles.length;i++)
//    {
//     tiles[i].addEventListener('click',(event)=>{

//       let gridCell= tiles[i].children[0];  
//         gridCell.style.background="red";
//     })   
//    }
tiles.forEach(
    (tile)=>{
        tile.addEventListener('click',(event)=>{
            const gridCell=tile.firstElementChild;
            gridCell.style.background='red';
        })
 

}
);