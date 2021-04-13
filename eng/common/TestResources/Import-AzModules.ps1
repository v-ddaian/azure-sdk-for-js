. "$PSScriptRoot/AzurePowerShellV4/Utility.ps1"

$VerbosePreference = "Continue"

Write-Host "Impoorted module list before:"
Get-Module

if ($IsWindows)
{
  # Copied from https://github.com/microsoft/azure-pipelines-tasks/blob/9cc8e1b3ee37dc023c81290de1dd522b77faccf7/Tasks/AzurePowerShellV4/AzurePowerShell.ps1#L57-L58
  CleanUp-PSModulePathForHostedAgent
  Update-PSModulePathForHostedAgent
}
else
{
  # Copied from https://github.com/microsoft/azure-pipelines-tasks/blob/9cc8e1b3ee37dc023c81290de1dd522b77faccf7/Tasks/AzurePowerShellV4/InitializeAz.ps1#L16
  Update-PSModulePathForHostedAgentLinux
}

Write-Host "Imported module list after:"
Get-Module

Write-Host "Modules available:"
Get-Module -ListAvailable
