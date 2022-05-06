/*
Challenge 1
Crea un 'custom component' llamado Page
Deberá regresar una lista desordenada (<ul>) con 4 razones por las que crees que es importante aprender React.
Añade en algún lugar el logo de React (incluído en la carpeta)

'Renderea' el componente en la página.

*/

const Page = () => {
  return (
    <div>
      <img src="react.svg" width="200" height="250" />
      <ul>
        <li>Es relativamente sencillo de aprender.</li>
        <li>Permite hacer cambios dinámicos de una forma fácil.</li>
        <li>Se puede instalar sin dificultad.</li>
        <li>Tiene una comunidad muy grande para seguir aprendiendo.</li>
      </ul>
    </div>
  );
};

ReactDOM.render(
  <div>
    <Page />
  </div>,
  document.getElementById("root")
);
