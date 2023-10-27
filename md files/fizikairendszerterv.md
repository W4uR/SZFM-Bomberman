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
- bombs - <<a>Bomb[..]> - A pályán lévő bombák.
- explosions - <<a>Explosion[..]> - A pályán lévő robbanások.
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

### **2. Adatbázis terv:**
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
    ResourceID: VARCHAR(20) NOT NULL PK_FIELD
    --
    Sprite: LONGBLOB
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

![Adatbázis UML](https://github.com/W4uR/SZFM-Bomberman/assets/37939001/8a57037b-6169-4508-9a1d-846642a31953)


- **ResourceID megnevezési konvenciók:**
    - Minden erősítés:
        PU_ prefix-et követi a az erősítés osztályneve.
        pl.: PU_OneMoreBomb
    - Minden játékos kinézet:
        SKIN_ prefixet követi egy szám vagy fantázia név.
        pl.: SKIN_0 vagy SKIN_Rambo
    - Falak:
        CELL_wall vagy CELL_barrier
    - Háttér:
        BACKGROUND
    - Bomba:
        BOMB
    - Robbanás:
        EXPLOSION

- **Map készítés tudnivalók:**
    - rgb(255,255,255)-val jelölje a WallType.WALL elemeket.
    - rgb(0, 0, 0)-val jelölje azokat a mezőket ahol WallType.EMPTY.
    - rgb(255, 0, 0)-val jelölje azon elemeket ahol WallType.BARRIER helyezkedik el
    - rgb(0,255,0)-val az 1-es Játékos helyét jelöli a map-en.
    - rgb(0,0,255)-vel a 2-es Játékos helyét jelöli a map-en.
    - A map készítésehez egy annyi pixel szélességű és magasságű kép kell mely osztja a 600-at. 
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

### **5. Rendszerspecifikációk:**
-Legalább 8.2.4 XAMPP, HTML5, CSS3 illetve JS és annak p5 neveztű könyvtárának használata, szükség esetén PHP-val. 

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

### **7. Alkalmazás rétegei:**
Különválaszthatók a modell, a nézet és a vezérlő rétegek.

### **8. Adatspecifikációk/objektumspecifikációk (környezetfüggő adattervek):**
#### 8.1 Adatspecifikációk:
- Player (Játékos) Tábla Adatspecifikációja:
    - Mezők:
        - PlayerName (Játékos név): A játékos neve.
        - Points (Pontok): A játékos aktuális pontszáma.
        - SkinID (Erőforrás azonosító): Azonosító az erőforráshoz (skin).

- Resource (Erőforrás) Tábla Adatspecifikációja:
    - Mezők:
        - ResourceID (Erőforrás azonosító): Egyedi azonosító az erőforráshoz.
        - destPath (Célútvonal): Az erőforrás fájl elérési útvonala (pl., kép).

- Map (Pálya) Tábla Adatspecifikációja:
    - Mezők:
        - MapID (Pálya azonosító): Egyedi azonosító a pályához.
        - MapData (Pályadata): A pálya adata JSON formátumban, ami tartalmazza a pálya felépítését (falak, üres cellák stb.).

- BugReport (Hibajelentés) Tábla Adatspecifikációja:
    - Mezők:
        - BugID (Bug azonosító): Egyedi azonosító a hibajelentéshez.
        - BugDescription (Hibajelentés szövege): A hibajelentéshez tartozó szöveges leírás.

#### 8.2 Objektumspecifikációk:
##### 8.2.1 PowerUP
Változók
- x
    - Típus: int
    - Leírás: A PowerUP helyzetének X koordinátája.
- y
    - Típus: int
    - Leírás: A PowerUP helyzetének Y koordinátája.
- width
    - Típus: int
    - Leírás: A megjelenő objektum szélessége.
- duration
    - Típus: float
    - Leírás: A PowerUP hatásának időtartama. (0, ha állandó)
- collectedBy
    - Típus: Player
    - Leírás: Tárolja, hogy melyik játékos vette fel a PowerUp-ot.
- isCollected
    - Típus: boolean
    - Leírás: Az eldöntésére szolgál, hogy a PowerUP felvételre került-e már.
- sprite
    - Típus: Image
    - Leírás: A képernyőn megjelenő grafikák.

Metódusok
- applyEffect(player: Player)
    - Visszatérési típus: void
    - Leírás: A PowerUP alkalmazása a játékosra.
- show()
    - Visszatérési típus: void
    - Leírás: A PowerUp megjelenítése a pályán.

##### 8.2.2 Player
Változók
- x
    - Típus: int
    - Leírás: A játékos helyzetének X koordinátája.
- y
    - Típus: int
    - Leírás: A játékos helyzetének Y koordinátája.
- width
    - Típus: int
    - Leírás: A megjelenő objektum szélessége.
- maxHealth
    - Típus: int
    - Leírás: A játékos maximális életereje.
- health
    - Típus: int
    - Leírás: A játékos jelenlegi életereje.
- speed
    - Típus: float
    - Leírás: A játékos sebessége.
- velocity
    - Típus: 2D vektor
    - Leírás: A játékos mozgásának iránya.
- bombTemplate
    - Típus: Bomb
    - Leírás: Ez alapján inicializálódik egy - a játékos által - lerakott bomba. Ha egy erősítés módosít valamit, ami a játékos által letett bombához kapcsolódik (pl.: hatósugár növelése), akkor a bombTemplate-t módosítja.
- bombs
    - Típus: Bomb[..]
    - Leírás: A lerakott bombák a bombs listába kerülnek.
- maxBombs
    - Típus: int
    - Leírás: A játékos által maximálisan lerakható bombák száma.
- inputModule
    - Típus: InputModule
    - Leírás: A játékhoz tartozó irányítást tárolja.
- sprite
    - Típus: Image
    - Leírás: A képernyőn megjelenő grafika.

Metódusok
- handleInput()
    - Visszatérési típus: void
    - Leírás: Az input információk kezelése.
- move()
    - Visszatérési típus: void
    - Leírás: A játékos mozgását vezérli.
- placeBomb()
    - Visszatérési típus: void
    - Leírás: A bomba lerakásáért felelős.
- collidesWith(other)
    - Visszatérési típus: boolean
    - Leírás: Ellenőrzi, hogy a karakter ütközik-e egy adott objektummal.
- takeDamage(amount: int)
    - Visszatérési típus: void
    - Leírás: Azért felel, hogy a játékos életét érő sebzés változtasson az életerején.
- update()
    - Visszatérési típus: void
    - Leírás: Minden képkocka frissítésekor meghívódik.
- show()
    - Visszatérési típus: void
    - Leírás: Megjeleníti a karaktert az adott pozíción.

##### 8.2.3 InputModule
Változók
- up
    - Típus: int
    - Leírás: Az "fel" irányítás reprezentációja.
- left
    - Típus: int
    - Leírás: Az "balra" irányítás reprezentációja.
- down
    - Típus: int
    - Leírás: Az "le" irányítás reprezentációja.
- right
    - Típus: int
    - Leírás: Az "jobbra" irányítás reprezentációja.
- action
    - Típus: int
    - Leírás: Az "akció" reprezentációja. Például egy bomba lerakása.

Metódusok
- inverse()
    - Visszatérési típus: void
    - Leírás: Megfordítja az irányítást.
- reset()
    - Visszatérési típus: void
    - Leírás: Visszaállítja az irányítást az eredeti állapotra.

##### 8.2.4 Bomb
Változók
- x
    - Típus: int
    - Leírás: A bomba X koordinátája.
- y
    - Típus: int
    - Leírás: A bomba Y koordinátája.
- width
    - Típus: int
    - Leírás: Egy megjelenő objektum szélessége.
- owner
    - Típus: Player
    - Leírás: A bomba tulajdonosát tárolja.
- delay
    - Típus: float
    - Leírás: A bomba letételtől a robbanásig eltelt idő.
- radius
    - Típus: int
    - Leírás: A bomba robbanási hatósugara.
- damage
    - Típus: int
    - Leírás: A bomba sebzése.
- sprite
    - Típus: Image
    - Leírás: A megjelenő grafika.

Metódusok
- explode()
    - Visszatérési típus: void
    - Leírás: A bomba felrobbantásáért felelős metódus.
- show()
    - Visszatérési típus: void
    - Leírás: A bomba megjelenítéséért felelős metódus.

##### 8.2.5 Cell
Változók
- x
    - Típus: int
    - Leírás: Egy cella X koordinátája.

- y
    - Típus: int
    - Leírás: Egy cella Y koordinátája.

- width
    - Típus: int
    - Leírás: Egy megjelenő objektum szélessége.

- wall
    - Típus: WallType
    - Leírás: A fal típusa (rombolható, nem rombolható).

Metódusok
- isWall()
    - Visszatérési típus: void
    - Leírás: Eldönti, hogy az adott cellán található-e bármilyen fal.

- destroyWall()
    - Visszatérési típus: void
    - Leírás: Robbanás hatására lerombolja a falat.

- show()
    - Visszatérési típus: void
    - Leírás: Egy cella megjelenítéséért felelős metódus.


##### 8.2.6 WallType
Változók
- empty
    - Típus: string
    - Leírás: Az adott cellán nincs fal.

- wall
    - Típus: string
    - Leírás: A lerombolható falat jelzi.

- barrier
    - Típus: string
    - Leírás: A nem lerombolható falat jelzi.

##### 8.2.7 Explosion
Változók
- x
    - Típus: int
    - Leírás: Egy robbanás objektum X koordinátája.
- y
    - Típus: int
    - Leírás: Egy robbanás objektum Y koordinátája.
- width
    - Típus: int
    - Leírás: Egy megjelenő objektum szélessége.
- lifetime
    - Típus: float
    - Leírás: Az időtartam, ameddig a robbanás látható.
- damage
    - Típus: int
    - Leírás: A robbanás által okozott sebzés.
- sprite
    - Típus: Image
    - Leírás: A megjelenő grafika.

Metódusok
- show()
    - Visszatérési típus: void
    - Leírás: A robbanás megjelenítéséért felelős metódus.

### **Programspecifikációk:**
Felhasználói Interfész (UI) Specifikáció:

    A játék felhasználói felülete tartalmaz egy kezdőképernyőt (menü), amelyen a játékosok kiválaszthatják, hogy tovább haladnak a játék indítása felé vagy pedig a Ranglistát tekintik meg.
    A játékban találhatóak gombok és vezérlőelemek, amelyek lehetővé teszik a játékosoknak a mozgást, bombák lerakását és egyéb interakciókat.
    A ranglistát a játékosok nevével és pontjaival jelenítjük meg a képernyőn.

Játékmenet Specifikáció:

    A játékosok célja a másik ellenfél felrobbantása.
    A játékban vannak power-up-ok, amelyek segíthetik vagy akadályozhatják a játékosokat.
    A játék fő mechanikái közé tartozik a bombák lerakása, a bombák robbanásának hatósugara és sebzése, valamint a játékosok életereje.

Multiplayer Funkcionalitás Specifikáció:

    A többjátékos mód lehetővé teszi a játékosok számára, egy számítógép előtt együtt játszhassanak egymás ellen.

Grafikai és Hang Specifikáció:

    A játékban találhatók animált karakterek és pályaelemek.
    A játék hanghatásokat tartalmaz, például bombák robbanását és játékos mozgását kísérő hangokat.

Adatbázis és Ranglista Specifikáció:

    Az adatbázisban tároljuk a játékosok nevét és pontszámát, valamint a játékoshoz tartozó skin-eket.
    A ranglistát a játékosok pontszámai alapján rangsoroljuk és jelenítjük meg.
