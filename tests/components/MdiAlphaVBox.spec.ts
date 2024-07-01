
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaVBox from "../../src/components/MdiAlphaVBox.vue";

test("MdiAlphaVBox snapshot", () => {
  const wrapper = mount(MdiAlphaVBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
