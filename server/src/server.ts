import express, { response } from 'express';
import {PrismaClient} from '@prisma/client';
import { convertHourMinute } from './utils/convertHoraMinuto';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

const prisma = new PrismaClient();

app.get ('/games', async(request, response) => {
    const games = await prisma.gamer.findMany({        
        include:{
            _count:{
                select:{
                    ads: true
                }
            }
        }
    })

    return response.json(games);
})

app.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
        select:{
            id: true,
            name: true,
            weekDay: true,
            useVoiceChannel: true,
            yearsPlayer: true,
            hourStart: true,
            hourEnd: true,
            
        },
        where:{
            gamerId: gameId
        },
        orderBy:{
            createdAt: 'desc'
        }
    })

    return response.json(ads);
})

app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select:{
           discord: true
        },
        where:{
            id:  adId
        }
    })

    return response.json({
        discord: ad.discord
    });
})

app.post('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;
    const body = request.body;

    const ad = await prisma.ad.create({
        data:{
            gamerId: gameId,
            name: body.name,
            yearsPlayer: body.yearsPlayer,
            discord: body.discord,
            weekDay: body.weekDay.join(","),
            hourStart: convertHourMinute(body.hourStart),
            hourEnd: convertHourMinute(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel
        }
    })

    return response.json(ad)
})

app.listen(3330)