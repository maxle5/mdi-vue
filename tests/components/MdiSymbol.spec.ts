
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSymbol from "../../src/components/MdiSymbol.vue";

test("MdiSymbol snapshot", () => {
  const wrapper = mount(MdiSymbol, {});
  expect(wrapper.html()).toMatchSnapshot();
});
