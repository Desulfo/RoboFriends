(this.webpackJsonprobof=this.webpackJsonprobof||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=n(3),l=n(4),i=n(6),h=n(5),m=n(7),u=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("section",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("h2",null,n),r.a.createElement("img",{alt:"zdj\u0119cie robota",src:"https://robohash.org/".concat(t,"?200x200.png")}),r.a.createElement("p",null,a))},b=function(e){var t=e.robots;return r.a.createElement("main",{className:"tc"},t.map((function(e,n){return r.a.createElement(u,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})})))},f=function(e){var t=e.searchChange;return r.a.createElement("input",{className:"pa3 mb3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})},d=function(e){return r.a.createElement("section",{style:{overflowY:"scroll",height:"500px"}},e.children)},g=(n(13),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"tc"},r.a.createElement("h1",{className:"f1 ma4 "},"RoboFriends"),r.a.createElement(f,{searchChange:this.onSearchChange})),r.a.createElement(d,null,r.a.createElement(b,{robots:a}))):r.a.createElement("h1",{className:"tc ma4"},"LOADING")}}]),t}(a.Component));n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.24c6e386.chunk.js.map