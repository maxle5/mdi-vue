
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaABox from "../../src/components/MdiAlphaABox.vue";

test("MdiAlphaABox snapshot", () => {
  const wrapper = mount(MdiAlphaABox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
