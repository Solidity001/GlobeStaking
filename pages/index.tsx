import type { NextPage } from "next";
import { Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import StakeToken from "../components/StakeToken";
import RewardToken from "../components/RewardToken";
import Stake from "../components/Stake";
import HeroSection from "../components/HeroSection";

const Home: NextPage = () => {
  const address = useAddress();

  if (!address) {
    return (

      <HeroSection />



    )
  }

  return (
    <Container maxW={"1200px"}>
      <SimpleGrid columns={2} spacing={4} mt={10}>
        <StakeToken />
        <RewardToken />
      </SimpleGrid>
      <Stake />
    </Container>
  );
};

export default Home;
