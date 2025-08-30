export default function Footer() {
    return (
            <footer className="bg-red-600 text-center pt-4 flex flex-col">
       <span className="font-bold text-3xl">I am not affiliated with New Blood Interactive!</span>
      <div className="flex flex-row justify-center items-center gap-2">
        <a  href="/disclaimer" className="underline font-bold text-2xl">Disclaimer</a>
        <a href="https://alex427.com/portofolio#donations" className="underline content-center">Donations</a>
      </div>

    </footer>
    )
}