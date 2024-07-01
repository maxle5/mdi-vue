
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFencing from "../../src/components/MdiFencing.vue";

test("MdiFencing snapshot", () => {
  const wrapper = mount(MdiFencing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
