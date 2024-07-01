
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookLockOutline from "../../src/components/MdiBookLockOutline.vue";

test("MdiBookLockOutline snapshot", () => {
  const wrapper = mount(MdiBookLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
