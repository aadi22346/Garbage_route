import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Geocoder from "react-native-geocoding";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapViewDirections from "react-native-maps-directions";
// import { Polyline } from "react-native-maps";
const Maps = () => {
  const apiKey = "AIzaSyB2SxNARqwP0A6aQ6zMCYcxlvDZelbeV1U";

  // Initialize Geocoder with your API key
  console.log("Initializing Geocoder with API key");
  Geocoder.init(apiKey);
  const mapViewRef = useRef(null);

  const navigation = useNavigation();

  const handleAccountIconPress = () => {
    console.log("handleAccountIconPress");
    navigation.navigate("Profile");
  };

  const handleHomeIconPress = () => {
    +console.log("handleHomeIconPress");
    navigation.navigate("Maps");
  };
  const handleActivityIconPress = () => {
    navigation.navigate("Activity");
  };

  const [initialRegion, setInitialRegion] = useState({
    latitude: 19.0728,
    longitude: 72.8826,
    latitudeDelta: 0.005,
    longitudeDelta: 0.035,
  });
  const [dest, setDest] = useState(null);
  const [source, setSource] = useState(null);
  const [showDirections, setShowDirections] = useState(false);
  const [garbagePoints, setGarbagePoints] = useState([]);
  const [dest_latitude, setDest_latitude] = useState(null);
  const [dest_longitude, setDest_longitude] = useState(null);
  const [source_latitude, setSource_latitude] = useState(null);
  const [source_longitude, setSource_longitude] = useState(null);
  const handleGarbagePointPress = (garbagePoint) => {
    console.log("Garbage point pressed:", garbagePoint);
    const destination = {
      latitude: garbagePoint.latitude,
      longitude: garbagePoint.longitude
    };
    // Set the destination and show directions
    setDest(destination);
    console.log("Destination_Latitude: ", destination.latitude);
    console.log("Destination_Longitude: ", destination.longitude);
    console.log("Source_Latitude: ", source_latitude);
    console.log("Source_Longitude: ", source_longitude);
    setShowDirections(true);
    axios.post('http://192.168.0.104:3000/FindRouteInformation',{
      source: {latitude: source_latitude, longitude: source_longitude},
      destination: {latitude: garbagePoint.latitude, longitude: garbagePoint.longitude},
    })
    .then((response) => {
      console.log(response.data);
      alert(`Distance: ${response.data.distance}, Duration: ${response.data.duration}`);
    }) 
  };
  const getMarkerTypes = (types) => {
    if (types && types.includes) {
      if (types.includes('Hospital')) {
        return require('../assets/hospital.png');
      } else if (types.includes('society')) {
        return require('../assets/apartments.png');
      } else if (types.includes('hotel')) {
        return require('../assets/restaurant.png');
      } else {
        return require('../assets/location-pin.png');
      }
  };
}

  const handleGarbagePoint = () => {
    console.log("Fetching garbage points");
    console.log("latitude: ", dest_latitude);
    console.log("longitude: ", dest_longitude);
    axios
      .post("http://192.168.0.104:3000/FindGarbagePoints", {
        destination: { latitude: dest_latitude, longitude: dest_longitude },
      })
      .then((response) => {
        const garbagePoints = response.data;
        setGarbagePoints(garbagePoints);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const moveTo_o = async (position) => {
    setSource_latitude(position.latitude);
    setSource_longitude(position.longitude);
    if (mapViewRef.current) {
      mapViewRef.current.animateToRegion({
        latitude: position.latitude,
        longitude: position.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.035,
      });
      setSource(position); 
    }
  };
  const moveTo_d = async (position) => {
    setDest_latitude(position.latitude);
    setDest_longitude(position.longitude);
    if (mapViewRef.current) {
      mapViewRef.current.animateToRegion({
        latitude: position.latitude,
        longitude: position.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.035,
      });
      setDest(position); // Use setDest instead of set
    }
  };

  const OnPlaceSelected_o = (details) => {
    const position = {
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    };
    moveTo_o(position); // Call moveTo function to move to the selected place
  };
  const OnPlaceSelected_d = (details) => {
    const position = {
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    };
    moveTo_d(position); // Call moveTo function to move to the selected place
  };

  return (
    <View style={styles.maps1}>
      <View style={[styles.maps, styles.mapsLayout]}>
        <MapView
          style={styles.maps1}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}
          showsUserLocation={true}
          showsMyLocationButton
          ref={mapViewRef}
        >
          {source && <Marker coordinate={source} />}
          {dest && <Marker coordinate={dest} />}
          {garbagePoints && garbagePoints.map((garbagePoint, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: garbagePoint.latitude,
                longitude: garbagePoint.longitude,
              }}
              title={garbagePoint.name}
              description={garbagePoint.types}
              image={getMarkerTypes(garbagePoint.types)}
              onPress={() => handleGarbagePointPress(garbagePoint)}
            />
          ))}
          {showDirections && source && dest && (
            <MapViewDirections
              origin={source}
              destination={dest}
              apikey={apiKey}
              strokeColor="#32CD32"
              strokeWidth={4}
            />
          )}
        </MapView>
      </View>
      <View style={[styles.navBar, styles.mapsLayout]} />
      <Text style={[styles.activity, styles.homeTypo]}>Activity</Text>
      <Text style={[styles.home, styles.homeTypo]}>home</Text>
      <Text style={[styles.profile, styles.homeTypo]}>profile</Text>
      <View style={[styles.maps1Child, styles.mapsLayout]} />
      <View style={[styles.SerachContainer, styles.mapsLayout]}>
        <GooglePlacesAutocomplete
          styles={{ textInput: styles.input }}
          placeholder="Search for source"
          fetchDetails
          onPress={(data, details = null) => {
            OnPlaceSelected_o(details);
            setSource(details.formatted_address);
          }}
          query={{
            key: apiKey,
            language: "en",
          }}
        />
        <GooglePlacesAutocomplete
          styles={{ textInput: styles.input }}
          placeholder="Search for destination"
          fetchDetails
          onPress={(data, details = null) => {
            OnPlaceSelected_d(details);
            setDest(details.formatted_address);
          }}
          query={{
            key: apiKey,
            language: "en",
          }}
        />
        <TouchableOpacity
          style={styles.Button}
          onPress={() => setShowDirections(true)}
          onLongPress={handleGarbagePoint}
        >
          <Text style={styles.ButtonInput}>Trace Route</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.goodMorning}>Good Evening!</Text>
      <TouchableOpacity onPress={handleActivityIconPress}>
        <ImageBackground
          style={[styles.garbageTruckIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/garbagetruck.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleHomeIconPress}>
        <ImageBackground
          style={[styles.homePageIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/homepage.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAccountIconPress}>
        <ImageBackground
          style={[styles.accountIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/account.png")}
        />
      </TouchableOpacity>

      <ImageBackground
        style={[styles.alarmIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/alarm.png")}
      />
      <ImageBackground
        style={[styles.menuIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/menu.png")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mapsLayout: {
    borderRadius: Border.br_13xl,
    position: "absolute",
  },
  homeTypo: {
    height: 15,
    width: 45,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.jostMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  SerachContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 4,
    borderRadius: 8,
    padding: 10,
    top: 100,
    left: 20,
  },
  Button: {
    backgroundColor: Color.colorLimegreen,
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
  },
  ButtonInput: {
    textAlign: "center",
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },
  enterPosition: {
    top: 181,
    position: "absolute",
  },
  iconPosition1: {
    top: 702,
    height: 30,
    position: "absolute",
  },
  iconPosition: {
    height: 26,
    top: 38,
    position: "absolute",
  },
  maps: {
    left: 8,
    backgroundColor: "#d9d9d9",
    width: 340,
    height: 601,
    top: 165,
  },
  navBar: {
    top: 697,
    left: 28,
    width: 301,
    height: 69,
    backgroundColor: Color.colorLimegreen,
  },
  activity: {
    top: 734,
    left: 76,
  },
  home: {
    top: 737,
    left: 168,
  },
  profile: {
    top: 736,
    left: 257,
  },
  maps1Child: {
    top: 24,
    left: 5,
    width: 350,
    height: 141,
    backgroundColor: Color.colorLimegreen,
  },
  search: {
    top: 107,
    left: 26,
    width: 303,
    height: 116,
    backgroundColor: Color.colorWhite,
  },
  maps1Item: {
    left: 137,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 142,
    height: 1,
    top: 165,
    position: "absolute",
  },
  enter1: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.jostMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  addressIcon: {
    top: 135,
    left: 75,
    height: 30,
    width: 30,
    position: "absolute",
  },
  goodMorning: {
    left: 37,
    fontSize: FontSize.size_base,
    width: 193,
    height: 41,
    top: 38,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.jostMedium,
    fontWeight: "500",
    position: "absolute",
  },
  destInput: {
    top: 29,
    left: 134,
    width: 139,
    height: 23,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  garbageTruckIcon: {
    left: 87,
    width: 30,
    top: 702,
  },
  homePageIcon: {
    left: 174,
    width: 30,
    top: 702,
  },
  accountIcon: {
    left: 261,
    width: 34,
  },
  alarmIcon: {
    left: 244,
    width: 27,
  },
  menuIcon: {
    left: 295,
    width: 29,
  },
  maps1: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Maps;
