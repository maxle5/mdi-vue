
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOpenOutline from "../../src/components/MdiLockOpenOutline.vue";

test("MdiLockOpenOutline snapshot", () => {
  const wrapper = mount(MdiLockOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
