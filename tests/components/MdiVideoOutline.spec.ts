
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoOutline from "../../src/components/MdiVideoOutline.vue";

test("MdiVideoOutline snapshot", () => {
  const wrapper = mount(MdiVideoOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
