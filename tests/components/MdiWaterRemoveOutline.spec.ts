
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterRemoveOutline from "../../src/components/MdiWaterRemoveOutline.vue";

test("MdiWaterRemoveOutline snapshot", () => {
  const wrapper = mount(MdiWaterRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
