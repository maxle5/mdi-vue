
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWheelBarrow from "../../src/components/MdiWheelBarrow.vue";

test("MdiWheelBarrow snapshot", () => {
  const wrapper = mount(MdiWheelBarrow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
