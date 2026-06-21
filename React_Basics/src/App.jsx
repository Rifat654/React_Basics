import React from 'react'
import Btn from './components/Context_Exm/Btn'
import Text from './components/Context_Exm/Text'

const App = () => {
  return (
    <div className='w-full h-screen bg-blue-900 text-white' >
      <h1 className='text-center py-4 text-5xl'>Welcome to the React Basics App</h1>
      {/* context api  */}
      <div className=' w-full min-h-screen flex flex-col items-center justify-center gap-5' >
        <Btn />
        <Text />
      </div>
    </div>
  )
}

export default App
