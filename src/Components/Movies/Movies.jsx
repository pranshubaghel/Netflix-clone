import React from 'react'

function Movies() {
    const data = [
        {
            id: 1,
            poster: 'https://resizing.flixster.com/P3ITKQPm33gw4K73O9DYCOfyZ4E=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ1Zjg4NDFhLWMxY2EtNDU3NC04OTNmLTQ4MTJiMzc3Y2EwZC5qcGc=',
            name: 'DAMSEL'
        },
        {
            id: 2,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABehZM2_g_zPrcrnD4e-6SFOyheKjYpcH221zoKqPa-tS2DsGiH3Z2ABJ77Ydb9z-5wPVdceyjufvcmjZWjUL8B4Pr0B4pKvsHuy8DhizziipHt9SKdKtGPpOGBWVg7BbzxxL.jpg?r=23e',
            name: 'MAJNU'
        },

        {
            id: 3,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABU3rReF_TxwEBl_Q_lr9ZDvoLcSkWYZ5Yx5wcSA-OyM9ye5h2to8XvkyqTh6kiSg190zGBNTMXrW-pWMKT1Gf3WU1uxAcFsW0Nc.webp?r=0a8',
            name: 'MAJNU'
        },
        
        
    ]
    return (
        <div className='w-full h-auto px-20 py-16 gird grid-cols-3 gap-10'>
            {data. slice(0,4).map((value) =>
                <div className='w-96 h-96  border border-red-600 rounded relative'>
                    <h2 className='text-orange-800 text-4xl font-bold absolute bottom-10 left-16'>{value.name}</h2>
                    <img className='h-full w-full object-cover' src={value.poster} />
            
            </div>
           )}
                </div>
            
            )};

            export default Movies;