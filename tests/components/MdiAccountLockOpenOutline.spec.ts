
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountLockOpenOutline from "../../src/components/MdiAccountLockOpenOutline.vue";

test("MdiAccountLockOpenOutline snapshot", () => {
  const wrapper = mount(MdiAccountLockOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
