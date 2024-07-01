
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPackage from "../../src/components/MdiPackage.vue";

test("MdiPackage snapshot", () => {
  const wrapper = mount(MdiPackage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
