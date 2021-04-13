param (
  [hashtable] $DeploymentOutputs,
  [string] $TenantId,
  [string] $TestApplicationId,
  [string] $TestApplicationSecret
)

#Testing
Get-Module -ListAvailable

Get-Command -Module "Az.ContainerRegistry"

Import-AzContainerRegistryImage `
  -ResourceGroupName $DeploymentOutputs['CONTAINERREGISTRY_RESOURCE_GROUP'] `
  -RegistryName $DeploymentOutputs['CONTAINERREGISTRY_USERNAME'] `
  -SourceImage 'library/hello-world' -SourceRegistryUri 'registry.hub.docker.com' `
  -Mode 'Force'

Write-Host "Exiting"
exit 1
