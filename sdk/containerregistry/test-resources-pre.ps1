param (
  [string]$ResourceGroupName
)

$ErrorActionPreference = "Continue"

Import-AzContainerRegistryImage

Write-Host "Exiting"
exit 1
