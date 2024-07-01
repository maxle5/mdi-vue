
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraIris from "../../src/components/MdiCameraIris.vue";

test("MdiCameraIris snapshot", () => {
  const wrapper = mount(MdiCameraIris, {});
  expect(wrapper.html()).toMatchSnapshot();
});
