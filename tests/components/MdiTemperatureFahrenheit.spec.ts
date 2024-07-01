
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTemperatureFahrenheit from "../../src/components/MdiTemperatureFahrenheit.vue";

test("MdiTemperatureFahrenheit snapshot", () => {
  const wrapper = mount(MdiTemperatureFahrenheit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
