### **1. Jelenlegi helyzet leírása:**
Már jelenleg is létezik több Bomberman nevű, webes felületen elérhető 2D-s játék. A játék lényege, hogy a játkosok robbanószereket helyeznek el a pályán, és ezzel kiejteni az ellenfelet. Ezzel a projekktel ezen játék egy klónját szeretnék elkészíteni. 

### **2.  Vágyálom rendszer leírása:**
A játék célja egy izgalmas és szórakoztató offline multiplayer élmény nyújtása, ahol a játékosok robbanószereket helyezhetnek el a pályán, és megpróbálják kiejteni egymást. A játékot számítógép böngészőjében lehessen játszani.

#### 2.1. Játékmenet:

- 2.1.1. Játékosok:
    - A játékot 2 játékos játszhatja.
    - Minden játékos egy saját karakterrel rendelkezik.

- 2.1.2. Cél:
    - A játékosoknak céljuk van egymás karaktereit kiejteni a robbanószerek segítségével.

- 2.1.3. Pálya:
    - A pályán található számos akadály, amelyeket fel lehet robbantani, hogy új területekhez és tárgyakhoz jussunk.
    - A pálya változatos területekből áll, amelyek más és más kihívásokat tartogatnak.

- 2.1.4. Robbanószerek:
    - A játékosok robbanószereket helyezhetnek el a pályán.
    - A robbanószerek időzített robbanással rendelkeznek, amely után károsodást okoznak.

- 2.1.5. Győzelem:
    - A játékos nyer, ha a másik játékos felrobban.

#### 2.2. Grafika és Hang:

- 2.2.1. Grafika:
    - A játék 2D grafikával rendelkezik.
    - A karakterek és a pálya pixelart stítlusú megjelenítést kapnak.

- 2.2.2. Hang:
    - A játék rendelkezik zenei aláfestéssel és hanghatásokkal.
    - Hangokat használ a robbanások és karaktermozgások szimulálásához.


#### 2.3. Multiplayer Funkciók:

- 2.3.1. A játék lehetővé tesz offline többjátékos módot.

#### 2.4. Irányítás:

- 2.4.1. Az irányítás legyen intuitív és könnyen megtanulható.
- 2.4.2. Tudjon a 2 játékos egy billentyűzettel játszani.

#### 2.5. További Funkciók:

- 2.5.1. Többféle karakter és pálya választás lehetősége.
- 2.5.2. Ranglisták és eredmények megjelenítése.
- 2.5.3. Power-up tárgyak, amelyek növelik a karakterek képességeit.

#### 2.6. Tesztelés és Hibajavítás:

- 2.6.1. Az alkalmazás alaposan legyen tesztelve.
- 2.6.2. A játék hibáinak gyors javítása a kiadások után.

#### 2.7. Dokumentáció:

- 2.7.1. A játékhoz készüljön dokumentáció a játékmenetről, az irányításról és az alapvető információkról.

#### 2.8. Projektmenedzsment:

- 2.8.1. A projektmenedzsment során kövessünk egy átfogó ütemtervet, és tartsuk be a határidőket.

### **3. A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások felsorolása:**

#### 3.1 Projekttervezés: 
- Határozza meg a játék célját és funkcióit. Gondoljon arra, hogy milyen típusú Bomberman játékot szeretne létrehozni, és milyen egyedi elemeket szeretne hozzáadni.
#### 3.3 Játékmechanika tervezése: 
- Hozzon létre egy tervezést vagy tervrajzot a játék alapvető mechanizmusairól, például a játékos mozgásáról, bombák lerakásáról, robbanásokról stb.
#### 3.4 Grafikai és hangtervezés: 
- Tervezze meg a játék grafikáját és hangjait, vagy béreljen grafikust és hangtervezőt, ha szükséges.
#### 3.5 Kódolás és fejlesztés: 
- Kezdje el a játékfejlesztést a kiválasztott platformon, és hozzon létre az alapvető játékmechanizmusokat.
#### 3.6 Pályakép és szintek készítése: 
- Hozzon létre pályaképeket és játékszinteket a játékhoz.
#### 3.7 Hálózati támogatás (opcionális): 
- Ha multiplayer módú játékot tervez, készítse el a hálózati támogatást a játékhoz.
#### 3.8 Tesztelés: 
- Tesztelje a játékot, és javítsa ki az esetleges hibákat.
#### 3.9 Engedélyek és jogi megfontolások: 
- Ellenőrizze, hogy van-e szükség engedélyekre a játék terjesztéséhez, és tartsa be az összes vonatkozó jogszabályt, például szerzői jogi és adatvédelmi előírásokat.
#### 3.10 Kiadvány: 
- Adja ki a játékot a kiválasztott platformon.

### **4 Jelenlegi üzleti folyamatok modellje:**

- 4.1. Egy meccs lejátszása
    - 4.1.1 Böngésző megnyitása, majd keresés a játékra.
    - 4.1.2 Kívánt verzió kiválasztása.
    - 4.1.3 Játékos(ok) nevének megadása.
        - 4.1.3.1. 1-es játékos karakterének közelében lévő szövegdobozba kattintás.
        - 4.1.3.2. Név megadása.
        - 4.1.3.3. 2-es játékos karakterének közelében lévő szövegdobozba kattintás.
        - 4.1.3.4. Név megadása.
        Vagy
        - 4.1.3.1. 1-es játékos karakterének közelében lévő szövegdobozba kattintás.
        - 4.1.3.2. Név megadása.
    - 4.1.4. Játék indítása "Játék" gombra kattintással. (Második játékos opcionális.)
    - 4.1.5. A játékosok egy billentyűzettel játszva mozognak a pályán és helyeznek el bombákat, addig amíg valamelyik játékos karaktere fel nem robban. Míg egy játékos esetén a többi ellenfelet a számítógép irányítja.
    - 4.1.6. Játék vége képernyő
        - 4.1.6.1. "Új játék" gombra kattintva visszaugrunk az 4.1.4. pontra.
        - 4.1.6.1. "Vissza a főmenűbe" gombra kattintva visszaugrunk az 4.1.3. pontra.
- 4.2. Ranglista megtekintése.
    - A jelenlegi játék nem rendelkezik ranglistával.
- 4.2. Hibajelentés.
    - A jelenlegi játék nem rendelkezik hibabejelentéssel.

### **5. Igényelt üzleti folyamatok modellje**

- 5.1. Egy meccs lejátszása.
    - 5.1.1. Weblap megynitása, üdvözlő képernyő.
    - 5.1.2. Kattintás a "Játék" gombra.
    - 5.1.3. Játékosok nevének megadása. (Sorrend nem számít)
        - 5.1.3.1. 1-es játékos karakterének közelében lévő szövegdobozba kattintás.
        - 5.1.3.2. Név megadása.
        - 5.1.3.3. 2-es játékos karakterének közelében lévő szövegdobozba kattintás.
        - 5.1.3.4. Név megadása.
    - 5.1.4. Játék indítása "Játék" gombra kattintással. (Csak akkor indul el a játék, ha mindkettő játékos adott meg nevet.)
    - 5.1.5. A játékosok egy billentyűzettel játszva mozognak a pályán és helyeznek el bombákat, addig amíg valamelyik játékos karaktere fel nem robban.
    - 5.1.6. Játék vége képernyő
        - 5.1.6.1. "Új játék" gombra kattintva visszaugrunk az 5.1.5. pontra.
        - 5.1.6.1. "Vissza a főmenűbe" gombra kattintva visszaugrunk az 5.1.1. pontra.
- 5.2. Ranglista megtekintése.
    - 5.2.1. Weblap megynitása, üdvözlő képernyő.
    - 5.2.2. Kattintás a "Ranglista" gombra.
    - 5.2.3. Ranglista képernyő.
    - 5.2.4. Szűrés név szerint.
        - 5.2.4.1. Szövegdobozba kattintás.
        - 5.2.4.2. Kitöltés a keresett névvel.
- 5.3. Hibajelentés.
    - 5.3.1. Weblap megynitása, üdvözlő képernyő.
    - 5.3.2. "Hibajelentés" gombra kattintás.
    - 5.3.3. Hibajelentő overlay megjelenik.
    - 5.3.4. Mezők kitöltése.
    - 5.3.5. "Küldés" gomb.
