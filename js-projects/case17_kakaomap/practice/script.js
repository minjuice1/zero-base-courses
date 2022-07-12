;(function () {
  'use strict'

  const shops = [
    {
      id: 558503389,
      name: '까폼 본점',
      lat: 37.5248514855458,
      lng: 127.03798525935933,
    },
    {
      id: 26572124,
      name: '울프강 스테이크하우스',
      lat: 37.524255659061744,
      lng: 127.04144944767194,
    },
    {
      id: 7990409,
      name: '압구정 로데오거리',
      lat: 37.526617082978085,
      lng: 127.03910896769526,
    },
    {
      id: 12576877,
      name: '청담동 패션거리',
      lat: 37.525268268467386,
      lng: 127.04425557599073,
    },

    {
      id: 12728828,
      name: '도산안창호 기념관',
      lat: 37.52404587553272,
      lng: 127.03545365885887,
    },
  ]

  const defaultPos = {
    lat: 37.52537821467269,
    lng: 127.03908003898158,
  }

  const get = (target) => {
    return document.querySelector(target)
  }
  const map = get('#map')
  const $zoonInButton = get('.zoon_in')
  const $zoonOutButton = get('.zoon_out')
  const $geolocation_button = get('.geolocation_button')

  const mapContainer = new kakao.maps.Map(map, {
    center: new kakao.maps.LatLng(defaultPos.lat, defaultPos.lng),
    level: 4,
  })

  const createMarkerImage = () => {
    const markerImageSrc = './assets/marker.png'
    const markgerImageSize = new kakao.maps.Size(24, 35)
    return new kakao.maps.MarkerImage(markerImageSrc, markgerImageSize)
  }

  const createMarker = (lat, lng) => {
    const marker = new kakao.maps.Marker({
      map: mapContainer,
      position: new kakao.maps.LatLng(lat, lng),
      image: createMarkerImage(),
    })
    return marker
  }

  const createShopElement = () => {
    shops.map((shop) => {
      const { lat, lng } = shop
      const marker = createMarker(lat, lng)
      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="width:150px;text-align:center;padding:6px 2px;">
                  <a style="text-decoration:none;color:rgb(193, 100, 47);" href="https://place.map.kakao.com/${shop.id}" target="_blank">${shop.name}</a>
                </div>`,
      })
      infowindow.open(mapContainer, marker)
    })
  }

  const zoomInMap = () => {
    let level = mapContainer.getLevel()
    mapContainer.setLevel(level - 1)
  }

  const zoomOutMap = () => {
    let level = mapContainer.getLevel()
    mapContainer.setLevel(level + 1)
  }

  const successGeolocation = (position) => {
    const { latitude, longitude } = position.coords
    mapContainer.setCenter(new kakao.maps.LatLng(latitude, longitude))
    createMarker(latitude, longitude)
  }
  const errorGeolocation = (error) => {
    if (error.code === 1) {
      alert('위치 정보를 허용해주세요')
    } else if (error.code === 2) {
      alert('사용할 수 없는 위치입니다.')
    } else if (error.code === 3) {
      alert('타임 아웃이 발생했습니다.')
    } else {
      alert('오류가 발생했습니다.')
    }
  }

  const getLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        successGeolocation,
        errorGeolocation
      )
    } else {
      alert('지도 api 사용 불가')
    }
  }

  const init = () => {
    $zoonInButton.addEventListener('click', () => {
      zoomInMap()
    })
    $zoonOutButton.addEventListener('click', () => {
      zoomOutMap()
    })
    $geolocation_button.addEventListener('click', () => {
      getLocation()
    })
    createShopElement()
  }

  init()
})()
