
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLibraryOutline from "../../src/components/MdiLibraryOutline.vue";

test("MdiLibraryOutline snapshot", () => {
  const wrapper = mount(MdiLibraryOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
