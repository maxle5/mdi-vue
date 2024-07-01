
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaK from "../../src/components/MdiAlphaK.vue";

test("MdiAlphaK snapshot", () => {
  const wrapper = mount(MdiAlphaK, {});
  expect(wrapper.html()).toMatchSnapshot();
});
