
import './App.css';





function App({video}) {
  function handleClick() {

    window.open("about:blank", "_self");
    window.close(); 
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Tired of your boring old music and looking for a change?
          <p>
            
          </p>
          <button onClick ={handleClick}>
          Click here if you like country music!!
         </button>
        </p>

        <a
          className="App-link3"
          href="https://open.spotify.com/playlist/7iCbGrggNDGpH5kOn6fxWo?si=1b824a653db94c9e"
          target="_blank"
          rel="noopener noreferrer"
        >
          Songs for the gloomy days
        </a>

        <p>

        </p>

        <a
          className="App-link2"
          href="https://open.spotify.com/playlist/6UeSakyzhiEt4NB3UAd6NQ?si=d99fd2ca46a14085"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here are the top 100 songs for 2023
        </a>

        <p>

        </p>
     
        <a
          className="App-link"
          href="https://open.spotify.com/playlist/3zyr9Mo6iWGGxUlaGBAK9L?si=f0fafdf5614f4ef3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hahah, anyway click here for my awesome spotify playlist
        </a>
      </header>
        
        
     
    

    </div>
  
  
    
  );
}




export default App;
