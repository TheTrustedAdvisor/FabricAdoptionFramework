

targetScope = 'tenant'

@description('Root management group ID')
param rootMgId string = 'mg-root'

@description('Display name for root management group')
param rootMgDisplayName string = 'Contoso Root'

@description('Business unit management groups')
param businessUnits array = [
  {
    name: 'mg-data'
    displayName: 'Data & Analytics'
  }
  {
    name: 'mg-it'
    displayName: 'Corporate IT'
  }
  {
    name: 'mg-apps'
    displayName: 'Applications'
  }
]

resource rootMg 'Microsoft.Management/managementGroups@2021-04-01' = {
  name: rootMgId
  properties: {
    displayName: rootMgDisplayName
  }
}

resource businessUnitMgs 'Microsoft.Management/managementGroups@2021-04-01' = [for unit in businessUnits: {
  name: unit.name
  properties: {
    displayName: unit.displayName
    parent: {
      id: rootMg.id
    }
  }
}]
