import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

let initialized = false;

export async function initParticles() {
  if (initialized) return;

  await loadSlim(tsParticles);
  initialized = true;
}
