
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaRBox from "../../src/components/MdiAlphaRBox.vue";

test("MdiAlphaRBox snapshot", () => {
  const wrapper = mount(MdiAlphaRBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
