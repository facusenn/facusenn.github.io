// Lista de proyectos y hackatones que se muestran en la página.
// Para agregar uno nuevo, copiá un bloque y cambiá los datos.
//   image: ruta a una imagen en assets/ (opcional; si no hay, se dibuja un ícono)
//   icon:  web | chip | leaf | water | shield | trophy | code | grid
//   link:  URL del repo o demo (opcional; hace la tarjeta clickeable)

window.PROJECTS = [
  {
    title: 'Errante — Reservas para estudio de tatuajes',
    year: '2026',
    description:
      'Web completa para un estudio de tatuajes: portfolio con galería, presupuestador online ' +
      'que calcula el estimado en vivo según tamaño y zona, agenda de turnos y panel de ' +
      'administración (reservas, precios, fotos y export a Excel). Integración opcional con ' +
      'WhatsApp y Google Calendar, modo claro/oscuro y empaquetado en Docker.',
    tags: ['Python', 'Flask', 'SQLAlchemy', 'Docker'],
    icon: 'web',
    link: 'https://errantes.ar',
  },
  {
    title: 'Telemetría de tanque australiano y molino',
    year: '2024',
    description:
      'Equipo autónomo instalado en un campo sin red eléctrica para controlar el agua del ganado. ' +
      'Mide el nivel del tanque australiano con un sensor de distancia láser VL53L0X y el ' +
      'funcionamiento del molino que lo alimenta con sensores de efecto Hall. Envía los datos ' +
      'por SMS e internet con un módulo SIM800L y se alimenta con paneles solares y baterías 18650. ' +
      'Hoy está instalado y funcionando en el campo.',
    tags: ['C++', 'STM32', 'VL53L0X', 'SIM800L', 'Energía solar'],
    icon: 'water',
  },
  {
    title: 'Dispositivo IoT para monitoreo de cultivos — Taltrast',
    year: 'En curso',
    description:
      'Diseño y programación de un dispositivo que controla humedad, temperatura e iluminación ' +
      'en cultivos, con conectividad WiFi. Integración de sensores y automatización de procesos ' +
      'para mejorar el rendimiento del cultivo.',
    tags: ['C++', 'Sistemas embebidos', 'PCB', 'WiFi'],
    icon: 'leaf',
  },
  {
    title: 'Simulador de enrutamiento OSPF con Dijkstra',
    year: '2026',
    description:
      'Simulador de red en C que calcula las rutas más cortas entre routers con el algoritmo de ' +
      'Dijkstra, en dos versiones (O(N²) y con min-heap). Código modular, 64 pruebas ' +
      'automáticas, verificación de memoria con valgrind e integración continua en GitHub Actions.',
    tags: ['C', 'Grafos', 'Algoritmos', 'Testing'],
    icon: 'chip',
    link: 'https://github.com/facusenn/simulador-enrutamiento-dijkstra',
  },
  {
    title: 'Hongomatic 2.0',
    year: '2025',
    description:
      'Dashboard IoT para monitorear un cultivo de hongos. Un ESP32 lee temperatura, humedad ' +
      'y CO₂ (AHT + MQ-135) y sirve una página web propia con gráficos que se actualizan en ' +
      'tiempo real.',
    tags: ['C++', 'ESP32', 'PlatformIO', 'JavaScript'],
    icon: 'chip',
  },
  {
    title: 'Hongomatic',
    year: '2025',
    description:
      'Primera versión del controlador de cultivo: medición de temperatura, humedad y CO₂ ' +
      'con compensación por temperatura/humedad del sensor MQ-135 y calibración por botón.',
    tags: ['C++', 'ESP32', 'Sensores'],
    icon: 'leaf',
  },
  {
    title: 'Lights Out en C',
    year: '2026',
    description:
      'Juego de consola: un tablero de luces donde cada jugada invierte la celda elegida y sus ' +
      'vecinas. Tableros de 3x3 a 5x5, configuraciones iniciales al azar, estadísticas por ' +
      'tamaño y validación completa de la entrada.',
    tags: ['C', 'Matrices', 'Consola'],
    icon: 'grid',
    link: 'https://github.com/facusenn/lights-out-c',
  },
  {
    title: 'Ejercicios de Haskell',
    year: '2026',
    description:
      'Programación funcional: recursión, pattern matching, listas por comprensión y funciones ' +
      'de alto orden, con pruebas automáticas para cada función.',
    tags: ['Haskell', 'Programación funcional'],
    icon: 'code',
    link: 'https://github.com/facusenn/haskell-ejercicios',
  },
  {
    title: 'Ejercicios de C y C++',
    year: '2026',
    description:
      'Arreglos (partición en el lugar en O(n)), memoria dinámica con malloc/realloc, ' +
      'estructuras y punteros, y una calculadora en C++. Compilan sin warnings y sin fugas de memoria.',
    tags: ['C', 'C++', 'Memoria dinámica'],
    icon: 'code',
    link: 'https://github.com/facusenn/c-ejercicios',
  },
  {
    title: 'Hallazgo de seguridad en sistema de premios — Samsung',
    year: '2022',
    description:
      'Encontré una falla en un sistema de validación de códigos: una API devolvía si un SKU ' +
      'existía o no, sin límites de consulta. Con Python analicé los datos de los códigos ya ' +
      'conocidos para estimar qué caracteres eran más probables en cada posición y acotar el ' +
      'espacio de búsqueda. El trabajo fue sobre todo de análisis de datos; lo documenté como ' +
      'un reporte de la vulnerabilidad y sus posibles mitigaciones.',
    tags: ['Python', 'Seguridad', 'Análisis de datos', 'APIs'],
    icon: 'shield',
  },
];

window.HACKATHONS = [
  {
    title: 'SOMA — Historial de salud con IA',
    year: 'Shippear 2026',
    description:
      'Plataforma donde el paciente registra por voz síntomas, medicación y estudios. Los modelos ' +
      'de lenguaje extraen los datos de PDFs y fotos de estudios, arman una línea de tiempo y ' +
      'generan un resumen para llevar a la consulta médica. Incluye una API REST para que ' +
      'agentes externos (Claude, Gemini, ChatGPT) registren y consulten la historia.',
    tags: ['IA generativa', 'LLMs', 'Python', 'Flask', 'API REST', 'Render'],
    icon: 'trophy',
    link: 'https://soma-2sxx.onrender.com/',
  },
  {
    title: 'Peloco — Asistente IA para turnos',
    year: 'DonWeb Hack · DonWeb Day 2026',
    description:
      'Asistente de IA con tool calling que responde consultas y reserva turnos sobre la agenda ' +
      'real del negocio, por la web y por WhatsApp. Un panel junta los turnos de todos los canales ' +
      'y la IA convierte chats pegados en turnos estructurados. Integración con Google Calendar.',
    tags: ['IA generativa', 'Tool calling', 'WhatsApp (Twilio)', 'Docker'],
    icon: 'trophy',
    link: 'https://errantes.online',
  },
];
