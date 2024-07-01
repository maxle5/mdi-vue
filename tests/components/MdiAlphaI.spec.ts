
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaI from "../../src/components/MdiAlphaI.vue";

test("MdiAlphaI snapshot", () => {
  const wrapper = mount(MdiAlphaI, {});
  expect(wrapper.html()).toMatchSnapshot();
});
