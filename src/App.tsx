import { useState } from "react";
import "./App.css";
import { stations } from "./data";
import wave from "./assets/wave1.gif";

function App() {
  const [selectedStationId, setSelectedStationId] = useState(3);

  const selectedStation = stations.find(
    (station) => station.id === selectedStationId,
  );

  return (
    <div className="container">
      <div className="radio-container">
        <div className="label">TRN_TCLAS_800095</div>

        <div className="header">RADIOPORT</div>

        <div className="track-label">NOW PLAYING</div>

        <div className="now-playing">
          <div className="cover">
            {selectedStation?.cover && (
              <img src={selectedStation.cover} alt={selectedStation.name} />
            )}
          </div>

          <div className="track-info">
            <div className="track-name">
              <strong>NOME DA MUSICA - NOME DO ARTISTA</strong>
            </div>

            <div className="volume">
              <p>Volume</p>
              <p>+ 85% -</p>
            </div>
          </div>
        </div>

        <ul>
          {stations.map((station) => (
            <li
              key={station.id}
              id={String(station.id)}
              className={selectedStationId === station.id ? "selected" : ""}
              onClick={() => setSelectedStationId(station.id)}
            >
              {selectedStationId === station.id && station.id !== 0 && (
                <img src={wave} className="wave" alt="" />
              )}

              {station.name}
            </li>
          ))}
        </ul>

        <div className="footer">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br />
          Quaerat sit soluta dolores nemo laboriosam pariatur.
          <br />
          Velit voluptatem ea est veniam ex officia voluptatem modi incidunt
        </div>
      </div>
    </div>
  );
}

export default App;
