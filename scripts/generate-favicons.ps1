Add-Type -AssemblyName System.Drawing

function New-KateFavicon {
  param([int]$Size, [string]$Path)

  $bmp = New-Object System.Drawing.Bitmap $Size, $Size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.Clear([System.Drawing.Color]::FromArgb(255, 30, 58, 95))

  $brush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
  $fontSize = if ($Size -le 16) { 7 } elseif ($Size -le 32) { 14 } elseif ($Size -le 180) { 72 } else { 200 }
  $font = New-Object System.Drawing.Font "Arial", $fontSize, ([System.Drawing.FontStyle]::Bold)
  $format = New-Object System.Drawing.StringFormat
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center
  $rect = New-Object System.Drawing.RectangleF 0, 0, $Size, $Size
  $g.DrawString("SK", $font, $brush, $rect, $format)
  $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
}

$base = Join-Path $PSScriptRoot "..\public\assets"
New-KateFavicon -Size 16 -Path (Join-Path $base "favicon-16x16.png")
New-KateFavicon -Size 32 -Path (Join-Path $base "favicon-32x32.png")
New-KateFavicon -Size 180 -Path (Join-Path $base "apple-touch-icon.png")
New-KateFavicon -Size 192 -Path (Join-Path $base "icon-192.png")
New-KateFavicon -Size 512 -Path (Join-Path $base "icon-512.png")

Write-Host "Favicons generated in $base"
