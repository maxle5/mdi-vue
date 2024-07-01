
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockReset from "../../src/components/MdiLockReset.vue";

test("MdiLockReset snapshot", () => {
  const wrapper = mount(MdiLockReset, {});
  expect(wrapper.html()).toMatchSnapshot();
});
