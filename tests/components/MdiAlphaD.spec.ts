
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaD from "../../src/components/MdiAlphaD.vue";

test("MdiAlphaD snapshot", () => {
  const wrapper = mount(MdiAlphaD, {});
  expect(wrapper.html()).toMatchSnapshot();
});
