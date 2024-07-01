
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewModuleOutline from "../../src/components/MdiViewModuleOutline.vue";

test("MdiViewModuleOutline snapshot", () => {
  const wrapper = mount(MdiViewModuleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
