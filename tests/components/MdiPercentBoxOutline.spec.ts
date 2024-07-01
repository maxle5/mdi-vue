
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPercentBoxOutline from "../../src/components/MdiPercentBoxOutline.vue";

test("MdiPercentBoxOutline snapshot", () => {
  const wrapper = mount(MdiPercentBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
