(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(38)},30:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(21),o=n.n(l),c=(n(30),n(13)),u=n.n(c),s=n(15),i=n(22),m=n(5),h=n(6),f=n(9),p=n(8),d=n(10),E="http://matheradical.dk/ca3";var b=new(function(){function e(){var t=this;Object(m.a)(this,e),this.login=function(){var e=Object(s.a)(u.a.mark(function e(n,a){var r,l,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.makeOptions("POST",!0,{username:n,password:a}),e.next=3,fetch(E+"/api/login",r);case 3:return l=e.sent,e.next=6,l.json();case 6:if(o=e.sent,l.ok){e.next=9;break}throw{status:l.status,fullError:o};case 9:return t.setToken(l.token),e.abrupt("return",o);case 11:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),this.setToken=function(e){localStorage.setItem("jwtToken",e)},this.getToken=function(){return localStorage.getItem("jwtToken")},this.loggedIn=function(){return null!=t.getToken()},this.logout=function(){localStorage.removeItem("jwtToken")}}return Object(h.a)(e,[{key:"makeOptions",value:function(e,t,n){var a={method:e,headers:{"Content-type":"application/json",Accept:"application/json"}};return t&&this.loggedIn()&&(a.headers["x-access-token"]=this.getToken()),n&&(a.body=JSON.stringify(n)),a}},{key:"CheckIfUser",value:function(e){return fetch(E+"/api/Example/user").then(function(e){return e.json()}).then(function(t){e.unshift(t)})}},{key:"CheckIfAdmin",value:function(e){return fetch(E+"/api/Example/admin").then(function(e){return e.json()}).then(function(t){e.unshift(t)})}},{key:"TryGet",value:function(e,t){return fetch(E+"/api/Example/"+e).then(function(e){return e.json()}).then(function(e){t.unshift({key:t.length+1,code:200,message:e.msg})})}}]),e}()),g=n(4),v=n(11),k=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Home"))},j=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(p.a)(t).call(this,e))).state={msgs:[{key:1,code:200,message:"Succesfuld connect"}]},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"somefunction",value:function(e){var t=this;e.preventDefault();this.state.msgs;var n=this.state.msgs,a=this.newItem.value;b.TryGet(a,n).then(function(e){return t.setState({msgs:n})})}},{key:"CheckIfUser",value:function(e){var t=this;e.preventDefault();this.state.msgs;var n=this.state.msgs;b.CheckIfUser(n).then(function(e){return t.setState({msgs:n})})}},{key:"CheckIfAdmin",value:function(e){var t=this;e.preventDefault();this.state.msgs;var n=this.state.msgs;b.CheckIfAdmin(n).then(function(e){return t.setState({msgs:n})})}},{key:"render",value:function(){var e=this,t=this.state.msgs;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){e.somefunction(t)}},r.a.createElement("label",null," Test en Get metode"),r.a.createElement("input",{ref:function(t){return e.newItem=t},placeholder:"5",id:"msg"}),r.a.createElement("button",{type:"submit"}," add ")),r.a.createElement("button",{onClick:function(t){e.CheckIfAdmin(t)}}," er du admin? ")," ",r.a.createElement("button",{onClick:function(t){e.CheckIfUser(t)}}," er du User? "),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"time"))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",{key:e.key},r.a.createElement("td",null,e.code),r.a.createElement("td",null,e.message))}))))}}]),t}(r.a.Component),O=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"aboot"))},w=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Contact"))},y=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"page does not exist"))},I=(r.a.Component,function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(p.a)(t).call(this,e))).login=function(e){e.preventDefault(),n.props.login(n.state.username,n.state.password)},n.onChange=function(e){n.setState(Object(i.a)({},e.target.id,e.target.value))},n.state={username:"",password:""},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement("ul",{class:"header"},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/",exact:!0},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/ListItem"},"API test")),r.a.createElement("li",null,r.a.createElement("a",{href:"/ca3/documentation/"}," Documentation ")),r.a.createElement("li",null,r.a.createElement("form",{onSubmit:this.login,onChange:this.onChange},r.a.createElement("input",{placeholder:"User Name",id:"username"}),r.a.createElement("input",{placeholder:"Password",id:"password"}),r.a.createElement("button",null,"Login")))),r.a.createElement(v.d,null,r.a.createElement(v.b,{path:"/",exact:!0,component:k}),r.a.createElement(v.b,{path:"/about",component:O}),r.a.createElement(v.b,{path:"/contact",component:w}),r.a.createElement(v.b,{path:"/ListItem",component:j}),r.a.createElement(v.b,{component:y}))))}}]),t}(a.Component)),C=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(p.a)(t).call(this,e))).state={username:""},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement("ul",{class:"header"},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/",exact:!0},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement("p",{class:"header"},"logged in as: ",this.props.username,", role: ",this.props.role))),r.a.createElement(v.d,null,r.a.createElement(v.b,{path:"/",exact:!0,component:k}),r.a.createElement(v.b,{path:"/about",component:O}),r.a.createElement(v.b,{path:"/contact",component:w}),r.a.createElement(v.b,{component:y}))))}}]),t}(a.Component),x=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(p.a)(t).call(this,e))).logout=function(){b.logout(),n.setState({loggedIn:!1})},n.login=function(){var e=Object(s.a)(u.a.mark(function e(t,a){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.login(t,a);case 2:r=e.sent,n.setState({loggedIn:!0,username:t,role:r.role});case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n.state={loggedIn:!1,username:"",role:""},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.loggedIn?r.a.createElement("div",null,r.a.createElement(C,{username:this.state.username,role:this.state.role}),r.a.createElement("button",{onClick:this.logout},"Logout")):r.a.createElement(I,{login:this.login}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.9c51e8de.chunk.js.map