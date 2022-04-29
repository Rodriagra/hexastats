import { ApiProperty } from '@nestjs/swagger'
import { Champ } from './Champ.dto'
import { Mastery } from './Mastery.dto'
import { RankStructure } from './Rank.dto'

export class Player {
    @ApiProperty({
        description: 'Summoner name',
        example: 'David',
    })
    alias: string

    @ApiProperty({
        description: 'URL to the image of the summoner',
        example: 'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/profileicon/4411.png',
    })
    image: string

    @ApiProperty({
        description: 'Level of the summoner',
        example: '120',
    })
    level: number

    @ApiProperty({
        description: 'Rank information',
    })
    rank: RankStructure

    @ApiProperty({
        description: 'Champions most played',
        type: [Champ],
    })
    champs: Champ[]

    @ApiProperty({
        description: 'Champs with most mastery points',
        type: [Mastery],
    })
    masteries: Mastery[]
}