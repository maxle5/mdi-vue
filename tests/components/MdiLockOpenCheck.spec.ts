
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOpenCheck from "../../src/components/MdiLockOpenCheck.vue";

test("MdiLockOpenCheck snapshot", () => {
  const wrapper = mount(MdiLockOpenCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
