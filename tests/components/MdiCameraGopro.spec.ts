
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraGopro from "../../src/components/MdiCameraGopro.vue";

test("MdiCameraGopro snapshot", () => {
  const wrapper = mount(MdiCameraGopro, {});
  expect(wrapper.html()).toMatchSnapshot();
});
