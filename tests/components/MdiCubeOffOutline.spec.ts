
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCubeOffOutline from "../../src/components/MdiCubeOffOutline.vue";

test("MdiCubeOffOutline snapshot", () => {
  const wrapper = mount(MdiCubeOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
