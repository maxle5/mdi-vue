
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaABoxOutline from "../../src/components/MdiAlphaABoxOutline.vue";

test("MdiAlphaABoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaABoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
