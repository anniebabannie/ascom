const ExperienceDescription = ({children, title, duration}: {
  children?: React.ReactNode;
  title: string;
  duration: string;
}) => {
  function render() {
    return(
      <div className="
        pb-16
        before:content-[' '] before:w-7 before:h-7 before:rounded-full before:bg-teal-600 before:block before:absolute before:-left-4
      ">
        <h2 className="uppercase font-bold text-2xl mb-3">{title}</h2>
        <time className="block text-md italic mb-10">{duration}</time>
        {children}
      </div>
    )
  }

  return render()
}

export default ExperienceDescription;