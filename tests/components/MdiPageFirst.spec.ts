
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPageFirst from "../../src/components/MdiPageFirst.vue";

test("MdiPageFirst snapshot", () => {
  const wrapper = mount(MdiPageFirst, {});
  expect(wrapper.html()).toMatchSnapshot();
});
