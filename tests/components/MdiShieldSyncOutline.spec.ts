
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldSyncOutline from "../../src/components/MdiShieldSyncOutline.vue";

test("MdiShieldSyncOutline snapshot", () => {
  const wrapper = mount(MdiShieldSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
