
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayBoxLockOpen from "../../src/components/MdiPlayBoxLockOpen.vue";

test("MdiPlayBoxLockOpen snapshot", () => {
  const wrapper = mount(MdiPlayBoxLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
