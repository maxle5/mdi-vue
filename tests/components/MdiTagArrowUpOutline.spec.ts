
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagArrowUpOutline from "../../src/components/MdiTagArrowUpOutline.vue";

test("MdiTagArrowUpOutline snapshot", () => {
  const wrapper = mount(MdiTagArrowUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
