
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaF from "../../src/components/MdiAlphaF.vue";

test("MdiAlphaF snapshot", () => {
  const wrapper = mount(MdiAlphaF, {});
  expect(wrapper.html()).toMatchSnapshot();
});
