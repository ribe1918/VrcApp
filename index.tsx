import React                                    from 'react'
import ReactDOM                                 from 'react-dom'
import RootRoute                                from './routes'
import DefaultLayout                            from './src/layout/DefaultLayout'

ReactDOM.render(
  <DefaultLayout>
    <RootRoute />
  </DefaultLayout>,
  document.getElementById('root')
)
