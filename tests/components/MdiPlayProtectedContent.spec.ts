
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayProtectedContent from "../../src/components/MdiPlayProtectedContent.vue";

test("MdiPlayProtectedContent snapshot", () => {
  const wrapper = mount(MdiPlayProtectedContent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
