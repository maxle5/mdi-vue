
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeLockOpenOutline from "../../src/components/MdiEyeLockOpenOutline.vue";

test("MdiEyeLockOpenOutline snapshot", () => {
  const wrapper = mount(MdiEyeLockOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
