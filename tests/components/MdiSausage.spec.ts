
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSausage from "../../src/components/MdiSausage.vue";

test("MdiSausage snapshot", () => {
  const wrapper = mount(MdiSausage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
