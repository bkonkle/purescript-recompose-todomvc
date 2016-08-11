import {newTodo as NewTodo} from 'Todo/Components/NewTodo.purs'
import Controls from 'Lib/Components/Controls'
import Footer from 'Lib/Components/Footer'
import React from 'react'
import Todos from 'Lib/Components/Todos'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

export default function App () {
  return (
    <div>
      <section className="todoapp">
        <NewTodo />
        <Todos />
        <Controls />
      </section>
      <Footer />
    </div>
  )
}