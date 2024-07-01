
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMortarPestlePlus from "../../src/components/MdiMortarPestlePlus.vue";

test("MdiMortarPestlePlus snapshot", () => {
  const wrapper = mount(MdiMortarPestlePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
