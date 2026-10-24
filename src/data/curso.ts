// 🟢 Archivo actualizado con los prompts completos de las 3 clases, interfaces tipadas y exportación ES6 moderna.

export interface PromptItem {
    id: string;
    code: string;
    title: string;
    tool: 'Claude' | 'Gemini' | 'ChatGPT' | 'General';
    context: string;
    promptText: string;
}

export interface ClassModule {
    classNumber: string;
    title: string;
    description: string;
    guides: string[];
    prompts: PromptItem[];
    audioUrl?: string;
}

export interface UnitModule {
    unitId: string;
    unitTitle: string;
    classes: ClassModule[];
}

export const courseData: UnitModule[] = [
    {
        unitId: 'unidad-1',
        unitTitle: 'Unidad 1: Decidir qué delegar',
        classes: [
            {
                classNumber: 'Clase 01',
                title: 'Qué es y qué no es la IA Generativa',
                description:
                    'Fundamentos de los modelos de lenguaje, el proceso de predicción de tokens, el peligro de las alucinaciones y protocolo de verificación.',
                guides: [
                    'Los modelos no consultan bases de datos estáticas: predicen la palabra más probable palabra por palabra.',
                    'El tono seguro y la excelente redacción no garantizan veracidad (El caso de Marcela).',
                    'Protocolo de verificación en 3 preguntas: Especificidad, Rapidez de comprobación y Costo del error.',
                ],
                prompts: [
                    {
                        id: 'c1-1',
                        code: '01.A',
                        title: 'Prompt para forzar búsqueda y citación de fuentes',
                        tool: 'Gemini',
                        context:
                            'Úsalo para verificar trámites o datos oficiales recientes evitando alucinaciones municipales.',
                        promptText:
                            'Busca en la web los requisitos vigentes para renovar una patente comercial en la Municipalidad de Providencia. Utiliza únicamente información oficial del sitio web municipal y entrega el enlace directo a la fuente para poder verificarlo.',
                    },
                    {
                        id: 'c1-2',
                        code: '01.B',
                        title: 'Prompt analítico para contrastar precios de mercado',
                        tool: 'Claude',
                        context:
                            'Diseñado para desacreditar cifras puntuales inventadas por el modelo en datos económicos.',
                        promptText:
                            'Busca referencias actuales en Chile sobre cuánto cuesta un servicio de flete o mudanza para un departamento de 2 dormitorios dentro de Santiago. No me des un número único exacto; entrégame un rango de precios estimado según el mercado actual e indícame qué variables hacen subir o bajar ese valor.',
                    },
                ],
            },
            {
                classNumber: 'Clase 02',
                title: 'Tres formas de trabajar y tu caso de trabajo',
                description:
                    'Diferenciación operativa entre Ejecución, Trabajo Conjunto y Configuración, y levantamiento del caso de trabajo personal.',
                guides: [
                    'Ejecución: Tareas acotadas con entregable claro y verificable.',
                    'Trabajo Conjunto (Sparring): Analizar decisiones complejas rebotando ángulos y preguntas.',
                    'Configuración: Construir sistemas o plantillas reutilizables (Gems / Projects).',
                ],
                prompts: [
                    {
                        id: 'c2-1',
                        code: '02.A',
                        title: 'Prompt de Trabajo Conjunto (Evitar el error de Tomás)',
                        tool: 'Claude',
                        context:
                            'Para estructurar decisiones complejas como socio estratégico en lugar de aceptar respuestas ciegas.',
                        promptText:
                            'Soy vendedor técnico independiente. Un cliente que representa el 15% de mis ingresos mensuales me pide un 20% de descuento para renovar contrato, amenazando con irse a la competencia. Mi margen bruto actual con él es del 35%. \n\nNo tomes la decisión por mí ni redactes ningún correo todavía. Actúa como un consultor comercial y ayúdame a pensar:\n1. Dame 3 argumentos a favor de ceder y 3 riesgos de hacerlo.\n2. Hazme 3 preguntas clave sobre mi negocio que yo debería responderte antes de tomar esta decisión.\n3. Propón 2 alternativas de negociación donde no baje el precio en dinero, pero le entregue valor.',
                    },
                    {
                        id: 'c2-2',
                        code: '02.B',
                        title: 'Prompt para destrabar el Levantamiento de 10 Tareas',
                        tool: 'General',
                        context:
                            'Asistente interactivo para generar la tabla base de tareas del alumno.',
                        promptText:
                            'Estoy en un curso de IA aplicada al trabajo y necesito definir mi "Caso de Trabajo" levantando una lista de 8 a 10 tareas reales que realizo todas las semanas. Mi rol o rubro es: [INSERTA TU OFICIO O ROL AQUÍ]. Ayúdame a armar una tabla con columnas: [N° | Tarea | Frecuencia (Diaria/Semanal/Mensual) | Tiempo estimado | Modalidad IA sugerida]. Cada tarea debe ser específica, observable y acotada.',
                    },
                ],
            },
            {
                classNumber: 'Clase 03',
                title: 'IA Aplicada: Priorización, Descomposición y Ley 21.719',
                description:
                    'Cálculo del índice de delegabilidad, descomposición tripartita, uso seguro y resguardo de datos personales.',
                guides: [
                    'Fórmula de victorias rápidas: Índice = Frecuencia ÷ Esfuerzo.',
                    'Descomposición de tareas: Ninguna tarea es 100% de la IA ni 100% humana (Humana + IA + Colaborativa).',
                    'Ley N° 21.719 (vigente dic 2026): Prohibición de ingresar RUT, salud y finanzas de terceros a modelos públicos.',
                ],
                audioUrl: '/audios/clase-03.m4a',
                prompts: [
                    {
                        id: 'c3-1',
                        code: '03.A',
                        title: 'Prompt para calcular Índice y Descomposición de Tareas',
                        tool: 'Claude',
                        context:
                            'Procesa matemáticamente la lista de 10 tareas del alumno y genera el desglose operativo.',
                        promptText:
                            'Aquí tienes mi lista de tareas laborales levantadas en la clase anterior: [PEGA TUS TAREAS AQUÍ]. \n\nActúa como un analista de procesos y ayúdame a priorizarlas:\n1. Calcula el "Índice de Delegabilidad" (Frecuencia ÷ Esfuerzo) usando: Frecuencia (Diaria=5, Semanal=3, Mensual=2, Ocasional=1) y Esfuerzo por instancia (Menos de 20 min=1 hasta más de 120 min=5).\n2. Entrégramelas en una tabla ordenada de mayor a menor índice.\n3. Toma las 2 tareas con mayor puntaje y descompón cada una en: "Parte Humana", "Parte de IA" y "Parte Colaborativa".',
                    },
                    {
                        id: 'c3-2',
                        code: '03.B',
                        title: 'Prompt con Marcadores (La solución al Caso de Javiera)',
                        tool: 'General',
                        context:
                            'Técnica segura para redactar documentos complejos sanitizando datos sensibles por cumplimiento legal.',
                        promptText:
                            'Soy administrativo en una clínica dental. Necesito redactar un correo formal enviando un presupuesto de tratamiento odontológico. Por cumplimiento de la Ley N° 21.719, NO te daré datos reales. Redacta el documento dejando marcadores claros entre corchetes como [NOMBRE_PACIENTE], [RUT_PACIENTE], [DIAGNÓSTICO_GENERAL] y [MONTO_TOTAL] para que yo los reemplace manualmente en mi computador antes de enviar. Contexto general: tratamiento de rehabilitación oral en dos etapas con facilidad de pago en 3 cuotas.',
                    },
                ],
            },
        ],
    },

    {
        unitId: 'unidad-2',
        unitTitle: 'Unidad 2: Producir con Claude',
        classes: [
            {
                classNumber: 'Clase 04',
                title: 'Cómo pedirle bien las cosas a Claude',
                description:
                    'Gestión eficiente del plan gratuito de Claude, aplicación del método estructurado O-D-F-R y técnicas de iteración precisa.',
                guides: [
                    'Límite en Claude gratuito: Ventana móvil de 5 horas (15 a 40 mensajes). Agrupa tareas, carga archivos al inicio y edita mensajes para ahorrar cuota.',
                    'El método O-D-F-R: Explicita siempre Objetivo, Destinatario, Formato y Restricciones verificables (Puntaje ideal: 7 a 8 puntos).',
                    'La prueba del colega: Si un compañero sin contexto no entendería tu instrucción, Claude tampoco y rellenará los vacíos con texto genérico.',
                ],
                audioUrl: '/audios/clase-04.m4a',
                prompts: [
                    {
                        id: 'c4-1',
                        code: '04.A',
                        title: 'El Caso de Consuelo resuelto con O-D-F-R (Puntaje 8/8)',
                        tool: 'Claude',
                        context:
                            'Transforma un pedido genérico de redes sociales en una publicación lista para usar con tono, público y restricciones claras.',
                        promptText:
                            'Actúa como especialista en marketing digital para una pyme de indumentaria deportiva. Necesito redactar una publicación bajo estos criterios O-D-F-R:\n- Objetivo: Anunciar el lanzamiento de nuestra nueva línea de poleras técnicas transpirables y generar reservas anticipadas comentando la publicación.\n- Destinatario: Audiencia habitual de Instagram, hombres y mujeres de 20 a 35 años que practican deporte recreativo (running, trekking y gimnasio).\n- Formato: Texto para post de Instagram de máximo 150 palabras, estructurado en párrafos cortos de fácil lectura, tono cercano y motivador, cerrando con un llamado a la acción claro y exactamente 3 hashtags relevantes al final.\n- Restricciones: Es obligatorio mencionar que es una "edición limitada" por lanzamiento. Está estrictamente prohibido usar la palabra "oferta", "barato" o "descuento", y no uses adjetivos superlativos exagerados.',
                    },
                    {
                        id: 'c4-2',
                        code: '04.B',
                        title: 'El Pedido de Rodrigo (Logística B2B + Marcadores Seguros)',
                        tool: 'Claude',
                        context:
                            'Resuelve un reclamo a proveedores combinando estructura O-D-F-R y marcadores de seguridad para proteger datos sensibles.',
                        promptText:
                            'Soy gerente de logística en una distribuidora de ferretería. Redacta una comunicación aplicando estrictamente esta estructura O-D-F-R:\n- Objetivo: Notificar que una entrega reciente llegó con mercadería incompleta y solicitar la reposición urgente indicando una fecha concreta de despacho.\n- Destinatario: Ejecutivo comercial de nuestro proveedor habitual (relación B2B de largo plazo).\n- Formato: Correo electrónico formal y directo, de máximo 120 palabras, dejando visible en el asunto y en el primer párrafo el marcador [NÚMERO_DE_PEDIDO] y una lista breve para completar [DETALLE_ÍTEMS_FALTANTES].\n- Restricciones: Exige confirmación de fecha de reposición antes de las [HORA_LÍMITE] de hoy, pero mantén un tono constructivo: bajo ninguna circunstancia sugieras terminar la relación comercial, aplicar multas ni cancelar el contrato.',
                    },
                    {
                        id: 'c4-3',
                        code: '04.C',
                        title: 'Auditor y Optimizador Automático O-D-F-R',
                        tool: 'General',
                        context:
                            'Meta-prompt para autoevaluar cualquier instrucción de 0 a 8 puntos y reescribirla con alta especificidad antes de ejecutarla.',
                        promptText:
                            'Quiero que evalúes y mejores una instrucción antes de ejecutarla. Aquí está mi borrador inicial: "[PEGA AQUÍ TU INSTRUCCIÓN RÁPIDA O IDEA VAGA]".\n\nNo ejecutes la tarea todavía. Primero actúa como un experto en Ingeniería de Prompts y aplica el método O-D-F-R:\n1. Evalúa mi borrador asignándole un puntaje de 0 a 8 (evaluando de 0 a 2 puntos la claridad de: Objetivo, Destinatario, Formato y Restricciones).\n2. Dime brevemente qué vacíos dejé abiertos que habrían causado una respuesta genérica.\n3. Escribe una versión mejorada de mi prompt que alcance un puntaje 8/8, dejando entre corchetes [ ] cualquier dato específico de mi trabajo que yo deba rellenar.',
                    },
                ],
            },

            {
                classNumber: 'Clase 05',
                title: 'Producción de documentos y ordenamiento de datos',
                description:
                    'Generación directa de archivos descargables (Word, Excel, PowerPoint, PDF), análisis estructurado de datos propios, gráficos y localización.',
                guides: [
                    'Pide el archivo, no el texto: Usa verbos explícitos ("Crea un Word .docx" o "Arma una planilla Excel .xlsx") para obtener un archivo descargable.',
                    'Nivel Alto en análisis de datos: Entrega tus datos indicando exactamente qué cruzar, cómo agrupar, qué calcular y con qué formato visual responder.',
                    'Extensiones de valor: Transforma tablas complejas en gráficos visuales dentro de Artefactos y traduce adaptando el registro cultural local.',
                ],
                audioUrl: '/audios/clase-05.m4a',
                prompts: [
                    {
                        id: 'c5-1',
                        code: '05.A',
                        title: 'El Reporte de Rodrigo en Word Descargable (.docx)',
                        tool: 'Claude',
                        context:
                            'Transforma apuntes sueltos en un documento Word profesional con síntesis ejecutiva y tabla estructurada lista para descargar.',
                        promptText:
                            'Actúa como asistente de operaciones logísticas. Necesito transformar mis apuntes sueltos de la semana en un archivo descargable aplicando O-D-F-R:\n- Objetivo: Generar el reporte semanal de estado de despachos para revisión de la gerencia.\n- Destinatario: Jefatura de Operaciones (requiere lectura rápida y ejecutiva).\n- Formato: Crea y entrégame un archivo Word (.docx) descargable con diseño profesional. Debe iniciar con una "Síntesis Ejecutiva" de 1 párrafo destacando el porcentaje de cumplimiento, seguido de una tabla ordenada con las columnas: [ID Pedido | Zona/Cliente | Estado Actual | Fecha Estimada | Observaciones].\n- Restricciones: No me entregues solo texto plano en el chat; utiliza tu herramienta de creación de archivos para darme el documento .docx listo para descargar.\n\nDatos de la semana para procesar:\nPed-101 Constructora Sur entregado el lunes sin novedad. Ped-102 Ferretería Central atrasado por falla mecánica del camión, nueva fecha jueves 26. Ped-103 Distribuidora Maule entregado martes OK. Ped-104 Obras Viales Norte en ruta, llega miércoles 25. Ped-105 Comercial Andina devuelto a bodega porque cliente estaba cerrado, reprogramado para viernes 27.',
                    },
                    {
                        id: 'c5-2',
                        code: '05.B',
                        title: 'El Pedido de Carla: Planilla Excel (.xlsx) de Asistencia',
                        tool: 'Claude',
                        context:
                            'Procesa registros brutos de RR.HH. generando un archivo Excel descargable ordenado de mayor a menor con alertas condicionales.',
                        promptText:
                            'Actúa como analista de Recursos Humanos. A partir del registro bruto que te entrego abajo, aplica el siguiente análisis de Nivel Alto:\n1. Entregable: Crea un archivo Excel (.xlsx) descargable.\n2. Análisis requerido: Agrupa por código de colaborador, calcula el total de días asistidos, el total de inasistencias del mes y el porcentaje de asistencia. Ordena la tabla resultante de mayor a menor cantidad de inasistencias.\n3. Formato visual y reglas: Incluye una columna llamada "Alerta de Gestión". Si el colaborador supera las 3 inasistencias en el mes, escribe "CRÍTICO - CITAR A REUNIÓN" y destaca esa fila o celda con fondo rojo suave; si tiene 3 o menos, escribe "NORMAL" en verde. (Nota: Datos anonimizados por Ley 21.719).\n\nRegistro bruto del mes (Sobre 20 días hábiles):\nEMP-01 (Área Ventas): Faltó el día 2 y el día 15.\nEMP-02 (Área Bodega): Faltó los días 3, 4, 11, 18 y 19.\nEMP-03 (Área Administración): Asistencia completa (0 faltas).\nEMP-04 (Área Bodega): Faltó los días 5, 12, 13 y 20.\nEMP-05 (Área Ventas): Faltó el día 8.',
                    },
                    {
                        id: 'c5-3',
                        code: '05.C',
                        title: 'Análisis de Inventario Crítico + Gráfico Visual',
                        tool: 'Claude',
                        context:
                            'Identifica los 5 productos con mayor déficit de stock, calcula el presupuesto de reposición y dibuja un gráfico comparativo.',
                        promptText:
                            'Soy encargado de bodega. Analiza este listado rápido de stock actual vs. stock mínimo requerido:\n- Taladro Percutor: Stock actual 4 u. (Mínimo requerido: 15 u.) - Costo reposición: $45.000 c/u\n- Esmeril Angular: Stock actual 18 u. (Mínimo requerido: 10 u.) - Costo reposición: $30.000 c/u\n- Juego de Brocas: Stock actual 2 u. (Mínimo requerido: 25 u.) - Costo reposición: $8.000 c/u\n- Sierra Circular: Stock actual 3 u. (Mínimo requerido: 12 u.) - Costo reposición: $60.000 c/u\n- Guantes de Seguridad: Stock actual 50 u. (Mínimo requerido: 30 u.) - Costo reposición: $2.500 c/u\n- Casco Dieléctrico: Stock actual 5 u. (Mínimo requerido: 20 u.) - Costo reposición: $12.000 c/u\n- Cinta Métrica 5m: Stock actual 6 u. (Mínimo requerido: 20 u.) - Costo reposición: $4.000 c/u\n\nInstrucciones:\n1. Identifica únicamente los 5 productos con mayor déficit de stock y arma una tabla con: [Producto | Stock Actual | Déficit (Unidades a comprar) | Presupuesto Total de Compra | Prioridad de Compra Esta Semana].\n2. Genera un Artefacto visual con un gráfico de barras limpio que compare el "Stock Actual" vs "Stock Mínimo" de esos 5 productos críticos para presentarlo hoy a gerencia.',
                    },
                    {
                        id: 'c5-4',
                        code: '05.D',
                        title: 'Traducción Adaptada y Localización Comercial',
                        tool: 'Claude',
                        context:
                            'Adapta comunicaciones internas con modismos chilenos a registros ejecutivos naturales para mercados internacionales.',
                        promptText:
                            'Necesito enviar este mensaje interno a dos socios internacionales (uno en Miami, EE.UU. y otro en Ciudad de México). El borrador tiene muchos modismos locales chilenos:\n\nBorrador: "Hola equipo, les escribo para sacar en limpio cómo vamos con la entrega del proyecto. Estamos medio al debe con los plazos de la etapa 2 y no podemos seguir chuteando el tema para el otro mes porque el cliente nos va a poner problemas. Necesito que me manden una cotización al callo de las horas extra hoy mismo antes de las 6 para dejar esto amarrado."\n\nInstrucciones:\nNo hagas una traducción literal palabra por palabra. Adapta el registro cultural y las convenciones de negocios locales generando dos versiones profesionales y cercanas:\n1. Inglés de negocios (EE.UU.): Natural, ejecutivo y orientado a la acción.\n2. Español corporativo (México / Latam Neutro): Reemplazando los chilenismos por expresiones ejecutivas naturales en ese mercado.',
                    },
                ],
            },
        ],
    },
];
