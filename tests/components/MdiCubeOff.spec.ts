
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCubeOff from "../../src/components/MdiCubeOff.vue";

test("MdiCubeOff snapshot", () => {
  const wrapper = mount(MdiCubeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
