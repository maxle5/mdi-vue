
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaHBox from "../../src/components/MdiAlphaHBox.vue";

test("MdiAlphaHBox snapshot", () => {
  const wrapper = mount(MdiAlphaHBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
