import React from 'react'

export default function HomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-6">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                        <i className="fa fa-paw"></i>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>Configuration Management</h4>
                            <p>Also referred to as CMDB (Configuration Management DataBase) is a repository of IT environment.</p>
                            
                            <p>A CMDB is a critical asset for the move to Cloud, since the CMDB includes assets (also referred to as configuration items and relationships between them.</p>
                            <p><a href="/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-6">
                <div className="card is-shady">
                     <div className="card-image has-text-centered">
                        <i className="fa fa-empire"></i>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>Migration to Cloud</h4>
                            <p>Visibility into the progress of migration of on-premises assets to Cloud. Views include the migration plan, number of servers planned and actuals by wave and the progress against the plan. </p>
                            <p><a href="/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
