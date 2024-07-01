
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPercentCircle from "../../src/components/MdiPercentCircle.vue";

test("MdiPercentCircle snapshot", () => {
  const wrapper = mount(MdiPercentCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
