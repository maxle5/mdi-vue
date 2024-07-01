
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWardrobeOutline from "../../src/components/MdiWardrobeOutline.vue";

test("MdiWardrobeOutline snapshot", () => {
  const wrapper = mount(MdiWardrobeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
