import { InfoDetail } from '@/ _components/Info/InfoDetail'
import { Metadata } from 'next'
import { abort } from 'process'
import React from 'react'

async function getDetail(uuid:string) {
    try {
        if(uuid){
            const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL+ "/api/information/detail/" + uuid)
            const responseBody = await res.json()
            return responseBody
        }
    } catch (error) {
        console.log(error)
        abort()
    }
  }

const InformationPage = async ({ params }: { params: { infoId: string } }) => {
    const infoId = params.infoId;
    const infoDetail = await getDetail(infoId)

    return (
        <>
            <InfoDetail infoDetail={infoDetail}/>
        </>
    )
}

export default InformationPage
