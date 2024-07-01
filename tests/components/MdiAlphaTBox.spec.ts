
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaTBox from "../../src/components/MdiAlphaTBox.vue";

test("MdiAlphaTBox snapshot", () => {
  const wrapper = mount(MdiAlphaTBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
