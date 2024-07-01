
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileWordBox from "../../src/components/MdiFileWordBox.vue";

test("MdiFileWordBox snapshot", () => {
  const wrapper = mount(MdiFileWordBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
