
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric5CircleOutline from "../../src/components/MdiNumeric5CircleOutline.vue";

test("MdiNumeric5CircleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric5CircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
