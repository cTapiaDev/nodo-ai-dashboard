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
];
