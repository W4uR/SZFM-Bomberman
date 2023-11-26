# Teszt: "A 'Játék' gomb megnyomásával áttölt a karakter és pályaválasztóba."

## Tesztlépések:

- Nyisd meg az alkalmazás főképernyőjét.
- Keresd meg és kattints a 'Játék' gombra.
- Ellenőrizd, hogy az URL átvált a karakterválasztó oldalra.

## Várt eredmények:

- A 'Játék' gombra kattintást követően az URL át kell váltani ide: "http://localhost/character_selection/character_selection.html".

# Teszt: "A 'Ranglista' gomb megnyomásával eljutok a ranglista gomb kijelzőre."

## Tesztlépések:

- Nyisd meg az alkalmazás főképernyőjét.
- Keresd meg és kattints a 'Ranglista' gombra.
- Ellenőrizd, hogy az URL átvált a ranglista oldalra.

## Várt eredmények:

- A 'Ranglista' gombra kattintást követően az URL át kell váltani ide: "http://localhost/scoreboard/scoreboard.php".

# Teszt: "A 'Bug' ikon megnyomásával megjelenik a BugReport beküldő form és annak elemei."

## Tesztlépések:

- Nyisd meg az alkalmazás főképernyőjét.
- Kattints a 'Bug' ikonra.
- Ellenőrizd, hogy megjelenik-e a hibabejelentő űrlap és annak elemei.

## Várt eredmények:

- A hibabejelentő konténer (div) láthatóvá kell válnia a 'Bug' ikonra kattintás után.
- A hibabejelentő konténeren belül:
- A küldés gomb, bezárás gomb és szövegmező láthatónak kell lennie.
- Az elemek ellenőrzése után kattints a bezárás gombra a hibabejelentő űrlap bezárásához.