import React from 'react'
import "./NftCard.css"
import ethImage from "../../Assets/images/ETH.png"
import nftLine from "../../Assets/images/nft-line.png"
import firstNFT from "../../Assets/nfts/nft-image1.png"

const NftCard = () => {
  return (
    <div className='nftcard-container'>
        <div className='nftcard'>
            <div className='nftcard-details'>
                <img className='nft-image' src={firstNFT} alt="" />
                <h5 className='nft-name'>ArtCrypto 01</h5>
                <div className='nft-price-number'>
                   <img src={ethImage} alt="" />
                   <span className='nft-price'>0.25ETH</span>
                    <h5 className='nft-price-number-text'>1 of 32</h5>
                </div>
                <img src={nftLine} alt="" />
                <div className='nft-time-button'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default NftCard