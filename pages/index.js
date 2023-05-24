import Link from "next/link"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout title={process.env.appName}>
      <div className="w-full p-4 shadow-md container mt-3">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">Skripsi Nugik</h3>
          <p className="text-gray-600">Aplikasi Bimbingan Skripsi</p>
          <Link href='/dashboard'>Dashboard</Link>
        </div>
      </div>
    </Layout>
  )
}
