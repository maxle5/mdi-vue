
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkipNextOutline from "../../src/components/MdiSkipNextOutline.vue";

test("MdiSkipNextOutline snapshot", () => {
  const wrapper = mount(MdiSkipNextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
