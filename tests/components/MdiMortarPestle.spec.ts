
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMortarPestle from "../../src/components/MdiMortarPestle.vue";

test("MdiMortarPestle snapshot", () => {
  const wrapper = mount(MdiMortarPestle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
