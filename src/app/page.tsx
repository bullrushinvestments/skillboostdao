import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillBoostDAO',
  description: 'SkillBoostDAO is a Web3-powered platform that combines micro-SaaS tools and educational technology to help small businesses and professionals upskill through niche expertise communities, with a decentralized approach that incentivizes both learners and educators.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">SkillBoostDAO</h1>
      <p className="mt-4 text-lg">SkillBoostDAO is a Web3-powered platform that combines micro-SaaS tools and educational technology to help small businesses and professionals upskill through niche expertise communities, with a decentralized approach that incentivizes both learners and educators.</p>
    </main>
  )
}
