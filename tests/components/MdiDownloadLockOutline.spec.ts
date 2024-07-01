
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDownloadLockOutline from "../../src/components/MdiDownloadLockOutline.vue";

test("MdiDownloadLockOutline snapshot", () => {
  const wrapper = mount(MdiDownloadLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
