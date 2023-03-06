const delay = (f, ms) => {
    return () => {
        setTimeout(() => f.apply(this, arguments), ms);
      };
}