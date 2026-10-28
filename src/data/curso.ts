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

            {
                classNumber: 'clase 06',
                title: 'Revisar lo que la IA devuelve',
                description:
                    'Auditoría crítica de contenidos generados por IA: detección de errores ocultos, matriz de riesgo, gobernanza de datos y el cambio de paradigma hacia el uso de Claude como socio estratégico de pensamiento.',
                guides: [
                    'Cinco categorías obligatorias de revisión: Datos y cifras (recalcular siempre), Nombres, Citas/Referencias, Fechas y Afirmaciones Causales (verificar que la causa exista en los datos originales).',
                    'Matriz de riesgo cuando hay poco tiempo: Priorizar siempre lo de alto costo de error y fácil verificación (recalcular subtotales) y jamás omitir lo de alto costo y difícil verificación (causas inventadas y citas).',
                    'Cuatro señales de alerta en textos extensos: Cifras sospechosamente redondas, causas sin contexto previo, datos inconsistentes entre secciones y párrafos completos sobre temas no entregados en la fuente.',
                    'Flujo profesional de corrección: Detectar (clasificar en las 5 categorías), Contrastar (volver a la fuente original, no solo reescribir para que suene bien) y Documentar (dejar bitácora de verificación).',
                    "Cuatro frases-gatillo como Socio de Pensamiento: 1) 'Dame 3 alternativas con ventajas y desventajas, no elijas por mí', 2) 'Dime qué estoy dando por sentado', 3) '¿Qué pregunta debería hacerme que no me he hecho?', 4) 'Profundiza en este ángulo'.",
                ],
                prompts: [
                    {
                        id: 'c6-p1',
                        code: '01 // DEMO INDUCCIÓN AL ERROR',
                        title: 'La trampa del tono triunfalista (Caso Logística)',
                        tool: 'Claude',
                        context:
                            "Demostración de cómo pedirle a la IA que 'destaque la gestión' o 'suene convincente' la empuja a inventar afirmaciones causales y comparaciones temporales que no existen en los datos crudos.",
                        promptText: `Actúa como Jefe de Logística. Redacta un informe ejecutivo de cierre de agosto para el Directorio usando únicamente estos apuntes rápidos:
- Pedidos agosto: 214 totales (198 a tiempo, 16 atrasados). Promedio entrega: 2,3 días.
- Gasto flete urbano: $2.180.000. Gasto flete interurbano: $1.140.000.
- Problemas del mes: demoras al confirmar stock en bodega y falta de aviso al cliente cuando hay atraso.

Instrucción de estilo: Necesito que el informe destaque nuestra excelente gestión, compare el éxito con meses anteriores, explique las causas estratégicas de nuestras mejoras en costos y proyecte seguridad sobre nuestro proveedor actual para que la gerencia apruebe el presupuesto anual.`,
                    },
                    {
                        id: 'c6-p2',
                        code: '02 // GOBERNANZA Y PLACEHOLDERS',
                        title: 'Bloqueo de condiciones comerciales no autorizadas',
                        tool: 'Claude',
                        context:
                            'Técnica defensiva mediante marcadores de posición entre corchetes para evitar que la IA invente causas de fallos, prometa fechas legales o regale descuentos en comunicaciones con clientes.',
                        promptText: `Actúa como Ejecutivo de Atención al Cliente. Redacta un correo muy empático para el cliente "Constructora Andes" disculpándote porque su pedido #405 lleva 4 días de atraso.

REGLA ESTRICTA DE GOBERNANZA: No tienes autorización para asumir la causa del retraso, ni para prometer fechas exactas de entrega, ni para ofrecer compensaciones económicas o envíos gratis. Cualquier dato relativo a causas, fechas o compensaciones que consideres necesario incluir para que el correo funcione, debes dejarlo estrictamente encerrado entre corchetes en mayúsculas, por ejemplo: [INDICAR CAUSA], [FECHA DE ENTREGA], [COMPENSACIÓN AUTORIZADA], para que un supervisor humano lo complete antes de enviar.`,
                    },
                    {
                        id: 'c6-p3',
                        code: '03 // AUTO-AUDITORÍA CRUZADA',
                        title: 'Bitácora de verificación y limpieza contra la fuente',
                        tool: 'Claude',
                        context:
                            'Prompt para ejecutar inmediatamente después de generar un informe largo. Obliga al modelo a auditar su propio texto frente a los datos originales y documentar los hallazgos en una tabla.',
                        promptText: `Actúa como un Auditor de Control de Calidad estricto. Revisa el informe ejecutivo que acabas de redactar arriba y compáralo palabra por palabra contra los "apuntes rápidos" originales que te entregué en el primer mensaje.

Genera una tabla de auditoría con 4 columnas:
1. Frase o cifra afirmada en el informe generado.
2. Categoría (Cifra, Fecha, Nombre, Cita o Afirmación Causal).
3. Estado de Verificación (Respaldado por la fuente / Alucinación sin respaldo / Cálculo erróneo).
4. Acción correctiva aplicada (Eliminado o corregido).

Debajo de la tabla, entrégame la versión 100% limpia y corregida del informe, sin agregar ni una sola inferencia que no esté en los apuntes originales.`,
                    },
                    {
                        id: 'c6-p4',
                        code: '04 // SOCIO DE PENSAMIENTO',
                        title: 'Activación de frases-gatillo (Caso Cierre de Sucursal)',
                        tool: 'Claude',
                        context:
                            'Contraste entre pedirle a la IA que tome una decisión como un oráculo versus utilizar frases-gatillo para cuestionar supuestos y descubrir puntos ciegos estratégicos.',
                        promptText: `Soy Camila, jefa de atención al cliente. Tengo una sucursal presencial cuyo tráfico de visitas cayó un 60% este semestre y el arriendo es caro, así que estoy pensando en cerrarla el próximo mes.

No tomes la decisión por mí ni me des un plan de cierre todavía. Actúa como mi socio de pensamiento estratégico:
1. Dime qué estoy dando por sentado al pensar que el bajo tráfico presencial justifica el cierre.
2. ¿Qué 3 preguntas críticas de negocio debería hacerme antes de tomar esta decisión, que todavía no me he hecho?`,
                    },
                    {
                        id: 'c6-p5',
                        code: '05 // TALLER EN VIVO: DATOS Y MUESTRAS',
                        title: 'Detección de descuadres y generalización abusiva (RR.HH.)',
                        tool: 'Claude',
                        context:
                            'Ejercicio práctico grupal para detectar errores matemáticos en subtotales, extrapolación engañosa de una muestra pequeña y conexión artificial de métricas no relacionadas.',
                        promptText: `Actúa como Analista de Recursos Humanos. Redacta una solicitud formal de aprobación de presupuesto de $4.500.000 dirigida a la Gerencia de Finanzas para contratar un curso de "Liderazgo Ágil", basándote en estos datos de nuestra encuesta interna de octubre:
- Total de empleados de la empresa: 120 personas.
- Empleados que respondieron la encuesta: 15 personas (del área de Marketing).
- De los que respondieron: 12 dijeron preferir clases martes y jueves; 9 dijeron sentir falta de herramientas de liderazgo.
- Costo del proveedor "CapacitaPro": $3.200.000 por el curso + $800.000 por licencias de software + $400.000 por coffee break presencial.
- Nota adicional: En septiembre la rotación de personal fue del 8%.

Redacta el documento de forma muy persuasiva, conectando los datos para justificar la urgencia del gasto.`,
                    },
                    {
                        id: 'c6-p6',
                        code: '06 // TALLER EN VIVO: SESGO DE COMPLACENCIA',
                        title: 'Freno de decisiones impulsivas con frases-gatillo',
                        tool: 'Claude',
                        context:
                            'Transformación de una orden ejecutiva riesgosa (donde la IA suele ser complaciente y obedecer sin cuestionar) hacia una consulta estratégica de exploración de opciones y riesgos legales.',
                        promptText: `Nuestras ventas bajaron un 15% este mes porque la competencia bajó sus precios, y estoy tentado a cambiar el esquema de comisiones de mis vendedores por multas y descuentos sobre su sueldo cada vez que pierdan un cliente para presionarlos a rendir más.

Antes de redactar cualquier comunicado o tomar una medida, actúa como mi socio de pensamiento estratégico:
1. Dime qué estoy dando por sentado al asumir que la caída de ventas se resuelve presionando o castigando al equipo comercial.
2. ¿Qué puntos ciegos legales, financieros y de fuga de talento no estoy viendo en mi propuesta inicial?
3. Dame 3 alternativas estratégicas con ventajas y desventajas para responder a una guerra de precios sin destruir al equipo, todavía no elijas por mí.`,
                    },
                ],
            },
        ],
    },

    // Anexo
    {
        unitId: 'anexo-avanzado',
        unitTitle: 'Anexo: Laboratorios Avanzados de Código',
        classes: [
            {
                classNumber: 'A1',
                title: 'Prototipado UI, Motion y WebGL',
                description:
                    'Desafíos avanzados de ingeniería de prompts enfocados en desarrollo web front-end. Desde landing pages inmersivas y animaciones DOM, hasta renderizado espacial 3D con consumo de APIs reales en Gemini 4 Argon.',
                guides: [
                    'Para los retos de interfaz (Landing y Motion), exige que el resultado se entregue en un único bloque de código consolidado (HTML/CSS/JS) para facilitar su ejecución inmediata en el navegador.',
                    'Para lograr animaciones a 60fps en la capa gratuita, restringe el uso de librerías externas y prioriza animaciones CSS por hardware (transform, opacity) controladas por Vanilla JS moderno.',
                    "En Claude, utiliza la instrucción explícita de generar un 'Artefacto interactivo' para poder probar y visualizar el código sin salir de la plataforma.",
                    'En Gemini Argon, exprime su capacidad de simulación (Three.js) prohibiendo estrictamente los mockups de datos y obligando al motor a consumir APIs públicas mediante fetch.',
                ],
                prompts: [
                    {
                        id: 'anx-p1',
                        code: '01 // UI & LAYOUT',
                        title: 'Landing Page Inmersiva (Estilo NatGeo)',
                        tool: 'General',
                        context:
                            'Prompt para generar una estructura de una sola página (Single Page) de alto impacto visual, controlando la paleta de colores, la arquitectura de secciones y aplicando reglas estrictas de código limpio.',
                        promptText: `Actúa como un Frontend Developer Senior y UI/UX Designer. Tu tarea es desarrollar una Landing Page inmersiva e interactiva sobre naturaleza y conservación de vida salvaje. Todo el código debe entregarse consolidado en un único archivo HTML (con el CSS y JS integrados) listo para ejecutarse en el navegador.

1. Dirección de Arte y Estilo Visual (Estilo National Geographic):
- Paleta de colores: Utiliza estrictamente una paleta de alto contraste basada en negros profundos (#000000, #111111), grises oscuros, y acentos en amarillo vibrante (#FFCC00 o similar). Prohibido utilizar colores verdes.
- Tipografía: Emplea fuentes sans-serif modernas, geométricas y legibles (puedes importar desde Google Fonts), jugando con pesos tipográficos masivos para los títulos.

2. Estructura del Layout (Exactamente 4 secciones):
- Section 1: Hero Immersive. Un contenedor que ocupe exactamente 100vh y 100vw. Debe tener una imagen de fondo de un animal salvaje (utiliza una URL de Unsplash) con un overlay oscuro para dar legibilidad. En el centro, un titular enorme, un botón de 'Explorar' y un indicador de 'Scroll Down'.
- Section 2: The Mission. Diseño asimétrico tipo grid que combine texto descriptivo en blanco/amarillo con imágenes secundarias.
- Section 3: Wildlife Grid. Galería de 3 tarjetas (cards) de diferentes especies (imagen, título y descripción).
- Section 4: Footer. Pie de página minimalista en negro puro.

3. Animaciones y Motion (CSS Puro):
- Aplica un zoom-in infinito y lento sobre la imagen del Hero usando @keyframes.
- El indicador de 'Scroll Down' debe tener una animación de rebote (bounce) suave.
- Las tarjetas de la sección 3 deben elevarse y cambiar su borde a amarillo al hacer hover (transitions).

4. Reglas Técnicas Obligatorias:
- Nomenclatura: TODOS los nombres de clases, id y variables deben estar en INGLÉS.
- Restricción CSS: NO utilices JAMÁS la directiva !important.
- JavaScript Moderno: Usa Vanilla JS (ES6+) y aplica exclusivamente funciones de flecha (arrow functions).`,
                    },
                    {
                        id: 'anx-p2',
                        code: '02 // MOTION DESIGN',
                        title: 'Apertura Geométrica (Split Screen Intro)',
                        tool: 'Claude',
                        context:
                            'Obliga a Claude a utilizar su panel de Artefactos para renderizar una secuencia de animación temporal controlada por JavaScript y transformaciones CSS, sin librerías externas.',
                        promptText: `Actúa como un UI/UX Motion Designer y Frontend Developer experto. Tu tarea es crear una "Apertura Geométrica" (Split Screen Intro) de alta calidad.

1. Formato de Entrega Obligatorio:
Genera un Artefacto (Artifact) interactivo de código (usando HTML, CSS y JS) para que pueda previsualizar y probar la animación directamente aquí en tu interfaz. Todo el código debe estar consolidado.

2. Dirección de Arte y Estilo Visual:
- Diseño minimalista y corporativo moderno.
- La vista inicial debe estar bloqueada por dos grandes paneles de un color oscuro elegante (ej. gris casi negro), divididos exactamente por la mitad (vertical u horizontalmente).
- En el centro de la intersección, coloca un texto de bienvenida tipográficamente imponente.
- Debajo de estos paneles, debe existir un contenedor oculto con contenido simulado que represente el sitio web real.

3. Secuencia de Animación y Motion:
- Fase 1 (0s a 2s): Pantalla estática, texto central 100% visible.
- Fase 2 (2s a 2.8s): El texto central realiza un fade-out suave y reduce su escala.
- Fase 3 (2.8s a 4s): Los paneles se deslizan en direcciones opuestas (usando transform: translateY o translateX) fuera de la pantalla con una curva de aceleración elegante (cubic-bezier).
- Fase 4 (4s en adelante): El contenedor de animación debe aplicar pointer-events: none para permitir interacción con el sitio web revelado.

4. Reglas Técnicas Obligatorias:
- Nomenclatura: Todas las clases, ids y variables en estricto INGLÉS.
- Restricción CSS: PROHIBIDO utilizar la directiva !important. No uses librerías externas.
- JavaScript Moderno: Manipula el classList en conjunto con setTimeout. Utiliza ES6+ y aplica exclusivamente funciones de flecha (arrow functions).`,
                    },
                    {
                        id: 'anx-p3',
                        code: '03 // DATA & WEBGL',
                        title: 'Scrollytelling Topográfico 3D (Argon)',
                        tool: 'Gemini',
                        context:
                            'Prompt avanzado para el entorno AI Studio Build (Gemini 4 Argon), exigiendo renderizado 3D, Tailwind v4 sin configuración y consumo de datos reales para evitar alucinaciones matemáticas.',
                        promptText: `Actúa como un Data Visualization Engineer y experto en WebGL. Tu objetivo es construir un prototipo interactivo de "Scrollytelling 3D y Visualización Topográfica" en un único archivo HTML, optimizado para ejecutarse directamente en el entorno interactivo de Gemini 4 Argon.

1. Fuente de Datos (Regla Estricta):
- Está terminantemente prohibido utilizar mockups de datos.
- Debes consumir una API pública real y operativa utilizando fetch (ej. actividad sísmica global o datos climáticos).

2. Tecnologías y Librerías:
- Importa Three.js vía CDN para el renderizado del mapa topográfico y la extrusión de datos.
- Utiliza Tailwind CSS v4 vía CDN para la interfaz de usuario. Tailwind v4 no utiliza tailwind.config.js, aplica las clases utilitarias directamente.
- Vanilla JavaScript (ES6+) para toda la orquestación.

3. Reglas de Código Obligatorias:
- Absolutamente todos los nombres de variables, funciones y clases del DOM deben estar escritos en INGLÉS.
- La lógica debe construirse empleando exclusivamente funciones de flecha (arrow functions).
- Prohibido el uso de la directiva !important en CSS.
- Cualquier bloque de código nuevo o función clave debe ir obligatoriamente precedido por un comentario con un icono descriptivo de color verde (ej. // Fetching real data from API).

4. Arquitectura Visual y Scrollytelling:
- Capa 3D: Renderiza un mapa base en un entorno oscuro. Los datos de la API deben extruirse sobre sus coordenadas como prismas 3D. La altura y el color deben mapearse dinámicamente según el valor numérico.
- Capa HTML: Crea un layout de Scrollytelling transparente con secciones explicativas estructuradas con Tailwind CSS.
- Interacción: Captura el evento de scroll. Al bajar, interpola suavemente la cámara 3D para enfocar grupos de datos que coincidan con la sección activa en pantalla.`,
                    },
                ],
            },
        ],
    },
];
