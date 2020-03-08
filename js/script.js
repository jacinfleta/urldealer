window.onload = function() {
    function redirect(visitNumber){

        caseNumber = visitNumber % 3;
        console.log(visitNumber);
        
        switch (caseNumber) {
            case 0:
                window.location = "http://google.com";
                break;
            case 1:
                window.location = "http://facebook.com";
                break;
            case 2:
                window.location = "http://twitter.com";
                break;
        }
};
  };