
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCountertop from "../../src/components/MdiCountertop.vue";

test("MdiCountertop snapshot", () => {
  const wrapper = mount(MdiCountertop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
