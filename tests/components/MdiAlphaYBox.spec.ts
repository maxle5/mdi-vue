
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaYBox from "../../src/components/MdiAlphaYBox.vue";

test("MdiAlphaYBox snapshot", () => {
  const wrapper = mount(MdiAlphaYBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
