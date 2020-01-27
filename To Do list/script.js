const todos = {
    main: [],
    starred: [],
    notImportant: []
  };
  
  function putInLocalStorage() {
    localStorage.todos = JSON.stringify(todos);
  }
  
  function main() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var li = document.createElement("li");
    var txt = document.createTextNode(input);
    li.appendChild(txt);
    output.appendChild(li);
    todos.main = output.innerHTML;
    putInLocalStorage();
  }
  
  function starred() {
    var input = document.getElementById("input").value;
    var output2 = document.getElementById("output2");
    var li = document.createElement("li");
    var txt = document.createTextNode(input);
    li.appendChild(txt);
    output2.appendChild(li);
    todos.starred = output2.innerHTML;
    putInLocalStorage();
  }
  
  function notimp() {
    var input = document.getElementById("input").value;
    var output3 = document.getElementById("output3");
    var li = document.createElement("li");
    var txt = document.createTextNode(input);
    li.appendChild(txt);
    output3.appendChild(li);
    todos.notImportant = output.innerHTML;
    putInLocalStorage();
  }