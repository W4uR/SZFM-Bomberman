# Teszt: "A játékos pontszáma növekszik a játék végén."

## Tesztlépések:

- Nyissuk meg az alkalmazás főképernyőjét.
- Kattintsunk a 'Játék' gombra.
- Adjon meg két játékost: "TestPlayer1" és "TestPlayer2".
- Indítsuk el a játékot a megadott játékosnevekkel.
- Várjunk 1 másodpercet a sprite-ok betöltéséhez.
- Kérjük le és tároljok el a TestPlayer2 jelenlegi pontszámát.
- Nyomjunk a szóköz gombra, hogy a TestPlayer1 lerakjon egy bombát és sebezze magát.
- Várjunk 4 másodpercet, hogy a bomba felrobbanjon, majd még 2x ismételjük meg ezt és az előző lépést.
- Kattintsunk az új játék indítására szolgáló gombra.
- Ismét ellenőrizzük az adatbázist a "TestPlayer2" játékos pontszámának frissülésére.
- Ellenőrizzük, hogy a játékos pontszáma növekedett-e a játék vége előtt és után.

## Várt eredmények:

- A "TestPlayer2" játékos pontszáma növekszik a játék befejezése után a játék közben elért eredményeknek megfelelően.