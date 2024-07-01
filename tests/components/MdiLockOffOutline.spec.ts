
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOffOutline from "../../src/components/MdiLockOffOutline.vue";

test("MdiLockOffOutline snapshot", () => {
  const wrapper = mount(MdiLockOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
