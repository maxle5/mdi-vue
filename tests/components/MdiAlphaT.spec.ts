
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaT from "../../src/components/MdiAlphaT.vue";

test("MdiAlphaT snapshot", () => {
  const wrapper = mount(MdiAlphaT, {});
  expect(wrapper.html()).toMatchSnapshot();
});
