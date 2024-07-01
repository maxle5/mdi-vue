
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOctagramMinus from "../../src/components/MdiOctagramMinus.vue";

test("MdiOctagramMinus snapshot", () => {
  const wrapper = mount(MdiOctagramMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
