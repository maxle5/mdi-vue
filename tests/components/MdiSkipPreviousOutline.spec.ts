
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkipPreviousOutline from "../../src/components/MdiSkipPreviousOutline.vue";

test("MdiSkipPreviousOutline snapshot", () => {
  const wrapper = mount(MdiSkipPreviousOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
