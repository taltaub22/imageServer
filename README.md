# imageServer
Simple static server to serve logos, for example, to the displayServer

* All images go into the ./images folder
* Supports aliasing between requested image and the actual image filename:
  <pre>{
      match: '/legoEducation',
      serve: 'legoeducationlogo.png'
  }</pre>
* Listens on port 1395
