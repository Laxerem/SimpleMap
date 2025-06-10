import React, { PropsWithChildren } from "react";

export interface EndBlockContent {
  header: string,
  TextContent: React.FC,
  imageUrl: string
}

interface EndBlockContentProps {
  content: EndBlockContent
}

const EndInfoBlock: React.FC<PropsWithChildren<EndBlockContentProps>> = ({content}) => {

  return (
    <>
    <div className="prehistory_container">
      <div className="prehistory_content">
        <div className="block_text">
          <h2>{content.header}</h2>
          <content.TextContent />
        </div>
        <img className="antarctica_card" src={content.imageUrl}></img>
      </div>
    </div>
    </>
  )
}

export default EndInfoBlock;

