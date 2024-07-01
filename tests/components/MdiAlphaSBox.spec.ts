
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaSBox from "../../src/components/MdiAlphaSBox.vue";

test("MdiAlphaSBox snapshot", () => {
  const wrapper = mount(MdiAlphaSBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
