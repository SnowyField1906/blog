import { useSession, signIn, signOut } from 'next-auth/react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { navigation } from '@/data/nav'
import CommandPalette from './CommandPalette'
import ThemeSwitch from './ThemeSwitch'
import Typewriter from 'typewriter-effect'
import { useRouter } from 'next/router'
import { EnterIcon } from '@radix-ui/react-icons'
import DropMenu from './DropMenu.js'
// import Logo from '@/data/logo.svg'

const LayoutWrapper = ({ children }) => {
  const { data: session } = useSession()
  const router = useRouter()
  const segments = router.asPath
    .split('?')[0]
    .split('#')[0]
    .split('/')
    .filter((segment) => segment !== '')

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="grid pt-10">
          <div className="flex min-w-0 justify-between">
            <div className="grid xl:flex">
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between text-xl font-semibold">
                  <div>
                    @
                    <a className="hover:text-primary-600 hover:dark:text-primary-400">snowyfield</a>
                  </div>
                  {segments.map((segment, index) => (
                    <div key={index} className="hidden xl:block">
                      /
                      <Link href={`/${segments.slice(0, index + 1).join('/')}`}>
                        <a
                          className={
                            segment !== 'tag'
                              ? 'cursor-pointer hover:text-primary-600 hover:dark:text-primary-400'
                              : 'cursor-default'
                          }
                        >
                          {segment}
                        </a>
                      </Link>
                    </div>
                  ))}
                  <div className="block -translate-y-1 xl:hidden">
                    {segments.length === 0 && (
                      <Typewriter
                        options={{
                          strings: [],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    )}
                  </div>
                  <div className="hidden -translate-y-1 xl:block">
                    <Typewriter
                      options={{
                        strings: [],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-base leading-5">
              <div className="hidden 2xl:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <CommandPalette navigation={navigation} />
              <ThemeSwitch />
              <DropMenu />

              <div className="ml-3 hidden cursor-pointer rounded py-1 lg:block">
                <Link className="link-underline">
                  <div className="flex flex-row px-1 font-medium">
                    {session ? (
                      <>
                        <div className="mr-2 flex flex-row items-center">
                          {session.user?.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              className="h-6 w-6 cursor-pointer rounded-full"
                              src={session.user.image}
                              alt="User Profile Icon"
                            />
                          ) : (
                            ''
                          )}
                        </div>
                        <div onClick={() => signOut()}>Sign Out</div>
                      </>
                    ) : (
                      <>
                        <EnterIcon className="mt-1 mr-4" />
                        <div onClick={() => signIn()}>Sign In</div>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-3 flex min-w-0 items-center text-lg font-medium xl:hidden">
            {segments.map((segment, index) => (
              <div
                key={index}
                className={
                  index === segments.length - 1 ? 'overflow-hidden truncate text-ellipsis' : ''
                }
              >
                /
                <Link href={`/${segments.slice(0, index + 1).join('/')}`}>
                  <a
                    className={
                      segment !== 'tag'
                        ? 'cursor-pointer hover:text-primary-600 hover:dark:text-primary-400'
                        : 'cursor-default'
                    }
                  >
                    {segment}
                  </a>
                </Link>
              </div>
            ))}
            <div className=" -translate-y-1">
              {segments.length != 0 && (
                <Typewriter
                  options={{
                    strings: [],
                    autoStart: true,
                    loop: true,
                  }}
                />
              )}
            </div>
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
