let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  //cycle

  const printReverseList = (list)=> {
    const arr = [];
    let currentList = list;
    while (currentList) {
        arr.push(currentList.value);
        currentList = currentList.next;
    }

    arr.reverse().map(item => console.log(item));  

  }


  //  recursion

  const printReverseListRec = (list)=> {   
    if(list.next) {
      (printReverseListRec(list.next));
    }

    console.log(list.value);        
  }
  printReverseList(list)

// вариант с циклом более эффективный т.к. тратит меньше ресурсов