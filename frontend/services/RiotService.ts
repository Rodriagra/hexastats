/**
 * ## Service to manage the requests about riot assets
 */
export class RiotService {
    private readonly baseUrl: string = 'http://ddragon.leagueoflegends.com/cdn/'

    /**
     * ## URL to the champ image
     * @param champName The name of the champ
     */
    champImage(champName: string) {
        return `https://opgg-static.akamaized.net/images/lol/champion/${champName}.png`
    }

    /**
     * ## URL to the champ splash art
     * @param champName The name of the champ
     */
    champSplash(champName: string) {
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`
    }

    /**
     * ## URL to the position image
     * @param position The position of the champ
     */
    teamPositionIcon(position: string) {
        const positions = {
            TOP: 'position_top.png',
            MID: 'position_mid.png',
            JUNGLE: 'position_jungle.png',
            BOTTOM: 'position_bottom.png',
            SUPPORT: 'position_support.png'
        }

        return `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-career-stats/global/default/${positions[position] ?? positions.MID}`
    }
}