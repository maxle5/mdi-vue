
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaEBoxOutline from "../../src/components/MdiAlphaEBoxOutline.vue";

test("MdiAlphaEBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaEBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
