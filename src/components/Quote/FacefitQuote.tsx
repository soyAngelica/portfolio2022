const RATE = 26;

const phases = [
  {
    n: "1",
    title: "Estudio de mercado y migración de website",
    hours: 20,
    time: "1 semana",
    text: "Estudio de mercado y perfilación de clientes, junto con la migración de tu sitio a una plataforma sin cuota mensual.",
    items: [
      "Cuestionario breve tipo quiz para tus seguidores de Instagram, diseñado para compartirse desde stories",
      "Incentivo a cambio del correo electrónico: un workout gratuito, un descuento de lanzamiento en tu libro o el sorteo de sesiones 1:1 (por definir en conjunto)",
      "Registro de cada respuesta en una base de datos, segmentada en profesionales y particulares, que identifica a las personas interesadas en tus servicios",
      "Datos reales sobre los intereses de tu público para construir un producto mejor y más enfocado",
      "Migración de myfacefit.com fuera de Shopify, con conexión a Claude para que puedas modificar textos, páginas y ofertas con solo solicitarlo, sin necesidad de código",
    ],
    note: "Esta fase concluye con una primera cartera de contactos con datos reales y una segmentación de perfiles, que da una visión clara y específica de tu público para diseñar las siguientes fases a la medida de cada segmento.",
  },
  {
    n: "2",
    title: "Web app mobile-first: cursos, membresías y red de especialistas",
    hours: 220,
    time: "12 semanas",
    text: "Cursos, compra de sesiones 1:1 y directorio de especialistas para usuarios. Web app que corre desde el navegador, con un diseño optimizado para dispositivos móviles: funciona como una app y se puede guardar como acceso directo en la pantalla de inicio.",
    items: [
      "My Facefit para particulares y Facefit Pro (ProHealth y ProBeauty) para profesionales",
      "Programa personalizado: un cuestionario inicial define objetivos y zonas de interés (mandíbula, cuello, frente, ojos) y genera un plan semanal que se desbloquea conforme se avanza",
      "Programas temáticos con descripción, beneficios y zonas de trabajo, organizados en rutinas de 3 a 7 minutos para particulares; lecciones más extensas y especializadas para profesionales",
      "Rutinas diarias con recordatorios configurables",
      "Seguimiento de progreso: fotografías del rostro, días de práctica, días consecutivos y tiempo total",
      "Puntos e insignias por constancia, que pueden compartirse en redes sociales",
      "Programa de referidos con recompensas y códigos promocionales",
      "Membresías mensuales o anuales, más una licencia para clínicas, para que los dentistas den acceso a sus pacientes",
      "Área de miembros con historial, videos y certificados para profesionales",
      "Red de especialistas: quienes terminen Facefit Pro pueden aparecer, pagando o a cambio de recomendarte con un código de descuento",
      "Integración con Calendly para reservar y pagar tus sesiones 1:1",
      "Claude conectado a todas tus herramientas, para que mandes correos, crees campañas, armes descuentos y planees tus clases con solo pedírselo",
    ],
    note: "Esta fase permite generar ingresos con la audiencia actual mientras se desarrolla la app. Todo el contenido creado aquí, lecciones y rutinas, se adapta directamente a la app, lo que evita duplicar el trabajo de producción.",
  },
  {
    n: "3",
    title: "La app de Facefit",
    hours: 500,
    time: "3–4 meses",
    text: "Tus rutinas con la cámara encendida y una guía en pantalla, en tiempo real, que muestra dónde poner las manos, para iOS y Android. Hecha para que la gente la abra todos los días, no una sola vez.",
    items: [
      "Guía de rostro y manos en tiempo real con la cámara",
      "Rutinas diarias rápidas de 3 a 7 minutos",
      "Face Fit score: la cámara mide la apertura de la mandíbula, la simetría y el rango de la sonrisa, para que el avance se vea en números",
      "Chequeo de tensión antes y después de cada rutina, para notar cuánto alivio da",
      "Fotografías de progreso con guía de encuadre en cámara, para comparaciones precisas de antes y después",
      "Dentistas y especialistas pueden asignar rutinas a sus pacientes y ver si las hacen",
      "Notificaciones: recordatorio diario, un empujoncito amable si faltaron un día y seguimiento en los programas largos",
      "La misma cuenta, cursos y contenido que la web app",
      "Se lanza a una audiencia que ya conoce y paga Facefit",
    ],
    note: "Investigamos las apps líderes de yoga facial, Luvly y FaceYogi. Tienen 16–20 mil calificaciones cada una y cobran desde 10 USD a la semana hasta 20 al mes, así que la gente ya paga por esto. Pero solo ponen videos con rachas y medallas. Ninguna guía tus manos con la cámara, mide progreso real ni está respaldada por el método de una fisioterapeuta. Esa es la ventaja de Facefit.",
  },
];

const money = (n: number) => `USD ${n.toLocaleString("en-US")}`;

const FacefitQuote = () => {
  const total = phases.reduce((sum, p) => sum + p.hours * RATE, 0);

  return (
    <div className="text-left">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal mb-2">
        Quote · Facefit
      </p>
      <h2 className="text-3xl md:text-4xl text-teal mb-8">
        Facefit · Propuesta de proyecto
      </h2>

      <div className="space-y-6">
        {phases.map((p) => (
          <div
            key={p.n}
            className="md:flex gap-8 rounded-2xl border border-zinc-200 p-6 md:p-8"
          >
            <div className="md:w-1/3 mb-4 md:mb-0">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
                Fase {p.n}
              </p>
              <p className="text-2xl mt-1 mb-3">{p.title}</p>
              <p className="text-zinc-500">
                {p.time}
              </p>
              <p className="text-xl font-semibold text-teal mt-1">
                {money(p.hours * RATE)}
              </p>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-3">{p.text}</p>
              <ul className="list-disc pl-5 space-y-1">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              {p.note && (
                <p className="mt-4 rounded-xl bg-[#f3f7f6] px-4 py-3">
                  {p.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border-2 border-teal px-6 py-5">
        <p className="text-lg font-semibold text-teal mb-1">
          Primero, un demo rápido
        </p>
        <p className="text-lg">
          Si empezamos con la Fase 1, en un par de días te armo un demo
          clickeable de la web app y de la app, para que lo veas y lo pruebes
          antes de decidir la siguiente fase.
        </p>
      </div>

      <div className="mt-6 rounded-2xl bg-[#e2ebff] px-6 py-5 md:flex justify-between items-center gap-6">
        <p className="text-lg">
          Total de las tres fases:{" "}
          <span className="font-semibold">{money(total)}</span>
        </p>
        <p className="text-zinc-600 mt-2 md:mt-0">
          Mantenimiento opcional después del lanzamiento: USD 200–400 al mes
        </p>
      </div>

      <div className="mt-10">
        <a
          href="mailto:soyangelica.aguilar@gmail.com?subject=Facefit%20quote"
          className="inline-block rounded-full bg-teal px-6 py-3 text-white font-semibold hover:opacity-90"
        >
          Let's talk
        </a>
        <p className="mt-6 text-lg">
          Hablamos pronto,
          <br />
          Angélica
        </p>
      </div>
    </div>
  );
};

export default FacefitQuote;
