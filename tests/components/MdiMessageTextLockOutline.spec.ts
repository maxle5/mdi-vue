
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageTextLockOutline from "../../src/components/MdiMessageTextLockOutline.vue";

test("MdiMessageTextLockOutline snapshot", () => {
  const wrapper = mount(MdiMessageTextLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
