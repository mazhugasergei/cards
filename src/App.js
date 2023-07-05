import Card from "./components/Card"

export default () => {
  const cards = [
    {
      id: 0,
      title: "One",
      body: "Lorem ipsum dolor sit amet."
    },
    {
      id: 1,
      title: "Two",
      body: "Lorem ipsum dolor sit amet."
    },
    {
      id: 2,
      title: "Three",
      body: "Lorem ipsum dolor sit amet."
    },
    {
      id: 3,
      title: "Four",
      body: "Lorem ipsum dolor sit amet."
    },
    {
      id: 4,
      title: "Five",
      body: "Lorem ipsum dolor sit amet."
    },
    {
      id: 5,
      title: "Six",
      body: "Lorem ipsum dolor sit amet."
    },
  ]

  return (
    <main>
      {
        cards.map(card => (
          <Card title={card.title} body={card.body} key={card.id} />
        ))
      }
    </main>
  )
}