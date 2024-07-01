
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDistributeVerticalBottom from "../../src/components/MdiDistributeVerticalBottom.vue";

test("MdiDistributeVerticalBottom snapshot", () => {
  const wrapper = mount(MdiDistributeVerticalBottom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
