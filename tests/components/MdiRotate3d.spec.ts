
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRotate3d from "../../src/components/MdiRotate3d.vue";

test("MdiRotate3d snapshot", () => {
  const wrapper = mount(MdiRotate3d, {});
  expect(wrapper.html()).toMatchSnapshot();
});
