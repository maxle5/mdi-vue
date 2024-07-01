
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaCBoxOutline from "../../src/components/MdiAlphaCBoxOutline.vue";

test("MdiAlphaCBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaCBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
