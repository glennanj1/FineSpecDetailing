/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/images/untitled.glb')
  useFrame((state, delta) => (group.current.rotation.y += 0.01))
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
      <group rotation={[Math.PI / 2, 0, 0]}>
      <mesh geometry={nodes.CaymanGT4Windshield_CaymanGT4_windshield.geometry} material={materials.Glass} rotation={[Math.PI / 2, 0, 0]} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4LeftHeadlight_CaymanGT4_headlightframe_L_1.geometry} material={materials.BlackMatt} />
        <mesh geometry={nodes.CaymanGT4LeftHeadlight_CaymanGT4_headlightframe_L_2.geometry} material={materials.HighBeam} />
        <mesh geometry={nodes.CaymanGT4LeftHeadlight_CaymanGT4_headlightframe_L_3.geometry} material={materials.SignalL} />
        <mesh geometry={nodes.CaymanGT4LeftHeadlight_CaymanGT4_headlightframe_L_4.geometry} material={materials.Headlight} />
        <mesh geometry={nodes.CaymanGT4LeftHeadlight_CaymanGT4_headlightframe_L_5.geometry} material={materials.HeadlightGlass} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4RightHeadlight_CaymanGT4_headlightframe_R_1.geometry} material={materials.BlackMatt} />
        <mesh geometry={nodes.CaymanGT4RightHeadlight_CaymanGT4_headlightframe_R_2.geometry} material={materials.HighBeam} />
        <mesh geometry={nodes.CaymanGT4RightHeadlight_CaymanGT4_headlightframe_R_3.geometry} material={materials.Headlight} />
        <mesh geometry={nodes.CaymanGT4RightHeadlight_CaymanGT4_headlightframe_R_4.geometry} material={materials.SignalR} />
        <mesh geometry={nodes.CaymanGT4RightHeadlight_CaymanGT4_headlightframe_R_5.geometry} material={materials.HeadlightGlass} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4LeftTaillight_CaymanGT4_taillight_L_1.geometry} material={materials.Glass} />
        <mesh geometry={nodes.CaymanGT4LeftTaillight_CaymanGT4_taillight_L_2.geometry} material={materials.HighBeam} />
        <mesh geometry={nodes.CaymanGT4LeftTaillight_CaymanGT4_taillight_L_3.geometry} material={materials.SignalL} />
        <mesh geometry={nodes.CaymanGT4LeftTaillight_CaymanGT4_taillight_L_4.geometry} material={materials.BrakeLight} />
        <mesh geometry={nodes.CaymanGT4LeftTaillight_CaymanGT4_taillight_L_5.geometry} material={materials.White} />
        <mesh geometry={nodes.CaymanGT4LeftTaillight_CaymanGT4_taillight_L_6.geometry} material={materials.Taillight} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4RightTaillight_CaymanGT4_taillight_R_1.geometry} material={materials.Glass} />
        <mesh geometry={nodes.CaymanGT4RightTaillight_CaymanGT4_taillight_R_2.geometry} material={materials.SignalR} />
        <mesh geometry={nodes.CaymanGT4RightTaillight_CaymanGT4_taillight_R_3.geometry} material={materials.BrakeLight} />
        <mesh geometry={nodes.CaymanGT4RightTaillight_CaymanGT4_taillight_R_4.geometry} material={materials.White} />
        <mesh geometry={nodes.CaymanGT4RightTaillight_CaymanGT4_taillight_R_5.geometry} material={materials.Taillight} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4Hood_CaymanGT4_hood_1.geometry} material={materials.Paint} />
        <mesh geometry={nodes.CaymanGT4Hood_CaymanGT4_hood_2.geometry} material={materials.Logo} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4Tailgate_CaymanGT4_tailgate_1.geometry} material={materials.Glass} />
        <mesh geometry={nodes.CaymanGT4Tailgate_CaymanGT4_tailgate_2.geometry} material={materials.BlackMatt} />
        <mesh geometry={nodes.CaymanGT4Tailgate_CaymanGT4_tailgate_3.geometry} material={materials.Paint} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4RearBumper_CaymanGT4_bumper_R_1.geometry} material={materials.BlackMatt} />
        <mesh geometry={nodes.CaymanGT4RearBumper_CaymanGT4_bumper_R_2.geometry} material={materials.White} />
        <mesh geometry={nodes.CaymanGT4RearBumper_CaymanGT4_bumper_R_3.geometry} material={materials.Paint} />
        <mesh geometry={nodes.CaymanGT4RearBumper_CaymanGT4_bumper_R_4.geometry} material={materials.Metallic01} />
        <mesh geometry={nodes.CaymanGT4RearBumper_CaymanGT4_bumper_R_5.geometry} material={materials.ReverseLight} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4RightDoor_CaymanGT4_door_R_1.geometry} material={materials.BlackMatt} />
        <mesh geometry={nodes.CaymanGT4RightDoor_CaymanGT4_door_R_2.geometry} material={materials.Paint} />
        <mesh geometry={nodes.CaymanGT4RightDoor_CaymanGT4_door_R_3.geometry} material={materials.Interior1} />
        <mesh geometry={nodes.CaymanGT4RightDoor_CaymanGT4_door_R_4.geometry} material={materials.Interior2} />
        <mesh geometry={nodes.CaymanGT4RightDoor_CaymanGT4_door_R_5.geometry} material={materials.Interior3} />
        <mesh geometry={nodes.CaymanGT4RightDoor_CaymanGT4_door_R_6.geometry} material={materials.Gray} />
        <mesh geometry={nodes.CaymanGT4RightDoor_CaymanGT4_door_R_7.geometry} material={materials.Glass} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4LeftFender_CaymanGT4_fender_L_1.geometry} material={materials.BlackMatt} />
        <mesh geometry={nodes.CaymanGT4LeftFender_CaymanGT4_fender_L_2.geometry} material={materials.Paint} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4FrontBumper_CaymanGT4_bumper_F_1.geometry} material={materials.BlackMatt} />
        <mesh geometry={nodes.CaymanGT4FrontBumper_CaymanGT4_bumper_F_2.geometry} material={materials.SignalL} />
        <mesh geometry={nodes.CaymanGT4FrontBumper_CaymanGT4_bumper_F_3.geometry} material={materials.SignalR} />
        <mesh geometry={nodes.CaymanGT4FrontBumper_CaymanGT4_bumper_F_4.geometry} material={materials.White} />
        <mesh geometry={nodes.CaymanGT4FrontBumper_CaymanGT4_bumper_F_5.geometry} material={materials.Paint} />
        <mesh geometry={nodes.CaymanGT4FrontBumper_CaymanGT4_bumper_F_6.geometry} material={materials.Metallic01} />
        <mesh geometry={nodes.CaymanGT4FrontBumper_CaymanGT4_bumper_F_7.geometry} material={materials.DRL} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4Body_CaymanGT4_body_1.geometry} material={materials.BlackMatt} />
        <mesh geometry={nodes.CaymanGT4Body_CaymanGT4_body_2.geometry} material={materials.Headlight} />
        <mesh geometry={nodes.CaymanGT4Body_CaymanGT4_body_3.geometry} material={materials.BrakeLight} />
        <mesh geometry={nodes.CaymanGT4Body_CaymanGT4_body_4.geometry} material={materials.Paint} />
        <mesh geometry={nodes.CaymanGT4Body_CaymanGT4_body_5.geometry} material={materials.Interior1} />
        <mesh geometry={nodes.CaymanGT4Body_CaymanGT4_body_6.geometry} material={materials.Interior2} />
        <mesh geometry={nodes.CaymanGT4Body_CaymanGT4_body_7.geometry} material={materials.Interior3} />
        <mesh geometry={nodes.CaymanGT4Body_CaymanGT4_body_8.geometry} material={materials.Gray} />
        <mesh geometry={nodes.CaymanGT4Body_CaymanGT4_body_9.geometry} material={materials.Carbon} />
        <mesh geometry={nodes.CaymanGT4Body_CaymanGT4_body_10.geometry} material={materials.Chrome1} />
        <mesh geometry={nodes.CaymanGT4Body_CaymanGT4_body_11.geometry} material={materials.Chrome2} />
        <mesh geometry={nodes.CaymanGT4Body_CaymanGT4_body_12.geometry} material={materials.Glass} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4RightFender_CaymanGT4_fender_R_1.geometry} material={materials.BlackMatt} />
        <mesh geometry={nodes.CaymanGT4RightFender_CaymanGT4_fender_R_2.geometry} material={materials.Paint} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4RightMirror_CaymanGT4_mirror_R_1.geometry} material={materials.BlackMatt} />
        <mesh geometry={nodes.CaymanGT4RightMirror_CaymanGT4_mirror_R_2.geometry} material={materials.Paint} />
        <mesh geometry={nodes.CaymanGT4RightMirror_CaymanGT4_mirror_R_3.geometry} material={materials.Chrome2} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4LeftDoor_CaymanGT4_door_L_1.geometry} material={materials.BlackMatt} />
        <mesh geometry={nodes.CaymanGT4LeftDoor_CaymanGT4_door_L_2.geometry} material={materials.Paint} />
        <mesh geometry={nodes.CaymanGT4LeftDoor_CaymanGT4_door_L_3.geometry} material={materials.Interior1} />
        <mesh geometry={nodes.CaymanGT4LeftDoor_CaymanGT4_door_L_4.geometry} material={materials.Interior2} />
        <mesh geometry={nodes.CaymanGT4LeftDoor_CaymanGT4_door_L_5.geometry} material={materials.Interior3} />
        <mesh geometry={nodes.CaymanGT4LeftDoor_CaymanGT4_door_L_6.geometry} material={materials.Gray} />
        <mesh geometry={nodes.CaymanGT4LeftDoor_CaymanGT4_door_L_7.geometry} material={materials.Glass} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4Steer_CaymanGT4_steer_1.geometry} material={materials.Interior3} />
        <mesh geometry={nodes.CaymanGT4Steer_CaymanGT4_steer_2.geometry} material={materials.Interior1} />
        <mesh geometry={nodes.CaymanGT4Steer_CaymanGT4_steer_3.geometry} material={materials.Chrome1} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4Spoiler_CaymanGT4_spoiler_1.geometry} material={materials.BlackMatt} />
        <mesh geometry={nodes.CaymanGT4Spoiler_CaymanGT4_spoiler_2.geometry} material={materials.Paint} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4LeftMirror_CaymanGT4_mirror_L_1.geometry} material={materials.BlackMatt} />
        <mesh geometry={nodes.CaymanGT4LeftMirror_CaymanGT4_mirror_L_2.geometry} material={materials.Paint} />
        <mesh geometry={nodes.CaymanGT4LeftMirror_CaymanGT4_mirror_L_3.geometry} material={materials.Chrome2} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4WheelFtL_Circle_1.geometry} material={materials.Brake_Disc} />
        <mesh geometry={nodes.CaymanGT4WheelFtL_Circle_2.geometry} material={materials.Tire} />
        <mesh geometry={nodes.CaymanGT4WheelFtL_Circle_3.geometry} material={materials.Rust} />
        <mesh geometry={nodes.CaymanGT4WheelFtL_Circle_4.geometry} material={materials.BlackGloss} />
      </group>
      <mesh geometry={nodes.CaymanGT4WheelBrakeFtL_Plane133.geometry} material={materials.BrakeCaliper} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.NumberPlate_Plane016.geometry} material={materials.NumberPlate} rotation={[Math.PI / 2, 0, 0]} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4WheelBkL_Circle001_1.geometry} material={materials.Brake_Disc} />
        <mesh geometry={nodes.CaymanGT4WheelBkL_Circle001_2.geometry} material={materials.Tire} />
        <mesh geometry={nodes.CaymanGT4WheelBkL_Circle001_3.geometry} material={materials.Rust} />
        <mesh geometry={nodes.CaymanGT4WheelBkL_Circle001_4.geometry} material={materials.BlackGloss} />
      </group>
      <mesh geometry={nodes.CaymanGT4WheelBrakeBkL_Plane001.geometry} material={materials.BrakeCaliper} rotation={[Math.PI / 2, 0, 0]} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4WheelFtR_Circle002_1.geometry} material={materials.Brake_Disc} />
        <mesh geometry={nodes.CaymanGT4WheelFtR_Circle002_2.geometry} material={materials.Tire} />
        <mesh geometry={nodes.CaymanGT4WheelFtR_Circle002_3.geometry} material={materials.Rust} />
        <mesh geometry={nodes.CaymanGT4WheelFtR_Circle002_4.geometry} material={materials.BlackGloss} />
      </group>
      <mesh geometry={nodes.CaymanGT4WheelBrakeFtR_Plane002.geometry} material={materials.BrakeCaliper} rotation={[Math.PI / 2, 0, 0]} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CaymanGT4WheelBkR_Circle003_1.geometry} material={materials.Brake_Disc} />
        <mesh geometry={nodes.CaymanGT4WheelBkR_Circle003_2.geometry} material={materials.Tire} />
        <mesh geometry={nodes.CaymanGT4WheelBkR_Circle003_3.geometry} material={materials.Rust} />
        <mesh geometry={nodes.CaymanGT4WheelBkR_Circle003_4.geometry} material={materials.BlackGloss} />
      </group>
      <mesh geometry={nodes.CaymanGT4WheelBrakeBkR_Plane003.geometry} material={materials.BrakeCaliper} rotation={[Math.PI / 2, 0, 0]} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Logo001_Plane004_1.geometry} material={materials.Chrome1} />
        <mesh geometry={nodes.Logo001_Plane004_2.geometry} material={materials.BlackGloss} />
      </group>
    </group>
    </group>
    </group>
  )
}

useGLTF.preload('/untitled.glb')
