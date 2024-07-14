export default function Links() {
  const links = [
    'Homepage',
    'About',
    'Service',
    'Portfolio',
    'Contact'
  ]
  return (
    <div className="absolute w-full h-full flex flex-col justify-center items-center top-6 left-6 gap-5">
      {
        links.map(link=><a className="text-2xl" href={`#${link}`} key={link}>{link}</a>)
      }
    </div>
  )
}
