
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaA from "../../src/components/MdiAlphaA.vue";

test("MdiAlphaA snapshot", () => {
  const wrapper = mount(MdiAlphaA, {});
  expect(wrapper.html()).toMatchSnapshot();
});
