
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageLockOutline from "../../src/components/MdiImageLockOutline.vue";

test("MdiImageLockOutline snapshot", () => {
  const wrapper = mount(MdiImageLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
