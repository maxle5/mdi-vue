
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockAlert from "../../src/components/MdiLockAlert.vue";

test("MdiLockAlert snapshot", () => {
  const wrapper = mount(MdiLockAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
