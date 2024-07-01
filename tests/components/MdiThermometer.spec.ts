
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometer from "../../src/components/MdiThermometer.vue";

test("MdiThermometer snapshot", () => {
  const wrapper = mount(MdiThermometer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
