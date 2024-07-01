
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRotate360 from "../../src/components/MdiRotate360.vue";

test("MdiRotate360 snapshot", () => {
  const wrapper = mount(MdiRotate360, {});
  expect(wrapper.html()).toMatchSnapshot();
});
