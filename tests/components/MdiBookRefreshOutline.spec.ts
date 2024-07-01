
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookRefreshOutline from "../../src/components/MdiBookRefreshOutline.vue";

test("MdiBookRefreshOutline snapshot", () => {
  const wrapper = mount(MdiBookRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
