
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagArrowDownOutline from "../../src/components/MdiTagArrowDownOutline.vue";

test("MdiTagArrowDownOutline snapshot", () => {
  const wrapper = mount(MdiTagArrowDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
