import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Activity, Pill, Droplets, Moon, CheckCircle2, Circle, Clock, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="dashboard-container" style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
      <header className="dashboard-header">
        <h1>Good morning, Alex.</h1>
        <p>Here's your health summary for today.</p>
      </header>

      {/* Primary Status Card */}
      <Card className="status-card">
        <div className="status-card-icon">
           <Activity size={120} />
        </div>
        <div className="status-card-content">
          <div>
            <h2>Overall Status</h2>
            <p>Your symptoms are well-managed today. Keep up the good work!</p>
            <div className="status-tags">
               <span className="tag-stable">Stable</span>
               <span className="tag-streak">Day 14 Streak</span>
            </div>
          </div>
          <Button variant="primary">Log Symptoms</Button>
        </div>
      </Card>

      <div className="dashboard-grid">
        
        {/* Left Column: Daily Tasks */}
        <div className="dashboard-col-left" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <section>
            <div className="section-header">
              <h3 className="section-title">Daily Checklist</h3>
              <span className="section-subtitle">2 of 5 completed</span>
            </div>
            
            <div className="checklist-container">
              {/* Task Item */}
              <Card className="task-item">
                <button className="task-btn-completed">
                  <CheckCircle2 size={28} />
                </button>
                <div className="task-content">
                  <h4 className="task-title completed">Morning Medication</h4>
                  <p className="task-desc">
                    <Pill size={14} /> Lisinopril 10mg
                  </p>
                </div>
                <span className="task-time-completed">8:00 AM</span>
              </Card>

              {/* Task Item */}
              <Card className="task-item">
                <button className="task-btn-pending">
                  <Circle size={28} strokeWidth={2} />
                </button>
                <div className="task-content">
                  <h4 className="task-title">Afternoon Check-in</h4>
                  <p className="task-desc">
                    <Activity size={14} /> Blood Pressure Reading
                  </p>
                </div>
                <span className="task-time-pending">
                  <Clock size={12} /> 2:00 PM
                </span>
              </Card>

              {/* Task Item */}
              <Card className="task-item">
                <button className="task-btn-pending">
                  <Circle size={28} strokeWidth={2} />
                </button>
                <div className="task-content">
                  <h4 className="task-title">Evening Walk</h4>
                  <p className="task-desc">
                     30 minutes light activity
                  </p>
                </div>
                <span className="task-time-completed">5:30 PM</span>
              </Card>
            </div>
          </section>

          <section>
            <h3 className="section-title" style={{ marginBottom: '1rem' }}>Recent Insights</h3>
            <div className="insights-grid">
              <Card className="insight-card">
                <div className="insight-icon-sleep">
                  <Moon size={20} />
                </div>
                <h4 className="insight-title">Sleep Quality</h4>
                <p className="insight-desc">You've averaged 7.5 hours of sleep this week, improving your recovery score.</p>
                <a href="#" className="insight-link" style={{ color: 'var(--color-primary)' }}>View details <ChevronRight size={16} /></a>
              </Card>
              <Card className="insight-card">
                <div className="insight-icon-water">
                  <Droplets size={20} />
                </div>
                <h4 className="insight-title">Hydration Level</h4>
                <p className="insight-desc">You're slightly below your daily water intake goal. Try to drink more.</p>
                <a href="#" className="insight-link" style={{ color: 'var(--color-primary)' }}>View details <ChevronRight size={16} /></a>
              </Card>
            </div>
          </section>
        </div>

        {/* Right Column: Quick Stats & Appointments */}
        <div className="dashboard-col-right" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <section>
            <h3 className="section-title" style={{ marginBottom: '1rem' }}>Upcoming Care</h3>
            <Card className="appointment-card">
               <div className="appointment-header">
                 <div>
                   <span className="appointment-tag">Tomorrow</span>
                   <h4 className="appointment-doctor">Dr. Sarah Jenkins</h4>
                   <p className="appointment-type">Cardiology Follow-up</p>
                 </div>
               </div>
               <div className="appointment-details">
                  <div className="appointment-detail-col">
                     <p className="appointment-detail-label">Time</p>
                     <p className="appointment-detail-value">10:30 AM</p>
                  </div>
                  <div className="appointment-detail-col">
                     <p className="appointment-detail-label">Location</p>
                     <p className="appointment-detail-value">North Wing, Rm 402</p>
                  </div>
               </div>
            </Card>
          </section>

          <section>
             <h3 className="section-title" style={{ marginBottom: '1rem' }}>Vitals Snapshot</h3>
             <div className="vitals-container">
               <Card className="vital-card">
                  <div>
                    <p className="vital-label">Heart Rate</p>
                    <p className="vital-value">72 <span className="vital-unit">bpm</span></p>
                  </div>
                  <div className="vital-chart-placeholder">Chart</div>
               </Card>
               <Card className="vital-card">
                  <div>
                    <p className="vital-label">Blood Pressure</p>
                    <p className="vital-value">118/76 <span className="vital-unit">mmHg</span></p>
                  </div>
                  <div className="vital-chart-placeholder">Chart</div>
               </Card>
             </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
