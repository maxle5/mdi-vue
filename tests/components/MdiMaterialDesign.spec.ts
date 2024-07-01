
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMaterialDesign from "../../src/components/MdiMaterialDesign.vue";

test("MdiMaterialDesign snapshot", () => {
  const wrapper = mount(MdiMaterialDesign, {});
  expect(wrapper.html()).toMatchSnapshot();
});
