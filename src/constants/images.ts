import binter from '../assets/images/projects/binter/binter-banner.png';
import canaryfly from '../assets/images/projects/canaryfly/canaryfly-banner.png';
import cryptotracker from '../assets/images/projects/cryptotracker/CT-banner.webp';
import delyo from '../assets/images/projects/delyo/delyo-banner-en.webp';
import financialManager from '../assets/images/projects/financial-manager/financial-manager.webp';
import kompkit from '../assets/images/projects/kompkit/kompkit.jpeg';
import novaflow from '../assets/images/projects/novaflow/novaflow.webp';

/**
 * Project images live in src/assets so Astro processes them at build time:
 * it emits resized, modern-format variants and knows their dimensions, so
 * <Image> can set width/height and a srcset without us tracking any of it.
 */
export const PROJECT_IMAGES = {
  binter,
  canaryfly,
  cryptotracker,
  delyo,
  financialManager,
  kompkit,
  novaflow
} as const;

export type ProjectImageKey = keyof typeof PROJECT_IMAGES;

export function getProjectImage(project: ProjectImageKey) {
  return PROJECT_IMAGES[project];
}
