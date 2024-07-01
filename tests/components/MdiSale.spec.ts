
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSale from "../../src/components/MdiSale.vue";

test("MdiSale snapshot", () => {
  const wrapper = mount(MdiSale, {});
  expect(wrapper.html()).toMatchSnapshot();
});
