
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDistributeVerticalCenter from "../../src/components/MdiDistributeVerticalCenter.vue";

test("MdiDistributeVerticalCenter snapshot", () => {
  const wrapper = mount(MdiDistributeVerticalCenter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
