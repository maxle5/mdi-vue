
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaQBox from "../../src/components/MdiAlphaQBox.vue";

test("MdiAlphaQBox snapshot", () => {
  const wrapper = mount(MdiAlphaQBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
