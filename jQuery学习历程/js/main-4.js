var a = $("#a");

var text = a.text();
console.log(text);

var html = a.html();
console.log(html);

a.append("<div>append</div>");
a.prepend("<div>prepend</div>");

// a.remove();