
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraMeteringPartial from "../../src/components/MdiCameraMeteringPartial.vue";

test("MdiCameraMeteringPartial snapshot", () => {
  const wrapper = mount(MdiCameraMeteringPartial, {});
  expect(wrapper.html()).toMatchSnapshot();
});
