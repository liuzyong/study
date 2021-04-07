import { useState } from 'react'

function useCustomize() {
  const [content, setContent] = useState('')
  const [counter, setCounter] = useState(0)

  return [content, setContent, counter, setCounter]
}

export default function WithHooks() {
  //   const [content, setContent] = useState('')
  //   const [counter, setCounter] = useState(0)

  const [content, setContent, counter, setCounter] = useCustomize()

  return (
    <div>
      <input type="text" onChange={(e) => setContent(e.target.value)} />
      <div>{content}</div>
      <button onClick={() => setCounter(counter + 1)}>点一下增加计数值</button>
      <div>点击了{counter}次</div>
    </div>
  )
}
