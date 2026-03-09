/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Timeline from './components/Timeline';
import LoveLetter from './components/LoveLetter';
import Gallery from './components/Gallery';
import FloatingHearts from './components/FloatingHearts';

export default function App() {
  return (
    <main className="min-h-screen relative selection:bg-rose-200 selection:text-rose-900 bg-rose-50">
      <FloatingHearts />
      <Hero />
      <Timeline />
      <Gallery />
      <LoveLetter />
    </main>
  );
}
