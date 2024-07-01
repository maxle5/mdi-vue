
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphone from "../../src/components/MdiCellphone.vue";

test("MdiCellphone snapshot", () => {
  const wrapper = mount(MdiCellphone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
