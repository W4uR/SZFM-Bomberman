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

### **5. Igényelt üzleti folyamatok modellje:**

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

### **6. Követelménylista:**
- 6.1 Karakterek:
    - 6.1.1 Két játékos karaketerinek létrehozása
    - 6.1.2 Karakterek mozgása és irányítása (Beállítható? - WASD,Nyilak alapértelmezettként)
- 6.2 Pályák és szintek
    - 6.2.1 Egy játéktéren, a pálya magát generálja.
- 6.3 Bombák és Robbanások 
    - 6.3.1 A Bomba egy arra alkalmas helyre elhelyezhető.
    - 6.3.2 Robbanásnak megfelelően a karakterek, és pálya sérülése.
- 6.4 Power-up-ok:
    - 6.4.1 A Bombák tulajdonságait képesek befolyásolni mint pl. hatósugár.
    - 6.4.2 Képesek a karaktert is felerősíteni mint pl. gyorsabban halad.
- 6.5 Célkitűzések
    - 6.5.1 A játék céljának meghatározása (ellenfél legyőzése.)
- 6.6 Pontszám
    - 6.6.1 Pontszámítás a játék során. (Nyertes fix pont összeg. +Pont a lerombolt elemekért?)
- 6.7 Grafika és animáció
    - 6.7.1 A játéknak 2d-s térben kell készülnie, "pixel art" megjelenéssel.
    - A Robbanás terjedésének és a karakterek mozgásának van animációja.
- 6.8 Platformok
    - 6.8.1 A játék WEB böngészőn keresztül lesz játszható. 
    - 6.8.2 A játék FULL HD felbontást támogat.
- 6.9 Tesztelés és hibajavítás
    - 6.9.1 A játék tesztelése és hibák javítása a megjelnés előtt és után.

### **7. Irányított és szabad szöveges riportok szövege:**
#### 7.1. Milyen projektet tervezel létrehozni?
A tervezett projekt egy Bomberman nevű 2D-s játékklón kifejlesztése, amelyet böngészőből lehet játszani. A játék alapötlete az lesz, hogy két játékos helyezhet el robbanószereket a pályán, miközben megpróbálják kiejteni egymást. A játék egy offline multiplayer élményt fog nyújtani, tehát két játékos egy gépen játszhat együtt.

#### 7.2. Mi a projekt célja és célközönsége?
A projekt célja egy szórakoztató és izgalmas offline multiplayer játék létrehozása, amelyet könnyedén lehet elérni a böngészőből. A célközönség a játékosok, akik szeretnek együtt játszani barátaikkal vagy családtagjaikkal, és élvezik a klasszikus Bomberman játékélményt.

#### 7.3. Milyen játékmechanikákat és funkciókat tervezel bevezetni a játékba?
A tervezett játék alapvető játékmechanikái a következők lesznek:

Játékosok képesek lesznek robbanószereket helyezni a pályán.
    A robbanószerek időzített robbanással rendelkeznek, amely után károsodást okoznak.
    A játékosok célja egymás karaktereit kiejteni a robbanószerek segítségével.
    A pályán lesznek akadályok, amelyek felrobbanhatnak, hogy új területek és tárgyak legyenek elérhetőek.
    Hogyan fog kinézni a játék grafikai és hang terén?
    A játék grafikája pixel art stílusú lesz, amely 2D-s megjelenítést biztosít. A karakterek és a pálya is ebben a stílusban jelenik majd meg. Hangokat fogunk használni a robbanások és a karakterek mozgásának szimulálásához, valamint zenei aláfestést is tervezünk a játékhoz.

#### 7.4. Milyen multiplayer funkciókat tervezel a játékba?
A játék offline multiplayer módot fog támogatni, amely lehetővé teszi két játékosnak, hogy egy gépen játszhasson. Mindkét játékos ugyanazon a gépen fogja irányítani a saját karakterét.

#### 7.5. Hogyan fog működni a játék irányítása?
Az irányításnak intuitívnak és könnyen megtanulhatónak kell lennie. Mindkét játékos egy billentyűzettel játszhat majd, és a karakterek mozgatásához és a robbanószerek elhelyezéséhez használhatják a billentyűzetüket.

#### 7.6. Milyen további funkciókat tervezel bevezetni, például karakterválasztás vagy ranglisták?
További funkciók közé tartozik a karakterválasztás lehetősége, ahol a játékosok különböző karakterek közül választhatnak. Emellett tervezünk ranglistákat és eredményeket is, hogy a játékosok versenghessenek egymással.

#### 7.7. Hogyan fog zajlani a tesztelés és a hibajavítás folyamata?
A játék alaposan tesztelésre kerül majd, hogy az összes funkcionalitás jól működjön. A tesztek során felderített hibákat gyorsan javítani fogjuk, hogy a játék minősége megfelelő legyen.

#### 7.8. Hogyan készülsz a projekt dokumentációjára?
A projekt dokumentációja tartalmazni fogja a játékmenet részletes leírását, az irányítás magyarázatát és egyéb alapvető információkat a játékkal kapcsolatban. Ez a dokumentáció segíteni fogja a játékosokat a játék megértésében és használatában.

#### 7.9. Milyen projektmenedzsment módszertanokat alkalmazol a projekt során?
A projekt során egy átfogó ütemtervet követünk majd, hogy biztosítsuk a határidők betartását, és a fejlesztési folyamat zökkenőmentes legyen.

#### 7.10. Milyen jogi és engedélyezési szempontokra kell figyelned a játék terjesztése során?
A projekt során figyelemmel kell lenni az esetleges szerzői jogi és adatvédelmi előírásokra, és szükség esetén engedélyeket kell szerezni a játék terjesztéséhez.

Ezek a tervek és célok alapján fogunk nekivágni a játék fejlesztésének, és reméljük, hogy egy szórakoztató és sikeres játékot hozunk létre a játékosok számára.

### **8. Fogalomszótár:**
- **Bomberman**: Egy 2D-s akció-játék sorozat, amelyben a játékosok robbanószereket helyeznek el a pályán, és megpróbálják kiejteni egymást.
- **Klón**: Egy olyan játék vagy alkalmazás, amely az eredeti játék alapján készül, de általában tartalmaz saját egyedi elemeket vagy változtatásokat.
- **Offline Multiplayer**: A játék módja, amely lehetővé teszi két játékos számára, hogy ugyanazon a gépen játszhasson, anélkül, hogy internetkapcsolatot igényelne.
- **Robbanószer**: Olyan virtuális tárgy a játékban, amelyet a játékosok elhelyezhetnek a pályán, és amely időzített robbanással rendelkezik.
- **Pixelart**: Egy grafikai stílus, amelyben a képek vagy karakterek kis pixel méretű részletekből állnak össze, és a retró játékokra emlékeztető vizuális hatást hoz létre.
- **Power-up**: Speciális tárgyak a játékban, amelyek ideiglenesen növelik a karakterek képességeit, például sebességet vagy bomba hatósugárát.
- **Ranglista**: Egy lista vagy táblázat, amelyen a játékosok pontszámait vagy eredményeit rögzítik, hogy versengjenek egymással.
- **Dokumentáció**: Az alkalmazás vagy projekt részletes leírása és útmutatója, amely tartalmazza a játékmenetet, az irányítást és egyéb alapvető információkat.
- **Projektmenedzsment**: A projekt szervezése és irányítása, beleértve az ütemterv készítését és a határidők betartását.
- **Engedélyek és jogi megfontolások**: Azok a szabályok és előírások, amelyeket be kell tartani a játék terjesztése során, beleértve a szerzői jogi és adatvédelmi előírásokat.
- **Hibajelentés**: A felhasználóknak biztosított mechanizmus vagy folyamat a játékban lévő hibák vagy problémák bejelentésére a fejlesztők számára.
- **Tesztelés és hibajavítás**: A játék alapos ellenőrzése és tesztelése a hibák felderítése és javítása érdekében.
- **Ütemterv**: Egy időszakos tervezet vagy terv, amely meghatározza, mikor és milyen feladatokat kell végrehajtani a projektben.
    