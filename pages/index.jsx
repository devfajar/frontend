import Link from "next/link"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout title={process.env.appName}>
      <div className="w-full p-4 shadow-md container mt-3">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">Skripsi Nugik</h3>
          <p className="text-gray-600">Aplikasi Bimbingan Skripsi</p>
          <Link href='/dashboard' className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Dashboard</Link>
        </div>
      </div>
    </Layout>
  )
}
