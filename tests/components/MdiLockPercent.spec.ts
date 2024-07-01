
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockPercent from "../../src/components/MdiLockPercent.vue";

test("MdiLockPercent snapshot", () => {
  const wrapper = mount(MdiLockPercent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
