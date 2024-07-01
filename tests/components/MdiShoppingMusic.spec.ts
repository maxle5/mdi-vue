
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShoppingMusic from "../../src/components/MdiShoppingMusic.vue";

test("MdiShoppingMusic snapshot", () => {
  const wrapper = mount(MdiShoppingMusic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
