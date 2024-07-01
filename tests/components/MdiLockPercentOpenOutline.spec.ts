
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockPercentOpenOutline from "../../src/components/MdiLockPercentOpenOutline.vue";

test("MdiLockPercentOpenOutline snapshot", () => {
  const wrapper = mount(MdiLockPercentOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
