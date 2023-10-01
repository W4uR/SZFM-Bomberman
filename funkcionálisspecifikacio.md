### 1. A rendszer céljai és nem céljai
**Céljai:**

- **Offline Multiplayer Élmény Nyújtása:** A projekt fő célja egy szórakoztató offline multiplayer játék létrehozása, amely lehetővé teszi két játékos számára, hogy egy gépen játszhasson együtt. A játéknak élvezetesnek és izgalmasnak kell lennie a játékosok számára.

- **Klasszikus Bomberman Élmény Rekreálása:** A játék célja egy klasszikus Bomberman élmény nyújtása, amelyben a játékosok robbanószereket helyezhetnek el a pályán és megpróbálják kiejteni egymást, miközben különböző akadályokkal és lehetőségekkel találkoznak.

- **Böngészőből Való Játszhatóság:** A játék böngészőből való játszhatósága fontos cél, hogy a játékosok könnyen és gyorsan hozzáférhessenek a játékhoz, anélkül, hogy különféle letöltéseket vagy telepítéseket kellene végrehajtaniuk.

- **Grafikai és Hangminőség:** A játék megjelenése és hangzásvilága fontos szempont. A pixel art stílusú grafika és a hangok segítenek a játék hangulatának megteremtésében és javításában.

- **Egyszerű Irányítás:** Az irányításnak intuitívnak és könnyen megtanulhatónak kell lennie, hogy a játékosok gyorsan be tudjanak kapcsolódni a játékba és élvezhessék azt.

- **További Funkciók:** A játék célja további funkciók bevezetése, például karakterválasztás és ranglisták, hogy további mélységet és visszatérő játékélményt nyújtson.

- **Tesztelés és Hibajavítás:** A projekt célja az alapos tesztelés és a játékban felfedezett hibák gyors és hatékony javítása a kiadások előtt és után.

**Nem Céljai:**

- **Online Multiplayer Mód:** A projekt nem tervezi online multiplayer mód bevezetését. A fő hangsúly az offline multiplayer élményen van.

- **Mobil Platformok Támogatása:** A játék nem tervezi mobil platformok támogatását. A fő platform a webböngésző lesz.

- **Bonyolult Számítógépes Intelligencia:** Az AI-ellenfelek fejlesztése nem tartozik a projekt céljai közé.

### 8. Használati Esetek

### 10. Képernyőtervek

#### 10.1.1 Főmenü
- **#1** - Bogár ikon. Erre kattintva nyitható meg a hibajelentés átfedés.
- **Játék** - Erre a gombra navigálhatunk a karakterválasztó képernyőre.
- **Ranglista** - Erre a gombra navigálhatunk a Ranglistához.
![Főmenü](https://github.com/W4uR/SZFM-Bomberman/assets/37939001/3b696245-b91e-43d9-86d7-c472f1c4cb94)

#### 10.1.2 Főmenü (Hibajelentés átfedés)
- **#1** - Hibaleíró textbox. A felhasználó ide tudja leírni a hiba leírásást.
- **Küldés** - Erre a gombra kattintva küldi el a szervernek a hibajelentést.
- **Mégse** - Erre a gombra kattintva bezárható az átfedés.
![Főmenü-Bugreport](https://github.com/W4uR/SZFM-Bomberman/assets/37939001/f20642bf-1fa3-46eb-994f-8c03fc50b1c9)


#### 10.2. Karakterválasztó
- **#1** - Az 1-es játékos neve ide írható be.
- **#2** - A 2-es játékos neve ide írható be.
- **#3** - Itt jelenik meg az 1-es játkos karaktere.
- **#4** - Itt jelenik meg a 2-es játkos karaktere.
- **#5** - Karakterválasztó nyilak.
- **#6** - Erre a gombra kattintva indul a játék. Megnyílik a Játéktér.
- **#7** - Pálya előnézete.
- **#8** - Pálya választó nyilak.
- **#9** - Dobókocka ikon. Kattintásra véletlen választ egy pályát.
![Karakterválasztó](https://github.com/W4uR/SZFM-Bomberman/assets/37939001/21bcee20-5300-4563-a827-86f5d8436611)


#### 10.3.1. Játéktér
- **#1** - Az 1-es játékos statisztikája. (Játékos neve, pontja, élete, "power-up"-jai)
- **#2** - Négyszögeltes mezőkből álló pálya.
- **#3** - A 2-es játékos statisztikája. (Játékos neve, ponta, élete, "power-up"-jai)
- **#4** - Az 1-es játékos karakterének írányításának leírása.
- **#5** - A 2-es játékos karakterének írányításának leírása.
![Játéktér](https://github.com/W4uR/SZFM-Bomberman/assets/37939001/4048dc03-2ae1-4599-bbff-fd14ac40f8ca)


#### 10.3.2. Játéktér (Játék vége átfedés)
- **Új játék** - Erre a gombra kattintva visszanavigálhatunk a karakterválasztó képernyőre.
- **Főmenü** - Erre a gombra kattintva visszanavigálhatunk a főmenübe.
![Játéktér-Post-Game](https://github.com/W4uR/SZFM-Bomberman/assets/37939001/0255d907-dcdf-4bfa-8d82-c62afadaa4db)


#### 10.4. Ranglista
- **#1** - Itt jelenek meg a legjobb játékosok nevei, sorszámuk- és pontszámukkal együtt.
- **#2** - Név szerinti szűrés bemeneti bezője.
- **#3** - Nagyító ikonnal ellátott szűrést/keresést végrehajtó gomb.
- **Főmenü** - Erre a gombra kattintva visszanavigálhatunk a főmenübe.
![Ranglista](https://github.com/W4uR/SZFM-Bomberman/assets/37939001/cc312958-bc7f-4a1d-b565-79734bb78051)


### 11. Forgatókönyvek
##### 11.1. Játék lejátszása:

- A játékosok a főmenüben indíthatnak új játékot.
- Ha új játékot indítanak, lehetőségük van kiválasztani a karakterüket és a pályát.
- A játék során a játékosok irányíthatják a karakterüket, bombákat helyezhetnek, és megpróbálhatják kiejteni az ellenfelüket.
- A játék véget ér, ha az egyik játékos kiesik. A játék értesítést küld erről.

##### 11.2.Új játék indítása (játék végén):

- Amikor a játék véget ér, a játékosoknak lehetőségük van új játékot indítani vagy visszatérni a főmenübe.
- Az új játék indítása esetén a játékosok ismét kiválaszthatják karakterüket és a pályát.

##### 11.3. Ranglista megtekintése:

- A ranglistát megjelenítheti a főmenüben a "Ranglista" gombra kattintva.
- A ranglista táblán a legjobb játékosok neveik és pontszámaik láthatóak.
- A játékosok megtekinthetik a saját pontszámukat és helyezésüket a táblán.
- Lehetőség van névre szűrésre.

##### 11.4. Hibák jelentése:

- A főmenüben lehetőség van hibák vagy problémák jelentésére a "Bogár" ikonú gombra kattintva.
- Az így megjelenő átfedésen a játékosok egy rövid leírást írhatnak a problémáról.
- A "Küldés" gombra kattintva a jelentés elküdésre kerül a fejleszetőknek.

        Az ilyen jelentések segítenek a fejlesztőknek az esetleges hibák és problémák azonosításában és javításában.

