
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaMBox from "../../src/components/MdiAlphaMBox.vue";

test("MdiAlphaMBox snapshot", () => {
  const wrapper = mount(MdiAlphaMBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
