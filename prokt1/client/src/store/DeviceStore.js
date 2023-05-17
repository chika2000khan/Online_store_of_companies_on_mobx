import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = [
            {id: 1, name: "Ipone 12 pro", price: 50000, rating: 5, img: 'https://imgs.casasbahia.com.br/55054430/1g.jpg'},
            {id: 2, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://i.ebayimg.com/images/g/6BoAAOSwoxxiMH60/s-l500.jpg`},
            {id: 3, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://s13emagst.akamaized.net/products/41297/41296657/images/res_60af11d79bb1c5fd1dacc2569e7bcadc.jpg`},
            {id: 4, name: "Ipone 12 pro", price: 50000, rating: 5, img: 'https://imgs.casasbahia.com.br/55054430/1g.jpg'},
            {id: 5, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://i.ebayimg.com/images/g/6BoAAOSwoxxiMH60/s-l500.jpg`},
            {id: 6, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://s13emagst.akamaized.net/products/41297/41296657/images/res_60af11d79bb1c5fd1dacc2569e7bcadc.jpg`},
            {id: 1, name: "Ipone 12 pro", price: 50000, rating: 5, img: 'https://imgs.casasbahia.com.br/55054430/1g.jpg'},
            {id: 2, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://i.ebayimg.com/images/g/6BoAAOSwoxxiMH60/s-l500.jpg`},
            {id: 3, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://s13emagst.akamaized.net/products/41297/41296657/images/res_60af11d79bb1c5fd1dacc2569e7bcadc.jpg`},
            {id: 4, name: "Ipone 12 pro", price: 50000, rating: 5, img: 'https://imgs.casasbahia.com.br/55054430/1g.jpg'},
            {id: 5, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://i.ebayimg.com/images/g/6BoAAOSwoxxiMH60/s-l500.jpg`},
            {id: 6, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://s13emagst.akamaized.net/products/41297/41296657/images/res_60af11d79bb1c5fd1dacc2569e7bcadc.jpg`},
            {id: 1, name: "Ipone 12 pro", price: 50000, rating: 5, img: 'https://imgs.casasbahia.com.br/55054430/1g.jpg'},
            {id: 2, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://i.ebayimg.com/images/g/6BoAAOSwoxxiMH60/s-l500.jpg`},
            {id: 3, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://s13emagst.akamaized.net/products/41297/41296657/images/res_60af11d79bb1c5fd1dacc2569e7bcadc.jpg`},
            {id: 4, name: "Ipone 12 pro", price: 50000, rating: 5, img: 'https://imgs.casasbahia.com.br/55054430/1g.jpg'},
            {id: 5, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://i.ebayimg.com/images/g/6BoAAOSwoxxiMH60/s-l500.jpg`},
            {id: 6, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://s13emagst.akamaized.net/products/41297/41296657/images/res_60af11d79bb1c5fd1dacc2569e7bcadc.jpg`},
            {id: 1, name: "Ipone 12 pro", price: 50000, rating: 5, img: 'https://imgs.casasbahia.com.br/55054430/1g.jpg'},
            {id: 2, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://i.ebayimg.com/images/g/6BoAAOSwoxxiMH60/s-l500.jpg`},
            {id: 3, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://s13emagst.akamaized.net/products/41297/41296657/images/res_60af11d79bb1c5fd1dacc2569e7bcadc.jpg`},
            {id: 4, name: "Ipone 12 pro", price: 50000, rating: 5, img: 'https://imgs.casasbahia.com.br/55054430/1g.jpg'},
            {id: 5, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://i.ebayimg.com/images/g/6BoAAOSwoxxiMH60/s-l500.jpg`},
            {id: 6, name: "Ipone 12 pro", price: 50000, rating: 5, img: `https://s13emagst.akamaized.net/products/41297/41296657/images/res_60af11d79bb1c5fd1dacc2569e7bcadc.jpg`},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}