!function(r){function e(a){if(t[a])return t[a].exports;var n=t[a]={exports:{},id:a,loaded:!1};return r[a].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var t={};return e.m=r,e.c=t,e.p="",e(0)}([function(r,e,t){r.exports=t(1)},function(r,e,t){t(2)},function(r,e){angular.module("myApp",[]).controller("myController",["$scope",function(r){var e=[{name:"marry",salary:12365,sex:"girl",birthday:new Date("2006-10-05")},{name:"amy",salary:19365,sex:"girl",birthday:new Date("1998-05-05")},{name:"jack",salary:9600,sex:"boy",birthday:new Date("1997-02-25")},{name:"jim",salary:10400,sex:"girl",birthday:new Date("1995-12-25")},{name:"lili",salary:8e3,sex:"girl",birthday:new Date("1995-12-25")}];r.userInfo=e,r.sortColumn="name",r.reverseSort=!1,r.setSort=function(e){r.reverseSort=r.sortColumn==e&&!r.reverseSort,r.sortColumn=e},r.getClass=function(e){if(r.sortColumn==e)return r.reverseSort?"allow-down":"allow-up"}}])}]);