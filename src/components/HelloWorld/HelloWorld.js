import HelloWorld from './HelloWorld.html';

const HelloWorldComponent = new HelloWorld({
  target: document.querySelector('.hello-world'),
  data: {
    name: 'World',
  },
});

export default HelloWorldComponent;
