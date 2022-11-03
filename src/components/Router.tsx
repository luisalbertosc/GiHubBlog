import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Blog } from '../pages/Blog'
import { OpenPost } from '../pages/OpenPost'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:id" element={<OpenPost />} />
      </Route>
    </Routes>
  )
}
