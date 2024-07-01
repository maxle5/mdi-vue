
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkipForwardOutline from "../../src/components/MdiSkipForwardOutline.vue";

test("MdiSkipForwardOutline snapshot", () => {
  const wrapper = mount(MdiSkipForwardOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
