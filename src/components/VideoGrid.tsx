import { motion } from "framer-motion";
import gridVideo1 from "../../public/grid-video-1.mp4.asset.json";
import gridVideo2 from "../../public/grid-video-2.mp4.asset.json";
import gridVideo3 from "../../public/grid-video-3.mp4.asset.json";
import gridVideo4 from "../../public/grid-video-4.mp4.asset.json";

const videos = [
  { src: gridVideo1.url, title: "AI-Powered Analytics" },
  { src: gridVideo2.url, title: "Premium Infrastructure" },
  { src: gridVideo3.url, title: "Strategic Consulting" },
  { src: gridVideo4.url, title: "Data-Driven Insights" },
];

export default function VideoGrid() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            What We Do
          </p>
          <h2
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Innovation in Action
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Explore how we deliver cutting-edge solutions across finance,
            technology, and marketing in the GCC.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden rounded-xl shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                <div className="relative aspect-video overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={video.src}
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-sm font-semibold text-foreground">
                {video.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
