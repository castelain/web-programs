function demo() {
  /***
    Add your demo script here...
    In this demo, click my button after 1000 milliseconds
    You have approx three seconds to show off your stuff.
  ***/

  demointerval = setInterval(function() {
    var chkbox = document.querySelector('input[type="checkbox"]:not([checked])');
    if (chkbox) {
      chkbox.click();
      chkbox.setAttribute('checked', 'checked');
    } else {
      clearInterval(demointerval);
    }
  }, 600);
}
// Run demo if in searchresult preview frame
// http://codepen.io/jesperkc/post/trigger-animation-in-preview-frame
if (document.location.pathname.indexOf('fullcpgrid') > -1) {
  demo();
}