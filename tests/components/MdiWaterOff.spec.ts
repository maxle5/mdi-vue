
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterOff from "../../src/components/MdiWaterOff.vue";

test("MdiWaterOff snapshot", () => {
  const wrapper = mount(MdiWaterOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
