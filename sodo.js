

function see(){
  
    result=document.getElementById('result')
    /*row 1*/
    inputs = document.getElementsByClassName('row1');
    row = [];
    enter = document.getElementsByClassName('col1');
    col = [];
       
blockenter = document.getElementsByClassName('block1');
block = [];
for(let i = 0; i < 9; i++){
    let nombre = blockenter[i].value;
    block.push(nombre);
}

   
    for(let i = 0; i < 9; i++){
        let nombre =  enter[i].value;
        col.push(nombre);
    }

    for(let i = 0; i < 9; i++){
        let nombre = inputs[i].value;
        row.push(nombre);
    }

    for(let i = 0; i < row.length; i++){
        for(let j = i + 1; j < row.length; j++){
            if(row[i] == row[j]){
             
                result.innerHTML=("il ya un erreue dand la ligne 1");

              inputs[i].style.backgroundColor = "red"
              inputs[j].style.backgroundColor = "red"
             

            }
            
            
        }
        
            for(let j = i + 1; j < col.length; j++){
                if(col[i] == col[j]){
                    result.innerHTML=("il ya un erreue dand la colone 1");
                    enter[i].style.backgroundColor = "red";
                   enter[j].style.backgroundColor = "red";
                    break;
                }
                
            }
            for(let j = i + 1; j < block.length; j++){
                if(block[i] == block[j]){
                    result.innerHTML=("il ya un erreue dand la block 1");
                    blockenter[i].style.backgroundColor = "red"
                  blockenter[j].style.backgroundColor = "red"
                    break;
                }
                
            }
          
        
        
    }
    

   



                /*row 2*/

    inputs = document.getElementsByClassName('row2');
    row = [];
    enter = document.getElementsByClassName('col2');
    col = [];
         
blockenter = document.getElementsByClassName('block2');
block = [];
for(let i = 0; i < 9; i++){
    let nombre = blockenter[i].value;
    block.push(nombre);
}

    for(let i = 0; i < 9; i++){
        let nombre =  enter[i].value;
        col.push(nombre);
    }
    for(let i = 0; i < 9; i++){
        let nombre = inputs[i].value;
        row.push(nombre);
    }

    for(let i = 0; i < row.length; i++){
        for(let j = i + 1; j < row.length; j++){
            if(row[i] == row[j]){
              console.log("you lose ", row[i]," = ",row[j]  , "dans la ligne 2")
              inputs[i].style.backgroundColor = "red"
              inputs[j].style.backgroundColor = "red"
                break;
            }
            
        }
        
        for(let j = i + 1; j < col.length; j++){
            if(col[i] == col[j]){
              console.log("you lose ", col[i]," = ",col[j]  , "dans la  colone  2")
               enter[i].style.backgroundColor = "red";
               enter[j].style.backgroundColor = "red";
                break;
            }
            
        }
        for(let j = i + 1; j < block.length; j++){
            if(block[i] == block[j]){
              console.log("you lose ", block[i]," = ",block[j]  , "dans la block 2")
              blockenter[i].style.backgroundColor = "red"
              blockenter[j].style.backgroundColor = "red"
                break;
            }
            
        }
      
        
    }
    


      /*row 3*/

      inputs = document.getElementsByClassName('row3');
      row = [];
      enter = document.getElementsByClassName('col3');
      col = [];
           
blockenter = document.getElementsByClassName('block3');
block = [];
for(let i = 0; i < 9; i++){
    let nombre = blockenter[i].value;
    block.push(nombre);
}

      for(let i = 0; i < 9; i++){
          let nombre =  enter[i].value;
          col.push(nombre);
      }
      for(let i = 0; i < 9; i++){
          let nombre = inputs[i].value;
          row.push(nombre);
      }
  
      for(let i = 0; i < row.length; i++){
          for(let j = i + 1; j < row.length; j++){
              if(row[i] == row[j]){
                console.log("you lose ", row[i]," = ",row[j]  , "dans la ligne 3")
                inputs[i].style.backgroundColor = "red"
                inputs[j].style.backgroundColor = "red"
                  break;
              }
              
          }
          
          
          for(let j = i + 1; j < col.length; j++){
            if(col[i] == col[j]){
              console.log("you lose ", col[i]," = ",col[j]  , "dans la  colone  3")
               enter[i].style.backgroundColor = "red";
               enter[j].style.backgroundColor = "red";
                break;
            }
            
        }
        for(let j = i + 1; j < block.length; j++){
            if(block[i] == block[j]){
              console.log("you lose ", block[i]," = ",block[j]  , "dans la block 3")
              blockenter[i].style.backgroundColor = "red"
              blockenter[j].style.backgroundColor = "red"
                break;
            }
            
        }
      
      }
      


        /*row 4*/

    inputs = document.getElementsByClassName('row4');
    row = [];
    enter = document.getElementsByClassName('col4');
    col = [];
         
blockenter = document.getElementsByClassName('block4');
block = [];
for(let i = 0; i < 9; i++){
    let nombre = blockenter[i].value;
    block.push(nombre);
}

    for(let i = 0; i < 9; i++){
        let nombre =  enter[i].value;
        col.push(nombre);
    }
    for(let i = 0; i < 9; i++){
        let nombre = inputs[i].value;
        row.push(nombre);
    }

    for(let i = 0; i < row.length; i++){
        for(let j = i + 1; j < row.length; j++){
            if(row[i] == row[j]){
              console.log("you lose ", row[i]," = ",row[j]  , "dans la ligne 4")
              inputs[i].style.backgroundColor = "red"
              inputs[j].style.backgroundColor = "red"
                break;
            }
            
        }
        
        for(let j = i + 1; j < col.length; j++){
            if(col[i] == col[j]){
              console.log("you lose ", col[i]," = ",col[j]  , "dans la  colone  4")
               enter[i].style.backgroundColor = "red";
               enter[j].style.backgroundColor = "red";
                break;
            }
            
        }
        for(let j = i + 1; j < block.length; j++){
            if(block[i] == block[j]){
              console.log("you lose ", block[i]," = ",block[j]  , "dans la block 4")
              blockenter[i].style.backgroundColor = "red"
              blockenter[j].style.backgroundColor = "red"
                break;
            }
            
        }
      
    }
    
    

      /*row 5*/

      inputs = document.getElementsByClassName('row5');
      row = [];
      enter = document.getElementsByClassName('col5');
      col = [];
           
blockenter = document.getElementsByClassName('block5');
block = [];
for(let i = 0; i < 9; i++){
    let nombre = blockenter[i].value;
    block.push(nombre);
}

      for(let i = 0; i < 9; i++){
          let nombre =  enter[i].value;
          col.push(nombre);
      }
      for(let i = 0; i < 9; i++){
          let nombre = inputs[i].value;
          row.push(nombre);
      }
  
      for(let i = 0; i < row.length; i++){
          for(let j = i + 1; j < row.length; j++){
              if(row[i] == row[j]){
                console.log("you lose ", row[i]," = ",row[j]  , "dans la ligne 5")
                
                inputs[i].style.backgroundColor = "red"
                inputs[j].style.backgroundColor = "red"
                  break;
              }
              
          }

          
          for(let j = i + 1; j < col.length; j++){
            if(col[i] == col[j]){
              console.log("you lose ", col[i]," = ",col[j]  , "dans la  colone  5")
               enter[i].style.backgroundColor = "red";
               enter[j].style.backgroundColor = "red";
                break;
            }
            
        }
        for(let j = i + 1; j < block.length; j++){
            if(block[i] == block[j]){
              console.log("you lose ", block[i]," = ",block[j]  , "dans la block 5")
              blockenter[i].style.backgroundColor = "red"
              blockenter[j].style.backgroundColor = "red"
                break;
            }
            
        }
      
      }
      

        /*row 6*/

    inputs = document.getElementsByClassName('row6');
    row = [];
    enter = document.getElementsByClassName('col6');
    col = [];
         
blockenter = document.getElementsByClassName('block6');
block = [];
for(let i = 0; i < 9; i++){
    let nombre = blockenter[i].value;
    block.push(nombre);
}

    for(let i = 0; i < 9; i++){
        let nombre =  enter[i].value;
        col.push(nombre);
    }
    for(let i = 0; i < 9; i++){
        let nombre = inputs[i].value;
        row.push(nombre);
    }

    for(let i = 0; i < row.length; i++){
        for(let j = i + 1; j < row.length; j++){
            if(row[i] == row[j]){
              console.log("you lose ", row[i]," = ",row[j]  , "dans la ligne 6")
              inputs[i].style.backgroundColor = "red"
              inputs[j].style.backgroundColor = "red"
                break;
            }
            
        }
        
        for(let j = i + 1; j < col.length; j++){
            if(col[i] == col[j]){
              console.log("you lose ", col[i]," = ",col[j]  , "dans la  colone  6")
               enter[i].style.backgroundColor = "red";
               enter[j].style.backgroundColor = "red";
                break;
            }
            
        }
        for(let j = i + 1; j < block.length; j++){
            if(block[i] == block[j]){
              console.log("you lose ", block[i]," = ",block[j]  , "dans la block 6")
              blockenter[i].style.backgroundColor = "red"
              blockenter[j].style.backgroundColor = "red"
                break;
            }
            
        }
      
    }
    

      /*row 7*/

      inputs = document.getElementsByClassName('row7');
      row = [];
      enter = document.getElementsByClassName('col7');
      col = [];
           
blockenter = document.getElementsByClassName('block7');
block = [];
for(let i = 0; i < 9; i++){
    let nombre = blockenter[i].value;
    block.push(nombre);
}

      for(let i = 0; i < 9; i++){
          let nombre =  enter[i].value;
          col.push(nombre);
      }
      for(let i = 0; i < 9; i++){
          let nombre = inputs[i].value;
          row.push(nombre);
      }
  
      for(let i = 0; i < row.length; i++){
          for(let j = i + 1; j < row.length; j++){
              if(row[i] == row[j]){
                console.log("you lose ", row[i]," = ",row[j]  , "dans la ligne 7")
                inputs[i].style.backgroundColor = "red"
                inputs[j].style.backgroundColor = "red"
                  break;
              }
              
          }
          
          for(let j = i + 1; j < col.length; j++){
            if(col[i] == col[j]){
              console.log("you lose ", col[i]," = ",col[j]  , "dans la  colone  7")
               enter[i].style.backgroundColor = "red";
               enter[j].style.backgroundColor = "red";
                break;
            }
            
        }
        for(let j = i + 1; j < block.length; j++){
            if(block[i] == block[j]){
              console.log("you lose ", block[i]," = ",block[j]  , "dans la block 7")
              blockenter[i].style.backgroundColor = "red"
              blockenter[j].style.backgroundColor = "red"
                break;
            }
            
        }
      
      }
      

        /*row 8*/

    inputs = document.getElementsByClassName('row8');
    row = [];
    enter = document.getElementsByClassName('col8');
    col = [];
         
blockenter = document.getElementsByClassName('block8');
block = [];
for(let i = 0; i < 9; i++){
    let nombre = blockenter[i].value;
    block.push(nombre);
}

    for(let i = 0; i < 9; i++){
        let nombre =  enter[i].value;
        col.push(nombre);
    }
    for(let i = 0; i < 9; i++){
        let nombre = inputs[i].value;
        row.push(nombre);
    }

    for(let i = 0; i < row.length; i++){
        for(let j = i + 1; j < row.length; j++){
            if(row[i] == row[j]){
              console.log("you lose ", row[i]," = ",row[j]  , "dans la ligne 8")
              inputs[i].style.backgroundColor = "red"
              inputs[j].style.backgroundColor = "red"
                break;
            }
            
        }
        
        for(let j = i + 1; j < col.length; j++){
            if(col[i] == col[j]){
              console.log("you lose ", col[i]," = ",col[j]  , "dans la  colone  8")
               enter[i].style.backgroundColor = "red";
               enter[j].style.backgroundColor = "red";
                break;
            }
            
        }   
        for(let j = i + 1; j < block.length; j++){
            if(block[i] == block[j]){
              console.log("you lose ", block[i]," = ",block[j]  , "dans la block 8")
              blockenter[i].style.backgroundColor = "red"
              blockenter[j].style.backgroundColor = "red"
                break;
            }
            
        }
      
    }
    


      /*row 9*/

      inputs = document.getElementsByClassName('row9');
      row = [];
      enter = document.getElementsByClassName('col9');
      col = [];
      blockenter = document.getElementsByClassName('block9');
      block = [];
      for(let i = 0; i < 9; i++){
          let nombre = blockenter[i].value;
          block.push(nombre);
      }

      for(let i = 0; i < 9; i++){
          let nombre =  enter[i].value;
          col.push(nombre);
      }
      for(let i = 0; i < 9; i++){
          let nombre = inputs[i].value;
          row.push(nombre);
      }
  
      for(let i = 0; i < row.length; i++){
          for(let j = i + 1; j < row.length; j++){
              if(row[i] == row[j]){
                console.log("you lose ", row[i]," = ",row[j]  , "dans la ligne 9")
                inputs[i].style.backgroundColor = "red"
                inputs[j].style.backgroundColor = "red"
                  break;
              }
              
          }
          
          for(let j = i + 1; j < col.length; j++){
            if(col[i] == col[j]){
              console.log("you lose ", col[i]," = ",col[j]  , "dans la  colone  9")
               enter[i].style.backgroundColor = "red";
               enter[j].style.backgroundColor = "red";
                break;
            }
            
        }
        for(let j = i + 1; j < block.length; j++){
            if(block[i] == block[j]){
              console.log("you lose ", block[i]," = ",block[j]  , "dans la block 9")
              blockenter[i].style.backgroundColor = "red"
              blockenter[j].style.backgroundColor = "red"
                break;
            }
            
        }
      
      }
      








     
      }











