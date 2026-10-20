# Multi-Project Orchestrator PowerShell Wrapper
param(
  [Parameter(Position=0)]
  [string]$Command = "list",
  [Parameter(Position=1)]
  [string]$Arg1 = "",
  [Parameter(ValueFromRemainingArguments=$true)]
  [string[]]$RemainingArgs
)

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$mjsPath = Join-Path $scriptDir "orchestrate.mjs"

if ($Arg1 -ne "") {
  node $mjsPath $Command $Arg1 $RemainingArgs
} else {
  node $mjsPath $Command $RemainingArgs
}
