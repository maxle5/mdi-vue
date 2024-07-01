
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPoolThermometer from "../../src/components/MdiPoolThermometer.vue";

test("MdiPoolThermometer snapshot", () => {
  const wrapper = mount(MdiPoolThermometer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
