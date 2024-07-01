
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockPercentOutline from "../../src/components/MdiLockPercentOutline.vue";

test("MdiLockPercentOutline snapshot", () => {
  const wrapper = mount(MdiLockPercentOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
