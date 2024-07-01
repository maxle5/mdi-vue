
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaDBoxOutline from "../../src/components/MdiAlphaDBoxOutline.vue";

test("MdiAlphaDBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaDBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
