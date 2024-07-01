
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudSyncOutline from "../../src/components/MdiCloudSyncOutline.vue";

test("MdiCloudSyncOutline snapshot", () => {
  const wrapper = mount(MdiCloudSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
