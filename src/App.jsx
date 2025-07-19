import { useEffect, useState } from 'react'
import Hello from './Hello'
import Read from './Read'
import Write from './Write'
import Ssh from './Ssh/SshList'

export default function App () {
  const [enterAction, setEnterAction] = useState({})
  const [route, setRoute] = useState('ssh')
  // useEffect(() => {
    // window.utools.onPluginEnter((action) => {
    //   setRoute(action.code)
    //   setEnterAction(action)
    // })
    // window.utools.onPluginOut((isKill) => {
    //   setRoute('')
    // })
  // }, [])
  console.log("hello进来了")
  console.log(window.location.pathname)
  if (route === 'hello') {
    return <Hello enterAction={enterAction} />
  }

  if(route == 'ssh') {
    return <Ssh/>
  }

  if (route === 'read') {
    return <Read enterAction={enterAction} />
  }

  if (route === 'write') {
    return <Write enterAction={enterAction} />
  }

  return false
}
