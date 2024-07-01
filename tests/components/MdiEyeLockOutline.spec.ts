
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeLockOutline from "../../src/components/MdiEyeLockOutline.vue";

test("MdiEyeLockOutline snapshot", () => {
  const wrapper = mount(MdiEyeLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
