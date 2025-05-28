# release.ps1
# $envVars = Get-Content ".env" | ForEach-Object {
#     $pair = $_ -split "="
#     Set-Item -Path "env:$($pair[0])" -Value $pair[1]
# }
CI=true npx semantic-release