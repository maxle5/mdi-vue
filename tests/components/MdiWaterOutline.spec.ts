
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterOutline from "../../src/components/MdiWaterOutline.vue";

test("MdiWaterOutline snapshot", () => {
  const wrapper = mount(MdiWaterOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
