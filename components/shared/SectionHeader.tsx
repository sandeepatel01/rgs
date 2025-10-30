import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({
  subtitle,
  title,
  description,
  centered = true,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      className={centered ? "text-center" : ""}
    >
      {subtitle && (
        <motion.p
          className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm inline-block px-4 py-1 bg-primary/10 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
