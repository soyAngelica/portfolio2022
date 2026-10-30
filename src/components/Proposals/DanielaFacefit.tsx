import { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

const phases = [
  {
    n: "0",
    title: "Escuchar a tu comunidad",
    time: "1–2 días",
    price: "USD 300",
    text: "Un test corto para tus seguidores de Instagram. Nos dice quién te sigue, qué le duele y qué compraría, y de paso arma tu lista de correos.",
    items: [
      "Test de 6 preguntas (Tally o similar), pensado para abrirse desde stories",
      "Regalo a cambio del correo: un workout gratis + descuento de lanzamiento",
      "Respuestas en Airtable, separando a profesionales y particulares",
      "Resumen de resultados para decidir las siguientes fases con datos",
    ],
  },
  {
    n: "1",
    title: "Una sola casa para Facefit",
    time: "3–4 semanas",
    price: "USD 2,080",
    text: "Unimos myfacefit.com y tucaratehabla.com en un solo sitio tuyo, sin Shopify, para que dejes de pagar dos plataformas.",
    items: [
      "Sitio nuevo en WordPress, que puedes editar sin código",
      "Tienda para el Sport Serum y tus productos",
      "Reserva y pago de sesiones 1:1 por Zoom",
      "Tu libro, prensa y newsletter en un mismo lugar",
      "Migración de contenido, productos y suscriptores",
    ],
  },
  {
    n: "2",
    title: "Cursos y membresías",
    time: "4–5 semanas",
    price: "USD 2,600",
    text: "Tus cursos con pago mensual o anual, con dos caminos claros: uno para pacientes y otro para profesionales.",
    items: [
      "My Facefit para particulares y Facefit Pro (ProHealth y ProBeauty)",
      "Suscripción mensual o anual con Stripe",
      "Licencia para clínicas: un dentista puede dar acceso a sus pacientes",
      "Área de alumnas con progreso, videos y certificados",
    ],
  },
  {
    n: "3",
    title: "La app con cámara",
    time: "3–4 meses",
    price: "USD 13,000",
    text: "Lo que más se va a usar desde el celular: tus ejercicios con la cámara encendida y una guía en pantalla que indica dónde poner las manos.",
    items: [
      "iOS y Android (React Native)",
      "Guía de manos y rostro en tiempo real",
      "Rutinas, rachas y logros para que la gente vuelva cada día",
      "Usa la misma cuenta y los mismos cursos de la plataforma",
    ],
  },
  {
    n: "4",
    title: "Red de especialistas",
    time: "2–3 semanas",
    price: "USD 1,300",
    text: "Un directorio de profesionales Facefit. Se llena casi solo: quien termina Facefit Pro puede aparecer en él.",
    items: [
      "Perfil por especialista, con ciudad y especialidad",
      "Alta de pago, o gratis a cambio de recomendarte con un código de descuento",
      "Búsqueda por ubicación para que los pacientes encuentren a alguien cerca",
    ],
  },
];

const questions = [
  "¿Lo buscas para ti o eres profesional (dentista, fisio, estética)?",
  "¿Qué te molesta más: bruxismo, dolor de mandíbula, cabeza o cuello, o el tono de la cara?",
  "¿Cómo prefieres aprender: app, videos en web o sesiones en vivo?",
  "¿Cuánto pagarías al mes por tener tus rutinas guiadas?",
  "Si eres profesional: ¿lo recomendarías a tus pacientes?",
  "Tu correo, para mandarte tu workout de regalo.",
];

const DanielaFacefit = () => {
  useEffect(() => {
    document.title = "Propuesta para Facefit · Angélica Aguilar";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div>
      <Header />

      <div className="text-left pb-16">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal mb-3">
          Propuesta · Facefit
        </p>
        <h1 className="text-3xl md:text-5xl text-teal mb-6">Hola, Daniela</h1>
        <div className="md:w-3/4 space-y-4 text-lg">
          <p>
            Después de nuestra plática me metí un poco más a fondo en tu
            Instagram, en myfacefit.com y en tucaratehabla.com. Lo que has
            construido es mucho: un método propio, un libro con Planeta, prensa
            como Women's Health y ABC Bienestar, y una comunidad que confía en
            ti.
          </p>
          <p>
            Pensé en todas las posibilidades que platicamos (cursos, membresías,
            el directorio, la app) y creo que lo más sano es ir por fases. Que
            cada paso funcione y te genere algo antes de dar el siguiente, en
            vez de construir todo de golpe.
          </p>
          <p>
            Y lo primero sería escuchar a tu comunidad y juntar todo en una sola
            casa, para que dejes de pagar Shopify y otra plataforma por separado.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-[#f3f7f6] px-6 py-10 md:px-10 mb-16 text-left">
        <h2 className="text-2xl md:text-3xl text-teal mb-6">Lo que vi</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="font-semibold text-lg mb-1">Dos sitios separados</p>
            <p>
              myfacefit.com en Shopify y tucaratehabla.com en otra plataforma.
              Dos pagos, dos lugares que mantener y tu audiencia repartida.
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-1">Dos públicos muy claros</p>
            <p>
              Personas con bruxismo, dolor o que quieren tonificar, y
              profesionales (dentistas, fisios, estética) que pueden recomendarte
              con sus pacientes.
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-1">Cursos listos para crecer</p>
            <p>
              My Facefit y Facefit Pro ya existen como idea. Con suscripción
              pueden convertirse en un ingreso mensual estable.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16 text-left">
        <h2 className="text-2xl md:text-3xl text-teal mb-2">El plan, por fases</h2>
        <p className="text-lg mb-8 md:w-3/4">
          Cada fase se paga y se entrega por separado. Puedes pausar entre una y
          otra, o cambiar el orden según lo que nos diga tu comunidad.
        </p>
        <div className="space-y-6">
          {phases.map((p) => (
            <div
              key={p.n}
              className="md:flex gap-8 rounded-2xl border border-zinc-200 p-6 md:p-8 shadow-sm"
            >
              <div className="md:w-1/3 mb-4 md:mb-0">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
                  Fase {p.n}
                </p>
                <p className="text-2xl mt-1 mb-3">{p.title}</p>
                <p className="text-zinc-500">{p.time}</p>
                <p className="text-xl font-semibold text-teal mt-1">{p.price}</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg mb-3">{p.text}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-zinc-600">
          Mantenimiento opcional después del lanzamiento: USD 200–400 al mes
          (actualizaciones, seguridad, cambios pequeños y soporte).
        </p>
      </div>

      <div className="rounded-2xl bg-[#e2ebff] px-6 py-10 md:px-10 mb-16 text-left">
        <h2 className="text-2xl md:text-3xl text-teal mb-2">
          Para empezar: el test para tu comunidad
        </h2>
        <p className="text-lg mb-6 md:w-3/4">
          Algo ligero y con tu estilo, tipo "¿Qué te dice tu cara?", que
          compartes en stories. A cambio de su correo, cada persona recibe un
          workout gratis y un descuento de lanzamiento. Estas serían las
          preguntas:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-lg md:w-3/4">
          {questions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ol>
        <p className="mt-6 md:w-3/4">
          Con eso sabremos cuántos profesionales te siguen, qué duele más y
          cuánto pagaría la gente, y tendrás una lista de correos lista para
          anunciar los cursos.
        </p>
      </div>

      <div className="mb-20 text-left md:w-3/4">
        <h2 className="text-2xl md:text-3xl text-teal mb-4">Siguiente paso</h2>
        <p className="text-lg mb-6">
          Si te late, arrancamos con el test esta misma semana y en paralelo
          preparo la mudanza de tus sitios. Cualquier duda o cambio, platicamos;
          todo esto se puede ajustar a lo que tú necesites.
        </p>
        <a
          href="mailto:soyangelica.aguilar@gmail.com?subject=Propuesta%20Facefit"
          className="inline-block rounded-full bg-teal px-6 py-3 text-white font-semibold hover:opacity-90"
        >
          Escríbeme
        </a>
        <p className="mt-8 text-lg">Un abrazo,<br />Angélica</p>
      </div>

      <Footer />
    </div>
  );
};

export default DanielaFacefit;
