
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSunThermometer from "../../src/components/MdiSunThermometer.vue";

test("MdiSunThermometer snapshot", () => {
  const wrapper = mount(MdiSunThermometer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
