
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUploadLockOutline from "../../src/components/MdiUploadLockOutline.vue";

test("MdiUploadLockOutline snapshot", () => {
  const wrapper = mount(MdiUploadLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
