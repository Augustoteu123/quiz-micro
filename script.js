// Área para adicionar perguntas de cada tema:
const preguntasTema1 = [
  {
    question: "¿Qué estudia la microbiología?",
    answers: [
      { text: "El estudio de microorganismos invisibles al ojo humano", correct: true },
      { text: "El comportamiento de animales grandes", correct: false },
      { text: "La estructura de las plantas", correct: false },
      { text: "Los sistemas nerviosos complejos", correct: false }
    ]
  },
  {
    question: "¿Qué científico describió por primera vez las 'células' observando un corcho?",
    answers: [
      { text: "Louis Pasteur", correct: false },
      { text: "Robert Hooke", correct: true },
      { text: "Alexander Fleming", correct: false },
      { text: "Anton van Leeuwenhoek", correct: false }
    ]
  },
  {
    question: "¿Quién es considerado el 'Padre del mundo microbiano'?",
    answers: [
      { text: "Anton van Leeuwenhoek", correct: true },
      { text: "Edward Jenner", correct: false },
      { text: "Ignaz Semmelweis", correct: false },
      { text: "Robert Koch", correct: false }
    ]
  },
  {
    question: "¿Qué experimento refutó la generación espontánea utilizando carne y moscas?",
    answers: [
      { text: "Experimento de Redi", correct: true },
      { text: "Experimento de Koch", correct: false },
      { text: "Experimento de Pasteur", correct: false },
      { text: "Experimento de Spallanzani", correct: false }
    ]
  },
  {
    question: "¿Quién desarrolló la primera vacuna contra la viruela?",
    answers: [
      { text: "Edward Jenner", correct: true },
      { text: "Louis Pasteur", correct: false },
      { text: "Robert Koch", correct: false },
      { text: "Alexander Fleming", correct: false }
    ]
  },
  {
    question: "¿Qué científico introdujo la higiene de manos en medicina?",
    answers: [
      { text: "Ignaz Semmelweis", correct: true },
      { text: "Joseph Lister", correct: false },
      { text: "Anton van Leeuwenhoek", correct: false },
      { text: "Edward Jenner", correct: false }
    ]
  },
  {
    question: "¿Qué proceso desarrolló Louis Pasteur para eliminar microbios dañinos en líquidos?",
    answers: [
      { text: "Pasteurización", correct: true },
      { text: "Vacunación", correct: false },
      { text: "Fermentación", correct: false },
      { text: "Destilación", correct: false }
    ]
  },
  {
    question: "¿Qué establece la Teoría Germinal de las Enfermedades Infecciosas?",
    answers: [
      { text: "Toda enfermedad infecciosa es causada por un germen específico", correct: true },
      { text: "Las enfermedades son causadas por miasmas", correct: false },
      { text: "La salud depende de los humores corporales", correct: false },
      { text: "Las enfermedades surgen de manera espontánea", correct: false }
    ]
  },
  {
    question: "¿Qué método utilizó Robert Koch para aislar bacterias?",
    answers: [
      { text: "Cultivo en medios sólidos", correct: true },
      { text: "Cultivo en líquidos", correct: false },
      { text: "Cultivo en sangre", correct: false },
      { text: "Observación a simple vista", correct: false }
    ]
  },
  {
    question: "¿Qué microorganismo descubrió Robert Koch como causante de la tuberculosis?",
    answers: [
      { text: "Mycobacterium tuberculosis", correct: true },
      { text: "Vibrio cholerae", correct: false },
      { text: "Bacillus anthracis", correct: false },
      { text: "Staphylococcus aureus", correct: false }
    ]
  },
  {
    question: "¿Qué descubrió Alexander Fleming?",
    answers: [
      { text: "La penicilina", correct: true },
      { text: "La vacuna contra la rabia", correct: false },
      { text: "La fermentación del vino", correct: false },
      { text: "El bacilo de la tuberculosis", correct: false }
    ]
  },
  {
    question: "¿Qué práctica médica implementó Joseph Lister?",
    answers: [
      { text: "Técnica aséptica en cirugía", correct: true },
      { text: "Higiene hospitalaria", correct: false },
      { text: "Anestesia general", correct: false },
      { text: "Desarrollo de vacunas", correct: false }
    ]
  },
  {
    question: "¿Qué acontecimiento impulsó el surgimiento de la microbiología?",
    answers: [
      { text: "La invención del microscopio óptico", correct: true },
      { text: "La cirugía moderna", correct: false },
      { text: "La aparición de vacunas", correct: false },
      { text: "La quimioterapia", correct: false }
    ]
  },
  {
    question: "¿Cómo se llamaban los curanderos andinos expertos en plantas medicinales?",
    answers: [
      { text: "Kallawayas", correct: true },
      { text: "Chamanes", correct: false },
      { text: "Yatiris", correct: false },
      { text: "Sumaq Wasis", correct: false }
    ]
  },
  {
    question: "¿Cuál fue el primer laboratorio de bacteriología fundado en Bolivia?",
    answers: [
      { text: "Laboratorio Dr. Néstor Morales Villazón", correct: true },
      { text: "Facultad de Medicina San Andrés", correct: false },
      { text: "Hospital General San Juan de Dios", correct: false },
      { text: "Instituto Nacional de Salud", correct: false }
    ]
  }
];

const preguntasTema2 = [
  {
    question: "¿Cuál de los siguientes NO es uno de los cinco reinos biológicos tradicionales?",
    answers: [
      { text: "Plantae", correct: false },
      { text: "Monera", correct: false },
      { text: "Archaea", correct: true },
      { text: "Fungi", correct: false }
    ]
  },
  {
    question: "¿Qué organismo pertenece al Reino Monera?",
    answers: [
      { text: "Bacterias", correct: true },
      { text: "Hongos", correct: false },
      { text: "Algas verdes", correct: false },
      { text: "Protozoos", correct: false }
    ]
  },
  {
    question: "¿Qué característica principal define al Reino Protista?",
    answers: [
      { text: "Organismos multicelulares", correct: false },
      { text: "Organismos unicelulares o coloniales", correct: true },
      { text: "Organismos autótrofos exclusivamente", correct: false },
      { text: "Organismos sin núcleo definido", correct: false }
    ]
  },
  {
    question: "¿Qué característica comparten todos los seres del Reino Plantae?",
    answers: [
      { text: "Son autótrofos y realizan fotosíntesis", correct: true },
      { text: "Se alimentan de otros organismos", correct: false },
      { text: "No poseen núcleo celular", correct: false },
      { text: "Tienen movilidad propia", correct: false }
    ]
  },
  {
    question: "¿Qué organismos forman parte del Reino Fungi?",
    answers: [
      { text: "Levaduras y hongos", correct: true },
      { text: "Protozoos", correct: false },
      { text: "Cianobacterias", correct: false },
      { text: "Musgos", correct: false }
    ]
  },
  {
    question: "¿Qué característica distingue a los seres del Reino Animalia?",
    answers: [
      { text: "Carecen de movimiento", correct: false },
      { text: "Realizan fotosíntesis", correct: false },
      { text: "Son heterótrofos y multicelulares", correct: true },
      { text: "Poseen paredes celulares de quitina", correct: false }
    ]
  },
  {
    question: "¿Qué reino incluye organismos como amebas y paramecios?",
    answers: [
      { text: "Fungi", correct: false },
      { text: "Protista", correct: true },
      { text: "Plantae", correct: false },
      { text: "Animalia", correct: false }
    ]
  },
  {
    question: "¿Qué nombre recibe la teoría que divide a los seres vivos en tres dominios?",
    answers: [
      { text: "Teoría de los cinco reinos", correct: false },
      { text: "Teoría de los tres dominios", correct: true },
      { text: "Teoría celular", correct: false },
      { text: "Teoría endosimbiótica", correct: false }
    ]
  },
  {
    question: "¿Cuáles son los tres dominios según la clasificación moderna?",
    answers: [
      { text: "Archaea, Bacteria y Eukarya", correct: true },
      { text: "Animalia, Plantae y Protista", correct: false },
      { text: "Monera, Protista y Fungi", correct: false },
      { text: "Archaea, Protista y Plantae", correct: false }
    ]
  },
  {
    question: "¿Qué tipo de organismos encontramos en el dominio Archaea?",
    answers: [
      { text: "Bacterias comunes", correct: false },
      { text: "Organismos extremófilos", correct: true },
      { text: "Hongos multicelulares", correct: false },
      { text: "Plantas acuáticas", correct: false }
    ]
  },
  {
    question: "¿Qué organismos pertenecen al dominio Eukarya?",
    answers: [
      { text: "Bacterias y arqueas", correct: false },
      { text: "Todos los organismos con núcleo definido", correct: true },
      { text: "Solo plantas y hongos", correct: false },
      { text: "Solo animales superiores", correct: false }
    ]
  },
  {
    question: "¿Qué estructura tienen en común todos los seres vivos del dominio Eukarya?",
    answers: [
      { text: "Pared celular de peptidoglicano", correct: false },
      { text: "Núcleo verdadero rodeado por membrana", correct: true },
      { text: "Membrana celular doble", correct: false },
      { text: "ADN circular libre en el citoplasma", correct: false }
    ]
  },
  {
    question: "¿Qué ser vivo es un ejemplo de organismo del Reino Plantae?",
    answers: [
      { text: "Champiñón", correct: false },
      { text: "Euglena", correct: false },
      { text: "Pino", correct: true },
      { text: "Levadura", correct: false }
    ]
  },
  {
    question: "¿Qué tipo de nutrición tienen los hongos?",
    answers: [
      { text: "Autótrofa fotosintética", correct: false },
      { text: "Heterótrofa por absorción", correct: true },
      { text: "Parásita exclusivamente", correct: false },
      { text: "Quimiosintética", correct: false }
    ]
  },
  {
    question: "¿Qué es una cianobacteria?",
    answers: [
      { text: "Un hongo unicelular", correct: false },
      { text: "Una bacteria fotosintética", correct: true },
      { text: "Un protozoo flagelado", correct: false },
      { text: "Un alga multicelular", correct: false }
    ]
  }
];

const preguntasTema3 = [
  {
    question: "¿Qué instrumento es fundamental para la observación de células bacterianas?",
    answers: [
      { text: "Microscopio óptico", correct: true },
      { text: "Telescopio", correct: false },
      { text: "Microscopio de disección", correct: false },
      { text: "Lupa", correct: false }
    ]
  },
  {
    question: "¿Qué técnica de coloración permite observar mejor la morfología bacteriana?",
    answers: [
      { text: "Tinción de Gram", correct: true },
      { text: "Electroforesis", correct: false },
      { text: "Centrifugación", correct: false },
      { text: "Cromatografía", correct: false }
    ]
  },
  {
    question: "¿Cuál es la principal ventaja del microscopio electrónico sobre el óptico?",
    answers: [
      { text: "Mayor resolución de imagen", correct: true },
      { text: "Menor costo de adquisición", correct: false },
      { text: "Observación a simple vista", correct: false },
      { text: "Menor tamaño del equipo", correct: false }
    ]
  },
  {
    question: "¿Qué tipo de microscopio se utiliza para observar bacterias vivas sin teñirlas?",
    answers: [
      { text: "Microscopio de contraste de fases", correct: true },
      { text: "Microscopio de fluorescencia", correct: false },
      { text: "Microscopio electrónico de transmisión", correct: false },
      { text: "Microscopio de polarización", correct: false }
    ]
  },
  {
    question: "¿Qué componente de la célula bacteriana es visualizado mejor con tinción de Gram?",
    answers: [
      { text: "Pared celular", correct: true },
      { text: "Núcleo", correct: false },
      { text: "Flagelos", correct: false },
      { text: "Cápsula", correct: false }
    ]
  },
  {
    question: "¿Qué color tienen las bacterias Gram positivas tras la tinción?",
    answers: [
      { text: "Violeta o púrpura", correct: true },
      { text: "Rojo intenso", correct: false },
      { text: "Transparente", correct: false },
      { text: "Verde", correct: false }
    ]
  },
  {
    question: "¿Qué color presentan las bacterias Gram negativas después de la tinción de Gram?",
    answers: [
      { text: "Rosa o rojo", correct: true },
      { text: "Amarillo brillante", correct: false },
      { text: "Azul oscuro", correct: false },
      { text: "Verde oliva", correct: false }
    ]
  },
  {
    question: "¿Qué estructura bacteriana permite el movimiento y puede observarse con tinciones especiales?",
    answers: [
      { text: "Flagelo", correct: true },
      { text: "Pared celular", correct: false },
      { text: "Plásmido", correct: false },
      { text: "Ribosoma", correct: false }
    ]
  },
  {
    question: "¿Qué estructura bacteriana puede visualizarse con la tinción de cápsula?",
    answers: [
      { text: "La cápsula de polisacáridos", correct: true },
      { text: "El ADN", correct: false },
      { text: "El citoplasma", correct: false },
      { text: "El núcleo", correct: false }
    ]
  },
  {
    question: "¿Qué tipo de microscopía utiliza haces de electrones para obtener imágenes?",
    answers: [
      { text: "Microscopía electrónica", correct: true },
      { text: "Microscopía de campo oscuro", correct: false },
      { text: "Microscopía de luz ultravioleta", correct: false },
      { text: "Microscopía de contraste de fases", correct: false }
    ]
  },
  {
    question: "¿Qué nombre reciben las bacterias con forma esférica?",
    answers: [
      { text: "Cocos", correct: true },
      { text: "Bacilos", correct: false },
      { text: "Espirilos", correct: false },
      { text: "Vibrios", correct: false }
    ]
  },
  {
    question: "¿Qué nombre reciben las bacterias con forma de bastón?",
    answers: [
      { text: "Bacilos", correct: true },
      { text: "Cocos", correct: false },
      { text: "Espirilos", correct: false },
      { text: "Espiroquetas", correct: false }
    ]
  },
  {
    question: "¿Qué tipo de bacteria tiene forma helicoidal rígida?",
    answers: [
      { text: "Espirilos", correct: true },
      { text: "Cocos", correct: false },
      { text: "Bacilos", correct: false },
      { text: "Cianobacterias", correct: false }
    ]
  },
  {
    question: "¿Qué bacterias tienen forma helicoidal flexible?",
    answers: [
      { text: "Espiroquetas", correct: true },
      { text: "Cocos", correct: false },
      { text: "Vibrios", correct: false },
      { text: "Actinobacterias", correct: false }
    ]
  },
  {
    question: "¿Qué tipo de bacterias presentan forma de coma o curvatura ligera?",
    answers: [
      { text: "Vibrios", correct: true },
      { text: "Cocos", correct: false },
      { text: "Bacilos", correct: false },
      { text: "Espirilos", correct: false }
    ]
  }
];

const preguntasTema4 = [
  {
    question: "¿Qué estructura protege a las bacterias del ataque de fagocitos?",
    answers: [
      { text: "Cápsula", correct: true },
      { text: "Pared celular", correct: false },
      { text: "Membrana citoplasmática", correct: false },
      { text: "Flagelo", correct: false }
    ]
  },
  {
    question: "¿Qué componente bacteriano es responsable del soporte estructural y forma de la célula?",
    answers: [
      { text: "Pared celular", correct: true },
      { text: "Ribosoma", correct: false },
      { text: "Cápsula", correct: false },
      { text: "Plásmido", correct: false }
    ]
  },
  {
    question: "¿Cuál es el principal componente de la pared celular bacteriana Gram positiva?",
    answers: [
      { text: "Peptidoglucano", correct: true },
      { text: "Lipopolisacárido", correct: false },
      { text: "Quitina", correct: false },
      { text: "Celulosa", correct: false }
    ]
  },
  {
    question: "¿Qué estructura bacteriana regula el paso de sustancias hacia el interior y exterior de la célula?",
    answers: [
      { text: "Membrana citoplasmática", correct: true },
      { text: "Flagelo", correct: false },
      { text: "Pared celular", correct: false },
      { text: "Cápsula", correct: false }
    ]
  },
  {
    question: "¿Qué son los plasmidios en las bacterias?",
    answers: [
      { text: "Moléculas circulares de ADN extracromosomal", correct: true },
      { text: "Fragmentos de ARN", correct: false },
      { text: "Orgánulos respiratorios", correct: false },
      { text: "Proteínas estructurales", correct: false }
    ]
  },
  {
    question: "¿Qué función tienen los ribosomas en la célula bacteriana?",
    answers: [
      { text: "Síntesis de proteínas", correct: true },
      { text: "Movimiento celular", correct: false },
      { text: "Replicación de ADN", correct: false },
      { text: "Producción de energía", correct: false }
    ]
  },
  {
    question: "¿Qué estructura permite el movimiento de algunas bacterias?",
    answers: [
      { text: "Flagelo", correct: true },
      { text: "Cápsula", correct: false },
      { text: "Fimbrias", correct: false },
      { text: "Pared celular", correct: false }
    ]
  },
  {
    question: "¿Cómo se llama la región donde se encuentra el material genético en bacterias?",
    answers: [
      { text: "Nucleoide", correct: true },
      { text: "Núcleo", correct: false },
      { text: "Plásmido", correct: false },
      { text: "Orgánulo central", correct: false }
    ]
  },
  {
    question: "¿Qué estructura bacteriana es usada para adherirse a superficies?",
    answers: [
      { text: "Fimbrias", correct: true },
      { text: "Flagelos", correct: false },
      { text: "Ribosomas", correct: false },
      { text: "Cápsula", correct: false }
    ]
  },
  {
    question: "¿Qué componente es exclusivo de las bacterias Gram negativas?",
    answers: [
      { text: "Membrana externa con lipopolisacáridos", correct: true },
      { text: "Peptidoglucano grueso", correct: false },
      { text: "Ácido teicoico", correct: false },
      { text: "Espora interna", correct: false }
    ]
  },
  {
    question: "¿Qué estructuras forman las esporas bacterianas?",
    answers: [
      { text: "Estructuras resistentes de supervivencia", correct: true },
      { text: "Mecanismos de locomoción", correct: false },
      { text: "Partículas alimenticias", correct: false },
      { text: "Pigmentos de defensa", correct: false }
    ]
  },
  {
    question: "¿Qué función tienen las cápsulas en algunas bacterias?",
    answers: [
      { text: "Protección contra desecación y fagocitosis", correct: true },
      { text: "Producción de energía", correct: false },
      { text: "Síntesis de proteínas", correct: false },
      { text: "Replicación de ADN", correct: false }
    ]
  },
  {
    question: "¿Cuál es una diferencia principal entre bacterias Gram positivas y Gram negativas?",
    answers: [
      { text: "Espesor de la pared de peptidoglucano", correct: true },
      { text: "Tamaño del flagelo", correct: false },
      { text: "Número de plásmidos", correct: false },
      { text: "Presencia de núcleo verdadero", correct: false }
    ]
  },
  {
    question: "¿Qué bacterias pueden formar endosporas altamente resistentes?",
    answers: [
      { text: "Bacillus y Clostridium", correct: true },
      { text: "E. coli y Salmonella", correct: false },
      { text: "Vibrio y Campylobacter", correct: false },
      { text: "Streptococcus y Staphylococcus", correct: false }
    ]
  },
  {
    question: "¿Qué característica tiene el ADN bacteriano?",
    answers: [
      { text: "Es circular y no está rodeado por membrana", correct: true },
      { text: "Está rodeado por doble membrana nuclear", correct: false },
      { text: "Es lineal y fragmentado", correct: false },
      { text: "Está contenido en orgánulos especializados", correct: false }
    ]
  }
];

const preguntasTema5 = [
  {
    question: "¿Qué tipo de metabolismo requiere oxígeno para generar energía?",
    answers: [
      { text: "Aeróbico", correct: true },
      { text: "Anaeróbico", correct: false },
      { text: "Fermentativo", correct: false },
      { text: "Fotosintético", correct: false }
    ]
  },
  {
    question: "¿Cómo se llama el proceso bacteriano de obtención de energía sin oxígeno?",
    answers: [
      { text: "Fermentación", correct: true },
      { text: "Fotosíntesis", correct: false },
      { text: "Respiración aeróbica", correct: false },
      { text: "Metanogénesis", correct: false }
    ]
  },
  {
    question: "¿Qué fase del crecimiento bacteriano se caracteriza por un aumento exponencial en número?",
    answers: [
      { text: "Fase logarítmica", correct: true },
      { text: "Fase de latencia", correct: false },
      { text: "Fase estacionaria", correct: false },
      { text: "Fase de muerte", correct: false }
    ]
  },
  {
    question: "¿Qué ocurre durante la fase de latencia en el crecimiento bacteriano?",
    answers: [
      { text: "No hay incremento en número de células", correct: true },
      { text: "Las bacterias se multiplican rápidamente", correct: false },
      { text: "Todas las bacterias mueren", correct: false },
      { text: "Forman endosporas inmediatamente", correct: false }
    ]
  },
  {
    question: "¿Qué es un cultivo axénico?",
    answers: [
      { text: "Un cultivo de una sola especie de microorganismo", correct: true },
      { text: "Una mezcla de varios microorganismos", correct: false },
      { text: "Un cultivo contaminado", correct: false },
      { text: "Un cultivo sin nutrientes", correct: false }
    ]
  },
  {
    question: "¿Cuál es el principal gas utilizado por las bacterias anaerobias estrictas?",
    answers: [
      { text: "Nitrógeno", correct: false },
      { text: "Dióxido de carbono", correct: false },
      { text: "Metano", correct: false },
      { text: "No utilizan oxígeno", correct: true }
    ]
  },
  {
    question: "¿Qué nombre recibe un medio que favorece el crecimiento de ciertos microorganismos y inhibe otros?",
    answers: [
      { text: "Medio selectivo", correct: true },
      { text: "Medio diferencial", correct: false },
      { text: "Medio enriquecido", correct: false },
      { text: "Medio sintético", correct: false }
    ]
  },
  {
    question: "¿Qué tipo de bacterias crecen mejor a temperaturas entre 20°C y 45°C?",
    answers: [
      { text: "Mesófilas", correct: true },
      { text: "Termófilas", correct: false },
      { text: "Psicrófilas", correct: false },
      { text: "Halófilas", correct: false }
    ]
  },
  {
    question: "¿Qué componente principal proporciona energía a las bacterias?",
    answers: [
      { text: "Glucosa", correct: true },
      { text: "Proteínas", correct: false },
      { text: "Lípidos", correct: false },
      { text: "Ácidos nucleicos", correct: false }
    ]
  },
  {
    question: "¿Qué molécula es el producto final de la glucólisis en bacterias?",
    answers: [
      { text: "Piruvato", correct: true },
      { text: "Lactato", correct: false },
      { text: "Ácido acético", correct: false },
      { text: "Etanol", correct: false }
    ]
  },
  {
    question: "¿Qué medio de cultivo permite distinguir entre bacterias fermentadoras y no fermentadoras de lactosa?",
    answers: [
      { text: "Agar MacConkey", correct: true },
      { text: "Agar sangre", correct: false },
      { text: "Agar chocolate", correct: false },
      { text: "Agar Sabouraud", correct: false }
    ]
  },
  {
    question: "¿Qué coloración indica fermentación de lactosa en agar MacConkey?",
    answers: [
      { text: "Colonias rosas", correct: true },
      { text: "Colonias verdes", correct: false },
      { text: "Colonias transparentes", correct: false },
      { text: "Colonias negras", correct: false }
    ]
  },
  {
    question: "¿Qué tipo de bacterias crecen en el agar sangre?",
    answers: [
      { text: "Bacterias fastidiosas", correct: true },
      { text: "Bacterias halófilas", correct: false },
      { text: "Cianobacterias", correct: false },
      { text: "Arqueas", correct: false }
    ]
  },
  {
    question: "¿Qué tipo de medio es el agar Sabouraud?",
    answers: [
      { text: "Medio selectivo para hongos", correct: true },
      { text: "Medio diferencial para bacterias", correct: false },
      { text: "Medio enriquecido para protozoos", correct: false },
      { text: "Medio sintético para virus", correct: false }
    ]
  },
  {
    question: "¿Qué significa 'fastidiosas' en bacterias?",
    answers: [
      { text: "Necesitan condiciones especiales para crecer", correct: true },
      { text: "Crecen en cualquier ambiente", correct: false },
      { text: "Son bacterias multirresistentes", correct: false },
      { text: "Carecen de pared celular", correct: false }
    ]
  },
  {
    question: "¿Qué método se utiliza para contar bacterias viables?",
    answers: [
      { text: "Recuento de colonias en placa", correct: true },
      { text: "Espectrofotometría directa", correct: false },
      { text: "Medición de peso seco", correct: false },
      { text: "Coloración de Gram", correct: false }
    ]
  },
  {
    question: "¿Qué término describe el crecimiento de bacterias en la superficie de un medio sólido?",
    answers: [
      { text: "Colonia bacteriana", correct: true },
      { text: "Biofilm", correct: false },
      { text: "Endospora", correct: false },
      { text: "Quiste", correct: false }
    ]
  },
  {
    question: "¿Qué son los medios de cultivo enriquecidos?",
    answers: [
      { text: "Medios con nutrientes adicionales para bacterias exigentes", correct: true },
      { text: "Medios sin nutrientes", correct: false },
      { text: "Medios contaminados", correct: false },
      { text: "Medios para bacterias anaeróbicas", correct: false }
    ]
  },
  {
    question: "¿Qué sustancia solidifica los medios de cultivo?",
    answers: [
      { text: "Agar-agar", correct: true },
      { text: "Gelatina", correct: false },
      { text: "Almidón", correct: false },
      { text: "Quitina", correct: false }
    ]
  },
  {
    question: "¿Qué significa 'halófilas' en bacterias?",
    answers: [
      { text: "Bacterias que toleran altas concentraciones de sal", correct: true },
      { text: "Bacterias que viven en ambientes ácidos", correct: false },
      { text: "Bacterias que forman esporas", correct: false },
      { text: "Bacterias sensibles al oxígeno", correct: false }
    ]
  },
  {
    question: "¿Qué fase del crecimiento bacteriano ocurre cuando la tasa de muerte supera la de reproducción?",
    answers: [
      { text: "Fase de declinación", correct: true },
      { text: "Fase logarítmica", correct: false },
      { text: "Fase de latencia", correct: false },
      { text: "Fase estacionaria", correct: false }
    ]
  },
  {
    question: "¿Qué tipo de bacterias prefieren temperaturas frías para crecer?",
    answers: [
      { text: "Psicrófilas", correct: true },
      { text: "Mesófilas", correct: false },
      { text: "Termófilas", correct: false },
      { text: "Halófilas", correct: false }
    ]
  },
  {
    question: "¿Qué técnica permite observar la movilidad bacteriana en fresco?",
    answers: [
      { text: "Observación en gota pendiente", correct: true },
      { text: "Tinción de Gram", correct: false },
      { text: "Cultivo en placa", correct: false },
      { text: "Electroforesis de ADN", correct: false }
    ]
  },
  {
    question: "¿Qué factor ambiental influye en la morfología de colonias bacterianas?",
    answers: [
      { text: "Composición del medio de cultivo", correct: true },
      { text: "Uso de antibióticos", correct: false },
      { text: "Tipo de tinción utilizada", correct: false },
      { text: "Presión atmosférica", correct: false }
    ]
  }
];

const preguntasTema6 = [
  {
    question: "¿Cómo se denomina el conjunto de información genética de una bacteria?",
    answers: [
      { text: "Genoma", correct: true },
      { text: "Proteoma", correct: false },
      { text: "Plásmido", correct: false },
      { text: "Cromátida", correct: false }
    ]
  },
  {
    question: "¿Qué tipo de ADN poseen las bacterias?",
    answers: [
      { text: "ADN circular y doble cadena", correct: true },
      { text: "ADN lineal y simple cadena", correct: false },
      { text: "ADN lineal y doble cadena", correct: false },
      { text: "ARN circular", correct: false }
    ]
  },
  {
    question: "¿Qué es un plásmido?",
    answers: [
      { text: "Fragmento de ADN extracromosomal", correct: true },
      { text: "Un orgánulo respiratorio", correct: false },
      { text: "Una proteína de membrana", correct: false },
      { text: "Un lípido estructural", correct: false }
    ]
  },
  {
    question: "¿Cómo se llama la transferencia directa de ADN de una bacteria a otra?",
    answers: [
      { text: "Conjugación", correct: true },
      { text: "Transformación", correct: false },
      { text: "Transducción", correct: false },
      { text: "Replicación", correct: false }
    ]
  },
  {
    question: "¿Qué estructura bacteriana es esencial para la conjugación?",
    answers: [
      { text: "Pili sexuales", correct: true },
      { text: "Flagelos", correct: false },
      { text: "Fimbrias", correct: false },
      { text: "Cápsula", correct: false }
    ]
  },
  {
    question: "¿Cómo se denomina la captación de ADN libre del ambiente por una bacteria?",
    answers: [
      { text: "Transformación", correct: true },
      { text: "Conjugación", correct: false },
      { text: "Mutación", correct: false },
      { text: "Transcripción", correct: false }
    ]
  },
  {
    question: "¿Qué agente facilita la transferencia genética mediante virus bacteriófagos?",
    answers: [
      { text: "Transducción", correct: true },
      { text: "Conjugación", correct: false },
      { text: "Transformación", correct: false },
      { text: "Endocitosis", correct: false }
    ]
  },
  {
    question: "¿Cómo se llama el cambio permanente en la secuencia de ADN bacteriano?",
    answers: [
      { text: "Mutación", correct: true },
      { text: "Replicación", correct: false },
      { text: "Transcripción", correct: false },
      { text: "Traducción", correct: false }
    ]
  },
  {
    question: "¿Qué término describe la capacidad de un plásmido de transferirse de una bacteria a otra?",
    answers: [
      { text: "Conjugativo", correct: true },
      { text: "Transformante", correct: false },
      { text: "Recombinante", correct: false },
      { text: "Mutagénico", correct: false }
    ]
  },
  {
    question: "¿Qué nombre recibe el plásmido que otorga resistencia a antibióticos?",
    answers: [
      { text: "Plásmido R", correct: true },
      { text: "Plásmido F", correct: false },
      { text: "Plásmido S", correct: false },
      { text: "Plásmido T", correct: false }
    ]
  },
  {
    question: "¿Qué enzima es necesaria para replicar el ADN en bacterias?",
    answers: [
      { text: "ADN polimerasa", correct: true },
      { text: "ARN polimerasa", correct: false },
      { text: "Transcriptasa inversa", correct: false },
      { text: "Helicasa viral", correct: false }
    ]
  },
  {
    question: "¿Cómo se llama el proceso de síntesis de ARN a partir del ADN?",
    answers: [
      { text: "Transcripción", correct: true },
      { text: "Traducción", correct: false },
      { text: "Replicación", correct: false },
      { text: "Transformación", correct: false }
    ]
  },
  {
    question: "¿Qué proceso sigue a la transcripción para sintetizar proteínas?",
    answers: [
      { text: "Traducción", correct: true },
      { text: "Mutación", correct: false },
      { text: "Conjugación", correct: false },
      { text: "Transformación", correct: false }
    ]
  },
  {
    question: "¿Qué nombre recibe el conjunto de genes organizados funcionalmente en bacterias?",
    answers: [
      { text: "Operón", correct: true },
      { text: "Plásmido", correct: false },
      { text: "Genotipo", correct: false },
      { text: "Transcriptoma", correct: false }
    ]
  },
  {
    question: "¿Qué ejemplo clásico describe un operón regulador en bacterias?",
    answers: [
      { text: "Operón lac", correct: true },
      { text: "Operón vir", correct: false },
      { text: "Operón spo", correct: false },
      { text: "Operón tox", correct: false }
    ]
  }
];

const preguntasTema7 = [
  {
    question: "¿Qué es la ingeniería genética?",
    answers: [
      { text: "Manipulación directa del ADN de un organismo", correct: true },
      { text: "Selección natural de especies", correct: false },
      { text: "Formación espontánea de genes", correct: false },
      { text: "Síntesis de proteínas en laboratorio", correct: false }
    ]
  },
  {
    question: "¿Cuál es la herramienta más utilizada para cortar fragmentos de ADN?",
    answers: [
      { text: "Enzimas de restricción", correct: true },
      { text: "Ribozimas", correct: false },
      { text: "Polimerasas", correct: false },
      { text: "Ligasa", correct: false }
    ]
  },
  {
    question: "¿Qué nombre recibe el ADN formado por la unión de fragmentos de diferentes fuentes?",
    answers: [
      { text: "ADN recombinante", correct: true },
      { text: "ADN replicado", correct: false },
      { text: "ADN de transferencia", correct: false },
      { text: "ADN polimérico", correct: false }
    ]
  },
  {
    question: "¿Qué es un plásmido en ingeniería genética?",
    answers: [
      { text: "Vector utilizado para transferir genes", correct: true },
      { text: "Enzima que sintetiza ADN", correct: false },
      { text: "Proteína de transporte", correct: false },
      { text: "Molécula de ARN viral", correct: false }
    ]
  },
  {
    question: "¿Qué proceso permite introducir ADN recombinante en una célula huésped?",
    answers: [
      { text: "Transformación", correct: true },
      { text: "Transducción", correct: false },
      { text: "Conjugación", correct: false },
      { text: "Mutación espontánea", correct: false }
    ]
  },
  {
    question: "¿Qué enzima une fragmentos de ADN durante la creación de ADN recombinante?",
    answers: [
      { text: "Ligasa", correct: true },
      { text: "Helicasa", correct: false },
      { text: "Topoisomerasa", correct: false },
      { text: "Primasa", correct: false }
    ]
  },
  {
    question: "¿Qué organismo es comúnmente utilizado para producir proteínas humanas mediante ingeniería genética?",
    answers: [
      { text: "Escherichia coli", correct: true },
      { text: "Saccharomyces cerevisiae", correct: false },
      { text: "Bacillus subtilis", correct: false },
      { text: "Mycobacterium tuberculosis", correct: false }
    ]
  },
  {
    question: "¿Qué técnica permite amplificar millones de copias de un fragmento de ADN?",
    answers: [
      { text: "Reacción en cadena de la polimerasa (PCR)", correct: true },
      { text: "Electroforesis", correct: false },
      { text: "Western blot", correct: false },
      { text: "Cromatografía de ADN", correct: false }
    ]
  },
  {
    question: "¿Qué significa OGM en biotecnología?",
    answers: [
      { text: "Organismo Genéticamente Modificado", correct: true },
      { text: "Operón Genético Modulado", correct: false },
      { text: "Orgánulo Germinal Móvil", correct: false },
      { text: "Orden General de Mutaciones", correct: false }
    ]
  },
  {
    question: "¿Qué técnica moderna permite editar genes de manera precisa?",
    answers: [
      { text: "CRISPR-Cas9", correct: true },
      { text: "Southern blot", correct: false },
      { text: "Electroporación", correct: false },
      { text: "Microinyección", correct: false }
    ]
  },
  {
    question: "¿Qué función tienen las enzimas Cas9 en el sistema CRISPR?",
    answers: [
      { text: "Cortar el ADN en sitios específicos", correct: true },
      { text: "Replicar fragmentos de ADN", correct: false },
      { text: "Unir moléculas de ARN", correct: false },
      { text: "Sintetizar proteínas", correct: false }
    ]
  },
  {
    question: "¿Cuál es una aplicación médica de la ingeniería genética?",
    answers: [
      { text: "Producción de insulina recombinante", correct: true },
      { text: "Síntesis de glucosa en plantas", correct: false },
      { text: "Formación de cristales proteicos", correct: false },
      { text: "Purificación de agua salada", correct: false }
    ]
  },
  {
    question: "¿Qué organismo es frecuentemente utilizado para modificaciones genéticas en plantas?",
    answers: [
      { text: "Agrobacterium tumefaciens", correct: true },
      { text: "Streptococcus pyogenes", correct: false },
      { text: "Pseudomonas aeruginosa", correct: false },
      { text: "Listeria monocytogenes", correct: false }
    ]
  },
  {
    question: "¿Qué nombre recibe el proceso de introducir genes directamente en células vegetales usando una pistola de genes?",
    answers: [
      { text: "Biobalística", correct: true },
      { text: "Electrotransfección", correct: false },
      { text: "Transducción viral", correct: false },
      { text: "Microinyección genética", correct: false }
    ]
  },
  {
    question: "¿Qué componente guía a la enzima Cas9 al sitio específico de corte en el ADN?",
    answers: [
      { text: "ARN guía (gRNA)", correct: true },
      { text: "Proteína ribosomal", correct: false },
      { text: "Enzima de restricción", correct: false },
      { text: "Plásmido conjugativo", correct: false }
    ]
  }
];

const preguntasTema8 = [
  {
    question: "¿Qué es la esterilización?",
    answers: [
      { text: "Eliminación total de microorganismos, incluidas esporas", correct: true },
      { text: "Reducción parcial de microorganismos", correct: false },
      { text: "Eliminación de suciedad visible", correct: false },
      { text: "Inactivación solo de virus", correct: false }
    ]
  },
  {
    question: "¿Qué método utiliza vapor a alta presión para esterilizar?",
    answers: [
      { text: "Autoclave", correct: true },
      { text: "Filtración", correct: false },
      { text: "Radiación ultravioleta", correct: false },
      { text: "Baño María", correct: false }
    ]
  },
  {
    question: "¿Qué temperatura estándar se utiliza en el autoclave para esterilización?",
    answers: [
      { text: "121 °C", correct: true },
      { text: "100 °C", correct: false },
      { text: "80 °C", correct: false },
      { text: "140 °C", correct: false }
    ]
  },
  {
    question: "¿Qué proceso utiliza calor seco para esterilizar materiales?",
    answers: [
      { text: "Horno Pasteur", correct: true },
      { text: "Autoclave", correct: false },
      { text: "Filtración", correct: false },
      { text: "Radiación gamma", correct: false }
    ]
  },
  {
    question: "¿Qué agente físico permite la esterilización sin utilizar calor?",
    answers: [
      { text: "Radiación ionizante", correct: true },
      { text: "Baño de agua", correct: false },
      { text: "Refrigeración", correct: false },
      { text: "Pasteurización", correct: false }
    ]
  },
  {
    question: "¿Qué es la desinfección?",
    answers: [
      { text: "Eliminación de microorganismos patógenos en superficies inertes", correct: true },
      { text: "Esterilización total", correct: false },
      { text: "Limpieza mecánica de materiales", correct: false },
      { text: "Eliminación solo de hongos", correct: false }
    ]
  },
  {
    question: "¿Qué agente químico es un desinfectante común?",
    answers: [
      { text: "Hipoclorito de sodio", correct: true },
      { text: "Glicerina", correct: false },
      { text: "Etanol al 30%", correct: false },
      { text: "Agua destilada", correct: false }
    ]
  },
  {
    question: "¿Qué sustancia es eficaz para la antisepsia de la piel?",
    answers: [
      { text: "Alcohol al 70%", correct: true },
      { text: "Cloro puro", correct: false },
      { text: "Peróxido de hidrógeno concentrado", correct: false },
      { text: "Formaldehído", correct: false }
    ]
  },
  {
    question: "¿Qué método de esterilización se utiliza para líquidos termosensibles?",
    answers: [
      { text: "Filtración con membranas", correct: true },
      { text: "Autoclave", correct: false },
      { text: "Incineración", correct: false },
      { text: "Horno de calor seco", correct: false }
    ]
  },
  {
    question: "¿Qué parámetro es crucial para una esterilización efectiva en autoclave?",
    answers: [
      { text: "Tiempo, temperatura y presión", correct: true },
      { text: "Solamente el tiempo de exposición", correct: false },
      { text: "Solamente la humedad del aire", correct: false },
      { text: "Presión atmosférica estándar", correct: false }
    ]
  },
  {
    question: "¿Qué significa un agente bactericida?",
    answers: [
      { text: "Mata bacterias", correct: true },
      { text: "Inhibe crecimiento bacteriano", correct: false },
      { text: "Elimina virus exclusivamente", correct: false },
      { text: "Cambia la estructura del ADN", correct: false }
    ]
  },
  {
    question: "¿Qué agente físico elimina microorganismos mediante calor húmedo sin presión?",
    answers: [
      { text: "Pasteurización", correct: true },
      { text: "Ebullición simple", correct: false },
      { text: "Desecación", correct: false },
      { text: "Filtración", correct: false }
    ]
  },
  {
    question: "¿Qué tipo de radiación se usa para esterilizar material plástico sensible al calor?",
    answers: [
      { text: "Radiación gamma", correct: true },
      { text: "Radiación UV", correct: false },
      { text: "Microondas", correct: false },
      { text: "Radiación infrarroja", correct: false }
    ]
  },
  {
    question: "¿Cuál es una ventaja del uso de autoclave frente al horno de calor seco?",
    answers: [
      { text: "Requiere menor temperatura y tiempo", correct: true },
      { text: "Mayor resistencia a corrosión", correct: false },
      { text: "Mayor rapidez en enfriamiento del material", correct: false },
      { text: "No requiere agua para funcionar", correct: false }
    ]
  },
  {
    question: "¿Qué agente químico es utilizado en la esterilización gaseosa de material sensible al calor?",
    answers: [
      { text: "Óxido de etileno", correct: true },
      { text: "Formaldehído líquido", correct: false },
      { text: "Hipoclorito de calcio", correct: false },
      { text: "Etanol al 95%", correct: false }
    ]
  }
];


let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const themeButtons = document.querySelectorAll('.theme-btn');
const startContainer = document.getElementById('start-container');
const themeSelection = document.getElementById('theme-selection');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreText = document.getElementById('score-text');

startButton.addEventListener('click', () => {
  startContainer.classList.add('hide');
  themeSelection.classList.remove('hide');
});

themeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedTheme = button.getAttribute('data-theme');
    loadTheme(selectedTheme);
  });
});

restartButton.addEventListener('click', restartQuiz);
nextButton.addEventListener('click', nextQuestion);

function loadTheme(theme) {
  switch (theme) {
    case 'tema1':
      currentQuestions = [...preguntasTema1];
      break;
    case 'tema2':
      currentQuestions = [...preguntasTema2];
      break;
    case 'tema3':
      currentQuestions = [...preguntasTema3];
      break;
    case 'tema4':
      currentQuestions = [...preguntasTema4];
      break;
    case 'tema5':
      currentQuestions = [...preguntasTema5];
      break;
    case 'tema6':
      currentQuestions = [...preguntasTema6];
      break;
    case 'tema7':
      currentQuestions = [...preguntasTema7];
      break;
    case 'tema8':
      currentQuestions = [...preguntasTema8];
      break;
    case 'todos':
      currentQuestions = [
        ...preguntasTema1,
        ...preguntasTema2,
        ...preguntasTema3,
        ...preguntasTema4,
        ...preguntasTema5,
        ...preguntasTema6,
        ...preguntasTema7,
        ...preguntasTema8
      ];
      break;
  }
  shuffleQuestions();
  startQuiz();
}

function shuffleQuestions() {
  for (let i = currentQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentQuestions[i], currentQuestions[j]] = [currentQuestions[j], currentQuestions[i]];
  }
}

function startQuiz() {
  themeSelection.classList.add('hide');
  questionContainer.classList.remove('hide');
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  let current = currentQuestions[currentQuestionIndex];
  questionElement.innerText = current.question;
  current.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(button, answer.correct));
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add('hide');
  answerButtonsElement.innerHTML = '';
}

function selectAnswer(selectedButton, correct) {
  const buttons = Array.from(answerButtonsElement.children);
  buttons.forEach(button => button.disabled = true);
  if (correct) {
    selectedButton.classList.add('correct');
    score++;
  } else {
    selectedButton.classList.add('wrong');
    showCorrectAnswer();
  }
  nextButton.classList.remove('hide');
}

function showCorrectAnswer() {
  const buttons = Array.from(answerButtonsElement.children);
  buttons.forEach(button => {
    const answerText = button.innerText;
    const correctAnswer = currentQuestions[currentQuestionIndex].answers.find(a => a.text === answerText && a.correct);
    if (correctAnswer) {
      button.classList.add('correct');
    }
  });
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionContainer.classList.add('hide');
  resultContainer.classList.remove('hide');
  scoreText.innerText = `Obtuviste ${score} de ${currentQuestions.length} puntos.`;
}

function restartQuiz() {
  resultContainer.classList.add('hide');
  startContainer.classList.remove('hide');
}
