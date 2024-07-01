
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagicStaff from "../../src/components/MdiMagicStaff.vue";

test("MdiMagicStaff snapshot", () => {
  const wrapper = mount(MdiMagicStaff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
