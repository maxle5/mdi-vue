
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewDayOutline from "../../src/components/MdiViewDayOutline.vue";

test("MdiViewDayOutline snapshot", () => {
  const wrapper = mount(MdiViewDayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
