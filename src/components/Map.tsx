'use client';
import MapGl, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
  Marker,
  Popup,
} from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import Image from 'next/image';
import { CSSProperties, useMemo, useState } from 'react';
import MarkerInfo from './MarkerInfo';
import { cn } from '@/lib/utils';

type Props = {};
type markersType = {
  latitude: number;
  longitude: number;
  type: number;
  locationInfo: locationInfoType;
};

type locationInfoType = {
  name: string;
  place_name?: string;
  address?: string;
  email?: string;
};

const listMarkers: markersType[] = [
  {
    latitude: 25.0953108,
    longitude: 55.1058257,
    type: 1,
    locationInfo: {
      name: 'Head Office - United Arab Emirates',
      place_name: 'Mindware FZ LLC',
      address: '10th Floor, Cayan Business Center,Barsha Heights, office 1001',
      email: 'sales@mindware.net',
    },
  },
  {
    latitude: 36.725001,
    longitude: 3.06128,
    type: 1,
    locationInfo: {
      name: 'Algeria',
      place_name: 'Southcomp Distribution SARL',
      address: 'KOUBA, Coop&eacute;rative Les IRIS, Villa 02',
    },
  },
  {
    latitude: 25.9398716,
    longitude: 50.0270846,
    type: 2,
    locationInfo: {
      name: 'Bahrain',
      email: 'Bahrain_Sales@mindware.net',
    },
  },
  {
    latitude: 5.378681,
    longitude: -4.601687,
    type: 1,
    locationInfo: {
      name: 'Côte d’Ivoire',
      place_name: 'Polaris Distribution SARL',
      address: 'Abidjan, 17 Rue des Ferronniers Lot 70, zone 3, Treichville',
    },
  },
  {
    latitude: 24.6839425,
    longitude: 46.738411,
    type: 1,
    locationInfo: {
      name: 'Kingdom of Saudi Arabia',
      place_name: 'Aklaniat Technologies LTD',
      address: 'Alrabwah, Fatimah Alzahra Street,Bldg. 6601',
      email: 'ksa_sales@mindware.net',
    },
  },
  {
    latitude: 23.1146921,
    longitude: 40.5121619,
    type: 1,
    locationInfo: {
      name: 'Kuwait',
      place_name: 'Mindware Computer Service Company',
      address:
        'Dar Al Awadi Tower, Mall Area, 2nd floor, Of. 5119, Entrance 51, Ahmed Al Jaber Street, Kuwait City, Kuwait',
      email: 'kuwait_sales@mindware.net',
    },
  },
  {
    latitude: 33.8853919,
    longitude: 35.5276662,
    type: 1,
    locationInfo: {
      name: 'Lebanon',
      place_name: 'Mindware SAL',
      address: 'Corniche Al Nahr,Holcom Bldg., 4th Floor,Beirut, Lebanon',
      email: 'Leb_sales@mindware.net',
    },
  },
  {
    latitude: 33.593752,
    longitude: -7.603259,
    type: 1,
    locationInfo: {
      name: 'Morocco',
      place_name: 'Southcomp Distribution MAROC',
      address: '&nbsp;Casablanca',
    },
  },
  {
    latitude: 24.9153611,
    longitude: 67.0791232,
    type: 1,
    locationInfo: {
      name: 'Pakistan',
      address: 'Emirates Tower, M-13, Of. 314,F-7 Markaz, Islamabad, Pakistan',
      email: 'Pak_sales@mindware.net',
    },
  },
  {
    latitude: 26.8349058,
    longitude: 26.3808168,
    type: 2,
    locationInfo: {
      name: 'Egypt',
      email: 'Egypt_Sales@mindware.net',
    },
  },
  {
    latitude: 33.1401173,
    longitude: 39.2204226,
    type: 2,
    locationInfo: {
      name: 'Iraq',
      email: 'Iraq_Sales@mindware.net',
    },
  },
  {
    latitude: 31.2603819,
    longitude: 34.8784859,
    type: 2,
    locationInfo: {
      name: 'Jordan',
      email: 'Jordan_Sales@mindware.net',
    },
  },
  {
    latitude: 21.3865831,
    longitude: 51.6544738,
    type: 2,
    locationInfo: {
      name: 'Oman',
      email: 'Oman_Sales@mindware.net',
    },
  },
  {
    latitude: 25.3398637,
    longitude: 50.0963678,
    type: 2,
    locationInfo: {
      name: 'Qatar',
      email: 'qatar@mindware.net',
    },
  },
  {
    latitude: 36.837002,
    longitude: 10.232505,
    type: 1,
    locationInfo: {
      name: 'Tunisie',
      place_name: 'Southcomp Distribution Tunisie',
      address:
        'Tunisie, Imm. Crystal Palace &ndash; Bur 2.B.2/2.B.3, Les Berges du Lac - Tunis',
    },
  },
];

const styleMap: string[] = [
  'https://api.maptiler.com/maps/a95fc521-c6e3-4a3a-b2fd-0144d656db02/style.json?key=e9Iczmaf6YouVpEn77Qt',
  'https://api.maptiler.com/maps/satellite/style.json?key=e9Iczmaf6YouVpEn77Qt',
];
const Map = ({
  style,
  hideSatelite = false,
}: {
  style?: CSSProperties;
  hideSatelite?: boolean;
}) => {
  const [activeLayer, setactiveLayer] = useState<number>(0);
  const [popupInfo, setPopupInfo] = useState<markersType | null>(null);

  const handleClickLayer = (number: number) => () => {
    setactiveLayer(number);
  };

  const pins = useMemo(
    () =>
      listMarkers.map((mark, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={mark.longitude}
          latitude={mark.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(mark);
          }}
        >
          {/* <Pin /> */}
          <Image
            src={`/svg/${
              mark.type === 2 ? 'locationPin' : 'locationPinDark'
            }.svg`}
            width={0}
            height={0}
            className="h-auto w-[15px]"
            alt="Regional Offices"
          />
        </Marker>
      )),
    []
  );

  return (
    <MapGl
      initialViewState={{
        longitude: 35.501286,
        latitude: 33.898671,
        zoom: 3,
      }}
      style={{
        width: '100%',
        height: 550,
        position: 'relative',
        bottom: '-4rem',
        ...style,
      }}
      mapStyle={styleMap[activeLayer]}
    >
      <FullscreenControl />
      <GeolocateControl />
      <NavigationControl position="bottom-right" />
      <MarkerInfo />
      {!hideSatelite && (
        <div className="flex absolute top-5 left-10 bg-white gap-5 rounded-md divide-x text-xl shadow-xl">
          <div
            className={cn(
              'px-10 py-3 cursor-pointer',
              activeLayer === 0 && 'font-bold'
            )}
            onClick={handleClickLayer(0)}
          >
            Map
          </div>
          <div
            className={cn(
              'px-10 py-3 cursor-pointer',
              activeLayer === 1 && 'font-bold'
            )}
            onClick={handleClickLayer(1)}
          >
            Satelite
          </div>
        </div>
      )}

      {pins}
      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}
          closeButton={false}
          className="shadow-2xl"
          style={{
            maxWidth: 'fit-content',
          }}
        >
          <div className="w-full flex flex-col gap-3 p-3  ">
            <h6 className="text-sm font-bold text-secondary">
              {popupInfo.locationInfo.name}
            </h6>
            {popupInfo.locationInfo.place_name && (
              <div className="text-sm font-bold text-primaryDark">
                {popupInfo.locationInfo.place_name}
              </div>
            )}

            {popupInfo.locationInfo.address && (
              <div className="text-primary font-thin text-xs">
                {popupInfo.locationInfo.address}
              </div>
            )}

            <div className="text-primary font-thin text-xs">
              <a
                target="_blank"
                href={`mailto:${popupInfo.locationInfo.email}`}
              >
                {popupInfo.locationInfo.email}
              </a>
            </div>
          </div>
        </Popup>
      )}
    </MapGl>
  );
};

export default Map;
