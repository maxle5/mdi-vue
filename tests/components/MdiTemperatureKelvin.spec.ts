
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTemperatureKelvin from "../../src/components/MdiTemperatureKelvin.vue";

test("MdiTemperatureKelvin snapshot", () => {
  const wrapper = mount(MdiTemperatureKelvin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
