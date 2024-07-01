
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasket from "../../src/components/MdiBasket.vue";

test("MdiBasket snapshot", () => {
  const wrapper = mount(MdiBasket, {});
  expect(wrapper.html()).toMatchSnapshot();
});
