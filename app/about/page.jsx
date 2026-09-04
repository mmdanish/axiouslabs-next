import { Target, Eye, Heart } from "lucide-react";
import Image from "next/image";
import { FadeIn, Stagger, StaggerItem, Counter } from "@/components/Motion";

export const metadata = {
  title: "About",
  description:
    "axiouslabs is a global technology company building software, cloud and AI systems for ambitious enterprises.",
};

const teamMembers = [
  { name: "Hisham Ali Elachola", role: "Co-Founder & Chief Executive Officer", image: "/teams/hisham.jpeg" },
  { name: "Salman Faris PT", role: "Co-Founder & Chief Technology Officer", image: "/teams/salman.jpeg" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero border-b border-border">
        <div className="container-prose pt-20 pb-16 max-w-3xl">
          <FadeIn>
            <p className="text-sm font-medium text-brand">About</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-primary">
              Building Digital Solutions That Drive Growth.
            </h1>
            <p className="mt-5 text-base text-muted-foreground">
              Founded by two passionate graduates, axiouslabs was born from a shared vision to make technology
              accessible, scalable, and impactful. What started as a small venture between college friends has
              evolved into a growing technology company helping businesses build websites, applications, cloud
              solutions, and digital experiences that create real value.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-prose py-24 grid lg:grid-cols-12 gap-10">
        <FadeIn className="lg:col-span-5">
          <h2 className="text-3xl font-semibold tracking-tight text-primary">Our story</h2>
        </FadeIn>
        <FadeIn delay={0.1} className="lg:col-span-7 space-y-4 text-muted-foreground">
          <p>
            axiouslabs was founded by Hisham Ali Elachola and Salman Faris PT, two college friends united by a passion
            for technology, innovation, and entrepreneurship. What began as their first venture, GreenWall, evolved into
            AxiousLabs as their expertise, vision, and ambitions grew.
          </p>
          <p>
            Today, axiouslabs delivers web and application development, cloud services, IT consulting, UI/UX design,
            branding, and digital marketing solutions while building innovative products like SellOps. Backed by a
            talented team of developers, designers, consultants, and innovators, axiouslabs is committed to creating
            technology that helps businesses grow, scale, and succeed in a digital-first world.
          </p>
        </FadeIn>
      </section>

      <section className="bg-muted/40 border-y border-border">
        <div className="container-prose py-24">
          <Stagger className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Target, title: "Mission", body: "Building innovative technology solutions that drive growth and create meaningful digital experiences." },
              { icon: Eye, title: "Vision", body: "Empowering businesses to grow beyond boundaries through technology and digital innovation." },
              { icon: Heart, title: "Values", body: "Craft over scale. Candor over comfort. Long-term thinking. Take the work seriously, not ourselves." },
            ].map(({ icon: Icon, title, body }) => (
              <StaggerItem key={title}>
                <div className="h-full rounded-2xl bg-card border border-border p-7 shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-primary">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-prose py-24">
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { v: 4, s: "+", l: "Years in business" },
            { v: 40, s: "+", l: "Engineers & designers" },
            { v: 25, s: "+", l: "Projects shipped" },
            { v: 3, s: "", l: "Countries served" },
          ].map((st) => (
            <StaggerItem key={st.l}>
              <div className="text-center md:text-left">
                <div className="text-4xl sm:text-5xl font-semibold bg-gradient-brand bg-clip-text text-transparent">
                  <Counter to={st.v} suffix={st.s} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{st.l}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-muted/40 border-t border-border">
        <div className="container-prose py-24">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-brand">Team</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-primary">
                Meet the people behind axiouslabs.
              </h2>
              <p className="mt-4 text-muted-foreground">
                We&apos;re a passionate team of founders, developers, designers, and innovators dedicated to building
                technology that makes a difference.
              </p>
            </div>
          </FadeIn>
          <Stagger className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="rounded-2xl bg-card border border-border p-5 text-center">
                  <div className="mx-auto h-20 w-20 rounded-full overflow-hidden relative">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="mt-4 font-medium text-primary">{member.name}</div>
                  <div className="text-xs text-muted-foreground">{member.role}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
