import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const appInsights = new ApplicationInsights({
      config: {
        connectionString: 'InstrumentationKey=579f6949-7510-465f-9b15-17153a644606;IngestionEndpoint=https://japaneast-1.in.applicationinsights.azure.com/;LiveEndpoint=https://japaneast.livediagnostics.monitor.azure.com/;ApplicationId=47c536d9-f6f6-4048-a7ef-d43d1313c8a4',
      },
    })
    appInsights.loadAppInsights()
    appInsights.trackPageView()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Azure</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
