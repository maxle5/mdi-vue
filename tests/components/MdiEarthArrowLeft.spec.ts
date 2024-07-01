
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarthArrowLeft from "../../src/components/MdiEarthArrowLeft.vue";

test("MdiEarthArrowLeft snapshot", () => {
  const wrapper = mount(MdiEarthArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
