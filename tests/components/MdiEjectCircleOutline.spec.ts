
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEjectCircleOutline from "../../src/components/MdiEjectCircleOutline.vue";

test("MdiEjectCircleOutline snapshot", () => {
  const wrapper = mount(MdiEjectCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
