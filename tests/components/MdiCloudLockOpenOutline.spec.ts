
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudLockOpenOutline from "../../src/components/MdiCloudLockOpenOutline.vue";

test("MdiCloudLockOpenOutline snapshot", () => {
  const wrapper = mount(MdiCloudLockOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
