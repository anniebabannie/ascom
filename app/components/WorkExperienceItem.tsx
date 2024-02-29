import React from 'react';

const ExperienceItem = ({company, companySubtitle, children}:{
  company: string;
  companySubtitle?: string;
  children?: React.ReactNode;
}) => {
  function render() {
    return(
      <div className="grid md:grid-cols-12 gap-12">
        <div className="text-center md:col-span-4 md:text-right">
          <h3 className="uppercase text-3xl font-bold mb-4">{company}</h3>
          {companySubtitle &&
          <h4>{companySubtitle}</h4>
          }
        </div>
        <div className="md:col-span-8 border-0 border-l-4 border-teal-600 pl-12 relative">
          {children}
        </div>
      </div>
    )
  }

  return render()
}

export default ExperienceItem