import Home from './components/home/index.vue';

// pesawat komponen
import Pesawat from './components/pesawat/pesawat-index.vue';
import CariTiketPesawat from './components/pesawat/cari-pesawat/index.vue';
import DetailTiketPesawat from './components/pesawat/detail-pesawat/index.vue';
import PemesananTiketPesawat from './components/pesawat/pemesanan-pesawat/index.vue';
import CekPemesananTiketPesawat from './components/pesawat/pemesanan-pesawat/cek-pemesanan.vue';
import Pembayaran from './components/pembayaran/index.vue';
import ProsesPembayaran from './components/pembayaran/proses-pembayaran.vue';
import Sukses from './components/pembayaran/sukses.vue';

// kereta api komponen
import KeretaApi from './components/kai/kai-index.vue';

// bus komponen
import Bus from './components/bus/bus-index.vue';

// kapal komponen
import Kapal from './components/kapal/kapal-index.vue';

import Promo from './components/promo/promo-index.vue';

// footer menu
import HowtoBook from './components/howtobook/index.vue';
import SyaratKetentuan from './components/syarat-ketentuan/index.vue';
import KebijakanPrivasi from './components/kebijakan-privasi/index.vue';

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },

    // pesawat route
    {
        path : '/tiket-pesawat',
        name : 'tiketpesawat',
        component : Pesawat
    },
    {
        path: '/cari-tiket-pesawat/:departId/:arrivalId/:paxAdult/:paxChildren/:paxInfant/:goDate/:roundTrip/:returnDate',
        name: 'caritiketpesawat',
        component: CariTiketPesawat
    },
    {
        path: '/detail-tiket-pesawat/:id/:departId/:arrivalId/:paxAdult/:paxChildren/:paxInfant/:goDate/:roundTrip/:returnDate/:token',
        name: 'detailtiketpesawat',
        component: DetailTiketPesawat
    },
    {
        path: '/pemesanan-tiket-pesawat/:id/:flightId/:departId/:arrivalId/:paxAdult/:paxChildren/:paxInfant/:goDate/:roundTrip/:returnDate/:token',
        name: 'pemesanantiketpesawat',
        component: PemesananTiketPesawat
    },
    {
        path: '/cek-pemesanan-tiket-pesawat/:id/:flightId/:departId/:arrivalId/:paxAdult/:paxChildren/:paxInfant/:goDate/:roundTrip/:returnDate/:token/query',
        name: 'cekpemesanantiketpesawat',
        component: CekPemesananTiketPesawat
    },
    {
        path: '/pembayaran/:token',
        name: 'pembayaran',
        component: Pembayaran
    },

    // kereta api route
    {
        path : '/tiket-kereta-api',
        name : 'tiketkeretaapi',
        component : KeretaApi
    },

    // bus route
    {
        path : '/tiket-bus',
        name : 'tiketbus',
        component : Bus
    },

    // kapal route
    {
        path : '/tiket-kapal',
        name : 'tiketkapal',
        component : Kapal
    },

    // pembayaran route
    {
        path: '/proses-pembayaran',
        name: 'prosespembayaran',
        component: ProsesPembayaran
    },
    {
        path: '/sukses',
        name: 'sukses',
        component: Sukses
    },

    // route
    {
        path: '/how-to-book',
        name: 'howtobook',
        component: HowtoBook
    },
    {
        path: '/syarat-Ketentuan',
        name: 'syaratketentuan',
        component: SyaratKetentuan
    },
    {
        path: '/kebijakan-privasi',
        name: 'kebijakanprivasi',
        component: KebijakanPrivasi
    },
    {
        path : '/promo',
        name : 'promo',
        component : Promo
    },
]
