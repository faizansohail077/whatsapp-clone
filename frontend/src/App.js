import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Pusher from 'pusher-js'
import axios from './axios'


function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    axios.get('/messages/sync')
      .then(res => {
        setMessages(res.data)
      })
  })
  useEffect(() => {
    const pusher = new Pusher('190f20a721811a50f179', {
      cluster: 'ap1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('insert', function (data) {
      setMessages([...messages, data])
    });
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])
  // console.log(messages)

  return (
    <div className="App">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
