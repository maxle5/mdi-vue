
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterPlusOutline from "../../src/components/MdiWaterPlusOutline.vue";

test("MdiWaterPlusOutline snapshot", () => {
  const wrapper = mount(MdiWaterPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
