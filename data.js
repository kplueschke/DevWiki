const wikiData = [
  {
    "id": "sec1",
    "nav_title": "🛠️ Dev & Coding‑Begriffe",
    "sec_title": "Allgemeiner Dev-Jargon",
    "cards": [
      {
        "term": "Bikeshedding",
        "desc": "Über unwichtige Kleinigkeiten diskutieren.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Boilerplate",
        "desc": "Wiederholender Standardcode.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Brownfield",
        "desc": "Arbeiten in bestehender Umgebung.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Bug",
        "desc": "Fehler im Code.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Code Smell",
        "desc": "Hinweis auf schlechtes Design oder potenzielle Probleme.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "DRY",
        "desc": "Don't Repeat Yourself – Duplikate vermeiden.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Edge Case",
        "desc": "Seltene Sonderfälle.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Feature",
        "desc": "Neue, gewollte Funktionalität.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Greenfield",
        "desc": "Neues Projekt ohne Altlasten.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Happy Path",
        "desc": "Reibungsloser, optimaler Ablauf.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Heisenbug",
        "desc": "Fehler verschwindet beim Debuggen.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Hotfix",
        "desc": "Schneller Fehlerbehebungs‑Patch.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Idempotent",
        "desc": "Mehrfach ausgeführt = gleiches Ergebnis.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "KISS",
        "desc": "Keep It Simple, Stupid – Einfach halten.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Legacy Code",
        "desc": "Alter, schwer wartbarer Code.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "MVP",
        "desc": "Minimum Viable Product – Minimales funktionsfähiges Produkt.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Patch",
        "desc": "Kleine Softwarekorrektur.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "PoC",
        "desc": "Proof of Concept – Machbarkeitsnachweis.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Refactoring",
        "desc": "Verbesserung der Code‑Struktur ohne Verhaltensänderung.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Regression",
        "desc": "Fehler kehrt nach einer Änderung zurück.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Rubber Duck Debugging",
        "desc": "Probleme laut erklären, um sie zu lösen.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Schrödinbug",
        "desc": "Funktioniert nur solange man den Code nicht liest.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Side Effects",
        "desc": "Nebenwirkungen einer Funktion.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Smoke Test",
        "desc": "Schnelle Grundprüfung.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Technical Debt",
        "desc": "Technische Schulden durch Abkürzungen oder alte Implementationen.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "WET",
        "desc": "Write Everything Twice – Gegenteil von DRY.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "YAGNI",
        "desc": "You Aren't Gonna Need It – Nicht Überentwickeln.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "Yak Shaving",
        "desc": "Ungeplante Nebenaufgaben erledigen.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
      },
      {
        "term": "CI/CD",
        "desc": "Continuous Integration / Continuous Deployment: Automatisierung von Tests und Auslieferung.",
        "tags": [
          "Allgemeiner Dev-Jargon"
        ]
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
        "desc": "Zur Laufzeit erzeugter Datentyp ohne eigenen Namen.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Array",
        "desc": "Fixe Liste mit gleicher Typzugehörigkeit.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "BigInteger",
        "desc": "Beliebig große Ganzzahlen.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Binary",
        "desc": "Rohdaten (Bytes).",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Binary Data Type",
        "desc": "Speicherung von Dateien und Streams.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "BitArray",
        "desc": "Sammlung einzelner Bits.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Blob",
        "desc": "Große binäre Daten (z.B. Dateien).",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Boolean",
        "desc": "Wahr/Falsch Werte (true/false).",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Boolean Flag",
        "desc": "Typ für logische Steuerparameter.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Byte",
        "desc": "Kleiner 8‑Bit Wert.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Char",
        "desc": "Ein einzelnes Unicode-Zeichen.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Class",
        "desc": "Referenztyp, der Verhalten & Daten enthält.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Color",
        "desc": "RGBA Farbdatenstruktur.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "DateOnly",
        "desc": "Nur Datum ohne Uhrzeit.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "DateTime",
        "desc": "Datum/Zeit Kombination.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Decimal",
        "desc": "Exakte Dezimalzahl, ideal für Geldberechnungen.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Dictionary",
        "desc": "Key-Value Datensammlung.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Discriminated Union",
        "desc": "Funktionale Typherarchie.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Double",
        "desc": "Gleitkommazahl mit doppelter Genauigkeit.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Dynamic",
        "desc": "Typ zur Laufzeit bestimmt (dynamic).",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Enum",
        "desc": "Vordefinierter Satz benannter Konstanten.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Float",
        "desc": "Gleitkommazahl mit einfacher Genauigkeit.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Guid",
        "desc": "128‑Bit weltweit eindeutige ID.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "HashSet",
        "desc": "Mengenstruktur ohne Duplikate.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Integer",
        "desc": "Ganzzahl ohne Nachkommastellen (z.B. int, long).",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "JSON Array",
        "desc": "Liste beliebiger JSON‑Werte.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "JSON Object",
        "desc": "Strukturierter Datentyp für Web‑APIs.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "List",
        "desc": "Dynamische Liste von Elementen.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Matrix",
        "desc": "Mehrdimensionale mathematische Struktur.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Memory",
        "desc": "Verwendet für Puffer/Streaming‑Operationen.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Nullable",
        "desc": "Datentyp, der zusätzlich „null“ annehmen kann.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Object",
        "desc": "Basis‑Typ für alle .NET‑Datentypen (OOP‑Root).",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Option Type",
        "desc": "F# / funktional: Ein Wert oder None.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Pointer",
        "desc": "Direkter Speicherzeiger (unsafe code).",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Queue",
        "desc": "FIFO Datenstruktur.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Record",
        "desc": "Immutable Datenstruktur (C# 9+).",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "SByte",
        "desc": "Signiertes Byte (-128 bis 127).",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Short",
        "desc": "16‑Bit Ganzzahl (signed).",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Span",
        "desc": "Leichterer Zugriff auf Speicherbereiche.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "SQL Date",
        "desc": "Datum ohne Uhrzeit in SQL.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "SQL Decimal",
        "desc": "Exakte Dezimalzahlen in SQL.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "SQL Int",
        "desc": "Integer‑Spaltentyp in SQL‑Datenbanken.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "SQL NVarchar",
        "desc": "Unicode‑Zeichenkette.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "SQL Timestamp",
        "desc": "Zeitstempel, meist als RowVersion.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "SQL Varchar",
        "desc": "Variable Zeichenkette.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Stack",
        "desc": "LIFO Datenstruktur.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Stream",
        "desc": "Abstraktion für sequenziellen Datenfluss.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "String",
        "desc": "Zeichenkette beliebiger Länge.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Struct",
        "desc": "Werttyp, gespeichert im Stack.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "TimeOnly",
        "desc": "Nur Uhrzeit ohne Datum.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "TimeSpan",
        "desc": "Zeitspanne (Dauer).",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Tuple",
        "desc": "Sammlung verschiedener Werte ohne eigenen Typ.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "UInt",
        "desc": "32‑Bit Ganzzahl (unsigned).",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "ULong",
        "desc": "64‑Bit Ganzzahl (unsigned).",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "UShort",
        "desc": "16‑Bit Ganzzahl (unsigned).",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "ValueTuple",
        "desc": "Moderne, performante Version des Tuple‑Typs.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Vector2 / Vector3",
        "desc": "2D/3D Vektoren.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "XML Node",
        "desc": "Einzelner XML‑Elementknoten.",
        "tags": [
          "Datentypen"
        ]
      },
      {
        "term": "Graph",
        "desc": "Eine Sammlung von Knoten (Vertices) und deren Verbindungen (Edges).",
        "tags": [
          "Datentypen"
        ]
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
        "desc": "Agiles Framework mit Sprints, Daily Scrums, Sprint Reviews und Retrospektiven. Rollen: Scrum Master, Product Owner, Developer.",
        "tags": [
          "Softwareentwicklungsprozesse"
        ]
      },
      {
        "term": "Kanban",
        "desc": "Agile Methode zur Visualisierung von Aufgaben (z.B. auf einem Kanban-Board) mit Spalten wie To Do, In Progress, Done, um Engpässe zu vermeiden.",
        "tags": [
          "Softwareentwicklungsprozesse"
        ]
      },
      {
        "term": "Wasserfallmodell",
        "desc": "Klassisches, lineares Vorgehensmodell in der Softwareentwicklung (Anforderung, Entwurf, Implementierung, Test, Wartung).",
        "tags": [
          "Softwareentwicklungsprozesse"
        ]
      },
      {
        "term": "V-Modell",
        "desc": "Erweiterung des Wasserfallmodells, bei dem jeder Entwicklungsphase eine entsprechende Testphase gegenübergestellt wird.",
        "tags": [
          "Softwareentwicklungsprozesse"
        ]
      },
      {
        "term": "Agile Softwareentwicklung",
        "desc": "Sammelbegriff für flexible, iterative Entwicklungsmethoden, die den Menschen und die funktionierende Software in den Fokus stellen (Agiles Manifest).",
        "tags": [
          "Softwareentwicklungsprozesse"
        ]
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
        "desc": "Beschreibt die Anforderungen des **Auftraggebers** ('Was' und 'Wofür' soll gemacht werden?).",
        "tags": [
          "Projektplanung & Dokumentation"
        ]
      },
      {
        "term": "Pflichtenheft",
        "desc": "Beschreibt, **wie** der Auftragnehmer die Anforderungen aus dem Lastenheft umsetzen wird (Lösungskonzept).",
        "tags": [
          "Projektplanung & Dokumentation"
        ]
      },
      {
        "term": "Nutzwertanalyse",
        "desc": "Systematische Entscheidungsmethode, um verschiedene Alternativen anhand gewichteter Kriterien zu vergleichen.",
        "tags": [
          "Projektplanung & Dokumentation"
        ]
      },
      {
        "term": "Gantt-Diagramm",
        "desc": "Ein Balkendiagramm zur Darstellung von Projektabläufen und -zeitplänen.",
        "tags": [
          "Projektplanung & Dokumentation"
        ]
      },
      {
        "term": "Meilenstein",
        "desc": "Wichtiges Zwischenziel in einem Projekt, dessen Erreichen überprüfbar ist.",
        "tags": [
          "Projektplanung & Dokumentation"
        ]
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
        "desc": "Variablen & Methoden (z.B. <code>myVariableName</code>).",
        "tags": [
          "🎨 Clean Code & Naming"
        ]
      },
      {
        "term": "PascalCase",
        "desc": "Klassen & Typen (z.B. <code>MyClassName</code>).",
        "tags": [
          "🎨 Clean Code & Naming"
        ]
      },
      {
        "term": "kebab-case",
        "desc": "URL-Pfade & CSS-Klassen (z.B. <code>my-style-class</code>).",
        "tags": [
          "🎨 Clean Code & Naming"
        ]
      },
      {
        "term": "SNAKE_CASE",
        "desc": "Konstanten (z.B. <code>MAX_RETRY_COUNT</code>).",
        "tags": [
          "🎨 Clean Code & Naming"
        ]
      },
      {
        "term": "Boy Scout Rule",
        "desc": "Hinterlasse den Code immer ein Stück sauberer, als du ihn vorgefunden hast.",
        "tags": [
          "🎨 Clean Code & Naming"
        ]
      },
      {
        "term": "S.O.L.I.D.",
        "desc": "Fokus auf Wartbarkeit durch klare Zuständigkeiten.",
        "tags": [
          "🎨 Clean Code & Naming"
        ]
      },
      {
        "term": "Kommentare ",
        "desc": "C# // Kommentarfunktion für einen selber Notiz",
        "tags": [
          "🎨 Clean Code & Naming"
        ]
      },
      {
        "term": "XML Dokumentation ",
        "desc": "C# /// Kommentarfunktion für andere Entwickler Intellisense eingebettet",
        "onclick": "openPDF('XMLDokumentation.pdf')",
        "tags": [
          "🎨 Clean Code & Naming"
        ]
      },
      {
        "term": "XML Dokumentation Tags ",
        "desc": "C# /// TagsListe",
        "onclick": "openPDF('XMLDokumentationsTags.pdf')",
        "tags": [
          "🎨 Clean Code & Naming"
        ]
      },
      {
        "term": "KISS",
        "desc": "Keep It Simple, Stupid: Lösungen sollten so einfach wie möglich gehalten werden.",
        "tags": [
          "🎨 Clean Code & Naming"
        ]
      },
      {
        "term": "YAGNI",
        "desc": "You Aren't Gonna Need It: Implementiere keine Features im Voraus, wenn sie noch nicht benötigt werden.",
        "tags": [
          "🎨 Clean Code & Naming"
        ]
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
        "desc": "Subklasse, die Funktionen erweitert oder überschreibt.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Abstraktion",
        "desc": "Reduzierung komplexer Systeme auf ihre Kernelemente.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Abstrakte Klasse",
        "desc": "Klasse, die nicht instanziert werden kann.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Aggregate",
        "desc": "Ein Verbund mehrerer Entities als Einheit.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Aggregation",
        "desc": "Objekt hält Referenz auf andere Objekte – schwächer als Komposition.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Base",
        "desc": "Zugriff auf implementierte Logik der Basisklasse.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Basisklasse",
        "desc": "Die übergeordnete Klasse, von der geerbt wird.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Composition",
        "desc": "Objekt enthält andere Objekte als Teil der Struktur.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Constructor Chaining",
        "desc": "Ein Konstruktor ruft einen anderen auf.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Data Class / Record",
        "desc": "OOP‑Typ speziell für immutable Daten.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Dependency",
        "desc": "Eine Klasse benötigt eine andere Klasse als Abhängigkeit.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Dependency Injection",
        "desc": "Abhängigkeiten werden von außen bereitgestellt.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Destruktor",
        "desc": "Räumt Ressourcen beim Löschen des Objekts auf.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "DTO",
        "desc": "Data Transfer Object zum Datentransport.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Early Binding",
        "desc": "Entscheidung über Methode zur Kompilierzeit.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Eigenschaft (Property)",
        "desc": "Datenfeld mit Getter/Setter zum Lesen & Schreiben.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Entity",
        "desc": "Objekt mit Identität (z.B. in DDD).",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Feld (Field)",
        "desc": "Variable im Inneren eines Objekts oder einer Klasse.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Generics",
        "desc": "OOP‑Templates für beliebige Datentypen.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Getter/Setter",
        "desc": "Steuern den Zugriff auf Eigenschaften.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Instanzierung",
        "desc": "Erzeugung eines Objekts aus einer Klasse.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Interface",
        "desc": "Reiner Vertrag aus Methoden ohne Implementierung.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Kapselung (Encapsulation)",
        "desc": "Daten verstecken, nur kontrollierten Zugriff erlauben.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Klasse",
        "desc": "Bauplan für Objekte mit Eigenschaften und Methoden.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Konstruktor",
        "desc": "Spezielle Methode zur Initialisierung eines Objekts.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Late Binding",
        "desc": "Entscheidung über Methode zur Laufzeit.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Liskov Substitution Principle",
        "desc": "Subtypen müssen sich wie Basistypen verhalten.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Methode",
        "desc": "Funktion innerhalb einer Klasse.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Methodenüberladung",
        "desc": "Gleiche Methode, aber unterschiedliche Parameter.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Methodenüberschreibung",
        "desc": "Implementierung einer geerbten Methode überschreiben.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Object Lifetime",
        "desc": "Lebenszyklus einer Instanz von Erzeugung bis Zerstörung.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Objekt",
        "desc": "Instanz einer Klasse, konkretes Exemplar im Speicher.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Open/Closed Principle",
        "desc": "Erweiterbar, aber nicht veränderbar.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Override",
        "desc": "Überschreibt eine virtuelle/abstrakte Methode.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Overriding vs. Hiding",
        "desc": "Override ersetzt Verhalten – Hiding blendet es aus.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Polymorphie",
        "desc": "Gleiches Interface, unterschiedliche Implementierung.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "POCO",
        "desc": "Plain Old CLR Object – einfache Datenklasse ohne Logik.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Readonly",
        "desc": "Wert nach initialer Zuweisung nicht mehr veränderbar.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Reflection",
        "desc": "Laufzeitinspektion von Typen & Metadaten.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Sealed",
        "desc": "Verhindert weitere Vererbung einer Klasse.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "SOLID Prinzipien",
        "desc": "5 Grundprinzipien für sauberes OOP‑Design.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Static",
        "desc": "Mitglied, das zur Klasse selbst statt zur Instanz gehört.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "This",
        "desc": "Referenz auf die aktuelle Instanz.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Vererbung",
        "desc": "Eine Klasse übernimmt Eigenschaften/Methoden einer anderen.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Virtuelle Methode",
        "desc": "Kann in Unterklassen überschrieben werden.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "SOLID",
        "desc": "Fünf Prinzipien objektorientierten Designs: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
      },
      {
        "term": "Design Patterns",
        "desc": "Bewährte Lösungsschablonen für wiederkehrende Design-Probleme (z.B. Singleton, Observer).",
        "tags": [
          "OOP – Objektorientierte Programmierung"
        ]
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
        "desc": "Strukturdiagramm: Zeigt die Klassen eines Systems, ihre Attribute, Methoden und die Beziehungen (Vererbung, Assoziation) zueinander.",
        "tags": [
          "Unified Modeling Language"
        ]
      },
      {
        "term": "Sequenzdiagramm",
        "desc": "Verhaltensdiagramm: Zeigt, wie Objekte im Laufe der Zeit miteinander interagieren (Nachrichtenaustausch).",
        "tags": [
          "Unified Modeling Language"
        ]
      },
      {
        "term": "Use Case Diagramm",
        "desc": "Anwendungsfalldiagramm: Zeigt die Interaktionen zwischen Akteuren (Nutzern) und dem System, um das Verhalten aus Anwendersicht zu modellieren.",
        "tags": [
          "Unified Modeling Language"
        ]
      },
      {
        "term": "Aktivitätsdiagramm",
        "desc": "Modelliert den Kontrollfluss von Prozessen und Abläufen, ähnlich einem Flussdiagramm.",
        "tags": [
          "Unified Modeling Language"
        ]
      },
      {
        "term": "ER-Modell (ERM)",
        "desc": "Entity-Relationship-Modell: Dient der konzeptionellen Modellierung von Datenbanken (Entitäten, Relationen, Attribute).",
        "tags": [
          "Unified Modeling Language"
        ]
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
        "desc": "Erzeugungsmuster: Stellt sicher, dass eine Klasse nur genau eine Instanz hat und bietet einen globalen Zugriffspunkt darauf.",
        "tags": [
          "Entwurfsmuster"
        ]
      },
      {
        "term": "Factory Method",
        "desc": "Erzeugungsmuster: Definiert eine Schnittstelle zur Erstellung eines Objekts, überlässt aber den Unterklassen die Entscheidung, welche Klasse instanziiert wird.",
        "tags": [
          "Entwurfsmuster"
        ]
      },
      {
        "term": "Observer",
        "desc": "Verhaltensmuster: Ein Objekt (Subjekt) benachrichtigt eine Liste von abhängigen Objekten (Beobachter) automatisch über Zustandsänderungen.",
        "tags": [
          "Entwurfsmuster"
        ]
      },
      {
        "term": "Strategy",
        "desc": "Verhaltensmuster: Definiert eine Familie von Algorithmen und macht diese austauschbar, ohne den Client-Code anzupassen.",
        "tags": [
          "Entwurfsmuster"
        ]
      },
      {
        "term": "MVC (Model-View-Controller)",
        "desc": "Architekturmuster, das Software in Datenmodell (Model), Präsentation (View) und Steuerung (Controller) unterteilt.",
        "tags": [
          "Entwurfsmuster"
        ]
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
        "desc": "Best Practices für Cloud‑native Anwendungen.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Aggregator Pattern",
        "desc": "Fasst Daten aus mehreren Services zu einer Antwort zusammen.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Anti‑Corruption Layer",
        "desc": "Schützt das System vor schlechtem externen Datenmodell.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "APIs as First Class Citizens",
        "desc": "APIs sind zentrale Architekturbausteine.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Backend for Frontend (BFF)",
        "desc": "Spezielle Backend‑Schicht pro Frontend‑App.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Blacklist / Whitelist Pattern",
        "desc": "Kontrollmuster für erlaubte vs. blockierte Elemente.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Bridge Pattern",
        "desc": "Koppelt Abstraktion von Implementierung los.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Builder Pattern",
        "desc": "Baut komplexe Objekte Schritt für Schritt.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Bulkhead Isolation",
        "desc": "Isoliert Systemteile, um Kaskadenfehler zu vermeiden.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Chain of Responsibility",
        "desc": "Request wandert durch Handler‑Kette.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Circuit Breaker Pattern",
        "desc": "Unterbricht fehlerhafte Service‑Calls, um Ausfallketten zu verhindern.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Clean Architecture",
        "desc": "Architekturprinzip, das Fachlogik klar von Infrastruktur trennt.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Client-Side Composition",
        "desc": "UI wird im Browser aus Micro‑Frontends zusammengesetzt.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Command / Query Bus",
        "desc": "Zentrale Ausführung von Commands bzw. Abstraktion für lesende Abfragen.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Command Pattern",
        "desc": "Befehle als Objekte, die ausgeführt oder gespeichert werden können.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Composite Pattern",
        "desc": "Behandlung komplexer Baumstrukturen wie Einzelobjekte.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "CQRS / Event Sourcing",
        "desc": "Trennung von Lese- und Schreiboperationen (Read/Write Models) bzw. Speichern des Zustands per Events.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Data Mapper",
        "desc": "Mapping zwischen Modellen und Datenbank.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "DDD (Domain-Driven Design)",
        "desc": "Fokus der Software-Struktur auf die fachliche Domäne und deren Logik.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "DI (Dependency Injection)",
        "desc": "Abhängigkeiten von außen in eine Klasse \"hineinreichen\".",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Distributed Monolith",
        "desc": "Microservices, die eigentlich wie ein Monolith funktionieren.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Domain Events",
        "desc": "Ereignisse reagieren auf Änderungen im Domänenmodell.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Event Bus",
        "desc": "Zentrale Verteilstelle für Events.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Event Storming",
        "desc": "Workshop‑Methode zur Modellierung im DDD.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Eventual Consistency",
        "desc": "System wird zeitversetzt konsistent — typisch für Microservices.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Facade Pattern",
        "desc": "Vereinfachte API für komplexe Subsysteme.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Factory / Strategy Pattern",
        "desc": "Muster zur Objekt-Erzeugung bzw. für austauschbare Algorithmen.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Feature Toggles",
        "desc": "Features live an‑ oder abschalten.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Flyweight Pattern",
        "desc": "Gemeinsame Nutzung gemeinsamer Daten zur Speicheroptimierung.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Gateway Pattern",
        "desc": "Zentrale API‑Schnittstelle zu externen Systemen.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Hexagonale Architektur / Ports & Adapters",
        "desc": "Isolation der Kernlogik durch \"Ports & Adapters\" von äußeren Einflüssen.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "IoC (Inversion of Control)",
        "desc": "Umkehrung der Kontrolle: Das Framework ruft den Code auf, nicht umgekehrt.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Layered Architecture",
        "desc": "Klassische Schichtenarchitektur (UI → Service → Repo → DB).",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Mediator Pattern",
        "desc": "Zentraler Vermittler für Objektkommunikation.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Memento Pattern",
        "desc": "Sichert und stellt Objektzustände wieder her.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Microkernel Architecture",
        "desc": "Kernsystem + Plugins für erweiterbare Software.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Monolith vs. Microservices",
        "desc": "Eine große, zentrale Anwendung vs. viele kleine, spezialisierte Dienste.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "MVC / MVVM",
        "desc": "Muster zur Trennung von Daten, Benutzeroberfläche und Logik.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Observer / Adapter Pattern",
        "desc": "Muster für Event-Benachrichtigungen bzw. zur Herstellung von Kompatibilität.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Onion Architecture",
        "desc": "Schichtenmodell, bei dem die Domäne im Zentrum steht.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Pipes & Filters",
        "desc": "Verarbeitungskette, in der Daten durch Filter geleitet werden.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Proxy Pattern",
        "desc": "Stellvertreter‑Objekt für Zugriffskontrolle, Caching oder Lazy Loading.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Repository Pattern",
        "desc": "Abstraktionsebene für Datenzugriff.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Saga Pattern",
        "desc": "Koordiniert verteilte Transaktionen in Microservices.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Server-Side Composition",
        "desc": "Backend setzt UI‑Fragmente serverseitig zusammen.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Service Layer",
        "desc": "Beinhaltet Geschäftslogik zwischen UI und Datenzugriff.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Service Mesh",
        "desc": "Netzwerk‑Infrastruktur für Routing, MTLS und Observability.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Service Registry",
        "desc": "Zentrales Verzeichnis aller Microservices.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Sidecar Pattern",
        "desc": "Anhängender Prozess für Logging, Monitoring etc.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "SOLID",
        "desc": "5 Grundprinzipien für wartbares und flexibles Objekt-Design.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "State Pattern",
        "desc": "Objekte ändern Verhalten je nach internem Status.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Strangler Pattern",
        "desc": "Altsystem Stück für Stück durch Neues ersetzen.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Template Method",
        "desc": "Vorgegebener Algorithmus mit erweiterbaren Schritten.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Unit of Work",
        "desc": "Bündelt Änderungen zu einer DB‑Transaktion.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Visitor Pattern",
        "desc": "Trennt Operationen von Datenstrukturen.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Microservices",
        "desc": "Aufteilen einer großen Anwendung in kleine, unabhängig voneinander laufende Dienste.",
        "tags": [
          "Software-Architektur"
        ]
      },
      {
        "term": "Serverless",
        "desc": "Ausführung von Code ohne Server-Management (z.B. AWS Lambda).",
        "tags": [
          "Software-Architektur"
        ]
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
        "desc": "Schlüsselwörter für die einfache Steuerung asynchroner Programmflüsse.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Async I/O",
        "desc": "Asynchroner Zugriff auf Eingabe/Ausgabe, ohne den Thread während des Wartens zu blockieren.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Async Lock",
        "desc": "Asynchrone Sperre, die den Task pausiert, aber den Thread für andere Aufgaben freigibt.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Async Stream",
        "desc": "Asynchroner Datenstrom (IAsyncEnumerable), der Werte nacheinander liefert, sobald sie bereit sind.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Asynchronous Pipeline",
        "desc": "Datenfluss-Modell, bei dem verschiedene Stufen einer Aufgabe parallel verarbeitet werden.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Atomic Operation",
        "desc": "Unteilbare Operation auf CPU-Ebene, die nicht durch andere Threads unterbrochen werden kann.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Auto Reset Event",
        "desc": "Synchronisationsobjekt, das nach einer Freigabe automatisch wieder in den gesperrten Zustand springt.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Awaitable",
        "desc": "Ein Objekt (wie Task oder ValueTask), auf das mit dem await-Operator gewartet werden kann.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Backpressure",
        "desc": "Mechanismus zur Flusssteuerung, um ein System vor Überlastung durch zu viele eingehende Daten zu schützen.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Barrier",
        "desc": "Ein Synchronisationspunkt, an dem mehrere Threads aufeinandertreffen müssen, bevor sie gemeinsam fortfahren.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Blocking Call",
        "desc": "Ein Funktionsaufruf, der den aktuellen Thread komplett anhält, bis die Operation abgeschlossen ist.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Cancellation Token",
        "desc": "Ein Signal-Objekt, mit dem laufende asynchrone Operationen sicher abgebrochen werden können.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Concurrent Queue",
        "desc": "Eine thread-sichere Warteschlange, die parallele Lese- und Schreibzugriffe erlaubt.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Continuation",
        "desc": "Ein Codeblock, der automatisch ausgeführt wird, sobald eine asynchrone Operation beendet ist.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Countdown Event",
        "desc": "Ein Synchronisationsobjekt, das einen Thread blockiert, bis eine bestimmte Anzahl an Tasks abgeschlossen ist.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Critical Section",
        "desc": "Ein Codebereich, der zur Vermeidung von Fehlern niemals von mehr als einem Thread gleichzeitig betreten werden darf.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Deadlock",
        "desc": "Ein Zustand, in dem sich zwei oder mehr Prozesse gegenseitig blockieren, weil jeder auf eine Ressource wartet, die der andere hält.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Event Loop",
        "desc": "Der Kernmechanismus (z. B. in NodeJS), der asynchrone Ereignisse nacheinander abarbeitet.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Fiber",
        "desc": "Ein extrem leichtgewichtiger \"Thread\", der vom Programm selbst und nicht vom Betriebssystem verwaltet wird.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Green Thread",
        "desc": "Ein von einer Laufzeitumgebung (VM) verwalteter Thread, der auf Betriebssystem-Threads abgebildet wird.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Immutable Object",
        "desc": "Ein Objekt, dessen Zustand nach der Erstellung nicht mehr geändert werden kann – dadurch ist es von Natur aus thread-sicher.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Livelock",
        "desc": "Ein Zustand, in dem Prozesse zwar aktiv auf Ereignisse reagieren, sich aber gegenseitig so beeinflussen, dass kein echter Fortschritt erzielt wird.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Lock-Free Algorithm",
        "desc": "Ein Algorithmus, der ohne explizite Sperren (Locks) auskommt, um maximale Performance zu erzielen.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Main Thread",
        "desc": "Der primäre Thread einer Anwendung, der den Startpunkt bildet und oft für die Programmlogik zuständig ist.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Manual Reset Event",
        "desc": "Ein Signal-Objekt, das so lange offen bleibt, bis es manuell wieder in den gesperrten Zustand gesetzt wird.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Memory Fence",
        "desc": "Eine Barriere, die sicherstellt, dass Speicheroperationen in der korrekten Reihenfolge für alle Threads sichtbar werden.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Message Queue",
        "desc": "Ein System zum asynchronen Austausch von Nachrichten zwischen verschiedenen Programmteilen oder Diensten.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Monitor",
        "desc": "Ein High-Level-Synchronisationsmechanismus, der exklusiven Zugriff auf ein Objekt garantiert.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Mutex",
        "desc": "Ein \"Mutual Exclusion\"-Objekt (gegenseitiger Ausschluss), das als exklusive Sperre für Ressourcen dient.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Non-Blocking Call",
        "desc": "Ein Aufruf, der sofort zurückkehrt, auch wenn die Operation im Hintergrund noch läuft; der Thread bleibt frei.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Out-of-Order Execution",
        "desc": "Ein Performance-Feature moderner CPUs, bei dem Befehle zur Effizienzsteigerung nicht strikt in der programmierten Reihenfolge ausgeführt werden.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Parallel LINQ (PLINQ)",
        "desc": "Eine Erweiterung von LINQ, die Abfragen automatisch auf mehrere CPU-Kerne verteilt.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Parallel.For",
        "desc": "Ein Programmierkonstrukt, das die Iterationen einer Schleife automatisch parallel auf mehreren Threads ausführt.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Producer-Consumer",
        "desc": "Ein Entwurfsmuster, bei dem ein Thread Daten erzeugt und ein anderer diese asynchron verarbeitet.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Queue",
        "desc": "Eine Warteschlange zur geordneten, sequenziellen Abarbeitung von Aufgaben (First-In-First-Out).",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Race Condition",
        "desc": "Ein Fehler, bei dem das Endergebnis vom unvorhersehbaren zeitlichen Ablauf paralleler Operationen abhängt.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Scheduler Priority",
        "desc": "Die Rangfolge, nach der das Betriebssystem entscheidet, welcher Thread als Nächstes Rechenzeit erhält.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Semaphore",
        "desc": "Ein Zählmechanismus, der den gleichzeitigen Zugriff auf eine begrenzte Anzahl von Ressourcen regelt.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "SemaphoreSlim",
        "desc": "Eine leichtgewichtigere .NET-Variante des Semaphors, optimiert für kurze Wartezeiten innerhalb einer Anwendung.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Speculative Execution",
        "desc": "Die Vorwegnahme von Berechnungen durch die CPU, bevor sicher ist, ob das Ergebnis überhaupt benötigt wird.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Spinlock",
        "desc": "Eine Sperre, bei der ein Thread in einer engen Schleife aktiv wartet, statt sich schlafen zu legen (effizient bei sehr kurzen Wartezeiten).",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Task",
        "desc": "Eine logische Abstraktion für eine asynchrone Operation, die im Gegensatz zum Thread vom Framework verwaltet wird.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Task Scheduler",
        "desc": "Die Komponente, die entscheidet, wann und auf welchem Thread ein Task tatsächlich ausgeführt wird.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Thread",
        "desc": "Die kleinste vom Betriebssystem verwaltete Ausführungseinheit eines Programms.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Thread Affinity",
        "desc": "Die Bindung einer Operation an einen ganz bestimmten Thread (z. B. müssen UI-Elemente oft im UI-Thread bleiben).",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Thread Context Switch",
        "desc": "Der rechenintensive Vorgang, bei dem die CPU den aktuellen Thread-Zustand speichert und zu einem anderen Thread wechselt.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Thread Pool",
        "desc": "Ein Reservoir an bereits erstellten Threads, die für neue Aufgaben wiederverwendet werden, um Erzeugungskosten zu sparen.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Thread Pool Queue",
        "desc": "Die interne Warteschlange des Thread Pools, in der Aufgaben auf einen freien Thread warten.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Thread Starvation",
        "desc": "Ein Problem, bei dem ein Thread niemals Rechenzeit erhält, weil andere Threads ständig bevorzugt werden.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Thread-Safe",
        "desc": "Code, der garantiert korrekt funktioniert, auch wenn er von mehreren Threads gleichzeitig ausgeführt wird.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "UI Thread",
        "desc": "Ein spezieller Thread, der ausschließlich für die Verarbeitung von Benutzereingaben und die Aktualisierung der Oberfläche zuständig ist.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Wait-Free",
        "desc": "Die stärkste Garantie für Algorithmen: Jeder Thread wird garantiert nach einer festen Anzahl von Schritten fertig, unabhängig von anderen Threads.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Work Stealing",
        "desc": "Ein Algorithmus im Scheduler, bei dem untätige Threads Aufgaben von überlasteten Threads \"stehlen\", um die CPU-Last zu verteilen.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Worker Thread",
        "desc": "Ein Hintergrund-Thread, der rechenintensive Aufgaben übernimmt, ohne die Benutzeroberfläche zu blockieren.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
      },
      {
        "term": "Promise",
        "desc": "Ein Objekt, das den eventuellen Abschluss (oder Fehlschlag) einer asynchronen Operation repräsentiert.",
        "tags": [
          "Nebenläufigkeit & Asynchronität"
        ]
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
        "desc": "Strukturmodell bestehend aus Frontend, Backend und Datenbank.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "a11y (Accessibility)",
        "desc": "Barrierefreiheit – Sicherstellen, dass Webseiten für Menschen mit Behinderungen nutzbar sind.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Bot Protection",
        "desc": "Maßnahmen zur Abwehr automatisierter Angriffe und Scraper.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Camo / Image Proxy",
        "desc": "Sicheres Ausliefern von Bildern über einen zwischengeschalteten Proxy.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "CDN",
        "desc": "Global verteiltes Netzwerk für die schnelle Auslieferung von Web-Assets.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Code Splitting",
        "desc": "Aufteilen des Codes in kleinere Pakete für optimierte Ladezeiten.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Content Delivery Optimization",
        "desc": "Sammelbegriff für Techniken zur Minimierung von Web-Ladezeiten.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Content Negotiation",
        "desc": "Mechanismus, bei dem Client und Server das beste Datenformat (z.B. JSON) aushandeln.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "CORS",
        "desc": "Sicherheitsmechanismus zur Steuerung von Ressourcen-Zugriffen fremder Domains.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "CORS Preflight",
        "desc": "Ein vorab gesendeter OPTIONS-Request zur Prüfung der Zugriffserlaubnis.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "CSP (Content Security Policy)",
        "desc": "Sicherheits-Header zur Abwehr von XSS durch strikte Quellen-Regeln.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "CSR Hydration",
        "desc": "Prozess, bei dem statisches Server-HTML im Browser wieder interaktiv wird.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Custom Elements",
        "desc": "Möglichkeit, eigene HTML-Tags mit spezifischem Verhalten zu definieren.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Debouncing",
        "desc": "Technik, die verhindert, dass eine Funktion bei schnellen Events zu oft feuert.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "DNS Prefetch",
        "desc": "Frühzeitiges Auflösen von Domainnamen im Hintergrund zur Latenzsenkung.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "ETag",
        "desc": "HTTP-Header-Wert zur effizienten Validierung von Browser-Caches.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "GraphQL",
        "desc": "API-Abfragesprache, bei der der Client die exakte Datenstruktur bestimmt.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "HSTS",
        "desc": "Sicherheits-Header, der den Browser zwingt, nur HTTPS-Verbindungen zu nutzen.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "HTTP Caching",
        "desc": "Steuerung der Speicherung von Inhalten über Cache-Control Header.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "HTTP/2",
        "desc": "Modernes Protokoll mit Multiplexing für parallele Übertragungen.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "HTTP/3 (QUIC)",
        "desc": "Nächste Protokoll-Generation auf UDP-Basis für noch schnellere Verbindungen.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "iFrame Sandbox",
        "desc": "Sicherheitsattribut zur Isolierung von eingebetteten Inhalten.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Isomorphic Rendering",
        "desc": "Konzept, bei dem derselbe Code sowohl auf dem Server als auch im Client läuft.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "JWT Authentication",
        "desc": "Sichere Authentifizierung über signierte, zustandslose JSON-Token.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Lazy Loading",
        "desc": "Verfahren, bei dem Ressourcen erst geladen werden, wenn sie im Sichtfeld sind.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Local Storage",
        "desc": "Dauerhafter Browser-Speicher für einfache Daten ohne Ablaufdatum.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Micro API Gateways",
        "desc": "Spezialisierte Vermittlungsschichten für einzelne Microservice-Bereiche.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Micro Frontends",
        "desc": "Zerlegung einer Frontend-Anwendung in unabhängige, lieferbare Module.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Middleware",
        "desc": "Logikschicht zwischen Request und Response zur Datenverarbeitung.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Multi-Tenant Architecture",
        "desc": "Software-Modell, bei dem mehrere Kunden isoliert dieselbe Instanz nutzen.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "OAuth2 PKCE",
        "desc": "Erweiterter Sicherheitsstandard für Logins in mobilen Apps und SPAs.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "OpenAPI / Swagger",
        "desc": "Standardisierte Dokumentation und Beschreibung von REST-Schnittstellen.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Prefetching",
        "desc": "Unverbindliches Laden von Ressourcen, die der Nutzer bald brauchen könnte.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Preloading",
        "desc": "Priorisiertes Laden kritischer Ressourcen für den aktuellen Seitenaufruf.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Proxy",
        "desc": "Zwischenstation, die Anfragen im Namen des Clients weiterleitet.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "PWA",
        "desc": "Web-Apps, die native Funktionen wie Offline-Modus und Push bieten.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Rate Limiting",
        "desc": "Schutzmechanismus zur Begrenzung von API-Anfragen pro Zeiteinheit.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "REST",
        "desc": "Architekturstil für einfache, zustandslose Web-Schnittstellen via HTTP.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Reverse Proxy",
        "desc": "Server, der Anfragen entgegennimmt und an interne Backend-Dienste verteilt.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Reverse Shell in Browser",
        "desc": "Nutzung von Web-Technologien zur Fernsteuerung/Kommunikation.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Same-Origin Policy",
        "desc": "Elementares Browser-Sicherheitskonzept gegen domainübergreifende Zugriffe.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "SameSite Cookies",
        "desc": "Attribut zum Schutz vor Cross-Site-Request-Forgery (CSRF).",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "SEO",
        "desc": "Search Engine Optimization – Optimierung von Webseiten für Suchmaschinen.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Server-Sent Events (SSE)",
        "desc": "Einseitiger Push-Kanal vom Server zum Browser für Echtzeit-Updates.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Service Worker",
        "desc": "Skript, das im Hintergrund läuft und Offline-Features ermöglicht.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Session Storage",
        "desc": "Kurzzeitiger Browser-Speicher, der beim Schließen des Tabs gelöscht wird.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Shadow DOM",
        "desc": "Isolierter Teil des DOMs zur Kapselung von Komponenten-Styles.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Single Sign-On (SSO)",
        "desc": "Zentrales Login-Verfahren für den Zugriff auf mehrere Webdienste.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "SPA / MPA",
        "desc": "Dynamische Single-Page-Apps vs. klassische Multi-Page-Anwendungen.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "SSG",
        "desc": "Vorausberechnung kompletter Webseiten als statische Dateien zur Build-Zeit.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "SSR / CSR",
        "desc": "Server-seitiges vs. Client-seitiges Erzeugen des HTML-Inhalts.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "State Management",
        "desc": "Architektur zur konsistenten Datenverwaltung über die gesamte UI hinweg.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "SWR / React Query",
        "desc": "Bibliotheken zur effizienten Synchronisation und zum Caching von API-Daten.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Throttling",
        "desc": "Künstliche Begrenzung der Ausführungsfrequenz einer Funktion (z.B. Scroll-Events).",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "tRPC",
        "desc": "Framework für typsichere API-Kommunikation zwischen Frontend und Backend.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "URL Encoding",
        "desc": "Umwandlung von Sonderzeichen in ein für URLs gültiges Format.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Vary Header",
        "desc": "HTTP-Header, der dem Cache mitteilt, welche Header-Variationen wichtig sind.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Virtual DOM",
        "desc": "Eine speicherinterne Repräsentation des DOMs (z. B. in React) zur Optimierung von Renderings.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Web Components",
        "desc": "Satz von Web-Standards zur Erstellung wiederverwendbarer UI-Elemente.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "Web Manifest",
        "desc": "JSON-Datei mit Metadaten zur Installation einer PWA.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "WebAssembly (WASM)",
        "desc": "Binärformat, um rechenintensive Programme in nativer Speed im Browser auszuführen.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "WebAuthn",
        "desc": "Moderner Standard für passwortlose Logins mittels Biometrie oder Sicherheitsschlüssel.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "WebRTC",
        "desc": "API für Echtzeitkommunikation (Video, Audio, Daten) direkt im Browser ohne Plugins.",
        "tags": [
          "Web-Entwicklung"
        ]
      },
      {
        "term": "WebSockets",
        "desc": "Technologie für dauerhafte, bidirektionale Echtzeit-Kommunikation.",
        "tags": [
          "Web-Entwicklung"
        ]
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
        "desc": "Architekturstil für Webservices, nutzt Standard-HTTP-Methoden (GET, POST, PUT, DELETE) und oft JSON.",
        "tags": [
          "Datenkommunikation & APIs"
        ]
      },
      {
        "term": "GraphQL",
        "desc": "Abfragesprache für APIs, die es Clients ermöglicht, genau die Daten anzufordern, die sie benötigen (vermeidet Over/Under-Fetching).",
        "tags": [
          "Datenkommunikation & APIs"
        ]
      },
      {
        "term": "SOAP",
        "desc": "Ein XML-basiertes Protokoll für den Austausch von Informationen in Webservices (oft starrer als REST).",
        "tags": [
          "Datenkommunikation & APIs"
        ]
      },
      {
        "term": "JSON",
        "desc": "JavaScript Object Notation: Leichtgewichtiges, textbasiertes Datenaustauschformat, ideal für APIs.",
        "tags": [
          "Datenkommunikation & APIs"
        ]
      },
      {
        "term": "JWT (JSON Web Token)",
        "desc": "Kompaktes URL-sicheres Format zur Übertragung von Claims zwischen Parteien, häufig für Authentifizierung (Stateless).",
        "tags": [
          "Datenkommunikation & APIs"
        ]
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
        "desc": "Testet die kleinste isolierte Code-Einheit (z.B. eine Methode/Funktion) auf Korrektheit.",
        "tags": [
          "Qualitätssicherung & Automatisierung"
        ]
      },
      {
        "term": "Integrationstest",
        "desc": "Testet das Zusammenspiel mehrerer Komponenten oder Module.",
        "tags": [
          "Qualitätssicherung & Automatisierung"
        ]
      },
      {
        "term": "TDD (Test-Driven Development)",
        "desc": "Entwicklungsmethode: Zuerst den fehlschlagenden Test schreiben, dann Code schreiben bis er besteht, anschließend Refactoring.",
        "tags": [
          "Qualitätssicherung & Automatisierung"
        ]
      },
      {
        "term": "CI/CD",
        "desc": "Continuous Integration (Regelmäßiges Zusammenführen & Testen) und Continuous Deployment/Delivery (Automatisches Ausliefern von Code).",
        "tags": [
          "Qualitätssicherung & Automatisierung"
        ]
      },
      {
        "term": "Mocking",
        "desc": "Simulieren des Verhaltens echter Objekte in Unit-Tests (z.B. eine Datenbank-Schnittstelle faken).",
        "tags": [
          "Qualitätssicherung & Automatisierung"
        ]
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
        "desc": "Der Server hat den ersten Teil der Anfrage erhalten und der Client kann fortfahren.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "101 Switching Protocols",
        "desc": "Der Server akzeptiert den Protokollwechsel (z. B. auf WebSockets).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "102 Processing",
        "desc": "Der Server bearbeitet die Anfrage, aber es ist noch keine Antwort verfügbar.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "103 Early Hints",
        "desc": "Wird verwendet, um HTTP-Header zurückzugeben, bevor die vollständige Serverantwort bereit ist.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "200 OK",
        "desc": "Anfrage erfolgreich bearbeitet.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "201 Created",
        "desc": "Ressource wurde erfolgreich erstellt.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "202 Accepted",
        "desc": "Anfrage akzeptiert, aber Bearbeitung noch nicht abgeschlossen.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "203 Non-Authoritative Information",
        "desc": "Informationen aus dritter Hand (Proxy).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "204 No Content",
        "desc": "Erfolg, aber keine Daten im Body (z.B. nach Delete).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "205 Reset Content",
        "desc": "Erfolgreich, Client soll die Ansicht zurücksetzen (z.B. Formular leeren).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "206 Partial Content",
        "desc": "Teilweise erfolgreiche Anfrage (wichtig für Video-Streaming oder Download-Resumes).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "207 Multi-Status",
        "desc": "Übermittelt den Status für mehrere unabhängige Operationen.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "208 Already Reported",
        "desc": "Die Mitglieder einer WebDAV-Bindung wurden bereits in einer vorherigen Antwort aufgezählt.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "226 IM Used",
        "desc": "Der Server hat die GET-Anfrage für die Ressource erfüllt und die Antwort ist eine Darstellung des Ergebnisses einer oder mehrerer Instanz-Manipulationen (IM).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "300 Multiple Choices",
        "desc": "Es stehen mehrere Optionen zur Auswahl.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "301 Moved Permanently",
        "desc": "Ressource wurde dauerhaft an eine neue URL verschoben.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "302 Found",
        "desc": "Ressource wurde temporär an eine andere URL verschoben.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "303 See Other",
        "desc": "Die Antwort ist unter einem anderen URI zu finden (meist nach POST).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "304 Not Modified",
        "desc": "Ressource hat sich nicht geändert und kann aus dem Cache geladen werden.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "305 Use Proxy",
        "desc": "Die angeforderte Ressource ist nur über einen Proxy zugänglich (veraltet).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "307 Temporary Redirect",
        "desc": "Temporäre Umleitung, Methode (GET/POST) darf sich nicht ändern.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "308 Permanent Redirect",
        "desc": "Dauerhafte Umleitung, Methode (GET/POST) darf sich nicht ändern.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "400 Bad Request",
        "desc": "Ungültige Anfrage (Syntaxfehler).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "401 Unauthorized",
        "desc": "Authentifizierung fehlt oder ist ungültig.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "402 Payment Required",
        "desc": "Für zukünftige Nutzung reserviert (ursprünglich für Mikrotransaktionen gedacht).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "403 Forbidden",
        "desc": "Authentifiziert, aber keine Berechtigung für diese Aktion.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "404 Not Found",
        "desc": "Ressource nicht gefunden.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "405 Method Not Allowed",
        "desc": "Die verwendete HTTP-Methode (z.B. POST) ist für diese Ressource nicht erlaubt.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "406 Not Acceptable",
        "desc": "Der Server kann keine Antwort senden, die den Accept-Headern des Clients entspricht.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "407 Proxy Authentication Required",
        "desc": "Client muss sich beim Proxy authentifizieren.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "408 Request Timeout",
        "desc": "Server hat auf die Anfrage des Clients gewartet, aber Zeit überschritten.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "409 Conflict",
        "desc": "Anfrage kollidiert mit aktuellem Serverstatus (z.B. Doublette).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "410 Gone",
        "desc": "Ressource wurde dauerhaft gelöscht und wird nicht zurückkehren.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "411 Length Required",
        "desc": "Content-Length Header wird vom Server zwingend erwartet.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "412 Precondition Failed",
        "desc": "Eine Vorbedingung in den Headern wurde nicht erfüllt.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "413 Payload Too Large",
        "desc": "Die Anfrage (z.B. Dateiupload) ist zu groß für den Server.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "414 URI Too Long",
        "desc": "Die URL ist zu lang.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "415 Unsupported Media Type",
        "desc": "Das Format der Anfrage wird vom Server nicht unterstützt.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "416 Range Not Satisfiable",
        "desc": "Der angeforderte Byte-Bereich der Datei existiert nicht.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "417 Expectation Failed",
        "desc": "Server kann der Expect-Header Anforderung nicht entsprechen.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "418 I'm a teapot",
        "desc": "April-Scherz der IETF (RFC 2324).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "421 Misdirected Request",
        "desc": "Anfrage an einen Server, der keine Antwort produzieren kann.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "422 Unprocessable Entity",
        "desc": "Syntax korrekt, aber semantische Fehler (WebDAV/APIs).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "423 Locked",
        "desc": "Die Ressource ist gesperrt (WebDAV).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "424 Failed Dependency",
        "desc": "Anfrage fehlgeschlagen, da eine vorherige Anfrage scheiterte (WebDAV).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "425 Too Early",
        "desc": "Der Server ist nicht bereit, eine Anfrage zu verarbeiten, die möglicherweise wiederholt wird.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "426 Upgrade Required",
        "desc": "Der Client sollte auf ein anderes Protokoll wechseln.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "428 Precondition Required",
        "desc": "Der Ursprungsserver erfordert die Bedingung der Anfrage.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "429 Too Many Requests",
        "desc": "Rate Limit überschritten.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "431 Request Header Fields Too Large",
        "desc": "Die Header-Felder der Anfrage sind zu groß.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "451 Unavailable For Legal Reasons",
        "desc": "Ressource gesperrt aus rechtlichen Gründen (z.B. Zensur).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "500 Internal Error",
        "desc": "Allgemeiner Serverfehler.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "501 Not Implemented",
        "desc": "Server unterstützt die erforderliche Funktionalität nicht.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "502 Bad Gateway",
        "desc": "Server, der als Proxy/Gateway agiert, erhielt eine ungültige Antwort vom Upstream-Server.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "503 Service Unavailable",
        "desc": "Server überlastet oder wegen Wartung down.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "504 Gateway Timeout",
        "desc": "Server, der als Proxy/Gateway agiert, erhielt nicht rechtzeitig eine Antwort vom Upstream-Server.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "505 HTTP Version Not Supported",
        "desc": "Die verwendete HTTP-Version wird nicht unterstützt.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "506 Variant Also Negotiates",
        "desc": "Interner Konfigurationsfehler bei Inhaltsaushandlung.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "507 Insufficient Storage",
        "desc": "Server hat keinen Speicherplatz mehr (WebDAV).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "508 Loop Detected",
        "desc": "Endlosschleife bei der Verarbeitung der Anfrage (WebDAV).",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "510 Not Extended",
        "desc": "Weitere Erweiterungen der Anfrage sind erforderlich.",
        "tags": [
          "HTTP-Statuscodes"
        ]
      },
      {
        "term": "511 Network Authentication Required",
        "desc": "Der Client muss sich authentifizieren, um Netzwerkzugriff zu erhalten.",
        "tags": [
          "HTTP-Statuscodes"
        ]
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
        "desc": "Beschreibt die Laufzeit oder den Speicherbedarf eines Algorithmus (z.B. O(1), O(n), O(n^2)).",
        "tags": [
          "Algorithmen & Big O"
        ]
      },
      {
        "term": "Array",
        "desc": "Datenstruktur, die Elemente desselben Typs zusammenhängend im Speicher ablegt (feste Größe, O(1) Index-Zugriff).",
        "tags": [
          "Algorithmen & Big O"
        ]
      },
      {
        "term": "Linked List",
        "desc": "Verkettete Liste: Elemente (Nodes) zeigen jeweils auf das nächste Element. Gut für schnelles Einfügen, schlecht für direkten Zugriff.",
        "tags": [
          "Algorithmen & Big O"
        ]
      },
      {
        "term": "Hash Map / Dictionary",
        "desc": "Speichert Schlüssel-Wert-Paare (Key-Value) für in der Regel sehr schnelle O(1) Suchzugriffe.",
        "tags": [
          "Algorithmen & Big O"
        ]
      },
      {
        "term": "Binary Search",
        "desc": "Suchalgorithmus auf sortierten Arrays, der das Suchfeld mit jedem Schritt halbiert (O(log n)).",
        "tags": [
          "Algorithmen & Big O"
        ]
      },
      {
        "term": "Bubble Sort",
        "desc": "Einfacher, ineffizienter Sortieralgorithmus (O(n^2)), bei dem benachbarte Elemente wiederholt getauscht werden.",
        "tags": [
          "Algorithmen & Big O"
        ]
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
        "desc": "Normalformen zur DB-Strukturierung.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "ACID",
        "desc": "Vier Grundregeln für sichere Transaktionen (Atomicity, Consistency, Isolation, Durability).",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "BASE",
        "desc": "NoSQL-Prinzip: Basically Available, Soft-State, Eventual Consistency.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "BCNF",
        "desc": "Boyce-Codd-Normalform – strengere Variante von 3NF.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "CAP Theorem",
        "desc": "Consistency, Availability, Partition Tolerance – nur 2 gleichzeitig möglich.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Caching",
        "desc": "Vorübergehendes Speichern häufiger Abfrageergebnisse im schnellen RAM.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Check Constraint",
        "desc": "Validiert Werte beim Schreiben.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Cluster",
        "desc": "Verbund mehrerer Datenbankserver für Lastverteilung.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Cursor",
        "desc": "Row-by-Row Verarbeitung von Daten.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Data Lake",
        "desc": "Rohdaten-Speicher ohne feste Struktur.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Data Warehouse",
        "desc": "Zentrale Speicherung historischer Geschäftsdaten.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Deadlock",
        "desc": "Zwei Transaktionen blockieren sich gegenseitig.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Denormalization",
        "desc": "Bewusste Redundanz für Performance.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Document Store",
        "desc": "NoSQL-Datenbanken, die JSON-ähnliche Dokumente speichern.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "ELT",
        "desc": "Extract – Load – Transform (Cloud-Optimiert).",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "ETL",
        "desc": "Extract – Transform – Load für Daten integration.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Eventual Consistency",
        "desc": "Daten werden zeitverzögert konsistent.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Failover",
        "desc": "Automatischer Wechsel zu Backup-Datenbank.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Foreign Key",
        "desc": "Beziehungsdefinition zwischen Tabellen.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Full Table Scan",
        "desc": "Komplette Tabelle muss gelesen werden.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Graph Database",
        "desc": "Datenbank, die Beziehungen als Erstklasse modelliert (z.B. Neo4j).",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Hard Delete",
        "desc": "Daten endgültig entfernen.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Hot Standby",
        "desc": "Passiver Server, der sofort übernehmen kann.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "In-Memory Database",
        "desc": "Datenbank, die primär im RAM läuft (z.B. Redis).",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Index",
        "desc": "Spezielle Datenstruktur zur massiven Beschleunigung von Suchabfragen.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Index Scan",
        "desc": "Lesen von Daten über Index.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Join",
        "desc": "Befehl zur logischen Verknüpfung von Daten aus mehreren Tabellen.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Key-Value Store",
        "desc": "Einfache NoSQL-Struktur mit Schlüssel → Wert.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Master-Master Replication",
        "desc": "Mehrere Knoten können lesen & schreiben.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Master-Slave Replication",
        "desc": "Primäre Schreibinstanz mit sekundären Leser-Einheiten.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Materialized View",
        "desc": "Gespeicherte, physische Ergebnisse einer Abfrage.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Migration",
        "desc": "Versionierte Skripte zur Änderung der Datenbankstruktur (Schema).",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Normalization",
        "desc": "Tabellenzerlegung zur Reduzierung von Redundanz.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "OLAP",
        "desc": "Analyseorientierte Datenbanken für Reporting.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "OLTP",
        "desc": "Operationales System für schnelle Schreiboperationen.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "ORM",
        "desc": "Mapper zwischen Objekten im Programmcode und Tabellen in der Datenbank.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Partition Key",
        "desc": "Schlüssel, der die Datenverteilung bestimmt.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Partitionierung",
        "desc": "Segmentierung großer Tabellen in handliche, logische Untereinheiten.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Primary Key",
        "desc": "Eindeutiger Identifikator einer Zeile.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Query Cache",
        "desc": "Zwischenspeichern fertiger Abfrageergebnisse.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Query Plan",
        "desc": "Optimierter Ausführungsplan einer Abfrage.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "RDBMS",
        "desc": "Relationales Datenbanksystem auf Basis von Tabellen.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Replication",
        "desc": "Kopieren von Daten über mehrere Server zur Ausfallsicherheit.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Row Lock",
        "desc": "Sperrt eine Zeile während Transaktionen.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Sharded Key Range",
        "desc": "Aufteilung anhand eines Schlüsselbereichs.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Sharding",
        "desc": "Horizontales Aufteilen einer Datenbank auf mehrere physische Server.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Soft Delete",
        "desc": "Markieren statt physisch löschen.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "SQL / NoSQL",
        "desc": "Strukturierte Abfragesprache für Tabellen vs. flexible Dokumente/Key-Values.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Stored Procedure",
        "desc": "Gespeicherte DB-Funktion mit Logik.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Strong Consistency",
        "desc": "Sofortige, synchrone Konsistenz.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Table Lock",
        "desc": "Sperrt eine komplette Tabelle.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Tablespace",
        "desc": "Physischer Speicherbereich für DB-Objekte.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Transaction Isolation Level",
        "desc": "Steuert parallele Lesekonflikte.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Trigger",
        "desc": "Automatische Ausführung bei DB-Ereignissen.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "TTL (Time to Live)",
        "desc": "Ablaufzeit für Datensätze.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Unique Constraint",
        "desc": "Wert darf nur einmal vorkommen.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Upsert",
        "desc": "Insert oder Update, je nach Existenz.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "View",
        "desc": "Dynamische, virtuelle Abfrage auf Tabellen.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Wide Column Store",
        "desc": "NoSQL-Systeme mit spaltenorientierten Familien (z.B. Cassandra).",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "Write-Ahead Logging (WAL)",
        "desc": "Änderungen zuerst ins Log, dann ins DB-File.",
        "tags": [
          "Datenbanken"
        ]
      },
      {
        "term": "NoSQL",
        "desc": "Datenbanken für unstrukturierte oder semi-strukturierte Daten (z.B. MongoDB, Redis).",
        "tags": [
          "Datenbanken"
        ]
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
        "desc": "Ruft Daten aus einer Datenbank ab.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "INSERT INTO",
        "desc": "Fügt neue Datensätze in eine Tabelle ein.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "UPDATE",
        "desc": "Aktualisiert bestehende Datensätze in einer Tabelle.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "DELETE",
        "desc": "Löscht Datensätze aus einer Tabelle.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "JOIN",
        "desc": "Verbindet Zeilen aus zwei oder mehr Tabellen basierend auf einer verknüpften Spalte.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "INNER JOIN",
        "desc": "Gibt Datensätze zurück, die in beiden verknüpften Tabellen übereinstimmen.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "LEFT JOIN",
        "desc": "Gibt alle Datensätze der linken Tabelle und die übereinstimmenden der rechten Tabelle zurück.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "RIGHT JOIN",
        "desc": "Gibt alle Datensätze der rechten Tabelle und die übereinstimmenden der linken Tabelle zurück.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "FULL OUTER JOIN",
        "desc": "Gibt alle Datensätze zurück, wenn es eine Übereinstimmung in der linken oder rechten Tabelle gibt.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "WHERE",
        "desc": "Filtert Datensätze, um nur diejenigen abzurufen, die eine bestimmte Bedingung erfüllen.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "GROUP BY",
        "desc": "Gruppiert Datensätze mit denselben Werten in Auswertungszeilen (z. B. mit COUNT, SUM).",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "HAVING",
        "desc": "Filtert Gruppen basierend auf einer Bedingung (ähnlich wie WHERE, aber für GROUP BY).",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "ORDER BY",
        "desc": "Sortiert die Ergebnismenge in aufsteigender oder absteigender Reihenfolge.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "LIMIT / TOP",
        "desc": "Begrenzt die Anzahl der zurückgegebenen Datensätze.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "DISTINCT",
        "desc": "Gibt nur unterschiedliche (einzigartige) Werte zurück.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "UNION",
        "desc": "Kombiniert die Ergebnismengen von zwei oder mehr SELECT-Anweisungen.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "IN",
        "desc": "Erlaubt die Angabe mehrerer Werte in einer WHERE-Klausel.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "BETWEEN",
        "desc": "Wählt Werte innerhalb eines bestimmten Bereichs aus.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "LIKE",
        "desc": "Sucht nach einem bestimmten Muster in einer Spalte (oft mit %-Wildcards).",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "IS NULL",
        "desc": "Prüft, ob ein Wert NULL (leer) ist.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "COUNT / SUM / AVG",
        "desc": "Aggregatfunktionen zum Zählen, Summieren oder Berechnen des Durchschnitts von Werten.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "COMMIT",
        "desc": "Speichert die aktuellen Transaktionen dauerhaft in der Datenbank.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "ROLLBACK",
        "desc": "Macht die aktuellen Transaktionen seit dem letzten COMMIT rückgängig.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "CREATE TABLE",
        "desc": "Erstellt eine neue Tabelle in der Datenbank.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "ALTER TABLE",
        "desc": "Ändert die Struktur einer bestehenden Tabelle.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "DROP TABLE",
        "desc": "Löscht eine komplette Tabelle und alle darin enthaltenen Daten.",
        "tags": [
          "SQL Befehle & Queries"
        ]
      },
      {
        "term": "TRUNCATE",
        "desc": "Löscht alle Datensätze in einer Tabelle schnell, ohne die Tabellenstruktur zu entfernen.",
        "tags": [
          "SQL Befehle & Queries"
        ]
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
        "desc": "Zugriffskontrolle basierend auf Attributen (Zeit, Ort, Gerät).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Access Token Theft",
        "desc": "Diebstahl von Sitzungsschlüsseln zur Identitätsübernahme.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Attack Surface",
        "desc": "Summe aller Angriffsvektoren eines Systems.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "AuthN / AuthZ",
        "desc": "Identitätsprüfung (Wer?) vs. Rechteprüfung (Was?).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Backdoor",
        "desc": "Heimlicher Systemzugang unter Umgehung der Sicherung.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Blue Team",
        "desc": "Defensive Experten zur Angriffsabwehr.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Botnet",
        "desc": "Netzwerk gekaperter Rechner für Massenangriffe (DDoS).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Brute Force",
        "desc": "Automatisches Durchprobieren aller Passwortkombinationen.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Certificate Pinning",
        "desc": "Erzwingt ein spezifisches SSL-Zertifikat gegen MITM-Angriffe.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "CSP",
        "desc": "Browser-Richtlinie gegen XSS und Data Injection.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "CSRF",
        "desc": "Befehlsausführung im Namen eines eingeloggten Nutzers.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "CVE / CVSS",
        "desc": "Standardliste für Schwachstellen / Bewertungsskala (0-10).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "DDoS",
        "desc": "Distributed Denial of Service – Überlastung eines Servers durch eine Vielzahl von Anfragen aus unterschiedlichen Quellen.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Dictionary Attack",
        "desc": "Angriff mittels Listen bekannter Passwörter.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "DLP",
        "desc": "Schutz vor unbefugtem Abfluss sensibler Daten.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Endpoint Protection",
        "desc": "Sicherheitssoftware direkt auf PCs und Mobilgeräten.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Exploit",
        "desc": "Code, der eine spezifische Sicherheitslücke ausnutzt.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Firewall",
        "desc": "Netzwerkfilter basierend auf IP- oder Port-Regeln.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Hardening",
        "desc": "Systemabsicherung durch Deaktivierung unnötiger Dienste.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Honeypot",
        "desc": "Lockvogel-System zur Analyse von Angreifern.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "IDS / IPS",
        "desc": "Angriffserkennung (Alarm) vs. Angriffsverhinderung (Block).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Input Validation",
        "desc": "Filterung eingehender Daten gegen Schadcode (Injection).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "JWT",
        "desc": "Signierter Datensatz zur Statusübertragung zwischen Servern.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "MAC",
        "desc": "Zentral gesteuerte, unumgehbare Zugriffskontrolle.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Malware",
        "desc": "Sammelbegriff für Viren, Trojaner und Spyware.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "MITM",
        "desc": "Angreifer fängt Kommunikation zwischen zwei Partnern ab.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "MTLS",
        "desc": "Gegenseitige Zertifikatsprüfung (Server und Client).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "OAuth2 / OIDC",
        "desc": "Protokolle für Datenzugriff (Scopes) und Identität (ID-Token).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Output Encoding",
        "desc": "Neutralisierung von Sonderzeichen vor der HTML-Ausgabe.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Password Salting",
        "desc": "Zufallswerte pro User gegen Rainbow-Table-Angriffe.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Penetration Test",
        "desc": "Autorisierter Hackerangriff zur Schwachstellensuche.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Peppering",
        "desc": "Globaler Geheimwert im Code zur Hash-Absicherung.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Phishing / Whaling",
        "desc": "Betrug per Mail (Allgemein vs. gezielt auf Führungsebene).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Privilege Escalation",
        "desc": "Unbefugtes Erweitern von Nutzerrechten (horizontal/vertikal).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Purple Team",
        "desc": "Zusammenarbeit von Angriff (Red) und Verteidigung (Blue).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Ransomware",
        "desc": "Verschlüsselungstrojaner mit Lösegeldforderung.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Rate Limiting",
        "desc": "Drosselung von Anfragen zum DoS-Schutz.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "RBAC",
        "desc": "Rechtevergabe basierend auf vordefinierten Rollen.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Red Team",
        "desc": "Offensive Experten simulieren reale Hackerangriffe.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Refresh Token Rotation",
        "desc": "Einmalige Nutzung von Refresh-Tokens zur Erhöhung der Sicherheit.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Replay Attack",
        "desc": "Wiederholung abgefangener, eigentlich gültiger Netzwerkdaten.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Rootkit",
        "desc": "Tarn-Malware, die tief im Betriebssystem nistet.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "SAST / DAST",
        "desc": "Code-Analyse (Statisch) vs. Laufzeit-Test (Dynamisch).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "SCA",
        "desc": "Prüfung von Drittanbieter-Libraries auf bekannte Lücken.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Session Hijacking",
        "desc": "Übernahme einer aktiven Websitzung (Cookie-Diebstahl).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "SIEM",
        "desc": "Zentrale Überwachung und Korrelation von Sicherheitslogs.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "SQL Injection",
        "desc": "Einschleusen von Datenbankbefehlen über Eingabefelder.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "SSO",
        "desc": "Zentrale Anmeldung für mehrere unabhängige Dienste.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Threat Modeling",
        "desc": "Systematische Analyse potenzieller Bedrohungsszenarien.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "TLS",
        "desc": "Verschlüsselungsstandard für Internetverbindungen (HTTPS).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "WAF",
        "desc": "Schutzwall speziell für Web-Traffic (Filtert XSS/SQLi).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "XSS (Cross-Site Scripting)",
        "desc": "Einschleusen von bösartigem JavaScript in eine vertrauenswürdige Website.",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
      },
      {
        "term": "Zero-Day",
        "desc": "Lücke ohne verfügbaren Patch (Tag Null der Entdeckung).",
        "tags": [
          "Sicherheit (Cyber-Security)"
        ]
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
        "desc": "Automatisches Hinzufügen oder Entfernen von Instanzen basierend auf der aktuellen Systemlast.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Backpressure",
        "desc": "Ein Mechanismus, der die Eingangsrate von Daten drosselt, wenn das verarbeitende System überlastet ist.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Bottleneck",
        "desc": "Ein Engpass in der Kette (z. B. CPU, RAM oder Disk-I/O), der die Gesamtgeschwindigkeit des Systems limitiert.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Bulkhead Pattern",
        "desc": "Abkapselung von Ressourcen (wie Schotten in einem Schiff), um zu verhindern, dass ein Fehler in einem Dienst das gesamte System mitreißt.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Cache Hit",
        "desc": "Ein erfolgreicher Zugriff auf den Cache – die Daten wurden sofort gefunden und geliefert.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Cache Miss",
        "desc": "Die angefragten Daten liegen nicht im Cache und müssen zeitaufwendig aus der Originalquelle (z. B. DB) geladen werden.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Cache Stampede",
        "desc": "Ein Ereignis, bei dem sehr viele Clients gleichzeitig dieselben (gerade abgelaufenen) Daten anfragen und so das Backend überlasten.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Cache Warming",
        "desc": "Das gezielte Befüllen des Caches mit wichtigen Daten vor der eigentlichen Nutzung, um Kaltstarts zu vermeiden.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Caching",
        "desc": "Das Vorhalten von häufig benötigten Ergebnissen in einem schnellen Zwischenspeicher (RAM).",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "CDN (Content Delivery Network)",
        "desc": "Ein geografisch verteiltes Netz von Servern, das statische Inhalte (Bilder, JS) vom nächstgelegenen Standort an den Nutzer liefert.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Circuit Breaker",
        "desc": "Ein Schutzschalter, der Anfragen an einen fehlerhaften Dienst sofort abbricht, um dem System Zeit zur Erholung zu geben.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Cold Start",
        "desc": "Die Verzögerung beim ersten Aufruf einer Serverless-Funktion, wenn die Laufzeitumgebung erst neu initialisiert werden muss.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Connection Pooling",
        "desc": "Die Wiederverwendung bestehender Datenbankverbindungen, statt für jede Anfrage eine teure neue Verbindung aufzubauen.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "CPU Bound",
        "desc": "Ein Prozess, dessen Geschwindigkeit primär durch die Rechenleistung des Prozessors begrenzt wird.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Degraded Mode",
        "desc": "Ein Zustand, in dem ein System trotz Fehlern weiterläuft, aber unwichtige Funktionen (z. B. Empfehlungen) abschaltet, um stabil zu bleiben.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Distributed Cache",
        "desc": "Ein Cache-System (z. B. Redis), das über mehrere Server hinweg geteilt wird und für alle Instanzen verfügbar ist.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Exponential Backoff",
        "desc": "Eine Strategie für Wiederholungsversuche (Retries), bei der die Wartezeit zwischen den Versuchen exponentiell ansteigt.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Failover Routing",
        "desc": "Das automatische Umleiten des Datenverkehrs auf ein Backup-System, falls der primäre Server ausfällt.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Head-of-Line Blocking",
        "desc": "Ein Zustand, in dem eine langsame oder hängende Anfrage alle nachfolgenden Anfragen in der Warteschlange blockiert.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Horizontal Scaling",
        "desc": "Erhöhung der Kapazität durch Hinzufügen weiterer Server/Instanzen (Scale Out).",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Hot Partition",
        "desc": "Ein Problem beim Sharding, bei dem ein einzelner Datenknoten unverhältnismäßig viel Last erhält (Schieflage).",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Hot Path",
        "desc": "Ein hochfrequentierter und performance-kritischer Teil des Quellcodes, der maximal optimiert werden muss.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "I/O Bound",
        "desc": "Ein Prozess, der die meiste Zeit auf Eingabe-/Ausgabe-Operationen (Netzwerk, Festplatte) wartet.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Jitter",
        "desc": "Das Hinzufügen von Zufallswerten zu Backoff-Zeiten, um zu verhindern, dass viele Clients nach einem Fehler exakt gleichzeitig einen Retry senden.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Latency (Latenz)",
        "desc": "Die zeitliche Verzögerung zwischen dem Absenden einer Anfrage und dem Erhalt der Antwort.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Latency Budget",
        "desc": "Die maximal erlaubte Zeitverzögerung, die für jeden einzelnen Verarbeitungsschritt in einer Kette vorgesehen ist.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Load Balancing Algorithm",
        "desc": "Strategien zur Lastverteilung (z. B. Round Robin, Least Connections oder IP-Hashing).",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Load Shedding",
        "desc": "Das bewusste Verwerfen von weniger wichtigen Anfragen, um den Kern des Systems vor dem Totalabsturz zu bewahren.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Memoization",
        "desc": "Eine Optimierungstechnik, bei der die Rückgabewerte teurer Funktionen für bestimmte Eingabeparameter im Speicher abgelegt werden.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "P99 Latency",
        "desc": "Eine Metrik, die besagt, dass 99 % aller Anfragen schneller als ein bestimmter Wert sind (wichtig für die Tail Latency).",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Prefetching",
        "desc": "Das proaktive Laden von Daten in den Speicher, kurz bevor die Anwendung sie voraussichtlich anfordern wird.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Preloading",
        "desc": "Das explizite Laden von kritischen Ressourcen beim Start der Anwendung, um spätere Ruckler zu vermeiden.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "QoS (Quality of Service)",
        "desc": "Die Priorisierung bestimmter Datenpakete oder Nutzergruppen gegenüber anderen, um wichtige Dienste bevorzugt zu behandeln.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Queue Depth",
        "desc": "Die Anzahl der aktuell in einer Warteschlange befindlichen Aufgaben, die noch nicht verarbeitet wurden.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Rate Limiting",
        "desc": "Die Begrenzung der maximal erlaubten Anfragen pro Nutzer oder Zeitfenster zum Schutz der Infrastruktur.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Read Replica",
        "desc": "Eine Kopie der Hauptdatenbank, die ausschließlich für Leseanfragen genutzt wird, um den Hauptknoten zu entlasten.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Resource Throttling",
        "desc": "Die künstliche Begrenzung von Ressourcen (CPU, RAM, Bandbreite) für bestimmte Prozesse oder Nutzer.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Retry Policy",
        "desc": "Regelsatz, der festlegt, wann und wie oft eine fehlgeschlagene Operation automatisch wiederholt wird.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Sharding",
        "desc": "Die horizontale Partitionierung von Datenbanken, bei der Daten über viele eigenständige Server verteilt werden.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "SLA (Service Level Agreement)",
        "desc": "Ein Vertrag zwischen Anbieter und Kunde, der die garantierte Verfügbarkeit und Leistung rechtlich festlegt.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "SLI (Service Level Indicator)",
        "desc": "Eine konkrete Messgröße (z. B. Latenz in ms), die zur Überprüfung der Systemleistung genutzt wird.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "SLO (Service Level Objective)",
        "desc": "Das interne Ziel für einen SLI (z. B. \"99,9 % aller Requests müssen unter 200 ms liegen\").",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Tail Latency",
        "desc": "Die Antwortzeit für das langsamste Perzentil der Nutzer (z. B. P99 oder P99.9), oft verursacht durch Garbage Collection oder Netzstörungen.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Thread Pool",
        "desc": "Eine Sammlung von im Voraus erstellten Threads, die bereitstehen, um Aufgaben effizient ohne Erzeugungskosten abzuarbeiten.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Throttling",
        "desc": "Die absichtliche Verlangsamung eines Prozesses (z. B. Datenrate), um das System stabil zu halten oder Kosten zu begrenzen.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Throughput (Durchsatz)",
        "desc": "Die Menge an erfolgreich verarbeiteten Einheiten (z. B. Anfragen oder MB) pro Zeiteinheit.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Throughput Degradation",
        "desc": "Ein Leistungsabfall, bei dem das System trotz steigender Last immer weniger Anfragen erfolgreich abschließt.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Throughput Scaling",
        "desc": "Die gezielte Erhöhung der Hardware-Ressourcen, um eine höhere Anzahl paralleler Anfragen zu bewältigen.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Vertical Scaling",
        "desc": "Erhöhung der Leistung durch Aufrüstung der Hardware einer einzelnen Maschine (mehr CPU/RAM) (Scale Up).",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Warm Cache Ratio",
        "desc": "Der Prozentsatz der Anfragen, die direkt aus einem bereits \"warmen\" Cache bedient werden konnten.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Warm Start",
        "desc": "Ein schneller Start einer Serverless-Funktion, da eine bereits initialisierte Instanz im Speicher verfügbar ist.",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Write Back Cache",
        "desc": "Schreibzugriffe erfolgen zuerst in den Cache und werden erst später gesammelt in die Datenbank geschrieben (sehr schnell).",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Write Through Cache",
        "desc": "Schreibzugriffe erfolgen gleichzeitig in den Cache und in die Datenbank (höhere Datensicherheit).",
        "tags": [
          "Performance & Skalierung"
        ]
      },
      {
        "term": "Load Balancing",
        "desc": "Verteilung von Netzwerk- oder Anwendungsverkehr auf mehrere Server.",
        "tags": [
          "Performance & Skalierung"
        ]
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
        "desc": "Regeln, welche Pods zusammen (oder getrennt) auf Nodes laufen.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Auto Scaling",
        "desc": "Automatische Anpassung von Ressourcen basierend auf der Last.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Bicep / Terraform",
        "desc": "IaC-Tools zur deklarativen Infrastruktur-Steuerung (Azure vs. Multi-Cloud).",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Block / BLOB Storage",
        "desc": "Festplatten-Ersatz für VMs vs. günstiger Objektspeicher für Dateien.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Blue-Green Deployment",
        "desc": "Zwei identische Umgebungen für risikofreie Versionswechsel.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Canary Deployment",
        "desc": "Schrittweise Auslieferung neuer Versionen an kleine Nutzergruppen.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Cloud Native",
        "desc": "Software-Design, das gezielt Cloud-Vorteile (Skalierung, Resilienz) nutzt.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Cluster Autoscaler",
        "desc": "Passt die Anzahl der physischen Nodes im K8s-Cluster an.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "ConfigMap / Secrets",
        "desc": "Konfigurationsdaten für Pods (Unkritisch vs. Verschlüsselt).",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Container",
        "desc": "Isolierte, leichtgewichtige Laufzeitumgebung für Anwendungen.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Container Registry",
        "desc": "Zentrales Repository zum Speichern von Container-Images.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "DaemonSet",
        "desc": "Garantiert, dass ein bestimmter Pod auf jedem Node des Clusters läuft.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Declarative Configuration",
        "desc": "Beschreibung des Zielzustands statt einzelner Befehle.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Docker & Image",
        "desc": "Plattform für Container und deren statische Baupläne (Abbilder).",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Edge / Fog Computing",
        "desc": "Datenverarbeitung nahe der Quelle vs. verteilte Zwischenschicht.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "FaaS / Serverless",
        "desc": "Ereignisgesteuerte Funktionsausführung ohne Server-Verwaltung.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Health Probe",
        "desc": "Automatischer Check, ob ein Container noch lebt oder bereit ist.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Helm / Chart",
        "desc": "Paketmanager für Kubernetes inkl. fertiger Deployment-Vorlagen.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Horizontal Scaling",
        "desc": "Leistungssteigerung durch Hinzufügen weiterer Instanzen.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Hybrid / Multi-Cloud",
        "desc": "Mix aus On-Premise/Cloud vs. Nutzung mehrerer Cloud-Anbieter.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "IaaS / PaaS / SaaS",
        "desc": "Ebenen der Cloud-Dienste: Infrastruktur, Plattform oder fertige Software.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "IaC (Infrastructure as Code)",
        "desc": "Infrastruktur-Verwaltung durch versionierbaren Programmiercode.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Immutable Infrastructure",
        "desc": "Server werden bei Änderungen ersetzt, niemals im Betrieb modifiziert.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Infrastructure Drift",
        "desc": "Abweichung zwischen realer Infrastruktur und IaC-Konfiguration.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Ingress Controller",
        "desc": "Verwaltet den externen Zugriff (Routing/SSL) auf Cluster-Services.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Init / Sidecar Container",
        "desc": "Hilfs-Container für Setup-Tasks vs. begleitende Logging/Proxy-Dienste.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Job / CronJob",
        "desc": "Einmalige vs. zeitgesteuerte Aufgaben im Kubernetes-Cluster.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Kubelet",
        "desc": "Der Agent, der auf jedem Node die Container-Ausführung steuert.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Kubernetes (K8s)",
        "desc": "De-facto Standard zur Orchestrierung großer Container-Landschaften.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Load Balancer",
        "desc": "Gleichmäßige Verteilung des Traffics auf mehrere Instanzen.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Node",
        "desc": "Ein einzelner Server (virtuell oder physisch) innerhalb eines Clusters.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Persistent Volume",
        "desc": "Dauerhafter Speicherplatz, der Container-Neustarts überlebt.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Pod & Deployment",
        "desc": "Kleinste K8s-Einheit vs. Strategie für deren Auslieferung.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Pod Eviction",
        "desc": "Erzwungenes Entfernen eines Pods (z.B. bei Ressourcenmangel).",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Rollback / Rolling Update",
        "desc": "Rückkehr zur Vorversion vs. schrittweise Aktualisierung im Betrieb.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Service Account",
        "desc": "Digitale Identität für Anwendungen innerhalb von Kubernetes.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Service Mesh",
        "desc": "Infrastruktur-Layer für sichere Kommunikation zwischen Microservices.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "StatefulSet",
        "desc": "Verwaltet Pods, die eine feste Identität oder festen Speicher benötigen.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "Vertical Scaling",
        "desc": "Leistungssteigerung durch Aufrüsten einer bestehenden Maschine.",
        "tags": [
          "Cloud & Container"
        ]
      },
      {
        "term": "VM (Virtuelle Maschine)",
        "desc": "Vollständige Hardware-Emulation inklusive eigenem Betriebssystem.",
        "tags": [
          "Cloud & Container"
        ]
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
        "desc": "Erstellt ein neues Docker-Image aus einem Dockerfile im aktuellen Verzeichnis.",
        "tags": [
          "Docker Befehle"
        ]
      },
      {
        "term": "docker exec -it [ID] /bin/bash",
        "desc": "Öffnet ein Terminal direkt im laufenden Container.",
        "tags": [
          "Docker Befehle"
        ]
      },
      {
        "term": "docker images",
        "desc": "Anzeigen aller lokal gespeicherten Images.",
        "tags": [
          "Docker Befehle"
        ]
      },
      {
        "term": "docker logs -f [ID]",
        "desc": "Live-Verfolgung der Log-Ausgaben eines Containers.",
        "tags": [
          "Docker Befehle"
        ]
      },
      {
        "term": "docker ps",
        "desc": "Listet alle aktuell laufenden Container auf.",
        "tags": [
          "Docker Befehle"
        ]
      },
      {
        "term": "docker pull [image]",
        "desc": "Lädt ein Image aus einer Registry (z. B. Docker Hub) herunter.",
        "tags": [
          "Docker Befehle"
        ]
      },
      {
        "term": "docker push [image]",
        "desc": "Lädt ein lokales Image in eine Registry hoch.",
        "tags": [
          "Docker Befehle"
        ]
      },
      {
        "term": "docker rm [container]",
        "desc": "Löscht einen gestoppten Container.",
        "tags": [
          "Docker Befehle"
        ]
      },
      {
        "term": "docker rmi [image]",
        "desc": "Löscht ein lokales Docker-Image.",
        "tags": [
          "Docker Befehle"
        ]
      },
      {
        "term": "docker system prune",
        "desc": "Löscht alle ungenutzten Daten (Images, Container, Netzwerke).",
        "tags": [
          "Docker Befehle"
        ]
      },
      {
        "term": "docker-compose up -d",
        "desc": "Startet die gesamte Umgebung im Hintergrund (Detached).",
        "tags": [
          "Docker Befehle"
        ]
      },
      {
        "term": "docker compose",
        "desc": "Werkzeug zur Definition und Ausführung von Multi-Container-Docker-Anwendungen.",
        "tags": [
          "Docker Befehle"
        ]
      },
      {
        "term": "docker exec -it",
        "desc": "Führt einen Befehl (oft eine interaktive Shell) in einem laufenden Container aus.",
        "tags": [
          "Docker Befehle"
        ]
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
        "desc": "Zeigt für jede Codezeile an, welcher Autor sie wann zuletzt geändert hat.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Branch",
        "desc": "Ein isolierter, paralleler Entwicklungszweig für Features oder Bugfixes.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Cherry-Pick",
        "desc": "Einen ganz gezielten, einzelnen Commit aus einem anderen Branch übernehmen.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Commit",
        "desc": "Ein gespeicherter Schnappschuss (Snapshot) von Code-Änderungen inkl. Nachricht.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Conflict",
        "desc": "Tritt auf, wenn zwei Personen dieselbe Zeile unterschiedlich geändert haben (Merge-Konflikt).",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Detached HEAD",
        "desc": "Zustand, in dem kein Branch ausgewählt ist, sondern direkt auf einem Commit gearbeitet wird.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Fast-Forward",
        "desc": "Ein Merge, bei dem der Branch-Zeiger einfach auf den neuesten Commit verschoben wird.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Fetch",
        "desc": "Ruft Informationen über Änderungen vom Server ab, ohne sie lokal zusammenzuführen.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Fork",
        "desc": "Eine vollständige Kopie eines Repositories auf dem Server (oft für Open Source Beiträge).",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Git Flow",
        "desc": "Ein Branching-Modell, das Branches für Features, Releases und Hotfixes strikt trennt.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Git Hooks",
        "desc": "Skripte, die automatisch bei Ereignissen (z. B. vor einem Commit) ausgeführt werden.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Merge",
        "desc": "Das Zusammenführen von Änderungen aus verschiedenen Zweigen zu einem gemeinsamen Stand.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Origin / Upstream",
        "desc": "Standardname für den Hauptserver (Remote) vs. das Original-Repo bei einem Fork.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Pull",
        "desc": "Kombination aus Fetch und Merge: Änderungen laden und sofort lokal einspielen.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Pull Request (PR)",
        "desc": "Förmlicher Vorschlag, Code-Änderungen zu prüfen und in einen Hauptzweig zu mergen.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Push",
        "desc": "Lokale Commits auf den entfernten Server (Remote) hochladen.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Rebase",
        "desc": "Die Basis eines Branches auf einen neuen Startpunkt setzen, um eine lineare Historie zu erhalten.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Repository",
        "desc": "Das gesamte Projektverzeichnis inklusive der kompletten Versionshistorie.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Reset",
        "desc": "Macht Commits rückgängig, wahlweise durch Löschen oder Beibehalten der Änderungen im Arbeitsverzeichnis.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Revert",
        "desc": "Erstellt einen neuen Commit, der die Änderungen eines vorherigen Commits umkehrt.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Squash",
        "desc": "Mehrere kleine Commits zu einem einzigen, sauberen Commit zusammenfassen.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Stash",
        "desc": "Aktuelle, unfertige Änderungen kurzzeitig in einen Zwischenspeicher (\"Parkplatz\") legen.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "Tag",
        "desc": "Ein fester, benannter Marker in der Historie, meist zur Kennzeichnung von Release-Versionen.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "git stash",
        "desc": "Speichert unvollendete Änderungen temporär ab, um ein sauberes Arbeitsverzeichnis zu erhalten.",
        "tags": [
          "Git & Versionskontrolle"
        ]
      },
      {
        "term": "git rebase",
        "desc": "Integriert Änderungen aus einem Branch in einen anderen, schreibt aber die Commit-Historie neu (linear).",
        "tags": [
          "Git & Versionskontrolle"
        ]
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
        "desc": "Strukturierung von Tests in Arrange (Vorbereitung), Act (Ausführung) und Assert (Prüfung).",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Assertion",
        "desc": "Die erwartete Bedingung in einem Test; schlägt der Vergleich fehl, scheitert der Test.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "BDD",
        "desc": "Behavior Driven Development: Test-Schreibweise aus Nutzersicht (Given/When/Then).",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Breakpoint",
        "desc": "Manueller Haltepunkt im Code, um Variablen und Programmfluss live zu untersuchen.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Coverage",
        "desc": "Testabdeckung: Prozentsatz des Quellcodes, der durch automatisierte Tests ausgeführt wurde.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "E2E Test",
        "desc": "End-to-End Test: Prüft einen kompletten Geschäftsprozess vom Start bis zum Ziel.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Fake",
        "desc": "Eine einfache, funktionale Implementierung (z.B. In-Memory-DB statt echter Datenbank).",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Flaky Test",
        "desc": "Ein unzuverlässiger Test, der bei gleichem Code mal besteht und mal fehlschlägt.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Fuzzer",
        "desc": "Automatisierter Test, der ein Programm mit massenhaft Zufallsdaten flutet, um Abstürze zu finden.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Hot Reload",
        "desc": "Sofortige Übernahme von Code-Änderungen in die laufende App ohne kompletten Neustart.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Integration Test",
        "desc": "Überprüft das korrekte Zusammenspiel zwischen zwei oder mehr Modulen oder Systemen.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Mock",
        "desc": "Ein simulierter Ersatz für Abhängigkeiten, der Erwartungen über Aufrufe prüfen kann.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Mutation Testing",
        "desc": "Verändert den Code minimal, um zu prüfen, ob die vorhandenen Tests diesen Fehler finden.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Profiling",
        "desc": "Analyse der Laufzeit und des Speicherverbrauchs, um Performance-Engpässe zu finden.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Regression Test",
        "desc": "Wiederholter Test nach Änderungen, um sicherzustellen, dass alte Funktionen noch arbeiten.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Smoke Test",
        "desc": "Ein schneller Oberflächentest, um zu prüfen, ob die Basis-Funktionen überhaupt starten.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Snapshot Test",
        "desc": "Vergleicht die aktuelle UI oder Datenstruktur mit einem gespeicherten \"Soll-Zustand\".",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Stub",
        "desc": "Ein minimaler Platzhalter, der auf Aufrufe lediglich mit festen Werten antwortet.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "TDD",
        "desc": "Test Driven Development: Der Test wird vor dem eigentlichen Funktionscode geschrieben.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Unit Test",
        "desc": "Automatisierter Test der kleinstmöglichen Einheit (z. B. einer einzelnen Methode).",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Watch",
        "desc": "Überwachungstool im Debugger, das den Wert bestimmter Variablen permanent anzeigt.",
        "tags": [
          "Debugging & Tests"
        ]
      },
      {
        "term": "Mocking",
        "desc": "Das Simulieren des Verhaltens echter Objekte in Unit-Tests (z.B. Datenbank-Verbindungen).",
        "tags": [
          "Debugging & Tests"
        ]
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
        "desc": "Referenzmodell für Netzwerkprotokolle in 7 Schichten (Physical, Data Link, Network, Transport, Session, Presentation, Application).",
        "tags": [
          "Network Basics"
        ]
      },
      {
        "term": "TCP/IP",
        "desc": "Protokollfamilie, die das Internet antreibt. TCP sorgt für zuverlässigen Datenstrom, IP für das Routing der Pakete.",
        "tags": [
          "Network Basics"
        ]
      },
      {
        "term": "DNS (Domain Name System)",
        "desc": "Übersetzt für Menschen lesbare Domainnamen (z.B. google.com) in IP-Adressen (wie ein Telefonbuch).",
        "tags": [
          "Network Basics"
        ]
      },
      {
        "term": "DHCP",
        "desc": "Dynamic Host Configuration Protocol: Weist Geräten in einem Netzwerk automatisch IP-Adressen zu.",
        "tags": [
          "Network Basics"
        ]
      },
      {
        "term": "Subnetting",
        "desc": "Unterteilen eines großen Netzwerks in mehrere kleinere Netzwerke zur besseren Organisation und Performance.",
        "tags": [
          "Network Basics"
        ]
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
        "onclick": "openPDF('Analyseprofile_für_Netzwerk-Paketanalysatoren.pdf')",
        "tags": [
          "Wireshark & Netzwerkanalyse"
        ]
      },
      {
        "term": "Netzwerk-Analyse-Filter",
        "desc": "Der Guide für effiziente Filter in der Netzwerkanalyse.",
        "onclick": "openPDF('Guide_für_Netzwerk-Analyse-Filter.pdf')",
        "tags": [
          "Wireshark & Netzwerkanalyse"
        ]
      },
      {
        "term": "IPv4-Header Troubleshooting",
        "desc": "Detaillierter Guide zur Fehlersuche anhand des IPv4-Headers.",
        "onclick": "openPDF('IPv4-Header_Troubleshooting-Guide.pdf')",
        "tags": [
          "Wireshark & Netzwerkanalyse"
        ]
      },
      {
        "term": "Logik-Check Negations-Filter",
        "desc": "Vermeidung von Fehlern bei Negations-Filtern.",
        "onclick": "openPDF('Logik-Check_bei_Negations-Filtern.pdf')",
        "tags": [
          "Wireshark & Netzwerkanalyse"
        ]
      },
      {
        "term": "Namensauflösung",
        "desc": "Erklärung der Namensauflösung in der Netzwerkanalyse.",
        "onclick": "openPDF('Namensauflösung_in_der_Netzwerkanalyse.pdf')",
        "tags": [
          "Wireshark & Netzwerkanalyse"
        ]
      },
      {
        "term": "Filter: Erfassung vs. Anzeige",
        "desc": "Unterschiede und Guide: Capture- vs. Display-Filter.",
        "onclick": "openPDF('Netzwerk-Filter-Guide__Erfassung_vs._Anzeige.pdf')",
        "tags": [
          "Wireshark & Netzwerkanalyse"
        ]
      },
      {
        "term": "Netzwerk-Forensik",
        "desc": "Angriffe mit Display-Filtern entlarven.",
        "onclick": "openPDF('Netzwerk-Forensik__Angriffe_mit_Display-Filtern_entlarven.pdf')",
        "tags": [
          "Wireshark & Netzwerkanalyse"
        ]
      },
      {
        "term": "Basiswissen Netzwerkanalyse",
        "desc": "Der ultimative Guide für den Einstieg in die Netzwerkanalyse.",
        "onclick": "openPDF('Netzwerkanalyse-Basiswissen__Der_ultimative_Guide.pdf')",
        "tags": [
          "Wireshark & Netzwerkanalyse"
        ]
      },
      {
        "term": "TCP-Fehlersuche",
        "desc": "Systematische Fehlersuche auf Basis des TCP-Protokolls.",
        "onclick": "openPDF('TCP-Fehlersuche_in_der_Netzwerkanalyse.pdf')",
        "tags": [
          "Wireshark & Netzwerkanalyse"
        ]
      },
      {
        "term": "Latenz-Diagnose",
        "desc": "Visuelle Netzwerkanalyse und Diagnose von Latenzen.",
        "onclick": "openPDF('Visuelle_Netzwerkanalyse_und_Latenz-Diagnose.pdf')",
        "tags": [
          "Wireshark & Netzwerkanalyse"
        ]
      },
      {
        "term": "Automatisierte Werkzeuge",
        "desc": "Übersicht über Werkzeuge für die automatisierte Netzwerk-Analyse.",
        "onclick": "openPDF('Werkzeuge_für_automatisierte_Netzwerk-Analyse.pdf')",
        "tags": [
          "Wireshark & Netzwerkanalyse"
        ]
      },
      {
        "term": "Top Erfassungsfilter (Capture)",
        "desc": "host x.x.x.x (Traffic für IP), net 192.168.1.0/24 (Subnetz), port 80 (nur Port 80), not arp (ARP ausblenden), tcp portrange 1500-1599.",
        "tags": [
          "Wireshark & Netzwerkanalyse"
        ]
      },
      {
        "term": "Top Anzeigefilter (Display)",
        "desc": "ip.addr==x.x.x.x (IP Traffic), tcp.port==443 (HTTPS), http.request.method==GET, dns.qry.name contains \"google\", tcp.analysis.flags (Probleme).",
        "tags": [
          "Wireshark & Netzwerkanalyse"
        ]
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
        "desc": "Pixelgenaue Positionssteuerung von UI-Elementen.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "App Icon Management",
        "desc": "Plattformübergreifende Verwaltung von Icons.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "App Lifecycle",
        "desc": "Ereignisse beim Wechsel von Vordergrund ↔ Hintergrund.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Behaviors",
        "desc": "Wiederverwendbare UI-Logik an Controls anhängen.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "BindableProperty",
        "desc": "Eigenschaft, die für XAML-Datenbindung verwendet wird.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Blazor Hybrid",
        "desc": "Web-Komponenten (Razor) direkt in MAUI-Apps verwenden.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "CarouselView",
        "desc": "Swipebare Ansicht für mehrere Seiten oder Bilder.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "CollectionView",
        "desc": "Liste mit hoher Performance und Template-Unterstützung.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Command",
        "desc": "Bindbare UI-Aktion ohne Code-Behind.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "ContentPage",
        "desc": "Standard-Page für einzelne Screens.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "ContentView",
        "desc": "Wiederverwendbares UI-Element zur Code-Strukturierung.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Cross-Platform APIs",
        "desc": "Gemeinsame APIs wie GPS, Kamera, Speicherzugriff.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "DataTemplate Selector",
        "desc": "Dynamische Auswahl verschiedener UI-Templates.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Deep Linking",
        "desc": "Startet App direkt auf bestimmter Seite/Parametern.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Dependency Injection",
        "desc": "Native .NET-DI direkt in MAUI integriert.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "DependencyService",
        "desc": "MAUI-eigener Service zum Aufruf plattformspezifischer Funktionen.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Effects",
        "desc": "Plattformabhängige UI-Effekte erweitern Steuerelemente.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Essentials API",
        "desc": "Sammlung von Gerätefunktionen wie Batterie, Sensoren, Standort.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "FlexLayout",
        "desc": "Flexibles Layout ähnlich CSS Flexbox.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "FontImageSource",
        "desc": "Icons aus Font-Dateien direkt in Buttons/Labels.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Gesture Binding",
        "desc": "Touchgesten an Commands binden.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Gesture Recognizer",
        "desc": "Steuerung von Touch-Gesten (Tap, Swipe, Pinch).",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Grid Layout",
        "desc": "Strukturiertes Container-Layout mit Zeilen/Spalten.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Handlers",
        "desc": "Ersetzen Renderer und steuern die Verbindung zwischen MAUI-Kontrolle und nativen UI-Elementen.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Horizontal Stack Layout",
        "desc": "Horizontales Anordnen von Elementen.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Hot Restart",
        "desc": "Rapid Development → Änderungen ohne kompletten Rebuild testen.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Hybrid WebView",
        "desc": "Kombiniert HTML/JS mit nativen Funktionen.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "INotifyPropertyChanged",
        "desc": "Benachrichtigt UI über Datenänderungen im ViewModel.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "MasterDetailPage (Legacy)",
        "desc": "Früheres Seitenlayout mit Menü + Inhalt.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Maui Program",
        "desc": "Startup-Konfiguration wie DI, Fonts, Handler.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "MAUI",
        "desc": "Multi-platform App UI: Framework für Cross-Platform .NET Apps.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Modal Navigation",
        "desc": "Seiten als „Popup“ über anderen anzeigen.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "MVVM",
        "desc": "Architekturansatz: Model‑View‑ViewModel",
        "onclick": "openPDF('MVVM.pdf')",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Native Embedding",
        "desc": "Native Android/iOS Views in MAUI einbetten.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "NavigationPage",
        "desc": "Klassisches Stack-Navigationsmodell.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "ObservableCollection",
        "desc": "Dynamische Liste, die Änderungen an die UI meldet.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Permissions",
        "desc": "Systemzugriffsrechte wie Kamera, Standort, Mikrofon.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Platform Render Override",
        "desc": "Plattformspezifisches Custom Rendering.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Platform-Specifics",
        "desc": "MAUI-APIs für gerätespezifische Implementierungen.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Preferences",
        "desc": "Key-Value Speicher für App-Einstellungen.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Relative Layout",
        "desc": "Elementpositionierung relativ zu anderen Elementen.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Renderer (Legacy)",
        "desc": "Älteres Xamarin-UI-Modell, ersetzt durch MAUI-Handler.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Responsive Layout",
        "desc": "UI passt sich verschiedenen Auflösungen an.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Secure Storage",
        "desc": "Verschlüsselter Speicher für sensible Daten.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Shell Appearance",
        "desc": "Globale Styling-Optionen für Titel, Farben, Navbar.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Shell Flyout",
        "desc": "Seitliches Navigationsmenü für komplexe Apps.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Shell Navigation",
        "desc": "Modernes Navigationsmodell in MAUI für klare URI-basierte Navigation.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Shell Routing",
        "desc": "Ermöglicht URL-basierte Seitenaufrufe im MAUI-Shell-System.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Shell Tabbar",
        "desc": "Tab-Navigation für mobile Anwendungen.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Splash Screen",
        "desc": "Startbild der App vor dem ersten Rendern.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "TabbedPage",
        "desc": "Seite mit Tabs für mobile Multi-Ansichten.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Triggers",
        "desc": "UI-Veränderungen basierend auf Bedingungen.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Two-Pane Layout",
        "desc": "Optimiertes Design für Dual-Screen oder Sidebar-Strukturen.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Vertical Stack Layout",
        "desc": "Vertikales Stapeln von UI-Elementen.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "View",
        "desc": "UI‑Schicht. Enthält XAML und ausschließlich Darstellung.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "ViewFactory",
        "desc": "Mechanismus zum dynamischen Erstellen von Views + ViewModels. Perfekt für Desktop‑Layouts.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "ViewModel",
        "desc": "Logik‑Schicht der UI. Bereitstellung von Commands, State, Bindings.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "Visual State Manager",
        "desc": "UI-Zustände definieren (z.B. focused, disabled).",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "WinUI 3",
        "desc": "Windows‑Runtime‑UI‑System, Basis für MAUI Windows‑Apps.",
        "tags": [
          "MAUI & Mobile"
        ]
      },
      {
        "term": "XAML",
        "desc": "Extensible Application Markup Language für das UI-Design.",
        "tags": [
          "MAUI & Mobile"
        ]
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
        "desc": "Hoch effizientes Archivformat.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "APK",
        "desc": "Android App Installer.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "AVI",
        "desc": "Älteres Videoformat ohne moderne Codecs.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "BAT",
        "desc": "Windows-Batch Skript.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "BIN",
        "desc": "Binärdaten ohne festes Format.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "CER",
        "desc": "Zertifikatsformat für Trust Stores.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "CRT",
        "desc": "Zertifikatsdatei (Public Key).",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "CSV",
        "desc": "Zeilenbasierte, kommagetrennte Daten.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "CSS",
        "desc": "Stylesheet für visuelle Gestaltung.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "DLL",
        "desc": "Dynamische Bibliothek (Windows).",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "DOCX",
        "desc": "Microsoft Word Dokument.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "EXE",
        "desc": "Windows ausführbare Datei.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "FLAC",
        "desc": "Lossless Audioformat.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "GIF",
        "desc": "Animiertes / statisches Bildformat.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "GZ",
        "desc": "Gzip-Komprimierung.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "HTML",
        "desc": "Markup-Sprache für Webseiten.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "IMG",
        "desc": "Rohes Datenträgerabbild.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "INI",
        "desc": "Einfaches Konfigurationsformat mit Sektionen.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "IPA",
        "desc": "iOS App Installer (Apple).",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "ISO",
        "desc": "Image einer CD/DVD.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "JPG / JPEG",
        "desc": "Komprimiertes Bildformat.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "JS",
        "desc": "JavaScript-Datei mit Code.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "JSON",
        "desc": "Strukturiertes Textformat für Daten (JavaScript Object Notation).",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "JSONL",
        "desc": "Zeilenbasierte JSON‑Einträge.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "KEY",
        "desc": "Privater Verschlüsselungsschlüssel.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "LOG",
        "desc": "Textdatei für System- oder Anwendungslogs.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "MD (Markdown)",
        "desc": "Leichtes Textformat mit Strukturierungssyntax.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "MKV",
        "desc": "Flexibles Containerformat für Videos.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "MOV",
        "desc": "Apple QuickTime Videoformat.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "MP3",
        "desc": "Audioformat mit Verlustkompression.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "MP4",
        "desc": "Videoformat mit H.264/H.265 Codec.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "ODS",
        "desc": "OpenDocument Tabellenformat.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "ODT",
        "desc": "OpenDocument Textformat.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "P12 / PFX",
        "desc": "Zertifikatscontainer inkl. Private Key.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "PDF",
        "desc": "Portables Dokumentformat.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "PNG",
        "desc": "Bildformat mit Transparenz.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "PPTX",
        "desc": "PowerPoint Präsentation.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "PS1",
        "desc": "PowerShell-Skript.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "RAR",
        "desc": "Proprietäres Archivformat.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "RAW",
        "desc": "Unkomprimierte Bildrohdaten.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "SH",
        "desc": "Bash-Shellskript.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "SO",
        "desc": "Shared Library unter Linux.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "SVG",
        "desc": "Vektor-Grafikformat.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "TAR",
        "desc": "Archivformat, häufig unter Linux.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "TOML",
        "desc": "Modernes, klar strukturiertes Config-Format.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "TS",
        "desc": "TypeScript – typisiertes JavaScript.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "TSV",
        "desc": "Tabulatorgetrennte Tabelle.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "TXT",
        "desc": "Reine Textdatei ohne Formatierung.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "WAV",
        "desc": "Unkomprimiertes Audioformat.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "WEBP",
        "desc": "Moderne Bildkompression.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "XLSX",
        "desc": "Excel Arbeitsmappe.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "XML",
        "desc": "Hierarchisches Datenformat mit Tags.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "YAML",
        "desc": "Lesbares Konfigurationsformat mit Einrückungen.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "YML",
        "desc": "Alternative Schreibweise für YAML.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "ZIP",
        "desc": "Komprimiertes Archiv.",
        "tags": [
          "Dateitypen & Formate"
        ]
      },
      {
        "term": "Markdown",
        "desc": "Eine leichtgewichtige Auszeichnungssprache, um Text einfach zu formatieren (z.B. für READMEs).",
        "tags": [
          "Dateitypen & Formate"
        ]
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
        "desc": "<b>Win + E:</b> Explorer öffnen<br/>\n<b>Win + D:</b> Desktop anzeigen/verstecken<br/>\n<b>Win + L:</b> PC sperren<br/>\n<b>Win + Tab:</b> Task-Ansicht öffnen<br/>\n<b>Alt + Tab:</b> Zwischen Fenstern wechseln<br/>\n<b>Win + I:</b> Windows-Einstellungen öffnen",
        "tags": [
          "Windows System Shortcuts"
        ]
      },
      {
        "term": "Fenster-Anordnung",
        "desc": "<b>Win + ↑:</b> Fenster maximieren<br/>\n<b>Win + ↓:</b> Fenster minimieren/verkleinern<br/>\n<b>Win + ← / →:</b> Fenster links/rechts andocken<br/>\n<b>Win + Shift + ← / →:</b> Fenster auf anderen Monitor verschieben<br/>\n<b>Win + M:</b> Alle Fenster minimieren",
        "tags": [
          "Windows System Shortcuts"
        ]
      },
      {
        "term": "Nützliche Werkzeuge",
        "desc": "<b>Win + Shift + S:</b> Screenshot-Tool (Snipping)<br/>\n<b>Win + V:</b> Zwischenablage-Verlauf (Clipboard)<br/>\n<b>Win + . (Punkt):</b> Emoji-Panel öffnen<br/>\n<b>Strg + Shift + Esc:</b> Task-Manager direkt öffnen<br/>\n<b>Win + R:</b> Ausführen-Dialog öffnen",
        "tags": [
          "Windows System Shortcuts"
        ]
      },
      {
        "term": "Virtuelle Desktops",
        "desc": "<b>Win + Strg + D:</b> Neuen Desktop erstellen<br/>\n<b>Win + Strg + ← / →:</b> Zwischen Desktops wechseln<br/>\n<b>Win + Strg + F4:</b> Aktuellen Desktop schließen",
        "tags": [
          "Windows System Shortcuts"
        ]
      },
      {
        "term": "Explorer & Text",
        "desc": "<b>Strg + N:</b> Neues Fenster öffnen<br/>\n<b>Strg + Shift + N:</b> Neuer Ordner erstellen<br/>\n<b>Alt + Enter:</b> Eigenschaften der Datei öffnen<br/>\n<b>F2:</b> Datei/Ordner umbenennen<br/>\n<b>Strg + Backspace:</b> Ganzes Wort löschen",
        "tags": [
          "Windows System Shortcuts"
        ]
      },
      {
        "term": "Power User",
        "desc": "<b>Win + X:</b> Schnellzugriffsmenü (Admin-Tools)<br/>\n<b>Win + S:</b> Windows-Suche öffnen<br/>\n<b>Win + Pause:</b> System-Info anzeigen<br/>\n<b>Win + G:</b> Xbox Game Bar (Screen Recording)",
        "tags": [
          "Windows System Shortcuts"
        ]
      },
      {
        "term": "Win + Shift + S",
        "desc": "Öffnet das Snipping Tool für Screenshots.",
        "tags": [
          "Windows System Shortcuts"
        ]
      },
      {
        "term": "Win + V",
        "desc": "Öffnet den Zwischenablage-Verlauf.",
        "tags": [
          "Windows System Shortcuts"
        ]
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
        "onclick": "openPDF('VisualStudioCodeShortcuts.pdf')",
        "tags": [
          " Visual Studio Shortcuts"
        ]
      },
      {
        "term": "Visual Studio 2026 PDF",
        "desc": "Visual Studio 2026 Cheatsheet",
        "onclick": "openPDF('VisualStudioShortcuts.pdf')",
        "tags": [
          " Visual Studio Shortcuts"
        ]
      },
      {
        "term": "Must Haves",
        "desc": "<b>Strg+R, Strg+R:</b> Gobal Umbenennen<br/>\n<b>Strg+H:</b> In der aktuellen Datei Umbenennen<br/>\n<b>Strg+F:</b> Schnelle Suche im Code<br/>\n<b>Strg+SHIFT+F:</b> Projektweite Suche<br/>\n<b>Strg+T:</b> Gehe zu allem (Dateien, Klassen)<br/>\n<b>Strg+K, Strg+E:</b> Code aufräumen",
        "tags": [
          " Visual Studio Shortcuts"
        ]
      },
      {
        "term": "Navigation",
        "desc": "<b>F12:</b> Gehe zur Definition<br/>\n<b>Strg+F12:</b> Gehe zur Implementierung<br/>\n<b>Alt+F12:</b> Peek Definition (Vorschau)<br/>\n<b>Strg+T:</b> Gehe zu Alles<br/>\n<b>Strg+- / Strg+Shift+-:</b> Zurück / Vorwärts",
        "tags": [
          " Visual Studio Shortcuts"
        ]
      },
      {
        "term": "Editing & Refactoring",
        "desc": "<b>Strg+.:</b> Schnellaktionen / Glühbirne<br/>\n<b>Strg+D:</b> Zeile duplizieren<br/>\n<b>Strg+L:</b> Zeile löschen<br/>\n<b>Strg+K, Strg+E:</b> Code formatieren<br/>\n<b>einfg:</b> Überschreibmodus an/aus<br/>\n<b>Alt + ↑/↓:</b> Zeile verschieben",
        "tags": [
          " Visual Studio Shortcuts"
        ]
      },
      {
        "term": "Formatierung",
        "desc": "<b>Strg+K, Strg+C:</b> Kommentar hinzufügen<br/>\n<b>Strg+K, Strg+U:</b> Kommentar entfernen<br/>\n<b>Strg+K, Strg+D:</b> Dokument formatieren",
        "tags": [
          " Visual Studio Shortcuts"
        ]
      },
      {
        "term": "Debugging",
        "desc": "<b>F5 / Strg+F5:</b> Starten mit/ohne Debugging<br/>\n<b>F9:</b> Breakpoint setzen/löschen<br/>\n<b>F5:</b> Fortfahren bis zum nächsten Breakpoint<br/>\n<b>F10:</b> Step Over nächste Zeile ohne Methode<br/>\n<b>F11:</b> Step Into Methode<br/>\n<b>Shift+F11:</b> Step Out",
        "tags": [
          " Visual Studio Shortcuts"
        ]
      },
      {
        "term": "Breakpoints",
        "desc": "<b>F9:</b> Breakpoint setzen/löschen<br/>\n<b>Strg+SHIFT+F9:</b> Alle Breakpoints löschen<br/>\n<b>Strg+F9:</b> Breakpoint deaktivieren (aktuelle Zeile)<br/>\n<b>Strg+ALT+B:</b> Breakpoints-Fenster öffnen<br/>\n<b>ALT+F9:</b> Breakpoints-Fenster öffnen<br/>",
        "tags": [
          " Visual Studio Shortcuts"
        ]
      },
      {
        "term": "Bookmarks",
        "desc": "<b>Strg+K, Strg+K:</b> Bookmark setzen/löschen<br/>\n<b>Strg+K, Strg+N:</b> Nächstes Bookmark<br/>\n<b>Strg+K, Strg+P:</b> vorheriges Bookmark<br/>\n<b>Strg+K, Strg+L:</b> Alle Bookmarks löschen<br/>\n<b>Strg+K, Strg+W:</b> Bookmark-Fenster öffnen",
        "tags": [
          " Visual Studio Shortcuts"
        ]
      },
      {
        "term": "Build & Layout",
        "desc": "<b>Strg+Shift+B:</b> Projektmappe erstellen (Build)<br/>\n<b>Strg+Alt+L:</b> Solution Explorer/Projektmappen-Explorer öffnen<br/>\n<b>Shift+Alt+Enter:</b> Vollbildmodus",
        "tags": [
          " Visual Studio Shortcuts"
        ]
      },
      {
        "term": "Ctrl + K, Ctrl + D",
        "desc": "Dokument formatieren (Code Formatierung in Visual Studio).",
        "tags": [
          " Visual Studio Shortcuts"
        ]
      },
      {
        "term": "F12",
        "desc": "Gehe zu Definition (Go to Definition).",
        "tags": [
          " Visual Studio Shortcuts"
        ]
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
        "desc": "<b>Tab:</b> Autovervollständigung (Pfad/Datei)<br/>\n<b>Pfeil ↑ / ↓:</b> Letzte Befehle durchlaufen<br/>\n<b>Strg + C:</b> Aktuellen Befehl abbrechen<br/>\n<b>cls:</b> Bildschirm leeren (Clear Screen)<br/>\n<b>exit:</b> Terminal schließen",
        "tags": [
          "Terminal & Shell Shortcuts"
        ]
      },
      {
        "term": "Klassische CMD",
        "desc": "<b>dir:</b> Verzeichnisinhalt auflisten<br/>\n<b>cd [Ordner]:</b> Verzeichnis wechseln<br/>\n<b>cd ..:</b> Einen Ordner nach oben<br/>\n<b>ipconfig:</b> Netzwerk-Konfiguration anzeigen<br/>\n<b>ping [Host]:</b> Verbindung prüfen",
        "tags": [
          "Terminal & Shell Shortcuts"
        ]
      },
      {
        "term": "PowerShell (Cmdlets)",
        "desc": "<b>ls / dir / Get-ChildItem:</b> Ordnerinhalt<br/>\n<b>Get-Help [Befehl]:</b> Hilfe anzeigen<br/>\n<b>Get-Service:</b> Alle Dienste auflisten<br/>\n<b>Get-Process:</b> Aktive Prozesse sehen<br/>\n<b>Stop-Process -Name \"Ex\":</b> Prozess beenden",
        "tags": [
          "Terminal & Shell Shortcuts"
        ]
      },
      {
        "term": "Editieren & Kopieren",
        "desc": "<b>Strg + A:</b> Alles markieren<br/>\n<b>Rechtsklick:</b> Einfügen (oder Markieren)<br/>\n<b>Strg + F:</b> Suchen (im neuen Windows Terminal)<br/>\n<b>F7:</b> Befehlshistorie als Liste (nur CMD)",
        "tags": [
          "Terminal & Shell Shortcuts"
        ]
      },
      {
        "term": "Admin-Check",
        "desc": "<b>sfc /scannow:</b> Systemdateien reparieren<br/>\n<b>systeminfo:</b> Detail-Infos zum System<br/>\n<b>netstat -an:</b> Offene Ports anzeigen<br/>\n<b>hostname:</b> Rechnername ausgeben",
        "tags": [
          "Terminal & Shell Shortcuts"
        ]
      },
      {
        "term": "Profi-Shortcuts",
        "desc": "<b>Alt + Enter:</b> Vollbildmodus<br/>\n<b>Strg + Shift + C/V:</b> Kopieren/Einfügen<br/>\n<b>&amp;&amp;:</b> Befehle verketten (z.B. <code>cls &amp;&amp; dir</code>)<br/>\n<b>&gt; [Datei.txt]:</b> Output in Datei speichern",
        "tags": [
          "Terminal & Shell Shortcuts"
        ]
      },
      {
        "term": "Pipes & Weiterleitung",
        "desc": "<b>| (Pipe):</b> Ausgabe des ersten Befehls als Eingabe für den zweiten nutzen.<br/><b>></b> Datei überschreiben<br/><b>>></b> An Datei anhängen.",
        "tags": [
          "Terminal & Shell Shortcuts"
        ]
      },
      {
        "term": "PowerShell Execution Policy",
        "desc": "<b>Set-ExecutionPolicy RemoteSigned:</b> Erlaubt die Ausführung von lokalen Skripten.<br/><b>Get-ExecutionPolicy:</b> Aktuelle Richtlinie anzeigen.",
        "tags": [
          "Terminal & Shell Shortcuts"
        ]
      },
      {
        "term": "PowerShell Aliases",
        "desc": "<b>Get-Alias:</b> Liste aller Abkürzungen anzeigen.<br/>Viele Linux-Befehle (ls, rm, cp, mv) funktionieren als Alias in PowerShell.",
        "tags": [
          "Terminal & Shell Shortcuts"
        ]
      },
      {
        "term": "Netzwerk Tools",
        "desc": "<b>tracert [Host]:</b> Route zum Zielserver verfolgen (CMD)<br/><b>Test-NetConnection:</b> Pingen & Port prüfen (PowerShell)<br/><b>nslookup [Domain]:</b> DNS-Einträge abfragen",
        "tags": [
          "Terminal & Shell Shortcuts"
        ]
      },
      {
        "term": "Dateimanagement Erweitert",
        "desc": "<b>robocopy:</b> Robustes Tool für große Dateikopien und Backups (CMD)<br/><b>mkdir / md:</b> Neuen Ordner erstellen<br/><b>rmdir /s /q:</b> Ordner inkl. Inhalt ohne Nachfrage löschen (CMD)",
        "tags": [
          "Terminal & Shell Shortcuts"
        ]
      },
      {
        "term": "System & WMI",
        "desc": "<b>tasklist / taskkill:</b> Prozesse anzeigen/beenden (CMD)<br/><b>Get-WmiObject Win32_BIOS:</b> BIOS Infos abrufen (PS)<br/><b>Get-CimInstance:</b> Moderne Alternative zu WMI (PS)",
        "tags": [
          "Terminal & Shell Shortcuts"
        ]
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
        "desc": "Der Kellner: Nimmt die Bestellung (Request) auf, bringt sie in die Küche (Backend) und serviert das Essen (Response).",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "API Gateway",
        "desc": "Die Rezeption: Alles läuft zentral über einen Punkt.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "API Rate Limit",
        "desc": "Kartenausgabe: Nur X Eintritte pro Minute erlaubt.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Cache",
        "desc": "Der Kühlschrank: Du holst die Milch direkt aus der Küche, statt jedes Mal zum Supermarkt (Datenbank) zu fahren.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Cache Invalidation",
        "desc": "Der Kühlschrank wird falsch befüllt: Alte Daten müssen raus.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "CD Pipeline",
        "desc": "Das Förderband: Von Commit bis Deployment automatisiert.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "CDN",
        "desc": "Das Lagerhausnetz: Liefert Produkte von der nächsten Filiale aus.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Circuit Breaker",
        "desc": "Die Sicherung im Haus: Verhindert schlimmere Schäden.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Compiler",
        "desc": "Der Übersetzer: Übersetzt Quellcode in Maschinensprache.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Container",
        "desc": "Die Tupperdose: Klein, leicht, portabel.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Cookie",
        "desc": "Der Garderoben-Zettel: Du gibst deine Jacke ab und bekommst eine Nummer, damit man dich später wiedererkennt.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "CPU",
        "desc": "Der Koch: Führt die Anweisungen Schritt für Schritt aus.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "DNS",
        "desc": "Das Telefonbuch: Du tippst den Namen (google.de), das DNS sucht die Nummer (142.250.185.78).",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Docker",
        "desc": "Das Fertiggericht: Alles ist drin (Zutaten, Gewürze), es schmeckt in jeder Mikrowelle (Server) exakt gleich.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Encryption",
        "desc": "Die Geheimschrift: Nur richtige Schlüssel können es lesen.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Event",
        "desc": "Ein Klingeln der Küche: „Etwas ist passiert“.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Event Listener",
        "desc": "Der Kellner: Reagiert auf Klingeln.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Feature Flag",
        "desc": "Der Lichtschalter: Funktionen an/aus ohne Code ändern.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Firewall",
        "desc": "Der Burggraben: Nur wer die Zugbrücke (Port) benutzen darf und die richtigen Papiere hat, kommt rein.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Framework",
        "desc": "Das Baugerüst: Struktur ist vorgegeben.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Frontend / Backend",
        "desc": "Der Eisberg: Das Frontend ist die sichtbare Spitze, das Backend der massive, tragende Teil unter Wasser.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Garbage Collector",
        "desc": "Der Putzdienst: Entfernt nicht mehr gebrauchte Objekte.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Git Merge",
        "desc": "Der Reißverschluss: Zwei verschiedene Stoffe (Branches) werden zu einem stabilen Ganzen zusammengeführt.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "GPU",
        "desc": "Die Kochbrigade: Viele Köche arbeiten gleichzeitig.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Hashing",
        "desc": "Der Fingerabdruck: Nicht rückwärts berechenbar.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Heap",
        "desc": "Chaotische Box: Beliebige Reihenfolge möglich.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Idempotent",
        "desc": "Wie Lichtschalter: Egal wie oft du drückst, das Ergebnis bleibt gleich.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Interpreter",
        "desc": "Simultanübersetzer: Führt Code Schritt für Schritt aus.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Library",
        "desc": "Das Werkzeug: Du nutzt es, wann du willst.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Load Balancer",
        "desc": "Der Türsteher: Er schickt die Leute abwechselnd an Kasse 1, 2 oder 3, damit keine Schlange zu lang wird.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Microservices",
        "desc": "Viele kleine Foodtrucks statt einem Restaurant.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Monolith",
        "desc": "Ein großes Restaurant, alles unter einem Dach.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "ORM",
        "desc": "Der Übersetzer zwischen Tabellen und Objekten.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Polling",
        "desc": "Der ungeduldige Kunde: Fragt ständig „Ist es fertig?“",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Priority Queue",
        "desc": "VIP-Schlange: Wichtige Aufgaben gehen vor.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Process",
        "desc": "Ein komplettes Restaurantteam: Enthält viele Threads/Köche.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Pub/Sub",
        "desc": "Zeitungsverteiler: Wer will, bekommt Updates.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Queue",
        "desc": "Warteschlange im Supermarkt: Jeder wartet, bis er drankommt.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "RAM",
        "desc": "Der Arbeitsplatz: Schnell, aber Inhalte verschwinden beim Ausschalten.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Reverse Proxy",
        "desc": "Der Sekretär: Filtert und leitet Anfragen weiter.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Rollback",
        "desc": "Der Rückgängig-Knopf: Alles wieder wie zuvor.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "ROM",
        "desc": "Das Handbuch: Wird nicht verändert.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Salt",
        "desc": "Das Zusatzgewürz: Macht Hashes einzigartiger.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Shadow Copy",
        "desc": "Die Sicherheitskopie eines Dokuments.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Stack",
        "desc": "Der Geschirrstapel: Immer der oberste zuerst.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "State Machine",
        "desc": "Automat: Zustände mit klar definierten Übergängen.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Thread",
        "desc": "Ein Mitarbeiter: Arbeitet parallel an Aufgaben.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Transactional Work",
        "desc": "Ein Kartenspiel: Entweder alle Karten passen, oder man hebt wieder auf.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Variable",
        "desc": "Die Umzugskiste: Ein Name steht drauf, der Inhalt kann jederzeit ausgetauscht werden.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Virtual Machine",
        "desc": "Die Wohnung in der Wohnung: Separates Mini‑Betriebssystem.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "VPN",
        "desc": "Der Geheimgang in die Firma: Sicher, verborgen, privat.",
        "tags": [
          "Modelle & Analogien"
        ]
      },
      {
        "term": "Webhook",
        "desc": "Die Küche ruft dich an, wenn das Essen fertig ist.",
        "tags": [
          "Modelle & Analogien"
        ]
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
        "desc": "Mythischer Entwickler, angeblich zehnmal produktiver als der Durchschnitt.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Banana Software",
        "desc": "Produkt, das erst beim Kunden reift (Bananenprinzip).",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Bike Shed Discussion",
        "desc": "Endlose Debatte über unwichtige Details (Farbe des Fahrradschuppens), während das Kernproblem ignoriert wird.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Cargo Cult",
        "desc": "Kopieren von Code-Mustern oder Technologien, ohne deren Sinn zu verstehen.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Cargo Ship Git Commit",
        "desc": "Ein gigantischer Commit, der viel zu viele Änderungen auf einmal enthält.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Code Monkey",
        "desc": "Entwickler, der ohne Eigeninitiative stumpf Vorgaben abarbeitet.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Code Smell",
        "desc": "Ein schlechtes Gefühl beim Lesen von Code – deutet auf tieferliegende Designfehler hin.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Commitment Issues",
        "desc": "Die Angst davor, den Code zu committen, weil man weiß, dass noch alles instabil ist.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Copy-Paste Driven Development",
        "desc": "Softwareentwicklung, die primär aus dem Kopieren von StackOverflow-Snippets besteht.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Cowboy Coding",
        "desc": "Programmieren ohne Regeln, Planung, Tests oder Versionskontrolle.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Death by a Thousand Cuts",
        "desc": "Ein Projekt, das an hunderten winzigen, nervigen Fehlern scheitert.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Defensive Programming",
        "desc": "Code so schreiben, dass er selbst bei völlig unsinnigen Eingaben nicht abstürzt.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Enterprise FizzBuzz",
        "desc": "Eine extrem simple Aufgabe, die durch übertriebene Architektur völlig überkomplex gelöst wurde.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Fail Whale",
        "desc": "Ein kompletter Systemabsturz, der oft mit einem entschuldigenden Meme quittiert wird.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Feature Creep",
        "desc": "Das ständige Hinzufügen neuer Funktionen, bis das eigentliche Ziel des Projekts verloren geht.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Frankenstein Code",
        "desc": "Ein System, das aus vielen inkompatiblen Teilen zusammengeflickt wurde.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Ghost in the Machine",
        "desc": "Ein technischer Fehler, für den es scheinbar keine logische Erklärung gibt.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Golden Hammer",
        "desc": "Wenn man nur ein Werkzeug kennt (z.B. Regex), sieht jedes Problem wie ein Nagel aus.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Google-Driven Development",
        "desc": "Die Fähigkeit, absolut jedes Problem durch geschicktes Googeln zu lösen.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Heisenbug",
        "desc": "Ein flüchtiger Fehler, der auf magische Weise verschwindet, sobald man versucht, ihn zu debuggen.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Hype-Driven Development",
        "desc": "Ein neues Framework nur deshalb wählen, weil es gerade auf Twitter/X trendet.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "ID10T Error",
        "desc": "Interne Bezeichnung für einen klassischen Anwenderfehler (I-D-I-O-T).",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Infinite TODO",
        "desc": "Die Liste der Aufgaben, die niemals kürzer, sondern nur exponentiell länger wird.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "It’s a Feature",
        "desc": "Die Standard-Ausrede, wenn man einen Bug nicht reparieren kann oder will.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Jenga Architecture",
        "desc": "Ein Software-Design, bei dem das Ändern einer Zeile das gesamte System zum Einsturz bringt.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Lasagna Code",
        "desc": "Code mit so vielen Abstraktionsschichten, dass man den Überblick komplett verliert.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Magic Number",
        "desc": "Harte Zahlenwerte im Code (z.B. 86400), deren Herkunft und Bedeutung niemand dokumentiert hat.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Ninja Fix",
        "desc": "Ein heimlicher Bugfix direkt in der Produktion, von dem hoffentlich niemand erfährt.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Not my Bug",
        "desc": "Abwälzen der Verantwortung: „Bei mir läuft’s, das muss an der API liegen.“",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Not my circus, not my monkeys",
        "desc": "„Nicht mein Zirkus, nicht meine Affen“ – Distanzierung von einem fremden Chaos.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "PEBKAC",
        "desc": "Problem Exists Between Keyboard And Chair (Der Fehler sitzt vor dem Monitor).",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "PICNIC",
        "desc": "Problem In Chair, Not In Computer (Alternative zu PEBKAC).",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Potato Quality API",
        "desc": "Eine Schnittstelle, die langsam, unzuverlässig und völlig veraltet ist.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Premature Optimization",
        "desc": "Performance-Optimierung an Stellen, die eigentlich gar kein Flaschenhals sind.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Refactoritis",
        "desc": "Der krankhafte Zwang, funktionierenden Code ständig neu schreiben zu müssen.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Rubber Chicken Debugging",
        "desc": "Verzweifeltes Ausprobieren von Lösungen, die eher an Voodoo als an Informatik erinnern.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Rubber Ducking",
        "desc": "Einem leblosen Objekt (Gummiente) das Problem erklären, um selbst auf die Lösung zu kommen.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Rubber Stamp Approval",
        "desc": "Ein Code-Review, das ungelesen durchgewinkt wurde („LGTM!“).",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Rubbernecking",
        "desc": "Sinnloses Starren auf kaputten Code in der Hoffnung, dass die Lösung erscheint.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Schrödinbug",
        "desc": "Ein Fehler, der erst existiert, sobald man bemerkt, dass der Code theoretisch gar nicht funktionieren dürfte.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Script Kiddie",
        "desc": "Jemand, der fertige Hacking-Tools nutzt, ohne die technische Basis zu verstehen.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Shaving the Yak",
        "desc": "Eine endlose Kette von trivialen Aufgaben, die man erledigen muss, bevor man mit der eigentlichen Arbeit beginnen kann.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Silent Failure",
        "desc": "Ein Fehler, der das Programm nicht abstürzen lässt, aber im Hintergrund alles korrumpiert.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Sisyphus Task",
        "desc": "Eine Aufgabe, die kurz vor der Fertigstellung immer wieder von vorne beginnt (z.B. Altsystem-Migration).",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Spaghetti Code",
        "desc": "Ein völlig unstrukturierter, wild verflochtener Programmablauf ohne klare Ordnung.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Spooky Action at a Distance",
        "desc": "Wenn eine Änderung in Modul A völlig unerwartet einen Fehler in Modul B verursacht.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "StackOverflow-Driven Development",
        "desc": "Programmieren durch massives Kopieren von Lösungen der gleichnamigen Plattform.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Technical Debt",
        "desc": "Technische Schulden: Schnelle, unsaubere Lösungen, die man später teuer „bezahlen“ muss.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Undocumented Feature",
        "desc": "Ein Bug, der so lange im System ist, dass die Nutzer ihn als normale Funktion akzeptieren.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Works on my Machine",
        "desc": "Die klassische Antwort, wenn ein Fehler beim Kunden, aber nicht beim Entwickler auftritt.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Works on my Machine Premium Edition",
        "desc": "Der Fehler tritt bei allen auf – außer bei exakt einem Entwickler im Team.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "Bugs",
        "desc": "Unerwartete Features.",
        "tags": [
          "Humor & Slang"
        ]
      },
      {
        "term": "In production",
        "desc": "Der Ort, an dem sich herausstellt, dass 'works on my machine' nicht genug war.",
        "tags": [
          "Humor & Slang"
        ]
      }
    ]
  },
  {
    "id": "sec26",
    "nav_title": "📈 IHK-Diagramme & Prozesse",
    "sec_title": "IHK-Diagramme & Prozesse",
    "cards": [
      {
        "term": "Struktogramm (Nassi-Shneiderman)",
        "desc": "Entwurfsmethode für die strukturierte Programmierung. Visualisiert Kontrollstrukturen (Sequenz, Auswahl, Iteration) als verschachtelte Blöcke.",
        "tags": [
          "Modellierung",
          "IHK"
        ]
      },
      {
        "term": "Programmablaufplan (PAP)",
        "desc": "Grafische Darstellung zur Umsetzung eines Algorithmus oder Prozesses. Nutzt genormte Symbole nach DIN 66001.",
        "tags": [
          "Modellierung",
          "IHK"
        ]
      },
      {
        "term": "EPK (Ereignisgesteuerte Prozesskette)",
        "desc": "Grafische Modellierungssprache zur Darstellung von Geschäftsprozessen. Besteht immer abwechselnd aus Ereignissen und Funktionen.",
        "tags": [
          "Prozesse",
          "IHK"
        ]
      },
      {
        "term": "Netzplantechnik",
        "desc": "Methode zur Planung, Steuerung und Überwachung von Projekten. Bestimmt den kritischen Pfad und Pufferzeiten von Vorgängen.",
        "tags": [
          "Projektmanagement",
          "IHK"
        ]
      }
    ]
  },
  {
    "id": "sec27",
    "nav_title": "💼 Wirtschaft & IT-Recht",
    "sec_title": "Wirtschaft & IT-Recht",
    "cards": [
      {
        "term": "Werkvertrag",
        "desc": "Vertrag, bei dem ein bestimmter Erfolg (ein 'Werk') geschuldet wird, nicht nur eine Leistung. Der Auftragnehmer trägt das Risiko.",
        "tags": [
          "Recht",
          "WiSo"
        ]
      },
      {
        "term": "Dienstvertrag",
        "desc": "Vertrag, bei dem eine Leistung (z. B. Arbeitszeit) geschuldet wird, aber kein bestimmter Erfolg garantiert ist.",
        "tags": [
          "Recht",
          "WiSo"
        ]
      },
      {
        "term": "SLA (Service Level Agreement)",
        "desc": "Vereinbarung zwischen Anbieter und Kunde über genaue Dienstleistungseigenschaften (z. B. 99,9% Verfügbarkeit).",
        "tags": [
          "IT-Service",
          "WiSo"
        ]
      },
      {
        "term": "Softwarelizenzen",
        "desc": "Regeln die Nutzungsrechte an Software. Unterscheidung u. a. in proprietär (geschlossen), Copyleft (GPL) und permissiv (MIT, Apache).",
        "tags": [
          "Recht",
          "Open Source"
        ]
      },
      {
        "term": "DSGVO (Datenschutz-Grundverordnung)",
        "desc": "EU-Verordnung, die den Umgang mit personenbezogenen Daten regelt (z. B. Zweckbindung, Datenminimierung, Recht auf Vergessenwerden).",
        "tags": [
          "Recht",
          "Security"
        ]
      },
      {
        "term": "Make-or-Buy-Entscheidung",
        "desc": "Kaufmännische Abwägung, ob eine Software oder Komponente selbst entwickelt (Make) oder eingekauft (Buy) werden soll.",
        "tags": [
          "Wirtschaft",
          "WiSo"
        ]
      },
      {
        "term": "Amortisationsrechnung",
        "desc": "Berechnung der Zeit, die benötigt wird, bis die Einnahmen (oder Einsparungen) einer Investition deren Kosten decken.",
        "tags": [
          "Wirtschaft",
          "Kalkulation"
        ]
      }
    ]
  },
  {
    "id": "sec28",
    "nav_title": "🔐 Authentifizierung & Security",
    "sec_title": "Authentifizierung & Security",
    "cards": [
      {
        "term": "JWT (JSON Web Token)",
        "desc": "Ein offener Standard (RFC 7519) für die sichere Übertragung von Informationen zwischen Parteien als JSON-Objekt, oft für API-Authentifizierung genutzt.",
        "tags": [
          "Security",
          "API"
        ]
      },
      {
        "term": "OAuth2",
        "desc": "Ein Autorisierungs-Framework, das Anwendungen begrenzten Zugriff auf Nutzerkonten bei einem HTTP-Dienst ermöglicht.",
        "tags": [
          "Security",
          "Web"
        ]
      },
      {
        "term": "OpenID Connect (OIDC)",
        "desc": "Eine Identitätsschicht auf Basis des OAuth 2.0-Protokolls. Ermöglicht die Authentifizierung von Nutzern.",
        "tags": [
          "Security",
          "Web"
        ]
      },
      {
        "term": "SSO (Single Sign-On)",
        "desc": "Ein Verfahren, bei dem ein Benutzer nach einer einmaligen Anmeldung auf verschiedene Systeme zugreifen kann.",
        "tags": [
          "Security",
          "Architektur"
        ]
      },
      {
        "term": "MFA (Multi-Factor Authentication)",
        "desc": "Sicherheitsverfahren, das zwei oder mehr unabhängige Berechtigungsnachweise zur Überprüfung einer Identität erfordert (Wissen, Besitz, Inhärenz).",
        "tags": [
          "Security",
          "Identität"
        ]
      },
      {
        "term": "Hashing vs. Verschlüsselung",
        "desc": "Hashing (z. B. SHA-256) ist eine Einwegfunktion (Passwortspeicherung). Verschlüsselung (z. B. AES) ist umkehrbar (Datenübertragung).",
        "tags": [
          "Security",
          "Konzepte"
        ]
      },
      {
        "term": "Salting",
        "desc": "Das Hinzufügen von zufälligen Daten (Salt) zu einem Passwort vor dem Hashing, um Rainbow-Table-Angriffe zu erschweren.",
        "tags": [
          "Security",
          "Krypto"
        ]
      }
    ]
  },
  {
    "id": "sec29",
    "nav_title": "🟣 C# / .NET Spezifika",
    "sec_title": "C# / .NET Spezifika",
    "cards": [
      {
        "term": "LINQ (Language Integrated Query)",
        "desc": "Eine C#-Erweiterung, die Abfragen direkt in die Sprache integriert (für Collections, Datenbanken, XML).",
        "tags": [
          "C#",
          ".NET",
          "Daten"
        ]
      },
      {
        "term": "Entity Framework (EF Core)",
        "desc": "Ein objektrelationaler Mapper (ORM) für .NET, der die Arbeit mit Datenbanken über C#-Objekte statt SQL ermöglicht.",
        "tags": [
          "C#",
          ".NET",
          "Datenbank"
        ]
      },
      {
        "term": "Dependency Injection (DI)",
        "desc": "Ein Entwurfsmuster in .NET, bei dem Abhängigkeiten (z. B. Services) von außen in eine Klasse injiziert werden, oft über den Konstruktor.",
        "tags": [
          "Architektur",
          "C#",
          "Pattern"
        ]
      },
      {
        "term": "Inversion of Control (IoC)",
        "desc": "Prinzip, bei dem die Steuerung des Programmflusses von einem externen Framework übernommen wird (z. B. durch einen DI-Container).",
        "tags": [
          "Architektur",
          "Prinzipien"
        ]
      },
      {
        "term": "Garbage Collection (GC)",
        "desc": "Automatischer Speicherbereinigungsmechanismus in .NET, der nicht mehr referenzierten Speicher freigibt.",
        "tags": [
          ".NET",
          "Performance",
          "Memory"
        ]
      },
      {
        "term": "NuGet",
        "desc": "Der offizielle Paketmanager für .NET. Erleichtert das Einbinden von Bibliotheken und Abhängigkeiten.",
        "tags": [
          ".NET",
          "Tooling"
        ]
      },
      {
        "term": "Delegates & Events",
        "desc": "Delegates sind typsichere Funktionszeiger in C#. Events basieren darauf und dienen der Implementierung des Publisher-Subscriber-Patterns.",
        "tags": [
          "C#",
          "Konzepte"
        ]
      }
    ]
  },
  {
    "id": "sec30",
    "nav_title": "🏗️ Modernes Deployment & Workflows",
    "sec_title": "Modernes Deployment & Workflows",
    "cards": [
      {
        "term": "Barrierefreiheit (a11y / WCAG)",
        "desc": "Accessibility (a11y) stellt sicher, dass Anwendungen für Menschen mit Einschränkungen nutzbar sind. WCAG (Web Content Accessibility Guidelines) ist der Standard dafür.",
        "tags": [
          "Web",
          "UX",
          "Qualität"
        ]
      },
      {
        "term": "Git Flow",
        "desc": "Ein Branching-Modell für Git, das strikte Rollen für Branches (master, develop, feature, release, hotfix) vorgibt.",
        "tags": [
          "Git",
          "Workflow"
        ]
      },
      {
        "term": "Trunk-based Development",
        "desc": "Ein Branching-Modell, bei dem alle Entwickler kleine Änderungen direkt (oder kurzlebig) in den Hauptbranch (Trunk) pushen.",
        "tags": [
          "Git",
          "Workflow"
        ]
      },
      {
        "term": "CI/CD (Continuous Integration / Continuous Deployment)",
        "desc": "Automatisierte Prozesse zum Bauen, Testen (CI) und Ausliefern (CD) von Softwareänderungen.",
        "tags": [
          "DevOps",
          "Automatisierung"
        ]
      },
      {
        "term": "GitHub Actions",
        "desc": "Eine Plattform für CI/CD direkt in GitHub, um Workflows (Pipelines) durch Ereignisse auszulösen.",
        "tags": [
          "DevOps",
          "Tooling"
        ]
      }
    ]
  }
];
