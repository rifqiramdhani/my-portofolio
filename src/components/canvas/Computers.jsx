import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isTablet, isLaptop }) => {
  const computer = useGLTF("./setup_gaming/scene.gltf");
  // const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"#fff"} />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.7 : isTablet ? 2.6 : isLaptop ? 3.6 : 4.6}
        position={isMobile ? [0, -3, -2.2] : [-0.3, -6, 0]}
        rotation={[0.2, 0, 0]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletQuery = window.matchMedia("(max-width: 768px)");
    const laptopQuery = window.matchMedia("(max-width: 1024px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);
    setIsLaptop(laptopQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMobileQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    const handleTabletQueryChange = (event) => {
      setIsTablet(event.matches);
    };
    const handleLaptopQueryChange = (event) => {
      setIsLaptop(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mobileQuery.addEventListener("change", handleMobileQueryChange);
    tabletQuery.addEventListener("change", handleTabletQueryChange);
    laptopQuery.addEventListener("change", handleLaptopQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mobileQuery.removeEventListener("change", handleMobileQueryChange);
      tabletQuery.removeEventListener("change", handleTabletQueryChange);
      laptopQuery.removeEventListener("change", handleLaptopQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ fov: 25, near: 4, position: [0, 0, 40] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers
          isMobile={isMobile}
          isTablet={isTablet}
          isLaptop={isLaptop}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
