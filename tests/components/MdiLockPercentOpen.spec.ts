
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockPercentOpen from "../../src/components/MdiLockPercentOpen.vue";

test("MdiLockPercentOpen snapshot", () => {
  const wrapper = mount(MdiLockPercentOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
