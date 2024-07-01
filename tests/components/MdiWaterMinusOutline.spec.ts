
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterMinusOutline from "../../src/components/MdiWaterMinusOutline.vue";

test("MdiWaterMinusOutline snapshot", () => {
  const wrapper = mount(MdiWaterMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
