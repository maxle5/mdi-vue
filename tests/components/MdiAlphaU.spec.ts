
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaU from "../../src/components/MdiAlphaU.vue";

test("MdiAlphaU snapshot", () => {
  const wrapper = mount(MdiAlphaU, {});
  expect(wrapper.html()).toMatchSnapshot();
});
