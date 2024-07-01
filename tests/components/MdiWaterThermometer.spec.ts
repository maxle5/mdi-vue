
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterThermometer from "../../src/components/MdiWaterThermometer.vue";

test("MdiWaterThermometer snapshot", () => {
  const wrapper = mount(MdiWaterThermometer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
