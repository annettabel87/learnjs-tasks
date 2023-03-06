const debounce = (f, ms) => {
    let isCalling = false;
    
    return  () => {
        if(isCalling) return;

        f.apply(this, arguments);
        isCalling = true;

        setTimeout(() => isCalling = false, ms);
      };
}