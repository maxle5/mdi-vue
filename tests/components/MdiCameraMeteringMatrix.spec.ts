
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraMeteringMatrix from "../../src/components/MdiCameraMeteringMatrix.vue";

test("MdiCameraMeteringMatrix snapshot", () => {
  const wrapper = mount(MdiCameraMeteringMatrix, {});
  expect(wrapper.html()).toMatchSnapshot();
});
