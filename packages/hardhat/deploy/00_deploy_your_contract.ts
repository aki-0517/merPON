import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "ExpirableERC721" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployExpirableERC721: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // コントラクトのコンストラクタ引数を設定
  const name = "YourTokenName";
  const symbol = "YTN";
  const initialOwner = deployer;

  await deploy("ExpirableERC721", {
    from: deployer,
    // Contract constructor arguments
    args: [name, symbol, initialOwner],
    log: true,
    autoMine: true,
  });

  // デプロイされたコントラクトを取得して、必要に応じて操作を行う
  const ExpirableERC721 = await hre.ethers.getContract("ExpirableERC721", deployer);
  console.log("ExpirableERC721 deployed at:", ExpirableERC721.getAddress());
};

export default deployExpirableERC721;
deployExpirableERC721.tags = ["ExpirableERC721"];
