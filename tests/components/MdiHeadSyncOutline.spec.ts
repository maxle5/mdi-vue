
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadSyncOutline from "../../src/components/MdiHeadSyncOutline.vue";

test("MdiHeadSyncOutline snapshot", () => {
  const wrapper = mount(MdiHeadSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
