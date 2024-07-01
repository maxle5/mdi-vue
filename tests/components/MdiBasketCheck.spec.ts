
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketCheck from "../../src/components/MdiBasketCheck.vue";

test("MdiBasketCheck snapshot", () => {
  const wrapper = mount(MdiBasketCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
