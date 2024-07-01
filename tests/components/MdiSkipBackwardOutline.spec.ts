
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkipBackwardOutline from "../../src/components/MdiSkipBackwardOutline.vue";

test("MdiSkipBackwardOutline snapshot", () => {
  const wrapper = mount(MdiSkipBackwardOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
