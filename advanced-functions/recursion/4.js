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

  const printList = (list)=> {
    let currentList = list;
    while (currentList) {
        console.log(currentList.value);
        currentList = currentList.next;
    }
  }


  //  recursion

  const printListRec = (list)=> {   
        console.log(list.value);

        if(list.next) {
            (printListRec(list.next));
        }
  }
  

// вариант с циклом более эффективный т.к. тратит меньше ресурсов