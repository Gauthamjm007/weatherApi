(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[3],{102:function(e,t){},111:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c}));var o=a(72),n=a.n(o),r=function(){return function(e){n.a.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6a37a0becaf6f623b8d73d2b039541f7/12.9716,77.5946?exclude=minutely ,hourly,daily,alerts,flags").then((function(t){e(d(t.data))})).catch((function(e){console.log(e)}))}},d=function(e){return{type:"SET_WEATHER",payload:e}},c=function(e,t){return function(a){n.a.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6a37a0becaf6f623b8d73d2b039541f7/".concat(e,",").concat(t,"?exclude=minutely ,hourly,daily,alerts,flags")).then((function(e){a(d(e.data))})).catch((function(e){console.log(e)}))}}},212:function(e){e.exports=JSON.parse('{"type":"service_account","project_id":"authentication-272017","private_key_id":"c81ba1b2916b2719b8353b83ccb55462f6a122aa","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC+UcXOTvTijA78\\nZntiQoS3NZwW4EgA6fDurQRT2YwLDFKN/DWs/AQBpJwn++JU4B7T0klL/3B7wf2N\\nwk0ZYS09SByuNGoIk6LE5Nt0JVlQQJjuopx7LERY/vPMF1YWCpU35vYAGefRiVuy\\nzeaAQhkeCwM2mbJdFVCMUmAC1U+RN05bV3wvluTlMXdaqt7n9reQCM3JabgN56Ud\\nGWvA+LTm7BjUBz9CUCrIXK6KYaB/SOUJgFBtAjRMVN3Ih52E+Cw9CqEO0OzGfS0E\\n3UcBTJXxZgqJ0lonCzyBncpviOjdai0J/J85+MdmA8wQqUtp8YlBuqKuoIvDjJEe\\nb0dmdiJXAgMBAAECggEAFKoUpAJ0WhbNV8AZhyvkH2+9i3RTDRpZk9NgZBRREtqw\\nf1nSStPa7Cy/Mc41Hx8YlHTsNXQToV8I/00zXt1AyBBzi2ywffmTE6AqaHwtAZGJ\\n/rsplMF+iE/iZmy65vjDhpwtZgm/XxkexkAkq2oXMmkNXRknbIObHn6hOHLdyU1R\\nByZ/RobqTkh8lTd6eG+J4OLWscmJEIottRSLtS/6YG/uE+wQTmJDshQL7rG0YmUn\\njtGqRtAVcsHGIGVt8lDZWRG35NMUlTK+mosZ/nks3QrAzKbzFGVA3WSgeKPHtD5P\\nlM4flAZ24xC5juqIFkyUv/XNE8ZwTqe35JOczyTqjQKBgQDyCR0u1zjWmoUSvvLa\\nmkdbTa27xtXwlJ4EDhBUzIJbNXHYLtoXrg1+UFMxuAyUV8v7rP6uO/W0BsXhso+Q\\nFZpKAd/v9AxAYb6OYazoD/N6AqS4w8jQi/n4lP+iA0+UQWUIxwHH+hzx51cZ42sp\\nYwKHdo4eDkvyAQ9HNvXaLSs24wKBgQDJTM5yy6JNclUhu73IxB43KJbLNeahqorK\\nfOdHncDRkA6D+U0qRfMs9pYYBRbukPl38pc3Pc0n3bxIZyvHoGXEwfRyeYAR/379\\ntkLKDxaW00DTECm+7AH43GGBzsuiCotNiLfZ+/ns1hSdUtEHfSIRPOeQAQWNWcAC\\nuhKAzCzM/QKBgCuVGo0pshFqp5W1jpNwfnLhbOxIJJP6nu2J/sTWQo7b89ECtsDW\\n1ZUuL5zfUFyR5qg+AWosX9T39z/p4FIIocy7w7A4mNArCZ4n1nO/E4+f1Dt0/b8X\\nxX5Oji2FPRosIF5RP2/cCMRCbPu7aLt+GaF85qBg4KoGKNMhAWo1AfgTAoGAfDdq\\nGcpwz+uiftt0JERpBM6GJsWPGOm9FXB342iESIzleCjJpjFd+rv7KL1TRkmtt4e6\\nKjt3socQnXkUue3PftfUuSMilXic64ChvEANR2r60INjz02hdejAPrLWU5rAFUst\\ncFUeBzifpekp1b4w3IRBvEn1HCFq7APYUSQs7R0CgYA2aXm8zRMcIbhaFOmQgmtk\\njDQobO2rO/HbtwUpqzWpHdyvzRo0Ml+ak6m7hmyLPLQMcw9q+izq+vprdKLNI9+M\\n0RuvJ9Me6Cwbwy6LBB9I02BoPV5b/O2COucuRqlRU5ORWolL/Be5zQEyewwa2hfV\\nAl5RoD5tbbj8s+i2wCGmag==\\n-----END PRIVATE KEY-----\\n","client_email":"goutham-jm@authentication-272017.iam.gserviceaccount.com","client_id":"108447764229983643452","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/goutham-jm%40authentication-272017.iam.gserviceaccount.com"}')},213:function(e,t,a){"use strict";a.d(t,"b",(function(){return h})),a.d(t,"a",(function(){return m}));var o=a(7),n=a.n(o),r=a(71),d=a(114).GoogleSpreadsheet;function c(){return(c=Object(r.a)(n.a.mark((function e(){var t,o,r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new d("1VuUA8MKKA8IJwCNi6QdsCRyVWcgn_ZS1uoz_f_sUBFM"),e.next=3,t.useServiceAccountAuth(a(212));case 3:return e.next=5,t.loadInfo();case 5:return o=t.sheetsByIndex[0],e.next=8,o.getRows();case 8:return r=e.sent,c=r.map((function(e){return{id:e.id,name:e.Name,email:e.Email,password:e.password}})),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var s=function(){return c.apply(this,arguments)},i=a(114).GoogleSpreadsheet;function l(){return(l=Object(r.a)(n.a.mark((function e(t,o,r){var d,c,s,l,_;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=new i("1VuUA8MKKA8IJwCNi6QdsCRyVWcgn_ZS1uoz_f_sUBFM"),e.next=3,d.useServiceAccountAuth(a(212));case 3:return e.next=5,d.loadInfo();case 5:return c=d.sheetsByIndex[0],e.next=8,c.getRows();case 8:return s=e.sent,l=s.map((function(e){return{id:e.id,name:e.Name,email:e.Email,password:e.password}})),e.next=12,c.addRow({id:l.length+1,Name:t,Email:o,password:r});case 12:return _=e.sent,console.log(_),e.abrupt("return",l);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e,t,a){return l.apply(this,arguments)},h=function(){return function(e){s().then((function(t){e(D(t))}))}},D=function(e){return{type:"SET_USER",payload:e}},m=function(e,t,a,o){return function(n){_(e,t,a).then((function(r){n({type:"PUSH_USER",payload:{name:e,email:t,password:a}}),o()}))}}},215:function(e){e.exports=JSON.parse('[{"State":"Total","Confirmed":35052,"Recovered":9260,"Deaths":1159,"Active":24629,"Last_Updated_Time":"1/5/2020 15:01","State_code":"TT","Delta_Confirmed":186,"Delta_Recovered":201,"Delta_Deaths":5,"State_Notes":""},{"State":"Maharashtra","Confirmed":10498,"Recovered":1773,"Deaths":459,"Active":8266,"Last_Updated_Time":"30/04/2020 21:32:46","State_code":"MH","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Gujarat","Confirmed":4395,"Recovered":613,"Deaths":214,"Active":3568,"Last_Updated_Time":"30/04/2020 20:32:46","State_code":"GJ","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Delhi","Confirmed":3515,"Recovered":1094,"Deaths":59,"Active":2362,"Last_Updated_Time":"30/04/2020 23:33:46","State_code":"DL","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Madhya Pradesh","Confirmed":2625,"Recovered":482,"Deaths":137,"Active":2006,"Last_Updated_Time":"30/04/2020 20:52:46","State_code":"MP","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Rajasthan","Confirmed":2642,"Recovered":983,"Deaths":61,"Active":1598,"Last_Updated_Time":"1/5/2020 15:01","State_code":"RJ","Delta_Confirmed":58,"Delta_Recovered":90,"Delta_Deaths":3,"State_Notes":""},{"State":"Tamil Nadu","Confirmed":2323,"Recovered":1258,"Deaths":27,"Active":1038,"Last_Updated_Time":"30/04/2020 18:22:46","State_code":"TN","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Uttar Pradesh","Confirmed":2211,"Recovered":551,"Deaths":40,"Active":1620,"Last_Updated_Time":"30/04/2020 21:02:46","State_code":"UP","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Andhra Pradesh","Confirmed":1463,"Recovered":403,"Deaths":33,"Active":1027,"Last_Updated_Time":"1/5/2020 13:11","State_code":"AP","Delta_Confirmed":60,"Delta_Recovered":82,"Delta_Deaths":2,"State_Notes":""},{"State":"Telangana","Confirmed":1038,"Recovered":442,"Deaths":28,"Active":568,"Last_Updated_Time":"30/04/2020 21:32:47","State_code":"TG","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"West Bengal","Confirmed":795,"Recovered":139,"Deaths":33,"Active":623,"Last_Updated_Time":"1/5/2020 9:01","State_code":"WB","Delta_Confirmed":37,"Delta_Recovered":15,"Delta_Deaths":0,"State_Notes":"WB totals and district numbers are currently updated according to https://www.mohfw.gov.in"},{"State":"Jammu and Kashmir","Confirmed":614,"Recovered":216,"Deaths":8,"Active":390,"Last_Updated_Time":"30/04/2020 19:12:47","State_code":"JK","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Karnataka","Confirmed":576,"Recovered":235,"Deaths":22,"Active":318,"Last_Updated_Time":"1/5/2020 13:52","State_code":"KA","Delta_Confirmed":11,"Delta_Recovered":6,"Delta_Deaths":0,"State_Notes":""},{"State":"Kerala","Confirmed":498,"Recovered":383,"Deaths":4,"Active":111,"Last_Updated_Time":"30/04/2020 17:11:46","State_code":"KL","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":"Mahe native who expired in Kannur included in Kerala\'s tally"},{"State":"Bihar","Confirmed":432,"Recovered":84,"Deaths":2,"Active":346,"Last_Updated_Time":"1/5/2020 14:02","State_code":"BR","Delta_Confirmed":7,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Punjab","Confirmed":480,"Recovered":104,"Deaths":20,"Active":356,"Last_Updated_Time":"30/04/2020 19:44:01","State_code":"PB","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Haryana","Confirmed":347,"Recovered":235,"Deaths":4,"Active":108,"Last_Updated_Time":"1/5/2020 13:21","State_code":"HR","Delta_Confirmed":8,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Odisha","Confirmed":148,"Recovered":41,"Deaths":1,"Active":106,"Last_Updated_Time":"1/5/2020 15:01","State_code":"OR","Delta_Confirmed":5,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Jharkhand","Confirmed":110,"Recovered":19,"Deaths":3,"Active":88,"Last_Updated_Time":"30/04/2020 23:33:48","State_code":"JH","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Chandigarh","Confirmed":74,"Recovered":18,"Deaths":0,"Active":56,"Last_Updated_Time":"30/04/2020 17:32:46","State_code":"CH","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Uttarakhand","Confirmed":57,"Recovered":36,"Deaths":0,"Active":21,"Last_Updated_Time":"1/5/2020 0:17","State_code":"UT","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Himachal Pradesh","Confirmed":40,"Recovered":28,"Deaths":2,"Active":7,"Last_Updated_Time":"30/04/2020 22:01:47","State_code":"HP","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":"Death of Tibetan refugee included"},{"State":"Assam","Confirmed":43,"Recovered":29,"Deaths":1,"Active":13,"Last_Updated_Time":"1/5/2020 1:22","State_code":"AS","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":"Includes one case from Nagaland"},{"State":"Chhattisgarh","Confirmed":40,"Recovered":36,"Deaths":0,"Active":4,"Last_Updated_Time":"28/04/2020 23:41:48","State_code":"CT","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Andaman and Nicobar Islands","Confirmed":33,"Recovered":16,"Deaths":0,"Active":17,"Last_Updated_Time":"30/04/2020 11:32:48","State_code":"AN","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Ladakh","Confirmed":22,"Recovered":17,"Deaths":0,"Active":5,"Last_Updated_Time":"29/04/2020 21:12:47","State_code":"LA","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Meghalaya","Confirmed":12,"Recovered":8,"Deaths":1,"Active":3,"Last_Updated_Time":"1/5/2020 12:22","State_code":"ML","Delta_Confirmed":0,"Delta_Recovered":8,"Delta_Deaths":0,"State_Notes":""},{"State":"Puducherry","Confirmed":8,"Recovered":5,"Deaths":0,"Active":3,"Last_Updated_Time":"27/04/2020 23:21:56","State_code":"PY","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Goa","Confirmed":7,"Recovered":7,"Deaths":0,"Active":0,"Last_Updated_Time":"19/04/2020 17:04:07","State_code":"GA","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Manipur","Confirmed":2,"Recovered":2,"Deaths":0,"Active":0,"Last_Updated_Time":"20/04/2020 10:04:08","State_code":"MN","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Tripura","Confirmed":2,"Recovered":2,"Deaths":0,"Active":0,"Last_Updated_Time":"23/04/2020 20:47:41","State_code":"TR","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Mizoram","Confirmed":1,"Recovered":0,"Deaths":0,"Active":1,"Last_Updated_Time":"26/03/2020 07:19:29","State_code":"MZ","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Arunachal Pradesh","Confirmed":1,"Recovered":1,"Deaths":0,"Active":0,"Last_Updated_Time":"16/04/2020 19:33:11","State_code":"AR","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Nagaland","Confirmed":0,"Recovered":0,"Deaths":0,"Active":0,"Last_Updated_Time":"20/04/2020 08:45:07","State_code":"NL","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Dadra and Nagar Haveli","Confirmed":0,"Recovered":0,"Deaths":0,"Active":0,"Last_Updated_Time":"17/04/2020 15:03:07","State_code":"DN","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Daman and Diu","Confirmed":0,"Recovered":0,"Deaths":0,"Active":0,"Last_Updated_Time":"26/03/2020 07:19:29","State_code":"DD","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Lakshadweep","Confirmed":0,"Recovered":0,"Deaths":0,"Active":0,"Last_Updated_Time":"26/03/2020 07:19:29","State_code":"LD","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""},{"State":"Sikkim","Confirmed":0,"Recovered":0,"Deaths":0,"Active":0,"Last_Updated_Time":"26/03/2020 07:19:29","State_code":"SK","Delta_Confirmed":0,"Delta_Recovered":0,"Delta_Deaths":0,"State_Notes":""}]')},216:function(e){e.exports=JSON.parse('[{"state":"Maharashtra","lat":"18.975","lon":"72.825833"},{"state":"Delhi","lat":"28.666667","lon":"77.216667"},{"state":"Karnataka","lat":"12.983333","lon":"77.583333"},{"state":"Telangana","lat":"17.375278","lon":"78.474444"},{"state":"Gujarat","lat":"23.033333","lon":"72.616667"},{"state":"Tamil Nadu","lat":"13.083333","lon":"80.283333"},{"state":"West Bengal","lat":"22.569722","lon":"88.369722"},{"state":"Rajasthan","lat":"24.583333","lon":"86.85"},{"state":"Uttar Pradesh","lat":"26.8500","lon":"80.916667"},{"state":"Madhya Pradesh","lat":"26.223611","lon":"78.179167"},{"state":"Andhra Pradesh","lat":"16.516667","lon":"80.616667"},{"state":"Bihar","lat":"26.169722","lon":"83.872778"},{"state":"Punjab","lat":"31.633056","lon":"74.865556"},{"state":"Haryana","lat":"28.433333","lon":"77.316667"},{"state":"Jammu and Kashmir","lat":"30.216667","lon":"78.783333"},{"state":"Jharkhand","lat":"23.783333","lon":"85.966667"},{"state":"Chhattisgarh","lat":"21.216667","lon":"81.433333"},{"state":"Assam","lat":"26.183333","lon":"91.733333"},{"state":"Chandigarh","lat":"30.7343","lon":"76.7933"},{"state":"Orissa","lat":"20.233333","lon":"85.833333"},{"state":"Kerala","lat":"8.506944","lon":"76.956944"},{"state":"Uttarakhand","lat":"30.3255646","lon":"78.0436813"},{"state":"Tripura","lat":"23.836389","lon":"91.275"},{"state":"Puducherry","lat":"11.948880","lon":"79.712141"},{"state":"Mizoram","lat":"23.724444","lon":"92.7175"},{"state":"Manipur","lat":"24.816667","lon":"93.95"}]')},219:function(e,t,a){e.exports=a(419)},224:function(e,t,a){},225:function(e,t,a){},275:function(e,t){},277:function(e,t){},287:function(e,t){},289:function(e,t){},315:function(e,t){},317:function(e,t){},318:function(e,t){},324:function(e,t){},326:function(e,t){},344:function(e,t){},347:function(e,t){},363:function(e,t){},366:function(e,t){},419:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(58),d=a.n(r),c=(a(224),a(225),a(110)),s=a(11),i=Object(o.lazy)((function(){return Promise.all([a.e(2),a.e(6)]).then(a.bind(null,526))})),l=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(7)]).then(a.bind(null,529))})),_=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(9)]).then(a.bind(null,527))})),h=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(8)]).then(a.bind(null,528))}));var D=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.Suspense,{fallback:n.a.createElement("div",{className:"spinner-border text-primary",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading..."))},n.a.createElement(c.a,null,n.a.createElement(s.a,{component:_,path:"/signup",exact:!0}),n.a.createElement(s.a,{component:h,path:"/signin",exact:!0}),n.a.createElement(s.a,{component:i,path:"/home",exact:!0}),n.a.createElement(s.a,{component:l,path:"/weather/state/:name",exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=a(43),u=a(214),f=a(108),v=[];function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(f.a)(t.payload);case"PUSH_USER":return[].concat(Object(f.a)(e),[t.payload]);default:return v}}var S=a(215);function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return t.type,e}var A=[];function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEATHER":case"GET_WEATHER":return t.payload;default:return e}}var N=a(216);function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return t.type,e}var g=function(){return Object(m.d)(Object(m.c)({users:p,coronaCases:R,weather:C,states:U}),Object(m.a)(u.a))},T=a(109),w=a(213),y=a(111),b=(a(416),a(417),a(418),g());b.subscribe((function(){console.log(b.getState())})),0===b.getState().users.length&&(b.dispatch(Object(w.b)()),b.dispatch(Object(y.a)())),console.log(b.getState());var L=n.a.createElement(T.a,{store:b},n.a.createElement(D,null));d.a.render(L,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[219,4,5]]]);
//# sourceMappingURL=main.92f78fde.chunk.js.map