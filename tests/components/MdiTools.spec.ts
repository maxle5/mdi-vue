
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTools from "../../src/components/MdiTools.vue";

test("MdiTools snapshot", () => {
  const wrapper = mount(MdiTools, {});
  expect(wrapper.html()).toMatchSnapshot();
});
