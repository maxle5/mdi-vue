
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaC from "../../src/components/MdiAlphaC.vue";

test("MdiAlphaC snapshot", () => {
  const wrapper = mount(MdiAlphaC, {});
  expect(wrapper.html()).toMatchSnapshot();
});
