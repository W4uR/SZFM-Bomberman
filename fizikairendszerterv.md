### **1. Osztálytervek:**

![image](https://github.com/W4uR/SZFM-Bomberman/assets/37939001/bb596182-a443-4e79-aff2-2ccb6a52b0e5)

#### 1.1 Global variables
##### Variables
- SCALE - <<a>int> - Grid koordináta és pixel koordináta közti váltásoknál használatos skálázó faktor.
- player1 - <<a>Player> - Player1 reprezentációja.
- player2 - <<a>Player> - Player2 reprezentációja.
- rows - <<a>int> - Sorok száma.
- cols - <<a>int> - Oszlopok száma.
- grid - <<a>Cell[][]> - A játéktér reprezentációja.
- powerUps - <<a>PowerUp[..]> - A pályán lévő erősítések.
- deltaTime - <<a>float> - Eltelt idő másodpercben, kettő frame renderelése között.

#### 1.2 PowerUP
##### Variables
- x - <<a>int> - A powerUP helyzetének X koordinátája.
- y - <<a>int> - A powerUP helyzetének Y koordinátája.
- width - <<a>int> - A megjelenő objektum szélessége.
- duration - <<a>float> - A powerUP hátásának időtartama. (0, ha permanens)
- collectedBy - <<a>Player> - Tárlja, hogy melyik játékos vette fel a powerUp-ot.
- isCollected - <<a>boolean> - Arra szolgál, hogy eldöntse a powerUP felvételre került-e már.
- sprite - <<a>Image> - A képernyőn megjelnő grafikák.
##### Methods
- applyEffect(player : Player) - <<a>void> - A powerUP alkalmazása a játékosra.
- show() - PowerUp megjelnítése a pályán.
##### PowerUPs
- BiggerExplosion - Növeli a bomba robbanásának hatósugarát.
- MoreBombs - A játékosonkénti egyideűleg lerakható bombák számát növeli.
- Heal - Játékost gyógyítja.
- SpeedBoost - Játékos karakterének mozgási sebességét növeli.
- Shield - Játékosra alkalmazott sebzést csökkenti. 
- MoreDamage - A bomba által okozott sebzést növeli.
- InverseMovement(of enemy) - Megfordítja az ellenfél mozgását.

#### 1.3 Player
##### Variables
- x - <<a>int> - A játékos helyzetének X koordinátája.
- y - <<a>int> - A játékos helyzetének Y koordinátája.
- width - <<a>int> - A megjelenő objektum szélessége.
- maxHealth - <<a>int> - A játékos maximum életereje.
- health - <<a>int> - A játékos életereje.
- speed - <<a>float> - A játékos sebessége.
- velocity - <<a>2dvector> - A játékos mozgásának iránya.
- bombTemplate - <<a>Bomb> - Ez alapján inicializálódik egy -a játékos által- lerakott bomba. Ha egy erősítés módosít valamit, ami a játékos által letett bombához köthető (pl.: hatósugár növelése) akkor a  bombTemplate-t fogja módosítani
- bombs - <<a>Bomb[..]> - A lerakott bomba a bombs listába kerül.
- maxBombs - <<a>int> - A játékos által maximálisan lerakható bombák száma.
- inputModule - <<a>InputModule> - A jétkoshoz tartozó írányítást tárolja.
- sprite - <<a>Image> - A képernyőn megjelnő grafika.
##### Methods
- handleInput() - <<a>void> - Az input információk kezelése.
- move() - <<a>void> - A játékos mozgását vezérli.
- placeBomb() -  <<a>void> - A bomba lerakásáért felelős.
- collidesWith(other) - <<a>boolean> - Ütközik-e a karakter egy adott objektummal.
- takeDamage(amount : int) - <<a>void> - Azért felel, hogy a játékost ért sebzés változtasson az életerején.
- update() - Framenként meghívásra kerül.
- show() - Megjeleníti a karaktert az adott pozíción.

#### 1.4 InputModule
##### Variables
- up - <<a>int>
- left - <<a>int>
- down - <<a>int>
- right - <<a>int>
- action - <<a>int> - Pl egy bomba lerakása.
- Azért int mert az írányításnál a (W,A,S,D) karaktereket számokkal reprezentáljuk.
##### Methods
- inverse() - <<a>void> - Megfordítja az irányítást.
- reset() - <<a>void> - Visszaállítja az irányítást az eredetire.

#### 1.5 Bomb
##### Variables
- x - <<a>int> - A bomba X koordinátája.
- y - <<a>int> - A bomba Y koordinátája.
- width - <<a>int> - Egy megjelnő objektum szélessége.
- owner - <<a>Player> - A bomba tulajdonosát tárolja.
- delay - <<a>float> - A letételtől a robbanásig eltelt idő.
- radius - <<a>int> - A bomba robbanási hatósugara.
- damage - <<a>int> - A bomba sebzése.
- sprite - <<a>Image> - A megjelenő grafika.
##### Methods
- explode() - <<a>void> - A bomba felrobbantásáért felelős metódus.
- show() - <<a>void> - A bomba megjelenítéséért felelős metódus.

#### 1.6 Cell
##### Variables
- x - <<a>int> - Egy cella X koordinátája.
- y - <<a>int> - Egy cella Y koordinátája.
- width - <<a>int> - Egy megjelnő objektum szélessége.
- wall - <<a>WallType> - A fal típusa (rombolható, nem rombolható).
##### Methods
- isWall() - <<a>void> - Eldönti, hogy az adott cellán található e bármilyen fal.
- destoryWall() - <<a>void> - Robbanás hatására, lerombolja a falat.
- show() - <<a>void> - Egy cella megjelnítéséért felelős.

#### 1.7 WallType
##### Variables
- empty - <<a>string> - Az adott cellán nincs fal.
- wall - <<a>string> - A lerombolható falat jelzi.
- barrier - <<a>string> - A nem lerombolható falat jelzi.

#### 1.8 Explosion
##### Variables
- x - <<a>int> - Egy robbanás objektum X koordinátája.
- y - <<a>int> - Egy robbanás objektum Y koordinátája.
- width - <<a>int> - Egy megjelnő objektum szélessége.
- lifetime - <<a>float> - Az időtartam ameddig a robbanása látható.
- damage - <<a>int> - A robbanás által okozott sebzés.
- sprite - <<a>Image> - A megjelenő grafika.
##### Methods
- show() - <<a>void> - A robbanás megjelnítéséért felelős.

### **3. Adatbázis terv:**
    @startuml
    !define Table1 class
    !define Table2 class
    !define Table3 class
    !define Table4 class
    !define PK_FIELD <u>PK</u>
    !define FK_FIELD <b>FK</b>
    Table1 Player {
    PlayerName: VARCHAR(20) PK_FIELD
    --
    SkinID: INT UNSIGNED FK_FIELD
    Points: INT
    }
    Table2 Resource {
    ResourceID: INT UNSIGNED PK_FIELD
    destPath: VARCHAR(40)
    }
    Table3 Map {
    MapID: INT AUTO_INCREMENT PK_FIELD
    --
    MapData: JSON
    }
    Table4 BugReport {
    BugID: INT UNSIGNED AUTO_INCREMENT PK_FIELD
    BugDescription: VARCHAR(150)
    }
    Player "1" -- "1" Resource : SkinID - ResourceID
    @enduml

![kép](https://github.com/W4uR/SZFM-Bomberman/assets/70896019/7f0f4b86-6fb1-49ab-9a58-6505a9232f8b)

### **3. Teszttervek:**
#### 3.1 Funkcionális tesztek:
- Játékkezdeti teszt: Ellenőrizzük, hogy a játék elindul-e          megfelelően, és a főmenüből elérhetők-e a különböző játékmenük.

- Karakter mozgatás: Ellenőrizzük, hogy a játékos karaktereket lehessen-e mozgatni a pályán, és hogy ne tudjanak átmenni falakon vagy más akadályokon.

- Bomba lerakás: Teszteljük, hogy a játékosok képesek-e bombát lerakni, és hogy a bombák megfelelően robbannak-e.

- Power-up-ek: Ellenőrizzük, hogy a játékosok fel tudják-e venni az erősítőket, és hogy azok helyesen működnek-e (például növelik-e a sebességet vagy a lerakható bombák számát).

- Játék befejezése: Ellenőrizzük, hogy a játék megfelelően fejeződik-e be, például ha minden ellenfél legyőzésre került vagy egy meghatározott cél elérésre került.

#### 3.2 Grafikai tesztek:
- Grafikus elemek rendben: Ellenőrizzük, hogy a játék grafikai elemei (karakterek, pályaelemek, bombák) megfelelően jelennek-e meg a képernyőn.

### **4. Telepítési terv:**
#### 4.1 Célpont platform kiválasztása:
- Határozzuk meg, hogy mely platformokra kívánjuk telepíteni a játékot. Most webböngésző lesz.

#### 4.2 Fejlesztői környezet telepítése:
- Telepítsük a megfelelő fejlesztői környezetet és eszközöket a játék fejlesztéséhez és buildeléséhez.

#### 4.3 Tesztelés:
- Teszteljük az elkészült verziót, hogy meggyőződjünk a stabil működésről és a hiánytalan funkciókról.

#### 4.4 Telepítési folyamat kialakítása:
- Készítsünk egy telepítési folyamatot, amely részletesen leírja a telepítés lépéseit, a szükséges eszközöket és a feltételeket.

#### 4.5 Webtelepítés:
- A játékot közvetlenül egy weboldalon vagy webalkalmazásként is elérhetővé tehetjük. Ehhez a játékot egy webes szerverre kell feltölteni, és gondoskodni kell a megfelelő webböngésző támogatásról.

### **6. Szoftver architektúra:**
#### 6.1 Felhasználói felület (UI):
- A játékfelület, amely a játékosok interakcióját és a játékállapot megjelenítését teszi lehetővé.
- Tartalmazza a játék kezelőfelületét, menürendszert és karakterek animációját.

#### 6.1 Játéklogika:
- Az alkalmazás központi komponense, amely irányítja a játékmenetet.
- Tartalmazza a játék szabályainak végrehajtását, például a karakterek mozgását, bombák robbanását és pontszámok számítását.

#### 6.1 Pályagenerátor:
- A játékpályák generálásáért és kezeléséért felelős komponens. Segít létrehozni a játékteret, beleértve a falakat, az erősítőket.

#### 6.1 Adatbáziskezelő:
- A játékosokhoz tartozó pontszámok tárolásáért felelős.
