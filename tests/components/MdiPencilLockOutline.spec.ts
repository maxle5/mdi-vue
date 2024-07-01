
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilLockOutline from "../../src/components/MdiPencilLockOutline.vue";

test("MdiPencilLockOutline snapshot", () => {
  const wrapper = mount(MdiPencilLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
