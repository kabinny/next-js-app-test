export default async function Read(props) {
  const response = await fetch(
    `http://localhost:9999/topics/${props.params.id}`,
    { cache: 'no-cache' }
  )
  const topic = await response.json()

  return (
    <>
      <h2>{topic.title}</h2>
      <p>{topic.body}</p>
    </>
  )
}
