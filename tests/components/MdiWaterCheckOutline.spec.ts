
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterCheckOutline from "../../src/components/MdiWaterCheckOutline.vue";

test("MdiWaterCheckOutline snapshot", () => {
  const wrapper = mount(MdiWaterCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
