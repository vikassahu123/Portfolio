import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terminal-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="terminal-container">
      <div class="terminal-header">
        <div class="window-controls">
          <span class="control red"></span>
          <span class="control yellow"></span>
          <span class="control green"></span>
        </div>
        <div class="tab-list">
          <button 
            class="tab-btn" 
            [class.active]="activeTab === 'profile'"
            (click)="activeTab = 'profile'">
            developer-profile.ts
          </button>
          <button 
            class="tab-btn" 
            [class.active]="activeTab === 'stack'"
            (click)="activeTab = 'stack'">
            stack-spec.json
          </button>
        </div>
        <div class="terminal-meta">
          <span class="pulse-dot"></span>
          <span class="status-text">AVAILABLE</span>
        </div>
      </div>

      <div class="terminal-body" *ngIf="activeTab === 'profile'">
        <div class="line"><span class="c-dim">1</span> <span class="c-purple">interface</span> <span class="c-yellow">SoftwareEngineer</span> {{ '{' }}</div>
        <div class="line"><span class="c-dim">2</span>   <span class="c-cyan">name</span>: <span class="c-green">"Vikas Sahu"</span>;</div>
        <div class="line"><span class="c-dim">3</span>   <span class="c-cyan">role</span>: <span class="c-green">"Full Stack Software Developer"</span>;</div>
        <div class="line"><span class="c-dim">4</span>   <span class="c-cyan">backend</span>: <span class="c-green">"Java, Spring Boot, Python &amp; FastAPI"</span>;</div>
        <div class="line"><span class="c-dim">5</span>   <span class="c-cyan">frontend</span>: <span class="c-green">"Angular + TypeScript"</span>;</div>
        <div class="line"><span class="c-dim">6</span>   <span class="c-cyan">database</span>: <span class="c-green">"MySQL Relational Architecture"</span>;</div>
        <div class="line"><span class="c-dim">7</span>   <span class="c-cyan">aiPipelines</span>: <span class="c-green">"LangChain, RAG Pipeline &amp; n8n"</span>;</div>
        <div class="line"><span class="c-dim">8</span>   <span class="c-cyan">freelancing</span>: <span class="c-yellow">true</span>; <span class="c-comment">// Open for projects</span></div>
        <div class="line"><span class="c-dim">9</span> {{ '}' }}</div>
        <div class="line"><span class="c-dim">10</span></div>
        <div class="line"><span class="c-dim">11</span> <span class="c-purple">export default</span> developer; <span class="cursor-blink">█</span></div>
      </div>

      <div class="terminal-body" *ngIf="activeTab === 'stack'">
        <div class="line"><span class="c-dim">1</span> {{ '{' }}</div>
        <div class="line"><span class="c-dim">2</span>   <span class="c-cyan">"backend"</span>: <span class="c-green">"Java, Spring Boot, Python, FastAPI"</span>,</div>
        <div class="line"><span class="c-dim">3</span>   <span class="c-cyan">"frontend"</span>: <span class="c-green">"Angular Standalone, RxJS, TypeScript"</span>,</div>
        <div class="line"><span class="c-dim">4</span>   <span class="c-cyan">"services"</span>: [<span class="c-green">"MySQL"</span>, <span class="c-green">"FastAPI"</span>],</div>
        <div class="line"><span class="c-dim">5</span>   <span class="c-cyan">"genAI"</span>: {{ '{' }}</div>
        <div class="line"><span class="c-dim">6</span>     <span class="c-cyan">"langchain"</span>: <span class="c-green">"Agent Orchestration &amp; Tool Chains"</span>,</div>
        <div class="line"><span class="c-dim">7</span>     <span class="c-cyan">"ragPipeline"</span>: <span class="c-green">"Vector Embeddings &amp; Context Retrieval"</span>,</div>
        <div class="line"><span class="c-dim">8</span>     <span class="c-cyan">"agentic"</span>: <span class="c-green">"Autonomous GitHub Reviewer via n8n"</span></div>
        <div class="line"><span class="c-dim">9</span>   {{ '}' }}</div>
        <div class="line"><span class="c-dim">10</span> {{ '}' }} <span class="cursor-blink">█</span></div>
      </div>
    </div>
  `,
  styles: [`
    .terminal-container {
      background: #030712;
      border: 1px solid rgba(45, 212, 191, 0.25);
      border-radius: 12px;
      box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(45, 212, 191, 0.05);
      overflow: hidden;
      font-family: var(--font-mono);
      font-size: 0.8125rem;
      transition: border-color 0.3s ease;
      width: 100%;
      max-width: 100%;
      min-width: 0;
    }
    .terminal-container:hover {
      border-color: rgba(45, 212, 191, 0.5);
    }
    .terminal-header {
      background: #0a0f1d;
      padding: 0.6rem 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      flex-wrap: wrap;
    }
    .window-controls {
      display: flex;
      gap: 6px;
      flex-shrink: 0;
    }
    .control {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .control.red { background: #ef4444; }
    .control.yellow { background: #f59e0b; }
    .control.green { background: #10b981; }

    .tab-list {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
    }
    .tab-btn {
      background: transparent;
      border: 1px solid transparent;
      color: #64748b;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      padding: 0.25rem 0.65rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .tab-btn:hover {
      color: #cbd5e1;
    }
    .tab-btn.active {
      color: #2dd4bf;
      background: rgba(45, 212, 191, 0.08);
      border-color: rgba(45, 212, 191, 0.2);
    }
    .terminal-meta {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
    }
    @media (max-width: 500px) {
      .terminal-header {
        padding: 0.45rem 0.65rem;
      }
      .terminal-meta {
        display: none;
      }
      .tab-btn {
        font-size: 0.6875rem;
        padding: 0.2rem 0.45rem;
      }
    }
    .pulse-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #2dd4bf;
      box-shadow: 0 0 8px #2dd4bf;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.8); }
    }
    .status-text {
      font-size: 0.6875rem;
      color: #2dd4bf;
      font-weight: 600;
      letter-spacing: 0.05em;
    }
    .terminal-body {
      padding: 1.25rem 1.25rem;
      background: rgba(3, 7, 18, 0.95);
      line-height: 1.65;
      overflow-x: auto;
      width: 100%;
      max-width: 100%;
      -webkit-overflow-scrolling: touch;
    }
    @media (max-width: 600px) {
      .terminal-body {
        padding: 0.85rem;
        font-size: 0.75rem;
      }
    }
    .line {
      white-space: pre;
    }
    .c-dim { color: #334155; margin-right: 0.75rem; user-select: none; display: inline-block; width: 1.25rem; text-align: right; }
    .c-purple { color: #c084fc; }
    .c-yellow { color: #facc15; }
    .c-cyan { color: #38bdf8; }
    .c-green { color: #4ade80; }
    .c-comment { color: #64748b; font-style: italic; }
    .cursor-blink {
      color: #2dd4bf;
      animation: blink 1s step-end infinite;
      display: inline-block;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `]
})
export class TerminalWidgetComponent {
  activeTab: 'profile' | 'stack' = 'profile';
}
