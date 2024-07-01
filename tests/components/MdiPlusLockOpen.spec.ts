
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusLockOpen from "../../src/components/MdiPlusLockOpen.vue";

test("MdiPlusLockOpen snapshot", () => {
  const wrapper = mount(MdiPlusLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
