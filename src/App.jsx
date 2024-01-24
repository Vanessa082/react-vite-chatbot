import { useState } from 'react'
import { useLocalStorage } from "@uidotdev/usehooks";
import ChatInput from './Component/ChatInput/ChatInput';
import ChatBubble from './Component/ChatBubble/ChatBubble';
import './App.css'

function App() {
  const [messages, setMessages] = useLocalStorage("chat-messages", [
    {
      origin: "user",
      text: "This is my test message"
    },
    {
      origin: "bot",
      text: "This is a test response"
    }
  ])

  const [error, setError] = useState(false)

  const [loading, setLoading] = useState(false)
  
  const sendMessage = async (message) => {
    setError(false)

    setLoading(true)
    setMessages((messages) => [...messages, {text: message, origin: "user"}])
    try {
      const response = await api.sendMessage(message)
      setMessages((messages) => [...messages, {text: response, origin: "bot"}])
    } catch(error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const errorComponent = <ChatBubble origin={"bot"} message={"An Error occurred"} error />

  const loadingState = <ChatBubble message="" origin={"bot"} loading />

  return (
    <div className={styles.container}>
      <div className={styles.chatContainer}>
      {error ? errorComponent : null}
      {loading? loadingState: null}
      {messages.reverse().map((item, index) => {
        return <ChatBubble key={`${item.text}-${index}`} origin={item.origin} message={item.text} />
      })}
      </div>
      <ChatInput onSubmit={sendMessage} />
    </div>
  )
}

export default App
