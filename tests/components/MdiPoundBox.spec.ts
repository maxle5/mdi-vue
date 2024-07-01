
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPoundBox from "../../src/components/MdiPoundBox.vue";

test("MdiPoundBox snapshot", () => {
  const wrapper = mount(MdiPoundBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
