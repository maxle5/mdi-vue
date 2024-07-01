
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeLockOpen from "../../src/components/MdiEyeLockOpen.vue";

test("MdiEyeLockOpen snapshot", () => {
  const wrapper = mount(MdiEyeLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
