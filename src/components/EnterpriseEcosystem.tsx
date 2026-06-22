import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

const NODE_COUNT = 8
const NODE_RADIUS = 3

const nodeNames = [
  "Development", "Recruitment", "Automation", "Support",
  "Analytics", "Communication", "Digitization", "Management",
]

interface NodeData {
  pos: THREE.Vector3
  velocity: THREE.Vector3
  color: THREE.Color
  name: string
}

function useNodeNetwork() {
  return useMemo(() => {
    const nodes: NodeData[] = []
    for (let i = 0; i < NODE_COUNT; i++) {
      const angle = (i / NODE_COUNT) * Math.PI * 2
      const radius = NODE_RADIUS + Math.sin(i * 1.5) * 0.5
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const y = Math.sin(i * 2.3) * 1.5
      nodes.push({
        pos: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002,
        ),
        color: new THREE.Color().setHSL(i / NODE_COUNT, 0.8, 0.5),
        name: nodeNames[i],
      })
    }
    return nodes
  }, [])
}

function NodeNetwork({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null!)
  const nodes = useNodeNetwork()
  const connectionPairs = useMemo(() => {
    const pairs: [number, number][] = []
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (Math.random() > 0.4) continue
        pairs.push([i, j])
      }
    }
    return pairs
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.08 + mouse.x * 0.3
    groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.1 + mouse.y * 0.2
  })

  const SphereNode = ({ node, index }: { node: NodeData; index: number }) => {
    const meshRef = useRef<THREE.Mesh>(null!)
    useFrame(({ clock }) => {
      if (!meshRef.current) return
      const t = clock.getElapsedTime()
      node.pos.x += Math.sin(t * 0.5 + index) * 0.001
      node.pos.y += Math.cos(t * 0.5 + index) * 0.001
      meshRef.current.position.copy(node.pos)
      meshRef.current.scale.setScalar(1 + Math.sin(t * 2 + index) * 0.1)
    })

    return (
      <mesh ref={meshRef} position={node.pos}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.5} />
      </mesh>
    )
  }

  const Connections = () => {
    const lineRef = useRef<THREE.Group>(null!)
    return (
      <group ref={lineRef}>
        {connectionPairs.map(([i, j], idx) => {
          const positions = new Float32Array([
            nodes[i].pos.x, nodes[i].pos.y, nodes[i].pos.z,
            nodes[j].pos.x, nodes[j].pos.y, nodes[j].pos.z,
          ])
          return (
            <line key={idx}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  args={[positions, 3]}
                />
              </bufferGeometry>
              <lineBasicMaterial color={nodes[i].color} transparent opacity={0.2} />
            </line>
          )
        })}
      </group>
    )
  }

  return (
    <group ref={groupRef}>
      <Connections />
      {nodes.map((node, i) => (
        <SphereNode key={i} node={node} index={i} />
      ))}
    </group>
  )
}

function ParticleField() {
  const count = 3000
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.cos(phi)
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    }
    return pos
  }, [])

  const ref = useRef<THREE.Points>(null!)
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.02
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.1
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00E5FF"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  )
}

function DataFlowParticles() {
  const count = 100
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const r = 2 + Math.random() * 3
      pos[i * 3] = Math.cos(angle) * r
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4
      pos[i * 3 + 2] = Math.sin(angle) * r
    }
    return pos
  }, [])

  const ref = useRef<THREE.Points>(null!)
  useFrame(({ clock }) => {
    if (!ref.current) return
    const positions = ref.current.geometry.attributes.position.array as Float32Array
    const t = clock.getElapsedTime()
    for (let i = 0; i < count; i++) {
      const idx = i * 3
      const angle = t * 0.3 + i
      const r = 2 + Math.sin(t + i) * 1.5
      positions[idx] = Math.cos(angle) * r
      positions[idx + 2] = Math.sin(angle) * r
      positions[idx + 1] += Math.sin(t + i) * 0.01
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#14F195"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </Points>
  )
}

function SceneContent() {
  const mouse = useRef({ x: 0, y: 0 })
  const { pointer } = useThree()

  useFrame(() => {
    mouse.current.x = pointer.x * 0.5
    mouse.current.y = pointer.y * 0.5
  })

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#00E5FF" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#6D28D9" />
      <ParticleField />
      <DataFlowParticles />
      <NodeNetwork mouse={mouse.current} />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere args={[0.8, 32, 32]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#6D28D9"
            speed={2}
            distort={0.3}
            radius={1}
            emissive="#6D28D9"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>
    </>
  )
}

export const EnterpriseEcosystem = ({ className = "absolute inset-0 z-0" }: { className?: string }) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]}>
        <SceneContent />
      </Canvas>
    </div>
  )
}
