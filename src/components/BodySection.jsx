import { Button, Center, Flex, HStack, Image, VStack, Text,chakra,} from "@chakra-ui/react"
import img1 from "./../assets/images/img1.png"
import img2 from "./../assets/images/img2.png"
import img3 from "./../assets/images/img3.png"
import { useState } from "react"
import Header from "./Header"

function BodySection() {
  const OurShoes = [
    { shoe:img2, color:"#E10F15", secondColor:"#C2C2C2", label:"emma" },
    { shoe:img3, color:"#2C77B9", secondColor:"#F24E3A", label:"tuna"},
    { shoe:img1, color:"#FB5014", secondColor:"#17B4CC", label:"tension"},
  ]
  const [ sneaker, setSneaker]=useState(OurShoes[0])

  return (
   <Flex  w="100%" fontFamily={"Montserrat"} flexDir={"column"}>
    <Header expecting={sneaker} />
    <HStack w="100%">
{/* ==========================================BOX 1=================================================================== */}
      <Flex  w="40%" flexDirection={"column"}>
        <Text fontSize={"123px"}  fontWeight={"700"} fontStyle={"normal"} lineHeight={"148px"}>Nike <chakra.span color={sneaker.secondColor}>Air</chakra.span> <br/> Max</Text>
        <Text fontSize={"20px"} fontStyle={"normal"} w="85%" fontWeight={"400"} my="20px" >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
        <Button bg={sneaker.color} color={"white"} w="324px" h="71px" borderRadius={"30px"} fontSize={"32px"} fontStyle={"normal"} fontWeight={"500"}>
          Shop now
        </Button>
      </Flex>

{/* ==========================================BOX 2=================================================================== */}
      <Flex w="50%" _hover={{
       transform: "rotate(15deg) scale(1.08)",
       transition:"all 0.3s linear"
        
      }}>
    <Image src={sneaker.shoe} w="775px" h="583px"/>
      </Flex>
{/* ==========================================BOX 3=================================================================== */}
      <VStack  w="10%">

{OurShoes.map((item, index)=>(
        <Center borderWidth={1} borderColor={"#00000020"} w="98px" h="98px" borderRadius={"49px"} key={index.toString()} onClick={()=>{
          setSneaker(OurShoes[index])}}>
          <Image src={item.shoe} objectFit={"contain"}/>
        </Center>
))}
      </VStack>
    </HStack>
   </Flex>
  )
}

export default BodySection
