const Sphere = (props) => {
  return (
    <mesh {...props} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={"white"} metalness={0.5} roughness={0.2} />
    </mesh>
  );
};

export default Sphere;
