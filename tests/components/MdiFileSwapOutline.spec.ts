
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileSwapOutline from "../../src/components/MdiFileSwapOutline.vue";

test("MdiFileSwapOutline snapshot", () => {
  const wrapper = mount(MdiFileSwapOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
