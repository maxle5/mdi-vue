
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileRefreshOutline from "../../src/components/MdiFileRefreshOutline.vue";

test("MdiFileRefreshOutline snapshot", () => {
  const wrapper = mount(MdiFileRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
