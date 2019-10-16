module.exports = function solveSudoku(matrix) {
  let arr = matrix;
      for (let i = 0; i < 9; i++){
          for (let j = 0; j < 9; j++ ){
                  if (arr[i][j] == 0){
                      arr[i][j] = [1,2,3,4,5,6,7,8,9];
                  }
              }
          }
     
  
      do {
          test = 0;
          for (let i = 0; i < 9; i++){
              for (let j = 0; j < 9; j++){
              if (arr[i][j].length > 1){
                  
                  for (let x = 0; x < 9; x++){
                      for (let z = 0; z < arr[i][j].length; z ++){
                          if (arr[i][j][z] == arr[i][x]){
                              arr[i][j].splice(z,1);
                              if (arr[i][j].length == 1){
                                  arr[i][j] = arr[i][j][0];
                                  test ++;
                                  
                              }
                          }
                      }
                  }
                  
                for (let x = 0; x < 9; x++){
                      for (let z = 0; z < arr[i][j].length; z ++){
                          if (arr[i][j][z] == arr[x][j]){
                              arr[i][j].splice(z,1);
                              if (arr[i][j].length == 1){
                                  arr[i][j] = arr[i][j][0];
                                  test ++;
                                  break;
                                  
                              }
                              
                          }
                      }
                  }
                  
                  
               for (let x = Math.floor(i/3)*3; x < Math.floor(i/3)*3 + 3; x++){
                      
                      for (let y = Math.floor(j/3)*3; y < Math.floor(j/3)*3 + 3; y++){
                          
                          for (let z = 0; z<arr[i][j].length; z++){
                            if (arr[i][j][z] == arr[x][y]){
                                arr[i][j].splice(z,1);
                                if (arr[i][j].length == 1){
                                  arr[i][j] = arr[i][j][0];
                                    test ++;
                                    break;
                                  
                              }
                            }  
                          }
                      }
                  } 
                  
              if (arr[i][j].length==2){
                  for(let x = 0; x < 9;x++){
                      if (arr[i][x].length && j != x){
                          if(arr[i][x].length==2){  
                             if(arr[i][j][0]==arr[i][x][0] && arr[i][j][1]==arr[i][x][1]){
                                  for (let y = 0; y < 9; y++){
                                     if(y != j && y != x && arr[i][y].length){
                                          arr[i][y]= arr[i][y].filter(function(z){
                                          if (z != arr[i][j][0] && z !=arr[i][j][1]){
                                              return true;
                                          } else {
                                              test++;
                                              return false
                                                  };
                                              });
                                          }
                                     
                                          if (arr[i][y].length == 1){
                                              arr[i][y] = arr[i][y][0];
                                              test ++; 
                                              break;
                                          }
                                      }
                                  }
                              }
                         }
                          
                      }
                  }
                  

                  if (arr[i][j].length==2){
                      
                      for(let x = 0; x < 9;x++){
                      
                         if (arr[x][j].length && i != x){
                           if(arr[x][j].length==2){  
                             if(arr[i][j][0]==arr[x][j][0] && arr[i][j][1]==arr[x][j][1]){
                                 
                                 for (let y = 0; y < 9; y++){
                                     
                                     if(y != i && y != x && arr[y][j].length){
                                         
                                         arr[y][j]= arr[y][j].filter(function(z){
                                             if (z != arr[i][j][0] && z !=arr[i][j][1]){
                                                 
                                                 return true;
                                                  } else {
                                                      test++;
                                                      return false
                                                  };
                                              });
                                     }
                                     
                                          if (arr[y][j].length == 1){
                                          arr[y][j] = arr[y][j][0];
                                          test ++;
                                          break;
                                      }
                                 }
                                
                              }
                          }
                         }
                          
                      }
                  }
                  
                  
                  //function zInCol(i,j,arr)
                  if (arr[i][j].length) {
                      for (let z = 0; z < arr[i][j].length; z++){
                          check = 0;
                          for (let i1 = 0; i1 < 9; i1++){
                              if(i != i1 && arr[i1][j].length){
                                  arr[i1][j].forEach(function(item){
                                      if (arr[i][j][z] == item){
                                          check++; 
                                      }
                                  })
                                      
                                  }
                              }
                          
                          
                              if(check==0){
                                  //alert("megaSashko 4");
                                  arr[i][j]=arr[i][j][z];
                                  test++;
                              }
                          }
                      }
                     
   
   //function zInRow(i,j,arr)
                      if (arr[i][j].length) {
                      for (let z = 0; z < arr[i][j].length; z++){
                          check = 0;
                          for (let j1 = 0; j1 < 9; j1++){
                              if(j != j1 && arr[i][j1].length){
                                  arr[i][j1].forEach(function(item){
                                      if (arr[i][j][z] == item){
                                          check++;
                                      }
                                  })    
                                  }
                              }
                          
                              if(check==0){
                                  arr[i][j]=arr[i][j][z];
                                  test++;
                              }
                          }
                      }
                  
   // zInArea
      if (arr[i][j].length) {
          
                      for (let z = 0; z < arr[i][j].length; z++){
                          check = 0;
                          for (let i1 = Math.floor(i/3)*3; i1 < Math.floor(i/3)*3+3; i1++){
                              for(let j1 =Math.floor(j/3)*3; j1 < Math.floor(j/3)*3+3; j1++){
                                  if((j != j1 || i != i1) && arr[i1][j1].length){
                                      arr[i1][j1].forEach(function(item){
                                          if (arr[i][j][z] == item){
                                              check++;
                                          }
                                      })
                                      
                                  }
                              }
                          }
                          
                              if(check==0){
                                  arr[i][j]=arr[i][j][z];
                                  test++;
                              }
                          }
                      }              

                  }
                  

           //tresomeArea
                  if(arr[i][j].length){
                    if(arr[i][j].length==3){
                        for(x1 = Math.floor(i/3)*3; x1 < Math.floor(i/3)*3+3; x1++){
                            for(y1 = Math.floor(j/3)*3; y1 < Math.floor(j/3)*3+3; y1++){
                                if(x1 != i || y1 != j){
                                    if(arr[x1][y1].length){
                                        if(arr[x1][y1].length ==3){
                                            if(arr[i][j][0]==arr[x1][y1][0] && arr[i][j][1]==arr[x1][y1][1] && arr[i][j][2]==arr[x1][y1][2]){
                                              for(x2 = Math.floor(i/3)*3; x2 < Math.floor(i/3)*3+3; x2++){
                                                  for(y2 = Math.floor(j/3)*3; y2 < Math.floor(j/3)*3+3; y2++){
                                                      if(x2 != i || y2 != j){
                                                          if(x1 != x2 || y1 != y2){
                                                              if(arr[x2][y2].length){
                                                                  if(arr[x2][y2].length ==3){
                                                                      if(arr[i][j][0]==arr[x2][y2][0] && arr[i][j][1]==arr[x2][y2][1] && arr[i][j][2]==arr[x2][y2][2]){
                                                                          for(x3 = Math.floor(i/3)*3; x3 < Math.floor(i/3)*3+3; x3++){
                                                                              for(y3 = Math.floor(j/3)*3; y3 < Math.floor(j/3)*3+3; y3++){
                                                                                  if(x3 != i || y3 !=j){
                                                                                      if(x3 != x1 || y3 !=y1){
                                                                                          if(x3 != x2 || y3 !=y2){
                                                                                              if(arr[x3][y3].length){
                                                                                                  arr[x3][y3]=arr[x3][y3].filter(function(number){
                                                                                                  if(arr[i][j][0] !=number && arr[i][j][1] !=number && arr[i][j][2] !=number){
                                                                                                      test++;
                                                                                                     return true;
                                                                                                      
                                                                                                  } else {return false}
                                                                                              })
                                                                                                  if(arr[x3][y3].length==1){
                                                                                                      arr[x3][y3]=arr[x3][y3][0];
                                                                                                  }
                                                                                              }
                                                                                          }
                                                                                      }
                                                                                  }
                                                                                  
                                                                              }
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          }
                                                      } 
                                                  }
                                              }
                                            }
                                        }
                                    }
                                }
                        }
                    }
                }  
  
          }       
      } 
    }
          
      } while (test > 0);

    return arr;
}