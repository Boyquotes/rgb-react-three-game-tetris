import { useRef } from "react";
import { useBox } from '@react-three/cannon';


const Box = ({
  color, 
  dropPosition,
  handleOnCollide,
  name,
  size }) => {
  const [ref] = useBox(() => ({
    args: size,
    position: [...dropPosition],
    mass: 1,
    onCollide: handleOnCollide
  }), useRef(null));

  return (
    <mesh ref={ref} name={name} color={color} isShape={true}>
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Box