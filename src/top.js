const hashLinkScroll = function () {
    const {hash} = window.location;
  
    if (hash !== '') {
      const milliseconds = 0;
  
      setTimeout(function () { // eslint-disable-line prefer-arrow-callback
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
  
        if (element) {
          element.scrollIntoView();
        }
      }, milliseconds);
    }
  }

  export default hashLinkScroll;