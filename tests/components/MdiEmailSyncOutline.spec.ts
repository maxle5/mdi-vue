
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailSyncOutline from "../../src/components/MdiEmailSyncOutline.vue";

test("MdiEmailSyncOutline snapshot", () => {
  const wrapper = mount(MdiEmailSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
