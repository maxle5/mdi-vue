
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSecurity from "../../src/components/MdiSecurity.vue";

test("MdiSecurity snapshot", () => {
  const wrapper = mount(MdiSecurity, {});
  expect(wrapper.html()).toMatchSnapshot();
});
