import { Container, Flex, Heading, Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxW={"1200px"} py={4}>
            <Flex direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                {/* Replace Heading with Globe Token */}
                <Heading>Globe Token</Heading>

                {/* Right Section */}
                <Flex alignItems={"center"} gap={4}>
                    {/* Dark Mode Toggle */}
                    <Button onClick={toggleColorMode} aria-label="Toggle Theme">
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    {/* Connect Wallet */}
                    <ConnectWallet />
                </Flex>
            </Flex>
        </Container>
    );
}
