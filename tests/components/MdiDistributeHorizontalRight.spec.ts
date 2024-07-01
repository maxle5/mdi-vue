
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDistributeHorizontalRight from "../../src/components/MdiDistributeHorizontalRight.vue";

test("MdiDistributeHorizontalRight snapshot", () => {
  const wrapper = mount(MdiDistributeHorizontalRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
