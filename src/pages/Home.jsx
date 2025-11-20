import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { MeshDistortMaterial, Sphere, Torus, Box, Text3D, Center, Html } from "@react-three/drei";
import * as THREE from 'three';
import { arrow } from "../assets/icons";

// Simple Floating Tech Icon - Minimal animation
function FloatingTechLogo({ tech, position, index }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      // Very gentle floating motion only (slower)
      groupRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.15 + index) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Fixed size icon - no transformations */}
      <Html
        transform
        center
        distanceFactor={8}
        style={{
          width: '90px',
          height: '90px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          borderRadius: '16px',
          padding: '14px',
          pointerEvents: 'none',
          border: `2px solid ${tech.color}`,
          boxShadow: `0 4px 12px ${tech.color}40`,
        }}
      >
        <img 
          src={tech.icon} 
          alt={tech.name}
          style={{ 
            width: '62px', 
            height: '62px',
            objectFit: 'contain',
          }}
        />
      </Html>
    </group>
  );
}

// Network Nodes with connecting lines
function NetworkNodes() {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  const nodes = [
    [-4, 3, -3], [4, 3, -3], [-4, -3, -3], [4, -3, -3],
    [0, 0, 0], [-2, 1, 1], [2, 1, 1], [0, -2, 1]
  ];

  return (
    <group ref={groupRef}>
      {nodes.map((position, i) => (
        <NetworkNode key={i} position={position} />
      ))}
    </group>
  );
}

function NetworkNode({ position }) {
  const nodeRef = useRef();
  
  useFrame((state) => {
    if (nodeRef.current) {
      nodeRef.current.scale.x = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.2;
      nodeRef.current.scale.y = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.2;
      nodeRef.current.scale.z = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.2;
    }
  });

  return (
    <mesh ref={nodeRef} position={position}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial 
        color="#06b6d4" 
        emissive="#06b6d4"
        emissiveIntensity={0.5}
        metalness={1}
        roughness={0.1}
      />
    </mesh>
  );
}

// Floating Holographic Screens
function HolographicScreens() {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <HoloScreen key={i} position={[
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10 - 5
        ]} />
      ))}
    </>
  );
}

function HoloScreen({ position }) {
  const meshRef = useRef();
  const speed = 0.3 + Math.random() * 0.2;
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * speed) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * speed * 0.5) * 1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[2, 1.5]} />
      <meshStandardMaterial 
        color="#8b5cf6"
        transparent
        opacity={0.3}
        metalness={0.9}
        roughness={0.1}
        emissive="#8b5cf6"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

// Rotating Tech Rings (like orbital rings)
function TechRings() {
  return (
    <>
      <RotatingRing radius={4} speed={0.5} color="#3b82f6" position={[0, 0, -3]} />
      <RotatingRing radius={5.5} speed={-0.3} color="#8b5cf6" position={[0, 0, -3]} />
      <RotatingRing radius={7} speed={0.4} color="#06b6d4" position={[0, 0, -3]} />
    </>
  );
}

function RotatingRing({ radius, speed, color, position }) {
  const ringRef = useRef();
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = 1;
      ringRef.current.rotation.y = state.clock.getElapsedTime() * speed;
    }
  });

  return (
    <mesh ref={ringRef} position={position}>
      <torusGeometry args={[radius, 0.05, 16, 100]} />
      <meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={1}
        roughness={0.2}
      />
    </mesh>
  );
}

// Data Cubes floating and rotating
function DataCubes() {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <DataCube key={i} position={[
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15 - 5
        ]} />
      ))}
    </>
  );
}

function DataCube({ position }) {
  const cubeRef = useRef();
  const speed = Math.random() * 0.5 + 0.3;
  
  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01 * speed;
      cubeRef.current.rotation.y += 0.01 * speed;
      cubeRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * speed * 0.3) * 0.5;
    }
  });

  return (
    <mesh ref={cubeRef} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial 
        color="#3b82f6"
        wireframe
        emissive="#3b82f6"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

// Particle System - Tech particles floating
function TechParticles() {
  const particlesRef = useRef();
  const count = 100;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 30;
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.getElapsedTime() + i) * 0.01;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#06b6d4"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

// Hexagonal Grid Pattern
function HexGrid() {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });
  
  const hexagons = [];
  for (let i = 0; i < 20; i++) {
    hexagons.push({
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 20,
        -10 + Math.random() * 5
      ],
      scale: 0.3 + Math.random() * 0.5
    });
  }
  
  return (
    <group ref={groupRef}>
      {hexagons.map((hex, i) => (
        <Hexagon key={i} position={hex.position} scale={hex.scale} />
      ))}
    </group>
  );
}

function Hexagon({ position, scale }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <cylinderGeometry args={[1, 1, 0.1, 6]} />
      <meshStandardMaterial 
        color="#8b5cf6"
        wireframe
        emissive="#8b5cf6"
        emissiveIntensity={0.2}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

// 3D Tech Card Component
function TechCard3D({ tech, position, index }) {
  const meshRef = useRef();
  const textRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() + index) * 0.3;
      meshRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.5 + index) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5 + index) * 0.3;
    }
  });
  
  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 1.5, 0.3]} />
        <meshStandardMaterial 
          color={tech.color}
          metalness={0.9}
          roughness={0.1}
          emissive={tech.color}
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Tech name on card */}
      <mesh position={[0, 0, 0.16]}>
        <planeGeometry args={[1.4, 0.3]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

// Container for all 3D floating tech logos
function TechLogos3D({ techStack }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      // Very slow, smooth rotation
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.01;
    }
  });
  
  // Arrange logos in a circular pattern
  const radius = 6;
  const positions = techStack.map((_, i) => {
    const angle = (i / techStack.length) * Math.PI * 2;
    const layer = Math.floor(i / 6); // 6 icons per layer
    return [
      Math.cos(angle) * (radius + layer * 1.5),
      (Math.sin(angle) * 2) + (layer * 1.5),
      Math.sin(angle) * (radius + layer * 1.5) - 8
    ];
  });
  
  return (
    <group ref={groupRef}>
      {techStack.map((tech, i) => (
        <FloatingTechLogo 
          key={i} 
          tech={tech} 
          position={positions[i]} 
          index={i}
        />
      ))}
    </group>
  );
}

const Home = () => {

  const techStack = [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React.js", color: "#61DAFB" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React Native", color: "#61DAFB" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg", name: "Next.js", color: "#000000" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript", color: "#3178C6" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS", color: "#06B6D4" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js", color: "#339933" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python", color: "#3776AB" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", name: "Django", color: "#092E20" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL", color: "#4479A1" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", name: "MS SQL", color: "#CC2927" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB", color: "#47A248" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git", color: "#F05032" },
  ];

  const stats = [
    { value: "3.5+", label: "Years Experience" },
    { value: "20+", label: "Live Applications" },
    { value: "5+", label: "Healthcare Projects" },
    { value: "10+", label: "Enterprise Solutions" },
  ];

  return (
    <section className='w-full min-h-screen relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:!bg-[#000000] overflow-hidden'>
      {/* Three.js Animated 3D Background with Tech Logos */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <Canvas 
          camera={{ position: [0, 0, 15], fov: 60 }}
          gl={{ 
            alpha: true, 
            antialias: true,
            powerPreference: "high-performance"
          }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            {/* Stable Lighting */}
            <ambientLight intensity={1} />
            
            {/* Main 3D Tech Icons */}
            <TechLogos3D techStack={techStack} />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero Section */}
      <div className='max-w-7xl mx-auto px-8 pt-32 pb-16 relative z-10'>
        <div className='animate-fadeInUp'>
          {/* Main Heading */}
          <div className='text-center mb-8'>
            <h1 className='text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white mb-4'>
              Hi, I'm <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Rakibul Islam</span>
            </h1>
            <h2 className='text-2xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6'>
              Software Engineer @ ACI Limited
            </h2>
            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed'>
              Full-Stack Developer with <strong>3.5+ years</strong> of experience building scalable enterprise solutions. 
              Specialized in <strong>Healthcare Tech</strong>, delivering intuitive platforms that enhance digital healthcare systems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-wrap justify-center gap-4 mb-16'>
            <Link 
              to='/projects' 
              className='px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 flex items-center gap-2 animate-pulse-glow'
            >
              View My Work
              <img src={arrow} alt='arrow' className='w-5 h-5 object-contain animate-bounce' />
            </Link>
            <Link 
              to='/contact' 
              className='px-8 py-4 bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-white rounded-lg font-semibold text-lg border-2 border-gray-900 dark:border-gray-800 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110 transition-all duration-300'
            >
              Get In Touch
            </Link>
          </div>

          {/* Stats Section */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className='bg-white dark:bg-[#0f0f0f] rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-center border-2 border-gray-100 dark:border-gray-900'
              >
                <div className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2'>
                  {stat.value}
                </div>
                <div className='text-gray-600 dark:text-gray-300 font-medium'>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Key Highlights */}
          <div className='card-3d bg-white dark:bg-[#0f0f0f] rounded-3xl p-8 shadow-xl mb-16 border-2 border-gray-100 dark:border-gray-900 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5'></div>
            <div className='relative z-10'>
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center'>Key Highlights</h3>
              <div className='grid md:grid-cols-4 gap-6'>
                <div className='text-center p-4 card-3d bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-[#0a0a1a] dark:to-[#0f0f1f] rounded-xl'>
                  <div className='text-4xl mb-3'>🏥</div>
                  <h4 className='font-semibold text-lg mb-2 text-gray-900 dark:text-white'>Healthcare Innovation</h4>
                  <p className='text-gray-600 dark:text-gray-400 text-sm'>
                    Contributed to nationwide platforms like Shukhee, Lifespring & Grameen Eye Hospital
                  </p>
                </div>
                <div className='text-center p-4 card-3d bg-gradient-to-br from-purple-50 to-blue-50 dark:from-[#0a0a1a] dark:to-[#0f0f1f] rounded-xl'>
                  <div className='text-4xl mb-3'>🏢</div>
                  <h4 className='font-semibold text-lg mb-2 text-gray-900 dark:text-white'>Enterprise Solutions</h4>
                  <p className='text-gray-600 dark:text-gray-400 text-sm'>
                    Building in-house enterprise software at ACI Limited with Django & FastAPI
                  </p>
                </div>
                <div className='text-center p-4 card-3d bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-[#0a0a1a] dark:to-[#0f0f1f] rounded-xl'>
                  <div className='text-4xl mb-3'>⚡</div>
                  <h4 className='font-semibold text-lg mb-2 text-gray-900 dark:text-white'>Performance Focused</h4>
                  <p className='text-gray-600 dark:text-gray-400 text-sm'>
                    Building scalable, intuitive, and high-performance user experiences
                  </p>
                </div>
                <div className='text-center p-4 card-3d bg-gradient-to-br from-blue-50 to-purple-50 dark:from-[#0a0a1a] dark:to-[#0f0f1f] rounded-xl'>
                  <div className='text-4xl mb-3'>🚀</div>
                  <h4 className='font-semibold text-lg mb-2 text-gray-900 dark:text-white'>Full-Stack Expertise</h4>
                  <p className='text-gray-600 dark:text-gray-400 text-sm'>
                    React, Next.js, TypeScript, React Native, Django, FastAPI & SQL Databases
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className='text-center mb-12'>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>Technologies I Work With</h3>
            <div className='flex flex-wrap justify-center gap-6'>
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className='group relative bg-white dark:bg-[#0f0f0f] rounded-xl p-4 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-200 border-2 border-gray-100 dark:border-gray-900 cursor-pointer'
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className='w-14 h-14 object-contain'
                  />
                  
                  {/* Tooltip */}
                  <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none'>
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <div className='mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white rounded-3xl p-8 shadow-xl'>
            <h3 className='text-2xl font-bold mb-3'>Currently Building</h3>
            <p className='text-lg mb-4'>
              Enterprise software solutions at ACI Limited using Django, FastAPI & modern web technologies
            </p>
            <p className='text-sm opacity-90'>
              Passionate about creating seamless user experiences and bridging frontend innovation with backend performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
