
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHydraulicOilTemperature from "../../src/components/MdiHydraulicOilTemperature.vue";

test("MdiHydraulicOilTemperature snapshot", () => {
  const wrapper = mount(MdiHydraulicOilTemperature, {});
  expect(wrapper.html()).toMatchSnapshot();
});
