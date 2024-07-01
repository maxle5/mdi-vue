
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDistributeHorizontalCenter from "../../src/components/MdiDistributeHorizontalCenter.vue";

test("MdiDistributeHorizontalCenter snapshot", () => {
  const wrapper = mount(MdiDistributeHorizontalCenter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
