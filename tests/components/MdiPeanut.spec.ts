
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPeanut from "../../src/components/MdiPeanut.vue";

test("MdiPeanut snapshot", () => {
  const wrapper = mount(MdiPeanut, {});
  expect(wrapper.html()).toMatchSnapshot();
});
