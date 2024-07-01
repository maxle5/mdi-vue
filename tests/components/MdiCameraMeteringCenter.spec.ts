
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraMeteringCenter from "../../src/components/MdiCameraMeteringCenter.vue";

test("MdiCameraMeteringCenter snapshot", () => {
  const wrapper = mount(MdiCameraMeteringCenter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
