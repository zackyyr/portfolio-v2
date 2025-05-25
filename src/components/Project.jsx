import React from 'react';

const projects = [
  {
    title: 'Agency Owner App',
    date: 'HR Tech',
    description:
      'A SaaS dashboard designed for agency owners to manage clients, contracts, and internal HR processes efficiently using modern tech stacks.',
    image: '/project.svg',
    tags: ['Next.js', 'Typescript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe', 'Shadcn UI', 'Magic UI'],
    links: [{ label: 'Go to Project', url: '#' }],
  },
  {
    title: 'E-Commerce',
    date: 'E-Commerce',
    description:
      'A high-performance e-commerce storefront with optimized checkout, real-time inventory, and Stripe-powered payments for seamless shopping experiences.',
    image: '/project.svg',
    tags: ['Next.js', 'Typescript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe', 'Shadcn UI', 'Magic UI'],
    links: [{ label: 'Go to Project', url: '#' }],
  },
  {
    title: 'Learning Management System',
    date: 'EdTech',
    description:
      'A scalable LMS for online educators, featuring course creation tools, student tracking, and progress analytics powered by modern web technology.',
    image: '/project.svg',
    tags: ['Next.js', 'Typescript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe', 'Shadcn UI', 'Magic UI', 'Cloudflare Workers'],
    links: [{ label: 'Go to Project', url: '#' }],
  },
  {
    title: 'Inventory Management System',
    date: 'IMS',
    description:
      'An intuitive inventory management platform for businesses to track stock, generate reports, and automate restocking workflows.',
    image: '/project.svg',
    tags: ['Next.js', 'Typescript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Shadcn UI', 'Magic UI', 'Stripe', 'Cloudflare Workers'],
    links: [{ label: 'Go to Project', url: '#' }],
  },
];

const Project = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-medium bg-black text-white py-1 px-3 rounded-full">
          Projects
        </span>
        <h2 className="text-4xl font-bold mt-4 mb-5">
          Real-World Case Studies I've Figured Out
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Each of these projects is more than just code — they are real-world problems I’ve identified and solved through thoughtful design and development. Here's a selection of case studies demonstrating my approach to practical challenges.
        </p>

      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg shadow-sm hover:shadow-md transition border border-gray-700 min-h-[560px] flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-lg aspect-video">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{project.date}</p>
                <p className="text-gray-400 mb-5 mt-5">{project.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-sm px-2 py-1 rounded-full text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      className="text-sm font-medium px-4 py-2 border border-black bg-white text-black rounded-md transition duration-200 hover:bg-[#2B3EF4] hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;