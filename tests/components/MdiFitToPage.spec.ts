
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFitToPage from "../../src/components/MdiFitToPage.vue";

test("MdiFitToPage snapshot", () => {
  const wrapper = mount(MdiFitToPage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
