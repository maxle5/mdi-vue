
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric8CircleOutline from "../../src/components/MdiNumeric8CircleOutline.vue";

test("MdiNumeric8CircleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric8CircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
