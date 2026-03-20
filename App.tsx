import React, { useState } from 'react';
import { 
  Users, 
  Target, 
  Zap, 
  Calendar, 
  ArrowRight, 
  Box, 
  TrendingUp, 
  Activity,
  Layers,
  Settings,
  Code2,
  Cpu,
  LogIn,
  LogOut,
  Plus,
  Check
} from 'lucide-react';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [juneethTasks, setJuneethTasks] = useState([
    "Lead capture automation",
    "Automation flow scaling",
    "Process optimization engines"
  ]);
  const [rahulTasks, setRahulTasks] = useState([
    "Academic quality audits",
    "Teacher feedback systems",
    "Center operation alignment"
  ]);
  
  const [newTask, setNewTask] = useState("");
  const [activeAdding, setActiveAdding] = useState<string | null>(null);

  const addTask = (person: string) => {
    if (!newTask) return;
    if (person === 'juneeth') setJuneethTasks([...juneethTasks, newTask]);
    if (person === 'rahul') setRahulTasks([...rahulTasks, newTask]);
    setNewTask("");
    setActiveAdding(null);
  };

  return (
    <div className="dashboard">
      {/* Header Section */}
      <header className="header">
        <div className="title-area">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Chate 2.0</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Central Control Room</p>
        </div>
        
        <div className="metrics" style={{ alignItems: 'center' }}>
          <div className="metric-item">
            <span className="metric-label">Main Teams</span>
            <span className="metric-value">5</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">Strategic Tracks</span>
            <span className="metric-value">3</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">Priority</span>
            <span className="metric-value" style={{ color: '#f87171' }}>HIGH</span>
          </div>
          <button 
            className="auth-btn"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <LogOut size={18} /> Sign Out
              </span>
            ) : (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <LogIn size={18} /> Sign In
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Execution Pipeline */}
      <section className="pipeline">
        <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity size={24} color="var(--accent-blue)" />
          Execution Flow
        </h2>
        <div className="pipeline-steps">
          {[
            "Vision & Leadership",
            "Planning & Finance",
            "Funnels & Automation",
            "Content & Marketing",
            "Academics & Delivery",
            "Admissions & Parent Success"
          ].map((label, i) => (
            <div key={label} className="step">
              <span className="step-num">STEP 0{i + 1}</span>
              <span className="step-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Grid of Cards */}
      <div className="grid">
        {/* Person Card: Juneeth */}
        <div className="card">
          <div className="card-title">
            <Code2 size={28} color="var(--accent-blue)" />
            Juneeth
            <span className="status-badge">BUILDING / SYSTEMS</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Focus: Funnels, Automation, Systems. Leading lead capture and process optimization.
          </p>
          <ul className="task-list">
            {juneethTasks.map((t, idx) => (
              <li key={idx} className="task-item"><div className="task-dot" /> {t}</li>
            ))}
          </ul>
          
          {isLoggedIn && (
            <>
              {activeAdding === 'juneeth' ? (
                <div className="task-form">
                  <input 
                    className="task-input" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter new task..."
                    autoFocus
                  />
                  <button className="save-btn" onClick={() => addTask('juneeth')}>Save</button>
                </div>
              ) : (
                <button className="add-task-btn" onClick={() => setActiveAdding('juneeth')}>
                  <Plus size={16} /> Add Task
                </button>
              )}
            </>
          )}

          <div style={{ marginTop: '1.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
             {juneethTasks.length + 3} LIVE FLOWS
          </div>
        </div>

        {/* Person Card: Rahul */}
        <div className="card">
          <div className="card-title">
            <Cpu size={28} color="var(--accent-purple)" />
            Rahul
            <span className="status-badge" style={{ backgroundColor: 'var(--accent-purple)' }}>CORE DRIVER</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Focus: Academics, Operations. Driving academic quality and teacher systems alignment.
          </p>
          <ul className="task-list">
            {rahulTasks.map((t, idx) => (
              <li key={idx} className="task-item"><div className="task-dot" style={{ background: 'var(--accent-purple)' }} /> {t}</li>
            ))}
          </ul>

          {isLoggedIn && (
            <>
              {activeAdding === 'rahul' ? (
                <div className="task-form">
                  <input 
                    className="task-input" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter new task..."
                    autoFocus
                  />
                  <button className="save-btn" style={{ background: 'var(--accent-purple)' }} onClick={() => addTask('rahul')}>Save</button>
                </div>
              ) : (
                <button className="add-task-btn" onClick={() => setActiveAdding('rahul')}>
                  <Plus size={16} /> Add Task
                </button>
              )}
            </>
          )}

          <div style={{ marginTop: '1.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
             {rahulTasks.length + 2} CORE PRIORITIES
          </div>
        </div>

        {/* Product Card: P2 */}
        <div className="card">
          <div className="card-title">
            <Box size={28} color="var(--success)" />
            P2 Licensed Products
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Building and scaling Chate-managed new products.
          </p>
          <div className="progress-container">
            <div className="progress-header">
              <span>Overall Progress</span>
              <span style={{ color: 'var(--success)', fontWeight: 700 }}>54%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '54%', background: 'var(--success)' }} />
            </div>
          </div>
        </div>

        {/* Product Card: P3 */}
        <div className="card">
          <div className="card-title">
            <TrendingUp size={28} color="var(--warning)" />
            P3 Sampurna Growth
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Experimenting with new growth bets and refining long-term offers.
          </p>
          <div className="progress-container">
            <div className="progress-header">
              <span>Overall Progress</span>
              <span style={{ color: 'var(--warning)', fontWeight: 700 }}>37%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '37%', background: 'var(--warning)' }} />
            </div>
          </div>
        </div>

        {/* Branch Tracking */}
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <div className="card-title">
            <Users size={28} color="#fff" />
            Branch Teams
            <span className="status-badge" style={{ backgroundColor: '#fff', color: '#000' }}>NEEDS TRACKING</span>
          </div>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ marginBottom: '1rem' }}>Operational Focus</h4>
              <ul className="task-list">
                <li className="task-item"><div className="task-dot" style={{ background: '#fff' }} /> Admissions & Lead Handling</li>
                <li className="task-item"><div className="task-dot" style={{ background: '#fff' }} /> Counseling & Parent Follow-ups</li>
                <li className="task-item"><div className="task-dot" style={{ background: '#fff' }} /> Ground execution at Centers</li>
              </ul>
            </div>
            <div style={{ flex: 1, textAlign: 'right' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800 }}>24+</div>
              <div style={{ color: 'var(--text-secondary)' }}>ACTIVE CENTERS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
