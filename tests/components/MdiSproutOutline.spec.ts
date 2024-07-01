
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSproutOutline from "../../src/components/MdiSproutOutline.vue";

test("MdiSproutOutline snapshot", () => {
  const wrapper = mount(MdiSproutOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
