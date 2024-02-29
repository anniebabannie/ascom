const WritingLink = ({thumbnail, title, subtitle, desc, src}:{
  thumbnail: string;
  title: string;
  desc: string;
  subtitle?: string;
  src: string;
}) => {
  function render() {
    return(
      <a href={src} className="bg-white border-gray-300 border rounded-md shadow-md p-5 block mb-10 md:mb-0 md:flex md:gap-10 md:items-center hover:shadow-lg transition-all hover:-translate-y-1.5 hover:bg-gray-100">
        <img src={thumbnail} alt="" width="313" className="mb-6 md:mb-0"/>
        <div className="text-left">
          <h3 className="text-2xl font-bold pb-3">{title}</h3>
          {subtitle && 
          <h4>{subtitle}</h4>
          }
          <p className="text-[16px] leading-6">{desc}</p>
        </div>
      </a>
    )
  }

  return render()
}

export default WritingLink