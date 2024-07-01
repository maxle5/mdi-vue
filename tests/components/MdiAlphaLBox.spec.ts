
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaLBox from "../../src/components/MdiAlphaLBox.vue";

test("MdiAlphaLBox snapshot", () => {
  const wrapper = mount(MdiAlphaLBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
