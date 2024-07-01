
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeThermometer from "../../src/components/MdiHomeThermometer.vue";

test("MdiHomeThermometer snapshot", () => {
  const wrapper = mount(MdiHomeThermometer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
