
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccessPoint from "../../src/components/MdiAccessPoint.vue";

test("MdiAccessPoint snapshot", () => {
  const wrapper = mount(MdiAccessPoint, {});
  expect(wrapper.html()).toMatchSnapshot();
});
