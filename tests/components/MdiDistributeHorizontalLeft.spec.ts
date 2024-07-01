
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDistributeHorizontalLeft from "../../src/components/MdiDistributeHorizontalLeft.vue";

test("MdiDistributeHorizontalLeft snapshot", () => {
  const wrapper = mount(MdiDistributeHorizontalLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
