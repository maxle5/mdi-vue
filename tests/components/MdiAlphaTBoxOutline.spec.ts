
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaTBoxOutline from "../../src/components/MdiAlphaTBoxOutline.vue";

test("MdiAlphaTBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaTBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
