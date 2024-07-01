
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPointOfSale from "../../src/components/MdiPointOfSale.vue";

test("MdiPointOfSale snapshot", () => {
  const wrapper = mount(MdiPointOfSale, {});
  expect(wrapper.html()).toMatchSnapshot();
});
