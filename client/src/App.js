import { useState } from 'react';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';

const App = () => {
  const DUMMY_PLAYER = [
    { id: 1, username: "farhan123", email: "farhan123@mail.com", experience: 9850, level: 26 },
  ];

  const [playerData, setPlayerData] = useState(DUMMY_PLAYER);
  const [formPlayer, setFormPlayer] = useState(null);
  // const [formPlayer, setFormPlayer] = useState({
  //   username: '',
  //   email: '',
  //   experience: 0,
  //   level: 0,
  // });

  const addPlayer = (data) => {
    const lastPlayer = playerData[playerData.length - 1];

    const newPlayer = {
      ...data,
      id: lastPlayer.id + 1,
    };

    setPlayerData((prevState) => {
      return [
        ...prevState,
        newPlayer,
      ]
    });
  }

  const getPlayerData = (data) => {
    setFormPlayer(data);
  };

  const updatePlayer = (data) => {

    setPlayerData((prevState) => {
      const newPlayerData = prevState.filter((player) => player.id !== formPlayer.id);

      return [
        ...newPlayerData,
        data,
      ];
    });
  };

  return (
    <div className='app'>
      <Form
        onAddPlayer={addPlayer}
        form={formPlayer}
        onUpdatePlayer={updatePlayer}
      />
      <Table
        players={playerData}
        onEditPlayer={getPlayerData}
      />
    </div>
  );
}

export default App;
