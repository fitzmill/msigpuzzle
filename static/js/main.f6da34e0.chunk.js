(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),s=a.n(r),i=(a(15),a(4)),u=a(5),l=a(7),c=a(6),m=a(1),h=a(8),p=(a(16),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={input:"",messages:[],solved:!1,inputError:!1},a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.onChange=a.onChange.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.input,n=t.messages,o=t.solved,r=t.inputError;"sean"===(a=a.toLocaleLowerCase())?(n.unshift("Close"),r=!1):"alli"===a?(o=!0,r=!1):r=!0,this.setState({messages:n,solved:o,inputError:r})}},{key:"onChange",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.input,a=e.messages,n=e.solved,r=e.inputError;return o.a.createElement("div",{className:"App uk-light"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",{className:"uk-margin-top"},"MSIG Puzzle")),o.a.createElement("div",{className:"uk-card card uk-align-center"},o.a.createElement("div",{className:"uk-margin-left uk-margin-right"},o.a.createElement("p",null,"Hello! This is the page to submit answers to the puzzle we submitted as a part of our application to the Microsoft Intern Game."),o.a.createElement("p",null,"If you don't know what this page is, you probably shouldn't be here."),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",className:"uk-input "+(r?"input-error ":"")+(n?"input-success":""),placeholder:"Submit an answer here",value:t,onChange:this.onChange}),o.a.createElement("button",{type:"submit",className:"uk-button uk-button-default uk-margin"},"Submit")),n&&o.a.createElement("div",{className:"uk-card uk-text-success"},o.a.createElement("p",null,"Good job! Now that you've found the spell to open doors, we're hoping that you'll open our door to the intern game!")),a.map(function(e,t){return o.a.createElement("div",{className:"uk-card uk-text-warning",key:t},o.a.createElement("p",null,e))}))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(17);s.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.f6da34e0.chunk.js.map