
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeRefreshOutline from "../../src/components/MdiEyeRefreshOutline.vue";

test("MdiEyeRefreshOutline snapshot", () => {
  const wrapper = mount(MdiEyeRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
