
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteCircleOutline from "../../src/components/MdiDeleteCircleOutline.vue";

test("MdiDeleteCircleOutline snapshot", () => {
  const wrapper = mount(MdiDeleteCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
