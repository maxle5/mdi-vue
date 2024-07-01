
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountSyncOutline from "../../src/components/MdiAccountSyncOutline.vue";

test("MdiAccountSyncOutline snapshot", () => {
  const wrapper = mount(MdiAccountSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
