
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOpenAlert from "../../src/components/MdiLockOpenAlert.vue";

test("MdiLockOpenAlert snapshot", () => {
  const wrapper = mount(MdiLockOpenAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
