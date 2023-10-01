### **1. Osztálytervek:**
#### 1.1 Player (Játékos) osztály:
- Felelősség: A játékos karakterének kezelése.
- Tulajdonságok:
    - PlayerID: A játékos azonosítója.
    - Name: A játékos neve.
    - Hp: A játékos életereje.
    - Score: A játékos pontszáma.
- Metódusok:
    - Move(): A játékos mozgatása a pályán.
    - PlaceBomb(): Bomba lerakása.

#### 1.2 Bomb (Bomba) osztály:
- Felelősség: A bombák működésének kezelése.
- Tulajdonságok:
    - Timer: A bomba robbanásig hátralévő idő.
    - BlastRadius: A bomba robbanásának hatósugara.
    - Place: A bomba helyzete a pályán.
- Metódusok:
    - Explode(): A bomba robbanása és hatásai.

#### 1.3 Map (Pálya) osztály:
- Felelősség: A játék pályájának kezelése.
- Tulajdonságok:
    - Grid: A pálya rácsa, amelyen a játékosok és a bombák elhelyezkednek.
    - Elements: A pályaelemek, például falak, power-up-ok, ajtók stb.
- Metódusok:
    - GenerateMap(): A pálya generálása véletlenszerűen vagy előre definiált módon.

#### 1.4 PowerUp (Erősítő) osztály (opcionális):
- Felelősség: Az erősítők kezelése, amelyeket a játékosok felvehetnek.
- Tulajdonságok:
    - Type: Az erősítő típusa, például sebesség növelése, bombaszám növelése.
- Metódusok:
    - ApplyEffect(): Az erősítő hatásának alkalmazása a játékosra.

### **2. Teszttervek:**
#### 2.1 Funkcionális tesztek:
- Játékkezdeti teszt: Ellenőrizzük, hogy a játék elindul-e          megfelelően, és a főmenüből elérhetők-e a különböző játékmenük.

- Karakter mozgatás: Ellenőrizzük, hogy a játékos karaktereket lehessen-e mozgatni a pályán, és hogy ne tudjanak átmenni falakon vagy más akadályokon.

- Bomba lerakás: Teszteljük, hogy a játékosok képesek-e bombát lerakni, és hogy a bombák megfelelően robbannak-e.

- Power-up-ek: Ellenőrizzük, hogy a játékosok fel tudják-e venni az erősítőket, és hogy azok helyesen működnek-e (például növelik-e a sebességet vagy a lerakható bombák számát).

- Játék befejezése: Ellenőrizzük, hogy a játék megfelelően fejeződik-e be, például ha minden ellenfél legyőzésre került vagy egy meghatározott cél elérésre került.

#### 2.2 Grafikai tesztek:
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
