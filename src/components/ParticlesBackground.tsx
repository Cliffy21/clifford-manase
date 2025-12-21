'use client'

export default function StaticBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Clean matte black gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 50%, #0a0a0a 100%)'
        }}
      />
    </div>
  )
}