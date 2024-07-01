
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTemperatureCelsius from "../../src/components/MdiTemperatureCelsius.vue";

test("MdiTemperatureCelsius snapshot", () => {
  const wrapper = mount(MdiTemperatureCelsius, {});
  expect(wrapper.html()).toMatchSnapshot();
});
