
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBiathlon from "../../src/components/MdiBiathlon.vue";

test("MdiBiathlon snapshot", () => {
  const wrapper = mount(MdiBiathlon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
