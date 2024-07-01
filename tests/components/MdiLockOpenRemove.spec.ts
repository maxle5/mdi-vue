
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOpenRemove from "../../src/components/MdiLockOpenRemove.vue";

test("MdiLockOpenRemove snapshot", () => {
  const wrapper = mount(MdiLockOpenRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
