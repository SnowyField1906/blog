import SocialIcon from './social-icons'
import FolderIcon from './icon'

const Card = ({ title, description, imgSrc, href, github, tech1, tech2, tech3 }) => (
  <div className="md w-full cursor-pointer p-4 md:w-1/2">
    <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-200 hover:scale-105 hover:rounded-md hover:border-tertiary-400 hover:bg-gray-200 dark:border-gray-700 dark:hover:border-tertiary-600 dark:hover:bg-gray-800">
      <div className="p-6">
        <div className="flex flex-row items-center justify-between">
          <div className="my-2">
            <FolderIcon />
          </div>
          <div className="flex flex-row justify-between">
            <div className="mx-1.5">
              {href ? <SocialIcon kind="external" href={href} size="6" /> : null}
            </div>
            <div className="mx-1.5">
              {github ? <SocialIcon kind="github" href={github} size="6" /> : null}
            </div>
          </div>
        </div>
        <h2 className="font-uvn mb-3 text-2xl leading-8 ">{title}</h2>

        <p className="mb-3 max-w-none text-gray-600 dark:text-gray-400">{description}</p>
        <div className="flex flex-row justify-between">
          <div className="text-sm text-gray-400">
            {tech1} &#8226; {tech2} &#8226; {tech3}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
