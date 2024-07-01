
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartBrokenOutline from "../../src/components/MdiHeartBrokenOutline.vue";

test("MdiHeartBrokenOutline snapshot", () => {
  const wrapper = mount(MdiHeartBrokenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
