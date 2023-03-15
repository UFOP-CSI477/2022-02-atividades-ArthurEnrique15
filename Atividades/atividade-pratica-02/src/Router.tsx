import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Persons } from './pages/Persons'
import { BloodTypes } from './pages/BloodTypes'
import { CollectionPlaces } from './pages/CollectionPlaces'
import { Donations } from './pages/Donations'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/person" element={<Persons />} />
        <Route path="/blood-type" element={<BloodTypes />} />
        <Route path="/collection-place" element={<CollectionPlaces />} />
        <Route path="/donation" element={<Donations />} />
      </Route>
    </Routes>
  )
}
