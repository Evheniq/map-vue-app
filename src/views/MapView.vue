<template>
  <div id="mapMy"></div>
  <div class="text-3xl text-center py-9">Here you can create markers</div>
  <ModalWindow v-model:show="showModal">
    <div class="text-2xl">Create marker</div>

    <CustomInput
      class="my-3"
      v-model="inputMarkerTitle"
      placeholder="Title for marker"
    />
    <CustomInput
      class="my-3"
      v-model="coordinatesSelected.lat"
      placeholder="Title for marker"
    />
    <CustomInput
      class="my-3"
      v-model="coordinatesSelected.lng"
      placeholder="Title for marker"
    />

    <CustomButton @click="saveMarker">Save</CustomButton>
  </ModalWindow>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { map, tileLayer, popup, marker } from "leaflet";
import ModalWindow from "@/components/UI/ModalWindow.vue";
import CustomInput from "@/components/UI/CustomInput.vue";
import CustomButton from "@/components/UI/CustomButton.vue";

export default {
  components: {
    ModalWindow,
    CustomInput,
    CustomButton,
  },
  data() {
    return {
      popup: popup(),
      mapMy: undefined,
      showModal: false,
      coordinatesSelected: undefined,
      inputMarkerTitle: "",
      markersSaved: [],
    };
  },
  methods: {
    onMapClick(e) {
      this.coordinatesSelected = e.latlng;
      this.showModal = true;
    },
    saveMarker() {
      marker(this.coordinatesSelected, {
        title: this.inputMarkerTitle,
      }).addTo(this.mapMy);

      this.markersSaved.push({
        title: this.inputMarkerTitle,
        coordinates: this.coordinatesSelected,
      });
      localStorage.setItem("savedMarkers", JSON.stringify(this.markersSaved));
      this.coordinatesSelected = undefined;
      this.inputMarkerTitle = "";
      this.showModal = false;
    },
  },
  mounted() {
    this.mapMy = map("mapMy").setView([48.505, 32.09], 6);
    const localSavedMarkers = localStorage.getItem("savedMarkers");
    if (localSavedMarkers) {
      this.markersSaved = JSON.parse(localSavedMarkers);
      this.markersSaved.forEach((markerFromSaved) => {
        marker(markerFromSaved.coordinates, {
          title: markerFromSaved.title,
        }).addTo(this.mapMy);
      });
    }

    tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 8,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.mapMy);

    this.mapMy.on("click", this.onMapClick);
  },
};
</script>

<style scoped>
#mapMy {
  height: 70vh;
  z-index: 1;
}
</style>
