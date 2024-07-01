
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaL from "../../src/components/MdiAlphaL.vue";

test("MdiAlphaL snapshot", () => {
  const wrapper = mount(MdiAlphaL, {});
  expect(wrapper.html()).toMatchSnapshot();
});
