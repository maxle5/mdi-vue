
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEllipseOutline from "../../src/components/MdiEllipseOutline.vue";

test("MdiEllipseOutline snapshot", () => {
  const wrapper = mount(MdiEllipseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
