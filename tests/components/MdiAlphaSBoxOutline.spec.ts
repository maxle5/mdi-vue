
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaSBoxOutline from "../../src/components/MdiAlphaSBoxOutline.vue";

test("MdiAlphaSBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaSBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
