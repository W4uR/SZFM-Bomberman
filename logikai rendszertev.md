### Üzleti Folyamatok Modellje:

#### Business Domain Modell:
- **Játékmenet és szabályok:** Amikor egy meccs elindul a játékosok karaktereik előre meghatározott pontjára "Spawnolnak" a pályának. Egymástól kellően távol. A karakterek nem tudják elhagyni a pálya területét. Minden bomba midnen karaktert tud sebezni.

- **Játékosok és karakterek:** A karakterek megegyezző statokkal kezdenek. 

- **Pályák:** A pályák tervezése során oda kell figyelni arra, hogy ne legyenek olyan akadályokkal elzárt területek, ahol rombolható falak is vannak. A pályák tervezésének része azok tesztelése is.

- **Grafika és hang:** A játék "felülnézetes" 2D-s pixel grafikát használ. A hangok is régi stílusú játékokhoz hasonlóak.

- **I/O és felhasználói interfész:** A menüben a navigálás számítógépegérrel történik. A karakterek irányítása (mozgás és akció) pedig billentyűzettel. Fontos, hogy egy billentyű, egy feladatot lásson el, ne legyen átfedés. 

    **Alapértelmezett irányítás:**
    - Játékos 1:
        - Mozgás: W, A, S, D (FEL, BALRA, LE, JOBBRA)
        - Akció: SPACE (BOMBA LERAKÁSA)
    - Játékos 2:
        - Mozgás: Kurzorbillentyűk (A NYILAKNAK MEGFELEŐ IRÁNY)
        - Akció: ENTER (BOMBA LERAKÁSA)

- **Mozgás és ütközések:** A játéktér ugyan rácshoz kötött, de a karakterek szabadon mozoghatnak. Egymással és bombákkal nem ütköznek, csak falakkal és akadályokkal.

- **Multiplayer támogatás:** Csak lokálisan egy böngészőben.

- **Mentés és betöltés:** Ha egy meccs megszakításra kerül, akkor egyik játékosnak se fog változni a pontszáma a ranglistán. Egy megszakított meccs NEM menthető és tölthető be később.

- **Hibakezelés és biztonság:** A rendszer "hibája", hogy nincs authentikáció. Így bárki játszhat bárki nevében. Ezáltal a ranglista nem feltétlen tükrözi a játékosok valódi teljesítményét. Ha továbbfejelsztésre kerülne a játék és lenne online többjátékos támogatás. Akkor implementálható lenne egy bejelentkező felület és a ranglista csak az online meccseket venné figyelembe.

- **Teljesítmény és optimalizáció:** A játék grafikai megvalósításának és egyszerűségének köszönhetően könynedén, szaggatás nélkül játszható a legtöbb mai számítógépen futtatott modern böngészőben.

#### Üzleti Szereplők:
- **Játékosok**: Alapvetően 2 felhasználó, akik egyidőben, egyhelyen egy böngészőben játszhatnak a játékkal.
- **Adminisztrátork**: Nekik van jogosultságuk hozzáférni és módosítani a rendszer hátterében lévő adatbázist.

#### Üzleti Entitások:
- **Játkos karakter**: Egy krakterhez egy játékos van rendelve, aki irányítani tudja.
- **Pálya**: A pálya egy 2 dimenziós rácsalapú játéktér, amiben a karakterek mozognak. A pálya falakból és akadályokból épülnek fel.
    - **Fal**: Rombolható mozgást korlátozó pályaelem. Felrobbantásuk felfedhet egy "Power-Up"-ot.
    - **Akadály**: Statikus mozgást korlátozó pályaelem.
- **Bomba**: A pálya-rács egy cellájában elhelyezve késleltetés után felrobban. A négy irányba (fel, le, balra, jobbra) terjed a robbanása egy adott távolságot.
- **Power-Up**: Karakterek által felvehető átmeneti, vagy a meccs végéig tartós erősítéstsel ruházik fel a felvevő karaktert.

### Követelmények:

- **Funkcionális Követelmények:**
    - A játék elindítható.
    - Csak eddig nem ismert hibákkal találkozhatunk.
    - Lehetőség van a korábban említett hibák jelentésére.
    - A megjelenés mindig ugyan olyan egy teljes képernyős böngésző ablakban egy FullHD-s monitoron.
    - A bombák felrobbanak.
    - A karakterek irányíthatóak.
    - A falak rombolhatóak.

- **Nemfunkcionális Követelmények:**
    - Skálázhatóság.
    - Nem rendelkezik semmi, a játékhoz nem köthető, rejtett funkcióval.


### Feldolgozási Folyamatok:

 - **Használati Esetek:** TODO

- **Aktivitási Diagramok:** TODO
- **Állapotgépek:** TODO

- **Szekvencia Diagramok:**

        @startuml
        title Placing bombs
        actor       Player as p
        participant Bombplacer as bp
        participant Bomb as b
        participant Explosion as e
        collections "Cell's children" as cc
        p -> bp : Indicate will
        bp -> bp : Check for validity
        bp -> p : Request position
        p -> bp : Return position
        bp -> b : Create at position \n(Convert to grid coords)
        b -> cc : Append self
        b -> b : Delay
        b -> cc : Append explosion
        b -> cc : Remove self
        e -> cc : Recursive expansion \nand appending
        e -> e : Delay
        e -> cc : Remove self
        @enduml



### Funkcionális Felépítés:

- **Komponensek:** TODO

- **Adatszótár és Logikai Adatmodell:** TODO

- **Adatszótár:**  TODO

- **Logikai Adatmodell:**  TODO

- **Adatfolyam Diagramok:** TODO
