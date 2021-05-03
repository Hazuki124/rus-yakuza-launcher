!macro customInstall
  SetRegView 64
  WriteRegStr HKLM "yakuza-launcher" "" '"$INSTDIR"'
  WriteRegStr HKCU "yakuza-launcher" "" '"$INSTDIR"'
  SetRegView 32
  WriteRegStr HKLM "yakuza-launcher" "" '"$INSTDIR"'
  WriteRegStr HKCU "yakuza-launcher" "" '"$INSTDIR"'
!macroend
!macro customUnInstall
  DeleteRegKey HKLM "yakuza-launcher"
  DeleteRegKey HKCU "yakuza-launcher"
!macroend

!macro customInit
  ; Workaround for installer handing when the app directory is removed manually
  ${ifNot} ${FileExists} "$INSTDIR"
    DeleteRegKey HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\{${UNINSTALL_APP_KEY}}"
  ${EndIf}

  ; Workaround for the old-format uninstall registry key (some people report it causes hangups, too)
  ReadRegStr $0 HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}" "QuietUninstallString"
  StrCmp $0 "" proceed 0
  DeleteRegKey HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}"
  proceed:
!macroend
