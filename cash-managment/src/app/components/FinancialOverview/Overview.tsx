interface Props {
  overview: string,
  title: string
}

export function Overview({ overview, title}: Props ) {

  return (
    <article>
      <h3>{title}</h3>
      <p>{overview}</p>
    </article>
  )
}