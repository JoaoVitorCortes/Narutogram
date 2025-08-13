// Objeto com as IMAGENS PRINCIPAIS customizadas
const personagensImg = {
  Nagato:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkan5a0-d61b8c54-bef3-444e-bc0f-102b368fe79a.png/v1/fill/w_1280,h_1288/nagato_by_inogoth_dkan5a0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthbjVhMC1kNjFiOGM1NC1iZWYzLTQ0NGUtYmMwZi0xMDJiMzY4ZmU3OWEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uXnevaNd1h-8oTPIYXoxG3hocyZrevjQA92Hk2k4OLU",
  Konan:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkan3ab-ad004f19-71e0-441b-a5ae-f079da97d5ab.png/v1/fill/w_1280,h_1288/konan_by_inogoth_dkan3ab-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthbjNhYi1hZDAwNGYxOS03MWUwLTQ0MWItYTVhZS1mMDc5ZGE5N2Q1YWIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mn-1GLWVUA5YjJ7zoHmjlIva7qzxN9THHbK_5NCt1jk",
  ItachiUchiha:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkan1b1-488da8e1-0724-48aa-9773-fc5deeba6440.png/v1/fill/w_1280,h_1250/itachi_uchiha_by_inogoth_dkan1b1-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI1MCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthbjFiMS00ODhkYThlMS0wNzI0LTQ4YWEtOTc3My1mYzVkZWViYTY0NDAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ish6l_iKlX2JLAIGqKv5-6TQGGQIYXXEh6oFnm8MyV8",
  KisameHoshigaki:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkamylp-c0cb8fd9-5f65-47dc-9c52-0935d4f9d9fc.png/v1/fill/w_1280,h_1288/kisame_hoshigaki_by_inogoth_dkamylp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthbXlscC1jMGNiOGZkOS01ZjY1LTQ3ZGMtOWM1Mi0wOTM1ZDRmOWQ5ZmMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1iZr9cWpIK1XceQkynkMIsXSO-aNwjJwdxrbNpuds1k",
  Deidara:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkamwq2-225cee37-2e82-45e6-af51-5cdb91476551.png/v1/fill/w_1280,h_1288/deidara_by_inogoth_dkamwq2-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthbXdxMi0yMjVjZWUzNy0yZTgyLTQ1ZTYtYWY1MS01Y2RiOTE0NzY1NTEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.2Ld6Eg5K2C8OIAZ63l1UhJapXZ7qfgbxjRxDlOGIA0c",
  Sasori:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkams4g-d834e10f-4562-4f55-8e95-5bb37a7ca6fd.png/v1/fill/w_1280,h_1288/sasori_by_inogoth_dkams4g-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthbXM0Zy1kODM0ZTEwZi00NTYyLTRmNTUtOGU5NS01YmIzN2E3Y2E2ZmQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9px5gdnk4HLqLtsOCr1ef-c89HztNnueMxNwkg0PKSQ",
  Hidan:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkafnp1-122892d7-d9ac-405a-b224-75a010ba81d0.png/v1/fill/w_1280,h_1288/hidan_by_inogoth_dkafnp1-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthZm5wMS0xMjI4OTJkNy1kOWFjLTQwNWEtYjIyNC03NWEwMTBiYTgxZDAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.zw3SS1NSMcT-JoEOGnsVpmIK2i1w71IhGywhwrLzyiM",
  Kakuzu:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkafm44-96771599-0a4f-4a2e-addf-88d8ed8276c4.png/v1/fill/w_1280,h_1288/kakuzu_by_inogoth_dkafm44-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthZm00NC05Njc3MTU5OS0wYTRmLTRhMmUtYWRkZi04OGQ4ZWQ4Mjc2YzQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OR5d0ZePMX7S69KYozg5VbjTaAtu1r3EUMe3RX8bZ5s",
  Zetsu:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkafj1m-073eb3a1-f0a2-42b8-9176-4da9f0584a3d.png/v1/fill/w_1280,h_1288/zetsu_by_inogoth_dkafj1m-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthZmoxbS0wNzNlYjNhMS1mMGEyLTQyYjgtOTE3Ni00ZGE5ZjA1ODRhM2QucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.S9gyffIDNxuv7uHer5sARt67PK3GyNa-tm6uUYlWuPc",
  ObitoUchiha:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkafgig-d36a7e00-d528-40ea-8f4c-5e2661341226.png/v1/fill/w_1280,h_1288/obito_uchiha_by_inogoth_dkafgig-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthZmdpZy1kMzZhN2UwMC1kNTI4LTQwZWEtOGY0Yy01ZTI2NjEzNDEyMjYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lqFemIZQ70Ffs85j1kr0pfPz3jIfda1twW0b2fYmUyQ",
  MadaraUchiha:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkanb0p-f3a411e1-8840-4f82-b08b-a61a4f650012.png/v1/fill/w_1280,h_1288/madara_uchiha_by_inogoth_dkanb0p-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthbmIwcC1mM2E0MTFlMS04ODQwLTRmODItYjA4Yi1hNjFhNGY2NTAwMTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.a5aKPmgxMTAeX2ctIWnvQYK8np8hPvUAO_yTJfW2Taw",
  MinatoNamikaze:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkanauz-a592e3d7-d7ff-419e-81ae-ef8746dd0952.png/v1/fill/w_1280,h_1288/minato_namikaze_by_inogoth_dkanauz-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthbmF1ei1hNTkyZTNkNy1kN2ZmLTQxOWUtODFhZS1lZjg3NDZkZDA5NTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wmdAbNCWFHEroDDVBHUlmAvTiTr2mK0FqLY-tQXEKCY",
  NarutoUzumaki:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkafbi2-6bcbd927-6a79-4b44-8c19-ed6cc5c1bfc0.png/v1/fill/w_1280,h_1288/naruto_uzumaki_by_inogoth_dkafbi2-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthZmJpMi02YmNiZDkyNy02YTc5LTRiNDQtOGMxOS1lZDZjYzVjMWJmYzAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ulCSLZvArRnjQXDrHcaBT2ir356yNW0LLE-MWIykb6Y",
  SasukeUchiha:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkaf4i3-44f1f695-cc16-4d7f-b0bf-0f302dc7aa56.png/v1/fill/w_891,h_897/sasuke_uchiha_by_inogoth_dkaf4i3-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthZjRpMy00NGYxZjY5NS1jYzE2LTRkN2YtYjBiZi0wZjMwMmRjN2FhNTYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.DLiE5sCPKqk-5eZVzPRE3cCT4QbAgHB7QGNXDE0cjxk",
  SakuraHaruno:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkaexz0-9da47540-bc9b-421c-afdb-93db033bb31b.png/v1/fill/w_891,h_897/sakura_haruno_by_inogoth_dkaexz0-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthZXh6MC05ZGE0NzU0MC1iYzliLTQyMWMtYWZkYi05M2RiMDMzYmIzMWIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0fCkdSRDyvzWLEx-IbNkYGwJmDPM0fQ76lLkoNYLyU4",
  KakashiHatake:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dkaewin-14cca43f-a3a8-4b5c-aa7c-92f60b7c7ac9.png/v1/fill/w_891,h_897/kakashi_hatake_by_inogoth_dkaewin-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGthZXdpbi0xNGNjYTQzZi1hM2E4LTRiNWMtYWE3Yy05MmY2MGI3YzdhYzkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FeZnYaz06Qld5ZFm-BpJqRL8cqCvTowjGNub1FRSC0I",
  KibaInuzuka:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dk9pmyt-91374720-a967-413f-88fc-662c35bdecf2.png/v1/fill/w_891,h_897/kiba_inuzuka_by_inogoth_dk9pmyt-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGs5cG15dC05MTM3NDcyMC1hOTY3LTQxM2YtODhmYy02NjJjMzViZGVjZjIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.seAWWXmBy1bFZWwhAaX2AUaiklA0IJk5NJMjld9ijk4",
  ShinoAburame:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dk9poni-90b522dc-d5c2-42b6-88de-28e924bca3ff.png/v1/fill/w_891,h_897/shino_aburame_by_inogoth_dk9poni-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGs5cG9uaS05MGI1MjJkYy1kNWMyLTQyYjYtODhkZS0yOGU5MjRiY2EzZmYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.NzIyxOjHh-2XF96jI_RzlVYSnacRs-1QAHx7l-imLf0",
  HinataHyūga:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dk9pl3x-4043209a-9492-49ef-862d-ef02ef07b18f.png/v1/fill/w_891,h_897/hinata_hyuga_by_inogoth_dk9pl3x-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGs5cGwzeC00MDQzMjA5YS05NDkyLTQ5ZWYtODYyZC1lZjAyZWYwN2IxOGYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Y2GUCD28Y5gS9JXCHyb6xXhqLNHEpta0u2JDUy7jk_k",
  KurenaiYūhi:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dk9pf1j-acc906f8-9a5c-4006-b479-e697b3cb4365.png/v1/fill/w_891,h_897/kurenai_yuhi_by_inogoth_dk9pf1j-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGs5cGYxai1hY2M5MDZmOC05YTVjLTQwMDYtYjQ3OS1lNjk3YjNjYjQzNjUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Kp9pOMcoFaCOTrSeX3zgkSbd_ZdhMmJewwjDbw3uYWI",
  RockLee:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dk9p49d-a14f8df9-3d02-47fa-a5ae-96d6fbb896ff.png/v1/fill/w_891,h_897/rock_lee_by_inogoth_dk9p49d-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGs5cDQ5ZC1hMTRmOGRmOS0zZDAyLTQ3ZmEtYTVhZS05NmQ2ZmJiODk2ZmYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.idQMoe6Q5dIQvPq0JqmX7KkrdlhyHk3Raug7p9NvaUI",
  NejiHyūga:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dk9p5hp-d5bb3271-57a6-4b96-b970-75c8e0f889fd.png/v1/fill/w_1280,h_1288/neji_hyuga_by_inogoth_dk9p5hp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGs5cDVocC1kNWJiMzI3MS01N2E2LTRiOTYtYjk3MC03NWM4ZTBmODg5ZmQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.pbCxJOw_l6P7lmx4DLsdMDYg6HW_hx62BRA0ZuM0oXQ",
  Tenten:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dk9p10g-801abdc4-7fa2-4ec7-ad8d-b798d54d4a10.png/v1/fill/w_891,h_897/tenten_by_inogoth_dk9p10g-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGs5cDEwZy04MDFhYmRjNC03ZmEyLTRlYzctYWQ4ZC1iNzk4ZDU0ZDRhMTAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.S6Asbx9Pkp4ygQSnY9kmv3Ak6ntbycJ0cWiKW_5Uqfg",
  MightGuy:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dk9pcu6-f912af44-97ad-41ff-a1a6-ed6b50dc7939.png/v1/fill/w_891,h_897/might_guy_by_inogoth_dk9pcu6-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGs5cGN1Ni1mOTEyYWY0NC05N2FkLTQxZmYtYTFhNi1lZDZiNTBkYzc5MzkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.u-cKCEmyYSVlOUto_wU8tHRh7g_xYg-TZVLZx5H9NSI",
  ShikamaruNara:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dk9om0i-814dec07-686b-4d75-abdf-bed9697d6373.png/v1/fill/w_905,h_883/shikamaru_nara_by_inogoth_dk9om0i-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI1MCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGs5b20waS04MTRkZWMwNy02ODZiLTRkNzUtYWJkZi1iZWQ5Njk3ZDYzNzMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.XtlpXgKekv9cayswZwAbAOYX9_2CY8UkkSYdTRNtaHM",
  ChōjiAkimichi:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dk9opw1-6e04ea2d-161a-405c-8c18-6b60da5d25dc.png/v1/fill/w_891,h_897/choji_akimichi_by_inogoth_dk9opw1-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGs5b3B3MS02ZTA0ZWEyZC0xNjFhLTQwNWMtOGMxOC02YjYwZGE1ZDI1ZGMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1nFZ-TksESjE7TM25vio-k95Xxl_Hc49H4xCKC_o61E",
  InoYamanaka:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dk9dzp0-6d4b30aa-162f-4c94-81b8-0e585ce80bbe.png/v1/fill/w_891,h_897/ino_yamanaka_by_inogoth_dk9dzp0-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGs5ZHpwMC02ZDRiMzBhYS0xNjJmLTRjOTQtODFiOC0wZTU4NWNlODBiYmUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZTevYgn14Is7CrgznetnMT-R4WWFclKEeOFRGWMLcLU",
  AsumaSarutobi:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cf94645-1733-4d5d-a64e-0af1a980805b/dk9ox7k-59b40cde-a8b8-42b6-bd10-0d03a242734a.png/v1/fill/w_891,h_897/asuma_sarutobi_by_inogoth_dk9ox7k-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzJjZjk0NjQ1LTE3MzMtNGQ1ZC1hNjRlLTBhZjFhOTgwODA1YlwvZGs5b3g3ay01OWI0MGNkZS1hOGI4LTQyYjYtYmQxMC0wZDAzYTI0MjczNGEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lshr4iZT-2bgveA2mr4IE9oMabphAH4-spZzBVtIlNg",
};

// Dicionário de meses em português
const meses = {
  January: "Janeiro",
  February: "Fevereiro",
  March: "Março",
  April: "Abril",
  May: "Maio",
  June: "Junho",
  July: "Julho",
  August: "Agosto",
  September: "Setembro",
  October: "Outubro",
  November: "Novembro",
  December: "Dezembro",
};

// Traduz data "Month Day" para "Day de Month"
function formatarData(dataString) {
  if (!dataString || dataString === "Data desconhecida") {
    return "Data desconhecida";
  }

  const partes = dataString.split(" ");
  const mesIngles = partes[0];
  const dia = partes[1];
  const mesPortugues = meses[mesIngles];

  if (dia && mesPortugues) {
    return `${dia} de ${mesPortugues}`;
  }

  return dataString;
}

// Traduz "Chapter" por "Capítulo"
function formatarDebut(debutString) {
  if (!debutString) return "Primeira aparição desconhecida";
  return debutString.replace("Chapter", "Capítulo");
}

// Carrega personagem da API
async function loadCharacterFromAPI(characterName) {
  try {
    const response = await fetch(
      `https://dattebayo-api.onrender.com/characters?name=${encodeURIComponent(
        characterName
      )}`
    );
    const data = await response.json();
    return data.characters?.[0] || null;
  } catch (error) {
    console.error("Erro ao carregar personagem da API:", error);
    return null;
  }
}

// Exibe personagem na página
async function displayCharacter(characterName) {
  const apiCharacter = await loadCharacterFromAPI(characterName);

  if (!apiCharacter) {
    document.getElementById("nome-char").textContent =
      "Personagem não encontrado";
    document.getElementById("descricao-char").textContent =
      "Não foi possível carregar as informações deste personagem.";
    return;
  }

  const urlImagemAPI = apiCharacter.images?.[0] || "";
  document.getElementById("icone-char").src = urlImagemAPI || PLACEHOLDER_IMG;

  const keyPersonagem = characterName.replace(/\s/g, "");
  const urlImagemCustomizada = personagensImg[keyPersonagem];
  document.getElementById("imagem-char").src =
    urlImagemCustomizada || urlImagemAPI || PLACEHOLDER_IMG;

  document.getElementById("nome-char").textContent = apiCharacter.name;
  document.getElementById("header-nome").textContent = apiCharacter.name;

  const rank =
    apiCharacter.rank?.ninjaRank?.["Part II"] ||
    apiCharacter.rank?.ninjaRank?.["Part I"] ||
    "N/A";
  document.getElementById("rank-char").textContent = rank;

  const birthdate = apiCharacter.personal?.birthdate || "Data desconhecida";
  const affiliation =
    apiCharacter.personal?.affiliation?.[0] || "Afiliação desconhecida";
  const debut =
    apiCharacter.debut?.manga ||
    apiCharacter.debut?.anime ||
    "Primeira aparição desconhecida";

  const birthdateTraduzida = formatarData(birthdate);
  const debutTraduzido = formatarDebut(debut);

  const description = `Nascido em ${birthdateTraduzida}, vivendo em ${affiliation}, este ninja teve sua primeira aparição em ${debutTraduzido}.`;
  document.getElementById("descricao-char").textContent = description;

  const habilidadesList = document.getElementById("lista-habilidades");
  habilidadesList.innerHTML = "";
  const habilidades = apiCharacter.jutsu?.slice(0, 5) || [];

  if (habilidades.length > 0) {
    habilidades.forEach((habilidade) => {
      const li = document.createElement("li");
      li.textContent = habilidade;
      habilidadesList.appendChild(li);
    });
  } else {
    habilidadesList.innerHTML = "<li>Habilidades não disponíveis</li>";
  }

  document.getElementById("birthdate").textContent = birthdateTraduzida;
  document.getElementById("affiliation").textContent = affiliation;
  document.getElementById("debut").textContent = debutTraduzido;
}

// Roda a função assim que a página carregar
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const characterName = urlParams.get("nome");

  if (characterName) {
    displayCharacter(decodeURIComponent(characterName));
  } else {
    document.getElementById("nome-char").textContent =
      "Personagem não especificado";
    document.getElementById("descricao-char").textContent =
      "Nenhum personagem foi selecionado.";
  }
});
