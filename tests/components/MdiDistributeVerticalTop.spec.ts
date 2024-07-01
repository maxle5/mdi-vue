
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDistributeVerticalTop from "../../src/components/MdiDistributeVerticalTop.vue";

test("MdiDistributeVerticalTop snapshot", () => {
  const wrapper = mount(MdiDistributeVerticalTop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
