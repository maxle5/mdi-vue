
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarBrakeTemperature from "../../src/components/MdiCarBrakeTemperature.vue";

test("MdiCarBrakeTemperature snapshot", () => {
  const wrapper = mount(MdiCarBrakeTemperature, {});
  expect(wrapper.html()).toMatchSnapshot();
});
