import { SearchIcon } from "lucide-react"

export const Searchinput = () => {
    return (
        <form action="" className="flex w-full max-w-[600px]">
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-4 py-2 pr-12 rounded-l-full border focus:outline-none focus:border-blue-500 disabled:opacity-50 disabled:cursor-none"
                />

                {/* TODO: add remove search bouton */}
            </div>
            <button
                type="submit"
                className="px-3 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200"
            >
                <SearchIcon className="size-5" />
            </button>
        </form>
    )
}
