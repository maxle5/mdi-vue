
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudLockOutline from "../../src/components/MdiCloudLockOutline.vue";

test("MdiCloudLockOutline snapshot", () => {
  const wrapper = mount(MdiCloudLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
