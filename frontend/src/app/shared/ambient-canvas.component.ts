import { Component, ElementRef, OnInit, OnDestroy, ViewChild, AfterViewInit, NgZone } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

@Component({
  selector: 'app-ambient-canvas',
  standalone: true,
  template: `
    <canvas #canvas class="ambient-canvas"></canvas>
  `,
  styles: [`
    :host {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
      z-index: 0;
    }
    .ambient-canvas {
      width: 100%;
      height: 100%;
      display: block;
      opacity: 0.22;
    }
  `]
})
export class AmbientCanvasComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrameId: number | null = null;
  private particles: Particle[] = [];
  private resizeListener!: () => void;
  private readonly particleCount = 38; // Subtle, elegant, not overcrowded
  private width = 0;
  private height = 0;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initCanvas();
    this.createParticles();
    
    // Run outside Angular change detection loop for buttery smooth 60fps performance
    this.ngZone.runOutsideAngular(() => {
      this.animate();
    });

    this.resizeListener = () => {
      this.resizeCanvas();
    };
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.resizeListener);
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.resizeCanvas();
  }

  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.width = canvas.parentElement?.clientWidth || window.innerWidth;
    this.height = canvas.parentElement?.clientHeight || window.innerHeight;
    canvas.width = this.width;
    canvas.height = this.height;
  }

  private createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * (this.width || 800),
        y: Math.random() * (this.height || 600),
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 0.8,
        alpha: Math.random() * 0.5 + 0.2
      });
    }
  }

  private animate() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // Draw connecting threads between close particles
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(45, 212, 191, ${0.14 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(this.particles[i].x, this.particles[i].y);
          ctx.lineTo(this.particles[j].x, this.particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Update & draw particles
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(45, 212, 191, ${p.alpha})`;
      ctx.fill();
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}
