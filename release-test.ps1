# release.ps1

# Load environment variables from .env file
Get-Content ".env" | ForEach-Object {
    if ($_ -match "^\s*([^#][^=]*)=(.*)$") {
        $key = $matches[1].Trim()
        $value = $matches[2].Trim()
        [System.Environment]::SetEnvironmentVariable($key, $value, "Process")
    }
}

# Set CI variable
[System.Environment]::SetEnvironmentVariable("CI", "true", "Process")

# Run semantic-release
npx semantic-release