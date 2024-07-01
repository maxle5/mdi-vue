
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRegex from "../../src/components/MdiRegex.vue";

test("MdiRegex snapshot", () => {
  const wrapper = mount(MdiRegex, {});
  expect(wrapper.html()).toMatchSnapshot();
});
