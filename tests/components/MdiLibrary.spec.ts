
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLibrary from "../../src/components/MdiLibrary.vue";

test("MdiLibrary snapshot", () => {
  const wrapper = mount(MdiLibrary, {});
  expect(wrapper.html()).toMatchSnapshot();
});
