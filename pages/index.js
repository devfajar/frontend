import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout title={process.env.appName}>
      <h1>Hi!</h1>
    </Layout>
  )
}
