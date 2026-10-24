// Lista de proyectos que se muestran en la página.
// Para agregar uno nuevo, copiá un bloque y cambiá los datos.
//   image: ruta a una imagen en assets/ (opcional; si no hay, se dibuja un ícono)
//   link:  URL del repo o demo (opcional)
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
    title: 'Monitor de tanque por SMS',
    year: '2023',
    description:
      'Medidor de nivel de agua con sensor ultrasónico, temperatura y humedad sobre STM32. ' +
      'Se consulta y responde por SMS con un módulo GSM SIM800L, y permite agregar números ' +
      'autorizados por mensaje.',
    tags: ['C++', 'STM32', 'GSM', 'Sensores'],
    icon: 'water',
  },
];
