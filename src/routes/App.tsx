import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import { CheckOut, Home, Information, NotFound, Payment, Success } from "../containers"
import AppContext from "../context/AppContext"
import useInitialState from "../hooks/useInitialState"

function App () {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />

          <Route path="/checkout" element={<CheckOut />} />

          <Route path="/checkout/information" element={<Information />} />

          <Route path="/checkout/payment" element={<Payment />} />

          <Route path="/checkout/success" element={<Success />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
