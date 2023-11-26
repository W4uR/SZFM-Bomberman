# Teszt: "Bug report beküldése és annak adatbázisban való megjelenése."

## Tesztlépések:

- Nyissuk meg az alkalmazás főképernyőjét.
- Kattintsunk a 'Bug' ikonra a hibabejelentő felület megjelenítéséhez.
- Töltsük ki a hibajelentés leírását a teszt szöveggel: "Ez egy leírás a bug beküldő teszteléséhez."
- Nyomjunk a beküldés gombra a hibajelentés elküldéséhez.
- Ellenőrizzük, hogy sikeres elküldés esetén a hibajelentő konténer már nem látható.
- Ellenőrizzük az adatbázist, hogy a beküldött szöveg megjelenik-e a hibajelentés táblában.
- Töröljük az adatbázisból a teszt céljából beküldött szöveget, hogy ne keltsen félreértést.

## Várt eredmények:

- A hibajelentő felület sikeresen megjelenik és a szöveg sikeresen beküldésre kerül az adatbázisba.
- Az adatbázisban a beküldött szöveg megjelenik és a hibajelentés leírása megfelel a beküldött teszt szövegnek.
- A teszt céljából beküldött szöveg sikeresen törlődik az adatbázisból.