
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockRemove from "../../src/components/MdiLockRemove.vue";

test("MdiLockRemove snapshot", () => {
  const wrapper = mount(MdiLockRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
