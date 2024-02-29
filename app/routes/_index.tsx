import type { MetaFunction } from "@remix-run/node";
import ExperienceItem from '~/components/WorkExperienceItem';
import logo from "~/assets/annie-sexton-logo.png";
import avatar from "~/assets/annie-avatar-red-head.jpg";
import typistPic from "~/assets/typist-screenshot.jpg";
import genshoPic from "~/assets/gensho-screenshot.jpg";
import thumbnailGit from "~/assets/thumbnail-git-organized.png";
import thumbnailRubyConf from "~/assets/thumbnail-rubyconf2018.png";
import annie1 from "~/assets/annie-1.jpg";
import ExperienceDescription from '~/components/ExperienceDescription';
import WritingLink from '~/components/WritingLink';

export const meta: MetaFunction = () => {
  return [
    { title: "Annie Sexton | Developer Advocate & JavaScript Specialist" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <>
        <div className="flex flex-col gap-14 items-center text-center justify-center md:py-56 px-10 py-24">
          <img src={logo} className="max-w-[644px] max-h-[76px] w-full"/>
          <p className="text-gray-500 uppercase tracking-wider md:text-xl text-base">Developer Advocate &nbsp;•&nbsp; Software Engineer</p>
          <div className="max-w-[650px] p-6 rounded-lg bg-gray-50 border-gray-200 border flex md:flex-row flex-col gap-10 items-center md:text-left text-center">
            <img src={avatar} width="138" alt="Headshot of Annie Sexton, Product Developer, Designer and Engineer" className="rounded-lg" />
            <div className="text-md leading-7">I'm a multi-faceted <strong>software developer</strong> and <strong>developer advocate</strong> with over 11 years of experience working on everything from software engineering to UX design. I've spent most of my career in the <strong>wonderful world of developer tooling</strong>, and I love working with talented teams to craft unparalleled user experiences.</div>
          </div>
        </div>
  
        <div className="bg-[url('assets/light-gradient-bg.png')] bg-cover shadow-inner px-10 py-20 w-full">
          <div className="container mx-auto flex flex-col gap-20 md:gap-40">
            <div className="grid gap-10 lg:grid-cols-2 md:gap-24 items-center">
              <a href="https://typist.app" target="_blank">
                <img src={typistPic} alt="Screenshot of Typist website" className="rounded-lg shadow-md shadow-gray-500 ring-4 ring-white" />
              </a>
              <div>
                <div className="md:flex md:justify-between mb-3 items-center">
                  <p className="text-4xl uppercase font-bold">Typist</p>
                  <a href="https://typist.app" target="_blank" className="text-2xl">https://typist.app</a>
                </div>
                <div className="mb-10 flex items-center gap-4">
                  <div className="uppercase">Founder</div>
                  <div>•</div>
                  <time className="">Nov 2020 - Nov 2022</time>
                </div>
                <div className="paragraph">
                  <p className="text-xl leading-8">Typist is a refreshingly simple note-taking app built for developers, featuring auto-rendered Github-flavored markdown, ⌘K quick search, code block syntax highlighting, and keyboard shortcuts for days.</p>
                  <p className="text-xl leading-8">I've been on a long journey in search of the perfect writing app: something simple enough to quickly jot down notes, but equipped with the features I appreciate as a developer, such as markdown, code block syntax highlighting, and a myriad of keyboard shortcuts. Many apps came close, but each left me wanting. After years of searching, I decided to roll up my sleeves and build something myself.</p>
                </div>
              </div>
            </div>
  
            <div className="grid gap-10 lg:grid-cols-2 md:gap-24 items-center">
              <div className="order-last lg:order-first">
                <div className="md:flex md:justify-between mb-3 items-center">
                  <p className="text-4xl uppercase font-bold">Gensho</p>
                  <a href="https://genshoapp.com" target="_blank" className="text-2xl">https://genshoapp.com</a>
                </div>
                <div className="mb-10 flex items-center gap-4">
                  <div className="uppercase">Founder</div>
                  <div>•</div>
                  <time className="">Mar 2015 - Apr 2017</time>
                </div>
                <div className="paragraph">
                  <p>Gensho is a tool that helps users build foreign language flashcards quickly by looking up words as you highlight them. How it works: Copy and paste in any foreign text (anything you'd like to study from, like song lyrics, news articles, etc). Then simply highlight the words you don't know. You can then download that list of words and their definitions, and upload them to literally any flashcard program. Supported languages: Japanese, Spanish, French, German, and Italian.</p>
                  <p>Designed, developed and marketed a SaaS product from the ground up, built in Ruby on Rails and ReactJS.</p>
                  <p>Gensho was a passion project of mine that I eventually turned into a full-fledge SaaS product, and now boasts a healthy following of over 2000 users.</p>
                </div>
              </div>
              <a href="https://genshoapp.com" target="_blank">
                <img src={genshoPic} alt="Screenshot of Gensho website" className="rounded-lg shadow-md shadow-gray-500 ring-4 ring-white" />
              </a>
            </div>
          </div>
        </div>
  
        <div className="bg-heropattern bg-cover shadow-inner px-10 py-40 w-full">
          <div className="max-w-[900px] text-center mx-auto paragraph">
          <h2 className="text-center text-4xl mb-20 uppercase font-bold">Technical Writing</h2>
  
            <div className="md:flex flex-col gap-5">
  
  
              <WritingLink
                title="Demystifying Docker for JavaScript"
                desc="Dockerfiles for JavaScript applications can range quite a bit – from two lines to fifty. What gives? This complexity can drive some developers away from really understanding this powerful tool, so today, I’d like to demystify Docker by examining a sample Dockerfile for a JavaScript application. This should be a useful resource, regardless of what JS framework you work in."
                src="https://fly.io/javascript-journal/demystify-docker-js/"
                thumbnail={"https://fly.io/javascript-journal/demystify-docker-js/assets/demystify-docker-js-cover.webp"}
              />
  
              <WritingLink
                title="Delegating tasks to Fly Machines"
                desc="There are many ways to delegate work in web applications, from using background workers to serverless architecture. In this article, we explore a new machine pattern that takes advantage of Fly Machines and distinct process groups to make quick work of resource-intensive tasks.                "
                src="https://fly.io/blog/delegate-tasks-to-fly-machines/"
                thumbnail={"https://fly.io/blog/delegate-tasks-to-fly-machines/assets/delegate-tasks-to-fly-machines-cover.webp"}
              />
  
              <WritingLink
                title="TALK: The Dangers of Tribal Knowledge"
                subtitle="RubyConf 2018"
                desc="Are you constantly tapped on the shoulder for answers? Tired of being the Google for your team? Or perhaps you’re the new kid, having to ask a dozen different people to find answers to all your questions? These are the consequences of tribal knowledge..."
                src="https://www.youtube.com/watch?v=o-JL-so5Gm8&t=4s"
                thumbnail={thumbnailRubyConf}
              />

              <WritingLink
                title="Git Organized: A Better Git Flow"
                desc="Imagine this: you’ve been paged to investigate a production incident, and after some digging, you identify the commit with the breaking code. You decide to revert the change. Unfortunately, in doing so, a new bug is introduced! As it turns out, hidden...."
                src="https://render.com/blog/git-organized-a-better-git-flow"
                thumbnail={thumbnailGit}
              />
            </div>
          </div>
        </div>
  
  
        <div className="bg-[url('assets/dark-gradient-bg.png')] bg-cover shadow-inner px-10 py-40 w-full">
          <div className="max-w-[900px] text-center mx-auto paragraph">
            <div className="flex gap-8 justify-center w-full mb-10">
              <img src={annie1} alt="" className="rounded-lg w-48 ring-white ring-2 shadow-lg" />
            </div>
            <p className="text-white">During my 11 years working as an engineer, I’ve fallen in love with every aspect of product development, from programming, to strategy, to design. While my roots are in development, I’ve collected a wide breadth of skills across many areas of expertise, thanks to my endless curiosity and hunger for learning.</p>
            <p className="text-white">Outside of work I love to travel, cook and write fiction. I was born and raised in the heart of Texas in Austin, and in 2019, after a considerable amount of globe-trotting, I decided to make a home for myself in the lush Pacific Northwest, in Portland, Oregon.</p>
          </div>
        </div>
  
        <div className="bg-[url('assets/light-gradient-bg.png')] bg-cover shadow-inner px-10 py-20 w-full">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-center text-2xl mb-40 mt-20 uppercase opacity-60">Work History</h2>
  
            <ExperienceItem
              company="Fly.io"
              companySubtitle="Deploy your apps globally in seconds"
            >
              <ExperienceDescription title="JavaScript Specialist & Developer Advocate" duration="Nov 2023 - Current">
                <p>
                  I work with the JavaScript developer community to help them understand how to use Fly.io to deploy their apps globally in seconds. I also work with the product team to help them understand the needs of the developer community.
                </p>
              </ExperienceDescription>
            </ExperienceItem>
            <ExperienceItem
              company="Render"
              companySubtitle="Platform-as-a-Service to build and host web services"
            >
              <ExperienceDescription title="Product Lead & UX Engineer" duration="Aug 2021 - Nov 2022">
                <p>Led cross-disciplinary teams to develop platform features that attracted businesses to migrate their applications from our top competitor.</p>
                <p>Worked directly with CEO to plan, define and build features using TypeScript, ReactJS, and GraphQL. Conducted competitive analysis reports to inform new feature development.</p>
              </ExperienceDescription>
            </ExperienceItem>
  
            <ExperienceItem
              company="Heroku"
              companySubtitle="Salesforce.com"
            >
              <ExperienceDescription title="Product Analyst" duration="Apr 2019 - Jul 2021">
                <p>Developed initial strategy and roadmap for supporting a new product offering (Salesforce Functions)</p>
                <p>Conducted customer research to identify user needs using data from internal support metrics and customer feedback</p>
                <p>Identified customer pain points and developed tools to improve self-service, reducing ticket load on Support</p>
                <p>Designed training material for new support team</p>
              </ExperienceDescription>
              <ExperienceDescription title="Senior Technical Support Engineer" duration="Aug 2016 - Apr 2019">
                <p>Provided in-depth support for Heroku customers on a wide range of technical topics, including performance issues, application outages, and development best practices</p>
                <p>Assisted strategic accounts during app outages</p>
                <p>Developed onboarding material for Heroku support team</p>
                <p>Curated and improved technical documentation</p>
              </ExperienceDescription>
            </ExperienceItem>
  
  
            <ExperienceItem
              company="Digital Telepathy"
              companySubtitle="Digital web agency based in San Diego"
            >
              <ExperienceDescription title="Full-stack Engineer & Account Manager" duration="May 2014 - Jul 2016">
                <p>Worked with clients to define project requirements, development roadmap, and acceptance criteria. </p>
                <p>Managed development process from initial concept through site launch.</p>
                <p>Built responsive marketing sites featuring rich interactions built-in JavaScript and CSS.</p>
              </ExperienceDescription>
            </ExperienceItem>
            <div className="grid md:grid-cols-12 md:gap-12">
              <div className="col-span-4"> </div>
              <div className="col-span-8">
                <div className="bg-gradient-to-b h-44 from-teal-600 to-transparent w-[4px]"> </div>
              </div>
            </div>
  
            <div className="text-center text-2xl mt-20">For a complete work history, see my <a href="https://www.linkedin.com/in/annie-sexton-11472a46/" target="_blank">LinkedIn profile</a>.</div>
          </div>
        </div>
  
        
        <div className="flex items-center justify-center py-20">
          <div className="flex justify-center uppercase">
            <a href="https://typist.app" target="_blank">Typist App</a>
            <div className="text-teal-600 mx-4">•</div>
            <a href="https://www.linkedin.com/in/annie-sexton-11472a46/" target="_blank">LinkedIn</a>
            <div className="text-teal-600 mx-4">•</div>
            <a href="https://twitter.com/_anniebabannie_" target="_blank">Twitter</a>
          </div>
        </div>
  
      </>
  );
}
