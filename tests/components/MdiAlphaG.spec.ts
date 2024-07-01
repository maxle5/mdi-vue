
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaG from "../../src/components/MdiAlphaG.vue";

test("MdiAlphaG snapshot", () => {
  const wrapper = mount(MdiAlphaG, {});
  expect(wrapper.html()).toMatchSnapshot();
});
