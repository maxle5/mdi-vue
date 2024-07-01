
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarParkingLights from "../../src/components/MdiCarParkingLights.vue";

test("MdiCarParkingLights snapshot", () => {
  const wrapper = mount(MdiCarParkingLights, {});
  expect(wrapper.html()).toMatchSnapshot();
});
