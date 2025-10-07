// src/telemetry.js
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

export const appInsights = new ApplicationInsights({
  config: {
    connectionString: 'InstrumentationKey=579f6949-7510-465f-9b15-17153a644606;IngestionEndpoint=https://japaneast-1.in.applicationinsights.azure.com/;LiveEndpoint=https://japaneast.livediagnostics.monitor.azure.com/;ApplicationId=47c536d9-f6f6-4048-a7ef-d43d1313c8a4'
  }
});

appInsights.loadAppInsights();
