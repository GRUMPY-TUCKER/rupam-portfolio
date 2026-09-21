import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';

import gsap from 'gsap';
import * as THREE from 'three';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class Hero implements AfterViewInit, OnDestroy {

  @ViewChild('scene')
  sceneElement!: ElementRef<HTMLDivElement>;

  private readonly isBrowser: boolean;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private ambientLight!: THREE.AmbientLight;
  private keyLight!: THREE.DirectionalLight;
  private rimLight!: THREE.DirectionalLight;

  private animationId = 0;
  private particles!: THREE.Points;

  private mouseX = 0;
  private mouseY = 0;
  private scrollProgress = 0;

  constructor(
    @Inject(PLATFORM_ID)
    platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {

    if (!this.isBrowser || !this.sceneElement?.nativeElement) {
      return;
    }

    this.initializeScene();
    this.createLights();
    this.createParticles();
    this.bindScroll();
    this.animate();

    window.addEventListener(
      'mousemove',
      this.handleMouseMove
    );

    window.addEventListener(
      'resize',
      this.handleResize
    );
  }

  private initializeScene(): void {

    const container = this.sceneElement.nativeElement;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      32,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );

    this.camera.position.set(0, 1.1, 8.5);

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(container.clientWidth, container.clientHeight);

    container.appendChild(this.renderer.domElement);
  }

  private createLights(): void {

    this.ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    this.scene.add(this.ambientLight);

    this.keyLight = new THREE.DirectionalLight(0x8c7cff, 2.4);
    this.keyLight.position.set(4, 6, 5);
    this.scene.add(this.keyLight);

    this.rimLight = new THREE.DirectionalLight(0xff6ec7, 1.8);
    this.rimLight.position.set(-4, 2, -4);
    this.scene.add(this.rimLight);
  }

  private createParticles(): void {

    const particleCount = 260;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x8c7cff,
      size: 0.028,
      transparent: true,
      opacity: 0.8
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  private bindScroll(): void {

    const updateScrollState = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      this.scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
  }

  private animate = (): void => {

    if (!this.renderer || !this.camera || !this.scene) {
      return;
    }

    this.animationId = requestAnimationFrame(this.animate);

    this.particles.rotation.y += 0.0002;
    this.particles.rotation.x += 0.00005;

    const targetX = this.mouseX * 0.8;
    const targetY = -this.mouseY * 0.55 + this.scrollProgress * 0.7;
    const targetZ = 8.2 + this.scrollProgress * 0.9;

    this.camera.position.x += (targetX - this.camera.position.x) * 0.04;
    this.camera.position.y += (targetY - this.camera.position.y) * 0.04;
    this.camera.position.z += (targetZ - this.camera.position.z) * 0.04;

    this.camera.lookAt(0, 0.8, 0);
    this.renderer.render(this.scene, this.camera);
  };

  private handleMouseMove = (event: MouseEvent): void => {

    this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouseY = (event.clientY / window.innerHeight) * 2 - 1;
  };

  private handleResize = (): void => {

    const width = this.sceneElement.nativeElement.clientWidth;
    const height = this.sceneElement.nativeElement.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  ngOnDestroy(): void {

    if (typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.animationId);
    }

    if (typeof window !== 'undefined') {
      window.removeEventListener('mousemove', this.handleMouseMove);
      window.removeEventListener('resize', this.handleResize);
    }

    if (this.renderer) {
      this.renderer.dispose();
    }
  }

}