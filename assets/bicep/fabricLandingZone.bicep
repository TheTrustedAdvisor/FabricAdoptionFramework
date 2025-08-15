targetScope = 'subscription'

param location string = resourceGroup().location
param landingZoneName string = 'fabric-landing-zone'

resource logAnalytics 'Microsoft.OperationalInsights/workspaces@2023-10-01' = {
  name: '${landingZoneName}-log'
  location: location
  properties: {
    retentionInDays: 30
    features: {
      enableLogAccessUsingOnlyResourcePermissions: true
      legacy: 0
    }
  }
}

resource insights 'Microsoft.Insights/components@2020-02-02' = {
  name: '${landingZoneName}-appinsights'
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
  }
}

resource fabricDeployment 'Microsoft.Fabric/deployments@2024-01-01-preview' = {
  name: '${landingZoneName}-deployment'
  location: location
  properties: {
    environmentType: 'Production'
    diagnosticSettings: {
      logAnalyticsWorkspaceId: logAnalytics.id
    }
    monitoring: {
      applicationInsightsId: insights.id
    }
  }
}

output logWorkspaceId string = logAnalytics.id
output appInsightsId string = insights.id
output fabricDeploymentId string = fabricDeployment.id
