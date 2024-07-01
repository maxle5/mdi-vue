
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTabletCellphone from "../../src/components/MdiTabletCellphone.vue";

test("MdiTabletCellphone snapshot", () => {
  const wrapper = mount(MdiTabletCellphone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
