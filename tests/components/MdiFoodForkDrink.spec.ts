
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodForkDrink from "../../src/components/MdiFoodForkDrink.vue";

test("MdiFoodForkDrink snapshot", () => {
  const wrapper = mount(MdiFoodForkDrink, {});
  expect(wrapper.html()).toMatchSnapshot();
});
