import Link from "next/link";
import { reader } from "./reader";
import HeadShot from "@/components/headShot";
import HeadingHighlight from "@/components/headingHighlight";
import "./styles.css";

export default async function Homepage() {
	const posts = await reader.collections.posts.all();

	return (
		<>
			<main className="px-4 prose prose-stone mx-auto home">
				<section className="p-6 stack-sm border-2 border-black mb-12 bg-pink-200 font-jet prose-p:m-0">
					<p>
						I am a father with over 10 years of experience as a web developer, specializing in WordPress, Next.js, Astro, and Tailwind CSS. Since 2015, I have
						been successfully working remotely, embracing the flexibility and freedom it offers.
					</p>
				</section>
				<section>
					<HeadingHighlight title="Stacks" />
					<p>
						As a web developer, my commitment lies in creating exceptional user experiences. I leverage my expertise to build robust and visually appealing web
						applications using WordPress, Next.js, Astro, and Tailwind CSS. These technologies enable me to develop responsive and efficient designs, ensuring
						that every website I create is both visually captivating and functionally powerful.
					</p>

					<HeadingHighlight title="Remote Working" />
					<p>
						In addition to my technical skills, I strongly believe in the advantages of remote work. It allows me to optimize productivity and strike a healthy
						work-life balance. Collaborating seamlessly with clients and team members from anywhere in the world, I utilize modern communication tools to
						deliver outstanding results.
					</p>
					<HeadingHighlight title="Dad" />
					<p>
						Being a dedicated father, I have developed strong time management and communication skills. These skills enable me to collaborate effectively with
						clients, colleagues, and team members, ensuring that projects are completed on time and exceed expectations.
					</p>
					<HeadingHighlight title="Experience" />
					<p>
						With over a decade of experience in the field, I have successfully transformed numerous ideas and concepts into fully functional websites. My deep
						understanding of web development principles, best practices, and industry standards allows me to provide tailored solutions that meet the unique
						requirements of clients.
					</p>

					<p>
						I am always enthusiastic about staying up-to-date with the latest trends and innovations in web development. By continuously expanding my knowledge
						and exploring new approaches, I strive to deliver cutting-edge solutions that push the boundaries of what can be achieved on the web.
					</p>
					<HeadingHighlight title="TL;DR" />
					<p>
						I am an experienced web developer specializing in WordPress, Next.js, Astro, and Tailwind CSS. Balancing my commitment to my work with a deep
						appreciation for family, I bring a balanced perspective to every project. With the blend of remote work advantages, technical expertise, and years
						of experience, I deliver exceptional web solutions that seamlessly merge functionality and aesthetic appeal.
					</p>
				</section>

				{/* <section>
					<HeadingHighlight title="Posts" />
					<ul>
						{posts.map((post) => (
							<li key={post.slug}>
								<Link href={`/${post.slug}`}>{post.entry.title}</Link>
							</li>
						))}
					</ul>
				</section> */}
			</main>
		</>
	);
}
