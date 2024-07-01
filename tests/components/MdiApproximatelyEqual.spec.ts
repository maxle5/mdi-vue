
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApproximatelyEqual from "../../src/components/MdiApproximatelyEqual.vue";

test("MdiApproximatelyEqual snapshot", () => {
  const wrapper = mount(MdiApproximatelyEqual, {});
  expect(wrapper.html()).toMatchSnapshot();
});
