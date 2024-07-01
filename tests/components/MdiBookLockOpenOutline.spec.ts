
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookLockOpenOutline from "../../src/components/MdiBookLockOpenOutline.vue";

test("MdiBookLockOpenOutline snapshot", () => {
  const wrapper = mount(MdiBookLockOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
