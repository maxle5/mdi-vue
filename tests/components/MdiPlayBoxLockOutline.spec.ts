
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayBoxLockOutline from "../../src/components/MdiPlayBoxLockOutline.vue";

test("MdiPlayBoxLockOutline snapshot", () => {
  const wrapper = mount(MdiPlayBoxLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
