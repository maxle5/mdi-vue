
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageRefreshOutline from "../../src/components/MdiImageRefreshOutline.vue";

test("MdiImageRefreshOutline snapshot", () => {
  const wrapper = mount(MdiImageRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
