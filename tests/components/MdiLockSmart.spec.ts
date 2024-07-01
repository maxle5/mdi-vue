
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockSmart from "../../src/components/MdiLockSmart.vue";

test("MdiLockSmart snapshot", () => {
  const wrapper = mount(MdiLockSmart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
