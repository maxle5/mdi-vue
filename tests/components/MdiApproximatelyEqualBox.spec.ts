
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApproximatelyEqualBox from "../../src/components/MdiApproximatelyEqualBox.vue";

test("MdiApproximatelyEqualBox snapshot", () => {
  const wrapper = mount(MdiApproximatelyEqualBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
