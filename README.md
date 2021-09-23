# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
<summary>Uitwerken voor kick-off werkgroep</summary>

### Auteur:
Ine van den Hoven

#### Je startniveau:
Rood

#### Je focus:
Ik ga mij focussen op responsive, maar wil ook aan de surface plane werken. 
 
</details>





## Je website

<details open>
<summary>Uitwerken voor kick-off werkgroep</summary>

### Je opdracht:
Ik ga twee pagina's van de website https://www.loavies.com/nl uitwerken.

#### Screenshot(s) van de eerste pagina (small screen): 
Homepage 
<img src="images/homepage-loavies.jpg" width="375px" alt="Dit is de homepage van de website Loavies">

#### Screenshot(s) van de tweede pagina (small screen):
Product pagina
<img src="images/productpage-loavies.jpg" width="375px" alt="Een productpagina van de website Loavies">
 
</details>





## Breakdownschets (week 1)

<details>
<summary>Uitwerken na afloop 2e werkgroep</summary>

### De hele homepagina: 
<img src="images/breakdownschets-homepage.jpg" width="375px" alt="Breakdown van de hele homepage">

### De hele productpagina: 
<img src="images/breakdownschets-productpage.jpg" width="375px" alt="Breakdown van de hele productpage">

### Dynamisch deel (bijv menu): 
<img src="images/breakdownschets-menu.jpg" width="375px" alt="breakdown van een dynamisch deel">

### Wellicht nog een dynamisch deel (bijv filter): 
<img src="images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
<summary>Uitwerken voor 1e voortgang</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

Tot nu toe gaat de opdracht redelijk goed. Het schrijven van de CSS vind ik tot nu toe erg goed gaan. Ik heb de twee pagina's nu bijna hellemaal staan. Wat ik wel lastig vind is het goed semantisch schrijven van de HTML. Ik twijfel regelmatig over of het wel semantisch correct is. 

<img src="images/semantisch.png" width="375px" alt="Is de HTML wel semantisch">
Is deze HTML wel goed semantisch?

Daarnaast kreeg ik bij het stylen van de tweede pagina wat problemen, omdat de HTML dan delen van de CSS pakt van de andere pagina. Dit komt doordat de elementen hetzelfde heten. Dit heb ik opgelost door op de body van de tweede pagina (de productpage) een id op de body te zetten. Hierdoor kan ik deze pagina stylen zonder dat deze CSS pakt van de homepage elementen.

<img src="images/achtergrond.png" width="375px" alt="CSS voor de product pagina die aan de homepage word toegevoegd">
Hier zie je de CSS die is toegevoegd voor de product pagina, maar ook aan de homepage word toegevoegd.

<img src="images/css-achtergrond.png" width="375px" alt="CSS die wordt gepakt van een element op de homepage">
De uitkomst van de CSS hierboven.

<img src="images/onderelkaar.png" width="375px" alt="Element dat fout gaat door nieuw toegevoegde CSS">
Het element gaat fout doordat er nieuwe CSS is toegevoegd aan de product pagina.

<img src="images/css-margin.png" width="375px" alt="Element dat fout gaat door nieuw toegevoegde CSS">
Door deze code staan twee elementen niet meer goed, op de homepage.

### Agenda voor meeting
samen met je groepje opstellen

| Ik             | Sterre             | Mathijs             | Arsenio          |
| ---            | ---                | ---                 | ---              |
| html semantisch| html semantisch    | Of div en classes   | HTML bekijken    |
| id gebruiken   | CSS                | goed zijn.          | CSS bekijken     |



### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Button inplaats van span gebruiken voor menu.
- Banners uit de header halen en in de main zetten.
- Headings platsen in articles en deze niet zichtbaar maken.
- H1 om SVG zetten, omdat dit het belangrijkste is en dan title op svg met wat het is.
- CSS selectors korter maken.
- Meer verschillende CSS selectors gebruiken, zoals + en >.

</details>





## Voortgang 2 (week 3)

<details>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
Deze week ben ik begonnen met het responsive maken van de twee pagina's dit vind ik van mobiel naar desktop toch wel een beetje lastig. Ik ben namelijk gewend om van desktop naar mobiel te werken. Tot nu toe heb ik een aantal onderdelen van de website resposive gemaakt, waaronder het menu, de categorieën en de slider op de homepage. 


<img src="images/menu_mobiel.png" width="375px" alt="Het menu voor mobiel">
<img src="images/menu_desktop.png" width="375px" alt="Het menu voor desktop">
Hier zie je hoe ik het menu voor mobiel heb gemaakt. Dit heb ik met grid naast elkaar gezet. Voor de desktop versie heb ik ervoor gezorgd dat het alle linkjes die voor mobiel in het hamburgermenu zitten nu in de onder de menubalk vallen.


<img src="images/categorie_mobiel.png" width="375px" alt="Categorie voor mobiel">
<img src="images/categorie_desktop.png" width="375px" alt="Categorie voor desktop">
Voor de categorieën heb ik ervoor gezorgd dat wanneer het scherm groter is dan het element deze in het midden word uitgelijnd. Op mobiel kun je namelijk opzij scrollen doormiddel van overflow-x scroll. Met Flexbox heb ik ervoor gezorgd dat dit element op desktop in het midden uitlijnd.


<img src="images/looks_mobiel.png" width="375px" alt="Looks voor mobiel">
<img src="images/looks_tablet.png" width="375px" alt="Looks voor tablet">
<img src="images/looks_desktop.png" width="375px" alt="Looks voor desktop">
Bij de looks heb ik ervoor gekozen om dit op alle schermen te kunnen laten scrollen alleen wanneer het scherm groter word kommen er steeds meer looks in beeld. Op mobiel zie je er eerst alleen de eerste voledig wanneer je het scherm groter maakt komen er steeds meer in beeld.


### Agenda voor meeting
samen met je groepje opstellen

| Ik             | Sterre             | Mathijs      | Arsenio          |
| ---            | ---                | ---          | ---              |
| Responsive     | Het menu           | en ik dit    | en dan ik dat    |
| Grid           | Formulier blok     | nog een punt | dit wil ik zeker |
|                | anders plaatsen    | ...          | ...              |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- punt 1
- punt 2
- nog een punt
- ...

</details>





## Toegankelijkheidstest (week 4)

<details>
<summary>uitwerken na test in 8e voortgang</summary>

### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:

#### Titel eerste bevinding
Hier korte omschrijving (met indien nodig een afbeelding)

Hier een omschrijving van hoe het opgelost kan worden (met indien nodig een afbeelding)


#### Titel tweede bevinding. 
Hier korte omschrijving (met indien nodig een afbeelding)

Hier een omschrijving van hoe het opgelost kan worden (met indien nodig een afbeelding)


#### Titel volgende bevinding. 
Hier korte omschrijving (met indien nodig een afbeelding)

Hier een omschrijving van hoe het opgelost kan worden (met indien nodig een afbeelding)


#### Titel nog een bevinding. 
Hier korte omschrijving (met indien nodig een afbeelding)

Hier een omschrijving van hoe het opgelost kan worden (met indien nodig een afbeelding)

</details>





## Voortgang 3 (week 4)

<details>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


### Agenda voor meeting
samen met je groepje opstellen

| student 1      | student 2          | student 3    | student 4        |
| ---            | ---                | ---          | ---              |
| dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
| en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
| ...            | ...                | ...          | ...              |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- punt 1
- punt 2
- nog een punt
- ...

</details>





## Eindgesprek (week 5)

<details>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

### Screenshot(s)

hier screenshot(s) van je eindresultaat

</details>





## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. https://www.w3schools.com/cssref/pr_text_text-decoration.asp
2. https://www.w3schools.com/html/html_tables.asp
3. https://css-tricks.com/almanac/properties/s/scroll-snap-type/
4. 

</details>