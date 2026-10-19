import {
  perfil,
  servicios,
  proyectos,
  habilidades,
  experiencia,
  formacion,
  cursos,
  idiomas,
} from './data'

const contactos = [
  { etiqueta: 'Correo', valor: perfil.correo, href: `mailto:${perfil.correo}` },
  { etiqueta: 'Teléfono', valor: perfil.telefono, href: `tel:+${perfil.whatsapp}` },
  { etiqueta: 'WhatsApp', valor: 'Escribir por WhatsApp', href: `https://wa.me/${perfil.whatsapp}` },
  { etiqueta: 'Ubicación', valor: perfil.ubicacion, href: '' },
  { etiqueta: 'GitHub', valor: perfil.github, href: perfil.github },
  { etiqueta: 'LinkedIn', valor: perfil.linkedin, href: perfil.linkedin },
].filter((c) => c.valor)

function Enlace({ href, children }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
    >
      {children}
    </a>
  )
}

function Seccion({ id, titulo, children }) {
  return (
    <section id={id} className="py-16">
      <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
        <span className="h-6 w-1 rounded bg-indigo-500"></span>
        {titulo}
      </h2>
      {children}
    </section>
  )
}

function Foto({ src, nombre, posicion = '50% 50%', zoom = 1 }) {
  const tamano = 'h-48 w-48 sm:h-60 sm:w-60'
  if (src) {
    return (
      <div
        className={`${tamano} overflow-hidden rounded-full border-4 border-indigo-500/40 shadow-2xl shadow-indigo-500/20`}
      >
        <img
          src={src}
          alt={nombre}
          style={{ objectPosition: posicion, transform: `scale(${zoom})` }}
          className="h-full w-full object-cover"
        />
      </div>
    )
  }
  const iniciales = nombre
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
  return (
    <div
      className={`${tamano} flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-6xl font-bold text-white shadow-2xl shadow-indigo-500/20`}
    >
      {iniciales}
    </div>
  )
}

function IconoWhatsApp({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function BotonWhatsApp() {
  if (!perfil.whatsapp) return null
  const mensaje = encodeURIComponent(
    `Hola ${perfil.nombre.split(' ')[0]}, vi tu portafolio y me gustaría contactarte.`
  )
  return (
    <a
      href={`https://wa.me/${perfil.whatsapp}?text=${mensaje}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition hover:scale-110 hover:bg-green-400"
    >
      <IconoWhatsApp className="h-8 w-8" />
    </a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="sticky top-0 z-10 border-b border-slate-900 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <span className="font-semibold text-white">{perfil.nombre}</span>
          <nav className="flex flex-wrap gap-5 text-sm">
            <a href="#sobre-mi" className="hover:text-white">Sobre mí</a>
            <a href="#proyectos" className="hover:text-white">Proyectos</a>
            <a href="#habilidades" className="hover:text-white">Habilidades</a>
            <a href="#experiencia" className="hover:text-white">Experiencia</a>
            <a href="#formacion" className="hover:text-white">Formación</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6">
        <section className="flex flex-col-reverse items-center justify-between gap-10 py-16 sm:flex-row sm:py-24">
          <div>
            <p className="mb-3 text-sm uppercase tracking-widest text-indigo-400">
              {perfil.cargo}
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-6xl">
              Hola, soy{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                {perfil.nombre}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-400">{perfil.frase}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="rounded-lg bg-indigo-500 px-5 py-3 font-medium text-white transition hover:bg-indigo-400"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-white transition hover:border-indigo-400"
              >
                Contactar
              </a>
            </div>
          </div>
           <Foto
            src={perfil.foto}
            nombre={perfil.nombre}
            posicion={perfil.fotoPosicion}
            zoom={perfil.fotoZoom}
          />
        </section>

        <Seccion id="sobre-mi" titulo="Sobre mí">
          <p className="max-w-2xl text-slate-400">{perfil.sobreMi}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {servicios.map((s) => (
              <article
                key={s.titulo}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-indigo-500"
              >
                <h3 className="font-semibold text-white">{s.titulo}</h3>
                <p className="mt-2 text-sm text-slate-400">{s.descripcion}</p>
              </article>
            ))}
          </div>
        </Seccion>

        <Seccion id="proyectos" titulo="Proyectos">
          <div className="grid gap-6 sm:grid-cols-2">
            {proyectos.map((p) => (
              <article
                key={p.titulo}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-indigo-500"
              >
                {p.imagen ? (
                  <img
                    src={p.imagen}
                    alt={p.titulo}
                    className="h-44 w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-44 w-full items-center justify-center bg-gradient-to-br from-indigo-600/40 to-fuchsia-600/40 px-4 text-center text-xl font-semibold text-white">
                    {p.etiqueta}
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-white">{p.titulo}</h3>
                  <p className="mt-3 flex-1 text-sm text-slate-400">{p.descripcion}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tecnologias.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-4">
                    <Enlace href={p.demo}>Ver demo</Enlace>
                    <Enlace href={p.codigo}>Código</Enlace>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Seccion>

        <Seccion id="habilidades" titulo="Habilidades">
          <div className="space-y-6">
            {Object.entries(habilidades).map(([grupo, lista]) => (
              <div key={grupo}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-400">
                  {grupo}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {lista.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300 transition hover:border-indigo-400 hover:text-white"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Seccion>

        <Seccion id="experiencia" titulo="Experiencia">
          <div className="space-y-8 border-l border-slate-800 pl-6">
            {experiencia.map((e) => (
              <article key={e.cargo + e.empresa} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                <p className="text-xs text-indigo-400">{e.periodo}</p>
                <h3 className="mt-1 font-semibold text-white">
                  {e.cargo} · {e.empresa}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{e.descripcion}</p>
              </article>
            ))}
          </div>
        </Seccion>

        <Seccion id="formacion" titulo="Formación">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-400">
                Estudios
              </h3>
              <ul className="space-y-4">
                {formacion.map((f) => (
                  <li key={f.titulo}>
                    <p className="font-medium text-white">{f.titulo}</p>
                    <p className="text-sm text-slate-400">{f.institucion}</p>
                    {f.periodo && <p className="text-xs text-slate-500">{f.periodo}</p>}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-400">
                Cursos
              </h3>
              <ul className="space-y-4">
                {cursos.map((c) => (
                  <li key={c.nombre}>
                    <p className="font-medium text-white">{c.nombre}</p>
                    <p className="text-sm text-slate-400">{c.plataforma}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-400">
                Idiomas
              </h3>
              <ul className="space-y-4">
                {idiomas.map((i) => (
                  <li key={i.nombre}>
                    <p className="font-medium text-white">{i.nombre}</p>
                    <p className="text-sm text-slate-400">{i.nivel}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Seccion>

        <Seccion id="contacto" titulo="Contacto">
          <p className="mb-6 text-slate-400">
            ¿Tienes una vacante o un proyecto? Escríbeme.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactos.map((c) => {
              const contenido = (
                <>
                  <p className="text-xs uppercase tracking-wide text-indigo-400">
                    {c.etiqueta}
                  </p>
                  <p className="mt-1 break-all text-white">{c.valor}</p>
                </>
              )
              const clases =
                'rounded-xl border border-slate-800 bg-slate-900 p-5 transition'
              return c.href ? (
                <a
                  key={c.etiqueta}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${clases} hover:border-indigo-500`}
                >
                  {contenido}
                </a>
              ) : (
                <div key={c.etiqueta} className={clases}>
                  {contenido}
                </div>
              )
            })}
          </div>
        </Seccion>
      </main>

      <BotonWhatsApp />

      <footer className="mx-auto max-w-4xl px-6 py-10 text-sm text-slate-600">
        © {new Date().getFullYear()} {perfil.nombre}
      </footer>
    </div>
  )
}