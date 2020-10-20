import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <div className="box cta">
        <p className="has-text-centered">
          A single stop-shop for managing Configration Management items (servers and applications) and managing workloads move to Cloud.
        </p>
      </div>
      <HomeContent />
    </Fragment>
  )
}
