const wikiData = [
  {
    "id": "sec1",
    "nav_title": "🛠️ Dev & Coding‑Begriffe",
    "sec_title": "Allgemeiner Dev-Jargon",
    "cards": [
      {
        "term": "Bikeshedding",
        "desc": "Über unwichtige Kleinigkeiten diskutieren."
      },
      {
        "term": "Boilerplate",
        "desc": "Wiederholender Standardcode."
      },
      {
        "term": "Brownfield",
        "desc": "Arbeiten in bestehender Umgebung."
      },
      {
        "term": "Bug",
        "desc": "Fehler im Code."
      },
      {
        "term": "Code Smell",
        "desc": "Hinweis auf schlechtes Design oder potenzielle Probleme."
      },
      {
        "term": "DRY",
        "desc": "Don't Repeat Yourself – Duplikate vermeiden."
      },
      {
        "term": "Edge Case",
        "desc": "Seltene Sonderfälle."
      },
      {
        "term": "Feature",
        "desc": "Neue, gewollte Funktionalität."
      },
      {
        "term": "Greenfield",
        "desc": "Neues Projekt ohne Altlasten."
      },
      {
        "term": "Happy Path",
        "desc": "Reibungsloser, optimaler Ablauf."
      },
      {
        "term": "Heisenbug",
        "desc": "Fehler verschwindet beim Debuggen."
      },
      {
        "term": "Hotfix",
        "desc": "Schneller Fehlerbehebungs‑Patch."
      },
      {
        "term": "Idempotent",
        "desc": "Mehrfach ausgeführt = gleiches Ergebnis."
      },
      {
        "term": "KISS",
        "desc": "Keep It Simple, Stupid – Einfach halten."
      },
      {
        "term": "Legacy Code",
        "desc": "Alter, schwer wartbarer Code."
      },
      {
        "term": "MVP",
        "desc": "Minimum Viable Product – Minimales funktionsfähiges Produkt."
      },
      {
        "term": "Patch",
        "desc": "Kleine Softwarekorrektur."
      },
      {
        "term": "PoC",
        "desc": "Proof of Concept – Machbarkeitsnachweis."
      },
      {
        "term": "Refactoring",
        "desc": "Verbesserung der Code‑Struktur ohne Verhaltensänderung."
      },
      {
        "term": "Regression",
        "desc": "Fehler kehrt nach einer Änderung zurück."
      },
      {
        "term": "Rubber Duck Debugging",
        "desc": "Probleme laut erklären, um sie zu lösen."
      },
      {
        "term": "Schrödinbug",
        "desc": "Funktioniert nur solange man den Code nicht liest."
      },
      {
        "term": "Side Effects",
        "desc": "Nebenwirkungen einer Funktion."
      },
      {
        "term": "Smoke Test",
        "desc": "Schnelle Grundprüfung."
      },
      {
        "term": "Technical Debt",
        "desc": "Technische Schulden durch Abkürzungen oder alte Implementationen."
      },
      {
        "term": "WET",
        "desc": "Write Everything Twice – Gegenteil von DRY."
      },
      {
        "term": "YAGNI",
        "desc": "You Aren't Gonna Need It – Nicht Überentwickeln."
      },
      {
        "term": "Yak Shaving",
        "desc": "Ungeplante Nebenaufgaben erledigen."
      },
      {
        "term": "CI/CD",
        "desc": "Continuous Integration / Continuous Deployment: Automatisierung von Tests und Auslieferung."
      }
    ]
  },
  {
    "id": "sec3",
    "nav_title": "🧩 Datentypen & Strukturen",
    "sec_title": "Datentypen",
    "cards": [
      {
        "term": "Anonymous Type",
        "desc": "Zur Laufzeit erzeugter Datentyp ohne eigenen Namen."
      },
      {
        "term": "Array",
        "desc": "Fixe Liste mit gleicher Typzugehörigkeit."
      },
      {
        "term": "BigInteger",
        "desc": "Beliebig große Ganzzahlen."
      },
      {
        "term": "Binary",
        "desc": "Rohdaten (Bytes)."
      },
      {
        "term": "Binary Data Type",
        "desc": "Speicherung von Dateien und Streams."
      },
      {
        "term": "BitArray",
        "desc": "Sammlung einzelner Bits."
      },
      {
        "term": "Blob",
        "desc": "Große binäre Daten (z.B. Dateien)."
      },
      {
        "term": "Boolean",
        "desc": "Wahr/Falsch Werte (true/false)."
      },
      {
        "term": "Boolean Flag",
        "desc": "Typ für logische Steuerparameter."
      },
      {
        "term": "Byte",
        "desc": "Kleiner 8‑Bit Wert."
      },
      {
        "term": "Char",
        "desc": "Ein einzelnes Unicode-Zeichen."
      },
      {
        "term": "Class",
        "desc": "Referenztyp, der Verhalten & Daten enthält."
      },
      {
        "term": "Color",
        "desc": "RGBA Farbdatenstruktur."
      },
      {
        "term": "DateOnly",
        "desc": "Nur Datum ohne Uhrzeit."
      },
      {
        "term": "DateTime",
        "desc": "Datum/Zeit Kombination."
      },
      {
        "term": "Decimal",
        "desc": "Exakte Dezimalzahl, ideal für Geldberechnungen."
      },
      {
        "term": "Dictionary",
        "desc": "Key-Value Datensammlung."
      },
      {
        "term": "Discriminated Union",
        "desc": "Funktionale Typherarchie."
      },
      {
        "term": "Double",
        "desc": "Gleitkommazahl mit doppelter Genauigkeit."
      },
      {
        "term": "Dynamic",
        "desc": "Typ zur Laufzeit bestimmt (dynamic)."
      },
      {
        "term": "Enum",
        "desc": "Vordefinierter Satz benannter Konstanten."
      },
      {
        "term": "Float",
        "desc": "Gleitkommazahl mit einfacher Genauigkeit."
      },
      {
        "term": "Guid",
        "desc": "128‑Bit weltweit eindeutige ID."
      },
      {
        "term": "HashSet",
        "desc": "Mengenstruktur ohne Duplikate."
      },
      {
        "term": "Integer",
        "desc": "Ganzzahl ohne Nachkommastellen (z.B. int, long)."
      },
      {
        "term": "JSON Array",
        "desc": "Liste beliebiger JSON‑Werte."
      },
      {
        "term": "JSON Object",
        "desc": "Strukturierter Datentyp für Web‑APIs."
      },
      {
        "term": "List",
        "desc": "Dynamische Liste von Elementen."
      },
      {
        "term": "Matrix",
        "desc": "Mehrdimensionale mathematische Struktur."
      },
      {
        "term": "Memory",
        "desc": "Verwendet für Puffer/Streaming‑Operationen."
      },
      {
        "term": "Nullable",
        "desc": "Datentyp, der zusätzlich „null“ annehmen kann."
      },
      {
        "term": "Object",
        "desc": "Basis‑Typ für alle .NET‑Datentypen (OOP‑Root)."
      },
      {
        "term": "Option Type",
        "desc": "F# / funktional: Ein Wert oder None."
      },
      {
        "term": "Pointer",
        "desc": "Direkter Speicherzeiger (unsafe code)."
      },
      {
        "term": "Queue",
        "desc": "FIFO Datenstruktur."
      },
      {
        "term": "Record",
        "desc": "Immutable Datenstruktur (C# 9+)."
      },
      {
        "term": "SByte",
        "desc": "Signiertes Byte (-128 bis 127)."
      },
      {
        "term": "Short",
        "desc": "16‑Bit Ganzzahl (signed)."
      },
      {
        "term": "Span",
        "desc": "Leichterer Zugriff auf Speicherbereiche."
      },
      {
        "term": "SQL Date",
        "desc": "Datum ohne Uhrzeit in SQL."
      },
      {
        "term": "SQL Decimal",
        "desc": "Exakte Dezimalzahlen in SQL."
      },
      {
        "term": "SQL Int",
        "desc": "Integer‑Spaltentyp in SQL‑Datenbanken."
      },
      {
        "term": "SQL NVarchar",
        "desc": "Unicode‑Zeichenkette."
      },
      {
        "term": "SQL Timestamp",
        "desc": "Zeitstempel, meist als RowVersion."
      },
      {
        "term": "SQL Varchar",
        "desc": "Variable Zeichenkette."
      },
      {
        "term": "Stack",
        "desc": "LIFO Datenstruktur."
      },
      {
        "term": "Stream",
        "desc": "Abstraktion für sequenziellen Datenfluss."
      },
      {
        "term": "String",
        "desc": "Zeichenkette beliebiger Länge."
      },
      {
        "term": "Struct",
        "desc": "Werttyp, gespeichert im Stack."
      },
      {
        "term": "TimeOnly",
        "desc": "Nur Uhrzeit ohne Datum."
      },
      {
        "term": "TimeSpan",
        "desc": "Zeitspanne (Dauer)."
      },
      {
        "term": "Tuple",
        "desc": "Sammlung verschiedener Werte ohne eigenen Typ."
      },
      {
        "term": "UInt",
        "desc": "32‑Bit Ganzzahl (unsigned)."
      },
      {
        "term": "ULong",
        "desc": "64‑Bit Ganzzahl (unsigned)."
      },
      {
        "term": "UShort",
        "desc": "16‑Bit Ganzzahl (unsigned)."
      },
      {
        "term": "ValueTuple",
        "desc": "Moderne, performante Version des Tuple‑Typs."
      },
      {
        "term": "Vector2 / Vector3",
        "desc": "2D/3D Vektoren."
      },
      {
        "term": "XML Node",
        "desc": "Einzelner XML‑Elementknoten."
      },
      {
        "term": "Graph",
        "desc": "Eine Sammlung von Knoten (Vertices) und deren Verbindungen (Edges)."
      }
    ]
  },
  {
    "id": "se_prozesse",
    "nav_title": "🔄 Software-Engineering & Prozesse",
    "sec_title": "Softwareentwicklungsprozesse",
    "cards": [
      {
        "term": "Scrum",
        "desc": "Agiles Framework mit Sprints, Daily Scrums, Sprint Reviews und Retrospektiven. Rollen: Scrum Master, Product Owner, Developer."
      },
      {
        "term": "Kanban",
        "desc": "Agile Methode zur Visualisierung von Aufgaben (z.B. auf einem Kanban-Board) mit Spalten wie To Do, In Progress, Done, um Engpässe zu vermeiden."
      },
      {
        "term": "Wasserfallmodell",
        "desc": "Klassisches, lineares Vorgehensmodell in der Softwareentwicklung (Anforderung, Entwurf, Implementierung, Test, Wartung)."
      },
      {
        "term": "V-Modell",
        "desc": "Erweiterung des Wasserfallmodells, bei dem jeder Entwicklungsphase eine entsprechende Testphase gegenübergestellt wird."
      },
      {
        "term": "Agile Softwareentwicklung",
        "desc": "Sammelbegriff für flexible, iterative Entwicklungsmethoden, die den Menschen und die funktionierende Software in den Fokus stellen (Agiles Manifest)."
      }
    ]
  },
  {
    "id": "pm_doku",
    "nav_title": "📋 Projektmanagement & Doku",
    "sec_title": "Projektplanung & Dokumentation",
    "cards": [
      {
        "term": "Lastenheft",
        "desc": "Beschreibt die Anforderungen des **Auftraggebers** ('Was' und 'Wofür' soll gemacht werden?)."
      },
      {
        "term": "Pflichtenheft",
        "desc": "Beschreibt, **wie** der Auftragnehmer die Anforderungen aus dem Lastenheft umsetzen wird (Lösungskonzept)."
      },
      {
        "term": "Nutzwertanalyse",
        "desc": "Systematische Entscheidungsmethode, um verschiedene Alternativen anhand gewichteter Kriterien zu vergleichen."
      },
      {
        "term": "Gantt-Diagramm",
        "desc": "Ein Balkendiagramm zur Darstellung von Projektabläufen und -zeitplänen."
      },
      {
        "term": "Meilenstein",
        "desc": "Wichtiges Zwischenziel in einem Projekt, dessen Erreichen überprüfbar ist."
      }
    ]
  },
  {
    "id": "sec4",
    "nav_title": "🎨 Clean Code & Naming",
    "sec_title": "🎨 Clean Code & Naming",
    "cards": [
      {
        "term": "camelCase",
        "desc": "Variablen & Methoden (z.B. <code>myVariableName</code>)."
      },
      {
        "term": "PascalCase",
        "desc": "Klassen & Typen (z.B. <code>MyClassName</code>)."
      },
      {
        "term": "kebab-case",
        "desc": "URL-Pfade & CSS-Klassen (z.B. <code>my-style-class</code>)."
      },
      {
        "term": "SNAKE_CASE",
        "desc": "Konstanten (z.B. <code>MAX_RETRY_COUNT</code>)."
      },
      {
        "term": "Boy Scout Rule",
        "desc": "Hinterlasse den Code immer ein Stück sauberer, als du ihn vorgefunden hast."
      },
      {
        "term": "S.O.L.I.D.",
        "desc": "Fokus auf Wartbarkeit durch klare Zuständigkeiten."
      },
      {
        "term": "Kommentare ",
        "desc": "C# // Kommentarfunktion für einen selber Notiz"
      },
      {
        "term": "XML Dokumentation ",
        "desc": "C# /// Kommentarfunktion für andere Entwickler Intellisense eingebettet",
        "onclick": "openPDF('XMLDokumentation.pdf')"
      },
      {
        "term": "XML Dokumentation Tags ",
        "desc": "C# /// TagsListe",
        "onclick": "openPDF('XMLDokumentationsTags.pdf')"
      },
      {
        "term": "KISS",
        "desc": "Keep It Simple, Stupid: Lösungen sollten so einfach wie möglich gehalten werden."
      },
      {
        "term": "YAGNI",
        "desc": "You Aren't Gonna Need It: Implementiere keine Features im Voraus, wenn sie noch nicht benötigt werden."
      }
    ]
  },
  {
    "id": "sec2",
    "nav_title": "🏛️ OOP‑Prinzipien & Klassen",
    "sec_title": "OOP – Objektorientierte Programmierung",
    "cards": [
      {
        "term": "Abgeleitete Klasse",
        "desc": "Subklasse, die Funktionen erweitert oder überschreibt."
      },
      {
        "term": "Abstraktion",
        "desc": "Reduzierung komplexer Systeme auf ihre Kernelemente."
      },
      {
        "term": "Abstrakte Klasse",
        "desc": "Klasse, die nicht instanziert werden kann."
      },
      {
        "term": "Aggregate",
        "desc": "Ein Verbund mehrerer Entities als Einheit."
      },
      {
        "term": "Aggregation",
        "desc": "Objekt hält Referenz auf andere Objekte – schwächer als Komposition."
      },
      {
        "term": "Base",
        "desc": "Zugriff auf implementierte Logik der Basisklasse."
      },
      {
        "term": "Basisklasse",
        "desc": "Die übergeordnete Klasse, von der geerbt wird."
      },
      {
        "term": "Composition",
        "desc": "Objekt enthält andere Objekte als Teil der Struktur."
      },
      {
        "term": "Constructor Chaining",
        "desc": "Ein Konstruktor ruft einen anderen auf."
      },
      {
        "term": "Data Class / Record",
        "desc": "OOP‑Typ speziell für immutable Daten."
      },
      {
        "term": "Dependency",
        "desc": "Eine Klasse benötigt eine andere Klasse als Abhängigkeit."
      },
      {
        "term": "Dependency Injection",
        "desc": "Abhängigkeiten werden von außen bereitgestellt."
      },
      {
        "term": "Destruktor",
        "desc": "Räumt Ressourcen beim Löschen des Objekts auf."
      },
      {
        "term": "DTO",
        "desc": "Data Transfer Object zum Datentransport."
      },
      {
        "term": "Early Binding",
        "desc": "Entscheidung über Methode zur Kompilierzeit."
      },
      {
        "term": "Eigenschaft (Property)",
        "desc": "Datenfeld mit Getter/Setter zum Lesen & Schreiben."
      },
      {
        "term": "Entity",
        "desc": "Objekt mit Identität (z.B. in DDD)."
      },
      {
        "term": "Feld (Field)",
        "desc": "Variable im Inneren eines Objekts oder einer Klasse."
      },
      {
        "term": "Generics",
        "desc": "OOP‑Templates für beliebige Datentypen."
      },
      {
        "term": "Getter/Setter",
        "desc": "Steuern den Zugriff auf Eigenschaften."
      },
      {
        "term": "Instanzierung",
        "desc": "Erzeugung eines Objekts aus einer Klasse."
      },
      {
        "term": "Interface",
        "desc": "Reiner Vertrag aus Methoden ohne Implementierung."
      },
      {
        "term": "Kapselung (Encapsulation)",
        "desc": "Daten verstecken, nur kontrollierten Zugriff erlauben."
      },
      {
        "term": "Klasse",
        "desc": "Bauplan für Objekte mit Eigenschaften und Methoden."
      },
      {
        "term": "Konstruktor",
        "desc": "Spezielle Methode zur Initialisierung eines Objekts."
      },
      {
        "term": "Late Binding",
        "desc": "Entscheidung über Methode zur Laufzeit."
      },
      {
        "term": "Liskov Substitution Principle",
        "desc": "Subtypen müssen sich wie Basistypen verhalten."
      },
      {
        "term": "Methode",
        "desc": "Funktion innerhalb einer Klasse."
      },
      {
        "term": "Methodenüberladung",
        "desc": "Gleiche Methode, aber unterschiedliche Parameter."
      },
      {
        "term": "Methodenüberschreibung",
        "desc": "Implementierung einer geerbten Methode überschreiben."
      },
      {
        "term": "Object Lifetime",
        "desc": "Lebenszyklus einer Instanz von Erzeugung bis Zerstörung."
      },
      {
        "term": "Objekt",
        "desc": "Instanz einer Klasse, konkretes Exemplar im Speicher."
      },
      {
        "term": "Open/Closed Principle",
        "desc": "Erweiterbar, aber nicht veränderbar."
      },
      {
        "term": "Override",
        "desc": "Überschreibt eine virtuelle/abstrakte Methode."
      },
      {
        "term": "Overriding vs. Hiding",
        "desc": "Override ersetzt Verhalten – Hiding blendet es aus."
      },
      {
        "term": "Polymorphie",
        "desc": "Gleiches Interface, unterschiedliche Implementierung."
      },
      {
        "term": "POCO",
        "desc": "Plain Old CLR Object – einfache Datenklasse ohne Logik."
      },
      {
        "term": "Readonly",
        "desc": "Wert nach initialer Zuweisung nicht mehr veränderbar."
      },
      {
        "term": "Reflection",
        "desc": "Laufzeitinspektion von Typen & Metadaten."
      },
      {
        "term": "Sealed",
        "desc": "Verhindert weitere Vererbung einer Klasse."
      },
      {
        "term": "SOLID Prinzipien",
        "desc": "5 Grundprinzipien für sauberes OOP‑Design."
      },
      {
        "term": "Static",
        "desc": "Mitglied, das zur Klasse selbst statt zur Instanz gehört."
      },
      {
        "term": "This",
        "desc": "Referenz auf die aktuelle Instanz."
      },
      {
        "term": "Vererbung",
        "desc": "Eine Klasse übernimmt Eigenschaften/Methoden einer anderen."
      },
      {
        "term": "Virtuelle Methode",
        "desc": "Kann in Unterklassen überschrieben werden."
      },
      {
        "term": "SOLID",
        "desc": "Fünf Prinzipien objektorientierten Designs: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion."
      },
      {
        "term": "Design Patterns",
        "desc": "Bewährte Lösungsschablonen für wiederkehrende Design-Probleme (z.B. Singleton, Observer)."
      }
    ]
  },
  {
    "id": "uml_modellierung",
    "nav_title": "📊 UML & Modellierung",
    "sec_title": "Unified Modeling Language",
    "cards": [
      {
        "term": "Klassendiagramm",
        "desc": "Strukturdiagramm: Zeigt die Klassen eines Systems, ihre Attribute, Methoden und die Beziehungen (Vererbung, Assoziation) zueinander."
      },
      {
        "term": "Sequenzdiagramm",
        "desc": "Verhaltensdiagramm: Zeigt, wie Objekte im Laufe der Zeit miteinander interagieren (Nachrichtenaustausch)."
      },
      {
        "term": "Use Case Diagramm",
        "desc": "Anwendungsfalldiagramm: Zeigt die Interaktionen zwischen Akteuren (Nutzern) und dem System, um das Verhalten aus Anwendersicht zu modellieren."
      },
      {
        "term": "Aktivitätsdiagramm",
        "desc": "Modelliert den Kontrollfluss von Prozessen und Abläufen, ähnlich einem Flussdiagramm."
      },
      {
        "term": "ER-Modell (ERM)",
        "desc": "Entity-Relationship-Modell: Dient der konzeptionellen Modellierung von Datenbanken (Entitäten, Relationen, Attribute)."
      }
    ]
  },
  {
    "id": "design_patterns",
    "nav_title": "🏗️ Design Patterns",
    "sec_title": "Entwurfsmuster",
    "cards": [
      {
        "term": "Singleton",
        "desc": "Erzeugungsmuster: Stellt sicher, dass eine Klasse nur genau eine Instanz hat und bietet einen globalen Zugriffspunkt darauf."
      },
      {
        "term": "Factory Method",
        "desc": "Erzeugungsmuster: Definiert eine Schnittstelle zur Erstellung eines Objekts, überlässt aber den Unterklassen die Entscheidung, welche Klasse instanziiert wird."
      },
      {
        "term": "Observer",
        "desc": "Verhaltensmuster: Ein Objekt (Subjekt) benachrichtigt eine Liste von abhängigen Objekten (Beobachter) automatisch über Zustandsänderungen."
      },
      {
        "term": "Strategy",
        "desc": "Verhaltensmuster: Definiert eine Familie von Algorithmen und macht diese austauschbar, ohne den Client-Code anzupassen."
      },
      {
        "term": "MVC (Model-View-Controller)",
        "desc": "Architekturmuster, das Software in Datenmodell (Model), Präsentation (View) und Steuerung (Controller) unterteilt."
      }
    ]
  },
  {
    "id": "sec7",
    "nav_title": "🏛️ Architektur",
    "sec_title": "Software-Architektur",
    "cards": [
      {
        "term": "12‑Factor App",
        "desc": "Best Practices für Cloud‑native Anwendungen."
      },
      {
        "term": "Aggregator Pattern",
        "desc": "Fasst Daten aus mehreren Services zu einer Antwort zusammen."
      },
      {
        "term": "Anti‑Corruption Layer",
        "desc": "Schützt das System vor schlechtem externen Datenmodell."
      },
      {
        "term": "APIs as First Class Citizens",
        "desc": "APIs sind zentrale Architekturbausteine."
      },
      {
        "term": "Backend for Frontend (BFF)",
        "desc": "Spezielle Backend‑Schicht pro Frontend‑App."
      },
      {
        "term": "Blacklist / Whitelist Pattern",
        "desc": "Kontrollmuster für erlaubte vs. blockierte Elemente."
      },
      {
        "term": "Bridge Pattern",
        "desc": "Koppelt Abstraktion von Implementierung los."
      },
      {
        "term": "Builder Pattern",
        "desc": "Baut komplexe Objekte Schritt für Schritt."
      },
      {
        "term": "Bulkhead Isolation",
        "desc": "Isoliert Systemteile, um Kaskadenfehler zu vermeiden."
      },
      {
        "term": "Chain of Responsibility",
        "desc": "Request wandert durch Handler‑Kette."
      },
      {
        "term": "Circuit Breaker Pattern",
        "desc": "Unterbricht fehlerhafte Service‑Calls, um Ausfallketten zu verhindern."
      },
      {
        "term": "Clean Architecture",
        "desc": "Architekturprinzip, das Fachlogik klar von Infrastruktur trennt."
      },
      {
        "term": "Client-Side Composition",
        "desc": "UI wird im Browser aus Micro‑Frontends zusammengesetzt."
      },
      {
        "term": "Command / Query Bus",
        "desc": "Zentrale Ausführung von Commands bzw. Abstraktion für lesende Abfragen."
      },
      {
        "term": "Command Pattern",
        "desc": "Befehle als Objekte, die ausgeführt oder gespeichert werden können."
      },
      {
        "term": "Composite Pattern",
        "desc": "Behandlung komplexer Baumstrukturen wie Einzelobjekte."
      },
      {
        "term": "CQRS / Event Sourcing",
        "desc": "Trennung von Lese- und Schreiboperationen (Read/Write Models) bzw. Speichern des Zustands per Events."
      },
      {
        "term": "Data Mapper",
        "desc": "Mapping zwischen Modellen und Datenbank."
      },
      {
        "term": "DDD (Domain-Driven Design)",
        "desc": "Fokus der Software-Struktur auf die fachliche Domäne und deren Logik."
      },
      {
        "term": "DI (Dependency Injection)",
        "desc": "Abhängigkeiten von außen in eine Klasse \"hineinreichen\"."
      },
      {
        "term": "Distributed Monolith",
        "desc": "Microservices, die eigentlich wie ein Monolith funktionieren."
      },
      {
        "term": "Domain Events",
        "desc": "Ereignisse reagieren auf Änderungen im Domänenmodell."
      },
      {
        "term": "Event Bus",
        "desc": "Zentrale Verteilstelle für Events."
      },
      {
        "term": "Event Storming",
        "desc": "Workshop‑Methode zur Modellierung im DDD."
      },
      {
        "term": "Eventual Consistency",
        "desc": "System wird zeitversetzt konsistent — typisch für Microservices."
      },
      {
        "term": "Facade Pattern",
        "desc": "Vereinfachte API für komplexe Subsysteme."
      },
      {
        "term": "Factory / Strategy Pattern",
        "desc": "Muster zur Objekt-Erzeugung bzw. für austauschbare Algorithmen."
      },
      {
        "term": "Feature Toggles",
        "desc": "Features live an‑ oder abschalten."
      },
      {
        "term": "Flyweight Pattern",
        "desc": "Gemeinsame Nutzung gemeinsamer Daten zur Speicheroptimierung."
      },
      {
        "term": "Gateway Pattern",
        "desc": "Zentrale API‑Schnittstelle zu externen Systemen."
      },
      {
        "term": "Hexagonale Architektur / Ports & Adapters",
        "desc": "Isolation der Kernlogik durch \"Ports & Adapters\" von äußeren Einflüssen."
      },
      {
        "term": "IoC (Inversion of Control)",
        "desc": "Umkehrung der Kontrolle: Das Framework ruft den Code auf, nicht umgekehrt."
      },
      {
        "term": "Layered Architecture",
        "desc": "Klassische Schichtenarchitektur (UI → Service → Repo → DB)."
      },
      {
        "term": "Mediator Pattern",
        "desc": "Zentraler Vermittler für Objektkommunikation."
      },
      {
        "term": "Memento Pattern",
        "desc": "Sichert und stellt Objektzustände wieder her."
      },
      {
        "term": "Microkernel Architecture",
        "desc": "Kernsystem + Plugins für erweiterbare Software."
      },
      {
        "term": "Monolith vs. Microservices",
        "desc": "Eine große, zentrale Anwendung vs. viele kleine, spezialisierte Dienste."
      },
      {
        "term": "MVC / MVVM",
        "desc": "Muster zur Trennung von Daten, Benutzeroberfläche und Logik."
      },
      {
        "term": "Observer / Adapter Pattern",
        "desc": "Muster für Event-Benachrichtigungen bzw. zur Herstellung von Kompatibilität."
      },
      {
        "term": "Onion Architecture",
        "desc": "Schichtenmodell, bei dem die Domäne im Zentrum steht."
      },
      {
        "term": "Pipes & Filters",
        "desc": "Verarbeitungskette, in der Daten durch Filter geleitet werden."
      },
      {
        "term": "Proxy Pattern",
        "desc": "Stellvertreter‑Objekt für Zugriffskontrolle, Caching oder Lazy Loading."
      },
      {
        "term": "Repository Pattern",
        "desc": "Abstraktionsebene für Datenzugriff."
      },
      {
        "term": "Saga Pattern",
        "desc": "Koordiniert verteilte Transaktionen in Microservices."
      },
      {
        "term": "Server-Side Composition",
        "desc": "Backend setzt UI‑Fragmente serverseitig zusammen."
      },
      {
        "term": "Service Layer",
        "desc": "Beinhaltet Geschäftslogik zwischen UI und Datenzugriff."
      },
      {
        "term": "Service Mesh",
        "desc": "Netzwerk‑Infrastruktur für Routing, MTLS und Observability."
      },
      {
        "term": "Service Registry",
        "desc": "Zentrales Verzeichnis aller Microservices."
      },
      {
        "term": "Sidecar Pattern",
        "desc": "Anhängender Prozess für Logging, Monitoring etc."
      },
      {
        "term": "SOLID",
        "desc": "5 Grundprinzipien für wartbares und flexibles Objekt-Design."
      },
      {
        "term": "State Pattern",
        "desc": "Objekte ändern Verhalten je nach internem Status."
      },
      {
        "term": "Strangler Pattern",
        "desc": "Altsystem Stück für Stück durch Neues ersetzen."
      },
      {
        "term": "Template Method",
        "desc": "Vorgegebener Algorithmus mit erweiterbaren Schritten."
      },
      {
        "term": "Unit of Work",
        "desc": "Bündelt Änderungen zu einer DB‑Transaktion."
      },
      {
        "term": "Visitor Pattern",
        "desc": "Trennt Operationen von Datenstrukturen."
      },
      {
        "term": "Microservices",
        "desc": "Aufteilen einer großen Anwendung in kleine, unabhängig voneinander laufende Dienste."
      },
      {
        "term": "Serverless",
        "desc": "Ausführung von Code ohne Server-Management (z.B. AWS Lambda)."
      }
    ]
  },
  {
    "id": "sec14",
    "nav_title": "🔁 Async & Workflows",
    "sec_title": "Nebenläufigkeit & Asynchronität",
    "cards": [
      {
        "term": "Async / Await",
        "desc": "Schlüsselwörter für die einfache Steuerung asynchroner Programmflüsse."
      },
      {
        "term": "Async I/O",
        "desc": "Asynchroner Zugriff auf Eingabe/Ausgabe, ohne den Thread während des Wartens zu blockieren."
      },
      {
        "term": "Async Lock",
        "desc": "Asynchrone Sperre, die den Task pausiert, aber den Thread für andere Aufgaben freigibt."
      },
      {
        "term": "Async Stream",
        "desc": "Asynchroner Datenstrom (IAsyncEnumerable), der Werte nacheinander liefert, sobald sie bereit sind."
      },
      {
        "term": "Asynchronous Pipeline",
        "desc": "Datenfluss-Modell, bei dem verschiedene Stufen einer Aufgabe parallel verarbeitet werden."
      },
      {
        "term": "Atomic Operation",
        "desc": "Unteilbare Operation auf CPU-Ebene, die nicht durch andere Threads unterbrochen werden kann."
      },
      {
        "term": "Auto Reset Event",
        "desc": "Synchronisationsobjekt, das nach einer Freigabe automatisch wieder in den gesperrten Zustand springt."
      },
      {
        "term": "Awaitable",
        "desc": "Ein Objekt (wie Task oder ValueTask), auf das mit dem await-Operator gewartet werden kann."
      },
      {
        "term": "Backpressure",
        "desc": "Mechanismus zur Flusssteuerung, um ein System vor Überlastung durch zu viele eingehende Daten zu schützen."
      },
      {
        "term": "Barrier",
        "desc": "Ein Synchronisationspunkt, an dem mehrere Threads aufeinandertreffen müssen, bevor sie gemeinsam fortfahren."
      },
      {
        "term": "Blocking Call",
        "desc": "Ein Funktionsaufruf, der den aktuellen Thread komplett anhält, bis die Operation abgeschlossen ist."
      },
      {
        "term": "Cancellation Token",
        "desc": "Ein Signal-Objekt, mit dem laufende asynchrone Operationen sicher abgebrochen werden können."
      },
      {
        "term": "Concurrent Queue",
        "desc": "Eine thread-sichere Warteschlange, die parallele Lese- und Schreibzugriffe erlaubt."
      },
      {
        "term": "Continuation",
        "desc": "Ein Codeblock, der automatisch ausgeführt wird, sobald eine asynchrone Operation beendet ist."
      },
      {
        "term": "Countdown Event",
        "desc": "Ein Synchronisationsobjekt, das einen Thread blockiert, bis eine bestimmte Anzahl an Tasks abgeschlossen ist."
      },
      {
        "term": "Critical Section",
        "desc": "Ein Codebereich, der zur Vermeidung von Fehlern niemals von mehr als einem Thread gleichzeitig betreten werden darf."
      },
      {
        "term": "Deadlock",
        "desc": "Ein Zustand, in dem sich zwei oder mehr Prozesse gegenseitig blockieren, weil jeder auf eine Ressource wartet, die der andere hält."
      },
      {
        "term": "Event Loop",
        "desc": "Der Kernmechanismus (z. B. in NodeJS), der asynchrone Ereignisse nacheinander abarbeitet."
      },
      {
        "term": "Fiber",
        "desc": "Ein extrem leichtgewichtiger \"Thread\", der vom Programm selbst und nicht vom Betriebssystem verwaltet wird."
      },
      {
        "term": "Green Thread",
        "desc": "Ein von einer Laufzeitumgebung (VM) verwalteter Thread, der auf Betriebssystem-Threads abgebildet wird."
      },
      {
        "term": "Immutable Object",
        "desc": "Ein Objekt, dessen Zustand nach der Erstellung nicht mehr geändert werden kann – dadurch ist es von Natur aus thread-sicher."
      },
      {
        "term": "Livelock",
        "desc": "Ein Zustand, in dem Prozesse zwar aktiv auf Ereignisse reagieren, sich aber gegenseitig so beeinflussen, dass kein echter Fortschritt erzielt wird."
      },
      {
        "term": "Lock-Free Algorithm",
        "desc": "Ein Algorithmus, der ohne explizite Sperren (Locks) auskommt, um maximale Performance zu erzielen."
      },
      {
        "term": "Main Thread",
        "desc": "Der primäre Thread einer Anwendung, der den Startpunkt bildet und oft für die Programmlogik zuständig ist."
      },
      {
        "term": "Manual Reset Event",
        "desc": "Ein Signal-Objekt, das so lange offen bleibt, bis es manuell wieder in den gesperrten Zustand gesetzt wird."
      },
      {
        "term": "Memory Fence",
        "desc": "Eine Barriere, die sicherstellt, dass Speicheroperationen in der korrekten Reihenfolge für alle Threads sichtbar werden."
      },
      {
        "term": "Message Queue",
        "desc": "Ein System zum asynchronen Austausch von Nachrichten zwischen verschiedenen Programmteilen oder Diensten."
      },
      {
        "term": "Monitor",
        "desc": "Ein High-Level-Synchronisationsmechanismus, der exklusiven Zugriff auf ein Objekt garantiert."
      },
      {
        "term": "Mutex",
        "desc": "Ein \"Mutual Exclusion\"-Objekt (gegenseitiger Ausschluss), das als exklusive Sperre für Ressourcen dient."
      },
      {
        "term": "Non-Blocking Call",
        "desc": "Ein Aufruf, der sofort zurückkehrt, auch wenn die Operation im Hintergrund noch läuft; der Thread bleibt frei."
      },
      {
        "term": "Out-of-Order Execution",
        "desc": "Ein Performance-Feature moderner CPUs, bei dem Befehle zur Effizienzsteigerung nicht strikt in der programmierten Reihenfolge ausgeführt werden."
      },
      {
        "term": "Parallel LINQ (PLINQ)",
        "desc": "Eine Erweiterung von LINQ, die Abfragen automatisch auf mehrere CPU-Kerne verteilt."
      },
      {
        "term": "Parallel.For",
        "desc": "Ein Programmierkonstrukt, das die Iterationen einer Schleife automatisch parallel auf mehreren Threads ausführt."
      },
      {
        "term": "Producer-Consumer",
        "desc": "Ein Entwurfsmuster, bei dem ein Thread Daten erzeugt und ein anderer diese asynchron verarbeitet."
      },
      {
        "term": "Queue",
        "desc": "Eine Warteschlange zur geordneten, sequenziellen Abarbeitung von Aufgaben (First-In-First-Out)."
      },
      {
        "term": "Race Condition",
        "desc": "Ein Fehler, bei dem das Endergebnis vom unvorhersehbaren zeitlichen Ablauf paralleler Operationen abhängt."
      },
      {
        "term": "Scheduler Priority",
        "desc": "Die Rangfolge, nach der das Betriebssystem entscheidet, welcher Thread als Nächstes Rechenzeit erhält."
      },
      {
        "term": "Semaphore",
        "desc": "Ein Zählmechanismus, der den gleichzeitigen Zugriff auf eine begrenzte Anzahl von Ressourcen regelt."
      },
      {
        "term": "SemaphoreSlim",
        "desc": "Eine leichtgewichtigere .NET-Variante des Semaphors, optimiert für kurze Wartezeiten innerhalb einer Anwendung."
      },
      {
        "term": "Speculative Execution",
        "desc": "Die Vorwegnahme von Berechnungen durch die CPU, bevor sicher ist, ob das Ergebnis überhaupt benötigt wird."
      },
      {
        "term": "Spinlock",
        "desc": "Eine Sperre, bei der ein Thread in einer engen Schleife aktiv wartet, statt sich schlafen zu legen (effizient bei sehr kurzen Wartezeiten)."
      },
      {
        "term": "Task",
        "desc": "Eine logische Abstraktion für eine asynchrone Operation, die im Gegensatz zum Thread vom Framework verwaltet wird."
      },
      {
        "term": "Task Scheduler",
        "desc": "Die Komponente, die entscheidet, wann und auf welchem Thread ein Task tatsächlich ausgeführt wird."
      },
      {
        "term": "Thread",
        "desc": "Die kleinste vom Betriebssystem verwaltete Ausführungseinheit eines Programms."
      },
      {
        "term": "Thread Affinity",
        "desc": "Die Bindung einer Operation an einen ganz bestimmten Thread (z. B. müssen UI-Elemente oft im UI-Thread bleiben)."
      },
      {
        "term": "Thread Context Switch",
        "desc": "Der rechenintensive Vorgang, bei dem die CPU den aktuellen Thread-Zustand speichert und zu einem anderen Thread wechselt."
      },
      {
        "term": "Thread Pool",
        "desc": "Ein Reservoir an bereits erstellten Threads, die für neue Aufgaben wiederverwendet werden, um Erzeugungskosten zu sparen."
      },
      {
        "term": "Thread Pool Queue",
        "desc": "Die interne Warteschlange des Thread Pools, in der Aufgaben auf einen freien Thread warten."
      },
      {
        "term": "Thread Starvation",
        "desc": "Ein Problem, bei dem ein Thread niemals Rechenzeit erhält, weil andere Threads ständig bevorzugt werden."
      },
      {
        "term": "Thread-Safe",
        "desc": "Code, der garantiert korrekt funktioniert, auch wenn er von mehreren Threads gleichzeitig ausgeführt wird."
      },
      {
        "term": "UI Thread",
        "desc": "Ein spezieller Thread, der ausschließlich für die Verarbeitung von Benutzereingaben und die Aktualisierung der Oberfläche zuständig ist."
      },
      {
        "term": "Wait-Free",
        "desc": "Die stärkste Garantie für Algorithmen: Jeder Thread wird garantiert nach einer festen Anzahl von Schritten fertig, unabhängig von anderen Threads."
      },
      {
        "term": "Work Stealing",
        "desc": "Ein Algorithmus im Scheduler, bei dem untätige Threads Aufgaben von überlasteten Threads \"stehlen\", um die CPU-Last zu verteilen."
      },
      {
        "term": "Worker Thread",
        "desc": "Ein Hintergrund-Thread, der rechenintensive Aufgaben übernimmt, ohne die Benutzeroberfläche zu blockieren."
      },
      {
        "term": "Promise",
        "desc": "Ein Objekt, das den eventuellen Abschluss (oder Fehlschlag) einer asynchronen Operation repräsentiert."
      }
    ]
  },
  {
    "id": "sec8",
    "nav_title": "🌐 Web-Entwicklung",
    "sec_title": "Web-Entwicklung",
    "cards": [
      {
        "term": "3-Tier Architecture",
        "desc": "Strukturmodell bestehend aus Frontend, Backend und Datenbank."
      },
      {
        "term": "a11y (Accessibility)",
        "desc": "Barrierefreiheit – Sicherstellen, dass Webseiten für Menschen mit Behinderungen nutzbar sind."
      },
      {
        "term": "Bot Protection",
        "desc": "Maßnahmen zur Abwehr automatisierter Angriffe und Scraper."
      },
      {
        "term": "Camo / Image Proxy",
        "desc": "Sicheres Ausliefern von Bildern über einen zwischengeschalteten Proxy."
      },
      {
        "term": "CDN",
        "desc": "Global verteiltes Netzwerk für die schnelle Auslieferung von Web-Assets."
      },
      {
        "term": "Code Splitting",
        "desc": "Aufteilen des Codes in kleinere Pakete für optimierte Ladezeiten."
      },
      {
        "term": "Content Delivery Optimization",
        "desc": "Sammelbegriff für Techniken zur Minimierung von Web-Ladezeiten."
      },
      {
        "term": "Content Negotiation",
        "desc": "Mechanismus, bei dem Client und Server das beste Datenformat (z.B. JSON) aushandeln."
      },
      {
        "term": "CORS",
        "desc": "Sicherheitsmechanismus zur Steuerung von Ressourcen-Zugriffen fremder Domains."
      },
      {
        "term": "CORS Preflight",
        "desc": "Ein vorab gesendeter OPTIONS-Request zur Prüfung der Zugriffserlaubnis."
      },
      {
        "term": "CSP (Content Security Policy)",
        "desc": "Sicherheits-Header zur Abwehr von XSS durch strikte Quellen-Regeln."
      },
      {
        "term": "CSR Hydration",
        "desc": "Prozess, bei dem statisches Server-HTML im Browser wieder interaktiv wird."
      },
      {
        "term": "Custom Elements",
        "desc": "Möglichkeit, eigene HTML-Tags mit spezifischem Verhalten zu definieren."
      },
      {
        "term": "Debouncing",
        "desc": "Technik, die verhindert, dass eine Funktion bei schnellen Events zu oft feuert."
      },
      {
        "term": "DNS Prefetch",
        "desc": "Frühzeitiges Auflösen von Domainnamen im Hintergrund zur Latenzsenkung."
      },
      {
        "term": "ETag",
        "desc": "HTTP-Header-Wert zur effizienten Validierung von Browser-Caches."
      },
      {
        "term": "GraphQL",
        "desc": "API-Abfragesprache, bei der der Client die exakte Datenstruktur bestimmt."
      },
      {
        "term": "HSTS",
        "desc": "Sicherheits-Header, der den Browser zwingt, nur HTTPS-Verbindungen zu nutzen."
      },
      {
        "term": "HTTP Caching",
        "desc": "Steuerung der Speicherung von Inhalten über Cache-Control Header."
      },
      {
        "term": "HTTP/2",
        "desc": "Modernes Protokoll mit Multiplexing für parallele Übertragungen."
      },
      {
        "term": "HTTP/3 (QUIC)",
        "desc": "Nächste Protokoll-Generation auf UDP-Basis für noch schnellere Verbindungen."
      },
      {
        "term": "iFrame Sandbox",
        "desc": "Sicherheitsattribut zur Isolierung von eingebetteten Inhalten."
      },
      {
        "term": "Isomorphic Rendering",
        "desc": "Konzept, bei dem derselbe Code sowohl auf dem Server als auch im Client läuft."
      },
      {
        "term": "JWT Authentication",
        "desc": "Sichere Authentifizierung über signierte, zustandslose JSON-Token."
      },
      {
        "term": "Lazy Loading",
        "desc": "Verfahren, bei dem Ressourcen erst geladen werden, wenn sie im Sichtfeld sind."
      },
      {
        "term": "Local Storage",
        "desc": "Dauerhafter Browser-Speicher für einfache Daten ohne Ablaufdatum."
      },
      {
        "term": "Micro API Gateways",
        "desc": "Spezialisierte Vermittlungsschichten für einzelne Microservice-Bereiche."
      },
      {
        "term": "Micro Frontends",
        "desc": "Zerlegung einer Frontend-Anwendung in unabhängige, lieferbare Module."
      },
      {
        "term": "Middleware",
        "desc": "Logikschicht zwischen Request und Response zur Datenverarbeitung."
      },
      {
        "term": "Multi-Tenant Architecture",
        "desc": "Software-Modell, bei dem mehrere Kunden isoliert dieselbe Instanz nutzen."
      },
      {
        "term": "OAuth2 PKCE",
        "desc": "Erweiterter Sicherheitsstandard für Logins in mobilen Apps und SPAs."
      },
      {
        "term": "OpenAPI / Swagger",
        "desc": "Standardisierte Dokumentation und Beschreibung von REST-Schnittstellen."
      },
      {
        "term": "Prefetching",
        "desc": "Unverbindliches Laden von Ressourcen, die der Nutzer bald brauchen könnte."
      },
      {
        "term": "Preloading",
        "desc": "Priorisiertes Laden kritischer Ressourcen für den aktuellen Seitenaufruf."
      },
      {
        "term": "Proxy",
        "desc": "Zwischenstation, die Anfragen im Namen des Clients weiterleitet."
      },
      {
        "term": "PWA",
        "desc": "Web-Apps, die native Funktionen wie Offline-Modus und Push bieten."
      },
      {
        "term": "Rate Limiting",
        "desc": "Schutzmechanismus zur Begrenzung von API-Anfragen pro Zeiteinheit."
      },
      {
        "term": "REST",
        "desc": "Architekturstil für einfache, zustandslose Web-Schnittstellen via HTTP."
      },
      {
        "term": "Reverse Proxy",
        "desc": "Server, der Anfragen entgegennimmt und an interne Backend-Dienste verteilt."
      },
      {
        "term": "Reverse Shell in Browser",
        "desc": "Nutzung von Web-Technologien zur Fernsteuerung/Kommunikation."
      },
      {
        "term": "Same-Origin Policy",
        "desc": "Elementares Browser-Sicherheitskonzept gegen domainübergreifende Zugriffe."
      },
      {
        "term": "SameSite Cookies",
        "desc": "Attribut zum Schutz vor Cross-Site-Request-Forgery (CSRF)."
      },
      {
        "term": "SEO",
        "desc": "Search Engine Optimization – Optimierung von Webseiten für Suchmaschinen."
      },
      {
        "term": "Server-Sent Events (SSE)",
        "desc": "Einseitiger Push-Kanal vom Server zum Browser für Echtzeit-Updates."
      },
      {
        "term": "Service Worker",
        "desc": "Skript, das im Hintergrund läuft und Offline-Features ermöglicht."
      },
      {
        "term": "Session Storage",
        "desc": "Kurzzeitiger Browser-Speicher, der beim Schließen des Tabs gelöscht wird."
      },
      {
        "term": "Shadow DOM",
        "desc": "Isolierter Teil des DOMs zur Kapselung von Komponenten-Styles."
      },
      {
        "term": "Single Sign-On (SSO)",
        "desc": "Zentrales Login-Verfahren für den Zugriff auf mehrere Webdienste."
      },
      {
        "term": "SPA / MPA",
        "desc": "Dynamische Single-Page-Apps vs. klassische Multi-Page-Anwendungen."
      },
      {
        "term": "SSG",
        "desc": "Vorausberechnung kompletter Webseiten als statische Dateien zur Build-Zeit."
      },
      {
        "term": "SSR / CSR",
        "desc": "Server-seitiges vs. Client-seitiges Erzeugen des HTML-Inhalts."
      },
      {
        "term": "State Management",
        "desc": "Architektur zur konsistenten Datenverwaltung über die gesamte UI hinweg."
      },
      {
        "term": "SWR / React Query",
        "desc": "Bibliotheken zur effizienten Synchronisation und zum Caching von API-Daten."
      },
      {
        "term": "Throttling",
        "desc": "Künstliche Begrenzung der Ausführungsfrequenz einer Funktion (z.B. Scroll-Events)."
      },
      {
        "term": "tRPC",
        "desc": "Framework für typsichere API-Kommunikation zwischen Frontend und Backend."
      },
      {
        "term": "URL Encoding",
        "desc": "Umwandlung von Sonderzeichen in ein für URLs gültiges Format."
      },
      {
        "term": "Vary Header",
        "desc": "HTTP-Header, der dem Cache mitteilt, welche Header-Variationen wichtig sind."
      },
      {
        "term": "Virtual DOM",
        "desc": "Eine speicherinterne Repräsentation des DOMs (z. B. in React) zur Optimierung von Renderings."
      },
      {
        "term": "Web Components",
        "desc": "Satz von Web-Standards zur Erstellung wiederverwendbarer UI-Elemente."
      },
      {
        "term": "Web Manifest",
        "desc": "JSON-Datei mit Metadaten zur Installation einer PWA."
      },
      {
        "term": "WebAssembly (WASM)",
        "desc": "Binärformat, um rechenintensive Programme in nativer Speed im Browser auszuführen."
      },
      {
        "term": "WebAuthn",
        "desc": "Moderner Standard für passwortlose Logins mittels Biometrie oder Sicherheitsschlüssel."
      },
      {
        "term": "WebRTC",
        "desc": "API für Echtzeitkommunikation (Video, Audio, Daten) direkt im Browser ohne Plugins."
      },
      {
        "term": "WebSockets",
        "desc": "Technologie für dauerhafte, bidirektionale Echtzeit-Kommunikation."
      }
    ]
  },
  {
    "id": "api_schnittstellen",
    "nav_title": "🔌 APIs & Schnittstellen",
    "sec_title": "Datenkommunikation & APIs",
    "cards": [
      {
        "term": "REST (Representational State Transfer)",
        "desc": "Architekturstil für Webservices, nutzt Standard-HTTP-Methoden (GET, POST, PUT, DELETE) und oft JSON."
      },
      {
        "term": "GraphQL",
        "desc": "Abfragesprache für APIs, die es Clients ermöglicht, genau die Daten anzufordern, die sie benötigen (vermeidet Over/Under-Fetching)."
      },
      {
        "term": "SOAP",
        "desc": "Ein XML-basiertes Protokoll für den Austausch von Informationen in Webservices (oft starrer als REST)."
      },
      {
        "term": "JSON",
        "desc": "JavaScript Object Notation: Leichtgewichtiges, textbasiertes Datenaustauschformat, ideal für APIs."
      },
      {
        "term": "JWT (JSON Web Token)",
        "desc": "Kompaktes URL-sicheres Format zur Übertragung von Claims zwischen Parteien, häufig für Authentifizierung (Stateless)."
      }
    ]
  },
  {
    "id": "testing_cicd",
    "nav_title": "🧪 Testing & CI/CD",
    "sec_title": "Qualitätssicherung & Automatisierung",
    "cards": [
      {
        "term": "Unit Test",
        "desc": "Testet die kleinste isolierte Code-Einheit (z.B. eine Methode/Funktion) auf Korrektheit."
      },
      {
        "term": "Integrationstest",
        "desc": "Testet das Zusammenspiel mehrerer Komponenten oder Module."
      },
      {
        "term": "TDD (Test-Driven Development)",
        "desc": "Entwicklungsmethode: Zuerst den fehlschlagenden Test schreiben, dann Code schreiben bis er besteht, anschließend Refactoring."
      },
      {
        "term": "CI/CD",
        "desc": "Continuous Integration (Regelmäßiges Zusammenführen & Testen) und Continuous Deployment/Delivery (Automatisches Ausliefern von Code)."
      },
      {
        "term": "Mocking",
        "desc": "Simulieren des Verhaltens echter Objekte in Unit-Tests (z.B. eine Datenbank-Schnittstelle faken)."
      }
    ]
  },
  {
    "id": "sec9",
    "nav_title": "🚦 HTTP-Statuscodes",
    "sec_title": "HTTP-Statuscodes",
    "cards": [
      {
        "term": "100 Continue",
        "desc": "Der Server hat den ersten Teil der Anfrage erhalten und der Client kann fortfahren."
      },
      {
        "term": "101 Switching Protocols",
        "desc": "Der Server akzeptiert den Protokollwechsel (z. B. auf WebSockets)."
      },
      {
        "term": "102 Processing",
        "desc": "Der Server bearbeitet die Anfrage, aber es ist noch keine Antwort verfügbar."
      },
      {
        "term": "103 Early Hints",
        "desc": "Wird verwendet, um HTTP-Header zurückzugeben, bevor die vollständige Serverantwort bereit ist."
      },
      {
        "term": "200 OK",
        "desc": "Anfrage erfolgreich bearbeitet."
      },
      {
        "term": "201 Created",
        "desc": "Ressource wurde erfolgreich erstellt."
      },
      {
        "term": "202 Accepted",
        "desc": "Anfrage akzeptiert, aber Bearbeitung noch nicht abgeschlossen."
      },
      {
        "term": "203 Non-Authoritative Information",
        "desc": "Informationen aus dritter Hand (Proxy)."
      },
      {
        "term": "204 No Content",
        "desc": "Erfolg, aber keine Daten im Body (z.B. nach Delete)."
      },
      {
        "term": "205 Reset Content",
        "desc": "Erfolgreich, Client soll die Ansicht zurücksetzen (z.B. Formular leeren)."
      },
      {
        "term": "206 Partial Content",
        "desc": "Teilweise erfolgreiche Anfrage (wichtig für Video-Streaming oder Download-Resumes)."
      },
      {
        "term": "207 Multi-Status",
        "desc": "Übermittelt den Status für mehrere unabhängige Operationen."
      },
      {
        "term": "208 Already Reported",
        "desc": "Die Mitglieder einer WebDAV-Bindung wurden bereits in einer vorherigen Antwort aufgezählt."
      },
      {
        "term": "226 IM Used",
        "desc": "Der Server hat die GET-Anfrage für die Ressource erfüllt und die Antwort ist eine Darstellung des Ergebnisses einer oder mehrerer Instanz-Manipulationen (IM)."
      },
      {
        "term": "300 Multiple Choices",
        "desc": "Es stehen mehrere Optionen zur Auswahl."
      },
      {
        "term": "301 Moved Permanently",
        "desc": "Ressource wurde dauerhaft an eine neue URL verschoben."
      },
      {
        "term": "302 Found",
        "desc": "Ressource wurde temporär an eine andere URL verschoben."
      },
      {
        "term": "303 See Other",
        "desc": "Die Antwort ist unter einem anderen URI zu finden (meist nach POST)."
      },
      {
        "term": "304 Not Modified",
        "desc": "Ressource hat sich nicht geändert und kann aus dem Cache geladen werden."
      },
      {
        "term": "305 Use Proxy",
        "desc": "Die angeforderte Ressource ist nur über einen Proxy zugänglich (veraltet)."
      },
      {
        "term": "307 Temporary Redirect",
        "desc": "Temporäre Umleitung, Methode (GET/POST) darf sich nicht ändern."
      },
      {
        "term": "308 Permanent Redirect",
        "desc": "Dauerhafte Umleitung, Methode (GET/POST) darf sich nicht ändern."
      },
      {
        "term": "400 Bad Request",
        "desc": "Ungültige Anfrage (Syntaxfehler)."
      },
      {
        "term": "401 Unauthorized",
        "desc": "Authentifizierung fehlt oder ist ungültig."
      },
      {
        "term": "402 Payment Required",
        "desc": "Für zukünftige Nutzung reserviert (ursprünglich für Mikrotransaktionen gedacht)."
      },
      {
        "term": "403 Forbidden",
        "desc": "Authentifiziert, aber keine Berechtigung für diese Aktion."
      },
      {
        "term": "404 Not Found",
        "desc": "Ressource nicht gefunden."
      },
      {
        "term": "405 Method Not Allowed",
        "desc": "Die verwendete HTTP-Methode (z.B. POST) ist für diese Ressource nicht erlaubt."
      },
      {
        "term": "406 Not Acceptable",
        "desc": "Der Server kann keine Antwort senden, die den Accept-Headern des Clients entspricht."
      },
      {
        "term": "407 Proxy Authentication Required",
        "desc": "Client muss sich beim Proxy authentifizieren."
      },
      {
        "term": "408 Request Timeout",
        "desc": "Server hat auf die Anfrage des Clients gewartet, aber Zeit überschritten."
      },
      {
        "term": "409 Conflict",
        "desc": "Anfrage kollidiert mit aktuellem Serverstatus (z.B. Doublette)."
      },
      {
        "term": "410 Gone",
        "desc": "Ressource wurde dauerhaft gelöscht und wird nicht zurückkehren."
      },
      {
        "term": "411 Length Required",
        "desc": "Content-Length Header wird vom Server zwingend erwartet."
      },
      {
        "term": "412 Precondition Failed",
        "desc": "Eine Vorbedingung in den Headern wurde nicht erfüllt."
      },
      {
        "term": "413 Payload Too Large",
        "desc": "Die Anfrage (z.B. Dateiupload) ist zu groß für den Server."
      },
      {
        "term": "414 URI Too Long",
        "desc": "Die URL ist zu lang."
      },
      {
        "term": "415 Unsupported Media Type",
        "desc": "Das Format der Anfrage wird vom Server nicht unterstützt."
      },
      {
        "term": "416 Range Not Satisfiable",
        "desc": "Der angeforderte Byte-Bereich der Datei existiert nicht."
      },
      {
        "term": "417 Expectation Failed",
        "desc": "Server kann der Expect-Header Anforderung nicht entsprechen."
      },
      {
        "term": "418 I'm a teapot",
        "desc": "April-Scherz der IETF (RFC 2324)."
      },
      {
        "term": "421 Misdirected Request",
        "desc": "Anfrage an einen Server, der keine Antwort produzieren kann."
      },
      {
        "term": "422 Unprocessable Entity",
        "desc": "Syntax korrekt, aber semantische Fehler (WebDAV/APIs)."
      },
      {
        "term": "423 Locked",
        "desc": "Die Ressource ist gesperrt (WebDAV)."
      },
      {
        "term": "424 Failed Dependency",
        "desc": "Anfrage fehlgeschlagen, da eine vorherige Anfrage scheiterte (WebDAV)."
      },
      {
        "term": "425 Too Early",
        "desc": "Der Server ist nicht bereit, eine Anfrage zu verarbeiten, die möglicherweise wiederholt wird."
      },
      {
        "term": "426 Upgrade Required",
        "desc": "Der Client sollte auf ein anderes Protokoll wechseln."
      },
      {
        "term": "428 Precondition Required",
        "desc": "Der Ursprungsserver erfordert die Bedingung der Anfrage."
      },
      {
        "term": "429 Too Many Requests",
        "desc": "Rate Limit überschritten."
      },
      {
        "term": "431 Request Header Fields Too Large",
        "desc": "Die Header-Felder der Anfrage sind zu groß."
      },
      {
        "term": "451 Unavailable For Legal Reasons",
        "desc": "Ressource gesperrt aus rechtlichen Gründen (z.B. Zensur)."
      },
      {
        "term": "500 Internal Error",
        "desc": "Allgemeiner Serverfehler."
      },
      {
        "term": "501 Not Implemented",
        "desc": "Server unterstützt die erforderliche Funktionalität nicht."
      },
      {
        "term": "502 Bad Gateway",
        "desc": "Server, der als Proxy/Gateway agiert, erhielt eine ungültige Antwort vom Upstream-Server."
      },
      {
        "term": "503 Service Unavailable",
        "desc": "Server überlastet oder wegen Wartung down."
      },
      {
        "term": "504 Gateway Timeout",
        "desc": "Server, der als Proxy/Gateway agiert, erhielt nicht rechtzeitig eine Antwort vom Upstream-Server."
      },
      {
        "term": "505 HTTP Version Not Supported",
        "desc": "Die verwendete HTTP-Version wird nicht unterstützt."
      },
      {
        "term": "506 Variant Also Negotiates",
        "desc": "Interner Konfigurationsfehler bei Inhaltsaushandlung."
      },
      {
        "term": "507 Insufficient Storage",
        "desc": "Server hat keinen Speicherplatz mehr (WebDAV)."
      },
      {
        "term": "508 Loop Detected",
        "desc": "Endlosschleife bei der Verarbeitung der Anfrage (WebDAV)."
      },
      {
        "term": "510 Not Extended",
        "desc": "Weitere Erweiterungen der Anfrage sind erforderlich."
      },
      {
        "term": "511 Network Authentication Required",
        "desc": "Der Client muss sich authentifizieren, um Netzwerkzugriff zu erhalten."
      }
    ]
  },
  {
    "id": "algo_datenstrukturen",
    "nav_title": "🧮 Algo. & Datenstrukturen",
    "sec_title": "Algorithmen & Big O",
    "cards": [
      {
        "term": "Big-O Notation",
        "desc": "Beschreibt die Laufzeit oder den Speicherbedarf eines Algorithmus (z.B. O(1), O(n), O(n^2))."
      },
      {
        "term": "Array",
        "desc": "Datenstruktur, die Elemente desselben Typs zusammenhängend im Speicher ablegt (feste Größe, O(1) Index-Zugriff)."
      },
      {
        "term": "Linked List",
        "desc": "Verkettete Liste: Elemente (Nodes) zeigen jeweils auf das nächste Element. Gut für schnelles Einfügen, schlecht für direkten Zugriff."
      },
      {
        "term": "Hash Map / Dictionary",
        "desc": "Speichert Schlüssel-Wert-Paare (Key-Value) für in der Regel sehr schnelle O(1) Suchzugriffe."
      },
      {
        "term": "Binary Search",
        "desc": "Suchalgorithmus auf sortierten Arrays, der das Suchfeld mit jedem Schritt halbiert (O(log n))."
      },
      {
        "term": "Bubble Sort",
        "desc": "Einfacher, ineffizienter Sortieralgorithmus (O(n^2)), bei dem benachbarte Elemente wiederholt getauscht werden."
      }
    ]
  },
  {
    "id": "sec10",
    "nav_title": "🗄️ Datenbanken",
    "sec_title": "Datenbanken",
    "cards": [
      {
        "term": "1NF / 2NF / 3NF",
        "desc": "Normalformen zur DB-Strukturierung."
      },
      {
        "term": "ACID",
        "desc": "Vier Grundregeln für sichere Transaktionen (Atomicity, Consistency, Isolation, Durability)."
      },
      {
        "term": "BASE",
        "desc": "NoSQL-Prinzip: Basically Available, Soft-State, Eventual Consistency."
      },
      {
        "term": "BCNF",
        "desc": "Boyce-Codd-Normalform – strengere Variante von 3NF."
      },
      {
        "term": "CAP Theorem",
        "desc": "Consistency, Availability, Partition Tolerance – nur 2 gleichzeitig möglich."
      },
      {
        "term": "Caching",
        "desc": "Vorübergehendes Speichern häufiger Abfrageergebnisse im schnellen RAM."
      },
      {
        "term": "Check Constraint",
        "desc": "Validiert Werte beim Schreiben."
      },
      {
        "term": "Cluster",
        "desc": "Verbund mehrerer Datenbankserver für Lastverteilung."
      },
      {
        "term": "Cursor",
        "desc": "Row-by-Row Verarbeitung von Daten."
      },
      {
        "term": "Data Lake",
        "desc": "Rohdaten-Speicher ohne feste Struktur."
      },
      {
        "term": "Data Warehouse",
        "desc": "Zentrale Speicherung historischer Geschäftsdaten."
      },
      {
        "term": "Deadlock",
        "desc": "Zwei Transaktionen blockieren sich gegenseitig."
      },
      {
        "term": "Denormalization",
        "desc": "Bewusste Redundanz für Performance."
      },
      {
        "term": "Document Store",
        "desc": "NoSQL-Datenbanken, die JSON-ähnliche Dokumente speichern."
      },
      {
        "term": "ELT",
        "desc": "Extract – Load – Transform (Cloud-Optimiert)."
      },
      {
        "term": "ETL",
        "desc": "Extract – Transform – Load für Daten integration."
      },
      {
        "term": "Eventual Consistency",
        "desc": "Daten werden zeitverzögert konsistent."
      },
      {
        "term": "Failover",
        "desc": "Automatischer Wechsel zu Backup-Datenbank."
      },
      {
        "term": "Foreign Key",
        "desc": "Beziehungsdefinition zwischen Tabellen."
      },
      {
        "term": "Full Table Scan",
        "desc": "Komplette Tabelle muss gelesen werden."
      },
      {
        "term": "Graph Database",
        "desc": "Datenbank, die Beziehungen als Erstklasse modelliert (z.B. Neo4j)."
      },
      {
        "term": "Hard Delete",
        "desc": "Daten endgültig entfernen."
      },
      {
        "term": "Hot Standby",
        "desc": "Passiver Server, der sofort übernehmen kann."
      },
      {
        "term": "In-Memory Database",
        "desc": "Datenbank, die primär im RAM läuft (z.B. Redis)."
      },
      {
        "term": "Index",
        "desc": "Spezielle Datenstruktur zur massiven Beschleunigung von Suchabfragen."
      },
      {
        "term": "Index Scan",
        "desc": "Lesen von Daten über Index."
      },
      {
        "term": "Join",
        "desc": "Befehl zur logischen Verknüpfung von Daten aus mehreren Tabellen."
      },
      {
        "term": "Key-Value Store",
        "desc": "Einfache NoSQL-Struktur mit Schlüssel → Wert."
      },
      {
        "term": "Master-Master Replication",
        "desc": "Mehrere Knoten können lesen & schreiben."
      },
      {
        "term": "Master-Slave Replication",
        "desc": "Primäre Schreibinstanz mit sekundären Leser-Einheiten."
      },
      {
        "term": "Materialized View",
        "desc": "Gespeicherte, physische Ergebnisse einer Abfrage."
      },
      {
        "term": "Migration",
        "desc": "Versionierte Skripte zur Änderung der Datenbankstruktur (Schema)."
      },
      {
        "term": "Normalization",
        "desc": "Tabellenzerlegung zur Reduzierung von Redundanz."
      },
      {
        "term": "OLAP",
        "desc": "Analyseorientierte Datenbanken für Reporting."
      },
      {
        "term": "OLTP",
        "desc": "Operationales System für schnelle Schreiboperationen."
      },
      {
        "term": "ORM",
        "desc": "Mapper zwischen Objekten im Programmcode und Tabellen in der Datenbank."
      },
      {
        "term": "Partition Key",
        "desc": "Schlüssel, der die Datenverteilung bestimmt."
      },
      {
        "term": "Partitionierung",
        "desc": "Segmentierung großer Tabellen in handliche, logische Untereinheiten."
      },
      {
        "term": "Primary Key",
        "desc": "Eindeutiger Identifikator einer Zeile."
      },
      {
        "term": "Query Cache",
        "desc": "Zwischenspeichern fertiger Abfrageergebnisse."
      },
      {
        "term": "Query Plan",
        "desc": "Optimierter Ausführungsplan einer Abfrage."
      },
      {
        "term": "RDBMS",
        "desc": "Relationales Datenbanksystem auf Basis von Tabellen."
      },
      {
        "term": "Replication",
        "desc": "Kopieren von Daten über mehrere Server zur Ausfallsicherheit."
      },
      {
        "term": "Row Lock",
        "desc": "Sperrt eine Zeile während Transaktionen."
      },
      {
        "term": "Sharded Key Range",
        "desc": "Aufteilung anhand eines Schlüsselbereichs."
      },
      {
        "term": "Sharding",
        "desc": "Horizontales Aufteilen einer Datenbank auf mehrere physische Server."
      },
      {
        "term": "Soft Delete",
        "desc": "Markieren statt physisch löschen."
      },
      {
        "term": "SQL / NoSQL",
        "desc": "Strukturierte Abfragesprache für Tabellen vs. flexible Dokumente/Key-Values."
      },
      {
        "term": "Stored Procedure",
        "desc": "Gespeicherte DB-Funktion mit Logik."
      },
      {
        "term": "Strong Consistency",
        "desc": "Sofortige, synchrone Konsistenz."
      },
      {
        "term": "Table Lock",
        "desc": "Sperrt eine komplette Tabelle."
      },
      {
        "term": "Tablespace",
        "desc": "Physischer Speicherbereich für DB-Objekte."
      },
      {
        "term": "Transaction Isolation Level",
        "desc": "Steuert parallele Lesekonflikte."
      },
      {
        "term": "Trigger",
        "desc": "Automatische Ausführung bei DB-Ereignissen."
      },
      {
        "term": "TTL (Time to Live)",
        "desc": "Ablaufzeit für Datensätze."
      },
      {
        "term": "Unique Constraint",
        "desc": "Wert darf nur einmal vorkommen."
      },
      {
        "term": "Upsert",
        "desc": "Insert oder Update, je nach Existenz."
      },
      {
        "term": "View",
        "desc": "Dynamische, virtuelle Abfrage auf Tabellen."
      },
      {
        "term": "Wide Column Store",
        "desc": "NoSQL-Systeme mit spaltenorientierten Familien (z.B. Cassandra)."
      },
      {
        "term": "Write-Ahead Logging (WAL)",
        "desc": "Änderungen zuerst ins Log, dann ins DB-File."
      },
      {
        "term": "NoSQL",
        "desc": "Datenbanken für unstrukturierte oder semi-strukturierte Daten (z.B. MongoDB, Redis)."
      }
    ]
  },
  {
    "id": "sec_sql",
    "nav_title": "🛢️ SQL Befehle",
    "sec_title": "SQL Befehle & Queries",
    "cards": [
      {
        "term": "SELECT",
        "desc": "Ruft Daten aus einer Datenbank ab."
      },
      {
        "term": "INSERT INTO",
        "desc": "Fügt neue Datensätze in eine Tabelle ein."
      },
      {
        "term": "UPDATE",
        "desc": "Aktualisiert bestehende Datensätze in einer Tabelle."
      },
      {
        "term": "DELETE",
        "desc": "Löscht Datensätze aus einer Tabelle."
      },
      {
        "term": "JOIN",
        "desc": "Verbindet Zeilen aus zwei oder mehr Tabellen basierend auf einer verknüpften Spalte."
      },
      {
        "term": "INNER JOIN",
        "desc": "Gibt Datensätze zurück, die in beiden verknüpften Tabellen übereinstimmen."
      },
      {
        "term": "LEFT JOIN",
        "desc": "Gibt alle Datensätze der linken Tabelle und die übereinstimmenden der rechten Tabelle zurück."
      },
      {
        "term": "RIGHT JOIN",
        "desc": "Gibt alle Datensätze der rechten Tabelle und die übereinstimmenden der linken Tabelle zurück."
      },
      {
        "term": "FULL OUTER JOIN",
        "desc": "Gibt alle Datensätze zurück, wenn es eine Übereinstimmung in der linken oder rechten Tabelle gibt."
      },
      {
        "term": "WHERE",
        "desc": "Filtert Datensätze, um nur diejenigen abzurufen, die eine bestimmte Bedingung erfüllen."
      },
      {
        "term": "GROUP BY",
        "desc": "Gruppiert Datensätze mit denselben Werten in Auswertungszeilen (z. B. mit COUNT, SUM)."
      },
      {
        "term": "HAVING",
        "desc": "Filtert Gruppen basierend auf einer Bedingung (ähnlich wie WHERE, aber für GROUP BY)."
      },
      {
        "term": "ORDER BY",
        "desc": "Sortiert die Ergebnismenge in aufsteigender oder absteigender Reihenfolge."
      },
      {
        "term": "LIMIT / TOP",
        "desc": "Begrenzt die Anzahl der zurückgegebenen Datensätze."
      },
      {
        "term": "DISTINCT",
        "desc": "Gibt nur unterschiedliche (einzigartige) Werte zurück."
      },
      {
        "term": "UNION",
        "desc": "Kombiniert die Ergebnismengen von zwei oder mehr SELECT-Anweisungen."
      },
      {
        "term": "IN",
        "desc": "Erlaubt die Angabe mehrerer Werte in einer WHERE-Klausel."
      },
      {
        "term": "BETWEEN",
        "desc": "Wählt Werte innerhalb eines bestimmten Bereichs aus."
      },
      {
        "term": "LIKE",
        "desc": "Sucht nach einem bestimmten Muster in einer Spalte (oft mit %-Wildcards)."
      },
      {
        "term": "IS NULL",
        "desc": "Prüft, ob ein Wert NULL (leer) ist."
      },
      {
        "term": "COUNT / SUM / AVG",
        "desc": "Aggregatfunktionen zum Zählen, Summieren oder Berechnen des Durchschnitts von Werten."
      },
      {
        "term": "COMMIT",
        "desc": "Speichert die aktuellen Transaktionen dauerhaft in der Datenbank."
      },
      {
        "term": "ROLLBACK",
        "desc": "Macht die aktuellen Transaktionen seit dem letzten COMMIT rückgängig."
      },
      {
        "term": "CREATE TABLE",
        "desc": "Erstellt eine neue Tabelle in der Datenbank."
      },
      {
        "term": "ALTER TABLE",
        "desc": "Ändert die Struktur einer bestehenden Tabelle."
      },
      {
        "term": "DROP TABLE",
        "desc": "Löscht eine komplette Tabelle und alle darin enthaltenen Daten."
      },
      {
        "term": "TRUNCATE",
        "desc": "Löscht alle Datensätze in einer Tabelle schnell, ohne die Tabellenstruktur zu entfernen."
      }
    ]
  },
  {
    "id": "sec12",
    "nav_title": "🛡️ Cyber‑Security",
    "sec_title": "Sicherheit (Cyber-Security)",
    "cards": [
      {
        "term": "ABAC",
        "desc": "Zugriffskontrolle basierend auf Attributen (Zeit, Ort, Gerät)."
      },
      {
        "term": "Access Token Theft",
        "desc": "Diebstahl von Sitzungsschlüsseln zur Identitätsübernahme."
      },
      {
        "term": "Attack Surface",
        "desc": "Summe aller Angriffsvektoren eines Systems."
      },
      {
        "term": "AuthN / AuthZ",
        "desc": "Identitätsprüfung (Wer?) vs. Rechteprüfung (Was?)."
      },
      {
        "term": "Backdoor",
        "desc": "Heimlicher Systemzugang unter Umgehung der Sicherung."
      },
      {
        "term": "Blue Team",
        "desc": "Defensive Experten zur Angriffsabwehr."
      },
      {
        "term": "Botnet",
        "desc": "Netzwerk gekaperter Rechner für Massenangriffe (DDoS)."
      },
      {
        "term": "Brute Force",
        "desc": "Automatisches Durchprobieren aller Passwortkombinationen."
      },
      {
        "term": "Certificate Pinning",
        "desc": "Erzwingt ein spezifisches SSL-Zertifikat gegen MITM-Angriffe."
      },
      {
        "term": "CSP",
        "desc": "Browser-Richtlinie gegen XSS und Data Injection."
      },
      {
        "term": "CSRF",
        "desc": "Befehlsausführung im Namen eines eingeloggten Nutzers."
      },
      {
        "term": "CVE / CVSS",
        "desc": "Standardliste für Schwachstellen / Bewertungsskala (0-10)."
      },
      {
        "term": "DDoS",
        "desc": "Distributed Denial of Service – Überlastung eines Servers durch eine Vielzahl von Anfragen aus unterschiedlichen Quellen."
      },
      {
        "term": "Dictionary Attack",
        "desc": "Angriff mittels Listen bekannter Passwörter."
      },
      {
        "term": "DLP",
        "desc": "Schutz vor unbefugtem Abfluss sensibler Daten."
      },
      {
        "term": "Endpoint Protection",
        "desc": "Sicherheitssoftware direkt auf PCs und Mobilgeräten."
      },
      {
        "term": "Exploit",
        "desc": "Code, der eine spezifische Sicherheitslücke ausnutzt."
      },
      {
        "term": "Firewall",
        "desc": "Netzwerkfilter basierend auf IP- oder Port-Regeln."
      },
      {
        "term": "Hardening",
        "desc": "Systemabsicherung durch Deaktivierung unnötiger Dienste."
      },
      {
        "term": "Honeypot",
        "desc": "Lockvogel-System zur Analyse von Angreifern."
      },
      {
        "term": "IDS / IPS",
        "desc": "Angriffserkennung (Alarm) vs. Angriffsverhinderung (Block)."
      },
      {
        "term": "Input Validation",
        "desc": "Filterung eingehender Daten gegen Schadcode (Injection)."
      },
      {
        "term": "JWT",
        "desc": "Signierter Datensatz zur Statusübertragung zwischen Servern."
      },
      {
        "term": "MAC",
        "desc": "Zentral gesteuerte, unumgehbare Zugriffskontrolle."
      },
      {
        "term": "Malware",
        "desc": "Sammelbegriff für Viren, Trojaner und Spyware."
      },
      {
        "term": "MITM",
        "desc": "Angreifer fängt Kommunikation zwischen zwei Partnern ab."
      },
      {
        "term": "MTLS",
        "desc": "Gegenseitige Zertifikatsprüfung (Server und Client)."
      },
      {
        "term": "OAuth2 / OIDC",
        "desc": "Protokolle für Datenzugriff (Scopes) und Identität (ID-Token)."
      },
      {
        "term": "Output Encoding",
        "desc": "Neutralisierung von Sonderzeichen vor der HTML-Ausgabe."
      },
      {
        "term": "Password Salting",
        "desc": "Zufallswerte pro User gegen Rainbow-Table-Angriffe."
      },
      {
        "term": "Penetration Test",
        "desc": "Autorisierter Hackerangriff zur Schwachstellensuche."
      },
      {
        "term": "Peppering",
        "desc": "Globaler Geheimwert im Code zur Hash-Absicherung."
      },
      {
        "term": "Phishing / Whaling",
        "desc": "Betrug per Mail (Allgemein vs. gezielt auf Führungsebene)."
      },
      {
        "term": "Privilege Escalation",
        "desc": "Unbefugtes Erweitern von Nutzerrechten (horizontal/vertikal)."
      },
      {
        "term": "Purple Team",
        "desc": "Zusammenarbeit von Angriff (Red) und Verteidigung (Blue)."
      },
      {
        "term": "Ransomware",
        "desc": "Verschlüsselungstrojaner mit Lösegeldforderung."
      },
      {
        "term": "Rate Limiting",
        "desc": "Drosselung von Anfragen zum DoS-Schutz."
      },
      {
        "term": "RBAC",
        "desc": "Rechtevergabe basierend auf vordefinierten Rollen."
      },
      {
        "term": "Red Team",
        "desc": "Offensive Experten simulieren reale Hackerangriffe."
      },
      {
        "term": "Refresh Token Rotation",
        "desc": "Einmalige Nutzung von Refresh-Tokens zur Erhöhung der Sicherheit."
      },
      {
        "term": "Replay Attack",
        "desc": "Wiederholung abgefangener, eigentlich gültiger Netzwerkdaten."
      },
      {
        "term": "Rootkit",
        "desc": "Tarn-Malware, die tief im Betriebssystem nistet."
      },
      {
        "term": "SAST / DAST",
        "desc": "Code-Analyse (Statisch) vs. Laufzeit-Test (Dynamisch)."
      },
      {
        "term": "SCA",
        "desc": "Prüfung von Drittanbieter-Libraries auf bekannte Lücken."
      },
      {
        "term": "Session Hijacking",
        "desc": "Übernahme einer aktiven Websitzung (Cookie-Diebstahl)."
      },
      {
        "term": "SIEM",
        "desc": "Zentrale Überwachung und Korrelation von Sicherheitslogs."
      },
      {
        "term": "SQL Injection",
        "desc": "Einschleusen von Datenbankbefehlen über Eingabefelder."
      },
      {
        "term": "SSO",
        "desc": "Zentrale Anmeldung für mehrere unabhängige Dienste."
      },
      {
        "term": "Threat Modeling",
        "desc": "Systematische Analyse potenzieller Bedrohungsszenarien."
      },
      {
        "term": "TLS",
        "desc": "Verschlüsselungsstandard für Internetverbindungen (HTTPS)."
      },
      {
        "term": "WAF",
        "desc": "Schutzwall speziell für Web-Traffic (Filtert XSS/SQLi)."
      },
      {
        "term": "XSS (Cross-Site Scripting)",
        "desc": "Einschleusen von bösartigem JavaScript in eine vertrauenswürdige Website."
      },
      {
        "term": "Zero-Day",
        "desc": "Lücke ohne verfügbaren Patch (Tag Null der Entdeckung)."
      }
    ]
  },
  {
    "id": "sec13",
    "nav_title": "🚀 Performance",
    "sec_title": "Performance & Skalierung",
    "cards": [
      {
        "term": "Auto Scaling",
        "desc": "Automatisches Hinzufügen oder Entfernen von Instanzen basierend auf der aktuellen Systemlast."
      },
      {
        "term": "Backpressure",
        "desc": "Ein Mechanismus, der die Eingangsrate von Daten drosselt, wenn das verarbeitende System überlastet ist."
      },
      {
        "term": "Bottleneck",
        "desc": "Ein Engpass in der Kette (z. B. CPU, RAM oder Disk-I/O), der die Gesamtgeschwindigkeit des Systems limitiert."
      },
      {
        "term": "Bulkhead Pattern",
        "desc": "Abkapselung von Ressourcen (wie Schotten in einem Schiff), um zu verhindern, dass ein Fehler in einem Dienst das gesamte System mitreißt."
      },
      {
        "term": "Cache Hit",
        "desc": "Ein erfolgreicher Zugriff auf den Cache – die Daten wurden sofort gefunden und geliefert."
      },
      {
        "term": "Cache Miss",
        "desc": "Die angefragten Daten liegen nicht im Cache und müssen zeitaufwendig aus der Originalquelle (z. B. DB) geladen werden."
      },
      {
        "term": "Cache Stampede",
        "desc": "Ein Ereignis, bei dem sehr viele Clients gleichzeitig dieselben (gerade abgelaufenen) Daten anfragen und so das Backend überlasten."
      },
      {
        "term": "Cache Warming",
        "desc": "Das gezielte Befüllen des Caches mit wichtigen Daten vor der eigentlichen Nutzung, um Kaltstarts zu vermeiden."
      },
      {
        "term": "Caching",
        "desc": "Das Vorhalten von häufig benötigten Ergebnissen in einem schnellen Zwischenspeicher (RAM)."
      },
      {
        "term": "CDN (Content Delivery Network)",
        "desc": "Ein geografisch verteiltes Netz von Servern, das statische Inhalte (Bilder, JS) vom nächstgelegenen Standort an den Nutzer liefert."
      },
      {
        "term": "Circuit Breaker",
        "desc": "Ein Schutzschalter, der Anfragen an einen fehlerhaften Dienst sofort abbricht, um dem System Zeit zur Erholung zu geben."
      },
      {
        "term": "Cold Start",
        "desc": "Die Verzögerung beim ersten Aufruf einer Serverless-Funktion, wenn die Laufzeitumgebung erst neu initialisiert werden muss."
      },
      {
        "term": "Connection Pooling",
        "desc": "Die Wiederverwendung bestehender Datenbankverbindungen, statt für jede Anfrage eine teure neue Verbindung aufzubauen."
      },
      {
        "term": "CPU Bound",
        "desc": "Ein Prozess, dessen Geschwindigkeit primär durch die Rechenleistung des Prozessors begrenzt wird."
      },
      {
        "term": "Degraded Mode",
        "desc": "Ein Zustand, in dem ein System trotz Fehlern weiterläuft, aber unwichtige Funktionen (z. B. Empfehlungen) abschaltet, um stabil zu bleiben."
      },
      {
        "term": "Distributed Cache",
        "desc": "Ein Cache-System (z. B. Redis), das über mehrere Server hinweg geteilt wird und für alle Instanzen verfügbar ist."
      },
      {
        "term": "Exponential Backoff",
        "desc": "Eine Strategie für Wiederholungsversuche (Retries), bei der die Wartezeit zwischen den Versuchen exponentiell ansteigt."
      },
      {
        "term": "Failover Routing",
        "desc": "Das automatische Umleiten des Datenverkehrs auf ein Backup-System, falls der primäre Server ausfällt."
      },
      {
        "term": "Head-of-Line Blocking",
        "desc": "Ein Zustand, in dem eine langsame oder hängende Anfrage alle nachfolgenden Anfragen in der Warteschlange blockiert."
      },
      {
        "term": "Horizontal Scaling",
        "desc": "Erhöhung der Kapazität durch Hinzufügen weiterer Server/Instanzen (Scale Out)."
      },
      {
        "term": "Hot Partition",
        "desc": "Ein Problem beim Sharding, bei dem ein einzelner Datenknoten unverhältnismäßig viel Last erhält (Schieflage)."
      },
      {
        "term": "Hot Path",
        "desc": "Ein hochfrequentierter und performance-kritischer Teil des Quellcodes, der maximal optimiert werden muss."
      },
      {
        "term": "I/O Bound",
        "desc": "Ein Prozess, der die meiste Zeit auf Eingabe-/Ausgabe-Operationen (Netzwerk, Festplatte) wartet."
      },
      {
        "term": "Jitter",
        "desc": "Das Hinzufügen von Zufallswerten zu Backoff-Zeiten, um zu verhindern, dass viele Clients nach einem Fehler exakt gleichzeitig einen Retry senden."
      },
      {
        "term": "Latency (Latenz)",
        "desc": "Die zeitliche Verzögerung zwischen dem Absenden einer Anfrage und dem Erhalt der Antwort."
      },
      {
        "term": "Latency Budget",
        "desc": "Die maximal erlaubte Zeitverzögerung, die für jeden einzelnen Verarbeitungsschritt in einer Kette vorgesehen ist."
      },
      {
        "term": "Load Balancing Algorithm",
        "desc": "Strategien zur Lastverteilung (z. B. Round Robin, Least Connections oder IP-Hashing)."
      },
      {
        "term": "Load Shedding",
        "desc": "Das bewusste Verwerfen von weniger wichtigen Anfragen, um den Kern des Systems vor dem Totalabsturz zu bewahren."
      },
      {
        "term": "Memoization",
        "desc": "Eine Optimierungstechnik, bei der die Rückgabewerte teurer Funktionen für bestimmte Eingabeparameter im Speicher abgelegt werden."
      },
      {
        "term": "P99 Latency",
        "desc": "Eine Metrik, die besagt, dass 99 % aller Anfragen schneller als ein bestimmter Wert sind (wichtig für die Tail Latency)."
      },
      {
        "term": "Prefetching",
        "desc": "Das proaktive Laden von Daten in den Speicher, kurz bevor die Anwendung sie voraussichtlich anfordern wird."
      },
      {
        "term": "Preloading",
        "desc": "Das explizite Laden von kritischen Ressourcen beim Start der Anwendung, um spätere Ruckler zu vermeiden."
      },
      {
        "term": "QoS (Quality of Service)",
        "desc": "Die Priorisierung bestimmter Datenpakete oder Nutzergruppen gegenüber anderen, um wichtige Dienste bevorzugt zu behandeln."
      },
      {
        "term": "Queue Depth",
        "desc": "Die Anzahl der aktuell in einer Warteschlange befindlichen Aufgaben, die noch nicht verarbeitet wurden."
      },
      {
        "term": "Rate Limiting",
        "desc": "Die Begrenzung der maximal erlaubten Anfragen pro Nutzer oder Zeitfenster zum Schutz der Infrastruktur."
      },
      {
        "term": "Read Replica",
        "desc": "Eine Kopie der Hauptdatenbank, die ausschließlich für Leseanfragen genutzt wird, um den Hauptknoten zu entlasten."
      },
      {
        "term": "Resource Throttling",
        "desc": "Die künstliche Begrenzung von Ressourcen (CPU, RAM, Bandbreite) für bestimmte Prozesse oder Nutzer."
      },
      {
        "term": "Retry Policy",
        "desc": "Regelsatz, der festlegt, wann und wie oft eine fehlgeschlagene Operation automatisch wiederholt wird."
      },
      {
        "term": "Sharding",
        "desc": "Die horizontale Partitionierung von Datenbanken, bei der Daten über viele eigenständige Server verteilt werden."
      },
      {
        "term": "SLA (Service Level Agreement)",
        "desc": "Ein Vertrag zwischen Anbieter und Kunde, der die garantierte Verfügbarkeit und Leistung rechtlich festlegt."
      },
      {
        "term": "SLI (Service Level Indicator)",
        "desc": "Eine konkrete Messgröße (z. B. Latenz in ms), die zur Überprüfung der Systemleistung genutzt wird."
      },
      {
        "term": "SLO (Service Level Objective)",
        "desc": "Das interne Ziel für einen SLI (z. B. \"99,9 % aller Requests müssen unter 200 ms liegen\")."
      },
      {
        "term": "Tail Latency",
        "desc": "Die Antwortzeit für das langsamste Perzentil der Nutzer (z. B. P99 oder P99.9), oft verursacht durch Garbage Collection oder Netzstörungen."
      },
      {
        "term": "Thread Pool",
        "desc": "Eine Sammlung von im Voraus erstellten Threads, die bereitstehen, um Aufgaben effizient ohne Erzeugungskosten abzuarbeiten."
      },
      {
        "term": "Throttling",
        "desc": "Die absichtliche Verlangsamung eines Prozesses (z. B. Datenrate), um das System stabil zu halten oder Kosten zu begrenzen."
      },
      {
        "term": "Throughput (Durchsatz)",
        "desc": "Die Menge an erfolgreich verarbeiteten Einheiten (z. B. Anfragen oder MB) pro Zeiteinheit."
      },
      {
        "term": "Throughput Degradation",
        "desc": "Ein Leistungsabfall, bei dem das System trotz steigender Last immer weniger Anfragen erfolgreich abschließt."
      },
      {
        "term": "Throughput Scaling",
        "desc": "Die gezielte Erhöhung der Hardware-Ressourcen, um eine höhere Anzahl paralleler Anfragen zu bewältigen."
      },
      {
        "term": "Vertical Scaling",
        "desc": "Erhöhung der Leistung durch Aufrüstung der Hardware einer einzelnen Maschine (mehr CPU/RAM) (Scale Up)."
      },
      {
        "term": "Warm Cache Ratio",
        "desc": "Der Prozentsatz der Anfragen, die direkt aus einem bereits \"warmen\" Cache bedient werden konnten."
      },
      {
        "term": "Warm Start",
        "desc": "Ein schneller Start einer Serverless-Funktion, da eine bereits initialisierte Instanz im Speicher verfügbar ist."
      },
      {
        "term": "Write Back Cache",
        "desc": "Schreibzugriffe erfolgen zuerst in den Cache und werden erst später gesammelt in die Datenbank geschrieben (sehr schnell)."
      },
      {
        "term": "Write Through Cache",
        "desc": "Schreibzugriffe erfolgen gleichzeitig in den Cache und in die Datenbank (höhere Datensicherheit)."
      },
      {
        "term": "Load Balancing",
        "desc": "Verteilung von Netzwerk- oder Anwendungsverkehr auf mehrere Server."
      }
    ]
  },
  {
    "id": "sec11",
    "nav_title": "☁️ Cloud & Container",
    "sec_title": "Cloud & Container",
    "cards": [
      {
        "term": "Affinity / Anti-Affinity",
        "desc": "Regeln, welche Pods zusammen (oder getrennt) auf Nodes laufen."
      },
      {
        "term": "Auto Scaling",
        "desc": "Automatische Anpassung von Ressourcen basierend auf der Last."
      },
      {
        "term": "Bicep / Terraform",
        "desc": "IaC-Tools zur deklarativen Infrastruktur-Steuerung (Azure vs. Multi-Cloud)."
      },
      {
        "term": "Block / BLOB Storage",
        "desc": "Festplatten-Ersatz für VMs vs. günstiger Objektspeicher für Dateien."
      },
      {
        "term": "Blue-Green Deployment",
        "desc": "Zwei identische Umgebungen für risikofreie Versionswechsel."
      },
      {
        "term": "Canary Deployment",
        "desc": "Schrittweise Auslieferung neuer Versionen an kleine Nutzergruppen."
      },
      {
        "term": "Cloud Native",
        "desc": "Software-Design, das gezielt Cloud-Vorteile (Skalierung, Resilienz) nutzt."
      },
      {
        "term": "Cluster Autoscaler",
        "desc": "Passt die Anzahl der physischen Nodes im K8s-Cluster an."
      },
      {
        "term": "ConfigMap / Secrets",
        "desc": "Konfigurationsdaten für Pods (Unkritisch vs. Verschlüsselt)."
      },
      {
        "term": "Container",
        "desc": "Isolierte, leichtgewichtige Laufzeitumgebung für Anwendungen."
      },
      {
        "term": "Container Registry",
        "desc": "Zentrales Repository zum Speichern von Container-Images."
      },
      {
        "term": "DaemonSet",
        "desc": "Garantiert, dass ein bestimmter Pod auf jedem Node des Clusters läuft."
      },
      {
        "term": "Declarative Configuration",
        "desc": "Beschreibung des Zielzustands statt einzelner Befehle."
      },
      {
        "term": "Docker & Image",
        "desc": "Plattform für Container und deren statische Baupläne (Abbilder)."
      },
      {
        "term": "Edge / Fog Computing",
        "desc": "Datenverarbeitung nahe der Quelle vs. verteilte Zwischenschicht."
      },
      {
        "term": "FaaS / Serverless",
        "desc": "Ereignisgesteuerte Funktionsausführung ohne Server-Verwaltung."
      },
      {
        "term": "Health Probe",
        "desc": "Automatischer Check, ob ein Container noch lebt oder bereit ist."
      },
      {
        "term": "Helm / Chart",
        "desc": "Paketmanager für Kubernetes inkl. fertiger Deployment-Vorlagen."
      },
      {
        "term": "Horizontal Scaling",
        "desc": "Leistungssteigerung durch Hinzufügen weiterer Instanzen."
      },
      {
        "term": "Hybrid / Multi-Cloud",
        "desc": "Mix aus On-Premise/Cloud vs. Nutzung mehrerer Cloud-Anbieter."
      },
      {
        "term": "IaaS / PaaS / SaaS",
        "desc": "Ebenen der Cloud-Dienste: Infrastruktur, Plattform oder fertige Software."
      },
      {
        "term": "IaC (Infrastructure as Code)",
        "desc": "Infrastruktur-Verwaltung durch versionierbaren Programmiercode."
      },
      {
        "term": "Immutable Infrastructure",
        "desc": "Server werden bei Änderungen ersetzt, niemals im Betrieb modifiziert."
      },
      {
        "term": "Infrastructure Drift",
        "desc": "Abweichung zwischen realer Infrastruktur und IaC-Konfiguration."
      },
      {
        "term": "Ingress Controller",
        "desc": "Verwaltet den externen Zugriff (Routing/SSL) auf Cluster-Services."
      },
      {
        "term": "Init / Sidecar Container",
        "desc": "Hilfs-Container für Setup-Tasks vs. begleitende Logging/Proxy-Dienste."
      },
      {
        "term": "Job / CronJob",
        "desc": "Einmalige vs. zeitgesteuerte Aufgaben im Kubernetes-Cluster."
      },
      {
        "term": "Kubelet",
        "desc": "Der Agent, der auf jedem Node die Container-Ausführung steuert."
      },
      {
        "term": "Kubernetes (K8s)",
        "desc": "De-facto Standard zur Orchestrierung großer Container-Landschaften."
      },
      {
        "term": "Load Balancer",
        "desc": "Gleichmäßige Verteilung des Traffics auf mehrere Instanzen."
      },
      {
        "term": "Node",
        "desc": "Ein einzelner Server (virtuell oder physisch) innerhalb eines Clusters."
      },
      {
        "term": "Persistent Volume",
        "desc": "Dauerhafter Speicherplatz, der Container-Neustarts überlebt."
      },
      {
        "term": "Pod & Deployment",
        "desc": "Kleinste K8s-Einheit vs. Strategie für deren Auslieferung."
      },
      {
        "term": "Pod Eviction",
        "desc": "Erzwungenes Entfernen eines Pods (z.B. bei Ressourcenmangel)."
      },
      {
        "term": "Rollback / Rolling Update",
        "desc": "Rückkehr zur Vorversion vs. schrittweise Aktualisierung im Betrieb."
      },
      {
        "term": "Service Account",
        "desc": "Digitale Identität für Anwendungen innerhalb von Kubernetes."
      },
      {
        "term": "Service Mesh",
        "desc": "Infrastruktur-Layer für sichere Kommunikation zwischen Microservices."
      },
      {
        "term": "StatefulSet",
        "desc": "Verwaltet Pods, die eine feste Identität oder festen Speicher benötigen."
      },
      {
        "term": "Vertical Scaling",
        "desc": "Leistungssteigerung durch Aufrüsten einer bestehenden Maschine."
      },
      {
        "term": "VM (Virtuelle Maschine)",
        "desc": "Vollständige Hardware-Emulation inklusive eigenem Betriebssystem."
      }
    ]
  },
  {
    "id": "sec17",
    "nav_title": "🐳 Docker Befehle",
    "sec_title": "Docker Befehle",
    "cards": [
      {
        "term": "docker build -t [name] .",
        "desc": "Erstellt ein neues Docker-Image aus einem Dockerfile im aktuellen Verzeichnis."
      },
      {
        "term": "docker exec -it [ID] /bin/bash",
        "desc": "Öffnet ein Terminal direkt im laufenden Container."
      },
      {
        "term": "docker images",
        "desc": "Anzeigen aller lokal gespeicherten Images."
      },
      {
        "term": "docker logs -f [ID]",
        "desc": "Live-Verfolgung der Log-Ausgaben eines Containers."
      },
      {
        "term": "docker ps",
        "desc": "Listet alle aktuell laufenden Container auf."
      },
      {
        "term": "docker pull [image]",
        "desc": "Lädt ein Image aus einer Registry (z. B. Docker Hub) herunter."
      },
      {
        "term": "docker push [image]",
        "desc": "Lädt ein lokales Image in eine Registry hoch."
      },
      {
        "term": "docker rm [container]",
        "desc": "Löscht einen gestoppten Container."
      },
      {
        "term": "docker rmi [image]",
        "desc": "Löscht ein lokales Docker-Image."
      },
      {
        "term": "docker system prune",
        "desc": "Löscht alle ungenutzten Daten (Images, Container, Netzwerke)."
      },
      {
        "term": "docker-compose up -d",
        "desc": "Startet die gesamte Umgebung im Hintergrund (Detached)."
      },
      {
        "term": "docker compose",
        "desc": "Werkzeug zur Definition und Ausführung von Multi-Container-Docker-Anwendungen."
      },
      {
        "term": "docker exec -it",
        "desc": "Führt einen Befehl (oft eine interaktive Shell) in einem laufenden Container aus."
      }
    ]
  },
  {
    "id": "sec5",
    "nav_title": "🔧 Git & Versionierung",
    "sec_title": "Git & Versionskontrolle",
    "cards": [
      {
        "term": "Blame",
        "desc": "Zeigt für jede Codezeile an, welcher Autor sie wann zuletzt geändert hat."
      },
      {
        "term": "Branch",
        "desc": "Ein isolierter, paralleler Entwicklungszweig für Features oder Bugfixes."
      },
      {
        "term": "Cherry-Pick",
        "desc": "Einen ganz gezielten, einzelnen Commit aus einem anderen Branch übernehmen."
      },
      {
        "term": "Commit",
        "desc": "Ein gespeicherter Schnappschuss (Snapshot) von Code-Änderungen inkl. Nachricht."
      },
      {
        "term": "Conflict",
        "desc": "Tritt auf, wenn zwei Personen dieselbe Zeile unterschiedlich geändert haben (Merge-Konflikt)."
      },
      {
        "term": "Detached HEAD",
        "desc": "Zustand, in dem kein Branch ausgewählt ist, sondern direkt auf einem Commit gearbeitet wird."
      },
      {
        "term": "Fast-Forward",
        "desc": "Ein Merge, bei dem der Branch-Zeiger einfach auf den neuesten Commit verschoben wird."
      },
      {
        "term": "Fetch",
        "desc": "Ruft Informationen über Änderungen vom Server ab, ohne sie lokal zusammenzuführen."
      },
      {
        "term": "Fork",
        "desc": "Eine vollständige Kopie eines Repositories auf dem Server (oft für Open Source Beiträge)."
      },
      {
        "term": "Git Flow",
        "desc": "Ein Branching-Modell, das Branches für Features, Releases und Hotfixes strikt trennt."
      },
      {
        "term": "Git Hooks",
        "desc": "Skripte, die automatisch bei Ereignissen (z. B. vor einem Commit) ausgeführt werden."
      },
      {
        "term": "Merge",
        "desc": "Das Zusammenführen von Änderungen aus verschiedenen Zweigen zu einem gemeinsamen Stand."
      },
      {
        "term": "Origin / Upstream",
        "desc": "Standardname für den Hauptserver (Remote) vs. das Original-Repo bei einem Fork."
      },
      {
        "term": "Pull",
        "desc": "Kombination aus Fetch und Merge: Änderungen laden und sofort lokal einspielen."
      },
      {
        "term": "Pull Request (PR)",
        "desc": "Förmlicher Vorschlag, Code-Änderungen zu prüfen und in einen Hauptzweig zu mergen."
      },
      {
        "term": "Push",
        "desc": "Lokale Commits auf den entfernten Server (Remote) hochladen."
      },
      {
        "term": "Rebase",
        "desc": "Die Basis eines Branches auf einen neuen Startpunkt setzen, um eine lineare Historie zu erhalten."
      },
      {
        "term": "Repository",
        "desc": "Das gesamte Projektverzeichnis inklusive der kompletten Versionshistorie."
      },
      {
        "term": "Reset",
        "desc": "Macht Commits rückgängig, wahlweise durch Löschen oder Beibehalten der Änderungen im Arbeitsverzeichnis."
      },
      {
        "term": "Revert",
        "desc": "Erstellt einen neuen Commit, der die Änderungen eines vorherigen Commits umkehrt."
      },
      {
        "term": "Squash",
        "desc": "Mehrere kleine Commits zu einem einzigen, sauberen Commit zusammenfassen."
      },
      {
        "term": "Stash",
        "desc": "Aktuelle, unfertige Änderungen kurzzeitig in einen Zwischenspeicher (\"Parkplatz\") legen."
      },
      {
        "term": "Tag",
        "desc": "Ein fester, benannter Marker in der Historie, meist zur Kennzeichnung von Release-Versionen."
      },
      {
        "term": "git stash",
        "desc": "Speichert unvollendete Änderungen temporär ab, um ein sauberes Arbeitsverzeichnis zu erhalten."
      },
      {
        "term": "git rebase",
        "desc": "Integriert Änderungen aus einem Branch in einen anderen, schreibt aber die Commit-Historie neu (linear)."
      }
    ]
  },
  {
    "id": "sec6",
    "nav_title": "🐞 Debugging & Tests",
    "sec_title": "Debugging & Tests",
    "cards": [
      {
        "term": "AAA-Pattern",
        "desc": "Strukturierung von Tests in Arrange (Vorbereitung), Act (Ausführung) und Assert (Prüfung)."
      },
      {
        "term": "Assertion",
        "desc": "Die erwartete Bedingung in einem Test; schlägt der Vergleich fehl, scheitert der Test."
      },
      {
        "term": "BDD",
        "desc": "Behavior Driven Development: Test-Schreibweise aus Nutzersicht (Given/When/Then)."
      },
      {
        "term": "Breakpoint",
        "desc": "Manueller Haltepunkt im Code, um Variablen und Programmfluss live zu untersuchen."
      },
      {
        "term": "Coverage",
        "desc": "Testabdeckung: Prozentsatz des Quellcodes, der durch automatisierte Tests ausgeführt wurde."
      },
      {
        "term": "E2E Test",
        "desc": "End-to-End Test: Prüft einen kompletten Geschäftsprozess vom Start bis zum Ziel."
      },
      {
        "term": "Fake",
        "desc": "Eine einfache, funktionale Implementierung (z.B. In-Memory-DB statt echter Datenbank)."
      },
      {
        "term": "Flaky Test",
        "desc": "Ein unzuverlässiger Test, der bei gleichem Code mal besteht und mal fehlschlägt."
      },
      {
        "term": "Fuzzer",
        "desc": "Automatisierter Test, der ein Programm mit massenhaft Zufallsdaten flutet, um Abstürze zu finden."
      },
      {
        "term": "Hot Reload",
        "desc": "Sofortige Übernahme von Code-Änderungen in die laufende App ohne kompletten Neustart."
      },
      {
        "term": "Integration Test",
        "desc": "Überprüft das korrekte Zusammenspiel zwischen zwei oder mehr Modulen oder Systemen."
      },
      {
        "term": "Mock",
        "desc": "Ein simulierter Ersatz für Abhängigkeiten, der Erwartungen über Aufrufe prüfen kann."
      },
      {
        "term": "Mutation Testing",
        "desc": "Verändert den Code minimal, um zu prüfen, ob die vorhandenen Tests diesen Fehler finden."
      },
      {
        "term": "Profiling",
        "desc": "Analyse der Laufzeit und des Speicherverbrauchs, um Performance-Engpässe zu finden."
      },
      {
        "term": "Regression Test",
        "desc": "Wiederholter Test nach Änderungen, um sicherzustellen, dass alte Funktionen noch arbeiten."
      },
      {
        "term": "Smoke Test",
        "desc": "Ein schneller Oberflächentest, um zu prüfen, ob die Basis-Funktionen überhaupt starten."
      },
      {
        "term": "Snapshot Test",
        "desc": "Vergleicht die aktuelle UI oder Datenstruktur mit einem gespeicherten \"Soll-Zustand\"."
      },
      {
        "term": "Stub",
        "desc": "Ein minimaler Platzhalter, der auf Aufrufe lediglich mit festen Werten antwortet."
      },
      {
        "term": "TDD",
        "desc": "Test Driven Development: Der Test wird vor dem eigentlichen Funktionscode geschrieben."
      },
      {
        "term": "Unit Test",
        "desc": "Automatisierter Test der kleinstmöglichen Einheit (z. B. einer einzelnen Methode)."
      },
      {
        "term": "Watch",
        "desc": "Überwachungstool im Debugger, das den Wert bestimmter Variablen permanent anzeigt."
      },
      {
        "term": "Mocking",
        "desc": "Das Simulieren des Verhaltens echter Objekte in Unit-Tests (z.B. Datenbank-Verbindungen)."
      }
    ]
  },
  {
    "id": "netzwerk_grundlagen",
    "nav_title": "🌐 Netzwerk-Grundlagen",
    "sec_title": "Network Basics",
    "cards": [
      {
        "term": "OSI-Modell",
        "desc": "Referenzmodell für Netzwerkprotokolle in 7 Schichten (Physical, Data Link, Network, Transport, Session, Presentation, Application)."
      },
      {
        "term": "TCP/IP",
        "desc": "Protokollfamilie, die das Internet antreibt. TCP sorgt für zuverlässigen Datenstrom, IP für das Routing der Pakete."
      },
      {
        "term": "DNS (Domain Name System)",
        "desc": "Übersetzt für Menschen lesbare Domainnamen (z.B. google.com) in IP-Adressen (wie ein Telefonbuch)."
      },
      {
        "term": "DHCP",
        "desc": "Dynamic Host Configuration Protocol: Weist Geräten in einem Netzwerk automatisch IP-Adressen zu."
      },
      {
        "term": "Subnetting",
        "desc": "Unterteilen eines großen Netzwerks in mehrere kleinere Netzwerke zur besseren Organisation und Performance."
      }
    ]
  },
  {
    "id": "sec25",
    "nav_title": "🦈 Wireshark & Network",
    "sec_title": "Wireshark & Netzwerkanalyse",
    "cards": [
      {
        "term": "Analyseprofile",
        "desc": "Profile für Netzwerk-Paketanalysatoren optimieren und anpassen.",
        "onclick": "openPDF('Analyseprofile_für_Netzwerk-Paketanalysatoren.pdf')"
      },
      {
        "term": "Netzwerk-Analyse-Filter",
        "desc": "Der Guide für effiziente Filter in der Netzwerkanalyse.",
        "onclick": "openPDF('Guide_für_Netzwerk-Analyse-Filter.pdf')"
      },
      {
        "term": "IPv4-Header Troubleshooting",
        "desc": "Detaillierter Guide zur Fehlersuche anhand des IPv4-Headers.",
        "onclick": "openPDF('IPv4-Header_Troubleshooting-Guide.pdf')"
      },
      {
        "term": "Logik-Check Negations-Filter",
        "desc": "Vermeidung von Fehlern bei Negations-Filtern.",
        "onclick": "openPDF('Logik-Check_bei_Negations-Filtern.pdf')"
      },
      {
        "term": "Namensauflösung",
        "desc": "Erklärung der Namensauflösung in der Netzwerkanalyse.",
        "onclick": "openPDF('Namensauflösung_in_der_Netzwerkanalyse.pdf')"
      },
      {
        "term": "Filter: Erfassung vs. Anzeige",
        "desc": "Unterschiede und Guide: Capture- vs. Display-Filter.",
        "onclick": "openPDF('Netzwerk-Filter-Guide__Erfassung_vs._Anzeige.pdf')"
      },
      {
        "term": "Netzwerk-Forensik",
        "desc": "Angriffe mit Display-Filtern entlarven.",
        "onclick": "openPDF('Netzwerk-Forensik__Angriffe_mit_Display-Filtern_entlarven.pdf')"
      },
      {
        "term": "Basiswissen Netzwerkanalyse",
        "desc": "Der ultimative Guide für den Einstieg in die Netzwerkanalyse.",
        "onclick": "openPDF('Netzwerkanalyse-Basiswissen__Der_ultimative_Guide.pdf')"
      },
      {
        "term": "TCP-Fehlersuche",
        "desc": "Systematische Fehlersuche auf Basis des TCP-Protokolls.",
        "onclick": "openPDF('TCP-Fehlersuche_in_der_Netzwerkanalyse.pdf')"
      },
      {
        "term": "Latenz-Diagnose",
        "desc": "Visuelle Netzwerkanalyse und Diagnose von Latenzen.",
        "onclick": "openPDF('Visuelle_Netzwerkanalyse_und_Latenz-Diagnose.pdf')"
      },
      {
        "term": "Automatisierte Werkzeuge",
        "desc": "Übersicht über Werkzeuge für die automatisierte Netzwerk-Analyse.",
        "onclick": "openPDF('Werkzeuge_für_automatisierte_Netzwerk-Analyse.pdf')"
      },
      {
        "term": "Top Erfassungsfilter (Capture)",
        "desc": "host x.x.x.x (Traffic für IP), net 192.168.1.0/24 (Subnetz), port 80 (nur Port 80), not arp (ARP ausblenden), tcp portrange 1500-1599."
      },
      {
        "term": "Top Anzeigefilter (Display)",
        "desc": "ip.addr==x.x.x.x (IP Traffic), tcp.port==443 (HTTPS), http.request.method==GET, dns.qry.name contains \"google\", tcp.analysis.flags (Probleme)."
      }
    ]
  },
  {
    "id": "sec15",
    "nav_title": "💠 MAUI Toolkit & Mobile",
    "sec_title": "MAUI & Mobile",
    "cards": [
      {
        "term": "Absolute Layout",
        "desc": "Pixelgenaue Positionssteuerung von UI-Elementen."
      },
      {
        "term": "App Icon Management",
        "desc": "Plattformübergreifende Verwaltung von Icons."
      },
      {
        "term": "App Lifecycle",
        "desc": "Ereignisse beim Wechsel von Vordergrund ↔ Hintergrund."
      },
      {
        "term": "Behaviors",
        "desc": "Wiederverwendbare UI-Logik an Controls anhängen."
      },
      {
        "term": "BindableProperty",
        "desc": "Eigenschaft, die für XAML-Datenbindung verwendet wird."
      },
      {
        "term": "Blazor Hybrid",
        "desc": "Web-Komponenten (Razor) direkt in MAUI-Apps verwenden."
      },
      {
        "term": "CarouselView",
        "desc": "Swipebare Ansicht für mehrere Seiten oder Bilder."
      },
      {
        "term": "CollectionView",
        "desc": "Liste mit hoher Performance und Template-Unterstützung."
      },
      {
        "term": "Command",
        "desc": "Bindbare UI-Aktion ohne Code-Behind."
      },
      {
        "term": "ContentPage",
        "desc": "Standard-Page für einzelne Screens."
      },
      {
        "term": "ContentView",
        "desc": "Wiederverwendbares UI-Element zur Code-Strukturierung."
      },
      {
        "term": "Cross-Platform APIs",
        "desc": "Gemeinsame APIs wie GPS, Kamera, Speicherzugriff."
      },
      {
        "term": "DataTemplate Selector",
        "desc": "Dynamische Auswahl verschiedener UI-Templates."
      },
      {
        "term": "Deep Linking",
        "desc": "Startet App direkt auf bestimmter Seite/Parametern."
      },
      {
        "term": "Dependency Injection",
        "desc": "Native .NET-DI direkt in MAUI integriert."
      },
      {
        "term": "DependencyService",
        "desc": "MAUI-eigener Service zum Aufruf plattformspezifischer Funktionen."
      },
      {
        "term": "Effects",
        "desc": "Plattformabhängige UI-Effekte erweitern Steuerelemente."
      },
      {
        "term": "Essentials API",
        "desc": "Sammlung von Gerätefunktionen wie Batterie, Sensoren, Standort."
      },
      {
        "term": "FlexLayout",
        "desc": "Flexibles Layout ähnlich CSS Flexbox."
      },
      {
        "term": "FontImageSource",
        "desc": "Icons aus Font-Dateien direkt in Buttons/Labels."
      },
      {
        "term": "Gesture Binding",
        "desc": "Touchgesten an Commands binden."
      },
      {
        "term": "Gesture Recognizer",
        "desc": "Steuerung von Touch-Gesten (Tap, Swipe, Pinch)."
      },
      {
        "term": "Grid Layout",
        "desc": "Strukturiertes Container-Layout mit Zeilen/Spalten."
      },
      {
        "term": "Handlers",
        "desc": "Ersetzen Renderer und steuern die Verbindung zwischen MAUI-Kontrolle und nativen UI-Elementen."
      },
      {
        "term": "Horizontal Stack Layout",
        "desc": "Horizontales Anordnen von Elementen."
      },
      {
        "term": "Hot Restart",
        "desc": "Rapid Development → Änderungen ohne kompletten Rebuild testen."
      },
      {
        "term": "Hybrid WebView",
        "desc": "Kombiniert HTML/JS mit nativen Funktionen."
      },
      {
        "term": "INotifyPropertyChanged",
        "desc": "Benachrichtigt UI über Datenänderungen im ViewModel."
      },
      {
        "term": "MasterDetailPage (Legacy)",
        "desc": "Früheres Seitenlayout mit Menü + Inhalt."
      },
      {
        "term": "Maui Program",
        "desc": "Startup-Konfiguration wie DI, Fonts, Handler."
      },
      {
        "term": "MAUI",
        "desc": "Multi-platform App UI: Framework für Cross-Platform .NET Apps."
      },
      {
        "term": "Modal Navigation",
        "desc": "Seiten als „Popup“ über anderen anzeigen."
      },
      {
        "term": "MVVM",
        "desc": "Architekturansatz: Model‑View‑ViewModel",
        "onclick": "openPDF('MVVM.pdf')"
      },
      {
        "term": "Native Embedding",
        "desc": "Native Android/iOS Views in MAUI einbetten."
      },
      {
        "term": "NavigationPage",
        "desc": "Klassisches Stack-Navigationsmodell."
      },
      {
        "term": "ObservableCollection",
        "desc": "Dynamische Liste, die Änderungen an die UI meldet."
      },
      {
        "term": "Permissions",
        "desc": "Systemzugriffsrechte wie Kamera, Standort, Mikrofon."
      },
      {
        "term": "Platform Render Override",
        "desc": "Plattformspezifisches Custom Rendering."
      },
      {
        "term": "Platform-Specifics",
        "desc": "MAUI-APIs für gerätespezifische Implementierungen."
      },
      {
        "term": "Preferences",
        "desc": "Key-Value Speicher für App-Einstellungen."
      },
      {
        "term": "Relative Layout",
        "desc": "Elementpositionierung relativ zu anderen Elementen."
      },
      {
        "term": "Renderer (Legacy)",
        "desc": "Älteres Xamarin-UI-Modell, ersetzt durch MAUI-Handler."
      },
      {
        "term": "Responsive Layout",
        "desc": "UI passt sich verschiedenen Auflösungen an."
      },
      {
        "term": "Secure Storage",
        "desc": "Verschlüsselter Speicher für sensible Daten."
      },
      {
        "term": "Shell Appearance",
        "desc": "Globale Styling-Optionen für Titel, Farben, Navbar."
      },
      {
        "term": "Shell Flyout",
        "desc": "Seitliches Navigationsmenü für komplexe Apps."
      },
      {
        "term": "Shell Navigation",
        "desc": "Modernes Navigationsmodell in MAUI für klare URI-basierte Navigation."
      },
      {
        "term": "Shell Routing",
        "desc": "Ermöglicht URL-basierte Seitenaufrufe im MAUI-Shell-System."
      },
      {
        "term": "Shell Tabbar",
        "desc": "Tab-Navigation für mobile Anwendungen."
      },
      {
        "term": "Splash Screen",
        "desc": "Startbild der App vor dem ersten Rendern."
      },
      {
        "term": "TabbedPage",
        "desc": "Seite mit Tabs für mobile Multi-Ansichten."
      },
      {
        "term": "Triggers",
        "desc": "UI-Veränderungen basierend auf Bedingungen."
      },
      {
        "term": "Two-Pane Layout",
        "desc": "Optimiertes Design für Dual-Screen oder Sidebar-Strukturen."
      },
      {
        "term": "Vertical Stack Layout",
        "desc": "Vertikales Stapeln von UI-Elementen."
      },
      {
        "term": "View",
        "desc": "UI‑Schicht. Enthält XAML und ausschließlich Darstellung."
      },
      {
        "term": "ViewFactory",
        "desc": "Mechanismus zum dynamischen Erstellen von Views + ViewModels. Perfekt für Desktop‑Layouts."
      },
      {
        "term": "ViewModel",
        "desc": "Logik‑Schicht der UI. Bereitstellung von Commands, State, Bindings."
      },
      {
        "term": "Visual State Manager",
        "desc": "UI-Zustände definieren (z.B. focused, disabled)."
      },
      {
        "term": "WinUI 3",
        "desc": "Windows‑Runtime‑UI‑System, Basis für MAUI Windows‑Apps."
      },
      {
        "term": "XAML",
        "desc": "Extensible Application Markup Language für das UI-Design."
      }
    ]
  },
  {
    "id": "sec16",
    "nav_title": "📁 Dateitypen & Formate",
    "sec_title": "Dateitypen & Formate",
    "cards": [
      {
        "term": "7Z",
        "desc": "Hoch effizientes Archivformat."
      },
      {
        "term": "APK",
        "desc": "Android App Installer."
      },
      {
        "term": "AVI",
        "desc": "Älteres Videoformat ohne moderne Codecs."
      },
      {
        "term": "BAT",
        "desc": "Windows-Batch Skript."
      },
      {
        "term": "BIN",
        "desc": "Binärdaten ohne festes Format."
      },
      {
        "term": "CER",
        "desc": "Zertifikatsformat für Trust Stores."
      },
      {
        "term": "CRT",
        "desc": "Zertifikatsdatei (Public Key)."
      },
      {
        "term": "CSV",
        "desc": "Zeilenbasierte, kommagetrennte Daten."
      },
      {
        "term": "CSS",
        "desc": "Stylesheet für visuelle Gestaltung."
      },
      {
        "term": "DLL",
        "desc": "Dynamische Bibliothek (Windows)."
      },
      {
        "term": "DOCX",
        "desc": "Microsoft Word Dokument."
      },
      {
        "term": "EXE",
        "desc": "Windows ausführbare Datei."
      },
      {
        "term": "FLAC",
        "desc": "Lossless Audioformat."
      },
      {
        "term": "GIF",
        "desc": "Animiertes / statisches Bildformat."
      },
      {
        "term": "GZ",
        "desc": "Gzip-Komprimierung."
      },
      {
        "term": "HTML",
        "desc": "Markup-Sprache für Webseiten."
      },
      {
        "term": "IMG",
        "desc": "Rohes Datenträgerabbild."
      },
      {
        "term": "INI",
        "desc": "Einfaches Konfigurationsformat mit Sektionen."
      },
      {
        "term": "IPA",
        "desc": "iOS App Installer (Apple)."
      },
      {
        "term": "ISO",
        "desc": "Image einer CD/DVD."
      },
      {
        "term": "JPG / JPEG",
        "desc": "Komprimiertes Bildformat."
      },
      {
        "term": "JS",
        "desc": "JavaScript-Datei mit Code."
      },
      {
        "term": "JSON",
        "desc": "Strukturiertes Textformat für Daten (JavaScript Object Notation)."
      },
      {
        "term": "JSONL",
        "desc": "Zeilenbasierte JSON‑Einträge."
      },
      {
        "term": "KEY",
        "desc": "Privater Verschlüsselungsschlüssel."
      },
      {
        "term": "LOG",
        "desc": "Textdatei für System- oder Anwendungslogs."
      },
      {
        "term": "MD (Markdown)",
        "desc": "Leichtes Textformat mit Strukturierungssyntax."
      },
      {
        "term": "MKV",
        "desc": "Flexibles Containerformat für Videos."
      },
      {
        "term": "MOV",
        "desc": "Apple QuickTime Videoformat."
      },
      {
        "term": "MP3",
        "desc": "Audioformat mit Verlustkompression."
      },
      {
        "term": "MP4",
        "desc": "Videoformat mit H.264/H.265 Codec."
      },
      {
        "term": "ODS",
        "desc": "OpenDocument Tabellenformat."
      },
      {
        "term": "ODT",
        "desc": "OpenDocument Textformat."
      },
      {
        "term": "P12 / PFX",
        "desc": "Zertifikatscontainer inkl. Private Key."
      },
      {
        "term": "PDF",
        "desc": "Portables Dokumentformat."
      },
      {
        "term": "PNG",
        "desc": "Bildformat mit Transparenz."
      },
      {
        "term": "PPTX",
        "desc": "PowerPoint Präsentation."
      },
      {
        "term": "PS1",
        "desc": "PowerShell-Skript."
      },
      {
        "term": "RAR",
        "desc": "Proprietäres Archivformat."
      },
      {
        "term": "RAW",
        "desc": "Unkomprimierte Bildrohdaten."
      },
      {
        "term": "SH",
        "desc": "Bash-Shellskript."
      },
      {
        "term": "SO",
        "desc": "Shared Library unter Linux."
      },
      {
        "term": "SVG",
        "desc": "Vektor-Grafikformat."
      },
      {
        "term": "TAR",
        "desc": "Archivformat, häufig unter Linux."
      },
      {
        "term": "TOML",
        "desc": "Modernes, klar strukturiertes Config-Format."
      },
      {
        "term": "TS",
        "desc": "TypeScript – typisiertes JavaScript."
      },
      {
        "term": "TSV",
        "desc": "Tabulatorgetrennte Tabelle."
      },
      {
        "term": "TXT",
        "desc": "Reine Textdatei ohne Formatierung."
      },
      {
        "term": "WAV",
        "desc": "Unkomprimiertes Audioformat."
      },
      {
        "term": "WEBP",
        "desc": "Moderne Bildkompression."
      },
      {
        "term": "XLSX",
        "desc": "Excel Arbeitsmappe."
      },
      {
        "term": "XML",
        "desc": "Hierarchisches Datenformat mit Tags."
      },
      {
        "term": "YAML",
        "desc": "Lesbares Konfigurationsformat mit Einrückungen."
      },
      {
        "term": "YML",
        "desc": "Alternative Schreibweise für YAML."
      },
      {
        "term": "ZIP",
        "desc": "Komprimiertes Archiv."
      },
      {
        "term": "Markdown",
        "desc": "Eine leichtgewichtige Auszeichnungssprache, um Text einfach zu formatieren (z.B. für READMEs)."
      }
    ]
  },
  {
    "id": "sec18",
    "nav_title": "🪟 Windows Shortcuts",
    "sec_title": "Windows System Shortcuts",
    "cards": [
      {
        "term": "System & Fenster",
        "desc": "<b>Win + E:</b> Explorer öffnen<br/>\n<b>Win + D:</b> Desktop anzeigen/verstecken<br/>\n<b>Win + L:</b> PC sperren<br/>\n<b>Win + Tab:</b> Task-Ansicht öffnen<br/>\n<b>Alt + Tab:</b> Zwischen Fenstern wechseln<br/>\n<b>Win + I:</b> Windows-Einstellungen öffnen"
      },
      {
        "term": "Fenster-Anordnung",
        "desc": "<b>Win + ↑:</b> Fenster maximieren<br/>\n<b>Win + ↓:</b> Fenster minimieren/verkleinern<br/>\n<b>Win + ← / →:</b> Fenster links/rechts andocken<br/>\n<b>Win + Shift + ← / →:</b> Fenster auf anderen Monitor verschieben<br/>\n<b>Win + M:</b> Alle Fenster minimieren"
      },
      {
        "term": "Nützliche Werkzeuge",
        "desc": "<b>Win + Shift + S:</b> Screenshot-Tool (Snipping)<br/>\n<b>Win + V:</b> Zwischenablage-Verlauf (Clipboard)<br/>\n<b>Win + . (Punkt):</b> Emoji-Panel öffnen<br/>\n<b>Strg + Shift + Esc:</b> Task-Manager direkt öffnen<br/>\n<b>Win + R:</b> Ausführen-Dialog öffnen"
      },
      {
        "term": "Virtuelle Desktops",
        "desc": "<b>Win + Strg + D:</b> Neuen Desktop erstellen<br/>\n<b>Win + Strg + ← / →:</b> Zwischen Desktops wechseln<br/>\n<b>Win + Strg + F4:</b> Aktuellen Desktop schließen"
      },
      {
        "term": "Explorer & Text",
        "desc": "<b>Strg + N:</b> Neues Fenster öffnen<br/>\n<b>Strg + Shift + N:</b> Neuer Ordner erstellen<br/>\n<b>Alt + Enter:</b> Eigenschaften der Datei öffnen<br/>\n<b>F2:</b> Datei/Ordner umbenennen<br/>\n<b>Strg + Backspace:</b> Ganzes Wort löschen"
      },
      {
        "term": "Power User",
        "desc": "<b>Win + X:</b> Schnellzugriffsmenü (Admin-Tools)<br/>\n<b>Win + S:</b> Windows-Suche öffnen<br/>\n<b>Win + Pause:</b> System-Info anzeigen<br/>\n<b>Win + G:</b> Xbox Game Bar (Screen Recording)"
      },
      {
        "term": "Win + Shift + S",
        "desc": "Öffnet das Snipping Tool für Screenshots."
      },
      {
        "term": "Win + V",
        "desc": "Öffnet den Zwischenablage-Verlauf."
      }
    ]
  },
  {
    "id": "sec19",
    "nav_title": "🧠 Visual Studio Shortcuts",
    "sec_title": " Visual Studio Shortcuts",
    "cards": [
      {
        "term": "Visual Studio Code PDF",
        "desc": "Visual Studio Code Cheatsheet",
        "onclick": "openPDF('VisualStudioCodeShortcuts.pdf')"
      },
      {
        "term": "Visual Studio 2026 PDF",
        "desc": "Visual Studio 2026 Cheatsheet",
        "onclick": "openPDF('VisualStudioShortcuts.pdf')"
      },
      {
        "term": "Must Haves",
        "desc": "<b>Strg+R, Strg+R:</b> Gobal Umbenennen<br/>\n<b>Strg+H:</b> In der aktuellen Datei Umbenennen<br/>\n<b>Strg+F:</b> Schnelle Suche im Code<br/>\n<b>Strg+SHIFT+F:</b> Projektweite Suche<br/>\n<b>Strg+T:</b> Gehe zu allem (Dateien, Klassen)<br/>\n<b>Strg+K, Strg+E:</b> Code aufräumen"
      },
      {
        "term": "Navigation",
        "desc": "<b>F12:</b> Gehe zur Definition<br/>\n<b>Strg+F12:</b> Gehe zur Implementierung<br/>\n<b>Alt+F12:</b> Peek Definition (Vorschau)<br/>\n<b>Strg+T:</b> Gehe zu Alles<br/>\n<b>Strg+- / Strg+Shift+-:</b> Zurück / Vorwärts"
      },
      {
        "term": "Editing & Refactoring",
        "desc": "<b>Strg+.:</b> Schnellaktionen / Glühbirne<br/>\n<b>Strg+D:</b> Zeile duplizieren<br/>\n<b>Strg+L:</b> Zeile löschen<br/>\n<b>Strg+K, Strg+E:</b> Code formatieren<br/>\n<b>einfg:</b> Überschreibmodus an/aus<br/>\n<b>Alt + ↑/↓:</b> Zeile verschieben"
      },
      {
        "term": "Formatierung",
        "desc": "<b>Strg+K, Strg+C:</b> Kommentar hinzufügen<br/>\n<b>Strg+K, Strg+U:</b> Kommentar entfernen<br/>\n<b>Strg+K, Strg+D:</b> Dokument formatieren"
      },
      {
        "term": "Debugging",
        "desc": "<b>F5 / Strg+F5:</b> Starten mit/ohne Debugging<br/>\n<b>F9:</b> Breakpoint setzen/löschen<br/>\n<b>F5:</b> Fortfahren bis zum nächsten Breakpoint<br/>\n<b>F10:</b> Step Over nächste Zeile ohne Methode<br/>\n<b>F11:</b> Step Into Methode<br/>\n<b>Shift+F11:</b> Step Out"
      },
      {
        "term": "Breakpoints",
        "desc": "<b>F9:</b> Breakpoint setzen/löschen<br/>\n<b>Strg+SHIFT+F9:</b> Alle Breakpoints löschen<br/>\n<b>Strg+F9:</b> Breakpoint deaktivieren (aktuelle Zeile)<br/>\n<b>Strg+ALT+B:</b> Breakpoints-Fenster öffnen<br/>\n<b>ALT+F9:</b> Breakpoints-Fenster öffnen<br/>"
      },
      {
        "term": "Bookmarks",
        "desc": "<b>Strg+K, Strg+K:</b> Bookmark setzen/löschen<br/>\n<b>Strg+K, Strg+N:</b> Nächstes Bookmark<br/>\n<b>Strg+K, Strg+P:</b> vorheriges Bookmark<br/>\n<b>Strg+K, Strg+L:</b> Alle Bookmarks löschen<br/>\n<b>Strg+K, Strg+W:</b> Bookmark-Fenster öffnen"
      },
      {
        "term": "Build & Layout",
        "desc": "<b>Strg+Shift+B:</b> Projektmappe erstellen (Build)<br/>\n<b>Strg+Alt+L:</b> Solution Explorer/Projektmappen-Explorer öffnen<br/>\n<b>Shift+Alt+Enter:</b> Vollbildmodus"
      },
      {
        "term": "Ctrl + K, Ctrl + D",
        "desc": "Dokument formatieren (Code Formatierung in Visual Studio)."
      },
      {
        "term": "F12",
        "desc": "Gehe zu Definition (Go to Definition)."
      }
    ]
  },
  {
    "id": "sec20",
    "nav_title": "💥 CMD & PowerShell",
    "sec_title": "Terminal & Shell Shortcuts",
    "cards": [
      {
        "term": "Terminal Basics",
        "desc": "<b>Tab:</b> Autovervollständigung (Pfad/Datei)<br/>\n<b>Pfeil ↑ / ↓:</b> Letzte Befehle durchlaufen<br/>\n<b>Strg + C:</b> Aktuellen Befehl abbrechen<br/>\n<b>cls:</b> Bildschirm leeren (Clear Screen)<br/>\n<b>exit:</b> Terminal schließen"
      },
      {
        "term": "Klassische CMD",
        "desc": "<b>dir:</b> Verzeichnisinhalt auflisten<br/>\n<b>cd [Ordner]:</b> Verzeichnis wechseln<br/>\n<b>cd ..:</b> Einen Ordner nach oben<br/>\n<b>ipconfig:</b> Netzwerk-Konfiguration anzeigen<br/>\n<b>ping [Host]:</b> Verbindung prüfen"
      },
      {
        "term": "PowerShell (Cmdlets)",
        "desc": "<b>ls / dir / Get-ChildItem:</b> Ordnerinhalt<br/>\n<b>Get-Help [Befehl]:</b> Hilfe anzeigen<br/>\n<b>Get-Service:</b> Alle Dienste auflisten<br/>\n<b>Get-Process:</b> Aktive Prozesse sehen<br/>\n<b>Stop-Process -Name \"Ex\":</b> Prozess beenden"
      },
      {
        "term": "Editieren & Kopieren",
        "desc": "<b>Strg + A:</b> Alles markieren<br/>\n<b>Rechtsklick:</b> Einfügen (oder Markieren)<br/>\n<b>Strg + F:</b> Suchen (im neuen Windows Terminal)<br/>\n<b>F7:</b> Befehlshistorie als Liste (nur CMD)"
      },
      {
        "term": "Admin-Check",
        "desc": "<b>sfc /scannow:</b> Systemdateien reparieren<br/>\n<b>systeminfo:</b> Detail-Infos zum System<br/>\n<b>netstat -an:</b> Offene Ports anzeigen<br/>\n<b>hostname:</b> Rechnername ausgeben"
      },
      {
        "term": "Profi-Shortcuts",
        "desc": "<b>Alt + Enter:</b> Vollbildmodus<br/>\n<b>Strg + Shift + C/V:</b> Kopieren/Einfügen<br/>\n<b>&amp;&amp;:</b> Befehle verketten (z.B. <code>cls &amp;&amp; dir</code>)<br/>\n<b>&gt; [Datei.txt]:</b> Output in Datei speichern"
      },
      {
        "term": "Pipes & Weiterleitung",
        "desc": "<b>| (Pipe):</b> Ausgabe des ersten Befehls als Eingabe für den zweiten nutzen.<br/><b>></b> Datei überschreiben<br/><b>>></b> An Datei anhängen."
      },
      {
        "term": "PowerShell Execution Policy",
        "desc": "<b>Set-ExecutionPolicy RemoteSigned:</b> Erlaubt die Ausführung von lokalen Skripten.<br/><b>Get-ExecutionPolicy:</b> Aktuelle Richtlinie anzeigen."
      },
      {
        "term": "PowerShell Aliases",
        "desc": "<b>Get-Alias:</b> Liste aller Abkürzungen anzeigen.<br/>Viele Linux-Befehle (ls, rm, cp, mv) funktionieren als Alias in PowerShell."
      },
      {
        "term": "Netzwerk Tools",
        "desc": "<b>tracert [Host]:</b> Route zum Zielserver verfolgen (CMD)<br/><b>Test-NetConnection:</b> Pingen & Port prüfen (PowerShell)<br/><b>nslookup [Domain]:</b> DNS-Einträge abfragen"
      },
      {
        "term": "Dateimanagement Erweitert",
        "desc": "<b>robocopy:</b> Robustes Tool für große Dateikopien und Backups (CMD)<br/><b>mkdir / md:</b> Neuen Ordner erstellen<br/><b>rmdir /s /q:</b> Ordner inkl. Inhalt ohne Nachfrage löschen (CMD)"
      },
      {
        "term": "System & WMI",
        "desc": "<b>tasklist / taskkill:</b> Prozesse anzeigen/beenden (CMD)<br/><b>Get-WmiObject Win32_BIOS:</b> BIOS Infos abrufen (PS)<br/><b>Get-CimInstance:</b> Moderne Alternative zu WMI (PS)"
      }
    ]
  },
  {
    "id": "sec23",
    "nav_title": "🧩 Tech‑Analogien",
    "sec_title": "Modelle & Analogien",
    "cards": [
      {
        "term": "API",
        "desc": "Der Kellner: Nimmt die Bestellung (Request) auf, bringt sie in die Küche (Backend) und serviert das Essen (Response)."
      },
      {
        "term": "API Gateway",
        "desc": "Die Rezeption: Alles läuft zentral über einen Punkt."
      },
      {
        "term": "API Rate Limit",
        "desc": "Kartenausgabe: Nur X Eintritte pro Minute erlaubt."
      },
      {
        "term": "Cache",
        "desc": "Der Kühlschrank: Du holst die Milch direkt aus der Küche, statt jedes Mal zum Supermarkt (Datenbank) zu fahren."
      },
      {
        "term": "Cache Invalidation",
        "desc": "Der Kühlschrank wird falsch befüllt: Alte Daten müssen raus."
      },
      {
        "term": "CD Pipeline",
        "desc": "Das Förderband: Von Commit bis Deployment automatisiert."
      },
      {
        "term": "CDN",
        "desc": "Das Lagerhausnetz: Liefert Produkte von der nächsten Filiale aus."
      },
      {
        "term": "Circuit Breaker",
        "desc": "Die Sicherung im Haus: Verhindert schlimmere Schäden."
      },
      {
        "term": "Compiler",
        "desc": "Der Übersetzer: Übersetzt Quellcode in Maschinensprache."
      },
      {
        "term": "Container",
        "desc": "Die Tupperdose: Klein, leicht, portabel."
      },
      {
        "term": "Cookie",
        "desc": "Der Garderoben-Zettel: Du gibst deine Jacke ab und bekommst eine Nummer, damit man dich später wiedererkennt."
      },
      {
        "term": "CPU",
        "desc": "Der Koch: Führt die Anweisungen Schritt für Schritt aus."
      },
      {
        "term": "DNS",
        "desc": "Das Telefonbuch: Du tippst den Namen (google.de), das DNS sucht die Nummer (142.250.185.78)."
      },
      {
        "term": "Docker",
        "desc": "Das Fertiggericht: Alles ist drin (Zutaten, Gewürze), es schmeckt in jeder Mikrowelle (Server) exakt gleich."
      },
      {
        "term": "Encryption",
        "desc": "Die Geheimschrift: Nur richtige Schlüssel können es lesen."
      },
      {
        "term": "Event",
        "desc": "Ein Klingeln der Küche: „Etwas ist passiert“."
      },
      {
        "term": "Event Listener",
        "desc": "Der Kellner: Reagiert auf Klingeln."
      },
      {
        "term": "Feature Flag",
        "desc": "Der Lichtschalter: Funktionen an/aus ohne Code ändern."
      },
      {
        "term": "Firewall",
        "desc": "Der Burggraben: Nur wer die Zugbrücke (Port) benutzen darf und die richtigen Papiere hat, kommt rein."
      },
      {
        "term": "Framework",
        "desc": "Das Baugerüst: Struktur ist vorgegeben."
      },
      {
        "term": "Frontend / Backend",
        "desc": "Der Eisberg: Das Frontend ist die sichtbare Spitze, das Backend der massive, tragende Teil unter Wasser."
      },
      {
        "term": "Garbage Collector",
        "desc": "Der Putzdienst: Entfernt nicht mehr gebrauchte Objekte."
      },
      {
        "term": "Git Merge",
        "desc": "Der Reißverschluss: Zwei verschiedene Stoffe (Branches) werden zu einem stabilen Ganzen zusammengeführt."
      },
      {
        "term": "GPU",
        "desc": "Die Kochbrigade: Viele Köche arbeiten gleichzeitig."
      },
      {
        "term": "Hashing",
        "desc": "Der Fingerabdruck: Nicht rückwärts berechenbar."
      },
      {
        "term": "Heap",
        "desc": "Chaotische Box: Beliebige Reihenfolge möglich."
      },
      {
        "term": "Idempotent",
        "desc": "Wie Lichtschalter: Egal wie oft du drückst, das Ergebnis bleibt gleich."
      },
      {
        "term": "Interpreter",
        "desc": "Simultanübersetzer: Führt Code Schritt für Schritt aus."
      },
      {
        "term": "Library",
        "desc": "Das Werkzeug: Du nutzt es, wann du willst."
      },
      {
        "term": "Load Balancer",
        "desc": "Der Türsteher: Er schickt die Leute abwechselnd an Kasse 1, 2 oder 3, damit keine Schlange zu lang wird."
      },
      {
        "term": "Microservices",
        "desc": "Viele kleine Foodtrucks statt einem Restaurant."
      },
      {
        "term": "Monolith",
        "desc": "Ein großes Restaurant, alles unter einem Dach."
      },
      {
        "term": "ORM",
        "desc": "Der Übersetzer zwischen Tabellen und Objekten."
      },
      {
        "term": "Polling",
        "desc": "Der ungeduldige Kunde: Fragt ständig „Ist es fertig?“"
      },
      {
        "term": "Priority Queue",
        "desc": "VIP-Schlange: Wichtige Aufgaben gehen vor."
      },
      {
        "term": "Process",
        "desc": "Ein komplettes Restaurantteam: Enthält viele Threads/Köche."
      },
      {
        "term": "Pub/Sub",
        "desc": "Zeitungsverteiler: Wer will, bekommt Updates."
      },
      {
        "term": "Queue",
        "desc": "Warteschlange im Supermarkt: Jeder wartet, bis er drankommt."
      },
      {
        "term": "RAM",
        "desc": "Der Arbeitsplatz: Schnell, aber Inhalte verschwinden beim Ausschalten."
      },
      {
        "term": "Reverse Proxy",
        "desc": "Der Sekretär: Filtert und leitet Anfragen weiter."
      },
      {
        "term": "Rollback",
        "desc": "Der Rückgängig-Knopf: Alles wieder wie zuvor."
      },
      {
        "term": "ROM",
        "desc": "Das Handbuch: Wird nicht verändert."
      },
      {
        "term": "Salt",
        "desc": "Das Zusatzgewürz: Macht Hashes einzigartiger."
      },
      {
        "term": "Shadow Copy",
        "desc": "Die Sicherheitskopie eines Dokuments."
      },
      {
        "term": "Stack",
        "desc": "Der Geschirrstapel: Immer der oberste zuerst."
      },
      {
        "term": "State Machine",
        "desc": "Automat: Zustände mit klar definierten Übergängen."
      },
      {
        "term": "Thread",
        "desc": "Ein Mitarbeiter: Arbeitet parallel an Aufgaben."
      },
      {
        "term": "Transactional Work",
        "desc": "Ein Kartenspiel: Entweder alle Karten passen, oder man hebt wieder auf."
      },
      {
        "term": "Variable",
        "desc": "Die Umzugskiste: Ein Name steht drauf, der Inhalt kann jederzeit ausgetauscht werden."
      },
      {
        "term": "Virtual Machine",
        "desc": "Die Wohnung in der Wohnung: Separates Mini‑Betriebssystem."
      },
      {
        "term": "VPN",
        "desc": "Der Geheimgang in die Firma: Sicher, verborgen, privat."
      },
      {
        "term": "Webhook",
        "desc": "Die Küche ruft dich an, wenn das Essen fertig ist."
      }
    ]
  },
  {
    "id": "sec24",
    "nav_title": "🤡 Developer-Jokes",
    "sec_title": "Humor & Slang",
    "cards": [
      {
        "term": "10x Developer",
        "desc": "Mythischer Entwickler, angeblich zehnmal produktiver als der Durchschnitt."
      },
      {
        "term": "Banana Software",
        "desc": "Produkt, das erst beim Kunden reift (Bananenprinzip)."
      },
      {
        "term": "Bike Shed Discussion",
        "desc": "Endlose Debatte über unwichtige Details (Farbe des Fahrradschuppens), während das Kernproblem ignoriert wird."
      },
      {
        "term": "Cargo Cult",
        "desc": "Kopieren von Code-Mustern oder Technologien, ohne deren Sinn zu verstehen."
      },
      {
        "term": "Cargo Ship Git Commit",
        "desc": "Ein gigantischer Commit, der viel zu viele Änderungen auf einmal enthält."
      },
      {
        "term": "Code Monkey",
        "desc": "Entwickler, der ohne Eigeninitiative stumpf Vorgaben abarbeitet."
      },
      {
        "term": "Code Smell",
        "desc": "Ein schlechtes Gefühl beim Lesen von Code – deutet auf tieferliegende Designfehler hin."
      },
      {
        "term": "Commitment Issues",
        "desc": "Die Angst davor, den Code zu committen, weil man weiß, dass noch alles instabil ist."
      },
      {
        "term": "Copy-Paste Driven Development",
        "desc": "Softwareentwicklung, die primär aus dem Kopieren von StackOverflow-Snippets besteht."
      },
      {
        "term": "Cowboy Coding",
        "desc": "Programmieren ohne Regeln, Planung, Tests oder Versionskontrolle."
      },
      {
        "term": "Death by a Thousand Cuts",
        "desc": "Ein Projekt, das an hunderten winzigen, nervigen Fehlern scheitert."
      },
      {
        "term": "Defensive Programming",
        "desc": "Code so schreiben, dass er selbst bei völlig unsinnigen Eingaben nicht abstürzt."
      },
      {
        "term": "Enterprise FizzBuzz",
        "desc": "Eine extrem simple Aufgabe, die durch übertriebene Architektur völlig überkomplex gelöst wurde."
      },
      {
        "term": "Fail Whale",
        "desc": "Ein kompletter Systemabsturz, der oft mit einem entschuldigenden Meme quittiert wird."
      },
      {
        "term": "Feature Creep",
        "desc": "Das ständige Hinzufügen neuer Funktionen, bis das eigentliche Ziel des Projekts verloren geht."
      },
      {
        "term": "Frankenstein Code",
        "desc": "Ein System, das aus vielen inkompatiblen Teilen zusammengeflickt wurde."
      },
      {
        "term": "Ghost in the Machine",
        "desc": "Ein technischer Fehler, für den es scheinbar keine logische Erklärung gibt."
      },
      {
        "term": "Golden Hammer",
        "desc": "Wenn man nur ein Werkzeug kennt (z.B. Regex), sieht jedes Problem wie ein Nagel aus."
      },
      {
        "term": "Google-Driven Development",
        "desc": "Die Fähigkeit, absolut jedes Problem durch geschicktes Googeln zu lösen."
      },
      {
        "term": "Heisenbug",
        "desc": "Ein flüchtiger Fehler, der auf magische Weise verschwindet, sobald man versucht, ihn zu debuggen."
      },
      {
        "term": "Hype-Driven Development",
        "desc": "Ein neues Framework nur deshalb wählen, weil es gerade auf Twitter/X trendet."
      },
      {
        "term": "ID10T Error",
        "desc": "Interne Bezeichnung für einen klassischen Anwenderfehler (I-D-I-O-T)."
      },
      {
        "term": "Infinite TODO",
        "desc": "Die Liste der Aufgaben, die niemals kürzer, sondern nur exponentiell länger wird."
      },
      {
        "term": "It’s a Feature",
        "desc": "Die Standard-Ausrede, wenn man einen Bug nicht reparieren kann oder will."
      },
      {
        "term": "Jenga Architecture",
        "desc": "Ein Software-Design, bei dem das Ändern einer Zeile das gesamte System zum Einsturz bringt."
      },
      {
        "term": "Lasagna Code",
        "desc": "Code mit so vielen Abstraktionsschichten, dass man den Überblick komplett verliert."
      },
      {
        "term": "Magic Number",
        "desc": "Harte Zahlenwerte im Code (z.B. 86400), deren Herkunft und Bedeutung niemand dokumentiert hat."
      },
      {
        "term": "Ninja Fix",
        "desc": "Ein heimlicher Bugfix direkt in der Produktion, von dem hoffentlich niemand erfährt."
      },
      {
        "term": "Not my Bug",
        "desc": "Abwälzen der Verantwortung: „Bei mir läuft’s, das muss an der API liegen.“"
      },
      {
        "term": "Not my circus, not my monkeys",
        "desc": "„Nicht mein Zirkus, nicht meine Affen“ – Distanzierung von einem fremden Chaos."
      },
      {
        "term": "PEBKAC",
        "desc": "Problem Exists Between Keyboard And Chair (Der Fehler sitzt vor dem Monitor)."
      },
      {
        "term": "PICNIC",
        "desc": "Problem In Chair, Not In Computer (Alternative zu PEBKAC)."
      },
      {
        "term": "Potato Quality API",
        "desc": "Eine Schnittstelle, die langsam, unzuverlässig und völlig veraltet ist."
      },
      {
        "term": "Premature Optimization",
        "desc": "Performance-Optimierung an Stellen, die eigentlich gar kein Flaschenhals sind."
      },
      {
        "term": "Refactoritis",
        "desc": "Der krankhafte Zwang, funktionierenden Code ständig neu schreiben zu müssen."
      },
      {
        "term": "Rubber Chicken Debugging",
        "desc": "Verzweifeltes Ausprobieren von Lösungen, die eher an Voodoo als an Informatik erinnern."
      },
      {
        "term": "Rubber Ducking",
        "desc": "Einem leblosen Objekt (Gummiente) das Problem erklären, um selbst auf die Lösung zu kommen."
      },
      {
        "term": "Rubber Stamp Approval",
        "desc": "Ein Code-Review, das ungelesen durchgewinkt wurde („LGTM!“)."
      },
      {
        "term": "Rubbernecking",
        "desc": "Sinnloses Starren auf kaputten Code in der Hoffnung, dass die Lösung erscheint."
      },
      {
        "term": "Schrödinbug",
        "desc": "Ein Fehler, der erst existiert, sobald man bemerkt, dass der Code theoretisch gar nicht funktionieren dürfte."
      },
      {
        "term": "Script Kiddie",
        "desc": "Jemand, der fertige Hacking-Tools nutzt, ohne die technische Basis zu verstehen."
      },
      {
        "term": "Shaving the Yak",
        "desc": "Eine endlose Kette von trivialen Aufgaben, die man erledigen muss, bevor man mit der eigentlichen Arbeit beginnen kann."
      },
      {
        "term": "Silent Failure",
        "desc": "Ein Fehler, der das Programm nicht abstürzen lässt, aber im Hintergrund alles korrumpiert."
      },
      {
        "term": "Sisyphus Task",
        "desc": "Eine Aufgabe, die kurz vor der Fertigstellung immer wieder von vorne beginnt (z.B. Altsystem-Migration)."
      },
      {
        "term": "Spaghetti Code",
        "desc": "Ein völlig unstrukturierter, wild verflochtener Programmablauf ohne klare Ordnung."
      },
      {
        "term": "Spooky Action at a Distance",
        "desc": "Wenn eine Änderung in Modul A völlig unerwartet einen Fehler in Modul B verursacht."
      },
      {
        "term": "StackOverflow-Driven Development",
        "desc": "Programmieren durch massives Kopieren von Lösungen der gleichnamigen Plattform."
      },
      {
        "term": "Technical Debt",
        "desc": "Technische Schulden: Schnelle, unsaubere Lösungen, die man später teuer „bezahlen“ muss."
      },
      {
        "term": "Undocumented Feature",
        "desc": "Ein Bug, der so lange im System ist, dass die Nutzer ihn als normale Funktion akzeptieren."
      },
      {
        "term": "Works on my Machine",
        "desc": "Die klassische Antwort, wenn ein Fehler beim Kunden, aber nicht beim Entwickler auftritt."
      },
      {
        "term": "Works on my Machine Premium Edition",
        "desc": "Der Fehler tritt bei allen auf – außer bei exakt einem Entwickler im Team."
      },
      {
        "term": "Bugs",
        "desc": "Unerwartete Features."
      },
      {
        "term": "In production",
        "desc": "Der Ort, an dem sich herausstellt, dass 'works on my machine' nicht genug war."
      }
    ]
  }
];
