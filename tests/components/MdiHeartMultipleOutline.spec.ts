
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartMultipleOutline from "../../src/components/MdiHeartMultipleOutline.vue";

test("MdiHeartMultipleOutline snapshot", () => {
  const wrapper = mount(MdiHeartMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
