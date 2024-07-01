
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBicycleBasket from "../../src/components/MdiBicycleBasket.vue";

test("MdiBicycleBasket snapshot", () => {
  const wrapper = mount(MdiBicycleBasket, {});
  expect(wrapper.html()).toMatchSnapshot();
});
