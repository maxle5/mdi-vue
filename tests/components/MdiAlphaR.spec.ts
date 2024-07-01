
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaR from "../../src/components/MdiAlphaR.vue";

test("MdiAlphaR snapshot", () => {
  const wrapper = mount(MdiAlphaR, {});
  expect(wrapper.html()).toMatchSnapshot();
});
