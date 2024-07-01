
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPoundBoxOutline from "../../src/components/MdiPoundBoxOutline.vue";

test("MdiPoundBoxOutline snapshot", () => {
  const wrapper = mount(MdiPoundBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
