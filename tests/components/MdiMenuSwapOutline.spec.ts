
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMenuSwapOutline from "../../src/components/MdiMenuSwapOutline.vue";

test("MdiMenuSwapOutline snapshot", () => {
  const wrapper = mount(MdiMenuSwapOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
