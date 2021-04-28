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
