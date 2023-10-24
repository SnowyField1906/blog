import { currentDayName } from '@/lib/utils/dateUtils'
import Link from './Link'
import NowPlaying from './NowPlaying'

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div className="">
          <NowPlaying />
        </div>
        <div className="mb-2 hidden text-sm text-gray-600 dark:text-gray-400 md:flex">
          <div className="mx-1">
            <Link href="https://snowyfield.vercel.app/" className="link-underline">
              SnowyField{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="https://qod.shakiltech.com/" className="link-underline">
              Have a good {currentDayName()}!
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="/contact" className="link-underline">
              Contact
            </Link>
          </div>
        </div>
        <div className="mb-2 text-sm text-gray-600 dark:text-gray-400 sm:block md:hidden lg:hidden">
          <div className="mx-1">
            <Link href="https://snowyfield.vercel.app" className="link-underline">
              SnowyField{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
