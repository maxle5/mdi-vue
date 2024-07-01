
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommaCircleOutline from "../../src/components/MdiCommaCircleOutline.vue";

test("MdiCommaCircleOutline snapshot", () => {
  const wrapper = mount(MdiCommaCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
