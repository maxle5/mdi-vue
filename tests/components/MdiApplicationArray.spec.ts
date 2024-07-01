
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationArray from "../../src/components/MdiApplicationArray.vue";

test("MdiApplicationArray snapshot", () => {
  const wrapper = mount(MdiApplicationArray, {});
  expect(wrapper.html()).toMatchSnapshot();
});
