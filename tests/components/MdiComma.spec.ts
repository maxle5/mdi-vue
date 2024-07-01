
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiComma from "../../src/components/MdiComma.vue";

test("MdiComma snapshot", () => {
  const wrapper = mount(MdiComma, {});
  expect(wrapper.html()).toMatchSnapshot();
});
