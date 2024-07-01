
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCopyright from "../../src/components/MdiCopyright.vue";

test("MdiCopyright snapshot", () => {
  const wrapper = mount(MdiCopyright, {});
  expect(wrapper.html()).toMatchSnapshot();
});
