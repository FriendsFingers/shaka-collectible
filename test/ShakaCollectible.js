const { advanceBlock } = require('./helpers/advanceToBlock');
const { assertRevert } = require('./helpers/assertRevert');

const { shouldBehaveLikeRBACMintableERC721Token } = require('./ERC721/ERC721RBACMintableToken.behaviour');

const BigNumber = web3.BigNumber;

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();

const ShakaCollectible = artifacts.require('ShakaCollectibleMock.sol');

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

contract('ShakaCollectible', function (accounts) {
  const name = 'ShakaCollectible';
  const symbol = 'NFS';
  const creator = accounts[0];
  const minter = accounts[1];
  const beneficiary = accounts[2];
  const anotherAccount = accounts[3];

  let tokenId;

  before(async function () {
    // Advance to the next block to correctly read time in the solidity "now" function interpreted by ganache
    await advanceBlock();
  });

  beforeEach(async function () {
    this.structure = {
      mainColor: '97168a',
      backgroundColor: 'ffffff',
      borderColor: 'fae596',
      message: 'Lorem Ipsum',
    };

    this.token = await ShakaCollectible.new(name, symbol, { from: creator });
  });

  context('creating new token', function () {
    beforeEach(async function () {
      await this.token.addMinter(minter, { from: creator });
      await this.token.newToken(
        beneficiary,
        this.structure.mainColor,
        this.structure.backgroundColor,
        this.structure.borderColor,
        this.structure.message,
        { from: minter }
      );

      tokenId = await this.token.progressiveId();
    });

    context('metadata', function () {
      let tokenStructure;

      describe('when token exists', function () {
        beforeEach(async function () {
          tokenStructure = await this.token.getToken(tokenId);
        });

        describe('check metadata', function () {
          it('has a beneficiary', async function () {
            const toCheck = tokenStructure[0];
            toCheck.should.be.equal(beneficiary);
          });

          it('has an main color', async function () {
            const toCheck = tokenStructure[1];
            assert.equal(web3.toAscii(toCheck), this.structure.mainColor);
          });

          it('has an background color', async function () {
            const toCheck = tokenStructure[2];
            assert.equal(web3.toAscii(toCheck), this.structure.backgroundColor);
          });

          it('has an border color', async function () {
            const toCheck = tokenStructure[3];
            assert.equal(web3.toAscii(toCheck), this.structure.borderColor);
          });

          it('has a message', async function () {
            const toCheck = tokenStructure[4];
            toCheck.should.be.equal(this.structure.message);
          });
        });
      });

      describe('when token is burnt', function () {
        beforeEach(async function () {
          await this.token.burn(tokenId);
        });

        describe('check metadata', function () {
          it('reverts', async function () {
            await assertRevert(this.token.getToken(tokenId));
          });
        });
      });
    });

    describe('progressive id', function () {
      it('should increase', async function () {
        const oldProgressiveId = await this.token.progressiveId();

        await this.token.newToken(
          beneficiary,
          this.structure.mainColor,
          this.structure.backgroundColor,
          this.structure.borderColor,
          this.structure.message,
          { from: minter }
        );
        const newProgressiveId = await this.token.progressiveId();

        newProgressiveId.should.be.bignumber.equal(oldProgressiveId.add(1));
      });
    });

    describe('if beneficiary is the zero address', function () {
      it('reverts', async function () {
        await assertRevert(
          this.token.newToken(
            ZERO_ADDRESS,
            this.structure.mainColor,
            this.structure.backgroundColor,
            this.structure.borderColor,
            this.structure.message,
            { from: minter }
          )
        );
      });
    });

    describe('if caller has not minter permission', function () {
      it('reverts', async function () {
        await assertRevert(
          this.token.newToken(
            beneficiary,
            this.structure.mainColor,
            this.structure.backgroundColor,
            this.structure.borderColor,
            this.structure.message,
            { from: anotherAccount }
          )
        );
      });
    });
  });

  context('like an ERC721RBACMintableToken', function () {
    beforeEach(async function () {
      await this.token.addMinter(minter, { from: creator });
    });

    shouldBehaveLikeRBACMintableERC721Token(accounts, creator, minter, name, symbol);
  });
});
