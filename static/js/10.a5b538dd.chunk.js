(this["webpackJsonpepic-image"]=this["webpackJsonpepic-image"]||[]).push([[10],{245:function(e,a,n){"use strict";n.r(a);var t,r,s,o=n(32),l=n(0),c=n.n(l),i=n(79),m=n(117),u=n(250),p=n(251),d=n(33),b=n(80),g=n(12),h=d.a.div(t||(t=Object(o.a)(["\n    width:400px;\n    margin:50px auto;\n    box-shadow:2px 2px 4px 0 rgba(0,0,0,0.3);\n    border-radius:4px;\n    padding:20px;\n"]))),f=d.a.h1(r||(r=Object(o.a)(["\n    text-align:center;\n    margin-bottom: 30px;\n"]))),x=Object(d.a)(m.a)(s||(s=Object(o.a)(["\n    margin-left:10px;\n    background:#006d75;\n    border:#006d75;\n    &:hover,&:focus{\n        background:#006d75;\n        border:#006d75;\n    }\n"]))),j=Object(i.a)((function(){var e=Object(b.a)().AuthStore,a=Object(g.f)(),n={wrapperCol:{offset:6,span:16}};return c.a.createElement(h,null,c.a.createElement(f,null,"\u767b\u5f55"),c.a.createElement(u.a,Object.assign({},{labelCol:{span:6},wrapperCol:{span:16}},{name:"basic",initialValues:{remember:!0},onFinish:function(n){console.log("Success:",n),e.setUsername(n.username),e.setPassword(n.password),e.Login().then((function(){console.log("\u767b\u5f55\u6210\u529f\uff0c\u8df3\u8f6c\u5230\u9996\u9875"),a.push("/")})).catch((function(){return console.log("\u767b\u5f55\u5931\u8d25")}))},onFinishFailed:function(e){console.log("Failed:",e)}}),c.a.createElement(u.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"},{validator:function(e,a){return console.log(a),void 0===a?Promise.resolve():/\W/.test(a)?Promise.reject("\u53ea\u80fd\u662f\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf"):a.length<4||a.length>10?Promise.reject("\u957f\u5ea6\u4e3a4~10\u4e2a\u5b57\u7b26"):Promise.resolve()}}]},c.a.createElement(p.a,null)),c.a.createElement(u.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801!"},{min:4,message:"\u6700\u5c114\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u592710\u4e2a\u5b57\u7b26"}]},c.a.createElement(p.a.Password,null)),c.a.createElement(u.a.Item,n,c.a.createElement(x,{type:"primary",htmlType:"submit"},"\u767b\u5f55"))))}));a.default=j}}]);
//# sourceMappingURL=10.a5b538dd.chunk.js.map