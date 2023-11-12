import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './routes'
import './index.css'
import { ListOfAnimals } from './components/ListOfAnimals/ListOfAnimals'
import dogs from './data/dogs.json'
import cats from './data/cats.json'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/animals',
    children: [
      {
        path: 'cats',
        element: <ListOfAnimals listAnimal={cats}/>
      },
      {
        path: 'dogs',
        element: <ListOfAnimals listAnimal={dogs}/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
