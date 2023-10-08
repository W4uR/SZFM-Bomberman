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

- **Mentés és betöltés:** Ha egy meccs megszakításra kerül, akkor egyik játékosnak se fog változni a pontszáma a ranglistán. Egy megszakított meccs **NEM** menthető és tölthető be később.

- **Hibakezelés és biztonság:** A rendszer "hibája", hogy nincs authentikáció. Így bárki játszhat bárki nevében. Ezáltal a ranglista nem feltétlen tükrözi a játékosok valódi teljesítményét. Ha továbbfejelsztésre kerülne a játék és lenne online többjátékos támogatás. Akkor implementálható lenne egy bejelentkező felület és a ranglista csak az online meccseket venné figyelembe.
Mivel a játéklogikáért JavaScript felel így könnyen elhetséges csalni a játékban.

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
- **Robbanás**: Játékosoknak és falaktak sebzést okozó objektum.
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

 - **Használati Esetek:**
        @startuml
        title "Játékosok"
        package Játékosok{
        actor "Játékos 1"as p1#line:red;line.bold
        actor "Játékos 2" as p2#line:green;line.bold
        }
        actor "Adatbázis" as db
        actor "Ranglista" as rl
        actor "Karakter 1" as c1#line:red;
        actor "Karakter 2" as c2#line:green;
        actor "Hiba" as bug
        :Játékosok: -right-> (Megtekint)
        (Megtekint) -right-> :rl:
        :rl: -right-> (Lekérdez) 
        (Lekérdez) -right-> :db:
        :Játékosok: -down-> (Játékot indít)
        :Játékosok: -right-> (Jelent)
        (Jelent) -right-> :bug:
        :bug: --> (Tárol)
        (Tárol) --> :db:
        :p1: --> (Irányít)#line:red;
        :p2: --> (Irányít)#line:green;
        (Irányít) -right-> :c1:#line:red;
        (Irányít) -left-> :c2:#line:green;
        @enduml
![image](https://github.com/W4uR/SZFM-Bomberman/assets/37939001/063b5c0a-c1b8-433a-8e88-b43b09f98398)


- **Diagramok:**

        @startuml
        title Renderelési sorrend
        participant Bombák as b
        participant Erősítések as pu
        actor       Játékosok as p
        participant "Falak és Akadályok" as w
        participant Robbanások as e
        participant Megjelenítő as c #99FF99
        b -> c : Render
        pu -> c : Render
        p -> c : Render
        w -> c : Render
        e -> c : Render
        @enduml
![image](https://github.com/W4uR/SZFM-Bomberman/assets/37939001/e1d8f9c7-0b95-47ce-8f78-eb359534e24a)

        @startuml
        title Erősítések felvétele
        actor       Játékos as p
        participant Erősítés as pu
        p -> pu : Mozgás
        p -> pu : Közelség detektálása
        p -> pu: Effekt igénylése
        pu -> p: Effekt alkalmazása
        @enduml
![image](https://github.com/W4uR/SZFM-Bomberman/assets/37939001/4524a455-5383-4da7-8c69-4802bd3f3ded)

        @startuml
        title Játékos egy "tick"-je
        start
        :Input kezelése;
        :Mozgás;
        :Érintett robbanások észlelése;
        :Érintett erősítések észlelése;
        end
        @enduml
   ![image](https://github.com/W4uR/SZFM-Bomberman/assets/37939001/8cf63cee-4093-4334-bcf1-cbce19177fe5)

 *Minden sor egy meghívott metódus a **Player.update()** metódusában.*




### Funkcionális Felépítés:

- **Komponensek:** TODO

- **Adatszótár és Logikai Adatmodell:** TODO

- **Adatszótár:**  TODO

- **Logikai Adatmodell:**  TODO

- **Adatfolyam Diagramok:** TODO
